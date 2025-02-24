import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import { styled } from "styled-components";

export type SectionProps = {
  $backgroundColor?: string;
  $height?: string;
  $width?: string;
  $padding?: string;
  $margin?: string;
  children: ReactNode;
  $flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  $alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
};

/**---------------------------------------------------------------------------/
  * ! Section 컴포넌트
  * * 페이지 내 특정 섹션을 위한 레이아웃 컨테이너
  * * `flex` 레이아웃을 사용하여 자식 요소를 배치
  * * `$flexDirection`: 자식 요소의 배치 방향 설정 (기본값: `column`)
  * * `$justifyContent`: 플렉스 컨테이너 내 정렬 방식 설정
  * * `$alignItems`: 플렉스 컨테이너 내 항목 정렬 방식 설정
  * * `$flexWrap`: 플렉스 아이템의 줄 바꿈 여부 설정
  * * `$backgroundColor`: 배경 색상 설정, 기본값은 `theme.colors.background.main`
  * * `$height`: 높이 설정, 기본값은 `"auto"`
  * * `$width`: 너비 설정, 기본값은 `"100%"`
  * * `$padding`: 내부 여백 설정, 기본값은 `"80px 0"`
  * * `$margin`: 외부 여백 설정, 기본값은 `"0"`
  * * 자식 컴포넌트를 `children`으로 받아서 표시
/**--------------------------------------------------------------------------*/

const Section = (props: SectionProps) => {
  const {
    $backgroundColor = theme.colors.background.main,
    $height = "auto",
    $width = "100%",
    $padding = "80px 0",
    $margin = "0",
    children,
    $flexDirection = "column",
    $justifyContent = "flex-start",
    $alignItems = "stretch",
    $flexWrap = "nowrap",
  } = props;

  return (
    <SectionStyle
      $backgroundColor={$backgroundColor}
      $height={$height}
      $width={$width}
      $padding={$padding}
      $margin={$margin}
      $flexDirection={$flexDirection}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
      $flexWrap={$flexWrap}
    >
      {children}
    </SectionStyle>
  );
};

export const SectionStyle = styled.section<SectionProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export default Section;
