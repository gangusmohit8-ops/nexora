import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-[#02040a] pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">NEXORA</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Built with precision. Designed to convert. Ready to scale. The #1 destination for brands looking to dominate the digital landscape.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, href: "#" },
                { icon: <SiGmail />, href: "mailto:hello@nexora.agency" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaGithub />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-transparent flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-purple hover:text-white hover:border-transparent dark:hover:bg-brand-purple dark:hover:text-white transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Case Studies', 'Pricing', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan-light transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Search Engine Optimization', 'Social Media Marketing', 'Google & Meta Ads', 'Website Development', 'Content Engineering'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-cyan-light transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="block text-gray-900 dark:text-white mb-1">Email</span>
                hello@nexora.agency
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="block text-gray-900 dark:text-white mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                <span className="block text-gray-900 dark:text-white mb-1">Location</span>
                Silicon Valley, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NEXORA Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-6 relative z-50">
             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
             <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
