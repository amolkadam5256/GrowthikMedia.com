import React from "react";

const HeroHeadline = () => {
  return (
    <div className="text-center relative max-w-5xl mx-auto mb-4 md:mb-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-4 md:mb-6">
        Engage Audiences <br className="hidden md:block" />
        <span className="relative inline-block">
          with Stunning Videos
          {/* Underline Scribble */}
          <svg
            className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-orange-400 opacity-80"
            viewBox="0 0 200 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00025 6.99997C69.5002 4.00003 128.5 -1.50002 198 2.49997"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      <p className="text-xs sm:text-sm md:text-sm text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed px-2 md:px-0">
        Boost Your Brand with High-Impact Short Videos from our expert content
        creators. Our team is ready to propel your business forward.
      </p>

      {/* Annotation: Elevate your brand - Responsive positioning */}
      <div className="absolute top-20 right-90 md:-top-8 md:-right-8 lg:-right-16  sm:block w-24 md:w-32 lg:w-40 opacity-80 md:opacity-100">
        <p className="font-handwriting text-gray-800 text-sm md:text-lg transform -rotate-12 translate-y-2 font-medium">
          Elevate your brand
        </p>
        <svg
          className="w-full h-auto text-gray-800 transform rotate-180 md:rotate-90 pt-5 md:pt-20"
          viewBox="0 0 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10,10 Q50,5 50,40 L45,30 M50,40 L55,30" />
        </svg>
      </div>

      {/* Annotation: Tic Marks */}
      <div className="absolute top-4 left-4 md:top-10 md:-left-12 hidden sm:block opacity-40 md:opacity-60">
        <svg
          width="30"
          height="30"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          className="text-gray-800"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <path d="M10 20L15 25L30 10" />
        </svg>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap");
        .font-handwriting {
          font-family: "Caveat", cursive;
        }
      `}</style>
    </div>
  );
};

export default HeroHeadline;
