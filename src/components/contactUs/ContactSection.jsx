import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";


function ContactSection() {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        
        {/* Left: Contact Info */}
        <div>
          <h4 className="text-blue-600 uppercase font-semibold mb-2">Contact With Us</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">LET’S WORK TOGETHER?</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            I provide world-class, flexible support via live chat, email, and phone.  
            I guarantee you'll have any issue resolved within 24 hours.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>168/170, Avenue 01, Old York</p>
                <p>Drive Rich Mirpur DOHS, Bangladesh</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p>+880 566 1111 985</p>
                <p>+880 657 1111 576</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p>info@example.com</p>
                <p>info@support.com</p>
              </div>
            </li>
          </ul>

          {/* Social */}
          <div className="mt-10">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <p className="text-gray-600 mb-4">Follow us on social media</p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTiktok, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-primary-500 hover:text-white transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input-style-light" />
              <input type="text" placeholder="Last Name" className="input-style-light" />
            </div>
            <input type="text" placeholder="Company/Organization" className="input-style-light" />
            <input type="email" placeholder="Email" className="input-style-light" />
            <input type="text" placeholder="Phone" className="input-style-light" />
            <textarea placeholder="Message" rows="4" className="input-style-light"></textarea>
            <button className="w-full py-3 bg-blue-500 text-white hover:bg-blue-600 transition rounded-lg font-semibold shadow-lg hover:shadow-[0_0_20px_#3b82f6]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;