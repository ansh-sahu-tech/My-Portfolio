import React from 'react';

export const NeuralGridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial Gradient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#22D3EE]/10 via-[#1A2430]/15 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-[#22D3EE]/5 blur-[130px] rounded-full" />
      <div className="absolute top-[60%] -right-[200px] w-[600px] h-[600px] bg-[#22D3EE]/5 blur-[140px] rounded-full" />

      {/* Cyber Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,25,35,0)_50%,rgba(11,15,20,0.4)_50%)] bg-[length:100%_4px] opacity-25 pointer-events-none" />
    </div>
  );
};
