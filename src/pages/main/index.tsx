import Aside from "@/components/Layout/Aside";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";
import BackGroundSection from "@/containers/main/BackGroundSection";
import ContactUsAside from "@/containers/main/ContactUsAside";
import CountactUsSection from "@/containers/main/CountactUsSection";
import DevelopmentWorkSection from "@/containers/main/DevelopmentWorkSection";
import MainTextAnimationSection from "@/containers/main/MainTextAnimationSection";
import TechnologyStackSection from "@/containers/main/TechnologyStackSection";
import { theme } from "@/styles/theme";

/**---------------------------------------------------------------------------/
 
 * ! MainPage
 * * 메인 페이지
 
/**--------------------------------------------------------------------------*/
const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Section $height='70vh' $backgroundColor={theme.colors.background.dark}>
          <MainTextAnimationSection />
        </Section>
        <Section>
          <BackGroundSection />
        </Section>
        <Section $backgroundColor={theme.colors.background.light}>
          <DevelopmentWorkSection />
        </Section>
        <Section $backgroundColor={theme.colors.background.main}>
          <TechnologyStackSection />
        </Section>
        <Section $backgroundColor={theme.colors.background.dark}>
          <CountactUsSection />
        </Section>
      </Main>
      <Aside $backgroundColor={theme.colors.background.light}>
        <ContactUsAside />
      </Aside>
      <Footer />
    </>
  );
};

export default MainPage;
