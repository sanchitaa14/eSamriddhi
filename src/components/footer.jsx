import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-400 py-2 mt-4">
      <div className="px-4">
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-center">Feedback</h3>
          <form className="mt-2 max-w-md mx-auto">
            <div className="mb-2">
              <label htmlFor="email" className="block text-xs font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 text-sm border border-gray-500 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your email address" />
            </div>
            <div className="mb-2">
              <label htmlFor="feedback" className="block text-xs font-medium">Feedback</label>
              <textarea id="feedback" name="feedback" rows="2" className="w-full px-3 py-2 text-sm border border-gray-500 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your feedback"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">Submit Feedback</button>
            </div>
          </form>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-2 md:mb-0 text-center">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-1 text-xs">Have questions? Reach out to us!</p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:ml-4">
            <div className="mb-2 md:mb-0 md:mr-4 text-center">
              <h4 className="text-sm font-normal">Email</h4>
              <p className="mt-1 text-xs">info@example.com</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-normal">Phone</h4>
              <p className="mt-1 text-xs">+1 123 456 7890</p>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-500" />
        <div className="text-center text-xs">
          <p>Your Company &copy; 2024. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">&hearts;</span> by Your Name</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
