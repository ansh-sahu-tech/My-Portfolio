import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'live';
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'cyan',
  title,
  highlightText,
  description,
  align = 'left',
  action,
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex flex-wrap items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-between'}`}>
        <div>
          {badge && (
            <div className="mb-3">
              <Badge variant={badgeVariant} size="md">
                {badge}
              </Badge>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}{' '}
            {highlightText && (
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </h2>
        </div>
        {action && <div className="mt-2 sm:mt-0">{action}</div>}
      </div>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
