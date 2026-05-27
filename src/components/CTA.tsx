import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-3xl text-center shadow-2xl shadow-blue-900/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Build Your <br />
            <span className="text-gradient">Dream Website?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Let partners with you to create a digital experience that elevates your brand and accelerates your growth. Let's make something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
            <a href="mailto:ayoyinkaagbaje07@gmail.com" className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center">
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
