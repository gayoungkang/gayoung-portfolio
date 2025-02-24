import { theme } from "@/styles/theme";
import { darken } from "@/utils/colorUtils";
import { ReactNode } from "react";
import { css, styled } from "styled-components";

export type ButtonProps = {
  children: ReactNode;
  $variant?: "text" | "contained" | "outlined";
  $color?: string;
  $backgroundColor?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  $fileUrl?: string;
  $fileName?: string;
  $width?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $borderRadius?: string;
  $hasMargin?: boolean;
  $fontFamily?: "kr" | "en";
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! Button 컴포넌트
  * * 다양한 스타일 옵션을 제공하는 버튼 컴포넌트
  * * `$variant`: 버튼의 스타일 옵션 ("text", "contained", "outlined")
  * * `$color`: 버튼 텍스트 색상 설정
  * * `$backgroundColor`: 버튼 배경 색상 설정
  * * `$fileUrl`과 `$fileName`: 다운로드 파일 URL 및 파일명 설정 (파일 다운로드 기능)
  * * `$width`: 버튼 너비 설정
  * * `$marginTop`, `$marginBottom`, `$marginLeft`, `$marginRight`: 버튼의 여백 설정
  * * `$borderRadius`: 버튼의 테두리 둥글기 설정
  * * `$hasMargin`: 아이콘과 텍스트 사이 여백 적용 여부
  * * `$fontFamily`: 버튼 텍스트의 폰트 설정 ("kr" 또는 "en")
  * * 버튼은 `startIcon`, `endIcon` 속성을 사용하여 텍스트 앞뒤에 아이콘을 추가할 수 있음
  * * 기본적으로 클릭 시 동작할 `onClick` 이벤트 핸들러를 제공
  * * `disabled` 상태에서 버튼은 클릭할 수 없으며, 스타일이 비활성화됨
/**--------------------------------------------------------------------------*/
const Button = ({
  children,
  $width,
  $variant = "contained",
  $color = theme.colors.grey[100],
  $backgroundColor = theme.colors.primary.main,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  $fileUrl,
  $fileName,
  $marginTop,
  $marginBottom,
  $marginLeft,
  $marginRight,
  $borderRadius,
  $hasMargin,
  $fontFamily = "kr",
  $sx = {},
}: ButtonProps) => {
  const handleDownload = () => {
    if (!$fileUrl || !$fileName) return;

    const link = document.createElement("a");
    link.href = $fileUrl;
    link.setAttribute("download", $fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = () => {
    if ($fileUrl && $fileName) {
      handleDownload();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonStyle
      $width={$width}
      $variant={$variant}
      $color={$color}
      $backgroundColor={$backgroundColor}
      disabled={disabled}
      onClick={handleClick}
      $fileUrl={$fileUrl}
      $fileName={$fileName}
      $marginTop={$marginTop}
      $marginBottom={$marginBottom}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $borderRadius={$borderRadius}
      $hasMargin={$hasMargin}
      $sx={$sx}
    >
      {startIcon && <IconWrapper $color={$color}>{startIcon}</IconWrapper>}
      <TextWrapper
        $hasMargin={!!startIcon || !!endIcon}
        $fontFamily={$fontFamily}
        $color={$color}
      >
        {children}
      </TextWrapper>
      {endIcon && <IconWrapper $color={$color}>{endIcon}</IconWrapper>}
    </ButtonStyle>
  );
};

const TextWrapper = styled.span<{
  $hasMargin: boolean;
  $fontFamily: "kr" | "en";
  $color: string;
}>`
  ${({ $hasMargin }) => $hasMargin && "margin: 0 8px;"}
  font-family: ${(props) =>
    props.$fontFamily === "kr" ? theme.fonts.kr : theme.fonts.en};
  color: ${(props) => props.$color};
`;

export const ButtonStyle = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  width: ${(props) => props.$width};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 2px solid transparent;
  margin-top: ${(props) => props.$marginTop || "0"};
  margin-bottom: ${(props) => props.$marginBottom || "0"};
  margin-left: ${(props) => props.$marginLeft || "0"};
  margin-right: ${(props) => props.$marginRight || "0"};
  border-radius: ${(props) => props.$borderRadius || theme.borderRadius[4]};
  background-color: ${(props) =>
    props.$variant === "contained" && !props.disabled
      ? props.$backgroundColor
      : "transparent"};
  color: ${(props) => props.$color};
  border: ${(props) =>
    props.$variant === "outlined" && !props.disabled
      ? `2px solid ${props.$backgroundColor}`
      : "none"};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "contained" && !props.disabled
        ? darken(props.$backgroundColor, 0.2)
        : "transparent"};
    border-color: ${(props) =>
      props.$variant === "outlined" && !props.disabled
        ? darken(props.$backgroundColor, 0.2)
        : "transparent"};
  }

  &:disabled {
    background-color: ${(props) =>
      props.$variant === "contained"
        ? theme.colors.disabled.contained
        : "transparent"};
    color: ${theme.colors.disabled.outlined};
    border: ${(props) =>
      props.$variant === "outlined"
        ? `2px solid ${theme.colors.disabled.outlined}`
        : "none"};
    cursor: not-allowed;
    ${(props) => props.$sx && css({ ...props.$sx })}
  }
`;

const IconWrapper = styled.span<{ $color: string }>`
  margin: 0 8px;
  display: flex;
  color: ${(props) => props.$color};
`;

export default Button;
