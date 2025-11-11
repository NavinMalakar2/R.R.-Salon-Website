import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200">Contact Us</h3>
          <p className="mt-2">Radiance Room, Scheme 78, </p>
          <p>VijayNagar, Indore</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@radianceroom.com</p>
        </div>
        {/* Hours */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200">Opening Hours</h3>
          <p className="mt-2">Mon-Fri: 9:00 AM - 7:00 PM</p>
          <p>Sat: 10:00 AM - 6:00 PM</p>
          <p>Sun: Closed</p>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200">Follow Us</h3>
          <p className="mt-2">
            {/* <a href="#" className="hover:underline">
              Facebook
            </a> */}
            <Link to='https://www.facebook.com/'> Facebook</Link>
          </p>
          <p>
            {/* <a href="#" className="hover:underline">
              Instagram
            </a> */}
            <Link to='https://www.instagram.com/#'> Instagram</Link>
          </p>
          <p>
            {/* <a href="#" className="hover:underline">
              Twitter
            </a> */}
            <Link to='https://x.com/?lang=en'> Twitter</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

                                      // @NavinMalakarCreation