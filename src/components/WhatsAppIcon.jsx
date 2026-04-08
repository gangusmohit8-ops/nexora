import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppIcon = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Placeholder phone number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute -top-10 right-0 bg-white text-black text-xs font-bold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat with us!
        <span className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppIcon;
