import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      { threshold: 0.5 } // Section must be at least 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-white">Prodigy</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex space-x-6 text-lg ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row gap-6">
            <li>
              <a
                href="#home"
                className={`transition duration-300 hover:text-gray-300 ${
                  activeSection === 'home'
                    ? 'font-bold text-white text-shadow-md'
                    : 'text-gray-300'
                }`}
                aria-label="Go to Home page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`transition duration-300 hover:text-gray-300 ${
                  activeSection === 'about'
                    ? 'font-bold text-white text-shadow-md'
                    : 'text-gray-300'
                }`}
                aria-label="Go to About page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`transition duration-300 hover:text-gray-300 ${
                  activeSection === 'services'
                    ? 'font-bold text-white text-shadow-md'
                    : 'text-gray-300'
                }`}
                aria-label="Go to Services page"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`transition duration-300 hover:text-gray-300 ${
                  activeSection === 'contact' ? 'font-bold text-gray-300' : 'text-white'
                }`}
                aria-label="Go to Contact page"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
