import { ReactNode } from "react";
import { styled, css } from "styled-components";
import { theme } from "@/styles/theme";

export type ArticleProps = {
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
  $borderRadius?: string;
  $sx?: Record<string, any>;
};

/**---------------------------------------------------------------------------/
  * ! Article 컴포넌트
  * * 카드 형식의 레이아웃을 제공하는 섹션 컴포넌트
  * * `$backgroundColor`: 배경 색상 설정, 기본값은 `theme.colors.background.dark`
  * * `$height`: 높이 설정, 기본값은 `"auto"`
  * * `$flexDirection`: `flex` 레이아웃의 방향 설정, 기본값은 `"column"`
  * * `$justifyContent`: `flex` 정렬 방식 설정, 기본값 없음
  * * `$flexWrap`: `flex-wrap` 설정, 기본값 없음
  * * `$alignItems`: `align-items` 설정, 기본값 없음
  * * `$borderRadius`: 테두리 둥글기 설정, 기본값은 `theme.borderRadius[20]`
  * * `$sx`: 추가적인 스타일을 위한 객체 (예: `{ marginTop: "10px" }`)
  * * `children`: 내부에 포함될 ReactNode 요소
  * 
  * * flex 레이아웃을 사용하여 내부 요소를 배치하며, 필요한 경우 가로/세로 정렬을 변경할 수 있음
  * * 기본적으로 카드 형태로 렌더링되며 스타일을 커스텀할 수 있음
/**--------------------------------------------------------------------------*/

const Article = (props: ArticleProps) => {
  const {
    $backgroundColor = theme.colors.background.dark,
    $height = "auto",
    children,
    $flexDirection = "column",
    $justifyContent,
    $flexWrap,
    $alignItems,
    $borderRadius = theme.borderRadius[20],
    $sx = {},
  } = props;

  return (
    <ArticleStyle
      $backgroundColor={$backgroundColor}
      $height={$height}
      $flexDirection={$flexDirection}
      $justifyContent={$justifyContent}
      $flexWrap={$flexWrap}
      $alignItems={$alignItems}
      $borderRadius={$borderRadius}
      $sx={$sx}
    >
      {children}
    </ArticleStyle>
  );
};

export const ArticleStyle = styled.aside<{
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
  $borderRadius: string;
  $sx: Record<string, any>;
}>`
  width: 100%;
  height: ${(props) => props.$height};
  padding: 20px;
  border-radius: ${(props) => props.$borderRadius};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent || "initial"};
  flex-wrap: ${(props) => props.$flexWrap || "nowrap"};
  align-items: ${(props) => props.$alignItems || "initial"};
  padding: 50px 12px 12px 12px;
  background-color: ${(props) => props.$backgroundColor};
  ${(props) => css({ ...props.$sx })}
`;

export default Article;
