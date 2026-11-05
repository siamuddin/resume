import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  LayoutGrid,
  List,
  X,
  FolderGit2,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { Badge } from '../components/ui/Badge';
import { useSound } from '../context/SoundContext';

export const ProjectsPage: React.FC = () => {
  const { playClick } = useSound();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Creative Dev', 'Design Systems', 'Full-Stack', 'AI & Tools'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* 1. Page Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="purple" size="md">
          Case Studies & Works
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Selected Projects
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          A curated collection of web applications, interactive audio toys, and high-density design systems.
        </p>
      </div>

      {/* 2. Filter & Search Controls Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-zinc-900/60 dark:bg-[#18181D]/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-200/80 dark:border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right: Search & View Toggle */}
          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by title or tech..."
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

            {/* Layout Toggle (Grid / List) */}
            <div className="flex items-center bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] rounded-xl p-1 shrink-0">
              <button
                onClick={() => {
                  playClick();
                  setLayoutMode('grid');
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'grid'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid view"
                aria-label="Grid layout view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  playClick();
                  setLayoutMode('list');
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'list'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="List view"
                aria-label="List layout view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* 3. Projects Gallery */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-zinc-700 dark:border-white/10 p-8 space-y-3">
            <FolderGit2 className="w-10 h-10 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-zinc-200">No matching projects found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear the filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-purple-400 hover:underline pt-2 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : layoutMode === 'grid' ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} layout="grid" />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div layout className="space-y-4">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} layout="list" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
