/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ColouredIon {
  ion: string;
  name: string;
  hex: string;
  description: string;
}

export interface CatalyticRole {
  reaction: string;
  catalystUsed: string;
  details: string;
  equation?: string;
}

export interface ComplexIonInfo {
  formula: string;
  name: string;
  shape: string;
  coordinationNumber: number;
  colour: string;
  hex: string;
  ligands: string;
  details: string;
}

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  period: number;
  group: string;
  category: "s-block" | "transition-metal" | "post-transition" | "other";
  mass: number;
  electronConfig: string;
  electronConfigShort: string;
  oxidationStates: number[];
  oxidationColors: { state: number; colorHex: string; ionName: string }[];
  oxidationStatesDesc: string;
  density: number; // g/cm³
  meltingPoint: number; // °C
  boilingPoint: number; // °C
  atomicRadius: number; // pm
  firstIE: number; // kJ/mol
  colours: ColouredIon[];
  catalyticApplications: CatalyticRole[];
  complexIons: ComplexIonInfo[];
  hkdseKeyFocus: string[];
  zincScandiumDebate?: string; // Explanation of why it is or isn't a transition metal in HKDSE
  generalInfo: string;
  discovery: string;
}

export interface QuizQuestion {
  id: number;
  type: "mc" | "structured";
  question: string;
  options?: string[]; // for MC questions
  correctAnswer: string | number; // choice (A, B, C, D) or keyword list
  explanation: string;
  hkdseYearReference?: string; // HKDSE past exam style year reference
  syllabusTopic: string;
}

export type TrendMetric = "atomicRadius" | "firstIE" | "density" | "meltingPoint";
