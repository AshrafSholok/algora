

function Whyus() {
    return (
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
    )
}

export default Whyus