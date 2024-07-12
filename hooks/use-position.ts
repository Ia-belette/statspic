import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const useInitialPosition = (
  wrapperRef: React.RefObject<HTMLDivElement> | null,
  transformWrapperRef: React.RefObject<any> | null,
  contentRef: React.RefObject<HTMLDivElement> | null
) => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });

  const updateInitialPosition = useCallback(() => {
    if (wrapperRef?.current && contentRef?.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const contentWidth = contentRef.current.offsetWidth;
      const contentHeight = contentRef.current.offsetHeight;

      if (wrapperWidth > 0 && wrapperHeight > 0) {
        setWrapperSize({ width: wrapperWidth, height: wrapperHeight });

        const initialX = (wrapperWidth - contentWidth) / 2;
        const initialY = (wrapperHeight - contentHeight) / 2;

        console.log('Initial positions:', initialX, initialY);

        setInitialPosition({ x: initialX, y: initialY });

        if (transformWrapperRef?.current) {
          transformWrapperRef.current.resetTransform();
        }
      }
    }
  }, [wrapperRef, contentRef, transformWrapperRef]);

  const debouncedUpdateInitialPosition = useCallback(
    debounce(updateInitialPosition, 100),
    [updateInitialPosition]
  );

  useEffect(() => {
    if (wrapperRef?.current && contentRef?.current) {
      updateInitialPosition();

      const resizeObserver = new ResizeObserver(() => {
        debouncedUpdateInitialPosition();
      });

      resizeObserver.observe(wrapperRef.current);
      resizeObserver.observe(contentRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [wrapperRef, contentRef, debouncedUpdateInitialPosition]);

  return { initialPosition, wrapperSize };
};
