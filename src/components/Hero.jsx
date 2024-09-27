import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-6">
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          Innovation Requires Courage
        </motion.p>
        <motion.h1
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Lorem ipsum dolor sit.
        </motion.h1>
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="md:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          aliquid, at optio eius provident ab qui ratione
        </motion.p>
        <div className="flex space-x-5">
          <button className="px-5 py-1 rounded-full font-semibold bg-black text-white">
            Book
          </button>
          <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
              <IoPlay />
            </span>

            <span>Watch Video</span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <motion.img
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={imageVariant}
          viewport={{ amount: 0.5 }}
          src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg"
          alt=""
        />{" "}
      </div>
    </section>
  );
};

export default Hero;
