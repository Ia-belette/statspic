import { RecipeVariantProps, css, sva } from '../../../styled-system/css';

const textStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
};

export const harmony = sva({
  slots: ['root', 'title', 'text', 'credit'],
  base: {
    root: {
      width: 360,
      height: 600,
      fontWeight: 600,
      display: 'flex',
      flexDirection: 'column',
      fontSize: 18,
    },
  },
  variants: {
    visual: {
      midgnight: {
        root: {
          backgroundColor: 'midnightBackground',
        },
        title: {
          color: 'midnightTitle',
        },
        text: {
          color: 'midnightText',
          ...textStyle,
        },
        credit: {
          color: 'midnightTitle',
          textTransform: 'uppercase',
        },
      },
      black: {
        root: {
          backgroundColor: 'blackBackground',
        },
        title: {
          color: 'blackTitle',
        },
        text: {
          color: 'blackText',
          ...textStyle,
        },
        credit: {
          color: 'blackTitle',
          textTransform: 'uppercase',
        },
      },
      gobalt: {
        root: {
          backgroundColor: 'cobaltBackground',
        },
        title: {
          color: 'cobaltTitle',
        },
        text: {
          color: 'cobaltText',
          ...textStyle,
        },
        credit: {
          color: 'cobaltTitle',
          textTransform: 'uppercase',
        },
      },
      minty: {
        root: {
          backgroundColor: 'mintBackground',
        },
        title: {
          color: 'mintTitle',
        },
        text: {
          color: 'mintText',
          ...textStyle,
        },
        credit: {
          color: 'mintTitle',
          textTransform: 'uppercase',
        },
      },
    },
  },
  defaultVariants: {
    visual: 'midgnight',
  },
});

export type Harmony = RecipeVariantProps<typeof harmony>;

export const posterContainer = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 16,
  paddingBottom: 14,
});

export const posterImage = css({
  width: 'auto',
  height: 165,
  objectFit: 'cover',
});

export const topSection = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 4,
  paddingInline: 4,
});

export const listSection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  overflow: 'hidden',
});

export const listItem = css({
  marginTop: 1,
});

export const footer = css({
  padding: 4,
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',
  color: 'midnights-text',
});
