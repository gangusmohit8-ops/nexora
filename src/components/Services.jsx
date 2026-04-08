import { motion } from "framer-motion";
import { FaSearchDollar, FaHashtag, FaBullhorn, FaGoogle, FaDesktop, FaCode, FaPenNib, FaVideo } from "react-icons/fa";

const Services = () => {
  const services = [
    { title: "Search Engine Optimization", type: "Organic", icon: <FaSearchDollar className="text-3xl" />, abbr: "SEO" },
    { title: "Social Media Optimization", type: "Organic", icon: <FaHashtag className="text-3xl" />, abbr: "SMO" },
    { title: "Social Media Marketing", type: "Paid", icon: <FaBullhorn className="text-3xl" />, abbr: "SMM" },
    { title: "Google Ads Management", type: "Paid", icon: <FaGoogle className="text-3xl" /> },
    { title: "Meta Ads Campaigns", type: "Paid", icon: <FaDesktop className="text-3xl" /> },
    { title: "Website Development", type: "Tech", icon: <FaCode className="text-3xl" /> },
    { title: "Content Engineering", type: "Content", icon: <FaPenNib className="text-3xl" />, featured: true },
    { title: "Video Editing", type: "Creative", icon: <FaVideo className="text-3xl" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-cyan text-sm uppercase tracking-widest font-bold mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Services That Drive <span className="text-gradient">Real Results</span></h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">We offer a comprehensive suite of digital marketing services designed to amplify your brand presence and maximize conversions.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => window.open(`https://wa.me/1234567890?text=Hi, I'm interested in your ${service.title} service.`, "_blank")}
              className="glass p-8 rounded-2xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5 hover:border-brand-purple/50 transition-colors duration-300"
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-gradient-brand text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg shadow-lg">
                  ★ Featured
                </div>
              )}
              
              <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-brand-cyan mb-6 group-hover:text-white group-hover:bg-brand-purple transition-all duration-300">
                {service.icon}
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold py-1 px-2 rounded bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  {service.type}
                </span>
                {service.abbr && (
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                    ({service.abbr})
                  </span>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                {service.title}
              </h4>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-brand transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
