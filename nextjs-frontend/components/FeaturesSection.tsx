'use client'

import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Fully Responsive',
      description: 'Works seamlessly on all devices and screen sizes',
      icon: '📱',
    },
    {
      id: 2,
      title: 'Retina Ready',
      description: 'Crystal clear display on high resolution screens',
      icon: '👁️',
    },
    {
      id: 3,
      title: 'Easily Customize',
      description: 'Simple and intuitive customization options',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Quality Code',
      description: 'Built with clean and professional standards',
      icon: '💻',
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our powerful features designed for your success.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition duration-300 transform hover:scale-105 border border-gray-200"
            >
              {/* Icon circle */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 text-3xl sm:text-4xl md:text-5xl">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
