import { auth } from '@/lib/auth/auth';
import { Zoom } from '@/components/zoom';
import { redirect } from 'next/navigation';
import { WhatIsThis } from '@/components/what-is-this';
import { DotGrid } from '@/components/dot-grid';
import { RenderSelectedTheme, ThemeSelector } from '@/components/theme-filter';
import { TOP_ARTISTS, TOP_SONGS } from '@/fake-data';

const Page = async () => {
  const user = await auth();

  if (!user) {
    redirect('/');
  }

  return (
    <main className='min-h-screen grid grid-rows-10 md:grid-rows-none md:grid-cols-12'>
      <div className='relative row-span-6 md:row-span-12 md:col-span-8 flex justify-center items-center text-xl bg-[--gray-2]'>
        <WhatIsThis />
        <DotGrid />
        <Zoom>
          <RenderSelectedTheme
            topArtists={TOP_ARTISTS}
            topSongs={TOP_SONGS}
            moment='JUNE'
            posterUrl={TOP_ARTISTS[0].poster}
          />
        </Zoom>
      </div>
      <div className='row-span-4 md:row-span-12 md:col-span-4 flex justify-center items-center text-2xl bg-[--gray-1]'>
        <ThemeSelector />
      </div>
    </main>
  );
};

export default Page;
