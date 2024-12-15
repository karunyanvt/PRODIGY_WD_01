import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white text-center items-center min-h-screen flex"
    >
      <div className="min-w-[60%]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold">Welcome to Prodigy</h2>
          <p className="mt-4 text-xl">Your ultimate solution for success</p>
          <button
            className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold hover:bg-gray-700 transition duration-300"
            onClick={() =>
              document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-gray-800 rounded-3xl pl-8 hidden sm:block min-w-[40%]">
        <img
          src="https://prodigyinfotech.dev/assets/images/logo/logo-2.svg"
          alt="Prodigy Logo"
          className="size-96"
        />
      </div>
    </section>
  );
};

export default HeroSection;
