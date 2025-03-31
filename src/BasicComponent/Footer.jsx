import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#E0FFFF] pt-12 text-[#eafaf1] ">
      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div>
            <h3 className="mb-4 text-lg text-gray-500 uppercase">
              Student Support
            </h3>
            <h4 className="text-green-600">+91-90129-83208</h4>
            <p className="text-gray-500 mt-3">
              Sun. - Thur. <b>9:00 AM - 7:00 PM</b>
            </p>
            <p className="text-gray-500">
              Fri. - Sat. <b>Off</b>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg text-gray-500 uppercase">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg text-gray-500 uppercase">
              Our services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Exchanges & returns
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg text-gray-500 uppercase">
              Newsletter signup
            </h3>
            <section className="flex">
              <input
                type="text"
                className="p-2 w-[180px] text-black outline outline-gray-300"
                placeholder="Username"
              />

              <button
                type="submit"
                className="p-2 bg-green-400 text-white rounded-sm"
              >
                Submit
              </button>
            </section>
          </div>
        </div>

        <div className="text-center w-full text-white py-2 mt-12 bg-gray-500">
          <p>© Copyright 2025 . All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
