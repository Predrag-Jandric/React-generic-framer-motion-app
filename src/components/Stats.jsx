import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

// left video at 30:45

const Stats = () => {
  const imageVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-20 bg-white/50">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={imageVariant}
            viewport={{ amount: 0.5 }}
            className="w-full"
            src="https://media.istockphoto.com/id/1394348691/photo/two-diverse-businesswomen-working-together-on-a-digital-tablet-and-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=f6su_CQgz_XQu9RjruT7xFzEBMTRmE1wj3UMxUTSbN4="
            alt=""
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Over 40.000</h1>
          <p className="md:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            pariatur?
          </p>
          <div className="flex items-center">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Data Validation</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi itaque voluptatum fugit amet, quasi vel?
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Optimise Efficiency</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi itaque voluptatum fugit amet, quasi vel?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
