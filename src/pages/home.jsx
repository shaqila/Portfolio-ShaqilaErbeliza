import FooterComponent from "../components/Fragments/Footer";
import HeroComponent from "../components/Fragments/Intro";
import NavbarComponent from "../components/Fragments/Navbar";
import PortfolioComponent from "../components/Fragments/Portfolio";
import TechStackComponent from "../components/Fragments/TechStack";
const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <TechStackComponent />
      <PortfolioComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
