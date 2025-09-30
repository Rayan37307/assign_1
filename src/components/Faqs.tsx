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
      answer:
        "Yes! Some of our local plumbers are gas registered and experienced working on heating systems, bathrooms, and kitchens.",
    },
    {
      question: "Do you charge a call out fee?",
      answer:
        "Call-out fees depend on the job and location. Please contact us for exact pricing.",
    },
    {
      question: "How quickly can your company send out an engineer?",
      answer:
        "We usually dispatch an engineer within 24 hours, depending on availability.",
    },
    {
      question: "What should I do if I get a water leak?",
      answer:
        "Turn off your main water supply immediately and call a plumber to avoid damage.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {faq.question}
                </h2>
                <img
                  src="/arrowdown.png"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  } w-8 h-8 sm:w-10 sm:h-10 text-gray-500 font-extralight`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              )}

              <div className="h-px bg-gray-200 my-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
