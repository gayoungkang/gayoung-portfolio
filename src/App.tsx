import i18n from "@/i18n";
import MainPage from "@/pages/main";
import { GlobalStyle } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle />
            <Routes>
              <Route path='/' element={<MainPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
