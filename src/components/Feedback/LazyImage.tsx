import Skeleton, { SkeletonProps } from "@/components/Feedback/Skeleton";
import { useState, useEffect } from "react";

export type LazyImageProps = SkeletonProps & {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};
/**---------------------------------------------------------------------------/
  * ! LazyImage 컴포넌트
  * * 이미지가 로드되는 동안 Skeleton을 표시하는 컴포넌트
  * * `src`: 로드할 이미지의 URL을 설정
  * * `alt`: 이미지의 대체 텍스트를 설정
  * * `$width`: 이미지 및 Skeleton의 너비를 설정 (기본값: '100px')
  * * `$height`: 이미지 및 Skeleton의 높이를 설정 (기본값: '100px')
  * * `...others`: Skeleton 컴포넌트에서 지원하는 추가 스타일 속성
  * * `imageLoaded`: 이미지 로딩 상태를 관리하는 state
  * * `useEffect`: 이미지가 로드되면 `imageLoaded` 상태를 `true`로 변경
  * * `Skeleton`: 이미지가 로드되기 전까지 보여줄 로딩 UI
  * * `<img>`: 이미지 로드 완료 후 표시되는 실제 이미지
/**--------------------------------------------------------------------------*/

const LazyImage = (props: LazyImageProps) => {
  const { src, alt, width = "100px", height = "100px", ...others } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return imageLoaded ? (
    <img src={src} alt={alt} loading='lazy' width={width} height={height} />
  ) : (
    <Skeleton $width={width} $height={height} {...others} />
  );
};

export default LazyImage;
