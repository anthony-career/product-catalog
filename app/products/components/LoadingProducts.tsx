export function LoadingProducts() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className='bg-white rounded-lg shadow-sm overflow-hidden animate-pulse'
        >
          <div className='aspect-square bg-gray-200' />
          <div className='p-4 space-y-3'>
            <div className='h-4 bg-gray-200 rounded w-3/4' />
            <div className='h-4 bg-gray-200 rounded w-1/2' />
            <div className='h-3 bg-gray-200 rounded w-1/3' />
          </div>
        </div>
      ))}
    </div>
  );
}
