import React from 'react';

const Read = () => {
  return (
    <div className="min-h-screen bg-purple-200 from-blue-50 via-purple-50 to-blue-100 flex flex-col items-center px-4 py-8">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Welcome to my Assignment</h1>

      {/* Flex Container for Sections */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-7xl">
        {/* First Section */}
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-8 text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Client Side Fetching</h2>
          <p className="text-gray-600 leading-relaxed">
            Data is fetched on the client side using <code className="bg-gray-200 px-1 rounded">useEffect</code> and APIs.
          </p>
        </div>

        {/* Second Section */}
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-8 text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Server Side Fetching</h2>
          <p className="text-gray-600 leading-relaxed">
            Data is fetched on the server side using Next.js
          </p>
        </div>

        {/* Third Section */}
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-8 text-center transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Professional UI</h2>
          <p className="text-gray-600 leading-relaxed">
          A clean and responsive design using Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Read;
