import { styled } from "styled-components";
import { ReactNode } from "react";
/**---------------------------------------------------------------------------/
  * ! Main 컴포넌트
  * * 페이지의 메인 컨텐츠 영역을 담당하는 레이아웃 컴포넌트
  * * 자식 컴포넌트 (`children`)를 받아서 내부에 표시
  * * `display: flex`와 `flex-direction: column`을 사용하여 자식 요소들을 수직 배치
  * * 배경 색상은 `theme.colors.background.light`로 설정하여 밝은 느낌을 유지
  * * `flex-grow: 1`을 적용하여 상위 컨테이너에서 가용 공간을 최대로 차지하도록 설정
  * * `width: 100%`를 지정하여 전체 너비를 차지하도록 구성
/**--------------------------------------------------------------------------*/

const Main = ({ children }: { children: ReactNode }) => (
  <MainStyle>{children}</MainStyle>
);

export const MainStyle = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background.light};
`;

export default Main;
