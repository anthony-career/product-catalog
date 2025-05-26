import { dbClient } from "lib/db/client";

async function getAll() {
  return await dbClient.product.findMany();
}

async function getOneById(id:number) {
  return await dbClient.product.findUnique({where: {
    id
  }, include: {
    shipping: true
  }})
}

export const ProductRepository = {
  getAll,
  getOneById
};
