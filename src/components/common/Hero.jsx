import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="relative py-32 bg-[url('../../src/assets/images/ftuy4.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex my-14 flex-col items-center justify-center h-full text-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-gray-900">
          {title}
            </h1>
            
            <div className="w-[5rem] h-[2.5px] bg-primary-500 mb-6"></div>

            {/* Subtitle with a clean pill design for contrast and readability */}
            {subtitle && (
          <p className="max-w-3xl text-lg md:text-xl text-gray-900">
            <span className="inline-block px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
              {subtitle}
            </span>
          </p>
            )}
          </div>
        </div>
          </section>
        );
      };

      export default Hero;