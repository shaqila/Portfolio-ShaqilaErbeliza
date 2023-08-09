import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Fragments/Navbar";
import FooterComponent from "./components/Fragments/Footer";
import HomePage from "./pages/Home";
import { SkillsPage } from "./pages/Skills";
import { ProjectsPage } from "./pages/Projects";
import { ContactPage } from "./pages/Contact";

function App() {
  return (
    <main className="w-screen min-h-screen">
      <NavbarComponent />
      <section className="px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </section>
      <FooterComponent />
    </main>
  );
}

export default App;
