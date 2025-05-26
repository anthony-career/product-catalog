import { ProductRepository } from "lib/repositories/product.repository";

export const GET = async () => {
  try {
    const data = await ProductRepository.getAll();

    return Response.json({ data, success: true, meta: { total: data.length } });
  } catch (error) {
    return Response.json({
      success: false,
      error: {
        code: "500",
        detail: {
          error,
        },
      },
    });
  }
};
