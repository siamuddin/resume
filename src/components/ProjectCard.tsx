import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { Badge } from './ui/Badge';
import { useSound } from '../context/SoundContext';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'list';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, layout = 'grid' }) => {
  const { playClick } = useSound();

  const getStatusVariant = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return 'emerald';
      case 'In Development': return 'purple';
      case 'Concept': return 'blue';
      default: return 'neutral';
    }
  };

  if (layout === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="group relative rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/30 p-5 sm:p-6 transition-all duration-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex-1 space-y-2 min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant={getStatusVariant(project.status)} size="sm" dot>
              {project.status}
            </Badge>
            <span className="text-xs font-mono text-zinc-400">{project.year}</span>
            <span className="text-xs font-mono text-zinc-400">•</span>
            <span className="text-xs text-purple-400 font-medium">{project.category}</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-400 transition-colors">
            <Link to={`/projects/${project.slug}`} onClick={playClick} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 dark:bg-white/[0.06] text-zinc-400 border border-zinc-700/40 dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
          <Link
            to={`/projects/${project.slug}`}
            onClick={playClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 shadow-sm transition-colors"
          >
            Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Grid layout
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 hover:shadow-card-hover overflow-hidden transition-all duration-300"
    >
      {/* Thumbnail image with subtle gradient sheen */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181D] via-transparent to-transparent opacity-80" />

        {/* Floating status tag */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant={getStatusVariant(project.status)} size="sm" dot>
            {project.status}
          </Badge>
          {project.featured && (
            <Badge variant="purple" size="sm">
              <Sparkles className="w-3 h-3 text-purple-300" /> Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
            {project.category}
          </div>

          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-400 transition-colors">
            <Link to={`/projects/${project.slug}`} onClick={playClick} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech tags */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 dark:bg-white/[0.06] text-zinc-400 border border-zinc-700/40 dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-zinc-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60 dark:border-white/[0.06]">
            <Link
              to={`/projects/${project.slug}`}
              onClick={playClick}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 group/link"
            >
              Case Study <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 dark:hover:bg-white/10 transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 dark:hover:bg-white/10 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
