import { useState } from "react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a enim molestias expedita eum numquam!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a enim molestias expedita eum numquam!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a enim molestias expedita eum numquam!",
  },
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-4/5 m-auto my-20 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">Frequesntly asked questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div onClick={()=> toggleFaq(index)} className="flex justify-between items-center bg-white/50 px-4 py-3 rounded-lg cursor-pointer">
            <h2 className="text-lg font-medium text-gray-700">{faq.question}</h2>
            <span className="text-xl text-gray-500">{openFaq === index ? "-" : "+"}</span>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40" : "max-h-0"}`} >
            <p className="p-4 text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
