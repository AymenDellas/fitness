import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How long until I see results?",
      answer:
        "Most clients start seeing noticeable changes within 2-3 weeks of following the program consistently. Significant transformations typically happen around the 8-12 week mark, depending on your starting point and consistency with both workouts and nutrition.",
    },
    {
      question: "Do I need a gym membership for your programs?",
      answer:
        "Not necessarily. We offer both gym-based and home workout programs. Our home programs require minimal equipment that can be purchased for under $200, or we can create bodyweight routines if you prefer no equipment at all.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Our nutrition plans are completely customizable. Whether you're vegetarian, vegan, gluten-free, dairy-free, or have other dietary restrictions, we'll create a plan that works for your needs while still supporting your fitness goals.",
    },
    {
      question: "How often will we communicate during coaching?",
      answer:
        "For 1-on-1 coaching, we have weekly scheduled check-ins via video call, and you'll have daily access to your coach through our messaging platform for questions, form checks, and accountability. Group coaching includes 2 monthly group calls and forum access.",
    },
    {
      question: "Can I cancel or pause my subscription?",
      answer:
        "Yes, you can pause or cancel your subscription at any time with no penalty. We understand that life happens, and we want to make our programs as flexible as possible for our clients.",
    },
    {
      question:
        "I've tried other programs before without success. How is yours different?",
      answer:
        "Our approach is based on sustainable habits rather than quick fixes. We provide personalized plans tailored to your specific needs, preferences, and lifestyle, along with ongoing coaching and accountability. We also adjust your plan regularly based on your progress and feedback.",
    },
  ];
  return (
    <section>
      <SectionHeader
        span="Questions & Answers"
        title="Frequently Asked Questions"
        desc="Still have questions? Don't hesitate to contact us for more information."
        color="black"
      />
      <div className="space-y-8 max-w-3xl mx-auto w-[90%]">
        {faqs.map((faq, i) => {
          const isOpened = activeIndex === i;
          return (
            <div
              key={i}
              onClick={() => toggleFaq(i)}
              className=" border border-gray-900/20 rounded-lg overflow-hidden"
            >
              <div className="flex items-center p-4 bg-stone-300/10 justify-between rounded-lg cursor-pointer">
                <p className="">{faq.question}</p>
                {isOpened ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpened ? "max-h-64" : "max-h-0"
                }`}
              >
                <div className="p-4">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
