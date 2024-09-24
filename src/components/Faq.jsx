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
const [openFaq, setOpenFaq] = useState()

const toggleFaq = (index) => {
  setOpenFaq(openFaq === index ? null : index)
}

  return <div></div>;
};

export default Faq;
