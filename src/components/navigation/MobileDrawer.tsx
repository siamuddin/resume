import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Home,
  User,
  FolderGit2,
  Wrench,
  Briefcase,
  BookOpen,
  Sparkles,
  Compass,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-4/5 max-w-xs h-full bg-[#09090B] border-r border-zinc-800 p-6 flex flex-col justify-between shadow-2xl z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-sky-400 p-[1.5px]">
                    <div className="w-full h-full rounded-[10px] bg-[#09090B] flex items-center justify-center font-bold text-white text-sm">
                      S
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-zinc-100">{personalInfo.brand}</h2>
                    <p className="text-[11px] text-zinc-400 font-mono">Digital Creative</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    playClick();
                    onClose();
                  }}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 space-y-1 overflow-y-auto max-h-[calc(100vh-220px)]">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        playClick();
                        onClose();
                      }}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      {link.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {link.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-zinc-400">Connect</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono text-center">
                © {new Date().getFullYear()} Siam. Built with React & Vite.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
