/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ElementData, TrendMetric } from "../types";
import { ELEMENTS_DATA } from "../data";
import { TrendingUp, BarChart2, Lightbulb, ExternalLink, HelpCircle } from "lucide-react";

interface TrendGraphsProps {
  elements: ElementData[];
  onSelectElement: (element: ElementData) => void;
}

const METRICS_CONFIG: Record<
  TrendMetric,
  {
    label: string;
    unit: string;
    min: number;
    max: number;
    color: string;
    description: string;
    hkdseFocus: string;
  }
> = {
  atomicRadius: {
    label: "Atomic Radius",
    unit: "pm",
    min: 100,
    max: 240,
    color: "#06b6d4", // cyan
    description: "The measure of the size of the neutral atom. Broadly constant across the d-block after a steep drop from s-block.",
    hkdseFocus: "Key DSE Concept: The atomic radius drops sharply from s-block (K, Ca) because shielding remains constant while nuclear charge increases. But, across the transition metal series (Sc to Cu), the radius decreases only SLIGHTLY. Added electrons go into the inner 3d subshell, shielding outer 4s electrons and counteracting the increased nuclear charge. Zinc (Zn) increases slightly because its complete 3d¹⁰ shell causes increased inter-electronic repulsion."
  },
  firstIE: {
    label: "1st Ionization Energy",
    unit: "kJ/mol",
    min: 350,
    max: 950,
    color: "#6366f1", // indigo
    description: "The energy required to remove the first electron from a gaseous atom. Shows a general upward trend with chemical spikes.",
    hkdseFocus: "Key DSE Concept: The first I.E. generally increases slowly across the d-block as nuclear charge increases, drawing electrons closer. Zinc (Zn) exhibits a massive spike (906 kJ/mol) because it possesses a highly stable completely filled 4s² outer shell on top of a 3d¹⁰ shell, making it exceptionally resilient to electron removal."
  },
  density: {
    label: "Density",
    unit: "g/cm³",
    min: 0,
    max: 10,
    color: "#0d9488", // teal
    description: "Mass per unit volume. Mass increases but atomic size stays small, causing a massive surge in density within the transition series.",
    hkdseFocus: "Key DSE Concept: Density rises dramatically from d-block start (Sc: 2.99) to Copper (8.96). Because atomic radius remains small and relatively constant due to shielding, but molecular weight increases steadily, atoms pack heavier nuclei into almost identical sizes. Zinc drops to 7.14 because of its weaker metallic bonding and larger atomic radius (expanded by 3d¹⁰ electron repulsion)."
  },
  meltingPoint: {
    label: "Melting Point",
    unit: "°C",
    min: 0,
    max: 2100,
    color: "#dc2626", // red
    description: "The temperature at which the metallic lattice collapses into a liquid. Deeply determined by the strength of metallic bonding.",
    hkdseFocus: "Key DSE Concept: Melting point peaks at Chromium (1907°C) because Cr ([Ar] 3d⁵ 4s¹) has 6 unpaired valence electrons available to participate in the delocalized sea, strengthening metallic bonding. It drops at Manganese (1246°C) because its stable half-filled 3d⁵ shell keeps electrons localized, and plunges at Zinc (419.5°C) because its completely filled 3d¹⁰ shell does not participate in bonding at all, leaving only 2 electrons in 4s to bind the lattice."
  }
};

export default function TrendGraphs({ elements, onSelectElement }: TrendGraphsProps) {
  const [activeMetric, setActiveMetric] = useState<TrendMetric>("meltingPoint");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const config = METRICS_CONFIG[activeMetric];

  // SVG dimensions
  const svgWidth = 820;
  const svgHeight = 380;
  const paddingLeft = 70;
  const paddingRight = 40;
  const paddingTop = 40;
  const paddingBottom = 65;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  // Calculate coordinates
  const points = elements.map((el, index) => {
    const val = el[activeMetric] as number;
    const x = paddingLeft + (index / (elements.length - 1)) * chartWidth;
    // inverse Y since SVG coordinate y=0 is top
    const yRange = config.max - config.min;
    const yRatio = (val - config.min) / yRange;
    const y = svgHeight - paddingBottom - yRatio * chartHeight;
    return { x, y, element: el, value: val };
  });

  // SVG Line path
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  // Custom detailed syllabus note for each hovered element under the plotted metric
  const getSyllabusElementNote = (symbol: string): string => {
    switch (activeMetric) {
      case "atomicRadius":
        if (symbol === "K") return "K has 4 electron shells with only 1 valence proton; it has the largest atomic size.";
        if (symbol === "Ca") return "Ca's atomic size is smaller than K because of increased nuclear charge pulling the 4s² shell inwards.";
        if (symbol === "Sc") return "Sc is the entry of 3d filling, which begins shielding outer shell electrons.";
        if (symbol === "Cr" || symbol === "Cu") return `${symbol} has anomalous electron configuration, but its radius fits the d-block slight constant contraction.`;
        if (symbol === "Zn") return "Zn has a fully filled 3d¹⁰ shell. Increased electronic repulsion expands its valence shell slightly.";
        return `${symbol} has similar atomic radius as adjacent d-block elements because shielding of 3d electrons counterbalances increased atomic charge.`;
      
      case "firstIE":
        if (symbol === "K") return "K readily loses its single 4s¹ electron; lowest energy required in the row.";
        if (symbol === "Ca") return "Shielded 4s² removal is harder than potassium due to Ca's increased nuclear charge.";
        if (symbol === "Mn") return "Mn is stable as [Ar] 3d⁵ 4s². Breaking this symmetrical system requires a moderate energy surge.";
        if (symbol === "Zn") return "Zn is extraordinarily stable ([Ar] 3d¹⁰ 4s²). Removing a 4s electron requires enormous energy because its orbitals are fully filled.";
        return `Slow, minor increase in ionization energy for ${symbol} as nuclear charge gradually rises across the period.`;

      case "density":
        if (symbol === "K") return "Alkali metals like Potassium have low densities; it actually floats on water (0.89 g/cm³).";
        if (symbol === "Ca") return "S-block metal density is very low due to wide metallic crystals and light nuclei.";
        if (symbol === "Sc") return "Scandium marks a significant density jump as the filling of d-orbitals begins packing atoms tighter.";
        if (symbol === "Fe") return "Heavy iron nuclei and tight metallic bond pack together tightly, reaching 7.87 g/cm³.";
        if (symbol === "Cu") return "Copper has the highest density here (8.96 g/cm³) since its atoms are heavy and packed tightly.";
        if (symbol === "Zn") return "Zinc drops because its filled 3d¹⁰ electron repulsion spreads atoms slightly, weakening cellular pack density.";
        return `Density of ${symbol} increases as atomic mass goes up but atomic volume does not expand.`;

      case "meltingPoint":
        if (symbol === "K") return "Weak metallic bonding (1 delocalized electron, wide lattice) makes Potassium melt at 63.5°C.";
        if (symbol === "Ca") return "Melts at 842°C. Metallic bond is slightly stronger than potassium as Ca donates 2 valence electrons.";
        if (symbol === "Cr") return "Cr peaks (1907°C) because its anomalous config ([Ar] 3d⁵ 4s¹) has 6 unpaired electrons that form ultra-strong metallic bonds.";
        if (symbol === "Mn") return "Mn drops to 1246°C. Symmetrical half-filled 3d⁵ shell localizes electrons, reducing their delocalization in bonding.";
        if (symbol === "Fe") return "High melting point (1538°C) due to strong metallic bonds, but less than Chromium as d-electrons begin pairing.";
        if (symbol === "Zn") return "Zn's melting point is extremely low (419.5°C) because its 3d¹⁰ is completely filled and does NOT participate in metallic bonding.";
        return `${symbol} forms stable high-melting metallic crystals in d-block.`;
    }
    return "";
  };

  return (
    <div className="space-y-6">
      {/* Top Controls and Metric Selectors */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <div>
          <h3 className="text-slate-800 font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-505" />
            HKDSE Trend Analyzer
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Toggle properties to visualize trends across the 4th Period transition block.</p>
        </div>

        {/* Metric selection buttons */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(METRICS_CONFIG) as TrendMetric[]).map((metric) => {
            const isActive = activeMetric === metric;
            const metColor = METRICS_CONFIG[metric].color;

            return (
              <button
                key={metric}
                id={`trend-btn-${metric}`}
                onClick={() => {
                  setActiveMetric(metric);
                  setHoveredIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 border cursor-pointer ${
                  isActive
                    ? "bg-white text-slate-800 shadow-3xs"
                    : "bg-slate-100/50 hover:bg-slate-100 text-slate-500 hover:text-slate-700"
                }`}
                style={{
                  borderColor: isActive ? metColor : "rgba(226, 232, 240, 0.8)",
                  borderWidth: "1.5px"
                }}
              >
                {METRICS_CONFIG[metric].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Graph Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SVG Graph Display */}
        <div className="lg:col-span-2 border border-slate-200/80 bg-white rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <span className="font-sans font-bold text-slate-800 text-sm flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-slate-400" />
              {config.label} Trend Graph ({config.unit})
            </span>
            <div className="flex gap-2 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-slate-100 border rounded-full inline-block"></span> s-block
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-teal-100 border rounded-full inline-block"></span> transition
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-amber-100 border rounded-full inline-block"></span> special (d-block)
              </span>
            </div>
          </div>

          {/* SVG Graph container */}
          <div className="relative w-full aspect-16/9 md:aspect-21/9 lg:aspect-auto h-[260px] overflow-visible">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid Lines helper lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const yVal = config.max - ratio * (config.max - config.min);
                const yPos = paddingTop + ratio * chartHeight;
                return (
                  <g key={ratio} className="opacity-40">
                    <line
                      x1={paddingLeft}
                      y1={yPos}
                      x2={svgWidth - paddingRight}
                      y2={yPos}
                      stroke="#cbd5e1"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingLeft - 10}
                      y={yPos + 4}
                      fill="#94a3b8"
                      className="font-mono text-[10px] text-right font-bold"
                      textAnchor="end"
                    >
                      {Math.round(yVal)}
                    </text>
                  </g>
                );
              })}

              {/* Plotted Line Path with custom color */}
              <motion.path
                key={activeMetric}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                d={linePath}
                fill="none"
                stroke={config.color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Grid markers and ticks for elements (X axis) */}
              {elements.map((el, i) => {
                const pt = points[i];
                return (
                  <g key={el.symbol} className="overflow-visible">
                    {/* Vertical guideline */}
                    <line
                      x1={pt.x}
                      y1={paddingTop}
                      x2={pt.x}
                      y2={svgHeight - paddingBottom}
                      stroke="#f1f5f9"
                      strokeWidth="1.5"
                      className="pointer-events-none"
                    />

                    {/* Tick labels */}
                    <text
                      x={pt.x}
                      y={svgHeight - paddingBottom + 20}
                      fill="#64748b"
                      className="font-mono text-[11px] font-bold cursor-pointer hover:fill-teal-600 transition-colors"
                      textAnchor="middle"
                      onClick={() => onSelectElement(el)}
                    >
                      {el.symbol}
                    </text>
                    <text
                      x={pt.x}
                      y={svgHeight - paddingBottom + 34}
                      fill="#94a3b8"
                      className="font-mono text-[8px]"
                      textAnchor="middle"
                    >
                      Z={el.number}
                    </text>

                    {/* Interactive Circle Nodes */}
                    <motion.circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredIndex === i ? 9 : 5.5}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      fill={
                        el.symbol === "Sc" || el.symbol === "Zn"
                          ? "#f59e0b" // amber
                          : el.category === "transition-metal"
                          ? "#0d9488" // teal
                          : "#64748b" // slate
                      }
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer filter drop-shadow-sm"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => onSelectElement(el)}
                    />
                  </g>
                );
              })}

              {/* Dynamic tooltip box inside SVG coordinates when mouse is close to a node */}
              <AnimatePresence>
                {hoveredIndex !== null && (
                  <g className="pointer-events-none">
                    <g>
                      {/* Place tooltip box above the active point */}
                      <rect
                        x={Math.min(
                          Math.max(points[hoveredIndex].x - 110, 10),
                          svgWidth - 230
                        )}
                        y={Math.max(points[hoveredIndex].y - 95, 10)}
                        width="220"
                        height="80"
                        rx="8"
                        fill="#0f172a"
                        opacity="0.95"
                      />
                      <text
                        x={Math.min(
                          Math.max(points[hoveredIndex].x - 110, 10),
                          svgWidth - 230
                        ) + 12}
                        y={Math.max(points[hoveredIndex].y - 95, 10) + 20}
                        fill="white"
                        className="font-sans font-bold text-xs"
                      >
                        {points[hoveredIndex].element.name} ({points[hoveredIndex].element.symbol})
                      </text>
                      <text
                        x={Math.min(
                          Math.max(points[hoveredIndex].x - 110, 10),
                          svgWidth - 230
                        ) + 12}
                        y={Math.max(points[hoveredIndex].y - 95, 10) + 38}
                        fill="#38bdf8"
                        className="font-mono text-xs font-bold"
                      >
                        Value: {points[hoveredIndex].value} {config.unit}
                      </text>
                      <text
                        x={Math.min(
                          Math.max(points[hoveredIndex].x - 110, 10),
                          svgWidth - 230
                        ) + 12}
                        y={Math.max(points[hoveredIndex].y - 95, 10) + 54}
                        fill="#94a3b8"
                        className="font-sans text-[10px] leading-relaxed"
                      >
                        Config: {points[hoveredIndex].element.electronConfigShort}
                      </text>
                      <text
                        x={Math.min(
                          Math.max(points[hoveredIndex].x - 110, 10),
                          svgWidth - 230
                        ) + 12}
                        y={Math.max(points[hoveredIndex].y - 95, 10) + 68}
                        fill="#a7f3d0"
                        className="font-sans text-[9px] font-bold"
                      >
                        Click to view complete details
                      </text>
                    </g>
                  </g>
                )}
              </AnimatePresence>
            </svg>
          </div>
        </div>

        {/* Diagnostic Syllabus Notes panel on the right */}
        <div className="border border-slate-205 bg-slate-50 rounded-2xl p-5 shadow-3xs flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-slate-800 font-bold text-sm flex items-center gap-1.5 border-b border-slate-200 pb-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Syllabus High Score Tips
            </h4>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              {config.description}
            </p>

            <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-3xs">
              <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                HKDSE Syllabus Focus
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                {config.hkdseFocus}
              </p>
            </div>
          </div>

          {/* Interactive node commentary */}
          <div className="mt-6 pt-3 border-t border-slate-200">
            <h5 className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" /> Hover node explanation
            </h5>
            <div className="bg-slate-200/40 rounded-lg p-3 text-[11px] text-slate-600 italic min-h-[64px] border border-dashed border-slate-200">
              {hoveredIndex !== null ? (
                <div>
                  <strong className="text-slate-700 font-sans not-italic block mb-0.5">
                    {elements[hoveredIndex].name} ({elements[hoveredIndex].symbol})
                  </strong>
                  <span className="not-italic block mt-0.5">{getSyllabusElementNote(elements[hoveredIndex].symbol)}</span>
                </div>
              ) : (
                <span className="text-slate-400 font-medium">Hover over any node on the graph to display its HKDSE explanation.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
