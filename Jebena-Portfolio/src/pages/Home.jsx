import { useState, useEffect } from "react";
import image3 from "../assets/images/gallery/img02.jpg";
import image1 from "../assets/images/coffee-beans.jpg";
import image2 from "../assets/images/gallery/img03.jpg";
import image4 from "../assets/images/close-up-of-coffee-cherries-on-kenyan-plantation-east-africa.jpg";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
function Home() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  return (
    <>
      <div
        style={{ backgroundImage: `url(${images[index].image})` }}
        className="relative md:h-[800px] h-[400px]  w-full duration-500 bg-cover bg-no-repeat group"
      >
        <div
          onClick={prev}
          className=" group-hover:block absolute top-[50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer"
        >
          <BsChevronCompactLeft size={50} color="white" />
        </div>
        <div
          onClick={next}
          className=" group-hover:block absolute top-[50%] right-5 rounded-full p-2 bg-black/20 cursor-pointer"
        >
          <BsChevronCompactRight size={50} color="white" />
        </div>
      </div>
    </>
  );
}

export default Home;
