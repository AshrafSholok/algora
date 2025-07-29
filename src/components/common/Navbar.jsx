import { useEffect, useRef, useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [links, setLinks] = useState(["Services", "Projects", "Blog", "About", "FAQs"]);
    const headerref = useRef();
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                headerref.current.style.background = "rgba(255, 255, 255, 0.9)";
                headerref.current.style.backdropFilter = "blur(16px)";
                headerref.current.style.borderRadius = "0.5rem";
                headerref.current.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 255, 0.1)";
            } else {
                headerref.current.style.background = "transparent";
                headerref.current.style.backdropFilter = "none";
                headerref.current.style.borderRadius = "";
                headerref.current.style.boxShadow = "";
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header ref={headerref} className="fixed top-0 left-0 w-full z-50 h-[75px] transition-all duration-500 [transition-property:background,backdrop-filter,border-radius,box-shadow]">
            <nav className=" border-gray-200 px-4 lg:px-6 py-5 ">  {/* dark:bg-gray-800 */} 
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
                        <a href="#" className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-all duration-300">Get started</a>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                            aria-controls="mobile-menu-2"
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg className={open ? "hidden w-6 h-6" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            {/* Close icon */}
                            <svg className={open ? "w-6 h-6" : "hidden w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div
                        className={
                            "transition-all duration-500 overflow-hidden " +
                            ((open ? "flex animate-fade-in-glass max-h-[500px] opacity-100 pointer-events-auto " : "max-h-0 opacity-0 pointer-events-none ") +
                            " absolute right-4 top-[60px] min-w-[200px] flex-col items-end bg-white/20 dark:bg-gray-900/40 backdrop-blur-xl rounded-xl shadow-2xl p-4 z-50 ") +
                                " lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-xl lg:shadow-2xl lg:p-0 lg:animate-none lg:relative lg:w-auto lg:min-w-0 lg:top-0 lg:right-0 lg:rounded-none lg:max-h-none lg:opacity-100 lg:pointer-events-auto"
                        }
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col font-medium space-y-2 w-full lg:flex-row lg:space-x-8 lg:space-y-0 lg:mt-0 lg:items-center lg:w-auto">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-900 rounded lg:bg-transparent lg:text-primary-500 lg:p-0 transition-all duration-300 hover:text-primary-600" aria-current="page" >Home</a>
                            </li>
                            {/* <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li> */}
                            {/* <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                            </li> */}
                            {links.map((link) => (
                                <li key={link}>
                                    <a href={`/${link.toLowerCase()}`} className="block py-2 pr-4 pl-3 text-gray-600 hover:text-primary-500 lg:border-0 lg:p-0 transition-all duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar