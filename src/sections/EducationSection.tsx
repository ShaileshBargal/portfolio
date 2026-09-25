import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolioData';

const EducationSection: React.FC = () => (
  <section id="education" className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-slate-900/40 transition-colors duration-300 scroll-mt-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="03 · Education"
        title="Education"
        subtitle="My academic journey and qualifications."
      />

      <div className="relative mt-8">
        {/* Main Vertical Timeline Line */}
        <div className="absolute left-6 sm:left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent rounded-full" />

        <div className="space-y-6 sm:space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              className="relative pl-16 sm:pl-24 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-6 sm:left-[40px] top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-600 dark:border-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 z-10">
                {item.badge === 'pursuing' && (
                  <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                )}
              </div>

              {/* Connector line (horizontal to card) */}
              <div className="absolute left-6 sm:left-[40px] top-8 w-10 sm:w-16 h-px bg-slate-300 dark:bg-slate-700/50 group-hover:bg-blue-500/50 transition-colors duration-300 -z-10" />

              {/* Education Card */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                
                {/* Subtle internal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                  {/* Left Side: Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                        item.badge === 'pursuing' 
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                          : 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20'
                      }`}>
                        {item.badge === 'pursuing' ? 'Currently Pursuing' : 'Completed'}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {item.degree}
                    </h3>
                    
                    <div className="space-y-1.5">
                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 shrink-0" />
                        {item.institution}
                      </p>
                      {item.location && (
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Score Badge */}
                  <div className="shrink-0 pt-2 sm:pt-0">
                    <div className="inline-flex flex-col items-center justify-center min-w-[105px] p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-sm">
                      <Award className="w-6 h-6 text-amber-500 mb-1" />
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {item.scoreLabel}
                      </span>
                      <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
