import Typography from "@/components/Typography/Typography";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";
/**---------------------------------------------------------------------------/
  * ! Footer 컴포넌트
  * * 페이지 하단에 위치하는 `footer` 레이아웃 컴포넌트
  * * `Typography` 컴포넌트를 사용하여 저작권 정보를 표시
  * * 배경 색상은 `theme.colors.background.dark`로 설정하여 어두운 톤 유지
  * * 텍스트 색상은 `theme.colors.grey[700]`로 설정하여 가독성 확보
  * * `fontSize`는 `0.7rem`, `fontFamily`는 `'en'`으로 설정하여 스타일 통일
  * * `height`를 60px로 고정하여 일관된 레이아웃 유지
  * * `display: flex`를 활용하여 수평 및 수직 중앙 정렬 적용
/**--------------------------------------------------------------------------*/
const Footer = () => (
  <FooterStyle>
    <Typography
      $fontSize='0.7rem'
      $fontFamily='en'
      $color={theme.colors.grey[700]}
    >
      Copyright © GayoungKang. All rights reserved.
    </Typography>
  </FooterStyle>
);

export const FooterStyle = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

export default Footer;
