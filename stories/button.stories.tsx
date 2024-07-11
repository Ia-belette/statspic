import type { Meta, StoryObj } from '@storybook/react';
import { Button, button } from '@/components/ui/button';
import { css } from '@/styled-system/css';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      name: 'Size',
      description: 'Button size',
      control: {
        type: 'select',
        labels: {
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra Large',
        },
      },
      options: ['md', 'lg', 'xl'],
    },
    visual: {
      name: 'Visual',
      description: 'Visual theme',
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
        },
      },
      options: ['primary', 'secondary'],
    },
  },
  args: {
    visual: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonMedium: Story = {
  args: {
    children: 'Sign In with Spotify',
    size: 'md',
  },
};

export const ButtonLarge: Story = {
  args: {
    children: 'Sign In with Spotify',
    size: 'lg',
  },
};
