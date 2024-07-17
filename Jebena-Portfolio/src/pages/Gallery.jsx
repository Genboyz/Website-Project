import { useState } from "react";
import img1 from "../assets/images/gallery/img01.jpg";
import img2 from "../assets/images/gallery/img02.jpg";
import img3 from "../assets/images/gallery/img03.jpg";
import img4 from "../assets/images/gallery/img04.jpg";
import img5 from "../assets/images/gallery/img05.jpg";
import img6 from "../assets/images/gallery/img06.jpg";
import img7 from "../assets/images/gallery/img07.jpg";
import img8 from "../assets/images/gallery/img08.jpg";
import img9 from "../assets/images/gallery/img09.jpg";
import img10 from "../assets/images/gallery/img10.jpg";
import img11 from "../assets/images/gallery/img11.jpg";
import img12 from "../assets/images/gallery/img12.jpg";
import img13 from "../assets/images/gallery/img13.jpg";
import img14 from "../assets/images/gallery/img14.jpg";
import img15 from "../assets/images/gallery/img15.jpg";
import img16 from "../assets/images/gallery/img16.jpg";
import img17 from "../assets/images/gallery/img17.jpg";
import img18 from "../assets/images/gallery/img18.jpg";
import img19 from "../assets/images/gallery/img19.jpg";
import img20 from "../assets/images/gallery/img20.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(10);

  const showMoreImages = () => {
    setVisibleImages(images.length);
  };

  const showLessImages = () => {
    setVisibleImages(10);
  };

  return (
    <div className="container py-8  lg:w-[70%] w-[80%] mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative  flex items-center justify-center mt-[100px] md:mt-[150px]  bottom-4 rounded-lg"
      >
        <h1 className="text-4xl md:text-6xl text-yellow-950 font-bold mb-7 pb-3 border-b-4 border-yellow-400">
          Gallery
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.slice(0, visibleImages).map((img, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {visibleImages < images.length ? (
          <button
            onClick={showMoreImages}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLessImages}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Gallery;
