import React, { CSSProperties, ComponentProps } from 'react';
import { RecipeVariantProps, css, cva, cx } from '../../styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 'full',
  },
  variants: {
    visual: {
      primary: {
        bg: '#46A758',
        color: 'white',
        _hover: {
          bg: '#53B365',
        },
        _focus: {
          ring: '3px solid #46A758',
          ringOffset: '2px',
        },
        _active: {
          ring: '4px solid #11ff992d',
          ringOffset: '0px',
        },
      },
    },
    size: {
      md: {
        py: '10px',
        px: '14px',
        fontSize: '14px',
        letterSpacing: '0px',
        lineHeight: '20px',
        fontWeight: '500',
      },
      lg: {
        py: '10px',
        px: '16px',
        fontSize: '16px',
        letterSpacing: '0px',
        lineHeight: '24px',
        fontWeight: '600',
      },
      xl: {
        py: '12px',
        px: '18px',
        fontSize: '16px',
        letterSpacing: '0px',
        lineHeight: '24px',
        fontWeight: '600',
      },
    },
  },
  defaultVariants: {
    visual: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    children: React.ReactNode;
  };

export const Button = (props: ButtonProps) => {
  const { children, visual, size } = props;
  return <button className={button({ visual, size })}>{children}</button>;
};
