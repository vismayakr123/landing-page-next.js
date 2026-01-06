'use client'

import React, { useState } from 'react'

export default function HeroSection() {
  const [loading, setLoading] = useState(false)

  const handleLiveDemo = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Demo request sent!')
    }, 1000)
  }

  const handleGetNow = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Purchase request received!')
    }, 1000)
  }

  return (
    <section
      id="home"
      className="relative pt-16 pb-12 h-80 flex items-center"
      style={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            Modern Design
          </h1>
          <p className="text-sm md:text-base text-white mb-4 leading-relaxed drop-shadow-md line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            impedit accusamus hic nobis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleLiveDemo}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300 disabled:opacity-50 shadow-lg text-xs md:text-sm"
            >
              {loading ? 'Loading...' : 'Live Demo'}
            </button>
            <button
              onClick={handleGetNow}
              disabled={loading}
              className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-5 rounded-lg border-2 border-white transition duration-300 disabled:opacity-50 shadow-lg text-xs md:text-sm"
            >
              {loading ? 'Loading...' : 'Get Now'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
