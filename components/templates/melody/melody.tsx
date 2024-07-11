import { CURRENT_MONTH } from '@/lib/current-month';
import { APP_NAME } from '@/lib/app';
import { melody, posterImage, infoContainer, footer } from './styles';

type MelodyProps = {
  visual: 'crimson' | 'sky' | 'yellow';
  type: 'artist' | 'song';
  name: string;
  posterUrl: string;
};

export const Melody = ({ visual, type, name, posterUrl }: MelodyProps) => {
  const classes = melody({ visual });
  return (
    <div className={classes.root}>
      <div className={infoContainer}>
        <p className={classes.text}>
          {CURRENT_MONTH} top {type}
        </p>
        <h1 className={classes.title}>{name}</h1>
      </div>
      <img src={posterUrl} alt={`Image of ${name}`} className={posterImage} />
      <div className={footer}>
        <p className={classes.text}>{APP_NAME}</p>
      </div>
    </div>
  );
};
