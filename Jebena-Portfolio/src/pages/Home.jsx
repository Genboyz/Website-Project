import React from "react";
import image from "../assets/images/coffee.jpg";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div className="relative h-screen w-screen">
        <img src={image} className="object-cover w-full h-full" />

        <div className="absolute inset-0 flex items-center justify-center text-white md:w-[85%] mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center mx-6 bg-black bg-opacity-40 p-8 font-mono">
            Jebena, named after the world's first coffee brewing equipment
            originating from Ethiopia, is a company dedicated to promoting
            Ethiopian coffee culture globally. The jebena is a traditional,
            aromatic, and intricately designed brewing vessel, symbolizing the
            rich heritage and future of Ethiopian coffee. Our mission is to
            share this heritage with the world through various coffee-related
            initiatives.
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
