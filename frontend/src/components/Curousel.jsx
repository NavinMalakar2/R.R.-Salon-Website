

import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 z-10"
        onClick={goToPrevious}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 z-10"
        onClick={goToNext}
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

                                      // @NavinMalakarCreation