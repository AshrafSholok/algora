import React from 'react'
import { motion } from "framer-motion";

function Cta() {
  return (
    <section className="py-20 bg-primary-500 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Animated Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Ready to Bring Your Idea to Life?
        </h2>

        {/* Subtitle */}
        <p className="text-lg mb-8">
          We turn your vision into scalable, user-friendly software. Let’s start building your success story today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contactus"
            className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="px-8 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta