import { APP_NAME } from '@/lib/app';
import { cn } from '@/lib/cn';
import { CURRENT_MONTH } from '@/lib/current-month';

type Item = {
  poster: string;
  name: string;
  artists?: string[];
};

type Symphony = {
  visual: 'lime' | 'tomato';
  type: 'Songs' | 'Artists';
  items: Item[];
  moment: string;
};

export const Symphony = ({
  visual,
  items,
  type = 'Songs',
  moment,
}: Symphony) => {
  return (
    <div
      className={cn(
        'w-[360px] h-[600px] p-4 flex flex-col',
        visual === 'lime' && 'bg-limeBackground',
        visual === 'tomato' && 'bg-tomatoBackground'
      )}
    >
      <h1
        className={cn(
          'mt-3 text-[22px] font-[570]',
          visual === 'lime' && 'text-limeTitle',
          visual === 'tomato' && 'text-tomatoTitle'
        )}
      >
        Your Top {type}
      </h1>
      <ul>
        {items.map((item, i) => (
          <li key={item.name} className={'flex items-center gap-[10px] mt-4'}>
            <div className={'flex items-center min-w-[100px] gap-4'}>
              <span
                className={cn(
                  'text-[35px] font-[590] min-w-[40px]',
                  visual === 'lime' && 'text-limeTitle',
                  visual === 'tomato' && 'text-tomatoTitle'
                )}
              >
                #{i + 1}{' '}
              </span>
              <img
                src={item.poster}
                alt={item.name}
                className={'w-[75px] h-[75px] object-cover'}
              />
            </div>
            <div className={'flex flex-col flex-1 overflow-hidden'}>
              <h2
                className={cn(
                  'font-[570] text-base overflow-hidden text-nowrap text-ellipsis w-full',
                  visual === 'lime' && 'text-limeTitle',
                  visual === 'tomato' && 'text-tomatoTitle'
                )}
              >
                {item.name}
              </h2>
              {item.artists && (
                <p
                  className={cn(
                    'text-[14px] font-[500] overflow-hidden text-nowrap text-ellipsis w-full',
                    visual === 'lime' && 'text-limeTitle',
                    visual === 'tomato' && 'text-tomatoTitle'
                  )}
                >
                  {item.artists.join(', ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div
        className={cn(
          'flex justify-between mt-auto uppercase font-[570]',
          visual === 'lime' && 'text-limeTitle',
          visual === 'tomato' && 'text-tomatoTitle'
        )}
      >
        <p>{CURRENT_MONTH}</p>
        <p>{APP_NAME}</p>
      </div>
    </div>
  );
};
