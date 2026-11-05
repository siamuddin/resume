import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft } from 'lucide-react';
import { personalInfo, projects, skills } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
}

export const TerminalShell: React.FC = () => {
  const { playClick, playPop } = useSound();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'SiamOS CLI [Version 2.4.0-release] — Interactive Terminal',
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Type "help" to see available commands or "projects" to view active builds.',
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    playClick();
    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      { id: String(Date.now()), type: 'input', content: raw },
    ];

    const args = raw.split(' ');
    const command = args[0].toLowerCase();

    switch (command) {
      case 'help':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="space-y-1 font-mono text-xs">
              <div className="text-purple-400 font-bold">AVAILABLE COMMANDS:</div>
              <div>• <span className="text-zinc-200 font-semibold">whoami</span> — Display author bio & location</div>
              <div>• <span className="text-zinc-200 font-semibold">projects</span> — List all portfolio case studies</div>
              <div>• <span className="text-zinc-200 font-semibold">skills</span> — Display technical and design stack</div>
              <div>• <span className="text-zinc-200 font-semibold">contact</span> — Get direct contact & email channels</div>
              <div>• <span className="text-zinc-200 font-semibold">date</span> — Display current local time in Dhaka</div>
              <div>• <span className="text-zinc-200 font-semibold">clear</span> — Flush terminal output buffer</div>
              <div>• <span className="text-zinc-200 font-semibold">sudo [action]</span> — Run with superuser privileges 😉</div>
              <div>• <span className="text-zinc-200 font-semibold">echo [text]</span> — Print text to standard output</div>
            </div>
          ),
        });
        break;

      case 'whoami':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              <div>Name: <span className="text-purple-400 font-bold">{personalInfo.name}</span></div>
              <div>Role: {personalInfo.role}</div>
              <div>Location: {personalInfo.location}</div>
              <div>Tagline: &ldquo;{personalInfo.tagline}&rdquo;</div>
            </div>
          ),
        });
        break;

      case 'projects':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              {projects.map((p) => (
                <div key={p.id}>
                  • <span className="text-purple-300 font-bold">{p.title}</span> ({p.year}) — {p.category}: {p.tagline}
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'skills':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              {skills.slice(0, 8).map((s) => (
                <div key={s.name}>
                  • <span className="text-sky-400">{s.name}</span> [{s.category}] — {s.level}% ({s.status})
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'contact':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: (
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-purple-400 underline">{personalInfo.email}</a></div>
              <div>Availability: {personalInfo.availability}</div>
            </div>
          ),
        });
        break;

      case 'date':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: `Local Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (Dhaka, Bangladesh / UTC+6)`,
        });
        break;

      case 'clear':
        setLines([]);
        setInputVal('');
        return;

      case 'sudo':
        playPop();
        newLines.push({
          id: String(Date.now() + 1),
          type: 'error',
          content: 'Permission denied: User "guest" is not in the sudoers file. This incident will be reported to Santa Claus 🎅',
        });
        break;

      case 'echo':
        newLines.push({
          id: String(Date.now() + 1),
          type: 'output',
          content: args.slice(1).join(' ') || '',
        });
        break;

      default:
        newLines.push({
          id: String(Date.now() + 1),
          type: 'error',
          content: `Command not found: "${command}". Type "help" for a list of valid commands.`,
        });
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-[#09090B] p-4 sm:p-6 space-y-4">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2">siam@terminal: ~ (zsh)</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          Bash v5.2
        </div>
      </div>

      {/* Terminal Screen Output */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="h-64 sm:h-72 overflow-y-auto font-mono text-xs space-y-2 p-2 bg-black/50 rounded-xl border border-zinc-800/80 cursor-text"
      >
        {lines.map((line) => {
          if (line.type === 'system') {
            return (
              <div key={line.id} className="text-zinc-400">
                {line.content}
              </div>
            );
          }
          if (line.type === 'input') {
            return (
              <div key={line.id} className="flex items-center gap-2 text-zinc-300">
                <span className="text-purple-400">guest@siam:~$</span>
                <span>{line.content}</span>
              </div>
            );
          }
          if (line.type === 'error') {
            return (
              <div key={line.id} className="text-rose-400">
                {line.content}
              </div>
            );
          }
          return (
            <div key={line.id} className="text-zinc-300">
              {line.content}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Prompt Input */}
      <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 rounded-xl px-3 py-2 font-mono text-xs">
        <span className="text-purple-400 shrink-0">guest@siam:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. 'projects', 'help')..."
          className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 outline-none"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          className="p-1 rounded bg-zinc-800 text-zinc-300 hover:text-white"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
