import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'emerald' | 'amber' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className,
  dot = false,
}) => {
  const variantStyles = {
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 dark:border-purple-500/30',
    blue: 'bg-sky-500/10 text-sky-400 border-sky-500/20 dark:border-sky-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dark:border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 dark:border-amber-500/30',
    neutral: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/50 dark:bg-zinc-900/80 dark:border-white/10 dark:text-zinc-300',
    outline: 'bg-transparent text-zinc-400 border-zinc-700/60 dark:border-white/10',
  };

  const dotColors = {
    purple: 'bg-purple-400',
    blue: 'bg-sky-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    neutral: 'bg-zinc-400',
    outline: 'bg-zinc-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border transition-colors select-none tracking-tight',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />
      )}
      {children}
    </span>
  );
};
