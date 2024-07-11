import type { Meta, StoryObj } from '@storybook/react';
import { Melody } from '@/components/templates/melody';

const meta = {
  title: 'Templates/Melody',
  component: Melody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Melody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defalut: Story = {} satisfies Story;
