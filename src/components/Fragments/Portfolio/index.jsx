import CardComponent from "../Card";
import linksviewImg from "../../../assets/portfolio/linksview.png";
import jobHuntImg from "../../../assets/portfolio/jobhunt.png";
import inGigsImg from "../../../assets/portfolio/ingigs.png";
import elearningImg from "../../../assets/portfolio/elearning.png";
import manageImg from "../../../assets/portfolio/manage.png";
import newsImg from "../../../assets/portfolio/newsletter.png";
import adviceImg from "../../../assets/portfolio/advice.png";
import { SectionMotion } from "../../../common/motion/Section";
import { motion } from "framer-motion";

const PortfolioComponent = () => {
  const { section } = SectionMotion;

  return (
    <motion.section
      id="projects"
      className="container max-w-5xl mx-auto flex flex-wrap py-20 overflow-hidden justify-center items-center gap-10"
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
    >
      <div className="text-center text-slate-800 mx-12 md:mx-auto">
        <div className="text-4xl font-bold">Projects</div>
        <div className="md:mx-20 mt-5">
          This showcase of my personal projects that I have worked on
        </div>
      </div>
      <div className="mx-8 grid md:grid-cols-2 gap-8">
        <CardComponent
          title="Links View"
          tools="Reactjs, Sass"
          description="This website is created with React Js and Sass to preview and shrinking URL. It will help people to scanning URL's information before surfing for their safety use."
          thumbnail={linksviewImg}
          view={"https://links-view.vercel.app/"}
        />
        <CardComponent
          title="JobHunt"
          tools="Reactjs, Tailwind"
          description="This is my final project for Sanbercode Bootcamp, I used React Js with Tailwind CSS to created the Job Vacancy Website with API that give the users to search the job vacancy."
          thumbnail={jobHuntImg}
          view={"https://jobhunt-withapi.vercel.app/"}
        />
        <CardComponent
          title="InGigs"
          tools="Reactjs, Tailwind"
          description="This is a website that I created with React Js and Tailwind CSS. This website is created to give the information about Indonesian Artists or their Concerts. So that the users can know more about them and to find their concertmate."
          thumbnail={inGigsImg}
          view={"https://inigigs.my.id/"}
        />
        <CardComponent
          title="E-Learning"
          tools="Reactjs, MinimalUI"
          description="This is a Website E-Learning for school. This website is created with my team for a final project. I participated in this website on slicing the UI design from Figma to React JS with MinimalUI."
          thumbnail={elearningImg}
          view={elearningImg}
        />
        <CardComponent
          title="Manage - Landing Page"
          tools="React Js, Sass"
          description="I made this project as part of challanges on FrontendMentor. This makes me learned to create a landing page with SASS following the existing design.
          
          Note: This project is not completed yet with the responsive design."
          thumbnail={manageImg}
          view={"https://manage-erbeliza.vercel.app/"}
        />
        <CardComponent
          title="Newsletter SignUp"
          tools="Javascript, Tailwind"
          description="I made this project as part of challanges on FrontendMentor. This challanged me with basic form structure, validation, and submission."
          thumbnail={newsImg}
          view={"https://newsletter-signup-erbeliza.vercel.app/"}
        />
        <CardComponent
          title="Advice Generator"
          tools="Javascript, Tailwind"
          description="I made this project as part of challanges on FrontendMentor. This makes me learned about API fetching on Javascript."
          thumbnail={adviceImg}
          view={"https://advice-generator-erbeliza.vercel.app/"}
        />
      </div>
    </motion.section>
  );
};

export default PortfolioComponent;
