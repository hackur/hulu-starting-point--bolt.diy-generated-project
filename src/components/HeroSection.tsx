import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1524985069026-dd778a71c7b4)'
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center max-w-2xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited TV Shows & Movies
        </h1>
        <p className="text-xl mb-6">
          Watch anywhere. Cancel anytime.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition">
            Start Free Trial
          </button>
          <button className="bg-white/20 text-white px-8 py-3 rounded-md hover:bg-white/30 transition">
            See Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
