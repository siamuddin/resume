import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useSound } from '../context/SoundContext';

export const NotFoundPage: React.FC = () => {
  const { playClick } = useSound();

  return (
    <div className="py-20 sm:py-32 flex flex-col items-center justify-center text-center space-y-8 max-w-xl mx-auto">
      {/* Visual Glitch/Glow Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="text-8xl sm:text-9xl font-extrabold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-sky-400 select-none">
          404
        </div>
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl -z-10 rounded-full" />
      </motion.div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-rose-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 • Destination Unknown</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
          This coordinate does not exist.
        </h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          The page or experiment you are looking for has been relocated, refactored, or never existed in this dimension.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to="/" onClick={playClick}>
          <Button variant="primary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
        </Link>

        <Link to="/projects" onClick={playClick}>
          <Button variant="secondary" size="lg" leftIcon={<Compass className="w-4 h-4" />}>
            Browse Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
