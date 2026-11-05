import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  FolderGit2,
  Wrench,
  Briefcase,
  BookOpen,
  Sparkles,
  Compass,
  Mail,
  ChevronLeft,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Figma,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const location = useLocation();
  const { playClick } = useSound();

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderGit2, badge: '7' },
    { to: '/skills', label: 'Skills & Stack', icon: Wrench },
    { to: '/experience', label: 'Experience', icon: Briefcase },
    { to: '/journal', label: 'Journal', icon: BookOpen, badge: '5' },
    { to: '/playground', label: 'Playground', icon: Sparkles, badge: 'New' },
    { to: '/now', label: 'Now', icon: Compass },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return Github;
      case 'Twitter / X': return Twitter;
      case 'LinkedIn': return Linkedin;
      case 'Dribbble': return Dribbble;
      case 'Figma': return Figma;
      default: return ExternalLink;
    }
  };

  return (
    <aside
      className={`hidden lg:flex flex-col fixed top-0 bottom-0 left-0 z-40 transition-all duration-300 ease-in-out border-r bg-[#09090B]/95 dark:bg-[#09090B]/95 backdrop-blur-xl border-zinc-200/80 dark:border-white/[0.08] ${
        isCollapsed ? 'w-[76px]' : 'w-[260px]'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200/60 dark:border-white/[0.06]">
        <NavLink
          to="/"
          onClick={playClick}
          className="flex items-center gap-3 group overflow-hidden"
        >
          {/* Logo mark */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-sky-400 p-[1.5px] shrink-0 group-hover:shadow-glow-purple transition-shadow">
            <div className="w-full h-full rounded-[10px] bg-[#09090B] flex items-center justify-center font-bold text-white text-base tracking-tighter">
              S
            </div>
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col truncate"
            >
              <span className="font-bold text-sm tracking-tight text-zinc-100 flex items-center gap-1.5">
                {personalInfo.brand}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work" />
              </span>
              <span className="text-[11px] text-zinc-400 truncate font-mono">
                Digital Creative
              </span>
            </motion.div>
          )}
        </NavLink>

        <button
          onClick={() => {
            playClick();
            onToggleCollapse();
          }}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 dark:hover:bg-white/5 transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links (Spotify / Notion style) */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {!isCollapsed && (
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Navigation
          </div>
        )}

        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));

          return (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={playClick}
              className={({ isActive: active }) =>
                `relative flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all group select-none ${
                  active
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 dark:hover:bg-white/[0.04]'
                }`
              }
              title={isCollapsed ? link.label : undefined}
            >
              {/* Active Background Pill (Framer Motion) */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-xl bg-purple-600/15 dark:bg-purple-500/15 border border-purple-500/30 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}

              <Icon
                className={`w-4 h-4 shrink-0 transition-colors z-10 ${
                  isActive ? 'text-purple-400' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}
              />

              {!isCollapsed && (
                <div className="flex items-center justify-between w-full min-w-0 z-10">
                  <span className="truncate">{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                        link.badge === 'New'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold'
                          : 'bg-zinc-800/80 text-zinc-400 dark:bg-white/10 dark:text-zinc-300'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Current Playing / Mini Widget */}
      {!isCollapsed && (
        <div className="mx-3 mb-3 p-3 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-900/60 dark:from-[#18181D] dark:to-[#111114] border border-zinc-200/50 dark:border-white/[0.06]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Currently Crafting
            </span>
          </div>
          <p className="text-xs text-zinc-300 font-medium line-clamp-2 leading-relaxed">
            {personalInfo.currentActivity.building}
          </p>
        </div>
      )}

      {/* Social Links Footer */}
      <div className="p-3 border-t border-zinc-200/60 dark:border-white/[0.06]">
        {!isCollapsed ? (
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1">
              {personalInfo.socials.slice(0, 4).map((social) => {
                const IconComponent = getSocialIcon(social.platform);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 dark:hover:bg-white/10 transition-colors"
                    title={`${social.platform} (${social.handle})`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
            <span className="text-[10px] font-mono text-zinc-400">
              Dhaka, BD
            </span>
          </div>
        ) : (
          <div className="flex justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </aside>
  );
};
