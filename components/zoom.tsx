'use client';
import React, { useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useInitialPosition } from '@/hooks/use-position';

export const Zoom = ({ children }: { children: React.ReactNode }) => {
  const wrapperRef = useRef(null);
  const transformWrapperRef = useRef(null);
  const { initialPosition, wrapperSize } = useInitialPosition(
    wrapperRef,
    transformWrapperRef
  );

  return (
    <div ref={wrapperRef} className='relative w-full h-full'>
      {wrapperSize.width > 0 && wrapperSize.height > 0 && (
        <TransformWrapper
          ref={transformWrapperRef}
          initialScale={0.8}
          initialPositionX={initialPosition.x}
          initialPositionY={initialPosition.y}
          minScale={0.5}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <TransformComponent wrapperClass='!w-full !h-full'>
                {children}
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      )}
    </div>
  );
};
