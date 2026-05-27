import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/+2349011146650"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={30} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Chat with us
      </span>
      
      {/* Pulse effect rings */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-20 group-hover:opacity-100" />
    </motion.a>
  );
}
