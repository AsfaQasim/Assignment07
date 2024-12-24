import Link from 'next/link';
import React from 'react';
import { Roboto } from "next/font/google";

// Configure the Roboto font
const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400", "700"], 
  display: "swap", 
});

const Header = () => {
  return (
    <header
      className={`bg-purple-500 from-blue-500 via-purple-500 to-pink-500 text-white body-font shadow-md sticky top-0 z-50 ${roboto.className}`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="text-2xl font-bold tracking-wide">Data Fetching</h1>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6 mt-3 md:mt-0">
          <Link href="/" className="hover:text-gray-200 transition duration-200">
            Home
          </Link>
          <Link href="/client" className="hover:text-gray-200 transition duration-200">
            Client Side
          </Link>
          <Link href="/server" className="hover:text-gray-200 transition duration-200">
            Server Side
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
