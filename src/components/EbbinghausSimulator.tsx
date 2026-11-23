import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Play, 
  RotateCcw, 
  Sliders, 
  Info, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EbbinghausSimulator: React.FC = () => {
  const { t } = useLanguage();
  // Parameters from the paper
  const [strategy, setStrategy] = useState<'optimal' | 'random' | 'none'>('optimal');
  const [lambda, setLambda] = useState<number>(0.30); // forgetting coefficient
  const [alpha, setAlpha] = useState<number>(0.70); // learning boost
  const [threshold, setThreshold] = useState<number>(80); // retention threshold %

  // Calculated optimal interval t* = -(1/lambda) * ln(threshold/100)
  const optimalTime = useMemo(() => {
    if (threshold >= 100) return 0.1;
    const tStar = -(1 / lambda) * Math.log(threshold / 100);
    return parseFloat(tStar.toFixed(3));
  }, [lambda, threshold]);

  const optimalHours = useMemo(() => {
    const totalHours = optimalTime * 24;
    const h = Math.floor(totalHours);
    const m = Math.round((totalHours - h) * 60);
    return `${h}h ${m}m`;
  }, [optimalTime]);

  // Simulation points calculation over 7 days (t: 0 to 7.0, step: 0.05)
  const simulationPoints = useMemo(() => {
    const points: { t: number; r: number; event?: string }[] = [];
    const dt = 0.05;
    const totalDays = 7.0;
    
    let currentR = 100.0;
    let effectiveLambda = lambda;
    let nextReviewTime = optimalTime;
    let reviewCount = 0;

    // Fixed schedule for random strategy
    const randomReviews = [1.8, 3.2, 5.5];

    for (let t = 0; t <= totalDays + 0.001; t += dt) {
      const roundedT = parseFloat(t.toFixed(2));

      // Strategy interventions
      if (strategy === 'optimal') {
        if (t >= nextReviewTime && reviewCount < 4) {
          reviewCount++;
          // Cognitive reinforcement: retention jumps back toward 100% and decay slows down
          currentR = Math.min(100, currentR + (100 - currentR) * alpha);
          effectiveLambda = effectiveLambda * 0.65; // memory consolidates, decays slower!
          nextReviewTime = t + (-(1 / effectiveLambda) * Math.log(threshold / 100));
          points.push({ t: roundedT, r: currentR, event: `Review #${reviewCount}` });
          continue;
        }
      } else if (strategy === 'random') {
        if (randomReviews.length > 0 && Math.abs(t - randomReviews[0]) < dt / 2) {
          randomReviews.shift();
          reviewCount++;
          currentR = Math.min(100, currentR + (100 - currentR) * 0.55);
          effectiveLambda = effectiveLambda * 0.8;
          points.push({ t: roundedT, r: currentR, event: `Random Review` });
          continue;
        }
      }

      // Natural exponential decay: dR = -lambda * R * dt
      currentR = currentR * Math.exp(-effectiveLambda * dt);
      points.push({ t: roundedT, r: Math.max(0, currentR) });
    }

    return points;
  }, [strategy, lambda, alpha, threshold, optimalTime]);

  // SVG dimensions
  const svgWidth = 800;
  const svgHeight = 320;
  const padding = { top: 30, right: 40, bottom: 50, left: 60 };

  const plotWidth = svgWidth - padding.left - padding.right;
  const plotHeight = svgHeight - padding.top - padding.bottom;

  // Scale coordinates
  const scaleX = (t: number) => padding.left + (t / 7.0) * plotWidth;
  const scaleY = (r: number) => padding.top + plotHeight - (r / 100) * plotHeight;

  // Generate SVG path d string
  const pathD = useMemo(() => {
    return simulationPoints.reduce((acc, pt, index) => {
      const x = scaleX(pt.t);
      const y = scaleY(pt.r);
      return index === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, [simulationPoints]);

  // Threshold line Y
  const thresholdY = scaleY(threshold);

  const resetDefaults = () => {
    setLambda(0.30);
    setAlpha(0.70);
    setThreshold(80);
    setStrategy('optimal');
  };

  return (
    <section id="simulation" className="py-24 relative overflow-hidden bg-white dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.simulation.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.simulation.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-3xl">
            {t.simulation.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Main Simulator Card */}
        <div className="rounded-3xl border-2 border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-8 lg:p-10 shadow-elevated">
          
          {/* Top Controls: Strategy Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border dark:border-brand-darkBorder">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase font-bold text-brand-text dark:text-gray-300">
                {t.simulation.strategyMode}
              </span>
              <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder">
                <button
                  onClick={() => setStrategy('optimal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    strategy === 'optimal'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-brand-muted dark:text-gray-400 hover:text-brand-text'
                  }`}
                >
                  {t.simulation.optBtn}
                </button>
                <button
                  onClick={() => setStrategy('random')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    strategy === 'random'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-brand-muted dark:text-gray-400 hover:text-brand-text'
                  }`}
                >
                  {t.simulation.randBtn}
                </button>
                <button
                  onClick={() => setStrategy('none')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    strategy === 'none'
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-brand-muted dark:text-gray-400 hover:text-brand-text'
                  }`}
                >
                  {t.simulation.noneBtn}
                </button>
              </div>
            </div>

            <button
              onClick={resetDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-muted dark:text-gray-400 hover:text-brand-blue hover:bg-gray-100 dark:hover:bg-brand-darkBg transition-all self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.simulation.resetBtn}</span>
            </button>
          </div>

          {/* Interactive Graph Canvas (SVG) */}
          <div className="mt-6 relative w-full overflow-x-auto bg-gray-50/70 dark:bg-brand-darkBg/80 rounded-2xl border border-brand-border dark:border-brand-darkBorder p-2 sm:p-4">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full min-w-[640px] h-auto select-none"
            >
              {/* Grid Lines */}
              {[0, 20, 40, 60, 80, 100].map((rVal) => {
                const y = scaleY(rVal);
                return (
                  <g key={rVal}>
                    <line
                      x1={padding.left}
                      y1={y}
                      x2={svgWidth - padding.right}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-200 dark:text-gray-800"
                    />
                    <text
                      x={padding.left - 12}
                      y={y + 4}
                      textAnchor="end"
                      className="text-[11px] font-mono fill-gray-400 dark:fill-gray-500"
                    >
                      {rVal}%
                    </text>
                  </g>
                );
              })}

              {/* Day Markers on X-Axis */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((day) => {
                const x = scaleX(day);
                return (
                  <g key={day}>
                    <line
                      x1={x}
                      y1={padding.top}
                      x2={x}
                      y2={svgHeight - padding.bottom}
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      className="text-gray-200 dark:text-gray-800"
                    />
                    <text
                      x={x}
                      y={svgHeight - padding.bottom + 20}
                      textAnchor="middle"
                      className="text-[11px] font-mono fill-gray-500 dark:fill-gray-400 font-medium"
                    >
                      Day {day}
                    </text>
                  </g>
                );
              })}

              {/* Retention Threshold Dashed Line */}
              <line
                x1={padding.left}
                y1={thresholdY}
                x2={svgWidth - padding.right}
                y2={thresholdY}
                stroke="#0300e1"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="opacity-75"
              />
              <text
                x={svgWidth - padding.right}
                y={thresholdY - 8}
                textAnchor="end"
                className="text-[11px] font-mono font-bold fill-brand-blue"
              >
                {t.simulation.thresholdLabel} ({threshold}%)
              </text>

              {/* Shaded Area under Curve */}
              <path
                d={`${pathD} L ${scaleX(7.0)} ${scaleY(0)} L ${scaleX(0)} ${scaleY(0)} Z`}
                fill="url(#curveGradient)"
                className="opacity-25"
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0300e1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0300e1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Main Curve Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#0300e1"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Event Markers (Reviews) */}
              {simulationPoints
                .filter((p) => p.event)
                .map((ev, i) => {
                  const cx = scaleX(ev.t);
                  const cy = scaleY(ev.r);
                  return (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="6" fill="#0300e1" stroke="white" strokeWidth="2" />
                      <line x1={cx} y1={cy} x2={cx} y2={cy - 20} stroke="#0300e1" strokeWidth="1.5" />
                      <rect
                        x={cx - 36}
                        y={cy - 36}
                        width="72"
                        height="18"
                        rx="4"
                        fill="#0300e1"
                      />
                      <text
                        x={cx}
                        y={cy - 24}
                        textAnchor="middle"
                        fill="white"
                        className="text-[9px] font-mono font-bold"
                      >
                        t = {ev.t}d
                      </text>
                    </g>
                  );
                })}

              {/* Axis Titles */}
              <text
                x={svgWidth / 2}
                y={svgHeight - 10}
                textAnchor="middle"
                className="text-xs font-mono font-bold fill-gray-600 dark:fill-gray-300"
              >
                {t.simulation.timeAxis}
              </text>
              <text
                x={-svgHeight / 2}
                y={18}
                transform="rotate(-90)"
                textAnchor="middle"
                className="text-xs font-mono font-bold fill-gray-600 dark:fill-gray-300"
              >
                {t.simulation.retentionAxis}
              </text>
            </svg>
          </div>

          {/* Mathematical Parameters Sliders & Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-brand-border dark:border-brand-darkBorder">
            
            {/* Slider 1: Forgetting Rate Lambda */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-brand-text dark:text-gray-200">
                  {t.simulation.paramLambda}
                </label>
                <span className="text-xs font-mono font-bold text-brand-blue px-2 py-0.5 rounded bg-brand-blue-light dark:bg-brand-blue/20">
                  {lambda.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0.10"
                max="0.60"
                step="0.02"
                value={lambda}
                onChange={(e) => setLambda(parseFloat(e.target.value))}
                className="w-full accent-brand-blue cursor-pointer"
              />
              <p className="text-[11px] text-brand-muted dark:text-gray-400">
                Empirically estimated at <span className="font-mono font-semibold">λ = 0.30</span> in the paper.
              </p>
            </div>

            {/* Slider 2: Learning Boost Alpha */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-brand-text dark:text-gray-200">
                  {t.simulation.paramAlpha}
                </label>
                <span className="text-xs font-mono font-bold text-brand-blue px-2 py-0.5 rounded bg-brand-blue-light dark:bg-brand-blue/20">
                  {alpha.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min="0.40"
                max="0.95"
                step="0.05"
                value={alpha}
                onChange={(e) => setAlpha(parseFloat(e.target.value))}
                className="w-full accent-brand-blue cursor-pointer"
              />
              <p className="text-[11px] text-brand-muted dark:text-gray-400">
                Reinforcement magnitude parameter (<span className="font-mono font-semibold">α = 0.70</span>).
              </p>
            </div>

            {/* Slider 3: Target Retention Threshold */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-brand-text dark:text-gray-200">
                  {t.simulation.paramThreshold}
                </label>
                <span className="text-xs font-mono font-bold text-brand-blue px-2 py-0.5 rounded bg-brand-blue-light dark:bg-brand-blue/20">
                  {threshold}%
                </span>
              </div>
              <input
                type="range"
                min="65"
                max="90"
                step="1"
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
                className="w-full accent-brand-blue cursor-pointer"
              />
              <p className="text-[11px] text-brand-muted dark:text-gray-400">
                Minimum desired mastery level before reinforcement.
              </p>
            </div>

          </div>

          {/* Mathematical Conclusion Box */}
          <div className="mt-6 p-5 rounded-2xl bg-brand-blue text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-elevated">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-200 flex items-center gap-1.5 font-bold">
                <Clock className="w-4 h-4" />
                <span>{t.simulation.derivedWindow}</span>
              </div>
              <div className="text-xl sm:text-2xl font-heading font-extrabold">
                t* = {optimalTime} Days ≈ {optimalHours}
              </div>
              <p className="text-xs text-blue-100 max-w-xl">
                Calculated via ODE decay inversion: <code className="font-mono bg-white/20 px-1.5 py-0.5 rounded text-[11px]">t* = -(1/λ) ln(R_target / R_0)</code>. Reviewing at this exact juncture prevents memory collapse while minimizing cumulative review sessions.
              </p>
            </div>

            <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-white/20 pt-3 sm:pt-0 sm:pl-6">
              <span className="text-[11px] font-mono text-blue-200 uppercase">Status</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-brand-blue flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.simulation.statusOptimized}</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
