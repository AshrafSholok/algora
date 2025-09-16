import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="../../src/assets/images/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className={`transition-colors duration-300 hover:text-primary-500 ${
                  window.location.pathname === link.path
                    ? "text-primary-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button and CTA */}
        <div className="flex items-center gap-4">
          <a
            href="/contactus"
            className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            Get Started
          </a>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-500 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={() => setOpen(false)}
                className={`block transition-colors duration-300 hover:text-primary-500 ${
                  window.location.pathname === link.path
                    ? "text-primary-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
