import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import IconButton from "@/components/Button/IconButton";
import { useTranslation } from "react-i18next";
import Popover from "@/components/util/Popover";
import Button from "@/components/Button/Button";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { zIndexHeader } from "@/styles/zIndex";
/**---------------------------------------------------------------------------/
  * ! Header 컴포넌트
  * * 페이지 상단에 고정되는 헤더 컴포넌트
  * * 스크롤 시 배경색이 변경되며, `useState`와 `useEffect`를 사용하여 감지
  * * 로고를 클릭하면 홈(`/`)으로 이동
  * * 언어 변경 버튼을 클릭하면 `Popover`가 열리고, 사용자가 언어를 선택 가능
  * * `i18next` 라이브러리를 활용하여 다국어 지원
  * * `$isScrolled`: 스크롤 여부에 따라 헤더의 배경 색상 변경
  * * `handleChangeLanguage`: 선택한 언어로 변경하는 함수
  * * `handlePopoverOpen`, `handlePopoverClose`: 언어 변경 팝업 열고 닫기
  * * `zIndexHeader`: 헤더의 z-index 값으로 다른 요소 위에 표시됨
/**--------------------------------------------------------------------------*/
const Header = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChangeLanguage = (language: "en" | "fr" | "ja" | "ko") => {
    i18n.changeLanguage(language).then(() => {});
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  return (
    <HeaderStyle $isScrolled={isScrolled}>
      <IconButton isBackground={false} isHover={false}>
        <a href='/'>
          <img src={`/logo_white.png`} alt='로고' width='30px' height='auto' />
        </a>
      </IconButton>
      <IconButton
        captionText='언어 변경하기'
        isBackground={false}
        $backgroundColor={theme.colors.background.light}
        onClick={handlePopoverOpen}
      >
        <GTranslateIcon />
      </IconButton>
      <Popover anchorEl={anchorEl} open={open} onClose={handlePopoverClose}>
        <Button
          onClick={() => handleChangeLanguage("ko")}
          $marginRight='10px'
          $backgroundColor={theme.colors.grey[700]}
        >
          🇰🇷 한국
        </Button>
        <Button
          onClick={() => handleChangeLanguage("en")}
          $marginRight='10px'
          $backgroundColor={theme.colors.grey[700]}
        >
          🇺🇸 English
        </Button>
        <Button
          onClick={() => handleChangeLanguage("ja")}
          $marginRight='10px'
          $backgroundColor={theme.colors.grey[700]}
        >
          🇯🇵 日本語
        </Button>
        <Button
          onClick={() => handleChangeLanguage("fr")}
          $backgroundColor={theme.colors.grey[700]}
        >
          🇫🇷 Français
        </Button>
      </Popover>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.grey[100]};
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "rgb(30 30 30 / 80%)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  z-index: ${zIndexHeader};
`;
