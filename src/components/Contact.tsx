import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk About <span className="text-gradient">Your Idea</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Fill out the form and our team will get back to you within 24 hours. We can't wait to hear from you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:ayoyinkaagbaje07@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">ayoyinkaagbaje07@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:+19044914980" className="text-slate-400 hover:text-purple-400 transition-colors">(904) 491-4980</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pink-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit Us</h4>
                  <p className="text-slate-400">961687 Gateway Blvd, Fernandina Beach, FL 32034, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 rounded-2xl overflow-hidden glass-card relative grayscale hover:grayscale-0 transition-all duration-500">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://maps.google.com/maps?q=30.630165,-81.472315&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" action="https://formspree.io/f/mgoqrnwr" method="POST">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-slate-300">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType"
                  defaultValue=""
                  required
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="web-design">Website Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell us a bit about what you want to build..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
