import React from "react";
import coffeeImage from "../assets/images/coffee.jpg";
import Team from "../components/Team";
import missionImg from "../assets/images/etcoffee.jpg";
function About() {
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

  return (
    <div className="bg-gray-50 min-h-screen w-screen mx-auto">
      {/* Hero Section */}
      <div className="bg-coffee-pattern bg-cover bg-fixed md:h-[400px] p-8 md:p-16">
        <div className="relative  flex items-center justify-center mt-[100px] md:mt-[150px]  bottom-4 rounded-lg">
          <h1 className="text-4xl md:text-6xl text-white font-bold pb-5 border-b-4 border-yellow-200">
            About Us
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-12 text-center w-[80%] md:w-[70%] mx-auto bg-slate-50 p-5">
        <label className="text-3xl text-yellow-950 md:text-4xl font-bold mb-8 pb-3 border-b-2 border-yellow-950">
          Our Mission
        </label>
        <div className="flex justify-center">
          <p className="text-center mt-8 text-lg md:text-xl text-yellow-800 max-w-4xl">
            To promote and celebrate Ethiopian coffee culture worldwide by
            providing authentic and enriching experiences through café reviews,
            podcasts, documentaries, expert talk shows, interviews, consulting
            services, and organizing coffee-related events.
          </p>
        </div>
      </div>
      {/* Vision Section */}
      <div className="mt-12 text-center w-[80%] md:w-[70%] mx-auto">
        <label className="text-3xl md:text-4xl font-bold text-yellow-950  pb-3 border-b-2 border-yellow-950 ">
          Our Vision
        </label>
        <p className="mt-8 text-lg md:text-xl  text-yellow-800 max-w-4xl mx-auto">
          To be the leading global ambassador of Ethiopian coffee, known for our
          dedication to quality, authenticity, and cultural richness, and to
          inspire a deeper appreciation and understanding of Ethiopian coffee
          heritage around the world.
        </p>
      </div>

      {/* Goals Section */}
      <div className="mt-12 text-start flex flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto">
        <label className="text-3xl md:text-4xl font-bold text-yellow-950  pb-3 border-b-2 border-yellow-950 text-center">
          Our Goals
        </label>
        <div className="mt-8 space-y-8 max-w-5xl mx-auto text-gray-700">
          <div className="flex space-x-4 items-center">
            <span className="text-4xl md:text-5xl text-yellow-500">1.</span>
            <p className="text-lg md:text-xl">
              <strong>Promote Ethiopian Coffee:</strong> Raise global awareness
              and appreciation of Ethiopian coffee.
            </p>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-4xl md:text-5xl text-yellow-500">2.</span>
            <p className="text-lg md:text-xl">
              <strong>Quality Content:</strong> Produce high-quality content,
              including documentaries, podcasts, and reviews, that educates and
              entertains coffee enthusiasts.
            </p>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-4xl md:text-5xl text-yellow-500">3.</span>
            <p className="text-lg md:text-xl">
              <strong>Expert Engagement:</strong> Connect coffee experts and
              enthusiasts through talk shows, interviews, and events.
            </p>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-4xl md:text-5xl text-yellow-500">4.</span>
            <p className="text-lg md:text-xl">
              <strong>Global Presence:</strong> Establish a strong presence not
              only in Ethiopia but also around the world.
            </p>
          </div>
          <div className="flex space-x-4 items-start">
            <span className="text-4xl md:text-5xl text-yellow-500">5.</span>
            <p className="text-lg md:text-xl">
              <strong>Innovation:</strong> Continuously innovate in the ways we
              present and promote Ethiopian coffee culture.
            </p>
          </div>
        </div>
      </div>

      <Team teamMembers={teamMembers} />
    </div>
  );
}

export default About;
