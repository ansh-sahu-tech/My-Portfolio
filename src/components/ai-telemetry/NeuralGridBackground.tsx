import React from 'react';

export const NeuralGridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial Gradient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D4A373]/10 via-[#CCD5AE]/10 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-[#CCD5AE]/15 blur-[130px] rounded-full" />
      <div className="absolute top-[60%] -right-[200px] w-[600px] h-[600px] bg-[#FAEDCD]/20 blur-[140px] rounded-full" />

      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,213,174,0)_50%,rgba(212,163,115,0.04)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
    </div>
  );
};
