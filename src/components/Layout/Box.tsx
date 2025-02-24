import { ReactNode } from "react";
import { css, styled } from "styled-components";

export type BoxProps = {
  children: ReactNode;
  $backgroundColor?: string;
  $height?: string;
  $width?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $paddingTop?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
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
  $display?: string;
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! Box 컴포넌트
  * * 다양한 스타일 옵션을 통해 다른 구성 요소를 그룹화하기 위한 일반적인 컨테이너 (div)
  * * `$backgroundColor`: 배경 색상 설정, 기본값은 `transparent`
  * * `$height`: 높이 설정, 기본값은 `"auto"`
  * * `$width`: 너비 설정, 기본값은 `"100%"`
  * * `$marginTop`, `$marginBottom`: 마진 설정, 기본값은 `"0"`
  * * `$paddingTop`, `$paddingBottom`, `$paddingLeft`, `$paddingRight`: 패딩 설정, 기본값은 `"0"`
  * * `$flexDirection`: flex 방향 설정, 기본값은 `"row"`
  * * `$justifyContent`: flex 항목의 수평 정렬 방식, 기본값은 `"flex-start"`
  * * `$flexWrap`: flex 줄넘김 처리 설정, 기본값은 `"nowrap"`
  * * `$alignItems`: flex 항목의 수직 정렬 방식, 기본값은 `"stretch"`
  * * `$display`: display 속성 설정, 기본값은 `"flex"`
  * * 자주 사용되는 레이아웃 컨테이너로, 다양한 스타일 속성을 통해 유연하게 사용 가능
/**--------------------------------------------------------------------------*/

const Box = (props: BoxProps) => {
  const {
    $backgroundColor = "transparent",
    $height = "auto",
    $width = "auto",
    $marginTop = "0",
    $marginBottom = "0",
    $paddingTop = "0",
    $paddingBottom = "0",
    $paddingLeft = "0",
    $paddingRight = "0",
    $flexDirection = "row",
    $justifyContent = "flex-start",
    $flexWrap = "wrap",
    $alignItems = "stretch",
    $display = "flex",
    children,
    $sx = {},
  } = props;

  return (
    <BoxStyle
      $backgroundColor={$backgroundColor}
      $height={$height}
      $width={$width}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      $paddingTop={$paddingTop}
      $paddingBottom={$paddingBottom}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
      $flexDirection={$flexDirection}
      $justifyContent={$justifyContent}
      $flexWrap={$flexWrap}
      $alignItems={$alignItems}
      $display={$display}
      $sx={$sx}
    >
      {children}
    </BoxStyle>
  );
};

export const BoxStyle = styled.div<BoxProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  padding-top: ${(props) => props.$paddingTop};
  padding-bottom: ${(props) => props.$paddingBottom};
  padding-left: ${(props) => props.$paddingLeft};
  padding-right: ${(props) => props.$paddingRight};
  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$flexDirection};
  flex-wrap: ${(props) => props.$flexWrap};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  background-color: ${(props) => props.$backgroundColor};
  ${(props) => props.$sx && css({ ...props.$sx })}
`;

export default Box;
