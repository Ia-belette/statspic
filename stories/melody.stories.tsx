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
    posterUrl: {
      control: {
        type: 'text',
      },
      name: 'Poster URL',
      description: 'URL of the poster image',
    },
    moment: {
      control: {
        type: 'text',
      },
      name: 'Current Month',
      description: 'Current month',
    },
    name: {
      control: {
        type: 'text',
      },
      name: 'Name',
      description: 'Name of the artist or song',
    },
    type: {
      control: {
        type: 'select',
        labels: {
          artist: 'Artist',
          song: 'Song',
        },
      },
      options: ['artist', 'song'],
      name: 'Type',
      description: 'Type of the melody',
    },
  },
  args: {
    visual: 'crimson',
    type: 'artist',
    name: TOP_ARTISTS[0].name,
    posterUrl: TOP_ARTIST_POSTER,
    moment: 'March',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Melody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
