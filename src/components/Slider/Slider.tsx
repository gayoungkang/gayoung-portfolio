import { ReactNode } from "react";
import styled from "styled-components";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { theme } from "@/styles/theme";

export type SliderProps = SwiperProps & {
  items: ReactNode[];
  $sx?: Record<string, any>;
};
/**---------------------------------------------------------------------------/
  * ! Slider 컴포넌트
  * * `Swiper` 라이브러리를 사용하여 슬라이드 기능을 제공
  * * `items` 배열을 받아 개별 슬라이드로 렌더링
  * * `spaceBetween`: 슬라이드 간 간격 (기본값: `20`)
  * * `slidesPerView`: 한 번에 표시할 슬라이드 개수 (기본값: `4`)
  * * `centeredSlides`: 활성 슬라이드를 중앙 정렬할지 여부 (기본값: `false`)
  * * `freeMode`: 슬라이드를 자유롭게 스크롤할 수 있는지 여부 (기본값: `true`)
  * * `loop`: 슬라이드 무한 반복 여부 (기본값: `true`)
  * * `mousewheel`: 마우스 휠을 이용한 슬라이드 이동 활성화 여부 (기본값: `true`)
  * * `navigation` 버튼 제공 (`swiper-button-prev`, `swiper-button-next`)
  * * 네비게이션 버튼은 기본적으로 숨겨져 있으며, `hover` 시 표시됨
  * * `swiper-slide`는 기본적으로 수직 정렬을 위해 `flex` 레이아웃을 사용
/**--------------------------------------------------------------------------*/

const Slider = (props: SliderProps) => {
  const {
    items,
    spaceBetween = 20,
    slidesPerView = 4,
    centeredSlides = false,
    freeMode = true,
    loop = true,
    mousewheel = true,
  } = props;
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        mousewheel={mousewheel}
        modules={[Navigation, Mousewheel]}
        centeredSlides={centeredSlides}
        freeMode={freeMode}
        loop={loop}
        {...props}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 25px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${theme.colors.grey[200]};
    background-color: ${theme.colors.grey[600]};
    opacity: 0;
    transform: scale(0.8);
    transition:
      transform 0.5s ease-in,
      opacity 0.7s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
  }

  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default Slider;
