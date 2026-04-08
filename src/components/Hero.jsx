import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatCounter = ({ end, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center relative p-6 glass rounded-2xl group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-2">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {end}{suffix}
          </motion.span>
        ) : (
          "0"
        )}
      </h3>
      <p className="text-brand-cyan text-sm uppercase tracking-widest font-medium">
        {label}
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Liquid Canvas Background Simulation - Optimized for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple rounded-full blur-[80px] opacity-40 animate-blob will-change-transform"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-[80px] opacity-40 animate-blob animation-delay-2000 will-change-transform"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-[80px] opacity-40 animate-blob animation-delay-4000 will-change-transform"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              animate={{ boxShadow: ['0px 0px 0px rgba(124,58,237,0)', '0px 0px 20px rgba(124,58,237,0.5)', '0px 0px 0px rgba(124,58,237,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">#1 Digital Marketing Agency</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
              Dominate Your <br />
              <span className="text-gradient">Digital Space.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
              We leverage cutting-edge strategies and data-driven insights to scale your brand, maximize ROI, and leave your competitors behind.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-8 py-4 rounded-full bg-gradient-brand text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full glass text-gray-900 dark:text-white font-semibold text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                Book a Strategy Call
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StatCounter end="250" suffix="+" label="Projects Delivered" />
            <StatCounter end="98" suffix="%" label="Client Retention" />
            <StatCounter end="50" suffix="+" label="Team Members" />
            <StatCounter end="5" suffix="+" label="Years Experience" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
