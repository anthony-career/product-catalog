import { dbClient } from "lib/db/client";
import {
  createOrderByExpression,
  createPaginationConfig,
  createWhereExpression,
} from "./utils";
import { ProductFilters } from "domain/product/model";

export async function getAll(filters?: ProductFilters) {
  const where = createWhereExpression(filters);
  const count = await dbClient.product.count({
    where,
  });
  const meta = {
    total: count,
    page: filters?.pagination?.page || 1,
    limit: filters?.pagination?.limit || 10,
  };
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
