import { Product } from "@prisma/client";
import { getRelatedProducts } from "app/api/_services/products/getRelatedProducts";
import { useEffect, useState } from "react";

export const useRelatedProducts = (id: number) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setIsLoading(true);
        const relatedProducts = await getRelatedProducts(id);
        console.log(relatedProducts);
        setRelatedProducts(relatedProducts.data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch related products");
        setIsLoading(false);
      }
    };
    fetchRelatedProducts();
  }, [id]);

  return { relatedProducts, isLoading, error };
};
