import { sva, css, RecipeVariantProps } from '../../../styled-system/css';

const itemIndex = {
  fontSize: '35px',
  fontWeight: '590',
  minWidth: '40px',
};

const itemTitle = {
  marginTop: '3',
  fontSize: '22px',
  fontWeight: '570',
};

const itemSubtitle = {
  fontWeight: '570',
  fontSize: '16px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
};

const itemText = {
  fontSize: '14px',
  fontWeight: '500',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: '100%',
};

const cardFooter = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',
  textTransform: 'uppercase',
  fontWeight: '570',
};

export const symphony = sva({
  slots: ['root', 'title', 'subtitle', 'text', 'index', 'footer'],
  base: {
    root: {
      width: 360,
      height: 600,
      padding: 4,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  variants: {
    visual: {
      lime: {
        root: {
          backgroundColor: 'limeBackground',
        },
        title: {
          color: 'midnightBackground',
          ...itemTitle,
        },
        subtitle: {
          color: 'limeTitle',
          ...itemSubtitle,
        },
        text: {
          color: 'limeText',
          ...itemText,
        },
        index: {
          color: 'limeText',
          ...itemIndex,
        },
        footer: {
          color: 'limeText',
          ...cardFooter,
        },
      },
      tomato: {
        root: {
          backgroundColor: 'tomatoBackground',
        },
        title: {
          color: 'tomatoTitle',
          ...itemTitle,
        },
        subtitle: {
          color: 'tomatoTitle',
          ...itemSubtitle,
        },
        text: {
          color: 'tomatoText',
          ...itemText,
        },
        index: {
          color: 'tomatoText',
          ...itemIndex,
        },
        footer: {
          color: 'tomatoTitle',
          ...cardFooter,
        },
      },
    },
  },
  defaultVariants: {
    visual: 'lime',
  },
});

export type Symphony = RecipeVariantProps<typeof symphony>;

export const listItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '4',
});

export const posterContainer = css({
  display: 'flex',
  alignItems: 'center',
  minWidth: '100px',
  gap: '4',
});

export const posterImage = css({
  width: '75px',
  height: '75px',
  objectFit: 'cover',
});

export const dataContainer = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
});
