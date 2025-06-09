import { Skeleton } from "components/design-system/Skeleton";

export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-4'>
          <Skeleton className='w-full aspect-square rounded-lg' />
          <div className='grid grid-cols-4 gap-4'>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className='w-full aspect-square rounded-lg' />
            ))}
          </div>
        </div>

        <div className='space-y-6'>
          <div className='space-y-2'>
            <Skeleton className='h-8 w-3/4' />
            <Skeleton className='h-6 w-1/4' />
          </div>

          <div className='space-y-4'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-5/6' />
            <Skeleton className='h-4 w-4/6' />
          </div>

          <div className='space-y-2'>
            <Skeleton className='h-10 w-32' />
            <div className='flex items-center gap-4'>
              <Skeleton className='h-10 w-24' />
              <Skeleton className='h-10 w-32' />
            </div>
          </div>

          <div className='space-y-2'>
            <Skeleton className='h-4 w-1/4' />
            <div className='grid grid-cols-2 gap-4'>
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className='h-4 w-full' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
