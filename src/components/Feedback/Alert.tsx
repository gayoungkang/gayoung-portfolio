import { theme } from "@/styles/theme";
import { ReactNode, useEffect, useState } from "react";
import { styled } from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@/components/Button/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@/components/Typography/Typography";
import { zIndexAlert } from "@/styles/zIndex";

export type AlertItemProps = {
  message: ReactNode;
  severity?: "error" | "warning" | "info" | "success";
  autoCloseDuration?: number;
};
/**---------------------------------------------------------------------------/
  * ! AlertItem 컴포넌트
  * * 알림 메시지를 표시하는 컴포넌트
  * * `message`: 알림에 표시될 메시지 (ReactNode)
  * * `severity`: 알림의 심각도 (기본값: 'info')
  * * `autoCloseDuration`: 자동으로 알림을 닫을 시간 (단위: 밀리초, 기본값: 5000)
  * * 심각도에 따라 다른 아이콘을 표시하며, 자동으로 닫히는 기능을 제공
  * * 닫기 버튼을 클릭하면 알림이 사라짐
/**--------------------------------------------------------------------------*/
const AlertItem = ({
  message,
  severity = "info",
  autoCloseDuration = 5000,
}: AlertItemProps) => {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosed(true);
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoCloseDuration]);

  if (isClosed) return null;

  return (
    <StyledAlert $severity={severity}>
      <IconWrapper $severity={severity}>
        {severity === "error" && <ErrorOutlineIcon />}
        {severity === "warning" && <WarningAmberIcon />}
        {severity === "info" && <InfoIcon />}
        {severity === "success" && <CheckCircleOutlineIcon />}
      </IconWrapper>
      <Typography $variant='h6'>{message}</Typography>

      <IconButton
        onClick={() => setIsClosed(true)}
        isBackground={false}
        isHover={false}
        $sx={{ padding: 0 }}
      >
        <HighlightOffIcon />
      </IconButton>
    </StyledAlert>
  );
};
/**---------------------------------------------------------------------------/
  * ! Alert 컴포넌트
  * * 여러 개의 `AlertItem`을 관리하는 알림 목록 컴포넌트
  * * `alerts`: `AlertItemProps[]` 형식으로 알림 아이템들을 배열로 받음
  * * 알림은 화면 상단 중앙에 고정되어 표시되며, 여러 알림이 겹쳐서 표시될 수 있음
/**--------------------------------------------------------------------------*/
const Alert = ({ alerts }: { alerts: AlertItemProps[] }) => {
  return (
    <Wrapper>
      {alerts.map((alert, index) => (
        <AlertItem key={index} {...alert} />
      ))}
    </Wrapper>
  );
};
/**---------------------------------------------------------------------------/
  * ! Wrapper 스타일
  * * 알림을 고정된 위치에 표시하기 위한 스타일
  * * 화면 상단 중앙에 알림을 표시하며, 여러 알림이 겹쳐서 표시될 수 있도록 `flex` 레이아웃을 사용
/**--------------------------------------------------------------------------*/
const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  z-index: ${zIndexAlert};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
/**---------------------------------------------------------------------------/
  * ! StyledAlert 스타일
  * * 각 알림 아이템을 스타일링
  * * 알림의 배경색은 severity에 따라 변경 (`error`, `warning`, `info`, `success`)
  * * 아이콘, 메시지, 닫기 버튼을 가로로 배치
/**--------------------------------------------------------------------------*/
const StyledAlert = styled.div<{
  $severity: NonNullable<AlertItemProps["severity"]>;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $severity }) => theme.colors.validation[$severity]};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius[4]};
  padding: 10px 16px;
  width: 100%;
`;
/**---------------------------------------------------------------------------/
  * ! IconWrapper 스타일
  * * 알림 아이콘의 스타일
  * * 각 심각도에 맞는 아이콘 색상 및 크기를 설정
/**--------------------------------------------------------------------------*/
const IconWrapper = styled.span<{
  $severity: NonNullable<AlertItemProps["severity"]>;
}>`
  margin-right: 12px;
  font-size: 24px;
  color: ${theme.colors.white};
`;

export default Alert;
