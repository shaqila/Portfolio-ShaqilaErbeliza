import CardComponent from "../Card";

const PortfolioComponent = () => {
  return (
    <div
      id="portfolio"
      className="container max-w-5xl mx-auto flex flex-wrap overflow-hidden justify-center items-center gap-10"
    >
      <div className="text-center mx-12 md:mx-auto">
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
      />
      <CardComponent
        title="JobHunt Jobjobjojbo asdasd"
        tools="Reactjs, Tailwind"
        description="In this code, we use grid to create three rows within the container, and then we position the description <div> to be at the end to create three rows within the container, and then we position the description <div> to be at the end of the container using the self-end class."
      />
      <CardComponent />
    </div>
  );
};

export default PortfolioComponent;
