/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementData, QuizQuestion } from "./types";

export const ELEMENTS_DATA: ElementData[] = [
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    period: 4,
    group: "1 (s-block)",
    category: "s-block",
    mass: 39.0983,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    electronConfigShort: "[Ar] 4s¹",
    oxidationStates: [1],
    oxidationColors: [{ state: 1, colorHex: "#ffffff", ionName: "Potassium ion (K⁺)" }],
    oxidationStatesDesc: "Only possesses a single stable oxidation state of +1. It is extremely reactive and loses its single s-electron readily.",
    density: 0.89,
    meltingPoint: 63.5,
    boilingPoint: 759,
    atomicRadius: 227,
    firstIE: 419,
    colours: [
      {
        ion: "K⁺",
        name: "Potassium ion",
        hex: "#f3f4f6", // clear/white/colourless base
        description: "Colourless in aqueous solution. Gives a lilac flame in a flame test."
      }
    ],
    catalyticApplications: [],
    complexIons: [],
    hkdseKeyFocus: [
      "Belongs to s-block; included as a baseline comparison.",
      "Has a much lower density and melting point than transition metals due to weak metallic bonding (only 1 valence electron per atom in the delocalized sea).",
      "Forms only colourless compounds and has no variable oxidation states."
    ],
    generalInfo: "Potassium is a soft, silvery-white alkali metal that oxidizes rapidly in air and reacts vigorously with water to produce hydrogen gas.",
    discovery: "Sir Humphry Davy (1807)"
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    period: 4,
    group: "2 (s-block)",
    category: "s-block",
    mass: 40.078,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    electronConfigShort: "[Ar] 4s²",
    oxidationStates: [2],
    oxidationColors: [{ state: 2, colorHex: "#ffffff", ionName: "Calcium ion (Ca²⁺)" }],
    oxidationStatesDesc: "Forms only the +2 oxidation state by losing both 4s electrons to gain a stable noble gas configuration.",
    density: 1.54,
    meltingPoint: 842,
    boilingPoint: 1484,
    atomicRadius: 197,
    firstIE: 590,
    colours: [
      {
        ion: "Ca²⁺",
        name: "Calcium ion",
        hex: "#f3f4f6", // colourless
        description: "Colourless in aqueous solution. Gives a brick-red flame in a flame test."
      }
    ],
    catalyticApplications: [],
    complexIons: [],
    hkdseKeyFocus: [
      "An alkaline earth metal, representing the s-block limit.",
      "Melting point and density are higher than potassium due to two delocalized valence electrons per atom, but still significantly lower than transition metals.",
      "No variable oxidation states or d-subshell chemistry."
    ],
    generalInfo: "Calcium is an essential alkaline earth metal. It is highly reactive and forms a protective grey oxide-nitride layer when exposed to air.",
    discovery: "Sir Humphry Davy (1808)"
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    period: 4,
    group: "3 (d-block)",
    category: "transition-metal",
    mass: 44.9559,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
    electronConfigShort: "[Ar] 3d¹ 4s²",
    oxidationStates: [3],
    oxidationColors: [{ state: 3, colorHex: "#ffffff", ionName: "Scandium ion (Sc³⁺)" }],
    oxidationStatesDesc: "Possesses a single oxidation state of +3 in almost all of its compounds. It loses both 4s electrons and its sole 3d electron.",
    density: 2.99,
    meltingPoint: 1541,
    boilingPoint: 2836,
    atomicRadius: 162,
    firstIE: 633,
    colours: [
      {
        ion: "Sc³⁺",
        name: "Scandium(III) ion",
        hex: "#f3f4f6", // colourless
        description: "Colourless. Since the Sc³⁺ ion possesses an empty d-subshell ([Ar] 3d⁰), d-d electronic transition cannot occur, rendering its compounds white and solutions colourless."
      }
    ],
    catalyticApplications: [],
    complexIons: [],
    hkdseKeyFocus: [
      "Generally not considered a 'typical' transition metal under HKDSE criteria because its only stable ion Sc³⁺ has an empty d-subshell (3d⁰).",
      "Does not form coloured ions or compounds.",
      "Does not state variable oxidation states in standard conditions (almost exclusively +3)."
    ],
    zincScandiumDebate: "Under the HKDSE syllabus, Sc is not classified as a typical transition metal. A typical transition metal is defined as an element that forms at least one stable ion with a partially filled d-subshell. Since the Sc³⁺ ion has a 3d⁰ configuration (completely empty d-subshell), it does not satisfy this requirement.",
    generalInfo: "Scandium is a silvery-white metallic d-block element. Historically classified as a rare-earth element, it is used in aluminum alloys for structural aerospace components.",
    discovery: "Lars Fredrik Nilson (1879)"
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    period: 4,
    group: "4",
    category: "transition-metal",
    mass: 47.867,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²",
    electronConfigShort: "[Ar] 3d² 4s²",
    oxidationStates: [2, 3, 4],
    oxidationColors: [
      { state: 2, colorHex: "#a78bfa", ionName: "Ti²⁺" },
      { state: 3, colorHex: "#c084fc", ionName: "Ti³⁺ violet" },
      { state: 4, colorHex: "#ffffff", ionName: "Ti⁴⁺ (colourless / compound TiO₂ is white)" }
    ],
    oxidationStatesDesc: "Exhibits variable oxidation states of +2, +3, and +4. The +4 state (e.g. TiO₂) is the most stable and is colourless since Ti⁴⁺ has a 3d⁰ configuration.",
    density: 4.54,
    meltingPoint: 1668,
    boilingPoint: 3287,
    atomicRadius: 147,
    firstIE: 658,
    colours: [
      {
        ion: "Ti³⁺",
        name: "Titanium(III) aquated ion",
        hex: "#c084fc", // Purple/violet
        description: "Violet/purple colour in aqueous solution due to a single electron in the split 3d subshell undergoing d-d transition."
      },
      {
        ion: "TiO₂",
        name: "Titanium(IV) oxide (Anatase/Rutile)",
        hex: "#ffffff", // White solid
        description: "Brilliant white solid used extensively as a pigment in paints, plastics, and sunscreens because Ti⁴⁺ is 3d⁰ (absorbs UV but does not absorb visible light)."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Polymerization of ethene to polyethene (Ziegler-Natta Catalyst)",
        catalystUsed: "Titanium(IV) chloride (TiCl₄) with triethylaluminum",
        details: "Allows the production of high-density polyethylene (HDPE) under extremely mild temperatures and pressures compared to free-radical methods.",
        equation: "n CH₂=CH₂ → [-CH₂-CH₂-]n"
      }
    ],
    complexIons: [
      {
        formula: "[Ti(H₂O)₆]³⁺",
        name: "Hexaaquatitanium(III)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Purple / Violet",
        hex: "#d8b4fe",
        ligands: "H₂O (Monodentate)",
        details: "A classic example of d¹ system showcasing a single absorption band in the visible range (absorbing green/yellow light, reflecting violet)."
      }
    ],
    hkdseKeyFocus: [
      "Has excellent resistance to corrosion due to a highly stable, passive TiO₂ surface layer.",
      "Has a high strength-to-weight ratio, very useful for structural metallurgy, aircraft hulls, and medical implants.",
      "Exhibits variable oxidation states, with the Ti⁴⁺ state being colourless (3d⁰) and the Ti³⁺ state being violet (3d¹)."
    ],
    generalInfo: "Titanium is an exceptionally strong, low-density transition metal with high corrosion resistance (especially in sea water, aqua regia, and chlorine).",
    discovery: "William Gregor (1791)"
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    period: 4,
    group: "5",
    category: "transition-metal",
    mass: 50.9415,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
    electronConfigShort: "[Ar] 3d³ 4s²",
    oxidationStates: [2, 3, 4, 5],
    oxidationColors: [
      { state: 2, colorHex: "#d8b4fe", ionName: "V²⁺ (Lavender/Violet)" },
      { state: 3, colorHex: "#86efac", ionName: "V³⁺ (Green)" },
      { state: 4, colorHex: "#60a5fa", ionName: "VO²⁺ / V(IV) (Blue)" },
      { state: 5, colorHex: "#facc15", ionName: "VO₂⁺ / V(V) (Yellow)" }
    ],
    oxidationStatesDesc: "Shows four distinct oxidation states: +2, +3, +4, and +5. Each oxidation state exhibits an extremely distinct and vibrant colour system.",
    density: 6.11,
    meltingPoint: 1910,
    boilingPoint: 3407,
    atomicRadius: 134,
    firstIE: 651,
    colours: [
      {
        ion: "V²⁺",
        name: "Vanadium(II) ion",
        hex: "#cdb4db", // Violet/Lavender
        description: "Violet. Strong reducing agent, easily oxidized by air."
      },
      {
        ion: "V³⁺",
        name: "Vanadium(III) ion",
        hex: "#a7c957", // Green
        description: "Green. Occurs in compounds like VCl₃."
      },
      {
        ion: "VO²⁺",
        name: "Oxovanadium(IV) / Vanadyl ion",
        hex: "#2a9d8f", // Blue-green or sky blue
        description: "Bright sky blue. Highly stable intermediate oxidation state in acidic solutions."
      },
      {
        ion: "VO₂⁺ or VO₃⁻",
        name: "Dioxovanadium(V) / Vanadate ion",
        hex: "#e9c46a", // Yellow
        description: "Yellow. Present in acidified ammonium metavanadate. Highly oxidizing."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Oxidation of sulfur dioxide to sulfur trioxide (Contact Process in H₂SO₂ production)",
        catalystUsed: "Vanadium(V) oxide (V₂O₅)",
        details: "V₂O₅ acts as a heterogeneous catalyst. It is temporarily reduced to V(IV) by SO₂ and then re-oxidized back to V(V) by oxygen, illustrating the power of variable oxidation states in catalysis.",
        equation: "2 SO₂ (g) + O₂ (g) ⇌ 2 SO₃ (g) [under V₂O₅, 450°C, 1-2 atm]"
      }
    ],
    complexIons: [
      {
        formula: "[V(H₂O)₆]³⁺",
        name: "Hexaaquavanadium(III)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Green",
        hex: "#86efac",
        ligands: "H₂O (Monodentate)",
        details: "A d² complex whose absorption bands result in green transmitted light."
      },
      {
        formula: "[VO(H₂O)₅]²⁺",
        name: "Pentaaquaooxovanadium(IV)",
        shape: "Octahedral (distorted)",
        coordinationNumber: 6,
        colour: "Sky Blue",
        hex: "#60a5fa",
        ligands: "H₂O and O²⁻ (Oxo ligand)",
        details: "The strong double bond between V and O causes structural distortion."
      }
    ],
    hkdseKeyFocus: [
      "V₂O₅ is the vital catalyst in the Contact Process. Students must memorize this application and know that the reaction is crucial for industrial sulfuric acid manufacture.",
      "The 'rainbow' of oxidation states (+2, +3, +4, +5) is a classic chemical demonstration of transition metal variability.",
      "Transition metal variable oxidation states provide paths with lower activation energy during catalysis."
    ],
    generalInfo: "Vanadium is a medium-hard, ductile, steel-blue metal. It is primarily used to manufacture vanadium-steel alloys for high-strength tools, engines, and structural rods.",
    discovery: "Andrés Manuel del Río (1801)"
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    period: 4,
    group: "6",
    category: "transition-metal",
    mass: 51.9961,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
    electronConfigShort: "[Ar] 3d⁵ 4s¹",
    oxidationStates: [2, 3, 6],
    oxidationColors: [
      { state: 2, colorHex: "#3b82f6", ionName: "Cr²⁺ (Bright Blue)" },
      { state: 3, colorHex: "#10b981", ionName: "Cr³⁺ (Dark Green)" },
      { state: 6, colorHex: "#f97316", ionName: "CrO₄²⁻ / Cr₂O₇²⁻ (Yellow/Orange)" }
    ],
    oxidationStatesDesc: "Possesses a very stable trivalent state (+3, e.g. green Cr³⁺) and an extremely oxidizing hexavalent state (+6, e.g. orange Cr₂O₇²⁻ or yellow CrO₄²⁻, which interconvert based on pH).",
    density: 7.19,
    meltingPoint: 1907,
    boilingPoint: 2671,
    atomicRadius: 128,
    firstIE: 653,
    colours: [
      {
        ion: "Cr³⁺",
        name: "Chromium(III) ion",
        hex: "#059669", // Green
        description: "Deep green (when hydrated as [Cr(H₂O)₆]³⁺, it absorbs red light and transmits green)."
      },
      {
        ion: "Cr₂O₇²⁻",
        name: "Dichromate ion (acidic)",
        hex: "#ea580c", // Orange
        description: "Vibrant orange. Achieved in acidic conditions. Extremely strong oxidizing agent used for alcohol breathalyzers and organic oxidation."
      },
      {
        ion: "CrO₄²⁻",
        name: "Chromate ion (alkaline)",
        hex: "#eab308", // Yellow
        description: "Bright yellow. Prevails in alkaline conditions. Interconvertible with dichromate upon pH change."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Industrial synthesis of organic chemicals & leather tanning",
        catalystUsed: "Chromium(III) oxide (Cr₂O₃)",
        details: "Used in organic gas reformations and catalytic cracking.",
        equation: "Chromium complexes are widely used in homogeneous organic catalytic transformations."
      }
    ],
    complexIons: [
      {
        formula: "[Cr(H₂O)₆]³⁺",
        name: "Hexaaquachromium(III)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Violet-Blue (appears green in presence of Cl⁻ impurities)",
        hex: "#4f46e5",
        ligands: "H₂O (monodentate)",
        details: "A stable d³ complex. Solid salts are often green due to chloride ligands displacing water to form [Cr(H₂O)₅Cl]²⁺."
      }
    ],
    hkdseKeyFocus: [
      "ANOMALY: Its ground-state electron configuration is [Ar] 3d⁵ 4s¹ instead of [Ar] 3d⁴ 4s². This is because a half-filled 3d subshell (3d⁵) and half-filled 4s subshell (4s¹) provide extra stability due to symmetrical distribution of electron density and minimized inter-electronic repulsion.",
      "Dichromate / Chromate equilibrium (Cr₂O₇²⁻ [orange] + H₂O ⇌ 2 CrO₄²⁻ [yellow] + 2 H⁺) is heavily tested in chemical equilibrium. Adding acid shifts the equilibrium to the left (orange); adding alkali shifts it to the right (yellow).",
      "Acidified potassium dichromate (K₂Cr₂O₇/H⁺) is a critical HKDSE oxidizing agent used to oxidize primary alcohols to carboxylic acids (via aldehydes) and secondary alcohols to ketones, changing colour from orange (+6) to green (+3)."
    ],
    generalInfo: "Chromium is a lustrous, hard, steel-grey metal. It is highly valued for its high corrosion resistance and high polishability, forming the protective layer in stainless steel.",
    discovery: "Louis Nicolas Vauquelin (1797)"
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    period: 4,
    group: "7",
    category: "transition-metal",
    mass: 54.938,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²",
    electronConfigShort: "[Ar] 3d⁵ 4s²",
    oxidationStates: [2, 3, 4, 6, 7],
    oxidationColors: [
      { state: 2, colorHex: "#fbcfe8", ionName: "Mn²⁺ (Very Pale Pink / Colorless)" },
      { state: 4, colorHex: "#78350f", ionName: "MnO₂ (Dark Brown/Black solid)" },
      { state: 6, colorHex: "#047857", ionName: "MnO₄²⁻ (Green)" },
      { state: 7, colorHex: "#a21caf", ionName: "MnO₄⁻ (Deep Purple)" }
    ],
    oxidationStatesDesc: "Boasts the widest range of oxidation states of the 4th period d-block elements (ranging from +2 to +7) because all 5 d-electrons and 2 s-electrons can participate in bonding.",
    density: 7.21,
    meltingPoint: 1246,
    boilingPoint: 2061,
    atomicRadius: 127,
    firstIE: 717,
    colours: [
      {
        ion: "Mn²⁺",
        name: "Manganese(II) ion",
        hex: "#fce7f3", // Pale pink
        description: "Extremely pale pink in concentrated solids; virtually colourless in dilute aqueous solutions because of a spin-forbidden d-d transition."
      },
      {
        ion: "MnO₂",
        name: "Manganese(IV) oxide",
        hex: "#451a03", // Dark brown/black
        description: "Dark brown/black insoluble solid. Highly stable and acts as a superb catalyst."
      },
      {
        ion: "MnO₄⁻",
        name: "Permanganate ion",
        hex: "#86198f", // Deep Purple
        description: "Intense, deep royal purple. Color is not due to standard d-d transition, but rather Ligand-to-Metal Charge Transfer (LMCT) because Mn(VII) has a 3d⁰ configuration!"
      }
    ],
    catalyticApplications: [
      {
        reaction: "Decomposition of toxic hydrogen peroxide to water and oxygen",
        catalystUsed: "Manganese(IV) oxide (MnO₂)",
        details: "MnO₂ powder catalyzes the reaction at room temperature, releasing rapid bubbles of oxygen gas.",
        equation: "2 H₂O₂ (aq) → 2 H₂O (l) + O₂ (g) [under MnO₂ catalyst]"
      }
    ],
    complexIons: [
      {
        formula: "[Mn(H₂O)₆]²⁺",
        name: "Hexaaquamanganese(II)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Pale Pink / Colourless",
        hex: "#fdf2f8",
        ligands: "H₂O",
        details: "Has a 3d⁵ configuration. Each d-orbital contains exactly 1 unpaired electron. Transitions require an electron spin flip, which is highly forbidden by quantum mechanics, explaining why the ion is so pale."
      }
    ],
    hkdseKeyFocus: [
      "Acidified potassium permanganate (KMnO₄/H⁺) is a stellar, omnipresent HKDSE chemical oxidizing agent.",
      "Redox Tritation with Fe²⁺: KMnO₄ is self-indicating! During titration, the deep purple MnO₄⁻ is reduced to colourless Mn²⁺. At the end point, the first drop of excess KMnO₄ turns the conical flask permanently pale pink.",
      "Equivalency Equation: MnO₄⁻ (aq) + 8 H⁺ (aq) + 5 e⁻ → Mn²⁺ (aq) + 4 H₂O (l).",
      "MnO₂ is a standard heterogeneous catalyst in gas release lab demonstrations."
    ],
    generalInfo: "Manganese is a hard, brittle, silvery metal. It is essential in steel fabrication (to increase wear-resistance and hardness), and forms part of the aluminum alloy utilized in beverage cans.",
    discovery: "Johan Gottlieb Gahn (1774)"
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    period: 4,
    group: "8",
    category: "transition-metal",
    mass: 55.845,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²",
    electronConfigShort: "[Ar] 3d⁶ 4s²",
    oxidationStates: [2, 3],
    oxidationColors: [
      { state: 2, colorHex: "#a7f3d0", ionName: "Fe²⁺ (Pale Light Green)" },
      { state: 3, colorHex: "#f59e0b", ionName: "Fe³⁺ (Yellowish-Brown)" }
    ],
    oxidationStatesDesc: "Primary oxidation states are +2 (light green Fe²⁺) and +3 (yellow-brown Fe³⁺). In acidic solutions, Fe²⁺ acts as a reducing agent, while Fe³⁺ acts as a mild oxidizing agent.",
    density: 7.87,
    meltingPoint: 1538,
    boilingPoint: 2862,
    atomicRadius: 126,
    firstIE: 762,
    colours: [
      {
        ion: "Fe²⁺",
        name: "Iron(II) ion",
        hex: "#d1fae5", // Pale green
        description: "Pale green in aqueous solution. Easily oxidized to yellow-brown Fe³⁺ by atmospheric oxygen."
      },
      {
        ion: "Fe³⁺",
        name: "Iron(III) ion",
        hex: "#f59e0b", // Yellow-brown
        description: "Yellowish-brown in solution due to hydrolysis (forming species like [Fe(H₂O)₅(OH)]²⁺). Pure [Fe(H₂O)₆]³⁺ is actually pale violet, but is rarely seen due to hydrolysis."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Synthesis of ammonia from nitrogen and hydrogen gases (Haber Process)",
        catalystUsed: "Finely divided iron (Fe) or iron-core promoter oxides",
        details: "Fe increases the rate of reaction, allowing equilibrium to be reached much faster at lower temperatures (around 450°C and 200 atm). Since it is finely divided, it provides an enormous surface area for gaseous adsorption.",
        equation: "N₂ (g) + 3 H₂ (g) ⇌ 2 NH₃ (g) [under Fe, 450°C, 200 atm]"
      }
    ],
    complexIons: [
      {
        formula: "[Fe(SCN)]²⁺",
        name: "Thiocyanatoiron(III)",
        shape: "Octahedral (solvated)",
        coordinationNumber: 6,
        colour: "Blood-Red",
        hex: "#991b1b",
        ligands: "SCN⁻ (Thiocyanate) and H₂O",
        details: "The addition of potassium thiocyanate (KSCN) to a solution containing Fe³⁺ ions produces a brilliant, rich blood-red solution. This is a highly sensitive qualitative test for dissolved Fe³⁺ in HKDSE qualitative analysis."
      },
      {
        formula: "[Fe(H₂O)₆]²⁺",
        name: "Hexaaquairon(II)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Pale Green",
        hex: "#a7f3d0",
        ligands: "H₂O",
        details: "A classic green coordination compound. Precipitates as green Fe(OH)₂ with NaOH."
      }
    ],
    hkdseKeyFocus: [
      "Haber Process Catalyst: Iron MUST be specified as 'finely divided' to earn full marks, indicating maximize surface area.",
      "Qualitative chemical tests: Fe²⁺ precipitates as a dirty green gelatinous solid Fe(OH)₂ (which turns brown at the surface due to oxidation to Fe(OH)₃) upon adding sodium hydroxide or aqueous ammonia. Fe³⁺ precipitates directly as a reddish-brown solid Fe(OH)₃.",
      "Blood-red complex formation with SCN⁻ is heavily examined in Chemical Equilibrium (shifting colours by adding reagents) and Qualitative Analysis."
    ],
    generalInfo: "Iron is by mass the most common chemical element on Earth. It is the core constituent of steel and is crucial in biological systems as the oxygen-carrying center of hemoglobin.",
    discovery: "Known since antiquity"
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    period: 4,
    group: "9",
    category: "transition-metal",
    mass: 58.9332,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²",
    electronConfigShort: "[Ar] 3d⁷ 4s²",
    oxidationStates: [2, 3],
    oxidationColors: [
      { state: 2, colorHex: "#f472b6", ionName: "Co²⁺ (Pink / Blue for chloride complex)" },
      { state: 3, colorHex: "#dc2626", ionName: "Co³⁺ (Red)" }
    ],
    oxidationStatesDesc: "Exhibits variable oxidation states of +2 and +3. The cobalt(II) ion Co²⁺ is the most stable and is widely used in humidity test strips.",
    density: 8.9,
    meltingPoint: 1495,
    boilingPoint: 2927,
    atomicRadius: 125,
    firstIE: 760,
    colours: [
      {
        ion: "Co²⁺ (aqueous)",
        name: "Aqueous Cobalt(II) ion",
        hex: "#f472b6", // Pink
        description: "Soft rose-pink when coordinated to water molecules."
      },
      {
        ion: "[CoCl₄]²⁻",
        name: "Tetrachlorocobaltate(II) ion",
        hex: "#2563eb", // Royal Blue
        description: "Intense, beautiful cobalt blue. Created in the presence of high concentrations of chloride ions (e.g. concentrated HCl)."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Slicing of hydrocarbons and bio-molecule synthesis",
        catalystUsed: "Various homogeneous Cobalt complexes",
        details: "Used in industrial hydroformylation reactions directly.",
        equation: "Industrial organic synthesis uses specific cobalt catalysts."
      }
    ],
    complexIons: [
      {
        formula: "[Co(H₂O)₆]²⁺",
        name: "Hexaaquacobalt(II)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Pink",
        hex: "#f472b6",
        ligands: "H₂O",
        details: "Present in cobalt(II) chloride solution. Stable at room temperature."
      },
      {
        formula: "[CoCl₄]²⁻",
        name: "Tetrachlorocobaltate(II)",
        shape: "Tetrahedral",
        coordinationNumber: 4,
        colour: "Blue",
        hex: "#1d4ed8",
        ligands: "Cl⁻",
        details: "Formed by adding concentrated HCl to pink hexaaquacobalt(II). Represents a vital HKDSE Le Chatelier's equilibrium demonstration (Pink ⇌ Blue + Heat)."
      }
    ],
    hkdseKeyFocus: [
      "The hydrated cobalt(II) chloride paper (blue when dry, pink when wet) is a classic chemical test for the presence of water.",
      "Le Chatelier's Equilibrium: [Co(H₂O)₆]²⁺ (aq) [pink] + 4 Cl⁻ (aq) ⇌ [CoCl₄]²⁻ (aq) [blue] + 6 H₂O (l) is endothermic. Heating the mixture shifts the equilibrium forward, turning it blue. Cooling it shifts the equilibrium backward, turning it pink.",
      "Demonstrates high coordination number changes (from 6 coordinate pink octahedral to 4 coordinate blue tetrahedral)."
    ],
    generalInfo: "Cobalt is a hard, lustrous, silver-grey metal. It is ferromagnetic, meaning it is strongly attracted to magnets and used to produce ultra-strong magnetic alloys (Alnico).",
    discovery: "Georg Brandt (1735)"
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    period: 4,
    group: "10",
    category: "transition-metal",
    mass: 58.6934,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
    electronConfigShort: "[Ar] 3d⁸ 4s²",
    oxidationStates: [2, 3],
    oxidationColors: [
      { state: 2, colorHex: "#34d399", ionName: "Ni²⁺ (Bright Emerald Green)" }
    ],
    oxidationStatesDesc: "The dominant stable oxidation state is +2, which forms brilliant emerald-green compounds and solutions.",
    density: 8.91,
    meltingPoint: 1455,
    boilingPoint: 2913,
    atomicRadius: 124,
    firstIE: 737,
    colours: [
      {
        ion: "Ni²⁺",
        name: "Nickel(II) ion",
        hex: "#10b981", // Emerald Green
        description: "Brilliant green in water. Standard color for transition elements containing 3d⁸."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Hydrogenation of unsaturated carbon-carbon double bonds in alkenes / vegetable oils",
        catalystUsed: "Finely divided Nickel (Raney Nickel)",
        details: "Nickel absorbs hydrogen and alkene molecules on its solid surface (adsorption), breaking the H-H bond and weakening the C=C pi bond, allowing rapid catalytic combination to form saturated hydrocarbons (alkanes or margarine).",
        equation: "CH₂=CH₂ (g) + H₂ (g) → CH₃-CH₃ (g) [under Ni catalyst, 150°C]"
      }
    ],
    complexIons: [
      {
        formula: "[Ni(H₂O)₆]²⁺",
        name: "Hexaaquanickel(II)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Green",
        hex: "#34d399",
        ligands: "H₂O",
        details: "Classic octahedral metal complex with d⁸ crystal field stabilization."
      },
      {
        formula: "[Ni(NH₃)₆]²⁺",
        name: "Hexaamminenickel(II)",
        shape: "Octahedral",
        coordinationNumber: 6,
        colour: "Blue-Violet",
        hex: "#818cf8",
        ligands: "NH₃",
        details: "Formed by adding excess aqueous ammonia to nickel(II) ions, shifting green complex to blue-violet."
      }
    ],
    hkdseKeyFocus: [
      "Catalyst in hydrogenation: Finely divided nickel is the core reagent used to convert liquid vegetable oils containing carbon-carbon double bonds into solid margarine.",
      "Green colour of Ni²⁺ compounds (such as nickel(II) sulfate) is heavily featured in qualitative analysis questions.",
      "Forms coordinate bonds with neutral ligands like water and ammonia."
    ],
    generalInfo: "Nickel is a silvery-white lustrous transition metal with a slight golden tinge. Highly resistant to oxidation and corrosion, it is used in coinage, electroplating, and lithium-ion batteries.",
    discovery: "Axel Fredrik Cronstedt (1751)"
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    period: 4,
    group: "11",
    category: "transition-metal",
    mass: 63.546,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹",
    electronConfigShort: "[Ar] 3d¹⁰ 4s¹",
    oxidationStates: [1, 2],
    oxidationColors: [
      { state: 1, colorHex: "#ffffff", ionName: "Cu⁺ (Usually colourless; Cu₂O is reddish solid)" },
      { state: 2, colorHex: "#60a5fa", ionName: "Cu²⁺ (Bright Blue / Deep Blue complexes)" }
    ],
    oxidationStatesDesc: "Possesses +1 and +2 states. The +2 state is the most common and robust, characterized by its iconic sky-blue colour, whereas Cu⁺ has a filled d-shell (3d¹⁰) and is typically colourless or forms reddish solids.",
    density: 8.96,
    meltingPoint: 1085,
    boilingPoint: 2562,
    atomicRadius: 128,
    firstIE: 746,
    colours: [
      {
        ion: "Cu²⁺",
        name: "Copper(II) aquated ion",
        hex: "#3b82f6", // Blue
        description: "Iconic clear blue (due to standard d-d transition absorption in the orange-red spectrum)."
      },
      {
        ion: "[Cu(NH₃)₄(H₂O)₂]²⁺",
        name: "Tetraamminedihydratocopper(II) ion",
        hex: "#1e3a8a", // Deep Blue
        description: "Intense deep royal blue. Formed when excess NH₃ is added to Cu²⁺(aq)."
      },
      {
        ion: "Cu₂O",
        name: "Copper(I) oxide",
        hex: "#ef4444", // Brick-red precipitate
        description: "Brick-red precipitate formed when reducing sugars react with Fehling's solution (Cu⁺ is 3d¹⁰, hence no d-d colour, but charge transfer and crystalline effects give the red color)."
      }
    ],
    catalyticApplications: [
      {
        reaction: "Oxidation of alcohols & industrial reactions",
        catalystUsed: "Metallic copper (Cu) or copper mesh",
        details: "Used to pass vaporized primary alcohols like ethanol to form ethanal as a catalytic dehydrogenation surface.",
        equation: "CH₃CH₂OH (g) → CH₃CHO (g) + H₂ (g) [under hot Cu catalyst]"
      }
    ],
    complexIons: [
      {
        formula: "[Cu(H₂O)₆]²⁺",
        name: "Hexaaquacoppper(II)",
        shape: "Octahedral (distorted Jahn-Teller)",
        coordinationNumber: 6,
        colour: "Blue",
        hex: "#60a5fa",
        ligands: "H₂O",
        details: "The standard blue solution of copper sulfate. Strong electronic distortion weakens the axial water bonds."
      },
      {
        formula: "[Cu(NH₃)₄(H₂O)₂]²⁺",
        name: "Tetraamminedihydratocopper(II)",
        shape: "Octahedral (highly distorted / square planar approximation)",
        coordinationNumber: 6,
        colour: "Deep Royal Blue",
        hex: "#1e40af",
        ligands: "NH₃ (4) and H₂O (2)",
        details: "Formed when ammonia is added dropwise to copper(II) solution. Initially, pale blue precipitate of Cu(OH)₂ is formed, which dissolves in excess ammonia to yield this deep blue complex. VERY OFTEN EXAMINED."
      },
      {
        formula: "[CuCl₄]²⁻",
        name: "Tetrachlorocuprate(II)",
        shape: "Tetrahedral",
        coordinationNumber: 4,
        colour: "Yellow-Green",
        hex: "#84cc16",
        ligands: "Cl⁻",
        details: "Formed by adding concentrated HCl to Cu²⁺(aq) solution."
      }
    ],
    hkdseKeyFocus: [
      "ANOMALY: Ground-state configuration is [Ar] 3d¹⁰ 4s¹ instead of [Ar] 3d⁹ 4s² because a completely filled 3d subshell (3d¹¹) is thermodynamically highly symmetrical and stable, minimizing inter-electronic repulsion.",
      "The legendary reaction of Cu²⁺ (aq) with aqueous ammonia: (1) Dropwise: Cu²⁺ (aq) + 2 OH⁻ (aq) → Cu(OH)₂ (s) [pale blue precipitate]. (2) Excess: Cu(OH)₂ (s) + 4 NH₃ (aq) → [Cu(NH₃)₄(H₂O)₂]²⁺ (aq) + 2 OH⁻ (aq) + 4 H₂O (l) [dissolves to form a deep blue solution].",
      "Redox: Cu does not react with dilute non-oxidizing acids (e.g. HCl) because it has a positive standard reduction potential, but reacts with oxidizing acids like concentrated HNO₃ to release brown nitrogen dioxide gas (NO₂) and form copper(II) nitrate."
    ],
    generalInfo: "Copper is a soft, malleable, and ductile metal with exceptionally high thermal and electrical conductivity. It is highly valued for copper wiring, plumbing, and structural bronzes.",
    discovery: "Known since antiquity (c. 9000 BC)"
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    period: 4,
    group: "12",
    category: "transition-metal",
    mass: 65.38,
    electronConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²",
    electronConfigShort: "[Ar] 3d¹⁰ 4s²",
    oxidationStates: [2],
    oxidationColors: [{ state: 2, colorHex: "#ffffff", ionName: "Zinc ion (Zn²⁺)" }],
    oxidationStatesDesc: "Exhibits only the +2 oxidation state by losing the 4s² valence electrons. This leaves a completely closed and exceptionally stable 3d¹⁰ shell.",
    density: 7.14,
    meltingPoint: 419.5,
    boilingPoint: 907,
    atomicRadius: 139,
    firstIE: 906,
    colours: [
      {
        ion: "Zn²⁺",
        name: "Zinc ion",
        hex: "#f3f4f6", // colourless
        description: "Colourless in aqueous solution. White solid salts. Since Cu²⁺ matches d⁹ but Zn²⁺ is completely filled 3d¹⁰, there are no partially filled d-orbitals, making d-d electronic transition impossible."
      }
    ],
    catalyticApplications: [],
    complexIons: [
      {
        formula: "[Zn(NH₃)₄]²⁺",
        name: "Tetraamminezinc(II)",
        shape: "Tetrahedral",
        coordinationNumber: 4,
        colour: "Colourless",
        hex: "#f3f4f6",
        ligands: "NH₃",
        details: "Formed when excess aqueous ammonia is added to Zn²⁺ ions. Initially white Zn(OH)₂ precipative forms, which dissolves in excess ammonia to make this colourless tetrahedral complex."
      },
      {
        formula: "[Zn(OH)₄]²⁻",
        name: "Tetrahydroxozincate(II)",
        shape: "Tetrahedral",
        coordinationNumber: 4,
        colour: "Colourless",
        hex: "#f3f4f6",
        ligands: "OH⁻",
        details: "Zinc is amphoteric. White precipitate Zn(OH)₂ dissolves in excess NaOH to form this colourless complex."
      }
    ],
    hkdseKeyFocus: [
      "CRITICAL DSE CONCEPT: Zinc is a d-block element, but NOT classified as a transition metal in HKDSE. A transition metal must have at least one stable chemical ion with a partially filled d-subshell. Zn forms only Zn²⁺, which has a [Ar] 3d¹⁰ complete subshell, hence it is NOT a typical transition metal.",
      "Forms only white/colourless compounds and does not exhibit variable oxidation states or d-d electronic transition colours.",
      "Its compounds are diamagnetic because all d-electrons are fully paired, unlike paramagnetic transition metals which contain unpaired d-electrons.",
      "Melting point is dramatically lower than adjacent transition metals (melting at only 419°C) because its 3d electrons are completely paired and localized, meaning only its two 4s electrons participate in metallic bonding, resulting in a much weaker metallic lattice."
    ],
    zincScandiumDebate: "Under the HKDSE syllabus, Zn is NOT classified as a transition metal. This is because a typical transition metal is defined as a d-block element that forms at least one stable ion with a partially filled d-subshell. The only stable ion formed by zinc is Zn²⁺, which has an electron configuration of [Ar] 3d¹⁰. Because the 3d subshell is completely filled, it does not fit the definition.",
    generalInfo: "Zinc is a slightly brittle, bluish-grey metal. It is highly resistant to weathering and is utilized extensively to galvanize iron or steel to protect them from rusting (sacrificial protection).",
    discovery: "Known since antiquity; isolated in Europe by Andreas Marggraf (1746)"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: "mc",
    question: "Why is Zinc (Zn) not classified as a typical transition metal under the HKDSE Chemistry syllabus?",
    options: [
      "A. Zinc has low density and high melting point, which contradict standard metallic properties.",
      "B. Zinc does not form any stable ions under normal chemical conditions.",
      "C. In both the elemental state and its only stable ion (Zn²⁺), the d-subshell is completely filled.",
      "D. Zinc is amphoteric and reacts readily with both acids and alkalis."
    ],
    correctAnswer: "C",
    explanation: "HKDSE defines a transition metal as a d-block element that forms at least one stable ion with a partially filled d-subshell. Zinc has configuration [Ar] 3d¹⁰ 4s². It only forms the stable Zn²⁺ ion, which has configuration [Ar] 3d¹⁰. Since the d-subshell is completely occupied in both elemental and ionic forms, it is not a typical transition metal. Hence, Zn²⁺ compounds are colourless and diamagnetic.",
    hkdseYearReference: "Classic HKDSE Concept",
    syllabusTopic: "Definition of Transition Metals"
  },
  {
    id: 2,
    type: "mc",
    question: "Which of the following elements has a ground-state electron configuration ending in 3d⁵ 4s¹?",
    options: [
      "A. Manganese (Mn)",
      "B. Chromium (Cr)",
      "C. Iron (Fe)",
      "D. Vanadium (V)"
    ],
    correctAnswer: "B",
    explanation: "Chromium (Cr, Z=24) exhibits an anomalous configuration of [Ar] 3d⁵ 4s¹ instead of [Ar] 3d⁴ 4s². This is because a half-filled d-subshell (3d⁵) and a half-filled s-subshell (4s¹) represent a state of extra stability due to symmetrical distribution of electron density and minimized electron-electron repulsion.",
    hkdseYearReference: "DSE 2018 Paper 1A Q12",
    syllabusTopic: "Electronic Configuration"
  },
  {
    id: 3,
    type: "mc",
    question: "Which transition metal oxide is utilized as a heterogeneous catalyst in the Contact Process, and what reaction does it speed up?",
    options: [
      "A. Fe (Iron) for the synthesis of ammonia gas.",
      "B. MnO₂ (Manganese dioxide) for the decomposition of hydrogen peroxide.",
      "C. V₂O₅ (Vanadium(V) oxide) for the oxidation of SO₂ to SO₃.",
      "D. Ni (Nickel) for the hydrogenation of carbon-carbon double bonds."
    ],
    correctAnswer: "C",
    explanation: "Vanadium(V) oxide (V₂O₅) is the catalyst in the Contact Process, which catalyzes the oxidation of sulfur dioxide (SO₂) to sulfur trioxide (SO₃) at 450°C. This is a crucial step in the manufacture of sulfuric acid. The other options describe other vital catalysts, but V₂O₅ corresponds to the Contact Process.",
    hkdseYearReference: "DSE 2021 Paper 1B / syllabus",
    syllabusTopic: "Catalytic Properties"
  },
  {
    id: 4,
    type: "mc",
    question: "When excess aqueous ammonia is added to a solution containing copper(II) ions, a pale blue precipitate first forms which subsequently dissolves to form a deep blue solution. What is the formula of the complex ion responsible for the deep blue colour?",
    options: [
      "A. [Cu(H₂O)₆]²⁺",
      "B. [Cu(NH₃)₆]²⁺",
      "C. [Cu(NH₃)₄(H₂O)₂]²⁺",
      "D. [CuCl₄]²⁻"
    ],
    correctAnswer: "C",
    explanation: "Initially, adding ammonia dropwise provides OH⁻ ions, forming a pale blue precipitate of copper(II) hydroxide: Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s). Adding excess ammonia acts as a ligand replacement, displacing four water molecules to form the tetraamminedihydratocopper(II) complex ion, [Cu(NH₃)₄(H₂O)₂]²⁺, which is a soluble deep royal blue complex.",
    hkdseYearReference: "DSE 2017 Paper 1B Q8 & Q11",
    syllabusTopic: "Complex Ion Formation"
  },
  {
    id: 5,
    type: "mc",
    question: "Which of the following statements best explains why aqueous Chromium(III) ions ([Cr(H₂O)₆]³⁺) appear deep green in colour?",
    options: [
      "A. It emits green light when excited electrons drop back to lower energy s-orbitals.",
      "B. Red-orange light is absorbed to promote a d-electron to a higher energy split d-orbital, and its complementary green light is transmitted.",
      "C. The species absorbs green light and reflects violet light.",
      "D. Water ligands react chemically with chromium to form green copper pigments."
    ],
    correctAnswer: "B",
    explanation: "Colours in transition metal complexes arise because ligands split the 3d orbitals into slightly different energy levels. An electron absorbs a photon of specific visible light (specifically in the red/orange region for Cr³⁺) to skip to the higher split d-orbital (d-d transition). The light not absorbed (the complementary light, which is green) is transmitted to our eyes.",
    hkdseYearReference: "Core HKDSE d-d Transition concept",
    syllabusTopic: "Coloured Compounds"
  },
  {
    id: 6,
    type: "mc",
    question: "A student mixes pink Cobalt(II) chloride solution with concentrated hydrochloric acid. The solution gradually turns dynamic blue. What happens if she heats this blue mixture, considering that the equilibrium below is endothermic?\n\n[Co(H₂O)₆]²⁺ (aq) [pink] + 4 Cl⁻ (aq) ⇌ [CoCl₄]²⁻ (aq) [blue] + 6 H₂O (l)",
    options: [
      "A. The solution turns more pink because heating shifts the equilibrium backward.",
      "B. The solution remains unchanged because temperature does not affect equilibrium constant.",
      "C. The solution turns a deeper blue because heating shifts the endothermic reaction in the forward direction.",
      "D. A white precipitate of cobalt hydroxide forms immediately."
    ],
    correctAnswer: "C",
    explanation: "According to Le Chatelier's Principle, since the forward reaction is endothermic, adding thermal energy (heating) shifts the equilibrium to the right to absorb the added heat. This increases the concentration of the blue [CoCl₄]²⁻ complex and turns the solution a deeper blue.",
    hkdseYearReference: "DSE 2022 Paper 1B Q7",
    syllabusTopic: "Complex Ions & Equilibrium"
  },
  {
    id: 7,
    type: "mc",
    question: "In standard DSE redox titrations, acidified potassium permanganate (KMnO₄/H⁺) acts as a powerful oxidizing agent. Which statement about KMnO₄ titrations is INCORRECT?",
    options: [
      "A. There is no need to add a separate chemical indicator because the KMnO₄ solution is self-indicating.",
      "B. The deep purple MnO₄⁻ is reduced to nearly colourless Mn²⁺ in the reaction.",
      "C. At the endpoint, the reaction mixture changes from purple to permanent pale pink.",
      "D. Sulfuric acid (H₂SO₄) is added to provide H⁺ ions because nitric acid (HNO₃) would compete as an oxidizing agent."
    ],
    correctAnswer: "C",
    explanation: "Check option labels (A, B, C, D) - actually, at the endpoint, the titration contains analyte and reduced Mn²⁺ (which is colourless). Adding the first drop of excess purple MnO₄⁻ causes the solution to turn permanent pale pink. So the colour change is from colourless to pale pink! (Therefore, purple to pale pink is incorrect if it references the flask, which was colourless before the endpoint). Deep purple KMnO₄ is in the burette. Also, acidified sulfuric acid must be used, as HNO₃ is indeed oxidising and HCl oxidises to Cl₂, competing in the titration.",
    hkdseYearReference: "DSE Redox Titrations",
    syllabusTopic: "Variable Oxidation States"
  },
  {
    id: 8,
    type: "structured",
    question: "Describe the structural bonding and geometry of the octahedral [Fe(CNS)]²⁺ complex which shows a beautiful blood-red colour. State the type of bond between the ligand and central metal ion.",
    options: [],
    correctAnswer: "coordinate bond, dative covalent bond, octahedral, thiocyanate",
    explanation: "The complex is formed when a thiocyanate ligand (SCN⁻ or CNS⁻) bonds to the central Fe³⁺ ion. The ligand acts as a Lewis base, donating a lone pair of electrons into the empty d-orbitals of the Fe³⁺ ion (Lewis acid). This forms a 'coordinate covalent bond' (or dative bond). The geometry is octahedral in solvated form when co-existing with water ligands. It serves as a highly sensitive qualitative chemical indicator of Fe³⁺.",
    hkdseYearReference: "DSE Qualitative Test & Bonding",
    syllabusTopic: "Coordinate Covalent Bonding"
  }
];
