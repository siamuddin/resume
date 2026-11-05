import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Music, Palette } from 'lucide-react';
import { playgroundExperiments } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { KineticParticleCanvas } from '../components/playground/KineticParticleCanvas';
import { BionicSynthPad } from '../components/playground/BionicSynthPad';
import { GradientLab } from '../components/playground/GradientLab';
import { TerminalShell } from '../components/playground/TerminalShell';
import { useSound } from '../context/SoundContext';

export const PlaygroundPage: React.FC = () => {
  const { playClick } = useSound();
  const [activeTab, setActiveTab] = useState<string>('canvas-particles');

  const tabs = [
    { id: 'canvas-particles', label: 'Kinetic Matrix', icon: Sparkles },
    { id: 'audio-synth', label: 'Web Audio Synth', icon: Music },
    { id: 'gradient-lab', label: 'Gradient Lab', icon: Palette },
    { id: 'terminal-shell', label: 'SiamOS CLI', icon: Terminal },
  ];

  return (
    <div className="space-y-12 max-w-5xl">
      {/* 1. Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="purple" size="md">
          Laboratory & Experiments
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Creative Playground
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          A sandbox for real-time physics, Web Audio synthesis, interactive GLSL shaders, and experimental micro-interactions.
        </p>
      </div>

      {/* 2. Interactive Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-200/80 dark:border-white/[0.08]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playClick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-zinc-900/60 dark:bg-[#18181D]/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-200/80 dark:border-white/[0.08]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Active Experiment Showcase */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'canvas-particles' && <KineticParticleCanvas />}
            {activeTab === 'audio-synth' && <BionicSynthPad />}
            {activeTab === 'gradient-lab' && <GradientLab />}
            {activeTab === 'terminal-shell' && <TerminalShell />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Experiments Catalog Grid */}
      <section className="space-y-6 pt-10 border-t border-zinc-800">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            All Laboratory Experiments
          </h2>
          <p className="text-xs text-zinc-400">
            Click on any experiment card above to switch live execution mode.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {playgroundExperiments.map((exp) => (
            <div
              key={exp.id}
              onClick={() => {
                playClick();
                if (['canvas-particles', 'audio-synth', 'gradient-lab', 'terminal-shell'].includes(exp.type)) {
                  setActiveTab(exp.type);
                }
              }}
              className={`p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border transition-all cursor-pointer space-y-3 ${
                activeTab === exp.type
                  ? 'border-purple-500 shadow-glow-purple'
                  : 'border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 font-bold">{exp.date}</span>
                <Badge variant={activeTab === exp.type ? 'purple' : 'neutral'} size="sm">
                  {activeTab === exp.type ? 'Active' : 'Standby'}
                </Badge>
              </div>

              <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                {exp.title}
              </h3>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
