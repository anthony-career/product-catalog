import { ProductRepository } from "lib/repositories/product.repository"
import { isValidPositiveInt } from "utils/helper-fns/isValidPositiveInt"

interface SlugParams {
  params: Promise<{id: string}>
}




export const GET = async (_: any, {params}: SlugParams) => {
  try {
    const  {id} = await params
    const isValidId = isValidPositiveInt(id)
    if(!isValidId) throw new Error("invalid_product_id")
    const product = await ProductRepository.getOneById(parseInt(id))
    return Response.json({
      success: true, 
      data: product, meta: {total: product ? 1 :0}
    })
    
  } catch (error: any) {
    if(error.message ==="invalid_product_id") {
      return Response.json({
      success: false, error: {
        code: 400, 
      details: {
        type: "INVALID_REQUEST", 
        error: {
          message: "unable to parse id to number"
        }
      }
      }
    })
    }
    return Response.json({
      success: false, error: {
        code: 500, 
      details: {
        type: "DB_ERROR", 
        error
      }
      }
    })
  }
}