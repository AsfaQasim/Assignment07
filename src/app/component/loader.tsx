import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-opacity-60 bg-gray-800 z-50 mt-60">
      <div className="flex space-x-6">
        {/* Large Loader */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-600 rounded-lg animate-pulse" />
          <div
            className="w-20 h-20 border-4 border-t-4 border-fuchsia-600 animate-spin rounded-lg absolute left-0 top-0"
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* Medium Loader */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-600 rounded-lg animate-pulse" />
          <div
            className="w-16 h-16 border-4 border-t-4 border-fuchsia-600 animate-spin rounded-lg absolute left-0 top-0"
            style={{ animationDuration: '1.2s' }}
          />
        </div>

        {/* Small Loader */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-fuchsia-600 rounded-lg animate-pulse" />
          <div
            className="w-12 h-12 border-4 border-t-4 border-purple-600 animate-spin rounded-lg absolute left-0 top-0"
            style={{ animationDuration: '3s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
