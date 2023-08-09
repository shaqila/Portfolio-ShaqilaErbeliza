import illustration_hero from "../../../assets/illustration_hero.svg";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandWhatsapp,
  TbBrandGmail,
} from "react-icons/tb";
import { HomeMotion } from "../../../common/motion/HomeMotion";
import { motion } from "framer-motion";

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
      icon: <TbBrandGithub size={24} />,
      url: "https://github.com/shaqila",
    },
    {
      title: "Linkedin",
      icon: <TbBrandLinkedin size={24} />,
      url: "https://www.linkedin.com/in/shaqila-erbeliza-4838b8164/",
    },
    {
      title: "Instagram",
      icon: <TbBrandInstagram size={24} />,
      url: "https://www.instagram.com/sqlrblz",
    },
    {
      title: "Whatsapp",
      icon: <TbBrandWhatsapp size={24} />,
      url: "https://wa.me/6285157574711",
    },
    {
      title: "Gmail",
      icon: <TbBrandGmail size={24} />,
      url: "mailto:shaqilaerbeliza@gmail.com",
    },
  ];

  const { description, image } = HomeMotion;

  return (
    <section className="flex flex-col-reverse items-center justify-center p-6 lg:flex-row lg:justify-between">
      <motion.div
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
        className="w-full max-w-xl text-center my-10 lg:text-left lg:w-auto"
      >
        <div className="text-lg font-semibold text-[#585858]">
          {greeting.grand}
        </div>
        <div className="text-5xl mb-4 font-bold text-slate-800">
          Hello, my name is {greeting.title}
        </div>
        <div className="my-2 text-lg font-normal text-[#585858]">
          {greeting.subTitle}
        </div>
        <div className="my-7 flex flex-col items-center justify-center space-y-5 md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-5 lg:justify-start">
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
      </motion.div>
      <div
        className="max-w-xs mx-5 lg:min-w-[35%]"
        // className="flex flex-1 items-center justify-center bg-gradient-to-bl from-blue-200 via-red-300 to-white overflow-hidden max-w-xs mx-5 lg:min-w-[35%]"
      >
        <motion.img
          alt="illustration_hero"
          src={illustration_hero}
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
        />
      </div>
    </section>
  );
};

export default HeroComponent;
