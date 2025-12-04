import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/image.avif'
import Chai from '../assets/chai.avif'

const Menu = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#4B2E2B] text-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
          <p>Where quality meets comfort in every cup</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
       
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="md:flex items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-[#4B2E2B] mb-4">Classic Coffees</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#F5EDEB] pb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Espresso</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.130</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F5EDEB] pb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Americano</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.140</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F5EDEB] pb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Cappuccino</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.160</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F5EDEB] pb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Latte</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.180</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F5EDEB] pb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Mocha</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.200</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">Macchiato</h3>
                  </div>
                  <span className="font-bold text-[#876E6B]">Rs.170</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src={Image} 
                alt="Coffee being poured"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6">Specialty Coffees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Caramel Latte</h3>
                <span className="font-bold text-[#876E6B]">Rs.250</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Hazelnut Latte</h3>
                <span className="font-bold text-[#876E6B]">Rs.250</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Vanilla Cold Brew</h3>
                <span className="font-bold text-[#876E6B]">Rs.230</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Affogato</h3>
                <span className="font-bold text-[#876E6B]">Rs.280</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Irish Coffee</h3>
                <span className="font-bold text-[#876E6B]">Rs.320</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Iced Latte</h3>
                <span className="font-bold text-[#876E6B]">Rs.230</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Iced Mocha</h3>
                <span className="font-bold text-[#876E6B]">Rs.250</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Cold Coffee (Cafe Style)</h3>
                <span className="font-bold text-[#876E6B]">Rs.240</span>
              </div>
            </div>
          </div>
        </div>

       
       

       
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                src={Chai} 
                alt="Tea preparation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6">Classic Teas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800">Black Tea</h3>
                    <span className="font-bold text-[#876E6B]">Rs.40</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800">Green Tea</h3>
                    <span className="font-bold text-[#876E6B]">Rs.100</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800">Milk Tea</h3>
                    <span className="font-bold text-[#876E6B]">Rs.60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800">Masala Chai</h3>
                    <span className="font-bold text-[#876E6B]">Rs.70</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800">Lemon Tea</h3>
                    <span className="font-bold text-[#876E6B]">Rs.50</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800">Ginger Tea</h3>
                    <span className="font-bold text-[#876E6B]">Rs.60</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6">Specialty Teas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Matcha Latte</h3>
                <span className="font-bold text-[#876E6B]">Rs.240</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Hibiscus Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.160</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Chamomile Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.150</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Earl Grey</h3>
                <span className="font-bold text-[#876E6B]">Rs.160</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Jasmine Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.170</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Peach Iced Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.180</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-800">Lemon Iced Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.160</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Green Iced Tea</h3>
                <span className="font-bold text-[#876E6B]">Rs.170</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-[#4B2E2B] mb-6"> Snacks & Food Items</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            
           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center text-[#4B2E2B] mb-4">Bakery</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Croissants</h4>
                  <span className="font-bold text-[#876E6B]">Rs.120</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Muffins</h4>
                  <span className="font-bold text-[#876E6B]">Rs.130</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Donuts</h4>
                  <span className="font-bold text-[#876E6B]">Rs.90</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Banana Bread</h4>
                  <span className="font-bold text-[#876E6B]">Rs.140</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Brownies</h4>
                  <span className="font-bold text-[#876E6B]">Rs.120</span>
                </div>
              </div>
            </div>
            
           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center text-[#4B2E2B] mb-4">Light Meals</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Sandwiches</h4>
                  <span className="font-bold text-[#876E6B]">Rs.250</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Veg Wrap</h4>
                  <span className="font-bold text-[#876E6B]">Rs.220</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Chicken Panini</h4>
                  <span className="font-bold text-[#876E6B]">Rs.280</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Cheese Garlic Toast</h4>
                  <span className="font-bold text-[#876E6B]">Rs.180</span>
                </div>
              </div>
            </div>
            
          
            <div className="bg-white rounded-lg p-6 shadow-sm">

              <h3 className="text-xl font-bold text-center text-[#4B2E2B] mb-4">Desserts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Pastry (Chocolate)</h4>
                  <span className="font-bold text-[#876E6B]">Rs.160</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Pastry (Strawberry)</h4>
                  <span className="font-bold text-[#876E6B]">Rs.160</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Cheesecake</h4>
                  <span className="font-bold text-[#876E6B]">Rs.240</span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-800">Ice Cream Cups</h4>
                  <span className="font-bold text-[#876E6B]">Rs.160</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-block bg-[#4B2E2B] text-amber-50 px-8 py-3 rounded-lg hover:bg-[#301D1B] font-bold"
            >
              Find Our Location
            </Link>
            <Link 
              to="/about"
              className="inline-block bg-[#876E6B] text-amber-50 px-8 py-3 rounded-lg hover:bg-[#6F5855] font-bold"
            >
              Learn About Us
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Menu;
