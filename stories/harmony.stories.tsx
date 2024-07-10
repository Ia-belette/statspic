import type { Meta, StoryObj } from '@storybook/react';
import { Harmony } from '@/components/templates/harmony/harmony';
import {
  TOP_ARTISTS,
  TOP_ARTIST_POSTER,
  TOP_SONGS,
  TOP_TRACK_POSTER,
} from '@/fake-data';

const meta = {
  title: 'Templates/Harmony',
  component: Harmony,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    visual: {
      description: 'Visual theme',
      name: 'Visual',
      control: {
        type: 'select',
        labels: {
          midgnights: 'Midgnights',
          'like-that': 'Like That',
          gobalt: 'Gobalt',
          minty: 'Minty',
        },
      },
      options: ['midgnights', 'like-that', 'gobalt', 'minty'],
    },
    posterUrl: {
      control: {
        type: 'text',
      },
      name: 'Poster URL',
      description: 'URL of the poster image',
    },
    topArtists: {
      control: {
        type: 'object',
      },
      name: 'Top Artists',
      description: 'List of top artists',
    },
    topSongs: {
      control: {
        type: 'object',
      },
      name: 'Top Songs',
      description: 'List of top songs',
    },
  },
} satisfies Meta<typeof Harmony>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTopArtistPoster: Story = {
  args: {
    visual: 'midgnights',
    topArtists: TOP_ARTISTS,
    topSongs: TOP_SONGS,
    posterUrl: TOP_ARTIST_POSTER,
  },
} satisfies Story;

export const WithTopTrackPoster: Story = {
  args: {
    visual: 'midgnights',
    topArtists: TOP_ARTISTS,
    topSongs: TOP_SONGS,
    posterUrl: TOP_TRACK_POSTER,
  },
} satisfies Story;
