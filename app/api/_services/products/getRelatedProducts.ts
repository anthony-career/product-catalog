"use server";
import { ProductRepository } from "lib/repositories/products/repository";

export const getRelatedProducts = async (id: number) => {
  const relatedProducts = await ProductRepository.getRelatedProductsById(id);
  return relatedProducts;
};
