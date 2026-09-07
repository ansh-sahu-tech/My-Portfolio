import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NeuralGridBackground } from '../ai-telemetry/NeuralGridBackground';
import { CommandPalette } from '../command/CommandPalette';

export const PublicLayout: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Visual Grid & Lighting Layer */}
      <NeuralGridBackground />

      {/* Global Command Center */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Public Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Viewport */}
      <main className="flex-1 relative z-10 pt-24 pb-16">
        <Outlet />
      </main>

      {/* Public Footer */}
      <Footer />
    </div>
  );
};
