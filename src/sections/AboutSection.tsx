import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Code, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { aboutParagraphs, aboutHighlights } from '../data/portfolioData';

// Use more relevant icons for the new highlights
const icons = [Server, Layers, Code, Zap];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection: React.FC = () => (
  <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
    {/* Background accents */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <SectionHeader
        badge="02 · About"
        title="About Me"
        subtitle="A brief introduction to my background, what I am currently learning, and my goals as a developer."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
        
        {/* ── Left Column: Story ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 space-y-6"
        >
          {aboutParagraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className={
                i === 0
                  ? "text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed"
                  : "text-base text-slate-600 dark:text-slate-400 leading-relaxed"
              }
            >
              {p}
            </motion.p>
          ))}
          
          <motion.div variants={itemVariants} className="pt-4">
             <div className="inline-block h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
          </motion.div>
        </motion.div>

        {/* ── Right Column: Highlights Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
        >
          {aboutHighlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="relative group p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;
