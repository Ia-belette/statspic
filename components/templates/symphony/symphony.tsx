import { CURRENT_MONTH } from '@/lib/current-month';
import {
  dataContainer,
  listItem,
  posterImage,
  posterContainer,
  symphony,
  Symphony as SymphonyType,
} from './styles';
import { APP_NAME } from '@/lib/app';

type Item = {
  poster: string;
  name: string;
  artists?: string[];
};

type Symphony = SymphonyType & {
  type: 'Songs' | 'Artists';
  items: Item[];
};

export const Symphony = ({ visual, items, type = 'Songs' }: Symphony) => {
  const classes = symphony({ visual });

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Your Top {type}</h1>
      <ul>
        {items.map((item, i) => (
          <li key={item.name} className={listItem}>
            <div className={posterContainer}>
              <span className={classes.index}>#{i + 1} </span>
              <img src={item.poster} alt={item.name} className={posterImage} />
            </div>
            <div className={dataContainer}>
              <h2 className={classes.subtitle}>{item.name}</h2>
              {item.artists && (
                <p className={classes.text}>{item.artists.join(', ')}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.footer}>
        <p>{CURRENT_MONTH}</p>
        <p>{APP_NAME}</p>
      </div>
    </div>
  );
};
