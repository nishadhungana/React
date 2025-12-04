import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F5] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#4B2E2B] mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-[#4B2E2B] text-amber-50 px-6 py-2 rounded-lg hover:bg-[#301D1B]"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;