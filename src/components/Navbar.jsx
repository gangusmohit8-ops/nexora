import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize theme from localStorage or document class
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo container */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-slate-50 dark:bg-[#050816] rounded-[10px] flex items-center justify-center pointer-events-none group-hover:bg-transparent transition-all duration-300">
               <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-white">N</span>
            </div>
          </div>
          <span className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
            NEXORA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-cyan-light transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-all text-gray-700 dark:text-white"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 border border-transparent dark:border-white/10 transition-all text-sm font-medium hover:scale-105 active:scale-95">
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger toggle & Theme toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 transition-all text-gray-700 dark:text-white"
          >
             {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-gray-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 w-5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-4'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200 dark:border-white/10 mt-4 overflow-hidden bg-white dark:bg-transparent"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-white py-2 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-brand text-white font-medium">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
