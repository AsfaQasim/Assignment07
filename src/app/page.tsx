import Link from "next/link";
import React from "react";


const Page = () => {
  return (
    <div className="min-h-screen bg-purple-200 from-blue-50 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Data Fetching Assignment
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Learn about different data fetching techniques for{" "}
          <span className="font-semibold text-blue-600">Client Side</span> and{" "}
          <span className="font-semibold text-purple-600">Server Side</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          <Link
            href="/server"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none transition duration-300"
          >
            Products <span className="font-semibold">(Server Side)</span>
          </Link>
        
     
          <Link
            href="/client"
            className="w-full md:w-auto bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 focus:ring focus:ring-purple-300 focus:outline-none transition duration-300"
          >
            Recipes <span className="font-semibold">(Client Side)</span>
          </Link>
        </div>
        <Link
          href="/read"
          className="inline-block bg-blue-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Page;
