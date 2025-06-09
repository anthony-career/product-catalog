import { Typography } from "components/design-system/Typography";

export const RelatedProducts = () => {
  return (
    <div className='mt-12'>
      <Typography variant='h2' color='primary' className='mb-6'>
        Related Products
      </Typography>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white overflow-hidden shadow-soft hover:shadow-hover transition-shadow'>
          <img
            src='https://placehold.co/400x400'
            alt='Related Product'
            className='w-full h-48 object-cover'
          />
          <div className='p-4'>
            <Typography variant='h3' color='primary'>
              Basic White Tee
            </Typography>
            <Typography variant='body1' color='primary' className='font-bold'>
              $24.99
            </Typography>
            <div className='flex items-center mt-2'>
              <div className='w-2 h-2 rounded-full bg-primary'></div>
              <Typography variant='body2' color='accent' className='ml-2'>
                In Stock
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
