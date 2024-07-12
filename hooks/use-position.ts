import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const useInitialPosition = (
  wrapperRef: React.RefObject<HTMLDivElement> | null,
  transformWrapperRef: React.RefObject<any> | null
) => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });

  const updateInitialPosition = useCallback(() => {
    if (wrapperRef?.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const wrapperHeight = wrapperRef.current.offsetHeight;
      setWrapperSize({ width: wrapperWidth, height: wrapperHeight });

      const elementWidth = 360;
      const elementHeight = 600;

      const initialX = (wrapperWidth - elementWidth * 0.5) / 2;
      const initialY = (wrapperHeight - elementHeight * 0.5) / 2;

      setInitialPosition({ x: initialX, y: initialY });

      if (transformWrapperRef?.current) {
        transformWrapperRef.current.resetTransform();
      }
    }
  }, [wrapperRef, transformWrapperRef]);

  const debouncedUpdateInitialPosition = useCallback(
    debounce(updateInitialPosition, 100),
    [updateInitialPosition]
  );

  useEffect(() => {
    updateInitialPosition();
    window.addEventListener('resize', debouncedUpdateInitialPosition);

    return () =>
      window.removeEventListener('resize', debouncedUpdateInitialPosition);
  }, [debouncedUpdateInitialPosition]);

  return { initialPosition, wrapperSize };
};

export default useInitialPosition;
