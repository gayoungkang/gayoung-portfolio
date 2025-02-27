import { pulse, wave } from "@/styles/animation";
import { theme } from "@/styles/theme";
import { css, styled } from "styled-components";

export type SkeletonProps = {
  $variant?: "text" | "circular" | "rectangular" | "rounded";
  $width?: string;
  $height?: string;
  $animation?: "pulse" | "wave" | "none";
  $borderRadius?: string;
  $backgroundColor?: string;
};
/**---------------------------------------------------------------------------/
  * ! Skeleton 컴포넌트
  * * 로딩 상태를 시각적으로 표현하는 컴포넌트
  * * `$variant`: Skeleton의 모양을 설정 (기본값: 'text', 'circular', 'rectangular', 'rounded' 중 선택 가능)
  * * `$width`: Skeleton의 너비를 설정 (기본값: '100%')
  * * `$height`: Skeleton의 높이를 설정 (기본값: '1rem')
  * * `$animation`: Skeleton의 애니메이션 효과를 설정 (기본값: 'pulse', 'pulse' 또는 'wave' 선택 가능, 'none' 설정 가능)
  * * `$borderRadius`: Skeleton의 테두리 반경을 설정 (기본값 없음)
  * * `$backgroundColor`: Skeleton의 배경색을 설정 (기본값: 그라디언트 색상)
  * * `pulse`: 펄스 애니메이션 효과 (기본값)
  * * `wave`: 파도 애니메이션 효과
  * * `none`: 애니메이션을 적용하지 않음
/**--------------------------------------------------------------------------*/

const Skeleton = (props: SkeletonProps) => {
  const {
    $variant = "text",
    $width,
    $height,
    $animation = "wave",
    $backgroundColor,
  } = props;

  return (
    <SkeletonStyle
      $variant={$variant}
      $width={$width}
      $height={$height}
      $animation={$animation}
      $backgroundColor={$backgroundColor}
    />
  );
};

const SkeletonStyle = styled.div<SkeletonProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "1rem"};
  border-radius: ${(props) =>
    props.$variant === "circular"
      ? "50%"
      : props.$variant === "rounded"
        ? theme.borderRadius[4]
        : "0"};
  background: ${(props) =>
    props.$backgroundColor ||
    "linear-gradient(90deg, #e0e0e033 25%, #555555 50%, #e0e0e033 75%)"};
  background-size: 200% 100%;
  animation: ${(props) =>
    props.$animation === "wave"
      ? css`
          ${wave} 1.5s infinite linear
        `
      : props.$animation === "pulse"
        ? css`
            ${pulse} 1.5s infinite
          `
        : "none"};
`;

export default Skeleton;
