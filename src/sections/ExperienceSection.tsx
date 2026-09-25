import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Layers, Building2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Badge from '../components/Badge';
import { experience } from '../data/portfolioData';

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-16 sm:py-20 relative overflow-hidden scroll-mt-20">
    {/* Ambient background accents */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 -mr-32 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <SectionHeader
        badge="04 · Experience"
        title="Work Experience"
        subtitle="Practical engineering internship experience and full-stack software development contributions."
      />

      <div className="mt-8 space-y-6">
        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            className="group relative rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600" />

            {/* Inner subtle gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative p-6 sm:p-9 space-y-6">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4.5 h-4.5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                      {item.role}
                    </h3>
                    <Badge variant="accent" size="sm">Internship</Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {item.company}
                    </span>
                    {item.project && (
                      <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Layers className="w-4 h-4 text-violet-500 shrink-0" />
                        <span className="font-medium text-slate-500 dark:text-slate-400">Project:</span>
                        <span className="font-semibold">{item.project}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start shrink-0 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-600 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Responsibilities & Contributions
                </h4>
                <ul className="space-y-3">
                  {item.description.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
