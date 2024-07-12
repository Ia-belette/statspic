import type { Meta, StoryObj } from '@storybook/react';
import { Symphony } from '@/components/templates/symphony';
import { TOP_ARTISTS, TOP_SONGS } from '@/fake-data';

const meta: Meta = {
  title: 'Templates/Symphony',
  parameters: {
    layout: 'centered',
  },
  component: Symphony,
  argTypes: {
    visual: {
      name: 'Visual',
      description: 'Visual theme',
      control: {
        type: 'select',
        labels: {
          lime: 'Lime',
          tomato: 'Tomato',
        },
      },
      options: ['lime', 'tomato'],
    },
    type: {
      name: 'Type',
      description: 'Type of data',
      control: {
        type: 'select',
        labels: {
          Songs: 'Songs',
          Artists: 'Artists',
        },
      },
    },
  },
  args: {
    visual: 'lime',
    items: TOP_SONGS,
    type: 'Songs',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTopTracks = {} satisfies Story;

export const WithTopArtists = {
  args: {
    items: TOP_ARTISTS,
    type: 'Artists',
    visual: 'tomato',
  },
} satisfies Story;
