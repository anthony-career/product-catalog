import { Prisma } from "@prisma/client";
import { ProductFilters, ProductSortCategory } from "domain/product.model";
import { dbClient } from "lib/db/client";

const checkIsValidPriceRangeIndexValue = (indexValue: string) => {
  const validStrs = ["under", "plus"];
  const isNum = !isNaN(parseInt(indexValue));
  const isValidStr = validStrs.includes(indexValue);
  return isNum || isValidStr;
};

const checkIsValidPriceRangeString = (priceRange?: string) => {
  if (!priceRange) return false;
  const asArr = priceRange.split("-");
  return (
    asArr.length === 2 &&
    checkIsValidPriceRangeIndexValue(asArr[0]) &&
    checkIsValidPriceRangeIndexValue(asArr[1])
  );
};

const createPriceRangeExpression = (priceRange?: string) => {
  if (!priceRange) return null;
  const isValid = checkIsValidPriceRangeString(priceRange);
  if (!isValid) return null;
  const asArr = priceRange.split("-");
  const first = asArr[0];
  const second = asArr[1];
  if (first === "under") {
    return { lt: parseInt(second) };
  }
  if (first === "plus") {
    return { gt: parseInt(second) };
  }
  if (second === "plus") {
    return { gte: parseInt(first) };
  }
  if (second === "under") {
    return { lt: parseInt(first) };
  }
  return { gte: parseInt(first), lte: parseInt(second) };
};

const createWhereExpression = (filters?: ProductFilters) => {
  if (!filters) return {};

  const where: Prisma.ProductWhereInput = {};

  if (filters.search) {
    where.name = {
      contains: filters.search,
      mode: "insensitive",
    };
  }
  if (filters.priceRange && filters.priceRange !== "all") {
    const priceRange = createPriceRangeExpression(filters.priceRange);
    if (priceRange) {
      {
        where.price = priceRange;
      }
    }
  }

  return where;
};

const createOrderByExpression = (sortCategory?: ProductSortCategory) => {
  if (!sortCategory) return {};
  const orderBy: Prisma.ProductOrderByWithRelationInput = {};

  switch (sortCategory) {
    case "price-low-high":
      orderBy.price = "asc";
      break;
    case "price-high-low":
      orderBy.price = "desc";
      break;
    case "newest":
      orderBy.createdAt = "desc";
      break;
  }

  return orderBy;
};

const createPaginationConfig = (pagination?: {
  page: number;
  limit: number;
}): { skip?: number; take?: number } => {
  if (!pagination) return {};
  return {
    skip: (pagination.page - 1) * pagination.limit,
    take: pagination.limit,
  };
};

async function getAll(filters?: ProductFilters) {
  const count = await dbClient.product.count({
    where: createWhereExpression(filters),
  });
  const meta = {
    total: count,
    page: filters?.pagination?.page || 1,
    limit: filters?.pagination?.limit || 10,
  };
  const where = createWhereExpression(filters);
  const orderBy = createOrderByExpression(filters?.sortCategory);
  const paginationConfig = createPaginationConfig(filters?.pagination);
  const data = await dbClient.product.findMany({
    where,
    orderBy,
    ...paginationConfig,
  });
  return {
    data,
    meta,
  };
}

async function getOneById(id: number) {
  const meta = {};
  const data = await dbClient.product.findUnique({
    where: {
      id,
    },
    include: {
      shipping: true,
    },
  });

  return {
    data,
    meta,
  };
}

export const ProductRepository = {
  getAll,
  getOneById,
};
