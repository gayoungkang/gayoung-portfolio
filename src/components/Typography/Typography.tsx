import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import { css, styled } from "styled-components";

export type TypographyProps = {
  $variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  $color?: string;
  $fontWeight?: number | string;
  $fontFamily?: "kr" | "en";
  $fontSize?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $lineHeight?: string;
  $textAlign?: "left" | "center" | "right" | "justify";
  children: string | ReactNode;
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! Typography 컴포넌트
  * * 다양한 텍스트 스타일을 적용할 수 있는 컴포넌트
  * * `$variant`: "h1", "h2", "h3", "h4", "h5", "h6", "p", "span"으로 텍스트 유형 지정 가능
  * * `$color`: 텍스트 색상 설정, 기본값은 `theme.colors.grey[100]`
  * * `$fontWeight`: 텍스트의 폰트 두께 설정
  * * `$fontFamily`: 폰트 종류 지정, `"kr"` (한글), `"en"` (영어) 선택 가능
  * * `$fontSize`: 폰트 크기 설정
  * * `$lineHeight`: 텍스트의 줄 높이 설정
  * * `$textAlign`: 텍스트 정렬, `"left"`, `"center"`, `"right"`, `"justify"` 중 선택 가능
  * * `$marginTop`, `$marginBottom`, `$marginLeft`, `$marginRight`: 텍스트 주변 마진 설정
  * * `span` 태그를 제외한 나머지 블록 요소에서 마진이 적용됨
  * * `theme.ts`에 정의된 기본 값들을 사용하거나 props로 변경 가능
  * * 한글 문단은 `word-break: keep-all`, 영어 문단은 `word-break: break-all`로 처리
  * * 기본적으로 `p` 태그로 렌더링되며, `$variant`를 통해 다른 태그로 변경 가능
/**--------------------------------------------------------------------------*/

const Typography = ({
  $variant = "p",
  $color = theme.colors.grey[100],
  $fontWeight,
  $fontFamily = "kr",
  $fontSize,
  $marginTop,
  $marginBottom,
  $marginLeft,
  $marginRight,
  $lineHeight,
  $textAlign,
  children,
  $sx = {},
}: TypographyProps) => {
  const defaultStyles = theme.typography[$variant];
  const resolvedFontWeight =
    typeof $fontWeight === "string" ? parseInt($fontWeight, 10) : $fontWeight;

  return (
    <TypographyStyle
      as={$variant}
      $color={$color}
      $fontWeight={resolvedFontWeight ?? defaultStyles.fontWeight}
      $fontFamily={$fontFamily}
      $fontSize={$fontSize ?? defaultStyles.fontSize}
      $lineHeight={$lineHeight ?? defaultStyles.lineHeight}
      $textAlign={$textAlign}
      $marginTop={$variant !== "span" ? $marginTop : undefined}
      $marginBottom={$variant !== "span" ? $marginBottom : undefined}
      $marginLeft={$variant !== "span" ? $marginLeft : undefined}
      $marginRight={$variant !== "span" ? $marginRight : undefined}
      $sx={$sx}
    >
      {children}
    </TypographyStyle>
  );
};

export const TypographyStyle = styled.span<TypographyProps>`
  white-space: pre-wrap;
  word-break: ${(props) =>
    props.$fontFamily === "kr" ? "keep-all" : "break-all"};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  font-family: ${(props) =>
    props.$fontFamily === "kr" ? theme.fonts.kr : theme.fonts.en};
  font-size: ${(props) => props.$fontSize};
  line-height: ${(props) => props.$lineHeight};
  text-align: ${(props) => props.$textAlign || "left"};
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  ${(props) => props.$sx && css({ ...props.$sx })}
`;

export default Typography;
