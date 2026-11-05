import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FolderGit2,
  BookOpen,
  User,
  Wrench,
  Briefcase,
  Sparkles,
  Compass,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Copy,
  ExternalLink,
  CornerDownLeft,
  X,
} from 'lucide-react';
import { projects, articles, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Navigation' | 'Projects' | 'Journal' | 'Preferences' | 'Actions';
  icon: React.ReactNode;
  onSelect: () => void;
  keywords?: string[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound, playClick, playSuccess } = useSound();
  const [copied, setCopied] = useState(false);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global shortcut Cmd/Ctrl + K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playClick();
          // parent controls open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playClick]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    playSuccess();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navItems: PaletteItem[] = [
    {
      id: 'nav-home',
      title: 'Home',
      subtitle: 'Return to start overview & highlights',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/'); onClose(); },
      keywords: ['home', 'root', 'landing', 'main'],
    },
    {
      id: 'nav-about',
      title: 'About Siam',
      subtitle: 'Biography, design philosophy & story',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/about'); onClose(); },
      keywords: ['about', 'bio', 'story', 'philosophy', 'background'],
    },
    {
      id: 'nav-projects',
      title: 'Projects',
      subtitle: 'Browse all case studies & creative work',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/projects'); onClose(); },
      keywords: ['projects', 'work', 'case studies', 'portfolio', 'apps'],
    },
    {
      id: 'nav-skills',
      title: 'Skills & Stack',
      subtitle: 'Technical capabilities & design proficiency',
      category: 'Navigation',
      icon: <Wrench className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/skills'); onClose(); },
      keywords: ['skills', 'stack', 'tech', 'react', 'typescript', 'figma'],
    },
    {
      id: 'nav-experience',
      title: 'Experience & Career',
      subtitle: 'Professional timeline, roles & background',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/experience'); onClose(); },
      keywords: ['experience', 'career', 'resume', 'cv', 'jobs', 'roles'],
    },
    {
      id: 'nav-journal',
      title: 'Journal & Essays',
      subtitle: 'Deep dives on engineering and design',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/journal'); onClose(); },
      keywords: ['journal', 'blog', 'articles', 'writing', 'thoughts'],
    },
    {
      id: 'nav-playground',
      title: 'Creative Playground',
      subtitle: 'Interactive UI toys, particles, sound & canvas',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/playground'); onClose(); },
      keywords: ['playground', 'experiments', 'canvas', 'synth', 'terminal', 'toys'],
    },
    {
      id: 'nav-now',
      title: 'Now (/now)',
      subtitle: 'Current focus, reading list & music',
      category: 'Navigation',
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/now'); onClose(); },
      keywords: ['now', 'status', 'currently', 'reading', 'listening'],
    },
    {
      id: 'nav-contact',
      title: 'Contact',
      subtitle: 'Send a message or inquiry',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      onSelect: () => { navigate('/contact'); onClose(); },
      keywords: ['contact', 'email', 'message', 'hire', 'reach'],
    },
  ];

  const projectItems: PaletteItem[] = projects.map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    subtitle: `${p.category} — ${p.tagline}`,
    category: 'Projects',
    icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
    onSelect: () => { navigate(`/projects/${p.slug}`); onClose(); },
    keywords: [p.title.toLowerCase(), p.category.toLowerCase(), ...p.technologies.map(t => t.toLowerCase())],
  }));

  const articleItems: PaletteItem[] = articles.map((a) => ({
    id: `article-${a.slug}`,
    title: a.title,
    subtitle: `${a.category} — ${a.readingTime}`,
    category: 'Journal',
    icon: <BookOpen className="w-4 h-4 text-amber-400" />,
    onSelect: () => { navigate(`/journal/${a.slug}`); onClose(); },
    keywords: [a.title.toLowerCase(), a.category.toLowerCase(), ...a.tags.map(t => t.toLowerCase())],
  }));

  const preferenceItems: PaletteItem[] = [
    {
      id: 'pref-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: `Currently using ${theme} theme`,
      category: 'Preferences',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />,
      onSelect: () => { toggleTheme(); onClose(); },
      keywords: ['theme', 'dark', 'light', 'mode', 'color'],
    },
    {
      id: 'pref-sound',
      title: soundEnabled ? 'Mute Tactile Audio Clicks' : 'Enable Tactile Audio Clicks',
      subtitle: soundEnabled ? 'Audio cues are active' : 'Audio cues are currently muted',
      category: 'Preferences',
      icon: soundEnabled ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />,
      onSelect: () => { toggleSound(); onClose(); },
      keywords: ['sound', 'audio', 'click', 'haptic', 'mute', 'volume'],
    },
  ];

  const actionItems: PaletteItem[] = [
    {
      id: 'action-copy-email',
      title: copied ? 'Email Copied!' : `Copy Email (${personalInfo.email})`,
      subtitle: 'Copy address to clipboard',
      category: 'Actions',
      icon: <Copy className="w-4 h-4 text-purple-400" />,
      onSelect: handleCopyEmail,
      keywords: ['email', 'copy', 'clipboard', 'address'],
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile',
      subtitle: 'Visit repositories and contributions',
      category: 'Actions',
      icon: <ExternalLink className="w-4 h-4 text-zinc-400" />,
      onSelect: () => { window.open(personalInfo.socials.find(s => s.platform.includes('GitHub'))?.url || 'https://github.com', '_blank'); onClose(); },
      keywords: ['github', 'code', 'repo', 'git'],
    },
  ];

  const allItems: PaletteItem[] = [
    ...navItems,
    ...projectItems,
    ...articleItems,
    ...preferenceItems,
    ...actionItems,
  ];

  const filteredItems = allItems.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(q);
    const subtitleMatch = item.subtitle?.toLowerCase().includes(q);
    const keywordMatch = item.keywords?.some((k) => k.includes(q));
    const catMatch = item.category.toLowerCase().includes(q);
    return titleMatch || subtitleMatch || keywordMatch || catMatch;
  });

  // Handle keyboard navigation inside the list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        playClick();
        filteredItems[selectedIndex].onSelect();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="relative w-full max-w-xl rounded-2xl bg-zinc-900/95 dark:bg-[#18181D]/95 backdrop-blur-2xl border border-zinc-700/60 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Top Search Input */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800 dark:border-white/10">
            <Search className="w-5 h-5 text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search pages, projects, essays, or type an action..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800/80 border border-zinc-700/60 rounded">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div ref={listRef} className="overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-sm text-zinc-400">
                No matching results found for &ldquo;<span className="text-zinc-200">{query}</span>&rdquo;
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      playClick();
                      item.onSelect();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors group cursor-pointer ${
                      isSelected
                        ? 'bg-purple-600/20 text-white border border-purple-500/30'
                        : 'text-zinc-300 hover:bg-zinc-800/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-purple-500/30 text-purple-300' : 'bg-zinc-800/80 text-zinc-400'}`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate flex items-center gap-2">
                          <span>{item.title}</span>
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono">
                            {item.category}
                          </span>
                        </div>
                        {item.subtitle && (
                          <div className="text-xs text-zinc-400 truncate mt-0.5">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>
                    {isSelected && (
                      <CornerDownLeft className="w-4 h-4 text-purple-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 bg-zinc-950/60 border-t border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded font-mono">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded font-mono">↓</kbd> to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded font-mono">↵</kbd> to select
              </span>
            </div>
            <span className="text-zinc-400">SIAM Quick Actions</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
