import Box from "@/components/Layout/Box";
import Typography from "@/components/Typography/Typography";
import { useTranslation } from "react-i18next";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { EMAIL_ADDR, PHONE_NUMBER } from "@/constants/string";
import Button from "@/components/Button/Button";
import { theme } from "@/styles/theme";
import { useState } from "react";
import Alert, { AlertItemProps } from "@/components/Feedback/Alert";
/**---------------------------------------------------------------------------/
 
 * ! ContactUsAside
 * * 메인 고객 응대 시간 영역
 
/**--------------------------------------------------------------------------*/
const ContactUsAside = () => {
  const { t } = useTranslation();
  const [alerts, setAlerts] = useState<AlertItemProps[]>([]);

  const handleCall = () => {
    window.location.href = `${PHONE_NUMBER}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDR);
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { message: t("SUCCESS_INVALID_TEXT_COPY"), severity: "success" },
      ]);
    } catch (err) {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        {
          message: `${t("SUCCESS_INVALID_TEXT_COPY")} ${err}`,
          severity: "error",
        },
      ]);
    }
  };

  return (
    <>
      <Box $alignItems='center' $justifyContent='space-around'>
        <div>
          <Typography
            $variant='h2'
            $marginBottom='10px'
            $color={theme.colors.grey[100]}
          >
            {t("CONTACT_US_ASIDE_MESSAGE_TITLE")}
          </Typography>
          <Typography $variant='h6' $color={theme.colors.grey[600]}>
            {t("CONTACT_US_ASIDE_MESSAGE_TEXT")}
          </Typography>
        </div>
        <div>
          <Button
            onClick={handleCall}
            $variant='text'
            startIcon={<LocalPhoneIcon />}
            $color={theme.colors.grey[600]}
          >
            {t("CONTACT_US_ASIDE_PHONE_MESSAGE")}
          </Button>
          <Button
            onClick={handleCopy}
            $variant='text'
            startIcon={<AlternateEmailIcon />}
            $color={theme.colors.grey[600]}
          >
            {t("CONTACT_US_ASIDE_EMAIL_MESSAGE")}
          </Button>
        </div>
      </Box>

      <Alert alerts={alerts} />
    </>
  );
};

export default ContactUsAside;
