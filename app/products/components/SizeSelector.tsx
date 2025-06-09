import { Button } from "components/design-system/Button";
import { Fragment } from "react";

export const SizeSelector = ({
  selectedSize,
  setSelectedSize,
}: {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) => {
  return (
    <Fragment>
      {["S", "M", "L", "XL"].map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "primary" : "outline"}
          onClick={() => setSelectedSize(size)}
          className='px-4 py-2'
        >
          {size}
        </Button>
      ))}
    </Fragment>
  );
};
