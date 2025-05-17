import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Customized nutrition & workout plans",
    "Weekly coaching check-ins",
    "24/7 messaging support",
    "Progress tracking tools",
  ];
  return (
    <section className="mt-28 py-20 bg-orange-600 text-white">
      <div className="flex flex-col items-center space-y-8">
        <div className=" font-bold text-3xl lg:text-5xl text-center">
          Ready to Start Your{" "}
          <span className="relative">
            Transformation?{" "}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.5C19 4.5 46 1.5 54 3.5C62 5.5 83 9.5 112.5 8C142 6.5 173 3 211.5 3C250 3 280.5 7 297 9.5"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </div>
        <p className="lg:text-lg text-center mx-2">
          Take the first step towards a healthier, stronger, and more confident
          you. Limited spots available for new clients this month.
        </p>
        <div className="flex flex-col lg:flex-row max-lg:space-y-4 max-lg:justify-center lg:items-center space-x-6">
          {benefits.map((benifet, i) => {
            return (
              <div key={i} className="flex items-center space-x-1">
                <div className="bg-white/20 rounded-full p-1">
                  <Check size={16} className="text-white" />
                </div>
                <p>{benifet}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row max-lg:space-y-8 max-lg:justify-center lg:items-center lg:space-x-36  rounded-lg py-8 px-12 bg-orange-500/50">
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">500%</span>
            <p>Successful Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">12K+</span>
            <p>Pounds Lost</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">97%</span>
            <p>Success Rate</p>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center space-x-2 text-orange-700 bg-white rounded-md px-6 py-4 font-bold font-poppins hover:bg-white/80 transition-colors duration-300 ease-out overflow-hidden group"
        >
          <p className="translate-x-4 group-hover:translate-x-0 transition-all ease-out duration-300">
            Book Free Assessment Call
          </p>{" "}
          <span className="translate-x-12 invisible group-hover:translate-x-0 group-hover:visible transition-all ease-out duration-300">
            <ArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
