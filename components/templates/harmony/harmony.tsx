import { CURRENT_MONTH } from '@/lib/current-month';
import {
  harmony,
  img,
  imgContainer,
  topWrapper,
  listWrapper,
  list,
  credit,
  Harmony as HarmonyType,
} from './styles';

import { APP_NAME } from '@/lib/app';

type ItemProps = {
  id: number;
  name: string;
};

type HarmonyProps = HarmonyType & {
  topArtists: ItemProps[];
  topSongs: ItemProps[];
  posterUrl: string;
};

export const Harmony = ({
  topArtists,
  topSongs,
  posterUrl,
  visual = 'midgnights',
}: HarmonyProps) => {
  const classes = harmony({ visual });

  return (
    <div className={classes.root}>
      <div className={imgContainer}>
        <img src={posterUrl} alt='poster' className={img} />
      </div>
      <div className={topWrapper}>
        <div className={listWrapper}>
          <h2 className={classes.title}>Top Artists</h2>
          <ul>
            {topArtists.map((artist, i) => (
              <li key={artist.id} className={list}>
                <p className={classes.text}>
                  #{i + 1} {artist.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={listWrapper}>
          <h2 className={classes.title}>Top Songs</h2>
          <ul>
            {topSongs.map((artist, i) => (
              <li key={artist.id} className={list}>
                <p className={classes.text}>
                  #{i + 1} {artist.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={credit}>
        <p className={classes.credit}>{CURRENT_MONTH}</p>
        <p className={classes.credit}>{APP_NAME}</p>
      </div>
    </div>
  );
};
