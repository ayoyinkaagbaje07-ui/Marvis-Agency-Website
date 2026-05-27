import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';
import ceoImage from '../assets/images/ceo.jpg';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-white/10 glass-card p-2 bg-white/5">
              <img 
                src={ceoImage} 
                alt="Marvis Agbaje - CEO & Founder" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-pink-400 mb-6">
              <span>Meet the Visionary</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Marvis Agbaje
            </h2>
            <h3 className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
              CEO & Founder, <span className="text-gradient">Marvis Digitals</span>
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg mb-10">
              <p>
                With an extensive background in software engineering, digital design, and agency leadership, Marvis Agbaje has built a reputation for transforming complex business challenges into elegant, high-performing digital solutions.
              </p>
              <p>
                He has led cross-functional teams in developing enterprise-grade applications, award-winning marketing sites, and robust e-commerce platforms for clients aiming to dominate their markets.
              </p>
              <p>
                Marvis founded Marvis Digitals with a singular mission: to bridge the gap between stunning aesthetic design and powerful technical performance, helping forward-thinking brands thrive in the modern digital landscape.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/agbaje.marvis" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
