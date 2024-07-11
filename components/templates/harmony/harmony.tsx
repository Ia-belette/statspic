import {
  harmony,
  posterImage,
  posterContainer,
  topSection,
  listSection,
  listItem,
  footer,
  Harmony as HarmonyType,
} from '@/components/templates/harmony/styles';

import { CURRENT_MONTH } from '@/lib/current-month';
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
  visual = 'midgnight',
}: HarmonyProps) => {
  const classes = harmony({ visual });

  return (
    <div className={classes.root}>
      <div className={posterContainer}>
        <div className={classes.backgroundMonth}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>{CURRENT_MONTH}</span>
          ))}
        </div>
        <img src={posterUrl} alt='Top items poster' className={posterImage} />
      </div>
      <div className={topSection}>
        <div className={listSection}>
          <h2 className={classes.title}>Top Artists</h2>
          <ul>
            {topArtists.map((artist, i) => (
              <li key={artist.id} className={listItem}>
                <p className={classes.text}>
                  #{i + 1} {artist.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={listSection}>
          <h2 className={classes.title}>Top Songs</h2>
          <ul>
            {topSongs.map((song, i) => (
              <li key={song.id} className={listItem}>
                <p className={classes.text}>
                  #{i + 1} {song.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={footer}>
        <p className={classes.credit}>{CURRENT_MONTH}</p>
        <p className={classes.credit}>{APP_NAME}</p>
      </div>
    </div>
  );
};
