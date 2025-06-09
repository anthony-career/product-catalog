import { Button } from "components/design-system/Button";
import { useState } from "react";

import { productDetailTabs } from "../resources";
import { ProductDescriptionSegment } from "./ProductDescriptionSegment";
import { ProductReviewSegment } from "./ProductReview";
import { ProductShippingSegment } from "./ProductShippingSegment";

export const ProductInformation = () => {
  const [tab, setTab] = useState(productDetailTabs[0].value);

  const handleTabChange = (value: string) => {
    setTab(value);
  };

  return (
    <div className='mt-12 bg-white shadow-soft'>
      <div className='border-b border-gray-100'>
        <nav className='flex flex-wrap gap-4'>
          {productDetailTabs.map((option) => (
            <Button
              key={option.value}
              variant={option.value === tab ? "primary" : "ghost"}
              className='py-4 px-1 uppercase tracking-wide text-sm rounded-none'
              onClick={() => handleTabChange(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </nav>
      </div>

      <div className='py-6 px-4'>
        {tab === "Description" && <ProductDescriptionSegment />}
        {tab === "Reviews" && <ProductReviewSegment />}
        {tab === "Shipping" && <ProductShippingSegment />}
      </div>
    </div>
  );
};
