import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="text-center mb-8 sm:mb-10"
  >
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
      {badge}
    </span>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2.5 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="mt-4 w-12 h-0.5 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
  </motion.div>
);

export default SectionHeader;
