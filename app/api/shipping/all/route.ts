import { ShippingRepository } from "lib/repositories/shipping.repository"

export const GET = async() => {
  try {
    const data = await ShippingRepository.getAll()
    return Response.json({success: true, data})
  } catch (error) {
    return Response.json({success: false, error: {
      code: 500, 
      details: {
        type: "DB_ERROR", 
        error
      }
    }})
  }
}