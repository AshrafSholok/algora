import React from 'react'

function LetsTalk() {
    return (
        <section className="relative bg-gray-50 text-white py-20 text-center overflow-hidden">
            {/* Dim Background Text */}
            <h2 className="text-[12vw] md:text-[10vw] font-extrabold text-[#666666] tracking-tight absolute inset-0 flex justify-center items-center opacity-10 select-none z-0">
                LET’S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TALK
            </h2>
            {/* Front Text */}
            <div className="relative z-10">
                <p className="text-xl md:text-2xl font-normal tracking-widest mb-12 uppercase text-gray-300">
                    Work With Us
                </p>

                {/* Circular CTA Button */}
                <a
                    href="/contact"
                    className="inline-flex flex-col items-center justify-center w-44 h-44 md:w-52 md:h-52 text-white text-lg md:text-xl font-semibold bg-primary-500 hover:bg-primary-400 transition-all duration-300 ease-in-out rounded-full shadow-xl hover:shadow-[0_0_40px_#3333ff] group"
                >
                    <span className="text-center leading-snug tracking-wide">
                        Contact<br />With Us.
                    </span>
                    <svg
                        className="w-6 h-6 mt-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default LetsTalk