/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ElementData } from "../types";
import { ELEMENTS_DATA } from "../data";
import { HelpCircle, Star, Sparkles, AlertTriangle, Info, BookOpen } from "lucide-react";

interface PeriodicTableProps {
  onSelectElement: (element: ElementData) => void;
  selectedElement: ElementData | null;
}

export default function PeriodicTable({ onSelectElement, selectedElement }: PeriodicTableProps) {
  // We want to illustrate the 4th period from potassium (Z=19) to krypton (Z=36)
  // Elements covered in ELEMENTS_DATA are 19 (K) to 30 (Zn).
  // We will add simple display card objects for 31-36 to complete the period visually.
  const pBlockPlaceholders = [
    { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p¹" },
    { number: 32, symbol: "Ge", name: "Germanium", category: "other" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p²" },
    { number: 33, symbol: "As", name: "Arsenic", category: "other" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p³" },
    { number: 34, symbol: "Se", name: "Selenium", category: "other" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p⁴" },
    { number: 35, symbol: "Br", name: "Bromine", category: "other" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p⁵" },
    { number: 36, symbol: "Kr", name: "Krypton", category: "other" as const, electronConfigShort: "[Ar] 3d¹⁰ 4s² 4p⁶" }
  ];

  const getElementColorClass = (el: ElementData | { category: string; symbol: string }) => {
    if (el.symbol === "Sc" || el.symbol === "Zn") {
      return "border-amber-300/60 bg-amber-500/5 hover:bg-amber-500/10 text-amber-900";
    }
    if (el.category === "transition-metal") {
      return "border-teal-500/60 bg-teal-500/5 hover:bg-teal-500/15 text-teal-950";
    }
    if (el.category === "s-block") {
      return "border-slate-300 bg-slate-100/60 hover:bg-slate-200/60 text-slate-700";
    }
    return "border-slate-200 bg-slate-50/50 hover:bg-slate-100/50 text-slate-400";
  };

  const getDSubshellFills = (symbol: string) => {
    switch (symbol) {
      case "K": return "3d⁰";
      case "Ca": return "3d⁰";
      case "Sc": return "3d¹";
      case "Ti": return "3d²";
      case "V": return "3d³";
      case "Cr": return "3d⁵ [Anomaly]";
      case "Mn": return "3d⁵";
      case "Fe": return "3d⁶";
      case "Co": return "3d⁷";
      case "Ni": return "3d⁸";
      case "Cu": return "3d¹⁰ [Anomaly]";
      case "Zn": return "3d¹⁰";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Educational Header Banner explaining the d-block placement */}
      <div className="bg-gradient-to-r from-slate-100 to-cyan-50/50 border border-slate-200/80 rounded-2xl p-5 shadow-xs">
        <h3 className="text-slate-900 font-display font-bold flex items-center gap-2 text-base md:text-lg">
          <BookOpen className="w-5 h-5 text-cyan-600 animate-pulse" />
          The d-Block Transition Series (Period 4)
        </h3>
        <p className="text-slate-600 text-sm mt-1.5 leading-relaxed max-w-4xl">
          Transition metals lie between the reactive <strong>s-block</strong> metals (alkali & alkaline earth) and the <strong>p-block</strong> non-metals.
          In this series, the <strong>3d subshell</strong> is progressively filled. Click on any element card to access its full HKDSE profile, including 
          electron configurations, colored complex ions, catalytic uses, and classic syllabus focus areas.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-200/60 text-xs">
          <span className="text-slate-500 font-medium font-sans">Visual Guide:</span>
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-3xs">
            <div className="w-3 h-3 bg-slate-150 rounded border border-slate-300"></div>
            <span className="text-slate-600">s-block Baseline</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cyan-50/80 px-2.5 py-1 rounded-md border border-cyan-200 shadow-3xs">
            <div className="w-3 h-3 bg-cyan-500/20 rounded border border-cyan-400"></div>
            <span className="text-cyan-800 font-semibold">Typical Transition Metal</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50/60 px-2.5 py-1 rounded-md border border-amber-200 shadow-3xs">
            <div className="w-3 h-3 bg-amber-400/20 rounded border border-amber-400"></div>
            <span className="text-amber-800 font-semibold">DSE Exception (Sc / Zn)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50/30 px-2.5 py-1 rounded-md border border-slate-200 shadow-3xs">
            <div className="w-3 h-3 bg-slate-50 rounded border border-slate-250 opacity-60"></div>
            <span className="text-slate-400">p-block (Inactive Profiles)</span>
          </div>
        </div>
      </div>

      {/* Interactive Grid of Period 4 */}
      <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-xs overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-500 inline" /> Period 4 Row Layout
          </span>
          <span className="text-xs text-cyan-600 font-medium font-display hidden sm:inline-block font-semibold">
            *Note: Cr (24) and Cu (29) possess anomalous half-filled/fully-filled d-orbitals!
          </span>
        </div>

        {/* Outer scroll wrapper for smaller screens */}
        <div className="overflow-x-auto mt-6">
          <div className="min-w-[840px] grid gap-2 pb-2" style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}>
            
            {/* Row index labels (left margin spacer) */}
            {ELEMENTS_DATA.map((element) => {
              const isSelected = selectedElement?.number === element.number;
              const subshellText = getDSubshellFills(element.symbol);

              return (
                <div
                  key={element.number}
                  id={`element-btn-${element.symbol}`}
                  onClick={() => onSelectElement(element)}
                  className={`relative flex flex-col justify-between h-28 p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 shadow-3xs ${getElementColorClass(element)} ${
                    isSelected ? "ring-2 ring-teal-600 ring-offset-2 border-transparent scale-98 shadow-sm" : ""
                  }`}
                  style={{
                    // map group numbers to grid columns
                    gridColumn: element.number === 19 ? 1 : element.number === 20 ? 2 : element.number - 18
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-slate-400 opacity-80">{element.number}</span>
                    {element.zincScandiumDebate && (
                      <span className="w-2 h-2 rounded-full bg-amber-500" title="DSE Exception" />
                    )}
                  </div>

                  <div className="mt-1">
                    <span className="font-display font-black text-2xl tracking-tight block leading-none">{element.symbol}</span>
                    <span className="font-sans text-[11px] font-bold block truncate mt-0.5">{element.name}</span>
                  </div>

                  <div className="mt-auto pt-1.5 border-t border-slate-200/50 flex flex-col justify-end">
                    <span className="font-mono text-[9px] text-slate-500 tracking-tighter truncate">
                      {element.electronConfigShort}
                    </span>
                    <span className="font-mono text-[8px] text-slate-400 font-semibold">
                      {subshellText}
                    </span>
                  </div>

                  {/* Highlighting active indicators */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute inset-0 rounded-xl border-2 border-teal-600 pointer-events-none"
                    />
                  )}
                </div>
              );
            })}

            {/* P-Block placeholders to give a physical context to the transition series */}
            {pBlockPlaceholders.map((pEl) => (
              <div
                key={pEl.number}
                className="relative flex flex-col justify-between h-28 p-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/20 text-slate-400 opacity-60 cursor-not-allowed select-none"
                style={{ gridColumn: pEl.number - 18 }}
              >
                <span className="font-mono text-[10px] text-slate-300">{pEl.number}</span>
                <div>
                  <span className="font-sans font-bold text-xl tracking-tight block leading-none">{pEl.symbol}</span>
                  <span className="font-sans text-[10px] block truncate mt-0.5">{pEl.name}</span>
                </div>
                <div className="mt-auto pt-1.5 border-t border-slate-100 flex flex-col justify-end">
                  <span className="font-mono text-[9px] text-slate-300 truncate">
                    {pEl.electronConfigShort}
                  </span>
                  <span className="font-mono text-[8px] text-slate-300 font-semibold">p-block</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help indicators below periodic table */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between text-xs text-slate-500 pt-3 border-t border-slate-100/80">
          <span className="flex items-center gap-1.5 font-medium">
            <Info className="w-4 h-4 text-slate-400" />
            Click on any highlighted element above to inspect its atomic, chemical, and HKDSE syllabus properties.
          </span>
          <span className="font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
            d-orbitals are filled from Sc (3d¹) to Zn (3d¹⁰)
          </span>
        </div>
      </div>
    </div>
  );
}
