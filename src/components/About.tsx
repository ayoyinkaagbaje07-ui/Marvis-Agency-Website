import { motion } from 'motion/react';
import { Target, Users, Zap, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '45+', label: 'Happy Clients' },
    { value: '99%', label: 'Client Retention' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Brands for the <span className="text-gradient">Digital Era</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6">
              At Marvis Digitals, we are more than just an agency; we are your strategic digital partners. We blend stunning aesthetics with robust engineering to create websites that don't just look good, but perform exceptionally.
            </p>
            <p className="text-slate-400 text-lg mb-8">
              Our mission is to help ambitious businesses establish a powerful online presence, drive higher engagement, and achieve sustainable growth through innovative digital design.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Pixel-Perfect Precision</h4>
                  <p className="text-slate-400">Every element is meticulously crafted for optimal user experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Blazing Fast Performance</h4>
                  <p className="text-slate-400">Optimized architectures that load instantly and scale effortlessly.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold inline-block hover:bg-slate-200 transition-colors">
              More About Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="glass-card p-6 h-48 flex flex-col justify-center items-center text-center">
                <Users size={32} className="text-blue-400 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">{stats[0].value}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">{stats[0].label}</p>
              </div>
              <div className="glass-card p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 h-56 flex flex-col justify-center items-center text-center">
                <Award size={32} className="text-purple-400 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">{stats[1].value}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">{stats[1].label}</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="glass-card p-6 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 h-56 flex flex-col justify-center items-center text-center">
                <Target size={32} className="text-pink-400 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">{stats[2].value}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">{stats[2].label}</p>
              </div>
              <div className="glass-card p-6 h-48 flex flex-col justify-center items-center text-center">
                <Zap size={32} className="text-blue-400 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">{stats[3].value}</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">{stats[3].label}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
