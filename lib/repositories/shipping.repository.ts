import { dbClient } from "lib/db/client"

async function getAll() {
return await dbClient.shipping.findMany()
}


export const ShippingRepository = {
  getAll
}