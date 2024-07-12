'use client';
import React, { Suspense, useEffect } from 'react';
import { useThemeStore } from '@/stores/use-template';
import { Spinner } from '@radix-ui/themes';

export const ThemeSelector: React.FC = () => {
  const setTemplateId = useThemeStore((state) => state.setTemplateId);
  const setColor = useThemeStore((state) => state.setColor);
  const currentTemplate = useThemeStore((state) => state.currentTemplate);
  const selectedTemplateId = useThemeStore((state) => state.selectedTemplateId);
  const selectedColor = useThemeStore((state) => state.selectedColor);

  useEffect(() => {
    if (currentTemplate) {
      setColor(currentTemplate.colors[0]);
    }
  }, [selectedTemplateId, currentTemplate, setColor]);

  return (
    <div>
      <select onChange={(e) => setTemplateId(Number(e.target.value))}>
        <option value='1'>Harmony</option>
        <option value='2'>Melody</option>
        <option value='3'>Symphony</option>
      </select>

      {currentTemplate && (
        <select
          value={selectedColor}
          onChange={(e) => setColor(e.target.value)}
        >
          {currentTemplate.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export const RenderSelectedTheme: React.FC = (props) => {
  const currentTemplate = useThemeStore((state) => state.currentTemplate);
  const selectedColor = useThemeStore((state) => state.selectedColor);

  if (!currentTemplate) return <div>Loading...</div>;

  const TemplateComponent = currentTemplate.component;
  return (
    <>
      <TemplateComponent visual={selectedColor} {...props} />
    </>
  );
};
