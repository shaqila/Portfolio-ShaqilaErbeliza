/* eslint-disable react/prop-types */

const CardComponent = ({ title, tools, description, thumbnail, view }) => {
  return (
    // <div className="flex justify-center items-center">
    //   <div className="relative w-80 h-80  rounded-lg overflow-hidden shadow-md bg-white cursor-pointer group transition-all">
    //     <img
    //       src={jobHuntImg}
    //       alt="Card Image"
    //       className="w-full h-full object-cover"
    //     />

    //     <div className="absolute bottom-0 left-0 right-0 px-4 py-16 bg-gradient-to-b from-transparent to-slate-900 flex">
    //       <div className="absolute bottom-0 left-0 right-0 pb-2 px-2 text-white text-2xl font-bold uppercase text-center group-hover:opacity-0 transition-opacity">
    //         {title}
    //       </div>
    //     </div>
    //     <div
    //       className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center opacity-0
    //      group-hover:opacity-100
    //     transition-opacity"
    //     >
    //       <div className="text-white items-center justify-between text-center p-4 m-2 flex flex-col h-full max-w-full overflow-x-hidden">
    //         <div className="">
    //           <div className="text-5xl items-start">{title}</div>
    //           <div className="">{tools}</div>
    //         </div>
    //         <div className="items-end overflow-auto">{description}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-[85%] justify-center items-center">
      <div className="relative w-full h-44 md:h-80 bg-whites rounded-2xl overflow-hidden shadow-xl border-t cursor-pointer group transition-all mx-auto flex">
        <div className="w-[50%]">
          <img
            src={thumbnail}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50%] flex flex-col h-full justify-between md:py-8 md:px-5 p-2">
          <div>
            <div className="md:text-3xl text-slate-800 font-bold">{title}</div>
            <div className="md:text-lg text-xs text-slate-500">{tools}</div>
          </div>
          <div className="items-end min-h-0">
            {/* <div className="text-xs md:text-sm md:my-4 my-2">{description}</div> */}
            <div className="text-xs text-slate-800 md:text-sm md:my-4 my-2 overflow-y-auto max-h-[4rem]">
              {description}
            </div>
            <a
              type="submit"
              className="text-slate-800 mx-auto w-fit block md:ml-0 text-xs md:text-base font-bold md:px-3 p-1 border md:border-2 border-slate-800 rounded-full hover:shadow-md hover:-translate-y-1 hover:bg-blue-100 hover:border-blue-100 duration-75"
              href={view}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
