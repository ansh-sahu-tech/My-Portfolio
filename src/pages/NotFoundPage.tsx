import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home } from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <GlassCard className="p-8 sm:p-12 max-w-lg w-full text-center space-y-6 border-[#263342]" glowColor="cyan">
        <div className="w-16 h-16 rounded-2xl bg-[#1A2430] border border-[#22D3EE]/40 text-[#22D3EE] flex items-center justify-center mx-auto shadow-lg shadow-black/50">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-[#22D3EE] font-bold tracking-widest uppercase">
            Error 404 // Node Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mt-2">
            Lost in the Neural Network
          </h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 leading-relaxed">
            The route you navigated to does not exist in the active telemetry registry.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="gradient" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="secondary" size="md">
              View Projects
            </Button>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
};
