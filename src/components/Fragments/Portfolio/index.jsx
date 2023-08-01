import CardComponent from "../Card";

const PortfolioComponent = () => {
  return (
    <div className="container max-w-5xl mx-auto bg-red-400 flex flex-row flex-nowrap overflow-visible justify-center items-center gap-10">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default PortfolioComponent;
