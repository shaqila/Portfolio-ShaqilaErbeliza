import illustration_hero from "../../../assets/illustration_hero.svg";
import { LuGithub, LuGitlab } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const HeroComponent = () => {
  const greeting = {
    grand: "Frontend Developer",
    title: "Shaqila Erbeliza",
    subTitle:
      "A Bachelor of Information Systems who is interested and passionate about programming and design. Has a good understanding of web development, database management, business process analysis, and system security. Having expertise in JavaScript and PHP programming languages with ReactJS and Laravel frameworks. In addition, I am an individual who has good analytical and interpersonal skills.",
  };
  const links = [
    {
      title: "Github",
      icon: <LuGithub size={24} />,
      url: "https://github.com/shaqila",
    },
    {
      title: "Gitlab",
      icon: <LuGitlab size={24} />,
      url: "https://gitlab.com/erbeliza",
    },
    {
      title: "Linkedin",
      icon: <FiLinkedin size={24} />,
      url: "https://www.linkedin.com/in/shaqila-erbeliza-4838b8164/",
    },
  ];

  return (
    <>
      <div className="w-full px-5 py-10 mx-auto lg:w-5/6">
        <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between">
          <div className="w-full max-w-xl text-center my-10 lg:text-left lg:w-auto">
            <div className="text-lg font-semibold text-[#585858]">
              {greeting.grand}
            </div>
            <div className="text-5xl mb-4 font-bold text-slate-800">
              Hello, my name is {greeting.title}
            </div>
            <div className="my-2 text-lg font-normal text-[#585858]">
              {greeting.subTitle}
            </div>
            <div className="my-7 flex flex-col items-center justify-center space-y-3 md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-3 lg:justify-start">
              <button
                type="submit"
                className="text-slate-800 font-bold py-1 px-3 border-2 border-slate-800 rounded-lg hover:shadow-md hover:-translate-y-1 hover:bg-blue-100 hover:border-blue-100 duration-75"
              >
                Resume
              </button>
              <div className="flex w-fit text-slate-800 bg-blue-100 font-bold py-2 px-5 rounded-lg space-x-4">
                {links.map(({ title, icon, url }) => (
                  <div key={url} className="relative group">
                    <a
                      href={url}
                      target="_blank"
                      className="text-slate-800 cursor-pointer"
                      rel="noreferrer"
                    >
                      {icon}
                    </a>
                    <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-blue-100 p-1 px-3 rounded-md transition-opacity duration-200 group-hover:opacity-100">
                      {title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-xs mx-5 lg:min-w-[35%]">
            <img alt="illustration_hero" src={illustration_hero} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
