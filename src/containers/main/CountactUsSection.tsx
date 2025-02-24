import Button from "@/components/Button/Button";
import TextField from "@/components/Input/TextField";
import Box from "@/components/Layout/Box";
import Typography from "@/components/Typography/Typography";
import { theme } from "@/styles/theme";
import { useTranslation } from "react-i18next";
/**---------------------------------------------------------------------------/
 
 * ! CountactUsSection
 * * 메인 문의 하기 영역
 
/**--------------------------------------------------------------------------*/
const CountactUsSection = () => {
  const { t } = useTranslation();
  return (
    <Box $justifyContent='center' $flexDirection='column' $alignItems='center'>
      <Typography $variant='h2' $marginBottom='5%' $textAlign='center'>
        {t("CONTACT_US_SECTION_MESSAGE_TITLE")}
      </Typography>

      <Box
        $width='60%'
        $height='400px'
        $flexDirection='column'
        $flexWrap='wrap'
        $justifyContent='space-around'
        $sx={{ maxWidth: "600px" }}
      >
        <form action=''>
          <TextField
            placeholder={t("CONTACT_US_SECTION_TEXTFIELD_PLACEHOLDER_NAME")}
            color={theme.colors.white}
            $backgroundColor={theme.colors.background.light}
            $marginBottom='10px'
          />
          <TextField
            placeholder={t("CONTACT_US_SECTION_TEXTFIELD_PLACEHOLDER_COMPANY")}
            color={theme.colors.white}
            $backgroundColor={theme.colors.background.light}
            $marginBottom='10px'
          />

          <TextField
            placeholder={t("CONTACT_US_SECTION_TEXTFIELD_PLACEHOLDER_EMAIL")}
            color={theme.colors.white}
            $backgroundColor={theme.colors.background.light}
            $marginBottom='10px'
          />
          <TextField
            placeholder={t(
              "CONTACT_US_SECTION_TEXTFIELD_PLACEHOLDER_PHONE_NUMBER"
            )}
            color={theme.colors.white}
            $backgroundColor={theme.colors.background.light}
            $marginBottom='10px'
          />
          <TextField
            multiline
            rows={4}
            placeholder={t(
              "CONTACT_US_SECTION_TEXTFIELD_PLACEHOLDER_PHONE_MESSAGE"
            )}
            color={theme.colors.white}
            $backgroundColor={theme.colors.background.light}
            $marginBottom='10px'
          />
          <Button $width='100%'>보내기</Button>
        </form>
      </Box>
    </Box>
  );
};
export default CountactUsSection;
