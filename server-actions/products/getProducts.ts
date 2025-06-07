"use server";

import { ProductFilters } from "domain/product.model";
import { ProductRepository } from "lib/repositories/products/repository";

export async function getProducts(filters: ProductFilters) {
  try {
    const products = await ProductRepository.getAll(filters);
    return products;
  } catch (error) {
    throw error;
  }
}
