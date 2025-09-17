import { MdOutlineAutoMode } from "react-icons/md";
import { VscTypeHierarchySuper } from "react-icons/vsc";

function OurServices() {
  return (
    <section className="pt-20 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide a wide range of digital solutions to elevate your business and help you thrive in the digital era.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">Web Development</h3>
              <p className="text-gray-600 group-hover:text-gray-700 text-center">Modern, responsive, and SEO-friendly websites tailored to your business needs</p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">Mobile App Development</h3>
              <p className="text-gray-600 group-hover:text-gray-700 text-center">Native & cross-platform apps that deliver seamless experiences across iOS and Android.</p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">Cloud Solutions</h3>
              <p className="text-gray-600 group-hover:text-gray-700 text-center">Scale securely with cloud-native applications and infrastructure.</p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">UI/UX Design</h3>
              <p className="text-gray-600 group-hover:text-gray-700 text-center">User-focused designs that drive engagement and retention.</p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">Digital Marketing</h3>
              <p className="text-gray-600 group-hover:text-gray-700 text-center">Data-driven campaigns that convert visitors into loyal customers.</p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:bg-primary-50 flex flex-col items-center h-full">
            <div className="flex-1 flex flex-col items-center justify-center">

              {/* Icon */}
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {/* <VscTypeHierarchySuper className="h-16 w-16" /> */}
                <MdOutlineAutoMode className="h-16 w-16" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                AI Automation
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-700 text-center">
                Streamline your workflows with intelligent automation powered by AI.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default OurServices;