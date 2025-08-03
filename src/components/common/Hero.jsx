import React from 'react';

const Hero = ({ title }) => {
  return (
    <section className="relative py-32 bg-[url('../../src/assets/images/ftuy4.jpg')] bg-cover bg-center">
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-white bg-opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex my-14 flex-col items-center justify-center h-full">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-gray-900">
            {title}
          </h1>
          <div className="w-16 h-[2.5px] bg-primary-500"></div> {/* Primary line for contrast on dark bg */}
        </div>
      </div>
    </section>
  );
};

export default Hero;