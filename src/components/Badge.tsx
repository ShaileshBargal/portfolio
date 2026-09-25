import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'green' | 'amber';
  size?: 'sm' | 'md';
}

const variantClasses: Record<string, string> = {
  default: 'bg-slate-800 text-slate-300 border border-slate-700',
  accent:  'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  green:   'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  amber:   'bg-amber-500/10 text-amber-400 border border-amber-500/20',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-[11px] px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', size = 'md' }) => (
  <span
    className={`inline-flex items-center rounded-md font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
  >
    {children}
  </span>
);

export default Badge;
