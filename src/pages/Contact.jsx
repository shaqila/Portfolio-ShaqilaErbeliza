import { motion } from "framer-motion";
import { ContactCard } from "../components/Fragments/ContactCard";
import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

export const ContactPage = () => {
  const contacts = [
    {
      name: "Whatsapp",
      icon: <TbBrandWhatsapp size={80} />,
      description: "+6285157574711",
      link: "https://wa.me/+6285157574711",
    },
    {
      name: "Email",
      icon: <TbBrandGmail size={80} />,
      description: "shaqilaerbeliza@gmail.com",
      link: "mailto:shaqilaerbeliza@gmail.com",
    },
    {
      name: "Instagram",
      icon: <TbBrandInstagram size={80} />,
      description: "sqlrblz",
      link: "https://www.instagram.com/sqlrblz",
    },
    {
      name: "Github",
      icon: <TbBrandGithub size={80} />,
      description: "Bayusetiawan45",
      link: "https://github.com/Bayusetiawan45",
    },
    {
      name: "Linkedin",
      icon: <TbBrandLinkedin size={80} />,
      description: "Shaqila Erbeliza",
      link: "https://www.linkedin.com/in/shaqila-erbeliza-4838b8164/",
    },
  ];
  return (
    <motion.section
      //   initial={section.initial}
      //   animate={section.animated}
      //   transition={section.transition}
      className="space-y-6 py-20 text-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.name} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
