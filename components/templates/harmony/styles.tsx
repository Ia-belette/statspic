import { RecipeVariantProps, css, sva } from '../../../styled-system/css';

export const harmony = sva({
  slots: ['root', 'title', 'text', 'credit'],
  base: {
    root: {
      width: 360,
      height: 600,
      fontWeight: '570',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '18',
    },
  },
  variants: {
    visual: {
      midgnights: {
        root: {
          backgroundColor: 'midnights',
        },
        title: {
          color: 'midnights-title',
        },
        text: {
          color: 'midnights-text',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
        },
        credit: {
          color: 'midnights-title',
          textTransform: 'uppercase',
        },
      },
      'like-that': {
        root: {
          backgroundColor: 'like-that',
        },
        title: {
          color: 'like-that-title',
        },
        text: {
          color: 'like-that-text',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
        },
        credit: {
          color: 'like-that-title',
          textTransform: 'uppercase',
        },
      },
      gobalt: {
        root: {
          backgroundColor: 'gobalt',
        },
        title: {
          color: 'gobalt-title',
        },
        text: {
          color: 'gobalt-text',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
        },
        credit: {
          color: 'gobalt-title',
          textTransform: 'uppercase',
        },
      },
      minty: {
        root: {
          backgroundColor: 'minty',
        },
        title: {
          color: 'minty-title',
        },
        text: {
          color: 'minty-text',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
        },
        credit: {
          color: 'minty-title',
          textTransform: 'uppercase',
        },
      },
    },
  },
  defaultVariants: {
    visual: 'midgnights',
  },
});

export type Harmony = RecipeVariantProps<typeof harmony>;

export const imgContainer = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pt: '16',
  pb: '14',
});

export const img = css({
  width: 'auto',
  height: '165px',
  objectFit: 'cover',
});

export const topWrapper = css({
  display: 'grid',
  gridColumnStart: '2',
  gridTemplateColumns: '1fr 1fr',
  gap: '4',
  px: '4',
});

export const listWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  overflow: 'hidden',
});

export const list = css({
  mt: '1',
});

export const credit = css({
  p: '4',
  display: 'flex',
  justifyContent: 'space-between',
  mt: 'auto',
  color: 'midnights-text',
});
