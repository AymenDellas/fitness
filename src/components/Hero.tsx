import { Star, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="font-rubik py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-6">
            <span className="inline-block text-orange-500 uppercase font-poppins font-bold tracking-widest text-sm bg-orange-50 rounded-full px-4 py-2 ring-1 ring-orange-200">
              Transform Your Body & Mind
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Start Your Fitness Journey <span className="text-orange-600">Today</span>
            </h1>
            
            <p className="text-gray-600 text-lg">
              Personalized coaching, custom workout plans, and nutrition guidance to
              help you reach your fitness goals faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200 ease-out rounded-lg px-6 py-4 font-bold shadow-lg shadow-orange-600/20 text-center"
              >
                START YOUR TRANSFORMATION
              </a>
              <a
                href="#"
                className="bg-white text-orange-600 rounded-lg px-6 py-4 font-semibold border border-orange-200 hover:bg-orange-50 transition-colors duration-200 ease-out text-center"
              >
                View Programs
              </a>
            </div>
            
            {/* Social Proof Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center -space-x-2">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-orange-100 rounded-full p-1 ring-1 ring-white flex items-center justify-center"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <User size={18} className="text-orange-600" />
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">500+ Clients</h4>
                  <p className="text-gray-500 text-sm">Transformed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fill="#FFC107" color="#FFC107" size={20} />
                  ))}
                </span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">4.9/5</h3>
                  <p className="text-gray-500 text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/weights.jpg" 
                alt="Fitness training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-transparent"></div>
              
              {/* Optional: Floating Element for Visual Interest */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-[200px]">
                <p className="font-bold text-orange-600">Ready to transform?</p>
                <p className="text-sm text-gray-700">Join our community today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
