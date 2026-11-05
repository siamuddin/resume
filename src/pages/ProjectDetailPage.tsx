import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/ProjectCard';
import { useSound } from '../context/SoundContext';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { playClick } = useSound();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-zinc-200">Project Not Found</h2>
        <p className="text-sm text-zinc-400">The requested project could not be found.</p>
        <Link to="/projects">
          <Button variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  // Related projects
  const relatedProjects = projects.filter((p) =>
    project.relatedSlugs?.includes(p.slug) || (p.category === project.category && p.slug !== project.slug)
  ).slice(0, 2);

  return (
    <div className="space-y-16 max-w-5xl">
      {/* 1. Top Navigation & Header */}
      <div className="space-y-6">
        <button
          onClick={() => {
            playClick();
            navigate('/projects');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="purple" size="md">
              {project.category}
            </Badge>
            <Badge variant={project.status === 'Completed' ? 'emerald' : 'blue'} size="md" dot>
              {project.status}
            </Badge>
            <span className="text-xs font-mono text-zinc-400">Year: {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" rightIcon={<ExternalLink className="w-4 h-4" />}>
                  Live Preview
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" leftIcon={<Github className="w-4 h-4" />}>
                  Source Repository
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 2. Hero Image Banner */}
      <div className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 aspect-[16/9] shadow-2xl relative">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3. Project Metadata Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08]">
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Role</div>
          <div className="text-sm font-semibold text-zinc-200 mt-1">{project.role}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Client / Scope</div>
          <div className="text-sm font-semibold text-zinc-200 mt-1">{project.client}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Timeline</div>
          <div className="text-sm font-semibold text-zinc-200 mt-1">{project.year}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase">Status</div>
          <div className="text-sm font-semibold text-emerald-400 mt-1">{project.status}</div>
        </div>
      </div>

      {/* 4. Overview, Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-8">
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Overview</h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Problem & Solution Cards */}
          <section className="space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/40 dark:bg-[#18181D]/60 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <AlertCircle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                The Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Key Features</h2>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 dark:bg-[#18181D]/60 border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Design & Engineering Process */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Design & Execution Process</h2>
            <ol className="space-y-3">
              {project.designProcess.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 dark:bg-[#18181D]/60 border border-zinc-800">
                  <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sidebar: Technologies & Illustrative Results */}
        <div className="md:col-span-5 space-y-6">
          {/* Technologies Stack */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Technical Challenges
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400 leading-relaxed">
              {project.challenges.map((chal, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results (Marked as Illustrative) */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Performance Metrics
              </h3>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">
                Illustrative
              </span>
            </div>

            <div className="space-y-3">
              {project.results.map((res, i) => (
                <div key={i} className="p-3 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="text-xl font-extrabold text-white font-mono text-purple-400">
                    {res.metric}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Additional Gallery Shots */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Interface Visuals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.slice(1).map((imgUrl, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[16/10] bg-zinc-950">
                <img src={imgUrl} alt={`Screenshot ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-zinc-800">
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            Explore Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} layout="grid" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
