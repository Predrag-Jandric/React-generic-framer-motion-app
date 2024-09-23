import { motion } from "framer-motion";

const Pricing = () => {
  const imageVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Maximize you efficiency with ABC company
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold">$ 10.000</h3>
        <p className="md:text-2xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cumque fugit quibusdam totam.
        </p>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={ imageVariant }
          viewport={{ amount: 0.5 }}
          className="w-full"
          src="https://www.beyoutiful.za.com/getattachment/78f72d20-44d8-466b-8c78-218d619af624/How-to-know-and-what-to-do-if-you-have-Combination.aspx?maxwidth=470"
          alt=""
        />
      </div>
    </div>
  );
};

export default Pricing;
