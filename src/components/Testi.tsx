import SectionHeader from "./SectionHeader";
import { useState } from "react";
const Testi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Jennifer M.",
      title: "Mother of 2",
      image: "/path/to/jennifer.jpg",
      testimonial:
        "Working with FlexFit has been life-changing. The program is perfectly tailored to my busy schedule, and the results have exceeded my expectations. I've lost 30 pounds and feel stronger than ever!",
    },
    {
      name: "Robert K.",
      title: "Software Engineer",
      image: "/path/to/robert.jpg",
      testimonial:
        "After sitting at a desk all day, I was in constant pain. This program helped me build strength, improve my posture, and finally live pain-free. The custom approach makes all the difference.",
    },
    {
      name: "Samantha T.",
      title: "Marketing Director",
      image: "/path/to/samantha.jpg",
      testimonial:
        "The nutrition guidance was exactly what I needed. I never felt like I was on a diet - just eating better. Combined with the workouts, I've never felt more energetic and focused at work and at home.",
    },
    {
      name: "James L.",
      title: "Healthcare Worker",
      image: "/path/to/james.jpg",
      testimonial:
        "After trying multiple fitness programs with no success, I finally found one that works. The accountability and personalized approach has helped me stay consistent for the first time in my life.",
    },
  ];
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const currentSlide = testimonials[currentIndex];
  return (
    <section className="bg-gradient-to-b from-[#111317] to-[#111723] py-20 my-20">
      <SectionHeader
        span="Testimonials"
        title="What Our Clients Say"
        desc="Don't just take our word for it - hear from the people who have transformed their bodies and lives with our coaching."
        color="white"
      />
      <div className="w-[90%] lg:w-[700px] text-white space-y-6 border border-white/20 rounded-lg mx-auto p-6 bg-[#292D34]">
        <div className="flex items-center space-x-2">
          <span className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-200/20 border border-white/30">
            {currentSlide.name.slice(0, 1)}
          </span>
          <div>
            <p className="font-bold text-lg">{currentSlide.name}</p>
            <p className="text-white/80">{currentSlide.title}</p>
          </div>
        </div>
        <p className="text-lg font-poppins italic">
          "{currentSlide.testimonial}"
        </p>
      </div>
      <div className="flex items-center space-x-2 justify-center mt-8">
        {testimonials.map((_, index) => {
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
    </section>
  );
};

export default Testi;
