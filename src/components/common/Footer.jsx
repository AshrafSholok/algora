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
            <span className="text-red-500 text-xl mr-3">📞</span>
            MON TO FRI : 10:00AM - 06:00PM
          </div>
          <div className="text-lg font-bold text-white ml-7">+123 54214 578 52</div>
        </div>
        <div>
          <div className="flex items-center text-sm">
            <span className="text-red-500 text-xl mr-3">📧</span>
            DO YOU HAVE A QUESTION?
          </div>
          <div className="text-lg font-bold text-white ml-7">example@taiker.com</div>
        </div>
        <div>
          <div className="flex items-center text-sm">
            <span className="text-red-500 text-xl mr-3">🌐</span>
            SOCIALS NETWORK
          </div>
          <div className="flex items-center gap-3 text-xl ml-7 mt-2">
            {/* Facebook */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="TikTok">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.25V9.5a5.25 5.25 0 1 0 5.25 5.25V7.5c.69.54 1.56.9 2.5.9V6.25c-.94 0-1.81-.36-2.5-.9V2h-3.25z"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="WhatsApp">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12 2.163c-5.468 0-9.837 4.369-9.837 9.837 0 1.737.455 3.404 1.318 4.857L2 22l5.18-1.357a9.822 9.822 0 0 0 4.82 1.23c5.468 0 9.837-4.369 9.837-9.837 0-5.468-4.369-9.837-9.837-9.837z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition duration-300" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
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