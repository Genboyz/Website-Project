import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
const teamMembers = [
  {
    name: "Tajur Tamirayehu",
    role: "Journalist, Certified Photographer, Certified Barista, Certified Cupper, Concept Developer and Creator",
    description:
      "Tajur brings extensive expertise and passion for coffee to the team.",
    image: "../assets/images/tajur.jpg",
  },
  {
    name: "Production Crew",
    role: "",
    description:
      "A team of professionals responsible for producing high-quality content.",
    image: "",
  },
  {
    name: "Social Media Manager and Content Creator",
    role: "",
    description:
      " Experts in managing social media presence and creating engaging content.",
    image: "",
  },
  {
    name: "Graphics Designer",
    role: "",
    description:
      " Skilled in visual design to support branding and promotional efforts.",
    image: "",
  },
  {
    name: " Web Developer",
    role: "",
    description:
      "Ensures a seamless online experience through a well-maintained website",
    image: "",
  },
];
const Team = () => {
  return (
    <div className=" flex-col justify-center my-12 text-center  md:w-[70%] mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative  flex items-center justify-center my-[100px] md:mt-[150px]  bottom-4 rounded-lg"
      >
        <h1 className="text-4xl md:text-6xl text-yellow-950 font-bold mb-7 pb-3 border-b-4 border-yellow-400">
          Meet Out Team
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-8 flex gap-5 flex-wrap justify-center items-center"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center w-[400px] h-[200px] flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-yellow-500">{member.role}</p>
            <p className="mt-2 text-gray-700">{member.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
