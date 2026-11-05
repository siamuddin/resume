import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
} from 'lucide-react';
import { personalInfo, projects, articles, skills } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ArticleCard } from '../components/ArticleCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSound } from '../context/SoundContext';

export const HomePage: React.FC = () => {
  const { playClick } = useSound();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredArticles = articles.slice(0, 2);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12">
        <div className="space-y-6 max-w-4xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 dark:bg-zinc-800/60 border border-zinc-700/60 dark:border-white/10 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300">
              Available for selected 2027 design & engineering collaborations
            </span>
          </motion.div>

          {/* Name & Title Heading (Apple-scale typography) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>Creative Technologist</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
              Building digital experiences that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400">
                feel different.
              </span>
            </h1>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
          >
            I&apos;m <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{personalInfo.name}</span>, a creative developer and digital designer bridging the gap between engineering rigor and visceral aesthetic beauty. Synthesizing the calm order of Notion, the tactile precision of Apple, and the velocity of Linear.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link to="/projects" onClick={playClick}>
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Projects
              </Button>
            </Link>

            <Link to="/contact" onClick={playClick}>
              <Button variant="secondary" size="lg" leftIcon={<Mail className="w-4 h-4" />}>
                Get in Touch
              </Button>
            </Link>

            <Link to="/playground" onClick={playClick}>
              <Button variant="ghost" size="lg" leftIcon={<Sparkles className="w-4 h-4 text-purple-400" />}>
                Playground
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 2. STATS OVERVIEW GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-zinc-900/50 dark:bg-[#18181D]/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-md"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight text-purple-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                {stat.label}
              </div>
              {stat.helper && (
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {stat.helper}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. CURRENT ACTIVITY SECTION */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/20 via-zinc-900/70 to-sky-950/20 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                Live Studio Radar
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Currently Building: {personalInfo.currentActivity.building}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Exploring: {personalInfo.currentActivity.exploring} • Listening to: {personalInfo.currentActivity.listening}
            </p>
          </div>

          <Link to="/now" onClick={playClick} className="shrink-0">
            <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              View /now Page
            </Button>
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Crafted with intention & velocity.
            </h2>
          </div>

          <Link
            to="/projects"
            onClick={playClick}
            className="text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 group"
          >
            <span>View All 7 Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} layout="grid" />
          ))}
        </div>
      </section>

      {/* 5. DESIGN PHILOSOPHY / CORE PILLARS */}
      <section className="space-y-8">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
            Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How I think about digital products.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.philosophy.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono text-xs font-bold border border-purple-500/20">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SKILLS PREVIEW CHIPS */}
      <section className="rounded-3xl p-6 sm:p-8 bg-zinc-900/60 dark:bg-[#18181D]/60 border border-zinc-200/80 dark:border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Technical & Creative Stack
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
              Tools I wield daily to shape products.
            </h3>
          </div>
          <Link to="/skills" onClick={playClick}>
            <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              View Comprehensive Stack
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-3 py-1.5 rounded-xl bg-zinc-800/80 dark:bg-white/[0.05] border border-zinc-700/50 dark:border-white/[0.08] text-xs font-medium text-zinc-300 flex items-center gap-2 hover:border-purple-500/40 transition-colors"
            >
              <span>{skill.name}</span>
              <span className="text-[10px] font-mono text-purple-400 font-bold">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. RECENT JOURNAL ARTICLES */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Writings & Thoughts
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Essays on software craft.
            </h2>
          </div>

          <Link
            to="/journal"
            onClick={playClick}
            className="text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 group"
          >
            <span>Read All Essays</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 8. CONTACT CTA BANNER */}
      <section className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-purple-900/30 via-zinc-900 to-[#18181D] border border-purple-500/30 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <Badge variant="purple" size="md">
            Let&apos;s Build Something Unforgettable
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have an ambitious project in mind?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            I am currently considering select engineering contracts, design system consultations, and creative explorations for forward-thinking teams.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link to="/contact" onClick={playClick}>
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start a Conversation
              </Button>
            </Link>

            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="secondary" size="lg" leftIcon={<Mail className="w-4 h-4" />}>
                {personalInfo.email}
              </Button>
            </a>
          </div>
        </div>

        {/* Decorative corner light */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      </section>
    </div>
  );
};
