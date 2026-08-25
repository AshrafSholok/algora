import { Fragment } from "react"
import LetsTalk from "../common/LetsTalk"


function AboutUs() {
    return (
        <Fragment>
            <section className="py-20 bg-white w-full">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                        {/* Left side - Image/Illustration */}
                        <div className="lg:w-1/2 w-full">
                            <img
                                src="../../src/assets/svg/about-us.png"
                                alt="Digital Marketing Illustration"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:w-1/2 w-full">
                            <span className="uppercase text-primary-500 font-semibold tracking-wider text-sm mb-2 inline-block">About Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Are Degital Explorers</h2>
                            <p className="text-gray-600 mb-8 text-base leading-relaxed">
                                We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.
                            </p>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">Recommender systems</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">Demand prediction</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">Omnichannel analytics</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">Lead generation</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">Dedicated Developers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-primary-500"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                    <span className="font-medium text-gray-900 text-base">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision & Mission</h2>
                    <p className="text-gray-600 mb-6">
                        Our mission is to empower businesses with modern, scalable, and elegant digital solutions.
                        We envision a future where every business leverages the power of technology to innovate.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-primary-500 mb-2">Our Mission</h3>
                            <p className="text-gray-600">Deliver innovative and user-centric software products that drive growth.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-primary-500 mb-2">Our Vision</h3>
                            <p className="text-gray-600">Be the global leader in building digital-first experiences for startups and enterprises alike.</p>
                        </div>
                    </div>
                </div>
            </section>





            {/* <section className="bg-primary-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
                    <p className="mb-6">Have a project idea or looking for a technology partner? Let’s connect and grow your business digitally.</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg shadow hover:shadow-lg transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section> */}

            {/* <section className="relative bg-gray-50 text-white py-20 text-center overflow-hidden">
                <h2 className="text-[12vw] md:text-[10vw] font-extrabold text-[#1a1a1a] tracking-tight absolute inset-0 flex justify-center items-center opacity-10 select-none z-0">
                    LET’S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TALK
                </h2>
                <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-normal tracking-widest mb-12 uppercase text-gray-300">
                        Work With Us
                    </p>
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
            </section> */}

            <LetsTalk />
        </Fragment>
    )
}

export default AboutUs