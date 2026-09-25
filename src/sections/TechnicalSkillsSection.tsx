import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cpu, Wrench, Globe, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  Globe,
};

const TechnicalSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-0 -mr-24 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="06 · Skills"
          title="Technical Skills"
          subtitle="A comprehensive breakdown of programming languages, frameworks, databases, and engineering tools."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  {category.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
