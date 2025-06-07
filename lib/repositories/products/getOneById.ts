import { dbClient } from "lib/db/client";

export async function getOneById(id: number) {
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
