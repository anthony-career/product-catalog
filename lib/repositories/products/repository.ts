import { getAll } from "./getAll";
import { getRelatedProductsById } from "./getRelatedProductsById";
import { getOneById } from "./getOneById";

export const ProductRepository = {
  getAll,
  getOneById,
  getRelatedProductsById,
};
