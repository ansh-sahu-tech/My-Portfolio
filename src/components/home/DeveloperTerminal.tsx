import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Copy, Check, Terminal as TerminalIcon, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '../../context/ToastContext';

type TabKey = 'profile' | 'techStack' | 'cli';

export const DeveloperTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('profile');
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[] | null>(null);
  const [copied, setCopied] = useState(false);
  const { info } = useToast();

  const codeSnippets: Record<TabKey, { filename: string; code: string; language: string }> = {
    profile: {
      filename: 'developer.config.ts',
      language: 'typescript',
      code: `export const developer: SoftwareEngineer = {
  name: "Ansh Sahu",
  title: "Frontend & Fullstack Engineer",
  education: "B.Tech CSE (AI & ML) @ Sanskriti University (2023–2027)",
  location: "Gonda & Mathura, Uttar Pradesh, India",
  status: "🟢 Available for Freelance, Full-Time Roles & Internships",
  corePrinciples: [
    "Clean, maintainable component hierarchy",
    "Sub-second page speeds & 100% responsive UX",
    "Applied Machine Learning & Real-Time Computer Vision"
  ],
  passion: "Translating bold ideas into scalable digital products 🚀"
};`,
    },
    techStack: {
      filename: 'techStack.json',
      language: 'json',
      code: `{
  "frontend": ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS"],
  "backend_and_data": ["REST APIs", "Supabase", "Python", "NumPy", "Pandas"],
  "ai_and_vision": ["OpenCV", "Facial Landmark Telemetry", "EAR/MAR Tracking"],
  "tooling": ["Git", "GitHub Actions", "Vite", "Vercel", "Figma"],
  "codeQuality": "Strict typing, Accessible semantics, High performance"
}`,
    },
    cli: {
      filename: 'quick_connect.sh',
      language: 'bash',
      code: `#!/usr/bin/env bash
# Connect directly with Ansh Sahu

curl -X POST https://api.anshsahu.dev/connect \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender": "Innovative Team / Recruiter",
    "intent": "Exciting Project Collaboration",
    "destination": "anshcseaiml0169@gmail.com"
  }'

# Direct WhatsApp/Call: +91 7905187123
echo "🚀 Message dispatched! Let's build something extraordinary together."`,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    info(`Copied ${codeSnippets[activeTab].filename} to clipboard!`);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4A373', '#CCD5AE', '#24211D']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput([
        '⚡ [vite] HMR connection active',
        '> Loading Ansh Sahu profile telemetry...',
        '✓ Core modules initialized (React 19, TypeScript, Next.js)',
        '✓ Computer Vision models ready (EAR/MAR telemetry active)',
        '✓ 10+ Production projects compiled with zero errors',
        '🚀 All systems operational! Status: READY TO COLLABORATE ✨'
      ]);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#10B981', '#D4A373', '#3B82F6']
      });
    }, 600);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 sm:my-12 px-2 sm:px-4">
      {/* Terminal Container */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#1E1B18] text-[#E6E4DF] border-2 border-[#D4A373]/30 shadow-[0_20px_50px_-12px_rgba(36,33,29,0.35)] overflow-hidden font-mono">
        
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#151311] border-b border-white/10 gap-2">
          {/* macOS Traffic Lights + Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block shadow-sm" />
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-white/10 text-xs text-[#A8A29E]">
              <TerminalIcon className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="hidden sm:inline font-sans text-xs font-semibold text-[#CCD5AE]">ansh@portfolio: ~</span>
            </div>
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5">
            {(Object.keys(codeSnippets) as TabKey[]).map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs transition-all font-mono flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#2D2824] text-[#FEFAE0] border border-[#D4A373]/40 shadow-sm'
                      : 'text-[#A8A29E] hover:text-[#FFFFFF] hover:bg-white/5'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-[#D4A373]' : 'bg-transparent'}`} />
                  <span>{codeSnippets[tab].filename}</span>
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Run & Copy */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4A373] hover:bg-[#BD8C5C] text-[#24211D] font-bold text-xs transition-all active:scale-95 disabled:opacity-50"
              title="Execute Code Preview"
            >
              {isRunning ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
              <span className="hidden xs:inline">Run</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 text-xs transition-all active:scale-95"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] leading-relaxed bg-[#191715]/95">
          <pre className="font-mono text-[#E6E4DF]">
            <code>
              {codeSnippets[activeTab].code.split('\n').map((line, idx) => (
                <div key={idx} className="table-row group">
                  <span className="table-cell pr-4 text-right select-none text-white/20 group-hover:text-white/40 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre">
                    {/* Minimal syntax styling */}
                    {line.includes('export') || line.includes('const') || line.includes('#!/') ? (
                      <span className="text-[#F472B6]">{line}</span>
                    ) : line.includes(':') && line.includes('"') ? (
                      <span>
                        <span className="text-[#38BDF8]">{line.split(':')[0]}:</span>
                        <span className="text-[#FBBF24]">{line.split(':').slice(1).join(':')}</span>
                      </span>
                    ) : line.includes('//') || line.includes('#') ? (
                      <span className="text-[#78716C] italic">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Animated Terminal Console Output (when Run is triggered) */}
        <AnimatePresence>
          {consoleOutput && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-[#0F0E0C] p-4 text-xs font-mono"
            >
              <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/10 text-[11px] text-[#A8A29E]">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Terminal Output (Exit Code: 0)
                </span>
                <button
                  onClick={() => setConsoleOutput(null)}
                  className="hover:text-white transition-colors"
                >
                  ✕ Clear
                </button>
              </div>
              <div className="space-y-1">
                {consoleOutput.map((out, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={
                      out.startsWith('✓')
                        ? 'text-emerald-400'
                        : out.startsWith('🚀')
                        ? 'text-[#D4A373] font-bold'
                        : 'text-[#A8A29E]'
                    }
                  >
                    {out}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
