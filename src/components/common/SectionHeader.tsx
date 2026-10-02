import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'live' | 'brand';
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'brand',
  title,
  highlightText,
  description,
  align = 'left',
  action,
}) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex flex-wrap items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-between'}`}>
        <div>
          {badge && (
            <div className="mb-2.5">
              <Badge variant={badgeVariant} size="md">
                {badge}
              </Badge>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {title}{' '}
            {highlightText && (
              <span className="text-blue-600 dark:text-blue-400">
                {highlightText}
              </span>
            )}
          </h2>
        </div>
        {action && <div className="mt-2 sm:mt-0">{action}</div>}
      </div>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
