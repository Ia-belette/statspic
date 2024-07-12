import React, { lazy } from 'react';

const Harmony = lazy(() => import('@/components/templates/harmony'));
const Melody = lazy(() => import('@/components/templates/melody'));
const Symphony = lazy(() => import('@/components/templates/symphony'));

export interface Template {
  id: number;
  name: string;
  shape: Shape;
  component: React.ComponentType<any>;
  colors: string[];
}

export enum Shape {
  RECTANGLE = 13,
  SQUARE = 4,
}

export const templatesData: Record<number, Template> = {
  1: {
    id: 1,
    name: 'Harmony',
    shape: Shape.RECTANGLE,
    component: Harmony,
    colors: ['midgnight', 'black', 'gobalt', 'minty'],
  },
  2: {
    id: 2,
    name: 'Melody',
    shape: Shape.SQUARE,
    component: Melody,
    colors: ['crimson', 'sky', 'yellow'],
  },
  3: {
    id: 3,
    name: 'Symphony',
    shape: Shape.RECTANGLE,
    component: Symphony,
    colors: ['lime', 'tomato'],
  },
};

export interface TemplateSection {
  section: string;
  templates: number[];
}

export const templatesSections: TemplateSection[] = [
  {
    section: 'Vertical rectangle',
    templates: [1, 3],
  },
  {
    section: 'Card square',
    templates: [2],
  },
];
