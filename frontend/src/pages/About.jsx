import React from 'react'
import HairStylist from '../assets/HairStylist.jpg'
import makeupArtist from '../assets/makeupArtist.jpg'
import SPA from '../assets/SPA.webp'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'

function About() {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/contact'); // Redirect to the Contact page
  };
  return (
    <>
      <div className="bg-yellow-100 py-12 px-6">
      {/* About Us Section */}
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
    <p className="mt-4 text-gray-600">
      Welcome to <span className="font-semibold"> Radiance Room</span>, where beauty meets relaxation. Located in the heart of 
      <span className="font-semibold">Indore</span>, we specialize in premium hair, skin, and spa services tailored to enhance your natural glow.
    </p>
    <p className="mt-4 text-gray-600">
      Our team of skilled professionals is passionate about delivering personalized experiences to ensure you look and feel your best. Step into our serene space, unwind, and let us take care of the rest.
    </p>
  </div>

{/* why choose us */}
<div className="max-w-4xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-center text-gray-800">
        Why Choose Us?
      </h3>
      <ul className="mt-6 space-y-4 text-gray-600 text-center">
        <li className="flex items-center justify-center gap-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Experienced and friendly professionals.
        </li>
        <li className="flex items-center justify-center gap-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Use of high-quality, eco-friendly products.
        </li>
        <li className="flex items-center justify-center gap-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Modern techniques and the latest trends.
        </li>
        <li className="flex items-center justify-center gap-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          A clean, comfortable, and relaxing atmosphere.
        </li>
        <li className="flex items-center justify-center gap-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Let us bring out the best version of you. <button
              onClick={handleBookNow}
              className="text-blue-500 hover:underline font-medium"
            >
              Book your appointment today!
            </button> 
        </li>
      </ul>
    </div>

  {/* Meet Our Team Section  */}
  <div className="max-w-6xl mx-auto mt-12">
    <h3 className="text-2xl font-bold text-center text-gray-800">Meet Our Team</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    {/* Employee 1 */}
      <div className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
        <img
          src={HairStylist}
          alt="Employee 1"
          className="w-full h-72 object-cover"
        />
        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-800">Shahid Kapoor</h4>
          <p className="text-sm text-gray-600">Hair Stylist</p>
          <p className="mt-2 text-gray-600">
            Specializes in trendy cuts, hair coloring, and keratin treatments.
          </p>
        </div>
      </div>

      {/* Employee 2 */}
      <div className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
        <img
          src={makeupArtist}
          alt="Employee 2"
          className="w-full h-72 object-cover"
        />
        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-800">Anuska Sen</h4>
          <p className="text-sm text-gray-600">Makeup Artist</p>
          <p className="mt-2 text-gray-600">
            Expert in bridal and event makeup, creating flawless, camera-ready looks.
          </p>
        </div>
      </div>

      {/* Employee 3 */}
      <div className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
        <img
          src={SPA}
          alt="Employee 3"
          className="w-full h-72 object-cover"
        />
        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-800">Ranveer Singh</h4>
          <p className="text-sm text-gray-600">Spa Therapist</p>
          <p className="mt-2 text-gray-600">
            Specializes in relaxation massages, aromatherapy, and facials.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About

                                      // @NavinMalakarCreation