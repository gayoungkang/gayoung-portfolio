import Button from "@/components/Button/Button";
import Box from "@/components/Layout/Box";
import Typography from "@/components/Typography/Typography";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { theme } from "@/styles/theme";
import { useTranslation } from "react-i18next";
import file from "@assets/files/GaYoung_CV.pdf";
/**---------------------------------------------------------------------------/
 
 * ! BackGroundSection
 * * 메인 간단한 자기소개 영역
 
/**--------------------------------------------------------------------------*/
const BackGroundSection = () => {
  const { t } = useTranslation();

  return (
    <Box $flexDirection='column' $alignItems='center'>
      <Typography $variant='h6' $marginBottom='1%'>
        {t("BACKGROUND_SECTION_MESSAGE_CAPTION")}
      </Typography>
      <Typography $variant='h2' $marginBottom='3%' $textAlign='center'>
        {t("BACKGROUND_SECTION_MESSAGE_TITLE")}
      </Typography>
      <Typography
        $variant='p'
        $color={theme.colors.grey[700]}
        $textAlign='center'
      >
        {t("BACKGROUND_SECTION_MESSAGE_TEXT")}
      </Typography>
      <Button
        startIcon={<FileDownloadIcon />}
        $marginTop='5%'
        $backgroundColor={theme.colors.grey[800]}
        $fileName='GaYoung_CV'
        $fileUrl={file}
      >
        {t("DOWNLOAD_CV")}
      </Button>
    </Box>
  );
};
export default BackGroundSection;
