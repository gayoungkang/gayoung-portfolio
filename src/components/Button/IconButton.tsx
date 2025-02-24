import { ReactNode } from "react";
import { styled, css } from "styled-components";
import { theme } from "@/styles/theme";
import { darken } from "@/utils/colorUtils";

export type IconButtonProps = {
  children: ReactNode;
  $color?: string;
  $backgroundColor?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isBackground?: boolean;
  isHover?: boolean;
  captionText?: string;
  href?: string;
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! IconButton 컴포넌트
  * * 아이콘 버튼을 생성하는 컴포넌트
  * * `$color`: 아이콘 및 버튼 텍스트 색상 설정
  * * `$backgroundColor`: 버튼 배경 색상 설정
  * * `disabled`: 버튼 비활성화 여부 설정 (비활성화 상태에서는 클릭할 수 없음)
  * * `onClick`: 버튼 클릭 시 실행할 함수
  * * `isBackground`: 배경색을 적용할지 여부 (기본값: true)
  * * `isHover`: 버튼에 마우스를 올렸을 때 배경색을 변경할지 여부 (기본값: true)
  * * `captionText`: 버튼 아래에 나타낼 캡션 텍스트
  * * `href`: 버튼을 클릭 시 새로운 창에서 열 URL
  * * `$sx`: 스타일 커스터마이징을 위한 추가적인 스타일 설정
  * * 기본적으로 버튼은 원형 아이콘을 표시하며, `captionText`가 있을 경우, 마우스를 올렸을 때 해당 텍스트가 버튼 아래에 표시됨
  * * `href`가 제공되면 버튼 클릭 시 해당 링크를 새 창에서 열고, `onClick`이 제공되면 버튼 클릭 시 해당 함수가 호출됨
/**--------------------------------------------------------------------------*/
const IconButton = ({
  children,
  $color = theme.colors.grey[100],
  $backgroundColor = theme.colors.primary.main,
  disabled = false,
  onClick,
  isBackground = true,
  isHover = true,
  captionText,
  href,
  $sx = {},
}: IconButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      window.open(href, "_blank", "새창 이동");
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonStyle
      $color={$color}
      $backgroundColor={$backgroundColor}
      disabled={disabled}
      onClick={handleClick}
      $isBackground={isBackground}
      $isHover={isHover}
      $sx={$sx}
    >
      <IconWrapper $color={$color}>{children}</IconWrapper>
      {captionText && isHover && <Caption>{captionText}</Caption>}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{
  $color: string;
  $backgroundColor: string;
  disabled: boolean;
  $isBackground: boolean;
  $isHover: boolean;
  $sx?: Record<string, any>;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.$isBackground && !props.disabled
      ? props.$backgroundColor
      : "transparent"};
  color: ${(props) =>
    props.$isBackground ? props.$color : props.$backgroundColor};
  border-radius: 50%;
  position: relative;

  &:hover {
    background-color: ${(props) =>
      props.$isHover && !props.disabled
        ? props.$backgroundColor
          ? darken(props.$backgroundColor, 0.2)
          : theme.colors.primary.dark
        : "transparent"};
    color: ${(props) =>
      props.$isHover && !props.disabled
        ? theme.colors.grey[100]
        : props.$color};
  }

  &:disabled {
    background-color: ${(props) =>
      props.$isBackground ? theme.colors.disabled.contained : "transparent"};
    color: ${theme.colors.disabled.outlined};
    cursor: not-allowed;
  }

  ${(props) => props.$sx && css({ ...props.$sx })}
`;

const IconWrapper = styled.span<{ $color: string }>`
  margin: 2px;
  display: flex;
  color: ${(props) => props.$color};
`;

const Caption = styled.p`
  width: max-content;
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  color: ${theme.colors.grey[200]};
  text-align: center;
  visibility: hidden;
  ${ButtonStyle}:hover & {
    visibility: visible;
  }
`;

export default IconButton;
