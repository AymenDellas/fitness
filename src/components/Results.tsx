import SectionHeader from "./SectionHeader";
import { useState } from "react";
const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const results = [
    {
      nameAge: "Michael K., 32",
      duration: "12 weeks",
      weightLoss: "45 lbs",
      bodyFat: "-12%",
      metricName: "Muscle Gain",
      bonus: "+8 lbs",
      message:
        "The personalized approach made all the difference. I've tried so many programs before but nothing worked like this.",
    },
    {
      nameAge: "Sarah T., 28",
      duration: "16 weeks",
      weightLoss: "28 lbs",
      bodyFat: "-15%",
      metricName: "Energy Level",
      bonus: "+80%",
      message:
        "As a busy mom of two, I never thought I'd find time to get in shape. This program worked around my schedule.",
    },
    {
      nameAge: "David R., 41",
      duration: "20 weeks",
      weightLoss: "32 lbs",
      bodyFat: "-18%",
      metricName: "Strength",

      bonus: "+65%",
      message:
        "At my age, I thought getting back in shape was impossible. I've proven myself wrong and feel 10 years younger.",
    },
  ];
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const currentSlide = results[currentIndex];
  return (
    <section className="my-12">
      <SectionHeader
        span="Real Results"
        title="Transformations That Inspire"
        desc="These are real clients who committed to the process and achieved remarkable results. You could be next."
        color="black"
      />
      <div className="w-[90%] lg:w-[600px] mx-auto space-y-4 border border-gray-700/20 px-6 py-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{currentSlide.nameAge}</h2>{" "}
          <span className="px-3 py-1 rounded-md bg-gray-500/20">
            {currentSlide.duration}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <span className="p-2 bg-gray-500/10 text-center space-y-2 rounded-lg">
            <h3 className="text-zinc-500">Weight Loss</h3>
            <p className="font-semibold text-lg text-orange-500">
              {currentSlide.weightLoss}
            </p>
          </span>
          <span className="p-2 bg-gray-500/10 text-center space-y-2 rounded-lg">
            <h3 className="text-zinc-500">Body Fat</h3>
            <p className="font-semibold text-lg text-orange-500">
              {currentSlide.bodyFat}
            </p>
          </span>
          <span className="p-2 bg-gray-500/10 text-center space-y-2 rounded-lg">
            <h3 className="text-zinc-500">{currentSlide.metricName}</h3>
            <p className="font-semibold text-lg text-orange-500">
              {currentSlide.bonus}
            </p>
          </span>
        </div>
        <p className="italic text-lg text-zinc-600">"{currentSlide.message}"</p>
        <div className="flex items-center space-x-2 justify-center">
          {results.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={` rounded-full cursor-pointer  ${
                  currentIndex === index
                    ? "bg-orange-600 w-5 h-5"
                    : "bg-zinc-300 w-4 h-4"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
