import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  glow = false,
  padding = 'md',
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'relative rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/[0.08] text-zinc-900 dark:text-zinc-100 transition-all duration-300 shadow-sm',
        hoverEffect && 'hover:border-purple-500/30 hover:shadow-card-hover dark:hover:border-white/[0.15]',
        glow && 'shadow-glow-purple border-purple-500/30',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
