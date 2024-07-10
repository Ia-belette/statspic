import type { Meta, StoryObj } from '@storybook/react';
import { Harmony } from '@/components/templates/harmony';

const meta = {
  title: 'Templates/Harmony',
  component: Harmony,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Harmony>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
