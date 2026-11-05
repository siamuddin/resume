import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, X } from 'lucide-react';
import { articles } from '../data/portfolioData';
import { ArticleCard } from '../components/ArticleCard';
import { Badge } from '../components/ui/Badge';
import { useSound } from '../context/SoundContext';

export const JournalPage: React.FC = () => {
  const { playClick } = useSound();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design Philosophy', 'Product Design', 'Engineering', 'Typography', 'Design Craft'];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCat =
        selectedCategory === 'All' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="purple" size="md">
          Writing & Essays
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Journal & Thoughts
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Reflections on digital aesthetics, spring physics, typography hierarchy, and building software that feels alive.
        </p>
      </div>

      {/* 2. Featured Article Hero (if no search active) */}
      {!searchQuery && selectedCategory === 'All' && featuredArticle && (
        <section className="space-y-4">
          <ArticleCard article={featuredArticle} featured={true} />
        </section>
      )}

      {/* 3. Filter & Search Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-zinc-900/60 dark:bg-[#18181D]/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-200/80 dark:border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search essays by title or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] text-xs text-zinc-200 placeholder-zinc-500 outline-none focus:border-purple-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Showing {filteredArticles.length} of {articles.length} essays
        </div>
      </div>

      {/* 4. Articles Grid */}
      <AnimatePresence mode="popLayout">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-zinc-700 dark:border-white/10 p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-zinc-200">No matching essays found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              No essays match &ldquo;{searchQuery}&rdquo;. Try another search term.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
