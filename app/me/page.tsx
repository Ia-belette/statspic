import { auth } from '@/lib/auth/auth';
import { Zoom } from '@/components/zoom';
import { redirect } from 'next/navigation';

const Page = async () => {
  const user = await auth();

  if (!user) {
    redirect('/');
  }

  return (
    <main className='min-h-screen grid grid-rows-10 md:grid-rows-none md:grid-cols-12'>
      <div className='relative row-span-6 md:row-span-12 md:col-span-8 flex justify-center items-center text-xl bg-[--gray-2]'>
        <div className='dot'></div>
        <Zoom>
          <div className='!w-[360px] !h-[300px] bg-red-500'></div>
        </Zoom>
      </div>
      <div className='row-span-4 md:row-span-12 md:col-span-4 flex justify-center items-center text-2xl bg-[--gray-1]'>
        Controls
      </div>
    </main>
  );
};

export default Page;
