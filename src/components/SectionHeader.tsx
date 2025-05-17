const SectionHeader = ({
  span,
  title,
  desc,
  color = "black",
}: {
  span: string;
  title: string;
  desc: string;
  color: string;
}) => {
  // Determine text color classes based on the color prop
  const textColorClass = color === "white" ? "text-white" : "text-gray-900";
  const descColorClass = color === "white" ? "text-white/80" : "text-gray-500";
  
  return (
    <div className="flex flex-col justify-center items-center mb-12 space-y-4 text-center relative">
      {/* Decorative accent element */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-xl -z-10"></div>
      
      {/* Span label with improved styling */}
      <div className="relative inline-block">
        <span className="inline-block text-orange-600 uppercase tracking-wide font-bold text-sm bg-orange-100/50 px-4 py-1.5 rounded-full">
          {span}
        </span>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500/50 rounded-full"></div>
      </div>
      
      {/* Main title with improved typography */}
      <h2 className={`font-bold font-rubik text-4xl md:text-5xl leading-tight ${textColorClass}`}>
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block">
            {word}{' '}
          </span>
        ))}
      </h2>
      
      {/* Description text with better spacing and responsive width */}
      <p className={`${descColorClass} w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-center font-rubik max-w-3xl`}>
        {desc}
      </p>
      
      {/* Decorative underline element */}
      <div className="w-20 h-1 rounded-full bg-orange-500 mt-2"></div>
    </div>
  );
};

export default SectionHeader;
