

function WhyDifferent() {
  return (
    <section className="relative py-20 bg-primary-500">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">What Makes Us Different?</h2>
          <p className="text-lg text-white/90">A bold, vibrant platform for the next generation of creators and businesses.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
            <div className="mb-4 bg-primary-600 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-center">Experience blazing speed and performance, no matter the scale.</p>
          </div>
          {/* Card 2 */}
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
            <div className="mb-4 bg-primary-600 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure by Design</h3>
            <p className="text-gray-600 text-center">Security is built in from the ground up, not bolted on.</p>
          </div>
          {/* Card 3 */}
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
            <div className="mb-4 bg-primary-600 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Always Evolving</h3>
            <p className="text-gray-600 text-center">We constantly innovate to keep you ahead of the curve.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyDifferent