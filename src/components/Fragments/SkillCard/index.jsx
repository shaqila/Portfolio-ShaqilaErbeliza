import reactIcon from "../../../assets/react.svg";
import tailwindIcon from "../../../assets/tailwind-css-icon.webp";
import nextIcon from "../../../assets/next-js-icon.png";
import jsIcon from "../../../assets/js-icon.png";
import bootstrapIcon from "../../../assets/bootstrap_logo.svg.png";
import muiIcon from "../../../assets/mui-logo.png";

export const SkillCard = () => {
  return (
    <div
      id="techstack"
      className="container max-w-5xl mx-auto flex flex-wrap py-20 overflow-hidden justify-center items-center gap-10"
    >
      <div id="stack" className="text-center text-slate-800 mx-12 md:mx-auto">
        <div className="text-4xl font-bold">Tech Stack</div>
        <div className="md:mx-20 mt-5">
          List of hard skills that I familiar with. List of hard skills that I
          familiar with. List of hard skills that I familiar with. List of hard
          skills that I familiar with. List of hard skills that I familiar with.
        </div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={reactIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">React Js</div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={tailwindIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">Tailwind CSS</div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={bootstrapIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">Bootstrap</div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={jsIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">Javascript</div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={muiIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">Material UI</div>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
        <img className="w-[50px] rounded p-2" src={nextIcon} alt="React" />
        <div className="font-semibold text-slate-800 text-sm">Next Js</div>
      </div>
    </div>
  );
};
