import CardComponent from "../Card";
import jobHuntImg from "../../../assets/portfolio/jobhunt.png";
import inGigsImg from "../../../assets/portfolio/ingigs.png";
import elearningImg from "../../../assets/portfolio/elearning.png";
import newsImg from "../../../assets/portfolio/newsletter.png";

const PortfolioComponent = () => {
  return (
    <div className="container max-w-5xl mx-auto flex flex-wrap py-20 overflow-hidden justify-center items-center gap-10">
      <div id="projects" className="text-center mx-12 md:mx-auto">
        <div className="text-4xl font-semibold">Projects</div>
        <div>
          Discover a curated selection of my finest projects, each displayed in
          this showcase, highlighting my exceptional skills and innovation.
        </div>
      </div>
      <CardComponent
        title="JobHunt"
        tools="Reactjs, Tailwind"
        description="In this code, we use grid to create three rows within the container, and then we position the description <div> to be at the end of the container using the self-end class."
        thumbnail={jobHuntImg}
        view={"https://jobhunt-withapi.vercel.app/"}
      />
      <CardComponent
        title="InGigs"
        tools="Reactjs, Tailwind"
        description="In this code, we use grid to create three rows within the container, and then we position the description"
        thumbnail={inGigsImg}
        view={"https://inigigs.my.id/"}
      />
      <CardComponent
        title="E-Learning"
        tools="Reactjs, MinimalUI"
        description="This is e-learning website project with my friends, i did the slicing design from Figma to JS with MinimalUI."
        thumbnail={elearningImg}
        view={elearningImg}
      />
      <CardComponent
        title="Newsletter SignUp"
        tools="Reactjs, Tailwind"
        description="This is e-learning website project with my friends, i did the slicing design from Figma to JS with MinimalUI."
        thumbnail={newsImg}
        view={"https://newsletter-signup-erbeliza.vercel.app/"}
      />
    </div>
  );
};

export default PortfolioComponent;
