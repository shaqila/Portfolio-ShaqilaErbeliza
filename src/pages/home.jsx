import FooterComponent from "../components/Fragments/Footer";
import HeroComponent from "../components/Fragments/Intro";
import NavbarComponent from "../components/Fragments/Navbar";
import PortfolioComponent from "../components/Fragments/Portfolio";
const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <PortfolioComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
