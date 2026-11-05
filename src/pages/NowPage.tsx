import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  BookOpen,
  Headphones,
  Target,
  Sparkles,
} from 'lucide-react';
import { nowData } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';

export const NowPage: React.FC = () => {

  return (
    <div className="space-y-16 max-w-4xl">
      {/* 1. Header */}
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-2">
          <Badge variant="purple" size="md">
            /now Page
          </Badge>
          <span className="text-xs font-mono text-zinc-400">
            Inspired by Derek Sivers
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          What I&apos;m Doing Now
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
          <span className="flex items-center gap-1.5 text-purple-400">
            <MapPin className="w-3.5 h-3.5" />
            {nowData.currentLocation}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Last updated: {nowData.updatedAt}
          </span>
        </div>
      </div>

      {/* 2. Primary Focus */}
      <section className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase font-mono tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Current Creative & Engineering Focus</span>
        </div>

        <ul className="space-y-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-200 leading-relaxed">
          {nowData.focus.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Reading List */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>On the Bookshelf</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {nowData.reading.map((book) => (
            <div
              key={book.title}
              className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <Badge
                  variant={book.status === 'Currently Reading' ? 'purple' : book.status === 'Finished' ? 'emerald' : 'neutral'}
                  size="sm"
                  dot={book.status === 'Currently Reading'}
                >
                  {book.status}
                </Badge>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white pt-1">
                  {book.title}
                </h3>
                <div className="text-xs text-zinc-400">by {book.author}</div>
              </div>

              {book.note && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic pt-2 border-t border-zinc-800">
                  &ldquo;{book.note}&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Heavy Rotation Music */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold">
          <Headphones className="w-4 h-4" />
          <span>Heavy Rotation Sounds</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {nowData.music.map((item) => (
            <div
              key={item.track}
              className="p-4 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] flex items-center gap-4 group hover:border-sky-500/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-950 shrink-0">
                <img src={item.cover} alt={item.track} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white truncate">
                  {item.track}
                </h4>
                <div className="text-xs text-purple-400 font-medium truncate">
                  {item.artist}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {item.vibes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Active Goals & Milestones */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold">
          <Target className="w-4 h-4" />
          <span>Current Goals</span>
        </div>

        <div className="space-y-4">
          {nowData.goals.map((goal) => (
            <div
              key={goal.title}
              className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                  {goal.title}
                </h3>
                <span className="text-xs font-mono text-purple-400">Target: {goal.target}</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>Progress</span>
                  <span className="font-bold text-purple-400">{goal.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-emerald-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
