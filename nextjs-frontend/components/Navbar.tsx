'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Bikin
            </Link>
          </div>

          {/* Menu for desktop */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Feature
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Price & Plan
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </button>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1"
          >
            <div className={`h-0.5 w-6 bg-white transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-white transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-blue-400">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Feature
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Price & Plan
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
