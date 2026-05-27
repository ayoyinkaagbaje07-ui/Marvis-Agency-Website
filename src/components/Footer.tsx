import { Twitter, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="font-heading text-3xl font-bold tracking-tighter text-white block mb-6">
              Marvis<span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-400 mb-6">
              Building premium digital experiences for tomorrow's leading brands. Let's create something extraordinary together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com/agbaje.marvis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-800 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Design', 'Web Development', 'E-Commerce', 'UI/UX Design', 'SEO Optimization'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to get the latest design news, articles, and resources.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 w-full min-w-0"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-3 rounded-r-xl font-medium hover:bg-blue-700 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Marvis Digitals. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="absolute right-4 md:right-8 -top-6 w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-slate-200 hover:-translate-y-2 transition-all shadow-xl shadow-white/10"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
}
