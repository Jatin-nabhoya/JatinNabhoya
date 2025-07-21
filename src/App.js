import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#282C33] text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-[#C778DD] grid grid-cols-2">
              <div className="bg-[#C778DD]"></div>
            </div>
            <span className="font-mono px-2 font-bold text-lg text-white">Jatin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <a href="#home" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>home</a>
            <a href="#about" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>about</a>
            <a href="#experience" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>experience</a>
            <a href="#projects" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>projects</a> 
            <a href="#blog" className="nav-link px-4 text-white hover:text-[#C778DD]"> <span className="text-[#C778DD]">#</span>blog</a>
            <a href="#certificates" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>certificates</a>
            <a href="#leadership" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>leadership </a>
            <a href="#contact" className="nav-link px-4 text-white hover:text-[#C778DD]"><span className="text-[#C778DD]">#</span>contact </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <Navigation onClose={() => setIsMenuOpen(false)} />
      )}

      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Certificates />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App; 