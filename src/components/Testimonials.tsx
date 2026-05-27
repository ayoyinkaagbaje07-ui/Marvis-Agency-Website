import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Marvis Digitals completely transformed our online presence. Their team understood our vision instantly and delivered a website that exceeded all expectations. Our conversion rates have doubled since the launch.",
    author: "Sarah Jenkins",
    role: "CEO, NexaTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    content: "Working with them was a breeze from start to finish. They are incredibly responsive, highly skilled, and have an exceptional eye for design. The e-commerce platform they built for us is fast and flawless.",
    author: "David Chen",
    role: "Founder, Luxe Fashion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    content: "We hired Marvis Digitals to completely rebrand and rebuild our corporate site. The result was a stunning, modern, and lightning-fast website. They are true professionals and masters of their craft.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Skyline",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    content: "Their attention to detail is unmatched. The micro-interactions and smooth animations they added to our landing page made our product feel premium. Highly recommend them for any serious brand.",
    author: "Marcus Thorne",
    role: "Product Lead, Innovate Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 5,
    content: "They delivered the project ahead of schedule and the code quality was superb. Our SEO rankings shot up within weeks of the new site going live. A stellar digital agency.",
    author: "Rachel Green",
    role: "VP of Marketing, EcoStore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 6,
    content: "From the initial consultation to the final hand-off, the team at Marvis Digitals was professional and visionary. They took our ideas and built something better than we imagined.",
    author: "Liam Zhao",
    role: "Founder, Zenith Capital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <p className="text-lg text-slate-400">Don't just take our word for it.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-blue-500/20 -translate-x-4 -translate-y-4 md:-translate-x-12 md:-translate-y-8 z-0">
            <Quote size={80} />
          </div>
          
          <div className="glass-card p-8 md:p-12 relative z-10 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center text-center"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-slate-200 mb-10 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center justify-center space-x-4 mt-auto">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white">{testimonials[currentIndex].author}</div>
                    <div className="text-sm text-slate-400">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-6 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="ml-[-2px]" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-blue-500' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="mr-[-2px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
