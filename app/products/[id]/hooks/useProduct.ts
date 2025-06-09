import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { getProduct } from "server-actions/products/getProduct";
import { isValidId } from "utils/validation";

export const useProduct = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isValidId(id)) {
      setProduct(null);
      setError("Invalid product ID");
      return;
    }
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProduct(Number(id));
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch product");
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
};
