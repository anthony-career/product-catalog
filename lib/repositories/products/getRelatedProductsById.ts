import { dbClient } from "lib/db/client";

export const getRelatedProductsById = async (id: number) => {
  const product = await dbClient.product.findUnique({
    where: { id },
    select: { category: true },
  });

  if (!product) {
    return {
      data: [],
      meta: {
        total: 0,
      },
    };
  }

  const relatedProducts = await dbClient.product.findMany({
    where: {
      category: product?.category,
      id: { not: id },
    },
    take: 10,
  });

  const meta = {
    total: relatedProducts.length,
  };

  return {
    data: relatedProducts,
    meta,
  };
};
