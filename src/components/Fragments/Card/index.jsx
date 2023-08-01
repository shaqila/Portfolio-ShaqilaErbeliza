/* eslint-disable react/prop-types */

import jobHuntImg from "../../../assets/portfolio/jobhunt.png";
const CardComponent = ({ title, description, tools }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 h-80  rounded-lg overflow-hidden shadow-md bg-white cursor-pointer group transition-all">
        <img
          src={jobHuntImg}
          alt="Card Image"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 px-4 py-16 bg-gradient-to-b from-transparent to-slate-900 flex">
          <div className="absolute bottom-0 left-0 right-0 pb-2 px-2 text-white text-2xl font-bold uppercase text-center group-hover:opacity-0 transition-opacity">
            {title}
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center opacity-0 
         group-hover:opacity-100
        transition-opacity"
        >
          <div className="text-white items-center justify-between text-center p-4 m-2 flex flex-col h-full max-w-full overflow-x-hidden">
            <div className="">
              <div className="text-5xl items-start">{title}</div>
              <div className="">{tools}</div>
            </div>
            <div className="items-end overflow-auto">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
