import { ReactNode } from "react";
import { css, styled } from "styled-components";
import { theme } from "@/styles/theme";

export type AsideProps = {
  $backgroundColor?: string;
  $height?: string;
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
  $sx?: Record<string, any>;
};

/**---------------------------------------------------------------------------/
  * ! Aside 컴포넌트
  * * 사이드바 레이아웃을 위한 컴포넌트
  * * `$backgroundColor`: 배경 색상 설정, 기본값은 `theme.colors.background.main`
  * * `$height`: 높이 설정, 기본값은 `"auto"`
  * * `$flexDirection`: `flex` 레이아웃의 방향 설정, 기본값은 `"column"`
  * * `$justifyContent`: `flex` 정렬 방식 설정, 기본값 없음
  * * `$flexWrap`: `flex-wrap` 설정, 기본값 없음
  * * `$alignItems`: `align-items` 설정, 기본값 없음
  * * `$sx`: 추가적인 스타일을 위한 객체 (예: `{ marginTop: "10px" }`)
  * * `children`: 내부에 포함될 ReactNode 요소
  * 
  * * flex 레이아웃을 사용하여 내부 요소를 배치하며, 사이드바 영역에 적합한 스타일 제공
  * * 기본적으로 `aside` 요소로 렌더링됨
/**--------------------------------------------------------------------------*/

const Aside = (props: AsideProps) => {
  const {
    $backgroundColor = theme.colors.background.main,
    $height = "auto",
    children,
    $flexDirection = "column",
    $justifyContent,
    $flexWrap,
    $alignItems,
    $sx = {},
  } = props;

  return (
    <AsideStyle
      $backgroundColor={$backgroundColor}
      $height={$height}
      $flexDirection={$flexDirection}
      $justifyContent={$justifyContent}
      $flexWrap={$flexWrap}
      $alignItems={$alignItems}
      $sx={$sx}
    >
      {children}
    </AsideStyle>
  );
};

export const AsideStyle = styled.aside<{
  $backgroundColor: string;
  $height: string;
  $flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  $alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $sx: Record<string, any>;
}>`
  width: 100%;
  height: ${(props) => props.$height};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent || "initial"};
  flex-wrap: ${(props) => props.$flexWrap || "nowrap"};
  align-items: ${(props) => props.$alignItems || "initial"};
  flex-grow: 1;
  padding: 50px 0;
  background-color: ${(props) => props.$backgroundColor};
  ${(props) => css({ ...props.$sx })}
`;

export default Aside;
