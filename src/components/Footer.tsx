import React from 'react';
import { motion } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Mail, Code2 } from 'lucide-react';

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

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/^#/, '');
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      if (window.location.hash !== href) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-4.5 h-4.5" />
              </span>
              <h3 className="text-xl font-extrabold text-slate-100 tracking-tight">
                Shailesh Bargal
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Software Engineer & Java Full Stack Developer passionate about building reliable backend systems and modern web applications.
            </p>
            <p className="text-xs text-slate-500">
              📍 Pune, Maharashtra, India
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleFooterNav(e, link.href)}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-1 flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:scale-105 transition-all shadow-sm"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:scale-105 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/40 hover:scale-105 transition-all shadow-sm"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Shailesh Bargal. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 shadow-xl shadow-slate-950/50 transition-all hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
