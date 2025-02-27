import Box from "@/components/Layout/Box";
import Typography from "@/components/Typography/Typography";
import { BLOG_URL, GIT_HUB_URL } from "@/constants/string";
import { TextFlipAnimation } from "@/styles/animation";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";
import gifImage from "@assets/images/emoji.gif";
import IconButton from "@/components/Button/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { useTranslation } from "react-i18next";
import LazyImage from "@/components/Feedback/LazyImage";

/**---------------------------------------------------------------------------/
 
 * ! MainTextAnimationSection
 * * 메인 페이지 메인 영역
 
/**--------------------------------------------------------------------------*/
const MainTextAnimationSection = () => {
  const { t } = useTranslation();

  const texts = t("MAIN_TEXTS_ANIMATION_ARR", { returnObjects: true });

  const textItems = Array.isArray(texts) ? texts : [];
  return (
    <Box $height='100%' $alignItems='center' $justifyContent='space-around'>
      <Box $flexDirection='column' $width='auto'>
        <Typography
          $variant='h1'
          $color={theme.colors.grey[100]}
          $marginBottom='10px'
        >
          {t("MAIN_MESSAGE_TITLE")}
        </Typography>
        <FlipWrap>
          <Flip>
            {textItems.map((text, index) => (
              <Typography
                key={index}
                $variant='h1'
                $color={theme.colors.grey[100]}
              >
                {text}
              </Typography>
            ))}
          </Flip>
          <Typography
            $variant='h1'
            $color={theme.colors.grey[100]}
            $marginTop='10px'
          >
            {t("MAIN_MESSAGE_TEXT")}
          </Typography>
        </FlipWrap>
        <Box $marginTop='5%'>
          <IconButton
            href={GIT_HUB_URL}
            captionText={t("MAIN_MESSAGE_GITHUB_BUTTON_HOVER_TEXT")}
            $backgroundColor={theme.colors.background.light}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={BLOG_URL}
            captionText={t("MAIN_MESSAGE_BLOG_BUTTON_HOVER_TEXT")}
            $backgroundColor={theme.colors.background.light}
          >
            <WysiwygIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <LazyImage src={gifImage} alt='gifImage' width='500px' height='500px' />
      </Box>
    </Box>
  );
};

export default MainTextAnimationSection;

const FlipWrap = styled.ul`
  position: relative;
`;

const Flip = styled.li`
  height: 50px;
  overflow: hidden;
  h1 {
    width: 100%;
    height: 100%;
    line-height: 45px;
  }
  h1:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    animation: ${TextFlipAnimation} 5s linear infinite;
  }
  h1:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
  h1:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
