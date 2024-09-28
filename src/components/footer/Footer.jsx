import React from "react";
import footerLogo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import sendMail from '../../assets/send.png'
const Footer = () => {
  return (
    <div className="py-12 bg-white px-4 pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 space-x-10">
        <div 
        className="space-y-6 mr-10">
          <div className="flex items-center space-x-2">
            <img width={53} height={53} src={footerLogo} alt="Footer Logo" />
            <h1 className="text-para text-xl font-bold">Food</h1>
          </div>
          <p className="text-para font-medium w-64 max-lg:w-48 max-md:w-64">
          Our job is to filling your tummy with delicious food and  with fast and free delivery.
          </p>
          <div className="flex space-x-4">
          <a
              href="#"
              className=" text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-100 ease-in"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className=" text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-100 ease-in"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className=" text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-100 ease-in"
            >
              <FaTwitter className="text-xl" />
            </a>
            
           
          </div>
        </div>

        <div
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-3">
            <li>
              <a href="#discover" className="text-[#333333] font-medium">
                Discover
              </a>
            </li>
            <li>
              <a href="#services" className="text-[#333333] font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#menu" className="text-[#333333] font-medium">
                Menu
              </a>
            </li>
            <li>
              <a href="#freemeal" className="text-[#333333] font-medium">
                Free Meal
              </a>
            </li>
          </ul>
        </div>
        <div
         className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-[#333333] font-medium">
              Why KX2?
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-medium">
              Partner With Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-medium">
              FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333333] font-medium">
              Blog
              </a>
            </li>
          </ul>
        </div>
        <div 
        className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
             
              <p className="text-[#333333] font-medium">Account</p>
            </li>
            <li className="flex items-center gap-2">
              
              <p className="text-[#333333] font-medium">Support Center</p>
            </li>
            <li className="flex items-center gap-2">
              
              <p className="text-[#333333] font-medium">Feedback</p>
            </li>
            <li className="flex items-center gap-2">
              
              <p className="text-[#333333] font-medium">Contact Us</p>
            </li>
            <li className="flex items-center gap-2">
              
              <p className="text-[#333333] font-medium">Accessibilty</p>
            </li>
          </ul>
        </div>
        <div 
        className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
             
              <p className="text-[#333333] font-medium">Question or feedback?</p>
            </li>
            <li className="flex items-center gap-2">
              
              <p className="text-[#333333] font-medium">We’d love to hear from you</p>
            </li>
            <li className="flex items-center gap-2">
              
              <button className="flex items-center border border-[#bdbdbd] py-3 px-6 rounded-3xl font-normal">
              Email Address
              <img src={sendMail} className="ml-2"/>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
