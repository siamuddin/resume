import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skills, nowData } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { useSound } from '../context/SoundContext';

export const SkillsPage: React.FC = () => {
  const { playClick } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Design & Creative', 'Backend & Cloud', 'Tools & Workflows'];

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Master': return 'purple';
      case 'Advanced': return 'blue';
      case 'Proficient': return 'emerald';
      default: return 'neutral';
    }
  };

  return (
    <div className="space-y-16 max-w-5xl">
      {/* 1. Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="purple" size="md">
          Capabilities & Toolkit
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Skills & Technologies
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          A granular breakdown of the engineering languages, creative software, and architectural patterns I leverage daily.
        </p>
      </div>

      {/* 2. Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playClick();
              setSelectedCategory(cat);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-zinc-900/60 dark:bg-[#18181D]/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-200/80 dark:border-white/[0.08]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Skills Grid with Animated Visualization Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-purple-400">
                  {skill.category}
                </span>
              </div>
              <Badge variant={getStatusColor(skill.status) as 'purple' | 'blue' | 'emerald'} size="sm">
                {skill.status}
              </Badge>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {skill.description}
            </p>

            {/* Level Visualization Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>Proficiency Level</span>
                <span className="font-bold text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-800 dark:bg-zinc-800/80 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-sky-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Active Learning Roadmap */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-950/20 via-zinc-900/60 to-sky-950/20 border border-zinc-200/80 dark:border-white/[0.08] space-y-6">
        <div className="space-y-1">
          <Badge variant="blue" size="sm">
            Continuous Evolution
          </Badge>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Active Research & Learning Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Technologies and concepts currently being explored in isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {nowData.learning.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-black/40 border border-zinc-800 space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                FOCUS 0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
