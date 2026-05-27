import { motion } from 'motion/react';
import { Code2, Monitor, ShoppingCart, PenTool, Layout, Search, Megaphone, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={24} />,
    title: 'Website Design',
    description: 'Custom, stunning web designs tailored to reflect your brand identity and captivate your audience.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Website Development',
    description: 'Robust, fast, and scalable front-end and back-end development using cutting-edge technologies.',
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'E-Commerce Development',
    description: 'High-converting online stores built on Shopify, WooCommerce, or custom platforms.',
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Design',
    description: 'Intuitive, user-centric interfaces that deliver seamless experiences across all devices.',
  },
  {
    icon: <Layout size={24} />,
    title: 'Landing Pages',
    description: 'Optimized landing pages designed to drive action and maximize your marketing ROI.',
  },
  {
    icon: <Search size={24} />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your visibility and rank higher on search engines.',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Branding',
    description: 'Memorable brand identities, including logos, typography, and visual guidelines.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Website Maintenance',
    description: 'Reliable ongoing support to keep your digital assets secure, up-to-date, and running smoothly.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            We provide full-service digital solutions designed to elevate your brand and drive measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-8 hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
                <a href="#contact" className="text-blue-400 font-medium inline-flex items-center hover:text-blue-300 transition-colors mt-auto">
                  Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
