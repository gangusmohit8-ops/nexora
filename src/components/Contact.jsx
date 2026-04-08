import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSpinner, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 will-change-transform"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-cyan text-sm uppercase tracking-widest font-bold mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Let's Build Your <span className="text-gradient">Empire</span></h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Ready to dominate your industry? Drop us a line and let's start engineering your success today.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 flex flex-col gap-6">
            {[
              { icon: <FaEnvelope />, title: "Email Us", info: "hello@nexora.agency", delay: 0.1 },
              { icon: <FaPhoneAlt />, title: "Call Us", info: "+1 (555) 123-4567", delay: 0.2 },
              { icon: <FaMapMarkerAlt />, title: "Visit Us", info: "Silicon Valley, CA", delay: 0.3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.5 }}
                className="glass p-6 rounded-2xl flex items-center gap-6 group hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="lg:col-span-2 glass-card p-8 md:p-12 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input type="text" id="name" required className="bg-white/50 dark:bg-[#050816]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" id="email" required className="bg-white/50 dark:bg-[#050816]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input type="tel" id="phone" className="bg-white/50 dark:bg-[#050816]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Interested In</label>
                  <select id="service" className="bg-white/50 dark:bg-[#050816]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-600 dark:text-white/50 focus:outline-none focus:border-brand-cyan transition-colors appearance-none">
                    <option value="">Select a service</option>
                    <option value="seo">SEO & Content</option>
                    <option value="ads">Google & Meta Ads</option>
                    <option value="web">Website Development</option>
                    <option value="social">Social Media</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                <textarea id="message" rows="4" required className="bg-white/50 dark:bg-[#050816]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== "idle"}
                className={`mt-4 w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  formState === "success" 
                    ? "bg-green-500 text-white" 
                    : "bg-gradient-brand text-white hover:opacity-90 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                }`}
              >
                {formState === "idle" && "Send Message"}
                {formState === "loading" && <FaSpinner className="animate-spin text-2xl" />}
                {formState === "success" && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <FaCheck /> Message Sent!
                  </motion.div>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
