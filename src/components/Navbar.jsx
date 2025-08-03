'use client'

import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg">
      <div className="flex">
        {/* Company Name Section - Left Side */}
        <div className="bg-gradient-to-r from-orange-700 to-orange-600 px-8 py-4 flex items-center space-x-4">
          <a href="#">
  <div className="flex justify-center items-center space-x-6">
    <img 
      src="/website/logo.png" 
      alt="DESI GAMES Logo" 
      className="h-10 md:h-12 w-auto"
    />
    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
      DESI GAMES
    </h1>
  </div>
</a>

        </div>

        {/* Navigation Items Section - Right Side */}
        <div className="flex-1 bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-end px-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-800 hover:text-orange-700 transition-colors duration-300 font-semibold text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-orange-50 border-t border-orange-200">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-gray-800 hover:text-orange-700 hover:bg-orange-100 rounded-md font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar