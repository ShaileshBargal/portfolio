import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Badge from '../components/Badge';
import { projects } from '../data/portfolioData';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-slate-900/40 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="05 · Projects"
        title="Featured Projects"
        subtitle="A selection of software engineering projects I have built, spanning full-stack and backend architectures."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {projects.map((project, idx) => {
          const hasLinks = Boolean(project.githubUrl || project.demoUrl);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              className="group flex flex-col rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden"
            >
              {/* Card top decorative bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 group-hover:from-blue-500 group-hover:to-violet-500 transition-all" />

              <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-4">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FolderGit2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  {project.internship && (
                    <Badge variant="amber" size="sm">Internship Project</Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons (only rendered when links exist) */}
                {hasLinks && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 shadow-sm"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-700/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
