import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Github,
  Menu,
  Terminal,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';

interface TopbarProps {
  onOpenCommandPalette: () => void;
  onOpenMobileMenu: () => void;
  isSidebarCollapsed: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({
  onOpenCommandPalette,
  onOpenMobileMenu,
  isSidebarCollapsed,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound, playClick } = useSound();

  return (
    <header
      className={`h-16 fixed top-0 right-0 z-30 transition-all duration-300 ease-in-out border-b bg-[#09090B]/80 dark:bg-[#09090B]/80 backdrop-blur-xl border-zinc-200/80 dark:border-white/[0.08] flex items-center justify-between px-4 sm:px-8 ${
        isSidebarCollapsed ? 'lg:left-[76px]' : 'lg:left-[260px]'
      } left-0`}
    >
      {/* Left: Mobile Menu & Breadcrumb / Quick Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            playClick();
            onOpenMobileMenu();
          }}
          className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 dark:hover:bg-white/10"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-zinc-500 dark:text-zinc-400">siam.portfolio</span>
          <span className="text-zinc-600 dark:text-zinc-700">/</span>
          <span className="text-zinc-300 dark:text-zinc-300 font-semibold">interactive</span>
        </div>
      </div>

      {/* Center: Command Palette Trigger */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => {
          playClick();
          onOpenCommandPalette();
        }}
        className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-zinc-800/40 dark:bg-zinc-900/60 hover:bg-zinc-800/80 dark:hover:bg-zinc-800/80 border border-zinc-700/50 dark:border-white/[0.08] text-xs text-zinc-400 transition-all cursor-pointer group shadow-sm max-w-xs sm:max-w-sm w-full mx-3 sm:mx-4"
      >
        <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-400 transition-colors shrink-0" />
        <span className="truncate flex-1 text-left">Search anything or run action...</span>
        <div className="flex items-center gap-1 shrink-0 font-mono text-[10px] text-zinc-400 bg-zinc-800 dark:bg-white/10 px-1.5 py-0.5 rounded border border-zinc-700 dark:border-white/10">
          <span>⌘</span>
          <span>K</span>
        </div>
      </motion.button>

      {/* Right Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Tactile Audio Toggle */}
        <button
          onClick={toggleSound}
          className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 dark:hover:bg-white/10 transition-colors relative"
          title={soundEnabled ? 'Mute interface clicks' : 'Enable tactile audio clicks'}
          aria-label="Toggle interface sound"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-zinc-400" />
          )}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            playClick();
            toggleTheme();
          }}
          className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 dark:hover:bg-white/10 transition-colors"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-purple-400" />
          )}
        </button>

        {/* GitHub Shortcut */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/60 dark:border-white/10 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};
