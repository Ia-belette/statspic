import { create } from 'zustand';

interface Template {
  id: number;
  name: string;
  shape: number;
  component: React.ComponentType<any>;
}

interface ThemeStore {
  selectedThemeId: number;
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  setThemeId: (id: number) => void;
  currentTemplate: Template | undefined;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  selectedThemeId: 1,
  templates: [],
  setTemplates: (templates) => {
    const selectedTemplate = templates.find(
      (template) => template.id === get().selectedThemeId
    );
    set({ templates, currentTemplate: selectedTemplate });
  },
  setThemeId: (id) => {
    const selectedTemplate = get().templates.find(
      (template) => template.id === id
    );
    set({ selectedThemeId: id, currentTemplate: selectedTemplate });
  },
  currentTemplate: undefined,
}));
