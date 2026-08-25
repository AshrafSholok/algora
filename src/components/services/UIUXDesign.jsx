import React from 'react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
    return (
        <section className="py-20 bg-white w-full">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                    {/* Left side - Image/Illustration */}
                    <div className="lg:w-1/2 w-full">
                        <img
                            src="../../src/assets/svg/services/ui-ux-design.png"
                            alt="UI/UX Design Illustration"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">UI/UX Design Excellence</h2>
                        <p className="text-gray-600 mb-8 text-base leading-relaxed">
                            We craft intuitive digital experiences that delight users and drive business results. Our human-centered approach blends aesthetics with functionality to create interfaces that feel effortless.
                        </p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">User Research & Analysis</span>
                            </div>
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">Wireframing & Prototyping</span>
                            </div>
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">Interaction Design</span>
                            </div>
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">Visual Interface Design</span>
                            </div>
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">Usability Testing</span>
                            </div>
                            <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-semibold">Design Systems</span>
                            </div>
                        </div>

                        <Link
                            to={`/services/ui-ux-design`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UIUXDesign;