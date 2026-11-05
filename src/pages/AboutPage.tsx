import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Code,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo, experienceTimeline, nowData } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSound } from '../context/SoundContext';

export const AboutPage: React.FC = () => {
  const { playClick } = useSound();

  return (
    <div className="space-y-20 max-w-5xl">
      {/* 1. Header & Profile Banner */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="purple" size="md">
            Biography & Background
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Obsessed with the craft of tactile software.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A creative developer and digital designer building digital experiences that feel different from Dhaka, Bangladesh.
          </p>
        </div>

        {/* Profile Card / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          {/* Profile Image & Avatar Card */}
          <div className="md:col-span-5 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 mb-6">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Siam portrait placeholder"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181D] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-zinc-300 border border-white/10">
                Siam • Digital Creative
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Dhaka, Bangladesh
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Primary Stack: TypeScript, React, Tailwind, Framer Motion, WebGL
              </div>
            </div>
          </div>

          {/* Quick Facts Bento Column */}
          <div className="md:col-span-7 flex flex-col justify-between gap-4">
            <div className="rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                The Story in Short
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {personalInfo.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Micro Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {personalInfo.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="p-3.5 rounded-2xl bg-zinc-900/50 dark:bg-[#18181D]/60 border border-zinc-200/80 dark:border-white/[0.08]"
                >
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1 truncate">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Personal Philosophy (Notion/Linear modular cards) */}
      <section className="space-y-6">
        <div className="space-y-1">
          <Badge variant="blue" size="sm">
            Core Methodology
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Design & Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalInfo.philosophy.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-2 hover:border-purple-500/30 transition-colors"
            >
              <div className="text-xs font-mono text-purple-400 font-bold">
                PRINCIPLE 0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Career Timeline Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Badge variant="emerald" size="sm">
              Work History
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Selected Career Stops
            </h2>
          </div>
          <Link to="/experience" onClick={playClick}>
            <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              Full Experience
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {experienceTimeline.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-zinc-900 dark:text-white">
                    {item.role}
                  </span>
                  <span className="text-xs text-purple-400 font-mono">@ {item.company}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 shrink-0">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Currently Learning & Daily Routine */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Code className="w-5 h-5" />
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              What I&apos;m Currently Learning
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            {nowData.learning.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4">
          <div className="flex items-center gap-2 text-sky-400">
            <Compass className="w-5 h-5" />
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Creative Rituals & Setup
            </h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            <p>
              I work in 90-minute ultradian rhythm sprints using customized mechanical keyboards (linear switches, custom keycaps) paired with ambient electronica.
            </p>
            <p>
              Dhaka&apos;s quiet late nights provide the peaceful headspace for deep shader experiments and complex typography system architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
