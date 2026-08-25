import React from 'react'

function Meeting() {
  return (
    <>
    <section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Let’s Build Your Idea Together 
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
      Share your vision with us, and we’ll turn it into reality through 
      interactive online meetings, brainstorming sessions, and agile development.
    </p>

    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {/* Step 1 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
        <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
          1
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Your Idea</h3>
        <p className="text-gray-600 text-sm text-center">
          Tell us about your software needs through our contact form or social channels.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
        <div className="w-14 h-14 bg-indigo-500 text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
          2
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet Online</h3>
        <p className="text-gray-600 text-sm text-center">
          Schedule a virtual meeting with our team to discuss the details and brainstorm.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
        <div className="w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
          3
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Building</h3>
        <p className="text-gray-600 text-sm text-center">
          We get to work, keeping you updated every step of the way until launch.
        </p>
      </div>
    </div>
  </div>
</section>
{/* <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="max-w-screen-xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
      Share Your Idea, We’ll Bring It to Life 🚀
    </h2>
    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
      We specialize in turning concepts into fully functional software
      solutions. Book a quick online meeting with our experts, and
      let’s discuss how we can transform your vision into reality — no
      matter where you are in the world.
    </p>
    <a
      href="#"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
    >
      Schedule an Online Meeting
    </a>
  </div>
</section> */}
</>
  )
}

export default Meeting