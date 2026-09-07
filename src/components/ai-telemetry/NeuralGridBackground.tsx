import React from 'react';

export const NeuralGridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial Gradient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
      <div className="absolute top-[60%] -right-[200px] w-[600px] h-[600px] bg-emerald-600/10 blur-[140px] rounded-full" />

      {/* Cyber Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-25 pointer-events-none" />
    </div>
  );
};
