import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

// Simple inline SVG social icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const HeroSection: React.FC = () => {
  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const scrollToContact = () => scrollToTarget('contact');
  const scrollToProjects = () => scrollToTarget('projects');
  const scrollDown = () => scrollToTarget('about');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden scroll-mt-20"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-600/10 rounded-full blur-[90px] sm:blur-[120px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Photo Column: Order 1 on Mobile, Order 2 on Desktop (Seen First on Phone) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center my-4 lg:my-0"
          >
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-violet-500 to-blue-400 opacity-25 group-hover:opacity-45 blur-xl transition-opacity duration-500" />
              
              {/* Outer frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700/60 shadow-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={profileImg}
                  alt="Shailesh Bargal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-full px-4 sm:px-5 py-2 shadow-xl whitespace-nowrap"
              >
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Open to Opportunities
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text Column: Order 2 on Mobile, Order 1 on Desktop ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7"
          >
            {/* Name & Greeting */}
            <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-base font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none">
                <span className="text-slate-900 dark:text-slate-100">
                  Shailesh
                </span>{' '}
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500 dark:from-blue-400 dark:via-violet-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Bargal
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {personalInfo.title}
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-700/20 active:scale-95 transition-all text-xs sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all text-xs sm:text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
              >
                Contact Me
              </button>
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all text-xs sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  Download Resume
                </a>
              )}
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all hover:-translate-y-0.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send email"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all hover:-translate-y-0.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                >
                  <ExternalLink className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll down"
        className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 p-3 rounded-full text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
