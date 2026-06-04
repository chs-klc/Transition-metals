/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ElementData } from "../types";
import { X, Award, Flame, Zap, CheckCircle, Cpu, Atom, Thermometer, Filter, Layers } from "lucide-react";

interface MetalDetailModalProps {
  element: ElementData;
  onClose: () => void;
}

export default function MetalDetailModal({ element, onClose }: MetalDetailModalProps) {
  // Generate the visual Hund's rule spin state representation for 3d and 4s
  const getOrbitalSpins = (symbol: string): { name: string; spins: ("up" | "down" | "empty")[] }[] => {
    switch (symbol) {
      case "K":
        return [
          { name: "3d", spins: ["empty", "empty", "empty", "empty", "empty"] },
          { name: "4s", spins: ["up", "empty"] }
        ];
      case "Ca":
        return [
          { name: "3d", spins: ["empty", "empty", "empty", "empty", "empty"] },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Sc":
        return [
          { name: "3d", spins: ["up", "empty", "empty", "empty", "empty"] },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Ti":
        return [
          { name: "3d", spins: ["up", "up", "empty", "empty", "empty"] },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "V":
        return [
          { name: "3d", spins: ["up", "up", "up", "empty", "empty"] },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Cr":
        return [
          { name: "3d", spins: ["up", "up", "up", "up", "up"] }, // 3d⁵
          { name: "4s", spins: ["up", "empty"] } // 4s¹ [Anomaly!]
        ];
      case "Mn":
        return [
          { name: "3d", spins: ["up", "up", "up", "up", "up"] },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Fe":
        return [
          { name: "3d", spins: ["up", "down", "up", "up", "up", "up"].slice(0, 5) as ("up" | "down" | "empty")[] }, // Simplified to 5 boxes
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Co":
        return [
          { name: "3d", spins: ["up", "down", "up", "down", "up"].concat(["up", "up"]).slice(0, 5) as any },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Ni":
        return [
          { name: "3d", spins: ["up", "down", "up", "down", "up", "down", "up", "up"].slice(0, 5) as any },
          { name: "4s", spins: ["up", "down"] }
        ];
      case "Cu":
        return [
          { name: "3d", spins: ["up", "down", "up", "down", "up", "down", "up", "down", "up", "down"].slice(0, 5) as any }, // 3d¹⁰
          { name: "4s", spins: ["up", "empty"] } // 4s¹- Anomaly
        ];
      case "Zn":
        return [
          { name: "3d", spins: ["up", "down", "up", "down", "up", "down", "up", "down", "up", "down"].slice(0, 5) as any }, // 3d¹⁰
          { name: "4s", spins: ["up", "down"] } // 4s²
        ];
      default:
        return [];
    }
  };

  const orbitalConfig = getOrbitalSpins(element.symbol);

  // Dynamic colors for titles based on selected transition metal
  const getAccentColor = (sym: string) => {
    switch (sym) {
      case "Cr": return { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", hex: "#10b981" };
      case "Mn": return { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", hex: "#ec4899" };
      case "Fe": return { bg: "bg-amber-500/10", border: "border-amber-400", text: "text-amber-800", hex: "#d97706" };
      case "Co": return { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", hex: "#2563eb" };
      case "Ni": return { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700", hex: "#14b8a6" };
      case "Cu": return { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", hex: "#1e3a8a" };
      case "Sc":
      case "Zn": return { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", hex: "#f59e0b" };
      default: return { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", hex: "#475569" };
    }
  };

  const accent = getAccentColor(element.symbol);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-slate-250 shadow-xl p-6 md:p-8 space-y-6"
      >
        {/* Absolute Close button */}
        <button
          id="close-detail-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header Grid with dynamic icon avatar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono text-3xl font-black ${accent.bg} ${accent.text} border-2 ${accent.border}`}>
              {element.symbol}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black font-sans text-slate-900">{element.name}</h2>
                <span className="font-mono text-xs font-bold text-slate-400">Z = {element.number}</span>
              </div>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Group {element.group} • Period {element.period} • Mass {element.mass.toFixed(4)} u
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="font-mono font-semibold bg-slate-100 border text-slate-700 px-2.5 py-1 rounded-md">
              Config: {element.electronConfigShort}
            </span>
            <span className="font-mono font-semibold bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-1 rounded-md">
              1st IE: {element.firstIE} kJ/mol
            </span>
            <span className="font-mono font-semibold bg-teal-50 border border-teal-100 text-teal-750 px-2.5 py-1 rounded-md">
              Density: {element.density} g/cm³
            </span>
          </div>
        </div>

        {/* Double-column grid for specific properties */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Subshell Spins, Properties, and Key Syllabus Focus */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hund's Rule Orbiter Diagram */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-4 shadow-3xs">
              <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-200 pb-1.5 uppercase font-mono tracking-wide">
                <Atom className="w-4 h-4 text-slate-500" />
                Orbital Fillings (Hund's Rule)
              </span>

              <div className="space-y-4">
                {orbitalConfig.map((orb) => (
                  <div key={orb.name} className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-slate-500 w-6 truncate">{orb.name}</span>
                    <div className="flex gap-2">
                      {orb.spins.map((spin, sIdx) => (
                        <div
                          key={sIdx}
                          className={`w-8 h-8 border rounded flex items-center justify-center font-mono text-xs font-bold relative bg-white border-slate-300 shadow-3xs`}
                        >
                          {spin === "up" && <span className="text-indigo-600">↑</span>}
                          {spin === "down" && (
                            <span className="flex flex-col text-[10px] leading-3 text-slate-650 font-black">
                              <span>↑</span>
                              <span className="mt-[-4px]">↓</span>
                            </span>
                          )}
                          {spin === "empty" && <span className="text-slate-350 opacity-40">-</span>}
                          {/* Symmetrical pairing indicator */}
                          {spin === "down" && (
                            <span className="absolute bottom-[-2px] right-[-2.5px] w-1.5 h-1.5 bg-indigo-500 rounded-full" title="Paired Stable" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Highlight anomalous electron configurations */}
              {(element.symbol === "Cr" || element.symbol === "Cu") && (
                <div className="p-2.5 rounded-lg border border-amber-200 bg-amber-50 text-[10.5px] text-amber-800 leading-relaxed font-sans font-medium">
                  <strong>⚠️ Critical DSE Anomaly:</strong> Symmetrical full/half-filled 3d shelf provides minimized electronic repulsions and maximum exchange stability.
                </div>
              )}
            </div>

            {/* Atomic Metrics panel */}
            <div className="border border-slate-200 rounded-2xl p-4 space-y-3 shadow-3xs">
              <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-100 pb-1.5 uppercase font-mono tracking-wide">
                <Thermometer className="w-4 h-4 text-slate-500" />
                Physical Properties
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-medium block">Melting Point</span>
                  <span className="font-mono font-bold text-slate-900 mt-0.5 block">{element.meltingPoint} °C</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-medium block">Boiling Point</span>
                  <span className="font-mono font-bold text-slate-900 mt-0.5 block">{element.boilingPoint} °C</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-medium block">Atomic Radius</span>
                  <span className="font-mono font-bold text-slate-900 mt-0.5 block">{element.atomicRadius} pm</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-400 font-medium block">Density</span>
                  <span className="font-mono font-bold text-slate-900 mt-0.5 block">{element.density} g/cm³</span>
                </div>
              </div>
            </div>

            {/* General Discovery info badge */}
            <div className="text-[10px] text-slate-400 font-mono flex justify-between px-2 pt-1">
              <span>Primary Isolator: {element.discovery}</span>
              <span>DSE Syllabus VII</span>
            </div>
          </div>

          {/* Right Column: Custom Detailed HKDSE profiles (Colours, Catalysis, Complexes, Key focus points) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Scandal/Zinc debate banner if applicable */}
            {element.zincScandiumDebate && (
              <div className="border border-amber-200 bg-amber-500/5 rounded-2xl p-4 space-y-2">
                <h4 className="text-amber-800 font-bold text-xs uppercase font-mono tracking-wide flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600 animate-bounce" />
                  Is {element.symbol} a Transition Metal? (DSE Syllabus Exam Point)
                </h4>
                <p className="text-slate-700 text-xs leading-relaxed font-sans">
                  {element.zincScandiumDebate}
                </p>
              </div>
            )}

            {/* Variable Oxidation State Colors */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-3xs">
              <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-200 pb-1.5 uppercase font-mono tracking-wide">
                <Flame className="w-4 h-4 text-emerald-500" />
                Oxidation States and Aquated Colours
              </span>

              <div className="flex gap-2 flex-wrap pt-1">
                {element.colours.map((c) => (
                  <div
                    key={c.ion}
                    className="flex flex-col items-center bg-white border border-slate-205 rounded-xl p-3 w-[110px] text-center shadow-3xs"
                  >
                    <div
                      className="w-10 h-10 rounded-full border border-slate-200 shadow-inner flex items-center justify-center font-mono font-bold text-[10px] text-slate-800"
                      style={{ backgroundColor: c.hex }}
                    >
                      {c.ion}
                    </div>
                    <span className="font-sans font-bold text-[10px] text-slate-800 mt-2 truncate max-w-full block leading-none">
                      {c.name}
                    </span>
                    <span className="font-sans text-[8px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                      {c.description}
                    </span>
                  </div>
                ))}

                {element.colours.length === 0 && (
                  <span className="text-xs text-slate-400 italic">No colored aqueous compounds specified under the syllabus.</span>
                )}
              </div>
            </div>

            {/* Catalytic properties section */}
            {element.catalyticApplications.length > 0 && (
              <div className="border border-slate-200 rounded-2xl p-5 space-y-3 shadow-3xs">
                <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-100 pb-1.5 uppercase font-mono tracking-wide">
                  <Cpu className="w-4 h-4 text-sky-500" />
                  Syllabus Catalytic Applications
                </span>

                <div className="space-y-4">
                  {element.catalyticApplications.map((cat, idx) => (
                    <div key={idx} className="space-y-1.5 text-xs">
                      <div className="flex items-start justify-between font-bold text-slate-800 font-sans leading-relaxed">
                        <span>• {cat.reaction}</span>
                        <span className="text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded font-mono font-semibold text-[9px] uppercase">
                          {cat.catalystUsed}
                        </span>
                      </div>
                      <p className="text-slate-550 leading-relaxed font-sans">{cat.details}</p>
                      {cat.equation && (
                        <code className="block bg-slate-50 border border-slate-100 font-mono text-[10px] text-slate-600 p-2 rounded-lg scroll-x italic">
                          Chemical Eq: {cat.equation}
                        </code>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complex coordination ions details */}
            {element.complexIons.length > 0 && (
              <div className="border border-slate-200 rounded-2xl p-5 space-y-3 shadow-3xs">
                <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-100 pb-1.5 uppercase font-mono tracking-wide">
                  <Layers className="w-4 h-4 text-purple-500" />
                  Complex Coordination Ions
                </span>

                <div className="space-y-4 text-xs">
                  {element.complexIons.map((comp) => (
                    <div key={comp.formula} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <code className="text-[11px] font-mono font-bold text-indigo-750 bg-indigo-50 px-1.5 py-0.5 rounded">
                            {comp.formula}
                          </code>
                          <span className="font-sans font-bold text-slate-700">{comp.name}</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-[10.5px] font-sans">{comp.details}</p>
                        <div className="text-[9.5px] text-slate-400 font-mono">
                          Ligands: {comp.ligands} • Coord: {comp.coordinationNumber}
                        </div>
                      </div>

                      {/* Mini complex visualization banner */}
                      <div className="md:w-32 flex flex-col items-center justify-center p-2.5 bg-white border rounded border-slate-100 text-center shadow-3xs gap-1 flex-shrink-0">
                        <div
                          className="w-5 h-5 rounded-full border border-slate-200"
                          style={{ backgroundColor: comp.hex }}
                        />
                        <span className="font-mono text-[9px] font-bold text-slate-800">{comp.colour}</span>
                        <span className="font-sans font-bold text-[8px] text-indigo-600 tracking-wider uppercase">
                          {comp.shape}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key DSE Exam highlights checklist */}
            <div className="border border-slate-200 rounded-2xl p-5 space-y-3 shadow-3xs">
              <span className="text-slate-800 font-bold text-xs flex items-center gap-1.5 border-b border-slate-100 pb-1.5 uppercase font-mono tracking-wide">
                <CheckCircle className="w-4 h-4 text-indigo-500 animate-pulse" />
                HKDSE Syllabus Exam Highlights
              </span>
              <ul className="space-y-2 text-xs">
                {element.hkdseKeyFocus.map((focus, fIdx) => (
                  <li key={fIdx} className="flex gap-2 items-start leading-relaxed text-slate-700 font-sans">
                    <span className="text-indigo-600 font-bold font-mono pt-0.5">#{fIdx + 1}</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
