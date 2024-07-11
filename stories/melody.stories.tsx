import type { Meta, StoryObj } from '@storybook/react';
import { Melody } from '@/components/templates/melody';
import {
  TOP_ARTISTS,
  TOP_ARTIST_POSTER,
  TOP_SONGS,
  TOP_TRACK_POSTER,
} from '@/fake-data';

const meta = {
  title: 'Templates/Melody',
  component: Melody,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    visual: {
      description: 'Visual theme',
      name: 'Visual',
      control: {
        type: 'select',
        labels: {
          crimson: 'Crimson',
          sky: 'Sky',
          yellow: 'Yellow',
        },
      },
      options: ['crimson', 'sky', 'yellow'],
    },
  },
  args: {
    visual: 'crimson',
    type: 'artist',
    name: TOP_ARTISTS[0].name,
    posterUrl: TOP_ARTIST_POSTER,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Melody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSingleTopArtist: Story = {
  args: {
    visual: 'sky',
  },
} satisfies Story;

export const WithSingleTopSong: Story = {
  args: {
    type: 'song',
    name: TOP_SONGS[0].name,
    posterUrl: TOP_TRACK_POSTER,
  },
} satisfies Story;

export const YellowTheme: Story = {
  args: {
    visual: 'yellow',
  },
} satisfies Story;
