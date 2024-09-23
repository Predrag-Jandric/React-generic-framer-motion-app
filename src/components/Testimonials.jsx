import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsData = [
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-10 bg-white/50">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h1 className="text-center text-lg">Client Reviews</h1>
          <h2 className="text-sm md:text-xl md:font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
            debitis <br /> iure nesciunt dicta, magni facilis officiis optio
            impedit exercitationem!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 py-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariant}
              viewport={{ amount: 0.5 }}
              className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center"
              key={index}
            >
              <div className="flex items-center space-x-2">
                <img
                  className="object-cover w-16 h-16 rounded-full border-2"
                  src={testimonial.image}
                  alt="testimonial"
                />
                <div>
                  <h1 className="font-bold text-lg">{testimonial.name}</h1>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
