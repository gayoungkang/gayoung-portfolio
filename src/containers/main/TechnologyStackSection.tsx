import { useRef, useEffect, useState } from "react";
import { styled } from "styled-components";
import Box from "@/components/Layout/Box";
import Card from "@/components/Surfaces/Card";
import Typography from "@/components/Typography/Typography";
import { theme } from "@/styles/theme";
import Progress from "@/components/Feedback/ProgressBar";
import { useTranslation } from "react-i18next";
import Icon_1 from "@assets/images/react_icon.svg";
import Icon_2 from "@assets/images/typescript_icon.svg";
import Icon_3 from "@assets/images/nextjs_icon.svg";
import Icon_4 from "@assets/images/html5_icon.svg";
import Icon_5 from "@assets/images/css3_icon.svg";
import Icon_6 from "@assets/images/javascript_icon.svg";
import LazyImage from "@/components/Feedback/LazyImage";
/**---------------------------------------------------------------------------/
 
 * ! MainTextAnimationSection
 * * 메인 스킬 부분 영역
 
/**--------------------------------------------------------------------------*/
const TechnologyStackSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const cardItems = [
    { title: t("TECHNOLOGY_CARD_REACT_TITLE"), value: 90, image: Icon_1 },
    { title: t("TECHNOLOGY_CARD_NEXT_TITLE"), value: 70, image: Icon_2 },
    { title: t("TECHNOLOGY_CARD_TYPESCRIPT_TITLE"), value: 95, image: Icon_3 },
    { title: t("TECHNOLOGY_CARD_HTML_TITLE"), value: 98, image: Icon_4 },
    { title: t("TECHNOLOGY_CARD_CSS_TITLE"), value: 97, image: Icon_5 },
    { title: t("TECHNOLOGY_CARD_JAVASCRIPT_TITLE"), value: 90, image: Icon_6 },
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <Box
        $alignItems='center'
        $justifyContent='center'
        $flexDirection='column'
      >
        <Typography
          $variant='h2'
          $marginBottom='0.7%'
          $color={theme.colors.primary.main}
          $textAlign='center'
        >
          {t("TECHNOLOGY_TITLE")}
        </Typography>
        <Typography $variant='h2' $marginBottom='3%'>
          {t("TECHNOLOGY_TEXT")}
        </Typography>
        <Box $width='50%' $justifyContent='space-around'>
          {cardItems.map((item, index) => (
            <Card
              key={index}
              $isHover={false}
              $backgroundColor={theme.colors.background.light}
              $sx={{
                alignItems: "flex-start",
                marginBottom: "20px",
                "&:nth-child(odd)": {
                  marginRight: "20px",
                },
                flex: "1 1 40%",
              }}
            >
              <LazyImage
                src={item.image}
                alt='로고 이미지'
                width='48px'
                height='48px'
              />
              <Typography
                $variant='h3'
                $marginBottom='5%'
                $marginTop='8%'
                $fontFamily='en'
              >
                {item.title}
              </Typography>
              <Progress value={item.value} animate={isVisible} />
            </Card>
          ))}
        </Box>
      </Box>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export default TechnologyStackSection;
