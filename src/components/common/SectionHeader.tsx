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
  headingTag?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'brand',
  title,
  highlightText,
  description,
  align = 'left',
  action,
  headingTag = 'h2',
}) => {
  const HeadingTag = headingTag;
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
          <HeadingTag className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8FAFC] leading-tight">
            {title}{' '}
            {highlightText && (
              <span className="text-[#22D3EE]">
                {highlightText}
              </span>
            )}
          </HeadingTag>
        </div>
        {action && <div className="mt-2 sm:mt-0">{action}</div>}
      </div>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
