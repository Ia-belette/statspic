import { create } from 'zustand';

import { Template, templatesData } from '../templates';

interface ThemeStore {
  selectedTemplateId: number;
  selectedColor: string;
  setTemplateId: (id: number) => void;
  setColor: (color: string) => void;
  currentTemplate: Template | undefined;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  selectedTemplateId: 1,
  selectedColor: templatesData[1].colors[0],
  setTemplateId: (id) => {
    const selectedTemplate = templatesData[id];
    set({
      selectedTemplateId: id,
      currentTemplate: selectedTemplate,
      selectedColor: selectedTemplate.colors[0],
    });
  },
  setColor: (color) => set({ selectedColor: color }),
  currentTemplate: templatesData[1],
}));
