import React from 'react'
import { useNavigate } from 'react-router-dom'
import HairCare from '../assets/ServicesIMG/HairCare.avif'
import Makeup  from '../assets/ServicesIMG/Makeup.jpeg'
import SPAR from '../assets/ServicesIMG/SPAR.jpg'
import SkinCare from '../assets/ServicesIMG/SkinCare.jpg'
import WT from '../assets/ServicesIMG/WT.jpg'
import NailCare from '../assets/ServicesIMG/NailCare.jpg'
import Btn from '../components/btn'

function Services() {
  
  return (
    <div className="bg-yellow-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Services</h2>
        <p className="mt-4 text-gray-600">
          At <span className="font-semibold">Radiance Room</span>, we offer a wide range of beauty and wellness services 
          tailored to your individual needs. Whether you're looking for a fresh hairstyle, rejuvenating skincare, or a moment 
          of relaxation, we’ve got you covered.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {/* Hair Care */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={HairCare}
            alt="Hair Care"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Hair Care</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Haircuts (Men, Women, Kids)</li>
              <li>Hair Coloring and Highlights</li>
              <li>Keratin and Smoothening Treatments</li>
              <li>Hair Styling for Events</li>
            </ul>
            <Btn />
          </div>
        </div>

        {/* Skin Care */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={SkinCare}
            alt="Skin Care"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Skin Care</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Facials and Exfoliation</li>
              <li>Brightening Treatments</li>
              <li>Acne Reduction Services</li>
              <li>Hydrating Masks</li>
            </ul>
            <Btn/>
          </div>
        </div>

        {/* Makeup */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={Makeup}
            alt="Makeup"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Makeup</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Bridal Makeup</li>
              <li>Event and Party Makeup</li>
              <li>Natural and Glam Looks</li>
              <li>Makeup Consultation</li>
            </ul>
              <Btn/>
          </div>
        </div>

        {/* Spa and Relaxation */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={SPAR}
            alt="Spa and Relaxation"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Spa and Relaxation</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Full Body Massages</li>
              <li>Aromatherapy</li>
              <li>Foot Spa and Reflexology</li>
              <li>Stress-Relief Packages</li>
            </ul>
              <Btn/>
          </div>
        </div>

        {/* Nail Care */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={NailCare}
            alt="Nail Care"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Nail Care</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Manicures and Pedicures</li>
              <li>Nail Art and Extensions</li>
              <li>Gel Polish and Regular Polish</li>
            </ul>
            <Btn/>
          </div>
        </div>

        {/* Waxing and Threading */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={WT}
            alt="Waxing and Threading"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Waxing and Threading</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Full Body Waxing</li>
              <li>Eyebrow Threading</li>
              <li>Hair Removal Packages</li>
            </ul>
            <Btn/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

                                      // @NavinMalakarCreation