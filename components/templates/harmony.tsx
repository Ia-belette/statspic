import React from 'react';
import { APP_NAME } from '@/lib/app';
import { cn } from '@/lib/cn';

type ItemProps = {
  id: number;
  name: string;
};

type HarmonyProps = {
  visual?: 'midgnight' | 'black' | 'gobalt' | 'minty';
  topArtists: ItemProps[];
  topSongs: ItemProps[];
  posterUrl: string;
  moment: string;
};

export const HarmonyComponent = ({
  visual = 'midgnight',
  moment,
  posterUrl,
  topArtists,
  topSongs,
}: HarmonyProps) => {
  return (
    <div
      className={cn(
        visual === 'midgnight' && 'bg-midnightBackground',
        visual === 'black' && 'bg-blackBackground',
        visual === 'gobalt' && 'bg-cobaltBackground',
        visual === 'minty' && 'bg-mintBackground',
        'w-[360px] h-[600px] font-[600] flex flex-col text-lg'
      )}
    >
      <div className='overflow-hidden relative flex justify-center items-center py-14'>
        <div
          className={cn(
            `absolute top-[100px] z-0 left-[-20px] w-[200%] h-[50px] text-[23px] uppercase flex justify-center items-center gap-[8px] rotate-[-14deg]`,
            visual === 'midgnight' && 'bg-midnightTitle text-midnightText',
            visual === 'black' && 'bg-blackText text-blackTitle',
            visual === 'gobalt' && 'bg-cobaltTitle text-cobaltText',
            visual === 'minty' && 'bg-mintTitle text-[#F36EBD]'
          )}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>{moment}</span>
          ))}
        </div>
        <img
          src={posterUrl}
          alt='Top items poster'
          className='relative w-auto h-[185px] object-cover z-1'
        />
      </div>
      <div className={'grid grid-cols-2 gap-4 overflow-hidden px-4'}>
        <div className='flex flex-col gap-1 overflow-hidden'>
          <h2
            className={cn(
              visual === 'midgnight' && 'text-midnightTitle',
              visual === 'black' && 'text-blackTitle',
              visual === 'gobalt' && 'text-cobaltTitle',
              visual === 'minty' && 'text-mintTitle'
            )}
          >
            Top Artists
          </h2>
          <ul>
            {topArtists.map((artist: any, i: number) => (
              <li key={artist.id} className='mt-1'>
                <p
                  className={cn(
                    'overflow-hidden whitespace-nowrap text-ellipsis w-full',
                    visual === 'midgnight' && 'text-midnightText',
                    visual === 'black' && 'text-blackText',
                    visual === 'gobalt' && 'text-cobaltText',
                    visual === 'minty' && 'text-mintText'
                  )}
                >
                  #{i + 1} {artist.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-1 overflow-hidden'>
          <h2
            className={cn(
              visual === 'midgnight' && 'text-midnightTitle',
              visual === 'black' && 'text-blackTitle',
              visual === 'gobalt' && 'text-cobaltTitle',
              visual === 'minty' && 'text-mintTitle'
            )}
          >
            Top Songs
          </h2>
          <ul>
            {topSongs.map((song: any, i: number) => (
              <li key={song.id} className='mt-1'>
                <p
                  className={cn(
                    'overflow-hidden whitespace-nowrap text-ellipsis w-full',
                    visual === 'midgnight' && 'text-midnightText',
                    visual === 'black' && 'text-blackText',
                    visual === 'gobalt' && 'text-cobaltText',
                    visual === 'minty' && 'text-mintText'
                  )}
                >
                  #{i + 1} {song.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='p-4 flex justify-between mt-auto'>
        <p
          className={cn(
            visual === 'midgnight' && 'text-midnightTitle',
            visual === 'black' && 'text-blackTitle',
            visual === 'gobalt' && 'text-cobaltTitle',
            visual === 'minty' && 'text-mintTitle',
            'uppercase'
          )}
        >
          {moment}
        </p>
        <p
          className={cn(
            visual === 'midgnight' && 'text-midnightTitle',
            visual === 'black' && 'text-blackTitle',
            visual === 'gobalt' && 'text-cobaltTitle',
            visual === 'minty' && 'text-mintTitle',
            'uppercase'
          )}
        >
          {APP_NAME}
        </p>
      </div>
    </div>
  );
};
