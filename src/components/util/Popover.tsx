import { zIndexAlert } from "@/styles/zIndex";
import { useRef, useEffect, ReactNode } from "react";
import { styled } from "styled-components";

export type PopoverProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  anchorOrigin?: { vertical: "top" | "bottom"; horizontal: "left" | "right" };
  transformOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
};
/**---------------------------------------------------------------------------/
  * ! Popover 컴포넌트
  * * 특정 엘리먼트(Anchor) 주변에 팝오버를 표시하는 컴포넌트
  * * `anchorEl`: 팝오버가 표시될 기준 엘리먼트 (필수)
  * * `open`: 팝오버의 열림/닫힘 상태 (필수)
  * * `onClose`: 팝오버 닫기 이벤트 핸들러 (필수)
  * * `children`: 팝오버 안에 표시될 내용 (필수)
  * * `anchorOrigin`: 기준 엘리먼트의 팝오버 위치 (기본값: `{ vertical: "bottom", horizontal: "right" }`)
  * * `transformOrigin`: 팝오버의 변환 기준 위치 (기본값 없음)
  * * 클릭 시 팝오버 외부를 클릭하면 팝오버가 닫히도록 이벤트 리스너 추가
  * * 팝오버가 열리면, 기준 엘리먼트의 위치를 기준으로 팝오버 위치 결정
  * * `z-index`를 `zIndexAlert`로 설정하여 팝오버가 다른 요소 위에 표시되도록 함
/**--------------------------------------------------------------------------*/

const Popover = (props: PopoverProps) => {
  const {
    anchorEl,
    open,
    onClose,
    children,
    anchorOrigin = { vertical: "bottom", horizontal: "right" },
  } = props;

  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open || !anchorEl) return null;

  const { bottom, height } = anchorEl.getBoundingClientRect();

  const anchorVertical = anchorOrigin.vertical;
  const anchorHorizontal = anchorOrigin.horizontal;

  const popoverTop = anchorVertical === "bottom" ? bottom : bottom - height;

  const popoverLeft = anchorHorizontal === "left" ? 0 : undefined;
  const popoverRight = anchorHorizontal === "right" ? 0 : undefined;

  return (
    <PopoverContainer
      ref={popoverRef}
      $top={popoverTop}
      $popoverLeft={popoverLeft}
      $popoverRight={popoverRight}
    >
      {children}
    </PopoverContainer>
  );
};

export default Popover;

const PopoverContainer = styled.div<{
  $top: number;
  $popoverLeft?: number;
  $popoverRight?: number;
}>`
  display: flex;
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $popoverLeft }) =>
    $popoverLeft !== undefined ? `${$popoverLeft}px` : "auto"};
  right: ${({ $popoverRight }) =>
    $popoverRight !== undefined ? `${$popoverRight}px` : "auto"};
  background-color: ${({ theme }) => theme.colors.background.light};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: ${zIndexAlert};
`;
