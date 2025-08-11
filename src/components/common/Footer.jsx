import {FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaGlobe  } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-12">
    {/* Contact Info */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-4 border-b border-white inline-block">Contact Info</h3>
      <div className="space-y-4 mt-4">
        <div>
          <div className="flex items-center text-sm">
            <span className="text-blue-500 text-2xl mr-3"><FaPhoneAlt /></span>
            MON TO FRI : 10:00AM - 06:00PM
          </div>
          <div className="text-lg font-bold text-white ml-7">+123 54214 578 52</div>
        </div>
        <div>
          <div className="flex items-center text-sm">
            <span className="text-blue-500 text-2xl mr-3"><FaEnvelope /></span>
            DO YOU HAVE A QUESTION?
          </div>
          <div className="text-lg font-bold text-white ml-7">example@taiker.com</div>
        </div>
        <div>
          <div className="flex items-center text-sm">
            <span className="text-blue-500 text-2xl mr-3"><FaGlobe /></span>
            SOCIALS NETWORK
          </div>
          <div className="flex items-center gap-3 text-xl ml-7 mt-2">
            {/* Facebook */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="Facebook">
              <FaFacebookF />
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="TikTok">
              <FaTiktok />
            </a>
            {/* WhatsApp */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-4 border-b border-white inline-block">Quick Links</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm">
        {[
          'Home', 'About',
          'Blog', 'Contact',
          'Team Style Two', 'Features',
          'Support', 'Projects',
          'Services', 'Shop',
          'Team', 'Support'
        ].map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:text-white hover:translate-x-1 transition duration-300 inline-block"
          >
            {link}
          </a>
        ))}
      </div>
    </div>

    {/* Subscribe Section (instead of Instagram) */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-4 border-b border-white inline-block">Stay Updated</h3>
      <p className="text-sm mt-4 mb-6">Subscribe to get the latest news and updates.</p>
      <form className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white w-full"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full sm:w-auto transition duration-300">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-8 text-sm text-gray-500 gap-2">
    <div>
      Copyright ©2025 <span className="text-white font-semibold">Algora+</span>
    </div>
    <div className="flex gap-4">
      <a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a>
      <span>|</span>
      <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
    </div>
  </div>
</footer>

    );
}
export default Footer;