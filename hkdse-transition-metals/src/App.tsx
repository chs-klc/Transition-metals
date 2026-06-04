/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ELEMENTS_DATA } from "./data";
import { ElementData } from "./types";
import { 
  Atom, 
  Activity, 
  Search, 
  Trophy, 
  BookOpen, 
  Sparkles, 
  X, 
  GraduationCap, 
  Layers, 
  HelpCircle, 
  ChevronRight, 
  AlertTriangle,
  Lightbulb,
  Cpu
} from "lucide-react";

import PeriodicTable from "./components/PeriodicTable";
import TrendGraphs from "./components/TrendGraphs";
import QuizSection from "./components/QuizSection";
import MetalDetailModal from "./components/MetalDetailModal";

const SEARCH_TAGS = [
  { label: "All d-block", query: "" },
  { label: "⚙️ Industrial Catalysts", query: "catalyst" },
  { label: "🎨 Coloured Compounds", query: "coloured" },
  { label: "🔋 Anomalous Configs", query: "anomaly" },
  { label: "⚖️ DSE Exceptions/White Salts", query: "exception" },
  { label: "🔬 Complex Ions", query: "complex" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"table" | "trends" | "search" | "quiz">("table");
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Search filter core logic
  const filteredElements = useMemo(() => {
    const combinedQuery = (searchQuery + " " + selectedTag).toLowerCase().trim();
    if (!combinedQuery) return ELEMENTS_DATA;

    return ELEMENTS_DATA.filter((el) => {
      // Check simple parameters
      const nameMatch = el.name.toLowerCase().includes(combinedQuery);
      const symbolMatch = el.symbol.toLowerCase().includes(combinedQuery);
      const numMatch = el.number.toString() === combinedQuery;
      
      // Check config & focus points
      const configMatch = el.electronConfigShort.toLowerCase().includes(combinedQuery);
      const focusMatch = el.hkdseKeyFocus.some(f => f.toLowerCase().includes(combinedQuery));

      // Check anomalous tag
      const isAnomaly = combinedQuery.includes("anomaly");
      const anomalyMatch = isAnomaly && (el.symbol === "Cr" || el.symbol === "Cu");

      // Check exceptions tag
      const isException = combinedQuery.includes("exception");
      const exceptionMatch = isException && (el.symbol === "Sc" || el.symbol === "Zn");

      // Check colours
      const colourMatch = el.colours.some(c => 
        c.name.toLowerCase().includes(combinedQuery) || 
        c.ion.toLowerCase().includes(combinedQuery) ||
        c.description.toLowerCase().includes(combinedQuery)
      ) || (combinedQuery.includes("coloured") && el.colours.length > 0 && el.symbol !== "Sc" && el.symbol !== "Zn");

      // Check catalyst applications
      const catMatch = el.catalyticApplications.some(c => 
        c.reaction.toLowerCase().includes(combinedQuery) || 
        c.catalystUsed.toLowerCase().includes(combinedQuery) ||
        c.details.toLowerCase().includes(combinedQuery)
      ) || (combinedQuery.includes("catalyst") && el.catalyticApplications.length > 0);

      // Check complex ions
      const complexMatch = el.complexIons.some(c => 
        c.formula.toLowerCase().includes(combinedQuery) ||
        c.name.toLowerCase().includes(combinedQuery) ||
        c.details.toLowerCase().includes(combinedQuery)
      ) || (combinedQuery.includes("complex") && el.complexIons.length > 0);

      return nameMatch || symbolMatch || numMatch || configMatch || focusMatch || anomalyMatch || exceptionMatch || colourMatch || catMatch || complexMatch;
    });
  }, [searchQuery, selectedTag]);

  const handleSelectElement = (el: ElementData) => {
    setSelectedElement(el);
  };

  const handleQuickSearch = (query: string, tagLabel: string) => {
    setSearchQuery(query);
    setSelectedTag(query);
    setActiveTab("search");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Educational branding upper-margin warning bar */}
      <div className="bg-[#0f172a] text-[#f8fafc] border-b border-slate-800 py-3 px-6 text-center text-xs font-semibold tracking-wide font-sans flex items-center justify-center gap-2 shrink-0 shadow-sm">
        <div className="w-5 h-5 bg-cyan-500 rounded flex items-center justify-center text-[10px] text-slate-950 font-bold font-mono">Sc</div>
        <span className="font-display text-slate-100">HKDSE Chemistry Syllabus Assistant • Ultimate Guide to <span className="text-cyan-400 font-bold">d-Block Transition Chemistry</span></span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 flex-grow flex flex-col gap-6">
        
        {/* Navigation Hero Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2.5 rounded-lg bg-[#0f172a] text-cyan-400 font-mono text-[10px] font-bold tracking-widest uppercase shadow-xs border border-slate-700">
                Topic VIII
              </span>
              <span className="text-xs text-cyan-600 font-bold font-mono tracking-wider">
                HKDSE CHEMICAL SYSTEMS
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] font-display">
              Characteristics of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Transition Metals</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Explore electronic subshells, coordination coordinates, variable oxidation colours, and catalytic properties. 
              Tailored precisely to the HKDSE syllabus parameters to help students secure full score points.
            </p>
          </div>

          {/* Quick Stats study helpers */}
          <div className="flex gap-4 text-xs bg-white border border-slate-205 rounded-2xl p-4 shadow-sm">
            <div className="text-center px-2">
              <span className="text-cyan-600 font-display font-black block text-2xl">10</span>
              <span className="text-slate-500 font-semibold text-[10px] tracking-wider uppercase">d-Block Metals</span>
            </div>
            <div className="border-r border-slate-200" />
            <div className="text-center px-2">
              <span className="text-indigo-600 font-display font-black block text-2xl">15+</span>
              <span className="text-slate-500 font-semibold text-[10px] tracking-wider uppercase">Coloured Ions</span>
            </div>
            <div className="border-r border-slate-200" />
            <div className="text-center px-2">
              <span className="text-emerald-600 font-display font-black block text-2xl">8</span>
              <span className="text-slate-500 font-semibold text-[10px] tracking-wider uppercase">DSE Scenarios</span>
            </div>
          </div>
        </header>

        {/* Global Floating Search bar with Instant Matches */}
        <div className="w-full relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              id="global-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Quick search properties (e.g., 'Haber Process', 'Cr anomaly', 'blue', 'coordinate bond', 'Zn exception')..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-250 rounded-2xl text-sm font-sans tracking-wide leading-relaxed shadow-sm focus:outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live quick dropdown match count indicator */}
          {searchQuery && (
            <div className="absolute top-[102%] left-0 right-0 z-20 bg-slate-900 text-slate-100 px-4 py-2 rounded-xl text-xs flex justify-between items-center shadow-md font-mono">
              <span>Found {filteredElements.length} element profiles matching "{searchQuery}"</span>
              <button 
                onClick={() => {
                  setActiveTab("search");
                }}
                className="text-cyan-400 hover:underline flex items-center gap-0.5 font-bold font-sans cursor-pointer"
              >
                Show in properties list <ChevronRight className="w-3.5 h-3.5 inline" />
              </button>
            </div>
          )}
        </div>

        {/* Interactive Tab navigation bar */}
        <div className="flex border-b border-slate-200">
          <div className="flex gap-1 overflow-x-auto w-full no-scrollbar pb-[1px]">
            <button
              id="tab-btn-table"
              onClick={() => setActiveTab("table")}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-display font-semibold text-sm tracking-wide transition-all cursor-pointer truncate ${
                activeTab === "table"
                  ? "border-cyan-600 text-cyan-700 bg-cyan-50/20"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/40"
              }`}
            >
              <Atom className="w-4 h-4" />
              Periodic Table View
            </button>
            <button
              id="tab-btn-trends"
              onClick={() => setActiveTab("trends")}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-display font-semibold text-sm tracking-wide transition-all cursor-pointer truncate ${
                activeTab === "trends"
                  ? "border-cyan-600 text-cyan-700 bg-cyan-50/20"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/40"
              }`}
            >
              <Activity className="w-4 h-4" />
              Detailed Trends Graph
            </button>
            <button
              id="tab-btn-search"
              onClick={() => setActiveTab("search")}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-display font-semibold text-sm tracking-wide transition-all cursor-pointer truncate ${
                activeTab === "search"
                  ? "border-cyan-600 text-cyan-700 bg-cyan-50/20"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/40"
              }`}
            >
              <Search className="w-4 h-4" />
              Search & Filters ({filteredElements.length})
            </button>
            <button
              id="tab-btn-quiz"
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-display font-semibold text-sm tracking-wide transition-all cursor-pointer truncate ${
                activeTab === "quiz"
                  ? "border-cyan-600 text-cyan-700 bg-cyan-50/20"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/40"
              }`}
            >
              <Trophy className="w-4 h-4" />
              Exam Prep quiz
            </button>
          </div>
        </div>

        {/* Dynamic Panel Content loaded based on Active Tab */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              {activeTab === "table" && (
                <div className="space-y-6">
                  <PeriodicTable
                    onSelectElement={handleSelectElement}
                    selectedElement={selectedElement}
                  />

                  {/* Highlights section below Table */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border rounded-2xl p-5 shadow-3xs space-y-2 border-slate-200">
                      <h4 className="font-sans font-bold text-slate-800 text-sm flex items-center gap-1.5">
                        <Cpu className="w-4.5 h-4.5 text-indigo-500" />
                        Variable Oxidation States
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        Transition metals exhibit variable oxidation states due to the close energy levels of the <strong>3d and 4s orbitals</strong>. 
                        This allows different numbers of electrons to be participation in covalent or ionic chemical bonding.
                      </p>
                      <button 
                        onClick={() => handleQuickSearch("colours", "coloured")}
                        className="text-xs font-semibold text-indigo-600 hover:underline mt-2 inline-block cursor-pointer"
                      >
                        Explore oxidation states color maps &rarr;
                      </button>
                    </div>

                    <div className="bg-white border rounded-2xl p-5 shadow-3xs space-y-2 border-slate-200">
                      <h4 className="font-sans font-bold text-slate-800 text-sm flex items-center gap-1.5">
                        <Lightbulb className="w-4.5 h-4.5 text-amber-500" />
                        Catalytic Mastery
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        They act as highly effective homogeneous or heterogeneous catalysts, using variable oxidation states to form stable intermediate compounds or 
                        providing active crystal surfaces for molecule adsorption.
                      </p>
                      <button 
                        onClick={() => handleQuickSearch("catalyst", "catalyst")}
                        className="text-xs font-semibold text-indigo-600 hover:underline mt-2 inline-block cursor-pointer"
                      >
                        Review DSE industrial catalyst equations &rarr;
                      </button>
                    </div>

                    <div className="bg-white border rounded-2xl p-5 shadow-3xs space-y-2 border-slate-200">
                      <h4 className="font-sans font-bold text-slate-800 text-sm flex items-center gap-1.5">
                        <Sparkles className="w-4.5 h-4.5 text-teal-500 font-sans" />
                        D-Subshell Electron Splitting
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        Compounds appear coloured because water or ammonia ligands split the five 3d subshells. Electrons absorb standard wavelengths 
                        of visible light to jump between these split levels, transmitting complement colors.
                      </p>
                      <button 
                        onClick={() => handleQuickSearch("complex", "complex")}
                        className="text-xs font-semibold text-indigo-600 hover:underline mt-2 inline-block cursor-pointer"
                      >
                        Inspect complex d-splitting &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "trends" && (
                <TrendGraphs
                  elements={ELEMENTS_DATA}
                  onSelectElement={handleSelectElement}
                />
              )}

              {activeTab === "search" && (
                <div className="space-y-6">
                  {/* Category Filter Tags */}
                  <div className="flex flex-wrap gap-2 pb-2">
                    {SEARCH_TAGS.map((tag) => {
                      const isSelected = selectedTag === tag.query;
                      return (
                        <button
                          key={tag.label}
                          onClick={() => {
                            setSelectedTag(tag.query);
                            setSearchQuery(""); // clean text when swapping modes
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer border ${
                            isSelected
                              ? "bg-indigo-600 text-white border-transparent shadow-xs"
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {tag.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Filtered Grid of elements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredElements.map((el) => {
                      const hasCatalyst = el.catalyticApplications.length > 0;
                      const hasComplex = el.complexIons.length > 0;

                      return (
                        <div
                          key={el.number}
                          onClick={() => handleSelectElement(el)}
                          className="bg-white border hover:border-indigo-500/80 rounded-2xl p-5 shadow-3xs cursor-pointer hover:shadow-sm transition-all duration-200 flex flex-col justify-between h-[210px] relative overflow-hidden group border-slate-205"
                        >
                          {/* Element box decoration background */}
                          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-full bg-slate-50 opacity-40 group-hover:bg-indigo-50/50 group-hover:scale-110 transition-all duration-300 -z-5 pointer-events-none" />

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-slate-400 font-bold">Z = {el.number}</span>
                              {el.zincScandiumDebate && (
                                <span className="text-[9px] font-bold font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 uppercase">
                                  DSE Exception
                                </span>
                              )}
                            </div>

                            <div className="flex items-baseline gap-2">
                              <span className="font-sans font-black text-2xl text-slate-900 leading-none">{el.symbol}</span>
                              <span className="font-sans font-bold text-sm text-slate-650 truncate">{el.name}</span>
                            </div>

                            {/* Minimal key features list for quick assessment */}
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                              {el.hkdseKeyFocus[0]}
                            </p>
                          </div>

                          {/* Attribute tags at bottom of thumbnail */}
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 flex-shrink-0">
                            <span className="font-mono bg-slate-100/80 text-slate-600 px-2 py-0.5 rounded text-[10px] font-semibold">
                              {el.electronConfigShort}
                            </span>
                            {hasCatalyst && (
                              <span className="font-mono bg-sky-50 text-sky-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                #Catalyst
                              </span>
                            )}
                            {hasComplex && (
                              <span className="font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                #Complex
                              </span>
                            )}
                            {el.colours.length > 0 && el.symbol !== "Sc" && el.symbol !== "Zn" && (
                              <span className="font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                #Coloured
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {filteredElements.length === 0 && (
                      <div className="col-span-full py-16 text-center text-slate-400 font-sans border-2 border-dashed border-slate-200 rounded-3xl">
                        <AlertTriangle className="w-10 h-10 text-slate-350 mx-auto mb-3" />
                        <span className="block font-bold">No Syllabus Profiles Matched</span>
                        <span className="text-xs mt-1 block">Try searching wider terms like "chlorine", "Contact", or clear your tags.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "quiz" && (
                <QuizSection />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Detailed Modal component anchor */}
        <AnimatePresence>
          {selectedElement && (
            <MetalDetailModal
              element={selectedElement}
              onClose={() => setSelectedElement(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Styled Human Footer compliant with the scope rules */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center border-t border-slate-800 shrink-0 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <div className="space-y-1 text-left">
            <span className="font-bold text-slate-200 block">HKDSE Chemistry Transition Metals Study companion</span>
            <span>Developed for high school chemistry educators and students targeting DSE syllabus standard results.</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-help" title="d-electron subshell rules">d-Orbital Series</span>
            <span>•</span>
            <span className="hover:text-white cursor-help" title="Contact and Haber catalyst definitions">Industrial Mechanics</span>
            <span>•</span>
            <span className="hover:text-white cursor-help" title="Qualitative hydrated color complexes">Complex Ions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
