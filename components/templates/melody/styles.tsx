import { sva, css, RecipeVariantProps } from '../../../styled-system/css';

export const melody = sva({
  slots: ['root', 'title', 'text'],
  base: {
    root: {
      width: 360,
      height: 360,
      position: 'relative',
    },
  },
  variants: {
    visual: {
      crimson: {
        root: {
          backgroundColor: 'crimsonBackground',
        },
        title: {
          color: 'crimsonTitle',
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.3rem',
        },
        text: {
          color: 'crimsonText',
          textTransform: 'uppercase',
          fontWeight: '560',
          fontSize: 'md',
        },
      },
      sky: {
        root: {
          backgroundColor: 'skyBackground',
        },
        title: {
          color: 'skyTitle',
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.3rem',
        },
        text: {
          color: 'skyText',
          textTransform: 'uppercase',
          fontWeight: '560',
          fontSize: 'md',
        },
      },
      yellow: {
        root: {
          backgroundColor: 'yellowBackground',
        },
        title: {
          color: 'yellowTitle',
          textTransform: 'uppercase',
          fontWeight: '600',
          fontSize: '1.3rem',
        },
        text: {
          color: 'yellowText',
          textTransform: 'uppercase',
          fontWeight: '560',
          fontSize: 'md',
        },
      },
    },
  },
  defaultVariants: {
    visual: 'crimson',
  },
});

export type Melody = RecipeVariantProps<typeof melody>;

export const posterImage = css({
  position: 'absolute',
  bottom: 0,
  height: '250px',
  width: '250px',
  objectFit: 'cover',
});

export const infoContainer = css({
  p: '4',
  display: 'flex',
  flexDirection: 'column',
  gap: '-0.5',
});

export const footer = css({
  position: 'absolute',
  bottom: 4,
  right: 5,
  fontSize: 'xl',
});
