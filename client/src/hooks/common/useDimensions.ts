import React, { useEffect, useRef } from 'react';

export const useDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      dimensions.current.width = currentRef.offsetWidth || 0;
      dimensions.current.height = currentRef.offsetHeight || 0;
    }
  }, [ref]);

  return dimensions.current;
};
