import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

import vercelImage from '../assets/images/vercel_homepage_1779917697233.png';
import linearImage from '../assets/images/linear_homepage_1779917717053.png';
import nikeImage from '../assets/images/ecommerce_homepage_1_1779918319625.png';
import hermanMillerImage from '../assets/images/ecommerce_homepage_2_1779918339283.png';
import compassImage from '../assets/images/real_estate_homepage_1779918566155.png';
import portfolioImage from '../assets/images/portfolio_homepage_1779918761712.png';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
};

const categories = ['All', 'Corporate', 'E-Commerce', 'Real Estate', 'Portfolio'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Vercel',
    category: 'Corporate',
    image: vercelImage,
    description: 'The platform for frontend developers, providing speed and reliability.',
    link: 'https://vercel.com',
  },
  {
    id: 2,
    title: 'Nike',
    category: 'E-Commerce',
    image: nikeImage,
    description: 'A cutting-edge sports and sneaker e-commerce experience.',
    link: 'https://nike.com',
  },
  {
    id: 3,
    title: 'Compass',
    category: 'Real Estate',
    image: compassImage,
    description: 'A modern real estate platform that pairs top talent with technology.',
    link: 'https://compass.com',
  },
  {
    id: 4,
    title: 'Dennis Snellenberg',
    category: 'Portfolio',
    image: portfolioImage,
    description: 'Award-winning freelance designer and creative developer portfolio.',
    link: 'https://dennissnellenberg.com',
  },
  {
    id: 5,
    title: 'Linear',
    category: 'Corporate',
    image: linearImage,
    description: 'A purpose-built issue tracking tool for modern software teams.',
    link: 'https://linear.app',
  },
  {
    id: 6,
    title: 'Herman Miller',
    category: 'E-Commerce',
    image: hermanMillerImage,
    description: 'Sleek storefront for high-end luxury furniture and ergonomics.',
    link: 'https://store.hermanmiller.com',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              Explore our latest projects showcasing our expertise in design and development.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-blue-400 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                    {project.description}
                  </p>
                  <a href={project.link || '#'} target={project.link ? "_blank" : undefined} rel={project.link ? "noopener noreferrer" : undefined} className="inline-flex items-center text-white hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 delay-200">
                    <span className="font-medium mr-2">{project.link ? 'Visit Website' : 'View Case Study'}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
