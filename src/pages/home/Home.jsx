


function Home() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            <section class="pt-24 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div class="grid max-w-screen-xl px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div class=" lg:mt-0 lg:col-span-5 lg:flex pt-8 shadow-xl">
                        <img src="../../src/assets/svg/developer-team.svg" alt="mockup" />
                    </div>
                </div>
            </section>

            <section class="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>



            {/* Features Section - Glassmorphism */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50/60 via-white/80 to-purple-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">A modern platform for developers and businesses, with a beautiful glassy look.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature Card 1 */}
                        <div className="rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-[400ms]">
                            <div className="mb-4 bg-blue-500/80 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">Your data is protected with industry-leading security and uptime.</p>
                        </div>
                        {/* Feature Card 2 */}
                        <div className="rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-[400ms]">
                            <div className="mb-4 bg-purple-500/80 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2m-4-4V7m0 0V5a2 2 0 10-4 0v2m4 0a2 2 0 104 0V5a2 2 0 10-4 0v2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Developer Friendly</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">Easy-to-use APIs, clear docs, and fast integration for all your needs.</p>
                        </div>
                        {/* Feature Card 3 */}
                        <div className="rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-[400ms]">
                            <div className="mb-4 bg-green-500/80 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">Our team is always here to help you, any time, any day.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Modern Section - Not Glassy */}

            <section className="relative py-20 bg-gradient-to-r from-indigo-950 via-purple-600 to-indigo-950">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">What Makes Us Different?</h2>
                        <p className="text-lg text-white/80">A bold, vibrant platform for the next generation of creators and businesses.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="rounded-2xl bg-white/90 shadow-2xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
                            <div className="mb-4 bg-gradient-to-tr from-indigo-500 to-pink-400 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                            <p className="text-gray-700 text-center">Experience blazing speed and performance, no matter the scale.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="rounded-2xl bg-white/90 shadow-2xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
                            <div className="mb-4 bg-gradient-to-tr from-purple-500 to-indigo-400 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure by Design</h3>
                            <p className="text-gray-700 text-center">Security is built in from the ground up, not bolted on.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="rounded-2xl bg-white/90 shadow-2xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
                            <div className="mb-4 bg-gradient-to-tr from-pink-500 to-indigo-400 p-4 rounded-full shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Always Evolving</h3>
                            <p className="text-gray-700 text-center">We constantly innovate to keep you ahead of the curve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Solutions Section - Inspired by Provided Image */}
            <section className="relative py-20 bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Illustration */}
                    <div className="flex justify-center md:justify-end">
                        <img src='../../src/assets/svg/why-choose-img.png' alt="Brand Solutions Illustration" className="w-full max-w-lg drop-shadow-xl" />
                    </div>
                    {/* Content */}
                    <div>
                        <span className="uppercase text-blue-700 font-semibold tracking-wider text-sm mb-2 inline-block">Design & Development</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Solving problems, building brands</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                <span className="font-medium text-gray-900 dark:text-white text-base">Recommender systems</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                <span className="font-medium text-gray-900 dark:text-white text-base">Demand prediction</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                <span className="font-medium text-gray-900 dark:text-white text-base">Omnichannel analytics</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>

                                <span className="font-medium text-gray-900 dark:text-white text-base">Lead generation</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                <span className="font-medium text-gray-900 dark:text-white text-base">Dedicated Developers</span>
                            </div>
                            <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-blue-700"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                                <span className="font-medium text-gray-900 dark:text-white text-base">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Articles Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <span className="uppercase text-blue-700 font-semibold tracking-wider text-sm mb-2 inline-block">Latest News</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Our Latest Articles And News<br />For Our Clients</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((_, i) => {
                            const articleData = [
                                {
                                    author: 'Sarah Taylor',
                                    date: 'June 24, 2019',
                                    title: 'How To Boost Your Digital Marketing Agency',
                                    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-blue-700'
                                },
                                {
                                    author: 'James Anderson',
                                    date: 'June 26, 2019',
                                    title: 'The Rise Of Smarketing And Why You Need It',
                                    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-orange-700'
                                },
                                {
                                    author: 'Steven Smith',
                                    date: 'June 25, 2019',
                                    title: 'How To Use Music To Boost Your Business',
                                    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-red-700'
                                }
                            ][i];

                            return (
                                <div key={i} className="group rounded-2xl bg-white/90 shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-500">
                                    <div className="relative overflow-hidden h-60">
                                        <img src={articleData.image} alt={`Article ${i + 1}`} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="text-xs text-gray-500 mb-1">
                                            By: <span className={`${articleData.authorColor} font-medium`}>{articleData.author}</span> / {articleData.date}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{articleData.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                            Read More <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-screen-md mx-auto px-4">
                    <div className="mb-12 text-center">
                        <span className="uppercase text-blue-700 font-semibold tracking-wider text-sm mb-2 inline-block">FAQ</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to know about our platform.</p>
                    </div>
                    <div className="space-y-4">
                        {[{
                            q: 'What is Taiker and who is it for?',
                            a: 'Taiker is a modern platform designed for businesses and developers to streamline their workflow and boost productivity.'
                        }, {
                            q: 'How secure is my data?',
                            a: 'We use industry-leading security practices and encryption to keep your data safe and private.'
                        }, {
                            q: 'Can I try Taiker for free?',
                            a: 'Yes! We offer a free trial so you can experience all features before committing.'
                        }, {
                            q: 'How do I contact support?',
                            a: 'You can reach our 24/7 support team via email, chat, or phone.'
                        }].map((item, idx) => (
                            <FAQItem key={idx} question={item.q} answer={item.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

// FAQItem component with animation
import React, { useState } from 'react';
function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={"rounded-xl bg-white/80 dark:bg-gray-800/70 shadow-lg overflow-hidden transition-all duration-400 " + (open ? 'ring-2 ring-blue-400' : '')}>
            <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{question}</span>
                <svg className={"w-6 h-6 text-blue-500 transform transition-transform duration-300 " + (open ? 'rotate-180' : '')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div
                className={"px-6 pb-5 text-gray-700 dark:text-gray-200 text-base transition-all duration-400 " + (open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0')}
                style={{overflow: 'hidden'}}
            >
                <div className="pt-1 animate-fade-in">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default Home