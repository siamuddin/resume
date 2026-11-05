import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Check, Palette, Sparkles } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

interface GradientPreset {
  name: string;
  angle: number;
  stops: string[];
}

export const GradientLab: React.FC = () => {
  const { playSuccess } = useSound();
  const [copied, setCopied] = useState(false);

  const presets: GradientPreset[] = [
    { name: 'Midnight Violet', angle: 135, stops: ['#8B5CF6', '#3B82F6', '#09090B'] },
    { name: 'Aurora Borealis', angle: 160, stops: ['#10B981', '#06B6D4', '#6366F1'] },
    { name: 'Cyberpunk Velvet', angle: 120, stops: ['#EC4899', '#8B5CF6', '#1E1B4B'] },
    { name: 'Solar Obsidian', angle: 145, stops: ['#F59E0B', '#EF4444', '#18181D'] },
    { name: 'Deep Space', angle: 180, stops: ['#38BDF8', '#818CF8', '#0F172A'] },
  ];

  const [activePreset, setActivePreset] = useState<GradientPreset>(presets[0]);
  const [angle, setAngle] = useState(activePreset.angle);

  const cssCode = `background: linear-gradient(${angle}deg, ${activePreset.stops.join(', ')});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    playSuccess();
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#8B5CF6', '#38BDF8', '#FAFAFA'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-[#09090B] p-4 sm:p-6 space-y-5">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-zinc-100">Atmospheric Gradient Lab</h3>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setActivePreset(preset);
                setAngle(preset.angle);
              }}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                activePreset.name === preset.name
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas Display */}
      <div
        className="h-44 sm:h-52 w-full rounded-xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 flex items-end p-5"
        style={{
          background: `linear-gradient(${angle}deg, ${activePreset.stops.join(', ')})`,
        }}
      >
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="relative z-10 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-xs font-mono text-zinc-200">{activePreset.name} • {angle}°</span>
        </div>
      </div>

      {/* Angle Slider & Export Code */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <label className="text-xs font-mono text-zinc-400">Angle Rotation:</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="accent-purple-500 w-36 sm:w-48 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <span className="font-mono text-xs text-purple-400 w-10 text-right">{angle}°</span>
          </div>
        </div>

        {/* CSS Code Snippet Card */}
        <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
          <code className="truncate text-purple-300">{cssCode}</code>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy CSS</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
