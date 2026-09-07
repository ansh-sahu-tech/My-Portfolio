import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, Play, RefreshCw } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system' | 'success' | 'warning';
  text: string;
}

export const TerminalConsole: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'ANSH.DEV AI INFERENCE ENGINE [Version 2.4.0]' },
    { type: 'system', text: 'Initialized environment: Python 3.11 • OpenCV • Scikit-learn • PyTorch' },
    { type: 'output', text: 'Type "help" or run quick actions below to inspect systems.' },
    { type: 'input', text: '$ ansh --info' },
    { type: 'output', text: 'Ansh • AI/ML Engineer • Sanskriti University (2023-2027)' },
    { type: 'output', text: 'Specializations: Computer Vision, Supervised Learning, Predictive Modeling, React SaaS' },
    { type: 'success', text: 'STATUS: Available for internships & high-impact AI/ML projects.' },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory: TerminalLine[] = [...history, { type: 'input', text: `$ ${trimmed}` }];
    const lower = trimmed.toLowerCase();

    if (lower === 'help') {
      newHistory.push(
        { type: 'system', text: 'Available commands:' },
        { type: 'output', text: '  ansh --info       Display profile & academic background' },
        { type: 'output', text: '  ansh --skills     List categorized technical stack' },
        { type: 'output', text: '  ansh --projects   List featured AI/ML & Web projects' },
        { type: 'output', text: '  ansh --vision     Inspect AI Driver Awareness pipeline parameters' },
        { type: 'output', text: '  clear             Clear terminal screen' }
      );
    } else if (lower === 'ansh --info' || lower === 'info') {
      newHistory.push(
        { type: 'output', text: 'Name: Ansh | Role: AI/ML Engineer' },
        { type: 'output', text: 'Education: B.Tech CSE (AI & ML) @ Sanskriti University (2023-2027)' },
        { type: 'output', text: 'Focus: Computer Vision, Real-Time Inference, Machine Learning, Web Dev' }
      );
    } else if (lower === 'ansh --skills' || lower === 'skills') {
      newHistory.push(
        { type: 'output', text: 'Programming: Python, JavaScript, TypeScript, SQL' },
        { type: 'output', text: 'AI & ML: OpenCV, Scikit-learn, TensorFlow, Deep Learning, Neural Networks' },
        { type: 'output', text: 'Data: Pandas, NumPy, EDA, Matplotlib, Data Visualization' },
        { type: 'output', text: 'Development: React, Tailwind CSS, Git, GitHub' }
      );
    } else if (lower === 'ansh --projects' || lower === 'projects') {
      newHistory.push(
        { type: 'success', text: '1. AI Driver Awareness System (OpenCV, Drowsiness & Distraction Alert)' },
        { type: 'success', text: '2. Student Performance Prediction (Scikit-learn Regression & Classification)' },
        { type: 'success', text: '3. Heart Disease Prediction (Clinical Biomarker Risk Modeling)' },
        { type: 'success', text: '4. Swagatam Vijay Bakers (Production React & TypeScript Platform)' }
      );
    } else if (lower === 'ansh --vision' || lower === 'vision') {
      newHistory.push(
        { type: 'system', text: '[Vision Pipeline Telemetry]' },
        { type: 'output', text: 'Input Source: Video Stream 30FPS 1080p' },
        { type: 'output', text: 'Landmark Model: 68-Point Facial Keypoints' },
        { type: 'output', text: 'EAR Threshold: 0.25 (Micro-sleep alert threshold)' },
        { type: 'success', text: 'Pipeline Latency: ~14ms per frame on local compute' }
      );
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newHistory.push({
        type: 'warning',
        text: `Command not found: "${trimmed}". Type "help" to view available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCopy = () => {
    const text = history.map((h) => h.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#070b14] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Header bar */}
      <div className="px-4 py-3 bg-[#0c1220] border-b border-slate-800/90 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-semibold">ansh@terminal: ~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCommand('clear')}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
            title="Clear terminal"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopy}
            className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Copy terminal logs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal log output */}
      <div className="p-4 bg-[#050811] min-h-[220px] max-h-[300px] overflow-y-auto space-y-1.5">
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'input' && <span className="text-cyan-400 font-semibold">{line.text}</span>}
            {line.type === 'output' && <span className="text-slate-300">{line.text}</span>}
            {line.type === 'system' && <span className="text-indigo-400">{line.text}</span>}
            {line.type === 'success' && <span className="text-emerald-400 font-medium">{line.text}</span>}
            {line.type === 'warning' && <span className="text-amber-400">{line.text}</span>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Command Input & Quick Pills */}
      <div className="p-3 bg-[#0a0f1d] border-t border-slate-800/80 space-y-2.5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2"
        >
          <span className="text-cyan-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command here (e.g. 'help', 'ansh --projects')..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs font-mono"
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 flex items-center gap-1 transition-colors"
          >
            <Play className="w-3 h-3" /> Run
          </button>
        </form>

        {/* Quick click presets */}
        <div className="flex flex-wrap gap-1.5 text-[10px]">
          <span className="text-slate-500 self-center">Quick commands:</span>
          {['ansh --info', 'ansh --skills', 'ansh --projects', 'ansh --vision'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
