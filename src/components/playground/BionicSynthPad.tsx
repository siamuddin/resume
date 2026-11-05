import React, { useState, useEffect, useRef } from 'react';
import { Music, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

interface NoteDef {
  key: string;
  keyboardKey: string;
  name: string;
  frequency: number;
}

export const BionicSynthPad: React.FC = () => {
  const [waveType, setWaveType] = useState<OscillatorType>('sine');
  const [octaveShift, setOctaveShift] = useState(0);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const notes: NoteDef[] = [
    { key: 'c4', keyboardKey: 'A', name: 'C4', frequency: 261.63 },
    { key: 'd4', keyboardKey: 'S', name: 'D4', frequency: 293.66 },
    { key: 'e4', keyboardKey: 'D', name: 'E4', frequency: 329.63 },
    { key: 'f4', keyboardKey: 'F', name: 'F4', frequency: 349.23 },
    { key: 'g4', keyboardKey: 'G', name: 'G4', frequency: 392.00 },
    { key: 'a4', keyboardKey: 'H', name: 'A4', frequency: 440.00 },
    { key: 'b4', keyboardKey: 'J', name: 'B4', frequency: 493.88 },
    { key: 'c5', keyboardKey: 'K', name: 'C5', frequency: 523.25 },
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playNote = (note: NoteDef) => {
    initAudio();
    const ctx = audioCtxRef.current;
    const analyser = analyserRef.current;
    if (!ctx || !analyser) return;

    setActiveNote(note.key);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const mult = Math.pow(2, octaveShift);
    osc.type = waveType;
    osc.frequency.setValueAtTime(note.frequency * mult, ctx.currentTime);

    // Envelope
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    osc.connect(gain);
    gain.connect(analyser);

    osc.start();
    osc.stop(ctx.currentTime + 0.45);

    setTimeout(() => {
      setActiveNote((curr) => (curr === note.key ? null : curr));
    }, 400);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const match = notes.find((n) => n.keyboardKey.toLowerCase() === e.key.toLowerCase());
      if (match) {
        playNote(match);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [waveType, octaveShift]);

  // Oscilloscope Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const renderOscilloscope = () => {
      const analyser = analyserRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!analyser) {
        // Flat resting line
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
        animId = requestAnimationFrame(renderOscilloscope);
        return;
      }

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#A78BFA';
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.stroke();
      animId = requestAnimationFrame(renderOscilloscope);
    };

    renderOscilloscope();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-[#09090B] p-4 sm:p-6 space-y-5">
      {/* Top Header & Settings */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-zinc-100">Bionic Web Synth</h3>
          <span className="text-xs font-mono text-zinc-400">Play with [A, S, D, F, G, H, J, K]</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Waveform Selector */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            {(['sine', 'triangle', 'sawtooth', 'square'] as OscillatorType[]).map((wave) => (
              <button
                key={wave}
                onClick={() => setWaveType(wave)}
                className={`px-2 py-1 text-xs rounded capitalize font-medium transition-colors ${
                  waveType === wave ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {wave}
              </button>
            ))}
          </div>

          {/* Octave Shift */}
          <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs">
            <span className="text-zinc-400 px-1 font-mono">Octave:</span>
            <button
              onClick={() => setOctaveShift((prev) => Math.max(-1, prev - 1))}
              className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:text-white"
            >
              -
            </button>
            <span className="font-mono text-purple-400 px-1 font-bold">{octaveShift > 0 ? `+${octaveShift}` : octaveShift}</span>
            <button
              onClick={() => setOctaveShift((prev) => Math.min(1, prev + 1))}
              className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Oscilloscope */}
      <div className="h-28 w-full rounded-xl bg-black/50 border border-zinc-800/80 p-2 relative flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} width={600} height={100} className="w-full h-full block" />
        <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
          <Radio className="w-3 h-3 text-purple-400 animate-pulse" />
          <span>Real-time Waveform Monitor</span>
        </div>
      </div>

      {/* Musical Pads */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {notes.map((note) => {
          const isActive = activeNote === note.key;
          return (
            <motion.button
              key={note.key}
              whileTap={{ scale: 0.94 }}
              onClick={() => playNote(note)}
              className={`p-4 rounded-xl flex flex-col items-center justify-between min-h-[90px] border transition-all cursor-pointer ${
                isActive
                  ? 'bg-purple-600 border-purple-400 shadow-glow-purple text-white'
                  : 'bg-zinc-900/80 hover:bg-zinc-800/90 border-zinc-800 hover:border-purple-500/40 text-zinc-200'
              }`}
            >
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-zinc-400 border border-white/5">
                {note.keyboardKey}
              </span>
              <span className="font-bold text-base mt-2">{note.name}</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">{note.frequency.toFixed(0)}Hz</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
