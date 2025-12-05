import React, { useState } from 'react';

const Contact = () => {

    //State to store form inputs
    const [formData, setFormData] = useState({
      email: "",
      subject: "",
      message: "",
    })

    //Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    //Handle form submit
    const handleSubmit = (e) => {
      e.preventDefault();

      //Get old users or empty array
      const users = JSON.parse(localStorage.getItem("users")) || [];
     
      //Add new user
      users.push(formData);

      //Save updated list back to localStorage
      localStorage.setItem("users",JSON.stringify(users))

      alert("Message Submitted Successfully!");

      //Clear form after submit
      setFormData({
        email: "",
        subject: "",
        message: "",
      })
    }

  
  return (
    <>
      <div className="bg-[#4B2E2B] text-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p>Get in touch with Sips</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6 pb-2 border-b border-[#E8D8D6]">
              Sips
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#4B2E2B] mb-2">Address</h3>
                <p className="text-gray-700">Pulchowk, Lalitpur</p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#4B2E2B] mb-2">Phone</h3>
                <p className="text-gray-700">(01) 5430998</p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#4B2E2B] mb-2">Email</h3>
                <p className="text-gray-700">hello@sips.com</p>
              </div>
          </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6 pb-2 border-b border-[#E8D8D6]">
              Contact Form
            </h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                  placeholder="something@something.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#4B2E2B] text-amber-50 font-bold py-3 px-6 rounded-md hover:bg-[#301D1B]"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;