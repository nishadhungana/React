import React from 'react';
import coffeeImage from '../assets/image.avif'
import teaImage from '../assets/chai.avif'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#4B2E2B] text-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sips</h1>
          <p className="text-2xl text-amber-100">Coffee & Tea Shop</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4B2E2B] mb-4">Welcome</h2>
          <p className="text-gray-700 text-lg">
            Step into a world where every cup tells a story. 
            Sips is your neighborhood sanctuary for premium coffee, 
            artisan tea, and warm conversations.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={coffeeImage} 
              alt="Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4B2E2B] mb-2">Premium Coffee</h3>
              <p className="text-gray-600">
                From rich espresso to smooth pour-overs, our coffee is crafted with passion.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={teaImage} 
              alt="Tea"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#4B2E2B] mb-2">Artisan Tea</h3>
              <p className="text-gray-600">
                Traditional blends and specialty teas, each cup brewed to perfection.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-[#4B2E2B] mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-[#4B2E2B] mb-2">Coffee</h3>
              <p className="text-gray-600">Espresso, Americano, Cappuccino, Latte</p>
            </div>
            <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-[#4B2E2B] mb-2">Tea</h3>
              <p className="text-gray-600">Masala Chai, Green Tea, Herbal Blends</p>
            </div>
            <div className="bg-[#F5EDEB] p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-[#4B2E2B] mb-2">Pastries</h3>
              <p className="text-gray-600">Fresh croissants, muffins, and desserts</p>
            </div>
          </div>
        </div>

        {/* Atmosphere Section */}
        <div className="bg-linear-to-r from-[#F5EDEB] to-[#E8D8D6] rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#4B2E2B] mb-4">Our Atmosphere</h2>
            <p className="text-gray-700 mb-6">
              A cozy space perfect for work, study, or catching up with friends. 
              Comfortable seating, warm lighting, and a welcoming vibe.
            </p>
           
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;