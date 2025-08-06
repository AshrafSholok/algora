function AboutUs() {
  return (
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
  )
}

export default AboutUs