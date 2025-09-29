import { ArrowDownIcon } from "lucide-react";
import { useState } from "react";

const Faqs = () => {
    type FaqItem = {
  question: string;
  answer: string;
};
const [openIndex, setOpenIndex] = useState(-1);

const faqs: FaqItem[] = [
  {
    question: "Do plumbers deal with heating?",
    answer: "Yes! Some of our local plumbers are gas registered and experienced working on heating systems, bathrooms, and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "Call-out fees depend on the job and location. Please contact us for exact pricing.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We usually dispatch an engineer within 24 hours, depending on availability.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer: "Turn off your main water supply immediately and call a plumber to avoid damage.",
  },
];

const toggleFaq = (index: number) => {
  if (openIndex === index) {
    setOpenIndex(-1);
  } else {
    setOpenIndex(index);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
        <h1 className="text-[48px] font-bold text-center mb-20">Frequently Asked Questions</h1>
        <div className="flex justify-center flex-col my-8">

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button className="flex items-center justify-between w-full text-left" onClick={() => toggleFaq(index)}>
              <h2 className="text-[28px] font-semibold">{faq.question}</h2>
            <ArrowDownIcon className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''} fill-black w-6 h-6`}/>
            </button>
           {openIndex === index && (
      <p className="mt-2 text-gray-700">{faq.answer}</p>
    )}

    <div className="h-[1px] bg-gray-200 my-8" />
          </div>
        ))}

        </div>
    </div>
  )
}

export default Faqs