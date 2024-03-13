import React from 'react';

function WasteInvitation() {
  return (
    <div className="bg-blue-200 rounded-lg shadow-lg overflow-hidden py-8 px-4 md:px-8 mt-4 mx-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-8">
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/500x400/?clean-environment" alt="Clean Environment" className="w-full h-auto" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-gray-800 mb-4">Exchange Your Dry Waste for Points and Discounts!</h2>
          <p className="text-lg text-gray-700 text-center md:text-left mb-6">Help us keep the environment clean and earn rewards by exchanging your dry waste at our collection centers.</p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteInvitation;
