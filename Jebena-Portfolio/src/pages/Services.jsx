import React from "react";
import holding_coffee from "../assets/images/hands-holding-raw-beans-of-ethiopian-coffee.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdEvent } from "react-icons/md";

function Services() {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative  flex items-center justify-center my-[100px]  bottom-4 rounded-lg"
      >
        <h1 className="text-4xl md:text-6xl text-yellow-950 font-bold lg:mb-5 mb-2 pb-3 border-b-4 border-yellow-400">
          Services
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-8 w-[80%] mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <MdOutlineRateReview size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Café Reviews
            </h2>
            <p className="text-xl text-center">
              Comprehensive reviews of coffee cafés to highlight the best places
              to experience Ethiopian coffee.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <FaPodcast size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Coffee Podcasts
            </h2>
            <p className="text-xl text-center">
              Engaging podcasts featuring discussions with coffee experts and
              enthusiasts.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:justify-center items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <MdMovie size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Documentaries
            </h2>
            <p className="text-xl text-center">
              In-depth documentaries exploring the history, culture, and
              processes of Ethiopian coffee.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <FaMicrophoneAlt size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Expert Talk Shows
            </h2>
            <p className="text-xl text-center">
              Live and recorded talk shows with certified baristas and coffee
              cuppers sharing their knowledge and experiences.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-start items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <FaHandsHelping size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Consulting Services
            </h2>
            <p className="text-xl text-center">
              Providing expert advice and consulting services to coffee
              businesses and enthusiasts.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-yellow-600">
            <MdEvent size={80} color="white" />
          </div>
          <div>
            <h2 className="text-3xl text-center font-bold mb-3">
              Event Organization
            </h2>
            <p className="text-xl text-center">
              Organizing coffee-related events to promote networking and
              knowledge sharing among coffee professionals and enthusiasts.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-16 mt-20 w-[70%] mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-3 bg-yellow-600 rounded-lg"
        >
          <label className="flex justify-center text-center text-white text-3xl md:text-4xl font-bold">
            Future Outlook
          </label>
          <p className="p-4 md:text-xl text-center text-white font-semibold">
            Jebena aims to "taste the future of Ethiopian coffee" by
            continuously evolving and expanding our reach. We plan to extend our
            activities beyond Ethiopia, establishing a global presence and
            fostering a deeper appreciation for Ethiopian coffee worldwide.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-3 bg-yellow-600 rounded-lg"
        >
          <label className="flex justify-center text-center text-white text-3xl md:text-4xl font-bold">
            Global Presence
          </label>
          <p className="p-4 md:text-xl text-center text-white font-semibold">
            While rooted in Ethiopia, Jebena is dedicated to promoting Ethiopian
            coffee culture across the globe. Our activities and collaborations
            extend internationally, ensuring that the unique flavors and rich
            history of Ethiopian coffee are experienced by a diverse audience.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Services;
