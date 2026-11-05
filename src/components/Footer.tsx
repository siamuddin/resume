import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export const Footer: React.FC = () => {
  const { playClick } = useSound();

  return (
    <footer className="mt-24 border-t border-zinc-200/80 dark:border-white/[0.08] bg-zinc-900/30 dark:bg-[#09090B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-sky-400 p-[1px]">
                <div className="w-full h-full rounded-[7px] bg-[#09090B] flex items-center justify-center font-bold text-white text-xs">
                  S
                </div>
              </div>
              <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white">
                {personalInfo.brand}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              {personalInfo.tagline} Creative engineering and intentional interface architecture rooted in Dhaka, Bangladesh.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for selected 2027 design & engineering collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/projects"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Skills & Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Career Timeline
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Essays & Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/playground"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1.5"
                >
                  Playground <Sparkles className="w-3 h-3 text-purple-400" />
                </Link>
              </li>
              <li>
                <Link
                  to="/now"
                  onClick={playClick}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Now (/now)
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              {personalInfo.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{social.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={playClick}
                  className="text-purple-600 dark:text-purple-400 font-medium inline-flex items-center gap-1 hover:underline pt-1"
                >
                  Send an Inquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p className="flex items-center gap-1">
            Designed & coded with precision by Siam. All client metrics and roles are illustrative placeholders.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono">React • Vite • Tailwind • Motion</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
