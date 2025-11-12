
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Curousel";
import HairCare from '../assets/ServicesIMG/HairCare.avif'
import Makeup  from '../assets/ServicesIMG/Makeup.jpeg'
import SPAR from '../assets/ServicesIMG/SPAR.jpg'
import SkinCare from '../assets/ServicesIMG/SkinCare.jpg'
import WT from '../assets/ServicesIMG/WT.jpg'
import Btn from "../components/Btn";


const App = () => {
  const navigate = useNavigate();

  const carouselItems = [
    { image: HairCare, alt: "Slide 1" },
    { image: Makeup, alt: "Slide 2" },
    { image: SkinCare, alt: "Slide 3" },
    
    
  ];

  const handleBookNow = () => {
    navigate("/contact"); // Redirect to the Contact page
  };

  return (
    <div className="bg-yellow-100 min-h-screen">
    {/* Carousel Section */}
    <div className="">
        <Carousel items={carouselItems} />
      </div>
      {/* Hero Section */}
      <header className="relative p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Radiance Room Salon
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          Where beauty meets relaxation. Let us pamper you!
        </p>
        <Btn/>
      </header>

      

      {/* Services Section */}
      <section className="py-12 ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Hair Styling</h3>
            <p className="text-gray-600 mt-4">
              Professional haircuts, styling, and treatments for all hair types.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Nail Art</h3>
            <p className="text-gray-600 mt-4">
              Creative and customized nail designs to elevate your style.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Makeup</h3>
            <p className="text-gray-600 mt-4">
              Perfect makeup for weddings, parties, or everyday glam.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-yellow-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 italic">
              "Amazing service! The staff is friendly, and my hair looks
              fabulous!"
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">- Emma</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 italic">
              "The best nail art I've ever had. Highly recommend!"
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">- Sophie</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 italic">
              "Flawless makeup for my wedding. They made my day extra special!"
            </p>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">- Mia</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;

                                      // @NavinMalakarCreation