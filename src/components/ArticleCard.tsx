import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { Article } from '../types';
import { Badge } from './ui/Badge';
import { useSound } from '../context/SoundContext';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const { playClick } = useSound();

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="group relative rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 overflow-hidden shadow-sm transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[320px] overflow-hidden bg-zinc-950">
            <img
              src={article.coverImage}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#18181D]/90 opacity-60" />
            <div className="absolute top-4 left-4">
              <Badge variant="purple" size="sm">
                Featured Essay
              </Badge>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {article.publishDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {article.readingTime}
                </span>
                <span>•</span>
                <span className="text-purple-400 font-semibold">{article.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-400 transition-colors">
                <Link to={`/journal/${article.slug}`} onClick={playClick}>
                  {article.title}
                </Link>
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 dark:bg-white/[0.06] text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/journal/${article.slug}`}
                onClick={playClick}
                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 group/link shrink-0"
              >
                Read Essay <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard card
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 p-5 sm:p-6 transition-all duration-300 shadow-sm justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="text-purple-400 font-semibold">{article.category}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readingTime}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-400 transition-colors">
          <Link to={`/journal/${article.slug}`} onClick={playClick}>
            {article.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-white/[0.06] flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-400">
          {article.publishDate}
        </span>

        <Link
          to={`/journal/${article.slug}`}
          onClick={playClick}
          className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 group/link"
        >
          Read <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};
