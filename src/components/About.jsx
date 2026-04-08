import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image & Badges */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="NEXORA Team" 
                className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Badges */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-2xl z-20 hidden md:block border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0e27]/80">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-brand-cyan mb-1">5+</span>
                <span className="text-sm text-gray-500 dark:text-gray-300 font-medium uppercase tracking-wider">Years Exp</span>
              </div>
            </div>
            <div className="absolute -top-8 -left-8 bg-gradient-brand p-1 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-white dark:bg-[#050816] px-6 py-4 rounded-[14px] flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-bold text-gray-900 dark:text-white">250+ Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-cyan text-sm uppercase tracking-widest font-bold mb-2">About The Agency</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Your Partners in <span className="text-gradient">Digital Growth</span></h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just build marketing campaigns; we engineer scalable growth machines. NEXORA brings together top-tier creative talent and analytical minds to give your business the unfair advantage it deserves.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <FaCheckCircle />, title: "Result-Driven", desc: "Data-backed strategies focused on ROI." },
                { icon: <FaHandshake />, title: "Trusted Partner", desc: "98% retention rate speaks for itself." },
                { icon: <FaGlobe />, title: "Global Reach", desc: "Scaling brands across international markets." }
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-cyan shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-1">{feat.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <h4 className="font-bold mb-6 text-gray-900 dark:text-white">Our 4-Step Proven Process</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Discovery', 'Strategy', 'Execute', 'Optimize'].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-brand-purple font-black text-3xl opacity-30 mb-2">0{index + 1}</div>
                    <div className="text-gray-800 dark:text-white font-medium text-sm">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
