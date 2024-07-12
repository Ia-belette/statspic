import { Harmony } from './components/templates/harmony';
import { Melody } from './components/templates/melody';
import { Symphony } from './components/templates/symphony';

export const templates = [
  {
    id: 1,
    name: 'Harmony',
    shape: 13, // vertical rectangle
    component: Harmony,
  },
  {
    id: 2,
    name: 'Melody',
    shape: 4, // square
    component: Melody,
  },
  {
    id: 3,
    name: 'Symphony',
    shape: 13, // vertical rectangle
    component: Symphony,
  },
];
