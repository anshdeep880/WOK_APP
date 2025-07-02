import React from 'react';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Restaurant POS</h1>
        <p className="text-xl text-blue-100 mb-8">Loading your experience...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;