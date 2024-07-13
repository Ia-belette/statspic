'use client';
import React, { useRef, useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useInitialPosition } from '@/hooks/use-position';
import { Spinner } from '@radix-ui/themes';
import { cn } from '@/lib/cn';

export const Zoom = ({ children }: { children: React.ReactNode }) => {
  const wrapperRef = useRef(null);
  const transformWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const { initialPosition, wrapperSize } = useInitialPosition(
    wrapperRef,
    transformWrapperRef,
    contentRef
  );

  useEffect(() => {
    if (wrapperSize.width > 0 && wrapperSize.height > 0) {
      setIsLoading(false);
    }
  }, [wrapperSize]);

  useEffect(() => {
    if (transformWrapperRef.current && !isLoading) {
      transformWrapperRef.current.setTransform(
        initialPosition.x,
        initialPosition.y,
        0.9
      );
    }
  }, [initialPosition, isLoading]);

  return (
    <div ref={wrapperRef} className='w-full h-full'>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center  z-50'>
          <Spinner className='!size-4' style={{}} />
        </div>
      )}
      <TransformWrapper
        ref={transformWrapperRef}
        initialScale={0.9}
        initialPositionX={initialPosition.x}
        initialPositionY={initialPosition.y}
        minScale={0.5}
        doubleClick={{
          mode: 'reset',
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <TransformComponent wrapperClass='!w-full !h-full'>
              <div
                ref={contentRef}
                className={cn(
                  `transition-opacity duration-300`,
                  isLoading ? 'opacity-0' : 'opacity-100'
                )}
              >
                {children}
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};
