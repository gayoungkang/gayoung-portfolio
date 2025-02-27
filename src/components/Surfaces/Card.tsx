import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type CardProps = {
  children: ReactNode;
  onClick?: () => void;
  $width?: string;
  $isHover?: boolean;
  $backgroundColor?: string;
  $color?: string;
  $borderRadius?: string;
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! Card 컴포넌트
  * * 다양한 스타일을 적용할 수 있는 카드 컴포넌트
  * * `children`: 카드 내부에 표시될 내용 (필수)
  * * `onClick`: 클릭 이벤트 핸들러 (선택사항)
  * * `$width`: 카드의 너비 (기본값: `100%`)
  * * `$isHover`: hover 효과 적용 여부 (기본값: `true`)
  * * `$backgroundColor`: 카드 배경 색상 (기본값: `theme.colors.background.dark`)
  * * `$color`: 카드 텍스트 색상 (기본값: `theme.colors.grey[100]`)
  * * `$borderRadius`: 카드의 테두리 둥글기 (기본값: `theme.borderRadius[20]`)
  * * `$sx`: 추가적인 스타일 적용을 위한 객체 (선택사항)
  * * hover 시, 카드에 그림자 및 확대 효과 적용
  * * 클릭 시 `onClick` 이벤트 발생 가능
/**--------------------------------------------------------------------------*/

const Card = (props: CardProps) => {
  const {
    children,
    onClick,
    $width,
    $isHover = true,
    $backgroundColor = theme.colors.background.dark,
    $color = theme.colors.grey[100],
    $borderRadius = theme.borderRadius[20],
    $sx = {},
  } = props;

  return (
    <ListItem
      onClick={onClick}
      $width={$width}
      $isHover={$isHover}
      $backgroundColor={$backgroundColor}
      $color={$color}
      $borderRadius={$borderRadius}
      $sx={$sx}
    >
      {children}
    </ListItem>
  );
};

export default Card;

const ListItem = styled.div<{
  $width?: string;
  $isHover: boolean;
  $backgroundColor: string;
  $color: string;
  $borderRadius: string;
  $sx?: Record<string, any>;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: ${(props) => props.$width || "100%"};
  padding: 20px 30px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border-radius: ${(props) => props.$borderRadius};
  transition: all 0.3s ease;
  box-shadow: 2px 4px 12px #00000014;

  ${({ $isHover }) =>
    $isHover &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: 2px 4px 16px #00000029;
        transform: scale3d(1.01, 1.01, 1.01);
      }

      &:active {
        transform: scale(1);
      }
    `}

  ${(props) =>
    props.$sx &&
    css`
      ${props.$sx}
    `}
`;
