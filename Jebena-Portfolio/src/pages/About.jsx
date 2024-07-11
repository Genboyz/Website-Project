import React from "react";
import coffee from "../assets/images/coffee-beans.jpg";
import jebena from "../assets/images/ethiopian-traditional-coffee-ceremony.jpg";
import etcoffee from "../assets/images/young-woman-in-traditional-clothing-is-preparing-a-coffee-ceremony-at-lalibela-ethiopia.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
function About() {
  return (
    <div className=" ">
      <div className=" p-8 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="relative  flex items-center justify-center mt-[100px] md:mt-[150px]  bottom-4 rounded-lg"
        >
          <h1 className="text-4xl md:text-6xl text-yellow-950 font-bold mb-7 pb-3 border-b-4 border-yellow-400">
            About Us
          </h1>
        </motion.div>
      </div>

      <div className=" flex justify-center gap-10 w-[80%] mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={jebena}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-yellow-800 text-2xl text-justify md:w-[550px]"
        >
          <p>
            Jebena, named after the world's first coffee brewing equipment
            originating from Ethiopia, is a company dedicated to promoting
            Ethiopian coffee culture globally. The jebena is a traditional,
            aromatic, and intricately designed brewing vessel, symbolizing the
            rich heritage and future of Ethiopian coffee. Our mission is to
            share this heritage with the world through various coffee-related
            initiatives.
          </p>
        </motion.div>
      </div>
      <div className="bg-coffee-bean bg-fixed bg-no-repeat bg-cover  flex justify-center gap-10 py-6 mt-10 w-screen">
        <div className=" flex justify-start gap-3 my-12 bg-white h-[300px] p-4 ">
          <h2 className=" flex items-center text-3xl text-yellow-950 md:text-4xl font-bold  pr-3 border-r-2 border-yellow-950">
            Our Mission
          </h2>
          <p className="text-justify mt-8 text-lg md:text-xl text-yellow-800 md:w-[550px] ">
            To promote and celebrate Ethiopian coffee culture worldwide by
            providing authentic and enriching experiences through café reviews,
            podcasts, documentaries, expert talk shows, interviews, consulting
            services, and organizing coffee-related events.
          </p>
        </div>
        <div className=" flex justify-start gap-3  my-12 bg-white h-[300px] p-4 ">
          <label className="flex items-center text-3xl  md:text-4xl font-bold text-yellow-950  pr-3 border-r-2 border-yellow-950 ">
            Our Vision
          </label>
          <p className="mt-8 text-justify text-lg md:text-xl  text-yellow-800 max-w-4xl mx-auto md:w-[550px]">
            To be the leading global ambassador of Ethiopian coffee, known for
            our dedication to quality, authenticity, and cultural richness, and
            to inspire a deeper appreciation and understanding of Ethiopian
            coffee heritage around the world.
          </p>
        </div>
      </div>

      <div className="mt-12 text-start flex flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-8"
        >
          <img src={etcoffee} alt="" className="object-cover" />
          <div className="flex flex-col justify-center items-center my-5 space-y-8 max-w-5xl mx-auto text-gray-700">
            <label className="text-3xl md:text-4xl  text-center font-bold text-yellow-950  pb-3 border-b-2 border-yellow-950 mb-7">
              Our Goals
            </label>
            <div className="flex space-x-4 items-center">
              <span className="text-4xl md:text-5xl text-yellow-500">01.</span>
              <p className="text-lg md:text-xl">
                <strong>Promote Ethiopian Coffee:</strong> Raise global
                awareness and appreciation of Ethiopian coffee.
              </p>
            </div>
            <div className="flex space-x-4 items-start">
              <span className="text-4xl md:text-5xl text-yellow-500">02.</span>
              <p className="text-lg md:text-xl">
                <strong>Quality Content:</strong> Produce high-quality content,
                including documentaries, podcasts, and reviews, that educates
                and entertains coffee enthusiasts.
              </p>
            </div>
            <div className="flex space-x-4 items-start">
              <span className="text-4xl md:text-5xl text-yellow-500">03.</span>
              <p className="text-lg md:text-xl">
                <strong>Expert Engagement:</strong> Connect coffee experts and
                enthusiasts through talk shows, interviews, and events.
              </p>
            </div>
            <div className="flex space-x-4 items-start">
              <span className="text-4xl md:text-5xl text-yellow-500">04.</span>
              <p className="text-lg md:text-xl">
                <strong>Global Presence:</strong> Establish a strong presence
                not only in Ethiopia but also around the world.
              </p>
            </div>
            <div className="flex space-x-4 items-start">
              <span className="text-4xl md:text-5xl text-yellow-500">05.</span>
              <p className="text-lg md:text-xl">
                <strong>Innovation:</strong> Continuously innovate in the ways
                we present and promote Ethiopian coffee culture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
