import { cn } from '@/lib/cn';

type MelodyProps = {
  visual: 'crimson' | 'sky' | 'yellow';
  type: 'artist' | 'song';
  name: string;
  posterUrl: string;
  moment: string;
};

export const Melody = ({
  visual = 'crimson',
  type,
  name,
  posterUrl,
  moment,
}: MelodyProps) => {
  return (
    <div
      className={cn(
        `h-[360px] w-[360px] relative`,
        visual === 'crimson' && 'bg-crimsonBackground',
        visual === 'sky' && 'bg-skyBackground',
        visual === 'yellow' && 'bg-yellowBackground'
      )}
    >
      <div className={'p-4 flex flex-col gap-1'}>
        <p
          className={cn(
            visual === 'crimson' && 'text-crimsonText',
            visual === 'sky' && 'text-skyText',
            visual === 'yellow' && 'text-yellowText',
            'uppercase font-[560] text-base'
          )}
        >
          {moment} top {type}
        </p>
        <h1
          className={cn(
            visual === 'crimson' && 'text-crimsonTitle',
            visual === 'sky' && 'text-skyTitle',
            visual === 'yellow' && 'text-yellowTitle',
            'uppercase font-[600] text-[1.3rem]'
          )}
        >
          {name}
        </h1>
      </div>
      <img
        src={posterUrl}
        alt={`Image of ${name}`}
        className={'absolute bottom-0 h-[250px] w-[250px] object-cover'}
      />
      <div className={'absolute bottom-4 right-5 text-xl'}>
        <p
          className={cn(
            visual === 'crimson' && 'text-crimsonText',
            visual === 'sky' && 'text-skyText',
            visual === 'yellow' && 'text-yellowText',
            'uppercase font-[560] text-base'
          )}
        >
          STATSPIC
        </p>
      </div>
    </div>
  );
};

export default Melody;
