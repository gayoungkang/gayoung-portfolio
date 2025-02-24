import Box from "@/components/Layout/Box";
import Slider from "@/components/Slider/Slider";
import Card from "@/components/Surfaces/Card";
import Typography from "@/components/Typography/Typography";
import { theme } from "@/styles/theme";
import { useTranslation } from "react-i18next";
import ProjectImg_1 from "@assets/images/sub_eventpage.png";
import ProjectImg_2 from "@assets/images/sub_loa.png";
import ProjectImg_3 from "@assets/images/sub_mbs.png";
import ProjectImg_4 from "@assets/images/sub_protoken.png";
import ProjectImg_5 from "@assets/images/sub_proup.png";
/**---------------------------------------------------------------------------/
 
 * ! DevelopmentWorkSection
 * * 메인 개발 작업물 영역
 
/**--------------------------------------------------------------------------*/
const DevelopmentWorkSection = () => {
  const { t } = useTranslation();

  const cardItems = [
    {
      title: t("DEVELOPMENT_TEXT"),
      description: t("DEVELOPMENT_TEXT"),
      image: ProjectImg_1,
    },
    {
      title: t("DEVELOPMENT_TEXT"),
      description: t("DEVELOPMENT_TEXT"),
      image: ProjectImg_2,
    },
    {
      title: t("DEVELOPMENT_TEXT"),
      description: t("DEVELOPMENT_TEXT"),
      image: ProjectImg_3,
    },
    {
      title: t("DEVELOPMENT_TEXT"),
      description: t("DEVELOPMENT_TEXT"),
      image: ProjectImg_4,
    },
    {
      title: t("DEVELOPMENT_TEXT"),
      description: t("DEVELOPMENT_TEXT"),
      image: ProjectImg_5,
    },
  ];

  return (
    <>
      <Box
        $flexDirection='column'
        $alignItems='center'
        $justifyContent='center'
      >
        <Typography
          $variant='h2'
          $marginBottom='0.7%'
          $color={theme.colors.primary.main}
          $textAlign='center'
        >
          {t("DEVELOPMENT_TITLE")}
        </Typography>
        <Typography $variant='h2' $marginBottom='3%' $textAlign='center'>
          {t("DEVELOPMENT_TEXT")}
        </Typography>
      </Box>
      <Slider
        centeredSlides
        loop={false}
        items={cardItems.map((item, index) => (
          <Card key={index}>
            <Typography
              $variant='h3'
              $marginBottom='5%'
              $marginTop='8%'
              $textAlign='left'
            >
              {item.title}
            </Typography>
            <Typography
              $variant='p'
              $marginBottom='15%'
              $marginTop='8%'
              $textAlign='left'
            >
              {item.description}
            </Typography>
            <img src={item.image} alt='프로젝트 이미지' />
          </Card>
        ))}
      />
    </>
  );
};

export default DevelopmentWorkSection;
