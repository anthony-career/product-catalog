import { Typography } from "components/design-system/Typography";
import { ProductsContent } from "./components/ProductsContent";
import { ProductsProvider } from "./state-management/Provider";

export default function ProductsPage() {
  return (
    <div className='w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col h-full'>
      <div className='mb-8 flex-none'>
        <Typography variant='h1' color='accent'>
          Our Products
        </Typography>
        <Typography variant='body1'>Discover our latest collection</Typography>
      </div>

      <div className='flex flex-col h-full'>
        <ProductsProvider>
          <ProductsContent />
        </ProductsProvider>
      </div>
    </div>
  );
}
