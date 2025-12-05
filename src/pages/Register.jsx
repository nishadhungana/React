import React, { useState } from "react";

const Register = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old users or empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user
    users.push(formData);

    // Save updated list back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");

    // Clear form after submit
    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      address: "",
    });
  };

  return (
    <>
      <div className="bg-[#4B2E2B] text-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Register Here</h1>
          <p>Be a part of Sips</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-96 border border-[#E8D8D6] rounded-lg px-6 py-7">
          <h2 className="text-2xl font-bold text-[#4B2E2B] mb-6 pb-2 border-b border-[#E8D8D6]">
            Registration Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Contact Number</label>
              <input
                type="number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E8D8D6] rounded-md"
                required
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
    </>
  )
}

export default Register
