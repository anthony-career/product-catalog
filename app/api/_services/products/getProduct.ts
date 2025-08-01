"use server";

import { ProductRepository } from "lib/repositories/products/repository";

export const getProduct = async (id: number) => {
  const product = await ProductRepository.getOneById(id);
  return product;
};
