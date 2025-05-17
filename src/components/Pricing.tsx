import { Check, Users, Zap, Utensils } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Pricing = () => {
  const pricings = [
    {
      title: "Group Training",
      description:
        "Join our community of motivated individuals with group workouts and shared goals.",
      price: 99,
      timeline: "per month",
      options: [
        "3 weekly group sessions",
        "Nutrition guidelines",
        "Community support",
        "Monthly check-ins",
        "Progress tracking",
      ],
      popular: false,
      icon: Users,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300",
    },
    {
      title: "1-on-1 Coaching",
      description:
        "Personalized training, nutrition guidance, and accountability with weekly check-ins.",
      price: 199,
      timeline: "per month",
      options: [
        "Custom workout plan",
        "Personalized nutrition",
        "Weekly video calls",
        "24/7 chat support",
        "Progress tracking",
      ],
      popular: true,
      icon: Zap,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-300",
    },
    {
      title: "Custom Meal Plans",
      description:
        "Detailed nutrition plans customized to your goals, preferences, and dietary needs.",
      price: 149,
      timeline: "one-time",
      options: [
        "Macronutrient calculation",
        "Meal prep guides",
        "Shopping lists",
        "Recipe collection",
        "30-day plan",
      ],
      popular: false,
      icon: Utensils,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-300",
    },
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          span="Fitness Programs"
          title="Choose Your Path to Success"
          desc="Select the program that fits your goals, schedule, and preferences. All programs include expert guidance and support."
          color="black"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {pricings.map((pricing, i) => (
            <div
              key={i}
              className={`relative flex flex-col h-full transition-all duration-300 transform ${
                pricing.popular ? "lg:-translate-y-4" : ""
              } rounded-2xl overflow-hidden bg-white border-2 ${pricing.borderColor} ${pricing.hoverColor} hover:shadow-xl`}
            >
              {pricing.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="h-1.5 bg-orange-500 w-full"></div>
                  <div className="flex justify-center -mt-0.5">
                    <span className="inline-block px-4 py-1 text-xs font-bold tracking-wider text-white uppercase bg-orange-500 rounded-b-lg shadow-md">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}
              
              <div className={`px-6 pt-8 ${pricing.popular ? "pt-12" : ""}`}>
                <div className={`inline-block p-3 rounded-xl mb-4 ${pricing.bgColor}`}>
                  <pricing.icon size={24} className={pricing.iconColor} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">{pricing.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">${pricing.price}</span>
                  <span className="ml-2 text-gray-500">/{pricing.timeline}</span>
                </div>
              </div>
              
              <div className="flex-grow px-6 pb-6">
                <div className="pt-4 pb-6 border-t border-gray-100">
                  <ul className="space-y-3">
                    {pricing.options.map((option, j) => (
                      <li key={j} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center ${pricing.bgColor}`}>
                          <Check size={14} className={pricing.iconColor} />
                        </div>
                        <span className="text-gray-700">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-6 pb-8">
                <button className={`w-full py-3 px-6 rounded-xl font-bold text-white shadow-lg transition-all duration-200 
                  ${pricing.popular 
                    ? "bg-orange-600 hover:bg-orange-700 shadow-orange-300/30" 
                    : "bg-gray-800 hover:bg-gray-900 shadow-gray-300/20"}`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
