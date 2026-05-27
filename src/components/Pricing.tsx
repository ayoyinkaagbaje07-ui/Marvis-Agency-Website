import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses looking to establish an online presence.",
    price: "$700",
    features: [
      "Custom 5-Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Month Free Support",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing a robust digital platform.",
    price: "$1,600",
    features: [
      "Up to 15 Pages Custom Design",
      "Advanced Animations & Interactions",
      "CMS Integration (WordPress/Webflow)",
      "Advanced SEO Optimization",
      "Blog Setup",
      "Speed Optimization",
      "3 Months Free Support",
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    description: "A comprehensive digital solution for large enterprises.",
    price: "$2,800",
    features: [
      "Unlimited Pages & Custom Web App",
      "E-Commerce Integration",
      "Custom Databases & APIs",
      "Premium UI/UX Strategy",
      "Conversion Rate Optimization",
      "Dedicated Project Manager",
      "6 Months Premium Support",
    ],
    isPopular: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Choose the perfect plan tailored to your business needs and growth stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-8 rounded-3xl flex flex-col ${
                plan.isPopular ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-100 lg:scale-105 z-10 bg-slate-900/80' : 'border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.name !== "Premium" && <span className="text-slate-400 text-lg">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <Check size={20} className="text-blue-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all ${
                  plan.isPopular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
