import { theme } from "@/styles/theme";
import { css } from "styled-components";
/**---------------------------------------------------------------------------/
  * ! Media Queries (반응형 디자인)
  * * 다양한 화면 크기에 맞춘 스타일을 적용할 수 있도록 도와주는 미디어 쿼리 함수
  * * `mobile`, `tablet`, `desktop` 각각의 화면 크기에 맞는 스타일을 적용
  * * 각 스타일은 `theme.media`에서 정의된 모바일, 태블릿, 데스크탑 크기에 따라 동작
/**--------------------------------------------------------------------------*/
const media = {
  mobile: (styles: TemplateStringsArray) => css`
    @media ${theme.media.mobile} {
      ${styles}
    }
  `,
  tablet: (styles: TemplateStringsArray) => css`
    @media ${theme.media.tablet} {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray) => css`
    @media ${theme.media.desktop} {
      ${styles}
    }
  `,
};

export default media;
