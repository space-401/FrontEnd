import { useState } from 'react';

const useFindLocation = () => {
  const [width, setWidth] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [transform, setTransform] = useState<string>();

  // // .cropper-crop-box 요소를 선택합니다.
  const EditBox = document.querySelector('.cropper-crop-box');

  if (EditBox) {
    // 스타일 변경을 감지하기 위한 MutationObserver를 생성합니다.
    const styleChangeObserver = new MutationObserver(() => {
      // 요소의 스타일이 변경될 때마다 실행되는 코드
      const currentStyle = window.getComputedStyle(EditBox);
      const width = currentStyle.getPropertyValue('width');
      const height = currentStyle.getPropertyValue('height');
      const transform = currentStyle.getPropertyValue('transform');

      setWidth(width);
      setHeight(height);
      setTransform(transform);
    });

    // 감시할 대상 요소와 설정을 전달하여 감시를 시작합니다.

    styleChangeObserver.observe(EditBox, {
      attributes: true,
      subtree: true,
      characterData: true,
    });
  }
  return [width, height, transform];
};

export default useFindLocation;
