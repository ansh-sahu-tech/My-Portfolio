import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Cpu, 
  Eye, 
  Layers, 
  Radio, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Server
} from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';

export const AiSystemHud: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'vision' | 'pipeline'>('telemetry');
  const [latency, setLatency] = useState(14);
  const [fps, setFps] = useState(60);
  const [earValue, setEarValue] = useState(0.32);

  // Live telemetry simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(12 + Math.random() * 5));
      setFps(Math.floor(58 + Math.random() * 4));
      setEarValue(Number((0.31 + Math.random() * 0.04).toFixed(3)));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Outer Glowing Futuristic SaaS Window */}
      <GlassCard
        className="p-1 border-cyan-500/20 shadow-[0_0_50px_-15px_rgba(6,182,212,0.25)] relative overflow-hidden"
        glowColor="cyan"
      >
        {/* Top Status Banner */}
        <div className="bg-[#090e1a]/95 rounded-t-xl px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono font-medium text-slate-400 ml-1">
              ANSH-AI-NODE-v2.4
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="live" size="sm" pulse>
              AI SYSTEM ● ONLINE
            </Badge>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="bg-[#060a14] px-4 py-2 border-b border-slate-800/60 flex items-center justify-between text-xs font-mono">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'telemetry'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Telemetry
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'vision'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Vision Pipeline
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Model Loss
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-emerald-400">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>{fps} FPS / {latency}ms</span>
          </div>
        </div>

        {/* HUD Content Area */}
        <div className="p-5 bg-gradient-to-b from-[#080d1a] to-[#050811] space-y-4 font-mono">
          {/* Main 4 Metric Cards Matrix */}
          <div className="grid grid-cols-2 gap-3">
            {/* Metric 1: System Status */}
            <div className="p-3.5 rounded-xl bg-[#0d1424]/90 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">AI System</span>
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-white tracking-tight">ONLINE</span>
                <span className="text-[10px] text-emerald-400">99.98%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[99%]" />
              </div>
            </div>

            {/* Metric 2: Model Performance */}
            <div className="p-3.5 rounded-xl bg-[#0d1424]/90 border border-slate-800 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Performance</span>
                <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-indigo-300">94.8%</span>
                <span className="text-[10px] text-slate-400 font-normal">AUC-ROC</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className="bg-indigo-500 h-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '94.8%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Metric 3: Computer Vision */}
            <div className="p-3.5 rounded-xl bg-[#0d1424]/90 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Vision Engine</span>
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-emerald-300">ACTIVE</span>
                <span className="text-[10px] text-slate-400">68-PTS</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[92%]" />
              </div>
            </div>

            {/* Metric 4: Data Pipeline */}
            <div className="p-3.5 rounded-xl bg-[#0d1424]/90 border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Data Pipeline</span>
                <Layers className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-amber-300">RUNNING</span>
                <span className="text-[10px] text-slate-400">ETL-v2</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-amber-500 h-full w-[88%]" />
              </div>
            </div>
          </div>

          {/* Dynamic Tab Panel */}
          {activeTab === 'telemetry' && (
            <div className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  Live Inference Telemetry
                </span>
                <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  REALTIME
                </span>
              </div>

              {/* Simulated Pulse Waveform */}
              <div className="h-16 flex items-end justify-between gap-1 px-1 bg-[#050811] rounded-lg border border-slate-900 py-1">
                {[45, 62, 58, 80, 72, 90, 85, 94, 78, 65, 88, 92, 70, 85, 95, 89, 76, 92, 84, 98, 91, 74].map((val, idx) => (
                  <motion.div
                    key={idx}
                    className="w-full bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-t-sm"
                    initial={{ height: '30%' }}
                    animate={{ height: `${val}%` }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1.2 + (idx % 5) * 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                <div className="text-slate-400">
                  Batch: <span className="text-slate-200">32 img/s</span>
                </div>
                <div className="text-slate-400">
                  Quant: <span className="text-slate-200">INT8</span>
                </div>
                <div className="text-slate-400 text-right">
                  Loss: <span className="text-emerald-400">0.0142</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  Facial Landmark & EAR Monitor
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  EAR: {earValue}
                </span>
              </div>

              {/* Simulated Facial Matrix */}
              <div className="relative h-20 bg-[#050811] rounded-lg border border-slate-900 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
                <div className="border border-dashed border-emerald-500/40 w-24 h-16 rounded-xl flex items-center justify-center relative">
                  <div className="absolute top-3 left-4 w-4 h-2 border-b-2 border-cyan-400" />
                  <div className="absolute top-3 right-4 w-4 h-2 border-b-2 border-cyan-400" />
                  <div className="absolute bottom-3 w-6 h-1 bg-emerald-400/80 rounded" />
                  <span className="text-[9px] text-emerald-300 font-mono">ATTENTIVE</span>
                </div>
                <div className="absolute right-3 top-2 text-[10px] text-slate-400">
                  Head Pose: <span className="text-slate-200 font-mono">Yaw +1.2°</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Drowsiness Trigger: &lt; 0.22</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Driver Attentive
                </span>
              </div>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  Training & Validation Loss
                </span>
                <span className="text-[10px] text-indigo-400">Epoch 45 / 50</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Train Accuracy (Random Forest)</span>
                    <span className="text-indigo-300">96.4%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[96.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Validation Accuracy (Cross-Val)</span>
                    <span className="text-emerald-300">94.8%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[94.8%]" />
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 pt-1 leading-relaxed">
                Stratified 5-Fold Cross Validation evaluated across biometric & academic indicator matrices.
              </p>
            </div>
          )}

          {/* Footer Status Bar */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400" />
              Sanskriti University Lab Node
            </span>
            <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
              System Ready <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
