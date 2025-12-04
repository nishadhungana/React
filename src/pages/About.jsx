import React from 'react';
import { Link } from 'react-router-dom';
import cafeImage from '../assets/cafeimage.avif'

const About = () => {
  return (
    <>
      <div className="bg-[#4B2E2B] text-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">About Brew & Leaf</h1>
          <p>Your neighborhood coffee and tea sanctuary</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-[#4B2E2B] mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Brew & Leaf is more than a coffee shop—it's a community hub where 
                great drinks and good company come together. We're passionate about 
                serving the perfect cup, whether it's a rich espresso or a delicate tea blend.
              </p>
              <p className="text-gray-700">
                Every bean and leaf is carefully selected, and every drink is crafted 
                with attention to detail by our passionate team.
              </p>
            </div>
            
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src={cafeImage}
                alt="Brew & Leaf cozy interior"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
            <h3 className="font-bold text-[#4B2E2B] mb-2">Quality First</h3>
            <p className="text-gray-600 text-sm">Premium beans and tea leaves</p>
          </div>
          <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
            <h3 className="font-bold text-[#4B2E2B] mb-2">Crafted with Care</h3>
            <p className="text-gray-600 text-sm">Every drink made to perfection</p>
          </div>
          <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
            <h3 className="font-bold text-[#4B2E2B] mb-2">Community Focus</h3>
            <p className="text-gray-600 text-sm">A welcoming space for all</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Visit our Contact page for location details and hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu"
              className="inline-block bg-[#4B2E2B] text-amber-50 px-8 py-3 rounded-lg hover:bg-[#301D1B] font-bold"
            >
              See Our Menu
            </Link>
            <Link 
              to="/contact"
              className="inline-block bg-[#876E6B] text-amber-50 px-8 py-3 rounded-lg hover:bg-[#6F5855] font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;