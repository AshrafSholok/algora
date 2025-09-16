function Landing() {
    return (
        <section className="relative pt-24">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('../../src/assets/images/ftuy4.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="absolute inset-0 bg-white bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative grid max-w-screen-xl px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-gray-900">Your Vision, Our Code — Building Scalable Software That Works for You</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">From startups to enterprises, we design and develop powerful digital solutions that grow with your business.</p>
                    <a href="/contactus" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-200 transition-all duration-300">
                        Start Your Project
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all duration-300">
                        Talk to Our Experts
                    </a>
                </div>
                <div className="lg:mt-0 lg:col-span-5 lg:flex pt-8 shadow-xl">
                    <img src="../../src/assets/svg/developer-team.svg" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Landing