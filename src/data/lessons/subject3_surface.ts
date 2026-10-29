import { Module } from '../../types';

export const subject3Modules: Module[] = [
  {
    id: 'surf-mod-1',
    subjectId: 'chem-7124',
    moduleNumber: 1,
    titleEn: 'Interfacial Thermodynamics & Adsorption Phenomena',
    titleUrRoman: 'Interfacial Thermodynamics aur Adsorption ke Bunyadi Usool',
    overviewEn: 'Surface energy, interfacial tension, thermodynamic driving forces, molecular distinction between physisorption and chemisorption, and adsorbate-adsorbent interactions.',
    overviewUrRoman: 'Surface energy, surface tension, adsorption vs absorption, physisorption aur chemisorption ka molecular farq aur thermodynamic driving force.',
    weekSchedule: 'Weeks 1–3',
    topics: [
      {
        id: 'surf-top-1',
        moduleId: 'surf-mod-1',
        subjectId: 'chem-7124',
        titleEn: 'Surface Free Energy, Surface Tension & Physisorption vs. Chemisorption',
        titleUrRoman: 'Surface Free Energy, Surface Tension aur Physisorption vs. Chemisorption',
        estimatedMinutes: 50,
        officialTopicMapping: 'Module 1: Surface and interface; surface energy; surface tension; intermolecular forces; adsorption vs absorption; physisorption and chemisorption.',
        isSupplementary: false,
        lessonContent: {
          id: 'surf-les-1',
          topicId: 'surf-top-1',
          titleEn: 'Thermodynamics of Surfaces: Surface Tension, Excess Free Energy, and Physisorption vs. Chemisorption',
          titleUrRoman: 'Surfaces ki Thermodynamics: Surface Tension, Free Energy aur Physisorption vs Chemisorption',
          learningObjectivesEn: [
            'Define surface tension (γ) and surface free energy from both mechanical and thermodynamic perspectives, establishing their dimensional equivalence (N/m = J/m²).',
            'Explain the molecular origin of cohesive vs. adhesive intermolecular imbalances at liquid-gas and solid-gas interfaces.',
            'Distinguish comprehensively between physisorption (van der Waals) and chemisorption (covalent/coordinate orbital overlap) across 8 physicochemical criteria.',
            'Calculate surface work and spontaneous thermodynamic parameters (ΔG, ΔH, ΔS) associated with interfacial adsorption.'
          ],
          learningObjectivesUrRoman: [
            'Surface tension (γ) aur surface free energy ki mechanical aur thermodynamic tareef (N/m = J/m²).',
            'Liquid aur solid surfaces par molecules ki uncompensated attractive forces ki wazahat.',
            'Physisorption aur Chemisorption ke darmiyan 8 ahem paimanon par wazeh taqabul.',
            'Adsorption process ke liye thermodynamic parameters (ΔG, ΔH, ΔS) calculate karna.'
          ],
          prerequisitesEn: [
            'Classical chemical thermodynamics: Gibbs free energy, enthalpy, and entropy.',
            'Intermolecular forces: London dispersion, dipole-dipole, and coordinate bonding.'
          ],
          prerequisitesUrRoman: [
            'Gibbs free energy, enthalpy aur entropy ke bunyadi qawaneen.',
            'Intermolecular forces (van der Waals, hydrogen bonding) ka ilm.'
          ],
          introductionEn: `In bulk condensed phases, every molecule or atom experiences uniform, symmetric attractive forces from neighboring molecules in all spatial directions, resulting in a net zero vector force. At a surface or phase boundary, however, molecules lack neighbors on the exterior side. This creates an uncompensated inward net attraction that pulls surface molecules toward the bulk, contracting the surface to minimize its area. The energetic work required to expand this interface against these cohesive forces constitutes surface free energy, the fundamental driving force behind all adsorption phenomena, catalysis, and colloid science.`,
          introductionUrRoman: `Liquid ya solid ke andar mojood har molecule ko chaaron taraf se barabar kashish milti hai jis se net force zero hoti hai. Magar surface par mojood molecules ke ooper koi doosra molecule nahi hota, is liye andar walay molecules unhe andar ki taraf khenchte hain. Is inward pull ki wajah se surface aik khinchee hui jheeli (stretched membrane) ki tarah bartao karti hai. Surface area ko barhanay ke liye jo kaam karna parta hai usay Surface Energy kehte hain. Yahi uncompensated forces adsorption aur catalysis ki asal wajah hain.`,
          definitionsEn: [
            {
              term: 'Surface Tension (γ)',
              definition: 'The force acting perpendicular to a unit length of an imaginary line drawn on the surface of a liquid (SI unit: N·m⁻¹), or the reversible work required to expand the surface area by one unit (J·m⁻²).'
            },
            {
              term: 'Adsorption',
              definition: 'The preferential concentration and accumulation of a gas, liquid, or dissolved solute (adsorbate) onto the surface or interface of a condensed phase (adsorbent).'
            },
            {
              term: 'Absorption',
              definition: 'A bulk phenomenon wherein a substance penetrates throughout the entire volume of a solid or liquid matrix, forming a homogeneous solution or compound.'
            },
            {
              term: 'Physisorption (Physical Adsorption)',
              definition: 'Adsorption driven by non-specific, long-range van der Waals forces and electrostatic interactions, characterized by low enthalpy (typically 20–40 kJ/mol) and reversible multi-layer formation.'
            },
            {
              term: 'Chemisorption (Chemical Adsorption)',
              definition: 'Adsorption involving chemical electron transfer or orbital sharing between adsorbate and adsorbent surface atoms, characterized by high enthalpy (80–400 kJ/mol), high activation energy, and strictly monolayer coverage.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Surface Tension (γ)',
              definition: 'Surface par unit length par lagne wali force (N/m) ya surface area ko 1 m² barhanay ke liye darkaar work (J/m²).'
            },
            {
              term: 'Adsorption',
              definition: 'Molecules ka sirf surface par jama hona (surface phenomenon).'
            },
            {
              term: 'Absorption',
              definition: 'Substance ka poore bulk ke andar dakhil ho kar jazb ho jana (bulk phenomenon).'
            },
            {
              term: 'Physisorption',
              definition: 'Kamzor van der Waals forces ki wajah se adsorption, low heat of adsorption (20-40 kJ/mol) aur multilayer.'
            },
            {
              term: 'Chemisorption',
              definition: 'Asli chemical bond banne ki wajah se adsorption, high heat of adsorption (80-400 kJ/mol) aur sirf monolayer.'
            }
          ],
          detailedTheoryEn: `Thermodynamics of Adsorption:
For any spontaneous process at constant temperature and pressure, the change in Gibbs free energy must be negative:
\\Delta G = \\Delta H - T \\Delta S < 0

When adsorbate gas molecules transition from a 3D chaotic gas phase onto a 2D surface, their degrees of translational freedom are severely restricted. Consequently, the change in entropy is ALWAYS negative:
\\Delta S_{\\text{ads}} < 0

For ΔG to remain negative (spontaneous) when -TΔS is positive, the enthalpy change MUST be negative:
\\Delta H_{\\text{ads}} < 0
Therefore, adsorption is universally an EXOTHERMIC process. This fundamental thermodynamic truth dictates that increasing temperature shifts the adsorption equilibrium backward, decreasing total adsorption capacity at constant pressure (in accordance with Le Chatelier's principle).

Physisorption vs. Chemisorption Transition (Lennard-Jones Potential):
As a diatomic gas molecule (e.g., H₂) approaches a metal surface (e.g., Ni or Pt):
1. Physisorption curve: Shallow potential energy well (depth ~20 kJ/mol) at equilibrium distance r ≈ 0.3 nm due to induced dipole interactions. No activation energy required.
2. Chemisorption curve: As the molecule approaches closer (r ≈ 0.15 nm), chemical dissociation into H atoms occurs with deep potential energy well (depth ~250 kJ/mol). The intersection point of the physisorption and chemisorption curves defines the Activation Energy of Chemisorption (Ea).`,
          detailedTheoryUrRoman: `Adsorption ki Thermodynamics:
Har spontaneous process ke liye: ΔG = ΔH - TΔS < 0 hona laazmi hai.
Jab gas ke aazad ghoomte huay molecules kisi surface par aakar baithtay hain tou unki aazadi (randomness) kam ho jati hai, yaani Entropy hamesha negative hoti hai (ΔS < 0).
Agar ΔS negative hai tou -TΔS positive ban jata hai. Lihaza ΔG ko negative rakhne ke liye Enthalpy (ΔH) ka NEGATIVE hona lazmi hai.
Nateeja: Adsorption HAMESHA EXOTHERMIC (hararat kharij karne wala) amal hota hai. Isi liye temperature barhanay se adsorption kam ho jati hai!

Lennard-Jones Potential Diagram:
Jab H₂ gas nickel catalyst ke qareeb aati hai tou pehle kamzor physisorption hoti hai (bina kisi rukaawat ke). Phir jab molecule mazeed qareeb aata hai tou dono hydrogen atoms alag ho kar nickel ke sath covalent bond bana letay hain (chemisorption). In dono curves ke milne walay point ko Activation Energy kehte hain.`,
          equationsAndDerivations: [
            {
              nameEn: 'Interfacial Surface Work Equation',
              nameUrRoman: 'Surface Work Formula',
              formula: 'dw_{\\text{rev}} = \\gamma \\, dA',
              symbolsAndUnitsEn: [
                { symbol: 'dw_{\\text{rev}}', meaning: 'Reversible work done on system to expand area', siUnit: 'Joules (J)' },
                { symbol: '\\gamma', meaning: 'Surface tension or specific surface free energy', siUnit: 'N·m⁻¹ or J·m⁻²' },
                { symbol: 'dA', meaning: 'Differential change in surface area', siUnit: 'Square meters (m²)' }
              ]
            },
            {
              nameEn: 'Gibbs-Helmholtz Thermodynamic Relation for Surface Expansion',
              nameUrRoman: 'Gibbs-Helmholtz Surface Equation',
              formula: 'u^s = \\gamma - T \\left( \\frac{\\partial \\gamma}{\\partial T} \\right)_P',
              symbolsAndUnitsEn: [
                { symbol: 'u^s', meaning: 'Total surface internal energy per unit area', siUnit: 'J·m⁻²' },
                { symbol: '\\gamma', meaning: 'Surface free energy per unit area', siUnit: 'J·m⁻²' },
                { symbol: 'T', meaning: 'Absolute temperature', siUnit: 'Kelvin (K)' },
                { symbol: '\\left( \\frac{\\partial \\gamma}{\\partial T} \\right)_P', meaning: 'Temperature coefficient of surface tension (almost universally negative)', siUnit: 'N·m⁻¹·K⁻¹' }
              ]
            }
          ],
          comparisonTables: [
            {
              titleEn: 'Exhaustive Comparison: Physisorption vs. Chemisorption',
              titleUrRoman: 'Physisorption aur Chemisorption ka Mukammal Taqabuli Jaiza',
              headersEn: ['Characteristic Parameter', 'Physisorption (Physical Adsorption)', 'Chemisorption (Chemical Adsorption)'],
              headersUrRoman: ['Pehlu', 'Physisorption', 'Chemisorption'],
              rowsEn: [
                ['Nature of Attractive Forces', 'Weak, non-specific van der Waals forces (dispersion, dipole-dipole)', 'Strong chemical bonds (covalent, ionic, or coordinate d-orbital overlap)'],
                ['Enthalpy of Adsorption (ΔHads)', 'Low: 20 to 40 kJ/mol (comparable to heat of liquefaction)', 'High: 80 to 400 kJ/mol (comparable to chemical bond energy)'],
                ['Specificity', 'Completely non-specific; any gas will condense on any solid under appropriate P and T', 'Extremely specific; occurs only if electronic orbital pairing is thermodynamically favored'],
                ['Reversibility', 'Readily reversible by decreasing pressure or raising temperature', 'Irreversible or desorbs as altered chemical fragments (cracking)'],
                ['Layer Thickness', 'Forms multimolecular layers at high relative pressures (P/P₀ → 1)', 'Strictly monomolecular (monolayer) coverage only'],
                ['Activation Energy (Ea)', 'Negligible / zero activation energy required', 'Often requires significant activation energy (activated adsorption)'],
                ['Temperature Dependency', 'Decreases monotonically with increasing temperature', 'Initially increases with temperature (overcoming Ea) then reaches peak and decreases'],
                ['Typical State of Adsorbate', 'Molecules remain intact; minimal electronic distortion', 'Molecules frequently dissociate into atomic radicals or ions (e.g., H₂ → 2H· on Pt)']
              ],
              rowsUrRoman: [
                ['Kashish Ki Qism', 'Kamzor van der Waals forces', 'Mazboot chemical covalent ya coordinate bond'],
                ['Enthalpy (Heat of Adsorption)', 'Kam: 20 se 40 kJ/mol', 'Zyada: 80 se 400 kJ/mol'],
                ['Specificity', 'Ghair-makhsoos (har gas har surface par condense ho sakti hai)', 'Intehayi makhsoos (khas gas khas metal par chemical bond banati hai)'],
                ['Reversibility', 'Aasani se reversible (pressure kam karne se gas nikal jati hai)', 'Irreversible ya gas decompose ho kar nikalti hai'],
                ['Layers', 'Multilayer ban sakti hai', 'Sirf single monolayer banti hai'],
                ['Activation Energy', 'Zero (fauree ho jati hai)', 'Aksar high activation energy chahiye hoti hai'],
                ['Temperature ka Asar', 'Temperature barhanay se hamesha kam hoti hai', 'Pehle barhti hai phir kam hoti hai']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'At 20°C (293.15 K), the surface tension of water is γ = 7.28 × 10⁻² N/m, and its temperature coefficient (dγ/dT) is -1.55 × 10⁻⁴ N/(m·K). (a) Calculate the reversible mechanical work required to disperse 1.00 cm³ of pure water into spherical droplets of radius r = 1.00 μm. (b) Calculate the total surface internal energy per unit area (uˢ) of water at 20°C using the Gibbs-Helmholtz relation.',
              problemStatementUrRoman: '20°C par paani ki surface tension γ = 7.28 × 10⁻² N/m hai aur (dγ/dT) = -1.55 × 10⁻⁴ N/(m·K) hai. (a) 1.00 cm³ paani ko 1.00 μm radius ke chotay qatron (droplets) mein disperse karne ke liye kitna work chahiye? (b) Gibbs-Helmholtz equation se surface internal energy (uˢ) nikalein.',
              givenParametersEn: [
                'Total Volume V = 1.00 cm³ = 1.00 × 10⁻⁶ m³',
                'Droplet radius r = 1.00 μm = 1.00 × 10⁻⁶ m',
                'Surface tension γ = 7.28 × 10⁻² N/m',
                'Temperature T = 293.15 K',
                'dγ/dT = -1.55 × 10⁻⁴ N/(m·K)'
              ],
              givenParametersUrRoman: [
                'Volume V = 1.00 × 10⁻⁶ m³',
                'Radius r = 1.00 × 10⁻⁶ m',
                'γ = 7.28 × 10⁻² N/m',
                'T = 293.15 K',
                'dγ/dT = -1.55 × 10⁻⁴ N/(m·K)'
              ],
              governingFormulaEn: 'N_{\\text{droplets}} = \\frac{V}{\\frac{4}{3}\\pi r^3}; \\quad A_{\\text{total}} = N \\times 4\\pi r^2 = \\frac{3V}{r}; \\quad W = \\gamma \\Delta A; \\quad u^s = \\gamma - T \\left( \\frac{d\\gamma}{dT} \\right)',
              stepByStepSolutionEn: [
                'Step 1: Calculate total surface area of generated droplets: A_total = 3V / r = (3 × 1.00 × 10⁻⁶ m³) / (1.00 × 10⁻⁶ m) = 3.00 m².',
                'Initial surface area of 1 cm³ bulk sphere is negligible (~4.8 × 10⁻⁴ m²), so ΔA ≈ 3.00 m².',
                'Step 2: Calculate work: W = γ × ΔA = (7.28 × 10⁻² N/m) × (3.00 m²) = 0.2184 Joules.',
                'Step 3: Calculate total surface internal energy (uˢ):',
                'uˢ = γ - T(dγ/dT) = 7.28 × 10⁻² - [293.15 K × (-1.55 × 10⁻⁴ J/(m²·K))]',
                'uˢ = 7.28 × 10⁻² - [-0.04544] = 0.0728 + 0.04544 = 0.11824 J/m² = 118.2 mJ/m².'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: Droplets ka kul surface area: A = 3V / r = 3 × 10⁻⁶ / 10⁻⁶ = 3.00 m².',
                'Qadam 2: Work nikalein: W = γ × ΔA = 0.0728 × 3.00 = 0.2184 Joules.',
                'Qadam 3: Surface internal energy: uˢ = γ - T(dγ/dT) = 0.0728 - (293.15 × -0.000155) = 0.0728 + 0.04544 = 0.1182 J/m².'
              ],
              finalAnswerEn: 'Work W = 0.218 J; Total Surface Internal Energy uˢ = 0.118 J/m² (118.2 mJ/m²).',
              finalAnswerUrRoman: 'Work W = 0.218 J; Surface Internal Energy uˢ = 0.118 J/m².',
              unitsAndCheckEn: 'Validation: Creating 3 square meters of liquid interface from a 1 cm³ cube requires net positive mechanical energy (0.218 J), proving that surface formation is non-spontaneous and thermodynamically unfavorable without external work.',
              unitsAndCheckUrRoman: 'Tasdeeq: Nateeja zahir karta hai ke 1 cm³ paani ko bareek qatron mein phaila kar 3 square meter surface banane ke liye bahir se energy lagani parti hai.'
            }
          ],
          applicationsEn: [
            'Formulating stable pharmaceutical micro-emulsions and nano-suspensions by lowering interfacial tension using non-ionic surfactants.',
            'Designing heterogeneous catalysts (e.g., Haber-Bosch iron catalysts for N₂ chemisorption and NH₃ synthesis).',
            'Enhanced Oil Recovery (EOR) via surfactant flooding to alter reservoir rock surface wettability from oil-wet to water-wet.'
          ],
          applicationsUrRoman: [
            'Pharmaceutical syrups aur emulsions ko kharab hone se bachane ke liye surface tension kam karna.',
            'Industrial catalysts (jaise ammonia banane ke liye Haber process mein iron par nitrogen ki chemisorption).',
            'Zameen ke andar se petroleum nikalne ke liye rock surface ki wettability ko badalna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'Adsorption and absorption are merely two different spellings for the same physical phenomenon.',
              correction: 'Adsorption is strictly a surface phenomenon where molecules adhere to the phase boundary. Absorption is a bulk phenomenon where molecules diffuse uniformly throughout the volume of the sorbent.'
            },
            {
              misconception: 'Chemisorption always increases as temperature is raised.',
              correction: 'At low temperatures, chemisorption increases with temperature because adsorbate molecules gain thermal energy to overcome the activation energy barrier (activated chemisorption). Once all active surface sites are saturated, further temperature increases cause desorption due to exothermic thermodynamic equilibrium.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Adsorption aur absorption aik hi cheez hain.',
              correction: 'Adsorption sirf satah (surface) par hoti hai jabkay absorption poore jism (bulk) ke andar hoti hai (jaise sponge paani ko jazb karta hai).'
            }
          ],
          examImportantPointsEn: [
            'Proof that adsorption is universally exothermic (ΔH < 0) based on ΔS < 0 and ΔG < 0.',
            'The 8-point comparison table between physisorption and chemisorption.',
            'Dimensional equivalence of surface tension (N/m) and surface free energy (J/m²).'
          ],
          examImportantPointsUrRoman: [
            'Thermodynamic saboot ke adsorption hamesha exothermic kyun hoti hai.',
            'Physisorption aur Chemisorption ka farq exam ka must-ask sawal hai.',
            'Surface tension ki units N/m aur J/m² ka barabar hona.'
          ],
          revisionSummaryEn: 'Surface molecules experience uncompensated inward intermolecular forces, creating surface tension and surface free energy. Adsorption concentrates molecules on surfaces to lower interfacial free energy. Because adsorption restricts molecular mobility (ΔS < 0), it is universally exothermic (ΔH < 0). Physisorption relies on weak van der Waals forces and forms multilayers, whereas chemisorption forms strong chemical bonds and is strictly limited to a monolayer.',
          revisionSummaryUrRoman: 'Surface molecules par andar ki taraf uncompensated forces lagti hain jisse surface energy peda hoti hai. Adsorption satah par molecules jama kar ke surface energy ko kam karti hai. Entropy kam hone ki wajah se adsorption hamesha exothermic hoti hai. Physisorption kamzor van der Waals forces se hoti hai jabkay Chemisorption covalent chemical bond banati hai.',
          flashcards: [
            {
              id: 'fc-surf-1',
              category: 'Surface Thermodynamics',
              frontEn: 'Why is the enthalpy of adsorption (ΔH_ads) always negative (exothermic)?',
              frontUrRoman: 'Adsorption ki Enthalpy (ΔH) hamesha negative (exothermic) kyun hoti hai?',
              backEn: 'Adsorption restricts molecular translational freedom, making entropy change negative (ΔS < 0). For spontaneous adsorption at constant T and P, ΔG = ΔH - TΔS must be negative. Since -TΔS is positive, ΔH MUST be negative (exothermic).',
              backUrRoman: 'Kyunke molecules surface par jam jatay hain tou unki entropy kam hoti hai (ΔS < 0). ΔG = ΔH - TΔS ko negative (spontaneous) rakhne ke liye ΔH ka negative hona laazmi hai.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-surf-1',
              subjectId: 'chem-7124',
              topicId: 'surf-top-1',
              questionEn: 'Prove dimensionally that the unit of Surface Tension (N/m) is identical to the unit of Surface Free Energy (J/m²).',
              questionUrRoman: 'Units ke hisaab se saabit karein ke Surface Tension (N/m) aur Surface Free Energy (J/m²) aapas mein barabar hain.',
              modelAnswerEn: '1 Joule is defined as 1 Newton-meter (1 J = 1 N·m). Substituting this into the unit of surface free energy: J/m² = (N·m) / m² = N/m. Therefore, the mechanical definition of surface tension (force per unit length, N/m) is dimensionally and physically identical to the thermodynamic definition (energy required to create unit area, J/m²).',
              modelAnswerUrRoman: '1 Joule = 1 Newton × meter hota hai. Lihaza: J/m² = (N·m)/m² = N/m. Is se saabit hua ke force per unit length (N/m) aur energy per unit area (J/m²) bilkul aik hi cheez hain.',
              keyPointsEn: [
                '1 J = 1 N·m',
                'J/m² = (N·m)/m² = N/m'
              ],
              keyPointsUrRoman: [
                '1 J = 1 N·m',
                'J/m² = N/m'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-surf-1',
              subjectId: 'chem-7124',
              topicId: 'surf-top-1',
              questionEn: 'Explicate the Lennard-Jones potential energy diagram for the dissociative chemisorption of a diatomic gas on a transition-metal surface. Contrast activated versus non-activated chemisorption, and analyze the temperature dependency of both physical and chemical adsorption.',
              questionUrRoman: 'Transition metal par diatomic gas ki dissociative chemisorption ke liye Lennard-Jones potential energy diagram banayein. Activated aur non-activated chemisorption ka farq wazeh karein aur temperature ke asar ka tajziya karein.',
              rubricEn: [
                'Lennard-Jones dual potential energy curves (physisorption vs chemisorption) (4 marks)',
                'Activation energy barrier (Ea) determination and crossing point (3 marks)',
                'Temperature dependency profiles of physisorption vs chemisorption (3 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'The transition of an approaching gas molecule from an initial weakly bound physical state into a strongly bound chemical state is modeled through Lennard-Jones potential energy curves.',
                mainExplanation: 'Dual Curves: (1) The Physisorption curve represents the intact diatomic molecule approaching the metal surface; it possesses a shallow minimum (-20 to -40 kJ/mol) at distance r_phys ≈ 0.35 nm due to van der Waals attractions. (2) The Chemisorption curve starts higher by an energy equal to the gas-phase dissociation energy (D_M-M) of the molecule; as distance decreases, orbital overlap with metal d-bands forms covalent surface bonds, yielding a deep minimum (-100 to -350 kJ/mol) at r_chem ≈ 0.15 nm.',
                derivationOrScheme: 'Potential Energy V(r) vs. Distance: If the crossing point of the two curves lies ABOVE the zero-energy baseline, the process is Activated Chemisorption with activation barrier Ea. If the crossing lies BELOW the zero-line, adsorption is Non-Activated and proceeds spontaneously at low temperatures.',
                applicationsOrCriticalAnalysis: 'Temperature Dependency: Physisorption decreases monotonically with increasing temperature because it is unactivated and exothermic. Chemisorption initially rises with temperature as molecules acquire thermal kinetic energy to overcome Ea (activated chemisorption), passes through a maximum, and then decreases at elevated temperatures as thermal desorption kinetics dominate.',
                conclusion: 'The Lennard-Jones potential model provides the microscopic foundation for heterogeneous catalytic activation, explaining why industrial catalysts often require elevated ignition temperatures to initiate dissociative chemisorption.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Gas molecule ka surface par aana aur bond banana Lennard-Jones potential energy diagram se samjhaya jata hai.',
                mainExplanation: 'Isme do curves hoti hain: 1. Physisorption curve: Gas molecule intact rehta hai aur 0.35 nm faslay par kamzor van der Waals well (-20 se -40 kJ/mol) banata hai. 2. Chemisorption curve: Molecule toot kar atoms ban jata hai aur 0.15 nm par metal d-orbitals ke sath mazboot bond (-100 se -300 kJ/mol) banata hai.',
                derivationOrScheme: 'Dono curves ka crossing point Activation Energy (Ea) banata hai. Agar yeh point zero baseline se ooper ho tou isay Activated Chemisorption kehte hain.',
                applicationsOrCriticalAnalysis: 'Temperature ka Asar: Physisorption hamesha temperature barhanay se girti hai. Chemisorption pehle barhti hai taake molecules Ea cross kar sakein, aur phir aala temperature par desorption ki wajah se girti hai.',
                conclusion: 'Yahi wajah hai ke industrial chemical reactors ko shuru mein garam karna parta hai taake gas molecules metal catalyst par toot kar activate ho sakein.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-surf-1',
              subjectId: 'chem-7124',
              moduleId: 'surf-mod-1',
              topicId: 'surf-top-1',
              questionEn: 'Which of the following thermodynamic statements is unconditionally TRUE for all spontaneous adsorption processes occurring on a solid surface at constant temperature and pressure?',
              questionUrRoman: 'Constant temperature aur pressure par solid surface par hone wali spontaneous adsorption ke liye darj zail mein se konsi statement 100% SACH hai?',
              options: [
                { id: 'opt-a', textEn: 'ΔG < 0, ΔH > 0, ΔS > 0', textUrRoman: 'ΔG < 0, ΔH > 0, ΔS > 0' },
                { id: 'opt-b', textEn: 'ΔG < 0, ΔH < 0, ΔS < 0', textUrRoman: 'ΔG < 0, ΔH < 0, ΔS < 0' },
                { id: 'opt-c', textEn: 'ΔG > 0, ΔH < 0, ΔS > 0', textUrRoman: 'ΔG > 0, ΔH < 0, ΔS > 0' },
                { id: 'opt-d', textEn: 'ΔG < 0, ΔH < 0, ΔS > 0', textUrRoman: 'ΔG < 0, ΔH < 0, ΔS > 0' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'Spontaneity requires ΔG < 0. Because gas molecules lose translational freedom when bound to a 2D surface, entropy decreases (ΔS < 0). For ΔG = ΔH - TΔS to remain negative when -TΔS is positive, the enthalpy change must be negative (ΔH < 0, exothermic). Thus, ΔG < 0, ΔH < 0, and ΔS < 0.',
              explanationUrRoman: 'Spontaneous hone ke liye ΔG negative hona chahiye. Molecules ke surface par baithne se aazadi kam hoti hai tou ΔS negative hota hai. Formula ΔG = ΔH - TΔS mein ΔG ko negative rakhne ke liye ΔH ka negative (exothermic) hona laazmi hai. Lihaza teeno negative hain.',
              difficulty: 'Foundation',
              referenceSource: 'CHEM-7124 Physical Chemistry Core Curriculum'
            }
          ],
          referencesEn: [
            { citation: 'Adamson, A. W., & Gast, A. P. (1997). Physical Chemistry of Surfaces (6th ed.). John Wiley & Sons.', type: 'Standard Textbook' },
            { citation: 'Atkins, P., de Paula, J., & Keeler, J. (2018). Atkins\' Physical Chemistry (11th ed.). Oxford University Press.', type: 'Standard Textbook' }
          ]
        }
      }
    ]
  },
  {
    id: 'surf-mod-2',
    subjectId: 'chem-7124',
    moduleNumber: 2,
    titleEn: 'Adsorption Isotherms & Mathematical Models',
    titleUrRoman: 'Adsorption Isotherms aur Mathematical Models',
    overviewEn: 'Langmuir monolayer adsorption isotherm derivation, Freundlich empirical model, BET multilayer theory, Henry’s law, and step-by-step solved numericals.',
    overviewUrRoman: 'Langmuir isotherm ki mathematical derivation, Freundlich model, BET theory, Henry’s law aur numerical calculations.',
    weekSchedule: 'Weeks 4–6',
    topics: [
      {
        id: 'surf-top-2',
        moduleId: 'surf-mod-2',
        subjectId: 'chem-7124',
        titleEn: 'Langmuir Derivation, Freundlich Isotherm & BET Surface Area Theory',
        titleUrRoman: 'Langmuir Derivation, Freundlich Isotherm aur BET Theory',
        estimatedMinutes: 60,
        officialTopicMapping: 'Module 2: Langmuir adsorption isotherm; Freundlich isotherm; BET adsorption theory; Henry\'s law; assumptions; mathematical derivations; solved numericals.',
        isSupplementary: false,
        lessonContent: {
          id: 'surf-les-2',
          topicId: 'surf-top-2',
          titleEn: 'Adsorption Isotherms: Kinetic Derivation of Langmuir, Freundlich Model, and BET Multilayer Theory',
          titleUrRoman: 'Adsorption Isotherms: Langmuir Derivation, Freundlich Model aur BET Theory',
          learningObjectivesEn: [
            'State all five fundamental kinetic assumptions underpinning the Langmuir adsorption model.',
            'Derive the Langmuir adsorption isotherm from kinetic equilibrium of condensation and evaporation rates.',
            'Express the Langmuir equation in its four distinct linearized forms (Hanes-Woolf, Lineweaver-Burk, Eadie-Hofstee, Scatchard) and determine qmax and KL.',
            'Derive and explain the Freundlich empirical isotherm, interpreting the heterogeneity parameter 1/n.',
            'Understand the Brunauer-Emmett-Teller (BET) multilayer adsorption equation and calculate specific surface area (SBET).'
          ],
          learningObjectivesUrRoman: [
            'Langmuir model ke paancho bunyadi assumptions yaad rakhna.',
            'Adsorption aur desorption rates ko barabar rakh kar Langmuir isotherm derive karna.',
            'Langmuir equation ke chaaron linear forms se qmax aur KL calculate karna.',
            'Freundlich isotherm aur heterogeneity factor 1/n ka matlab samajhna.',
            'BET multilayer equation se powder ka specific surface area (m²/g) calculate karna.'
          ],
          prerequisitesEn: [
            'Chemical equilibrium and rate laws of elementary reversible reactions.',
            'Linear regression graphing (y = mx + c) and coordinate transformations.'
          ],
          prerequisitesUrRoman: [
            'Chemical equilibrium aur rate equations ki bunyadi samajh.',
            'Linear graph (y = mx + c) ki dhalwan (slope) aur intercept nikalna.'
          ],
          introductionEn: `An adsorption isotherm describes the quantitative equilibrium relationship between the amount of gas or solute adsorbed onto a solid surface and the equilibrium pressure (P) or concentration (Ce) in the contacting fluid phase at constant temperature. Irving Langmuir was awarded the 1932 Nobel Prize in Chemistry in part for deriving the first mathematically rigorous, physically grounded model of surface monolayer coverage. Understanding Langmuir, Freundlich, and BET isotherms is essential for characterizing porous materials, heterogeneous catalysts, and water purification filters.`,
          introductionUrRoman: `Adsorption Isotherm us graph aur mathematical taluq ko kehte hain jo batata hai ke constant temperature par kitni gas ya solute kisi surface par jam chuka hai. Irving Langmuir ne 1932 mein chemistry ka Nobel Prize hasil kiya jab usne satah par monolayer adsorption ki pehli mathematical derivation pesh ki. MPhil chemistry ke har student ke liye Langmuir, Freundlich aur BET isotherms ko samajhna aur unke numericals hal karna lazmi hai.`,
          definitionsEn: [
            {
              term: 'Adsorption Isotherm',
              definition: 'A mathematical function or curve linking the quantity of adsorbate bound to an adsorbent surface to its equilibrium gas pressure (P) or solution concentration (Ce) at a strictly constant temperature.'
            },
            {
              term: 'Fractional Surface Coverage (θ)',
              definition: 'The dimensionless ratio of the number of occupied adsorption surface sites to the total number of available active sites on the adsorbent (0 ≤ θ ≤ 1).'
            },
            {
              term: 'Maximum Monolayer Capacity (qmax or Vm)',
              definition: 'The theoretical maximum amount of adsorbate that completely saturates the surface active sites with a single continuous molecular layer.'
            },
            {
              term: 'Separation Factor (RL)',
              definition: 'A dimensionless equilibrium parameter defined as RL = 1 / (1 + KL·C₀) that predicts whether an adsorption process is unfavorable (RL > 1), linear (RL = 1), favorable (0 < RL < 1), or irreversible (RL = 0).'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Adsorption Isotherm',
              definition: 'Constant temperature par pressure ya concentration ke sath surface par jama hone walay mawaad ka graph.'
            },
            {
              term: 'Fractional Surface Coverage (θ)',
              definition: 'Surface ke occupied hissay aur kul mojood active sites ka tanasub (ratio).'
            },
            {
              term: 'Maximum Monolayer Capacity (qmax)',
              definition: 'Solute ki woh zyada se zyada miqdaar jo surface par aik single layer bana sakay.'
            },
            {
              term: 'Separation Factor (RL)',
              definition: 'Dimensionless number RL = 1 / (1 + KL·C₀) jo batata hai ke adsorption favorable hai (0 < RL < 1) ya nahi.'
            }
          ],
          detailedTheoryEn: `Derivation of the Langmuir Adsorption Isotherm:
          
Fundamental Assumptions of Langmuir:
1. Monolayer Coverage: Adsorption cannot proceed beyond a single molecular layer.
2. Equivalent Sites: The solid surface is energetically homogeneous; all active sites possess identical affinity for the adsorbate.
3. No Lateral Interactions: Adsorbed molecules do not interact with one another (no lateral repulsion or attraction).
4. Localized Adsorption: Adsorbed molecules are anchored to specific sites and cannot migrate across the surface plane.
5. Dynamic Equilibrium: The rate of adsorption equals the rate of desorption at equilibrium.

Mathematical Derivation:
Let total sites = N. Let fraction of occupied sites = θ. Fraction of vacant sites = (1 - θ).
Rate of Adsorption (condensation): Proportional to gas pressure P and fraction of vacant sites:
r_{\\text{ads}} = k_a P (1 - \\theta)

Rate of Desorption (evaporation): Proportional to fraction of occupied sites:
r_{\\text{des}} = k_d \\theta

At dynamic equilibrium, r_ads = r_des:
k_a P (1 - \\theta) = k_d \\theta
k_a P - k_a P \\theta = k_d \\theta
k_a P = \\theta (k_d + k_a P)

Solving for θ:
\\theta = \\frac{k_a P}{k_d + k_a P}
Dividing numerator and denominator by kd, and setting the Langmuir equilibrium adsorption constant K_L = ka / kd:
\\theta = \\frac{K_L P}{1 + K_L P}

Since fractional coverage θ = qe / qmax (or V / Vm):
q_e = \\frac{q_{\\max} K_L P}{1 + K_L P} \\quad \\text{or in solution: } q_e = \\frac{q_{\\max} K_L C_e}{1 + K_L C_e}

Limiting Cases of Langmuir:
1. Low Pressure / Concentration Regime (KL·P << 1):
   Denominator 1 + KL·P ≈ 1.
   qe = qmax · KL · P = kH · P.
   This reduces directly to Henry's Law (linear adsorption).
2. High Pressure Regime (KL·P >> 1):
   Denominator 1 + KL·P ≈ KL·P.
   qe = (qmax · KL · P) / (KL · P) = qmax = Constant.
   Surface becomes saturated; adsorption becomes independent of pressure (zero-order kinetics).`,
          detailedTheoryUrRoman: `Langmuir Adsorption Isotherm ki Derivation:
Langmuir ke 5 bunyadi Farziyaat (Assumptions):
1. Satah par sirf aik single molecular layer (monolayer) banegi.
2. Satah bilkul barabar (homogeneous) hai aur tamam sites ki energy aik jaisi hai.
3. Jama hone walay molecules aik doosray par koi force nahi lagate (no lateral interactions).
4. Molecules apni jagah par jam jatay hain aur aagay peeche harkat nahi karte.
5. Dynamic equilibrium par Adsorption ki raftaar Desorption ki raftaar ke barabar hoti hai.

Derivation:
Farz karein occupied sites ka hissa = θ hai, tou khali sites = (1 - θ) hongi.
Adsorption ki raftaar: r_ads = ka × P × (1 - θ)
Desorption ki raftaar: r_des = kd × θ
Equilibrium par:
ka × P × (1 - θ) = kd × θ
ka·P - ka·P·θ = kd·θ
ka·P = θ(kd + ka·P)
θ = (ka·P) / (kd + ka·P)
kd se divide karein aur KL = ka/kd farz karein:
θ = (KL·P) / (1 + KL·P)

Kyunke θ = qe / qmax hota hai:
qe = (qmax × KL × P) / (1 + KL × P)

Intehayi Halatein:
1. Kam Pressure par: KL·P bohot chota hota hai tou qe = qmax·KL·P (Henry ka Qanoon - linear line).
2. Bohat Zyada Pressure par: Satah bhar jati hai aur qe = qmax (constant horizontal line).`,
          equationsAndDerivations: [
            {
              nameEn: 'Langmuir Isotherm Linear Form (Hanes-Woolf Plot)',
              nameUrRoman: 'Langmuir Linear Form (Hanes-Woolf)',
              formula: '\\frac{C_e}{q_e} = \\frac{1}{q_{\\max} K_L} + \\frac{C_e}{q_{\\max}}',
              symbolsAndUnitsEn: [
                { symbol: 'C_e', meaning: 'Equilibrium adsorbate concentration', siUnit: 'mg·L⁻¹ or mol·L⁻¹' },
                { symbol: 'q_e', meaning: 'Equilibrium adsorption capacity', siUnit: 'mg·g⁻¹ or mol·g⁻¹' },
                { symbol: 'q_{\\max}', meaning: 'Maximum monolayer saturation capacity', siUnit: 'mg·g⁻¹ (calculated from 1/slope)' },
                { symbol: 'K_L', meaning: 'Langmuir affinity constant', siUnit: 'L·mg⁻¹ (calculated from slope/intercept)' }
              ],
              derivationStepsEn: [
                'Start with non-linear Langmuir: qe = (qmax KL Ce) / (1 + KL Ce)',
                'Invert both sides: 1/qe = (1 + KL Ce) / (qmax KL Ce) = 1/(qmax KL Ce) + 1/qmax',
                'Multiply entire equation by Ce:',
                'Ce / qe = (1 / (qmax KL)) + (1 / qmax) Ce',
                'Plotting (Ce / qe) on Y-axis vs Ce on X-axis yields a straight line with Slope = 1/qmax and Y-intercept = 1/(qmax KL).'
              ]
            },
            {
              nameEn: 'Freundlich Empirical Isotherm Equation',
              nameUrRoman: 'Freundlich Isotherm Formula',
              formula: 'q_e = K_F C_e^{1/n} \\implies \\ln q_e = \\ln K_F + \\frac{1}{n} \\ln C_e',
              symbolsAndUnitsEn: [
                { symbol: 'K_F', meaning: 'Freundlich capacity constant', siUnit: '(mg·g⁻¹)(L·mg⁻¹)^(1/n)' },
                { symbol: '1/n', meaning: 'Heterogeneity factor (0.1 < 1/n < 1.0 indicates favorable adsorption)', siUnit: 'Dimensionless' }
              ]
            },
            {
              nameEn: 'Brunauer-Emmett-Teller (BET) Isotherm Equation',
              nameUrRoman: 'BET Multilayer Equation',
              formula: '\\frac{P}{V (P_0 - P)} = \\frac{1}{V_m C} + \\frac{C - 1}{V_m C} \\left( \\frac{P}{P_0} \\right)',
              symbolsAndUnitsEn: [
                { symbol: 'P/P_0', meaning: 'Relative gas pressure (typically linear in range 0.05 to 0.35)', siUnit: 'Dimensionless' },
                { symbol: 'V', meaning: 'Volume of gas adsorbed at STP', siUnit: 'cm³ (STP) or cm³·g⁻¹' },
                { symbol: 'V_m', meaning: 'Volume of gas corresponding to complete monolayer coverage', siUnit: 'cm³·g⁻¹' },
                { symbol: 'C', meaning: 'BET constant related exponentially to net heat of adsorption', siUnit: 'Dimensionless' }
              ]
            }
          ],
          comparisonTables: [
            {
              titleEn: 'Comparison of Adsorption Isotherm Models',
              titleUrRoman: 'Adsorption Isotherm Models ka Taqabul',
              headersEn: ['Model', 'Theoretical Foundation', 'Layer Type', 'Surface Energy Nature', 'Key Limitation'],
              headersUrRoman: ['Model', 'Bunyadi Theory', 'Layer Type', 'Surface Energy', 'Kharabi / Limitation'],
              rowsEn: [
                ['Langmuir', 'Kinetic dynamic equilibrium', 'Strictly Monolayer', 'Homogeneous (all sites equal energy)', 'Fails at high relative pressure P/P₀ where multilayer condensation occurs'],
                ['Freundlich', 'Empirical / Exponential distribution of site energies', 'Multilayer / Infinite accumulation', 'Heterogeneous (sites have diverse affinities)', 'Has no Henry’s law limit at low concentration and no saturation plateau at high concentration'],
                ['BET', 'Statistical mechanics of multilayer condensation', 'Infinite Multilayers', 'Homogeneous first layer, liquefaction subsequent layers', 'Restricted to physical gas adsorption at low temperatures (e.g. N₂ at 77 K)']
              ],
              rowsUrRoman: [
                ['Langmuir', 'Kinetic equilibrium', 'Sirf Monolayer', 'Homogeneous (sab sites barabar)', 'High pressure par multilayer ko explain nahi kar sakta'],
                ['Freundlich', 'Empirical (tajarbati)', 'Multilayer', 'Heterogeneous (mukhtalif energy)', 'Bohat zyada concentration par rukta nahi hai'],
                ['BET', 'Multilayer condensation', 'Multilayers', 'First layer chemical, baqi liquid jaisi', 'Sirf low temperature gas adsorption (77K) par chalta hai']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'An environmental chemist investigates the adsorption of methylene blue dye onto activated carbon at 25°C. The equilibrium batch adsorption data is fitted to the linearized Langmuir equation: (Ce / qe) = 0.0250 Ce + 0.1500, where Ce is in mg/L and qe is in mg/g. (a) Determine the maximum monolayer adsorption capacity (qmax). (b) Calculate the Langmuir equilibrium constant (KL). (c) If the initial dye concentration is C₀ = 200 mg/L, calculate the dimensionless separation factor (RL) and state whether adsorption is favorable.',
              problemStatementUrRoman: 'Activated carbon par dye adsorption ka data Langmuir linear equation par fit hua: (Ce / qe) = 0.0250 Ce + 0.1500. (a) Maximum capacity qmax nikalein. (b) Langmuir constant KL nikalein. (c) Agar initial concentration C₀ = 200 mg/L ho tou separation factor RL nikalein aur batayein process favorable hai ya nahi.',
              givenParametersEn: [
                'Linear equation: Y = mX + c where m (slope) = 0.0250 g/mg',
                'Y-intercept c = 0.1500 g/L',
                'Initial concentration C₀ = 200 mg/L'
              ],
              givenParametersUrRoman: [
                'Slope m = 0.0250 g/mg',
                'Intercept c = 0.1500 g/L',
                'C₀ = 200 mg/L'
              ],
              governingFormulaEn: '\\text{Slope } m = \\frac{1}{q_{\\max}}; \\quad \\text{Intercept } c = \\frac{1}{q_{\\max} K_L}; \\quad K_L = \\frac{m}{c}; \\quad R_L = \\frac{1}{1 + K_L C_0}',
              stepByStepSolutionEn: [
                'Step 1: Calculate qmax from slope: qmax = 1 / m = 1 / 0.0250 = 40.0 mg/g.',
                'Step 2: Calculate KL: KL = m / c = 0.0250 / 0.1500 = 0.1667 L/mg.',
                'Alternative check: c = 1 / (qmax KL) => KL = 1 / (40.0 × 0.1500) = 1 / 6.00 = 0.1667 L/mg.',
                'Step 3: Calculate Separation Factor (RL):',
                'RL = 1 / (1 + KL × C₀) = 1 / (1 + 0.1667 × 200) = 1 / (1 + 33.34) = 1 / 34.34 = 0.0291.',
                'Step 4: Interpretation: Because 0 < RL < 1 (RL = 0.0291), the adsorption of methylene blue onto this activated carbon is highly favorable.'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: Slope se qmax nikalein: qmax = 1 / 0.0250 = 40.0 mg/g.',
                'Qadam 2: KL nikalein: KL = slope / intercept = 0.0250 / 0.1500 = 0.1667 L/mg.',
                'Qadam 3: Separation factor RL: RL = 1 / (1 + 0.1667 × 200) = 1 / 34.34 = 0.0291.',
                'Qadam 4: Chunke RL ki value 0 aur 1 ke darmiyan hai (0.0291), is liye adsorption intehayi favorable hai.'
              ],
              finalAnswerEn: 'qmax = 40.0 mg/g; KL = 0.167 L/mg; RL = 0.0291 (Favorable adsorption).',
              finalAnswerUrRoman: 'qmax = 40.0 mg/g, KL = 0.167 L/mg, RL = 0.0291 (Favorable).',
              unitsAndCheckEn: 'Validation: An RL of 0.0291 (< 0.1) confirms robust, high-affinity binding without reaching irreversible trapping (RL = 0).',
              unitsAndCheckUrRoman: 'Check: RL ki 0.0291 value saabit karti hai ke activated carbon dye ko zabardast tareeqay se pakarta hai.'
            }
          ],
          applicationsEn: [
            'Standardized determination of specific surface area (SBET, m²/g) of metal-organic frameworks (MOFs) and zeolites for hydrogen gas storage.',
            'Designing municipal wastewater tertiary adsorption columns using granular activated carbon (GAC).',
            'Determining catalyst pore volume and monolayer completion thresholds in fluid catalytic cracking (FCC).'
          ],
          applicationsUrRoman: [
            'MOFs aur Zeolites ka specific surface area (m²/g) BET method se nikalna taake hydrogen gas store ki ja sakay.',
            'Water treatment plants mein activated carbon filters ka size calculate karna.',
            'Petroleum refineries mein cracking catalysts ka pore volume maloom karna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'The BET equation is valid across the entire relative pressure range from P/P₀ = 0.0 to 1.0.',
              correction: 'False. The linear range of the BET equation is strictly restricted to relative pressures between P/P₀ = 0.05 and 0.35. At P/P₀ < 0.05, submonolayer energetics are non-uniform; at P/P₀ > 0.35, capillary condensation inside pores invalidates the model.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'BET equation har pressure (0 se 100%) par kaam karti hai.',
              correction: 'Ghalat. BET equation sirf relative pressure 0.05 se 0.35 ke darmian valid hoti hai. 0.35 se ooper pores mein capillary condensation shuru ho jati hai.'
            }
          ],
          examImportantPointsEn: [
            'Full step-by-step kinetic derivation of the Langmuir equation: θ = KL·P / (1 + KL·P).',
            'Derivation of the linear Hanes-Woolf equation: Ce/qe = 1/(qmax KL) + Ce/qmax.',
            'Definition and values of Separation Factor (RL): RL > 1 (unfavorable), RL = 1 (linear), 0 < RL < 1 (favorable), RL = 0 (irreversible).'
          ],
          examImportantPointsUrRoman: [
            'Langmuir equation ki derivation exam ka sab se ahem long question hai.',
            'Separation factor RL ke 4 cases (unfavorable, linear, favorable, irreversible).',
            'BET equation ka formula aur 77K nitrogen physisorption ki ahmiyat.'
          ],
          revisionSummaryEn: 'The Langmuir isotherm models monolayer coverage on homogeneous surfaces via kinetic equilibrium between adsorption and desorption. It simplifies to Henry’s law at low pressure and approaches maximum saturation capacity (qmax) at high pressure. The empirical Freundlich model captures surface heterogeneity, while the BET isotherm extends adsorption theory to infinite multilayers, providing the international gold standard for specific surface area determination.',
          revisionSummaryUrRoman: 'Langmuir isotherm homogeneous surface par monolayer adsorption ko explain karta hai. Kam pressure par yeh Henry law ban jata hai aur aala pressure par qmax par ja kar ruk jata hai. Freundlich model heterogeneous surface ke liye hai aur BET isotherm multilayers ko cover kar ke powder ka surface area maloom karta hai.',
          flashcards: [
            {
              id: 'fc-surf-2',
              category: 'Adsorption Isotherms',
              frontEn: 'What does a dimensionless Separation Factor RL value between 0 and 1 indicate?',
              frontUrRoman: 'Separation Factor RL ki value 0 aur 1 ke darmiyan hone ka kya matlab hai?',
              backEn: 'A value of 0 < RL < 1 indicates that the adsorption process is thermodynamically favorable. RL = 0 denotes irreversible adsorption, RL = 1 is linear, and RL > 1 is unfavorable.',
              backUrRoman: '0 < RL < 1 ka matlab hai ke adsorption process favorable (faidamand) hai. RL = 0 ka matlab irreversible aur RL > 1 unfavorable hota hai.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-surf-2',
              subjectId: 'chem-7124',
              topicId: 'surf-top-2',
              questionEn: 'State the five fundamental assumptions of the Langmuir adsorption isotherm.',
              questionUrRoman: 'Langmuir adsorption isotherm ke paancho bunyadi assumptions likhein.',
              modelAnswerEn: 'The five assumptions are: (1) Adsorption is strictly monolayer; (2) All adsorption sites are energetically equivalent (homogeneous surface); (3) Each site can hold only one adsorbate molecule; (4) There are no lateral interactions (attractive or repulsive) between adjacent adsorbed molecules; (5) Adsorption is localized and governed by dynamic equilibrium where rate of adsorption equals rate of desorption.',
              modelAnswerUrRoman: '1. Satah par sirf aik single monolayer banegi; 2. Tamam active sites ki energy barabar hai (homogeneous); 3. Aik site par sirf aik molecule baith sakta hai; 4. Molecules aapas mein koi force nahi lagate; 5. Rate of adsorption aur rate of desorption dynamic equilibrium par barabar hotay hain.',
              keyPointsEn: [
                'Monolayer only',
                'Homogeneous equal-energy sites',
                'No lateral interactions',
                'Localized adsorption and dynamic equilibrium'
              ],
              keyPointsUrRoman: [
                'Sirf monolayer',
                'Homogeneous surface',
                'No lateral interaction',
                'Dynamic equilibrium'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-surf-2',
              subjectId: 'chem-7124',
              topicId: 'surf-top-2',
              questionEn: 'Derive the complete Langmuir adsorption isotherm from kinetic principles for gas adsorption on a solid surface. Discuss the behavior of the isotherm at both the low-pressure and high-pressure limits. Show how this equation is linearized into the Hanes-Woolf and Lineweaver-Burk forms.',
              questionUrRoman: 'Gas-solid adsorption ke liye kinetic principles se Langmuir adsorption isotherm ki mukammal derivation karein. Kam aur aala pressure par iska behavior wazeh karein aur Hanes-Woolf aur Lineweaver-Burk linear equations derive karein.',
              rubricEn: [
                'Formulation of adsorption and desorption rate expressions (3 marks)',
                'Equilibrium derivation of fractional coverage θ (3 marks)',
                'Low-pressure (Henry’s law) and high-pressure (plateau) limits (2 marks)',
                'Derivation of two linear graphing forms with slope/intercept formulas (2 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'Langmuir proposed that gas molecules colliding with a solid surface condense onto vacant sites, while adsorbed molecules evaporate back into the gas phase. At equilibrium, the rates of these two opposing processes are equal.',
                mainExplanation: 'Rate of Adsorption: r_ads = ka · P · (1 - θ). Rate of Desorption: r_des = kd · θ. Equating both: ka · P · (1 - θ) = kd · θ. Expanding and collecting terms: ka·P = θ(kd + ka·P). Dividing by kd and defining KL = ka/kd yields the Langmuir equation: θ = (KL·P) / (1 + KL·P).',
                derivationOrScheme: 'Limiting Cases: (a) When P → 0, KL·P << 1, so θ ≈ KL·P (Henry’s Law region, linear dependence). (b) When P → ∞, KL·P >> 1, so θ ≈ (KL·P)/(KL·P) = 1 (complete monolayer saturation).',
                applicationsOrCriticalAnalysis: 'Linearization: Inverting gives the Lineweaver-Burk form: 1/qe = 1/qmax + 1/(qmax KL P), where plotting 1/qe vs 1/P gives Slope = 1/(qmax KL) and Intercept = 1/qmax. Multiplying Lineweaver-Burk by P yields the Hanes-Woolf form: P/qe = 1/(qmax KL) + P/qmax, which is statistically superior due to uniform error variance across data points.',
                conclusion: 'The Langmuir derivation remains the foundational cornerstone of interfacial chemistry, providing quantitative determination of monolayer capacity and binding affinity.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Langmuir ne bataya ke gas molecules khali sites par aakar condense hotay hain aur occupied sites se evaporate hotay hain. Equilibrium par dono ki raftaar barabar hoti hai.',
                mainExplanation: 'r_ads = ka × P × (1 - θ) aur r_des = kd × θ. Dono ko barabar rakhein: ka × P × (1 - θ) = kd × θ. Hal karne par: θ = (KL × P) / (1 + KL × P).',
                derivationOrScheme: 'Limiting Cases: 1. Low pressure par: θ = KL × P (Henry ka seedha qanoon). 2. High pressure par: θ = 1 (satah poori bhar jati hai).',
                applicationsOrCriticalAnalysis: 'Linear Forms: Lineweaver-Burk form: 1/qe = 1/qmax + 1/(qmax KL P). Hanes-Woolf form: P/qe = 1/(qmax KL) + P/qmax. In plots ki dhalwan (slope) se qmax aur intercept se KL maloom hota hai.',
                conclusion: 'Langmuir model se catalysts aur adsorbents ki asli binding capacity maloom ki jati hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-surf-2',
              subjectId: 'chem-7124',
              moduleId: 'surf-mod-2',
              topicId: 'surf-top-2',
              questionEn: 'In the Hanes-Woolf linearized plot of the Langmuir isotherm, where (Ce / qe) is plotted on the Y-axis against Ce on the X-axis, what do the SLOPE and Y-INTERCEPT represent, respectively?',
              questionUrRoman: 'Langmuir ke Hanes-Woolf linear plot mein (Ce / qe vs Ce), SLOPE aur Y-INTERCEPT bil-tarteeb kis cheez ko zahir karte hain?',
              options: [
                { id: 'opt-a', textEn: 'Slope = 1/qmax, Intercept = 1/(qmax·KL)', textUrRoman: 'Slope = 1/qmax, Intercept = 1/(qmax·KL)' },
                { id: 'opt-b', textEn: 'Slope = qmax, Intercept = KL', textUrRoman: 'Slope = qmax, Intercept = KL' },
                { id: 'opt-c', textEn: 'Slope = KL, Intercept = 1/qmax', textUrRoman: 'Slope = KL, Intercept = 1/qmax' },
                { id: 'opt-d', textEn: 'Slope = 1/KL, Intercept = qmax', textUrRoman: 'Slope = 1/KL, Intercept = qmax' }
              ],
              correctOptionId: 'opt-a',
              explanationEn: 'The Hanes-Woolf equation is Ce/qe = (1/qmax)Ce + 1/(qmax·KL). In standard linear form y = mx + c, the slope m = 1/qmax and the intercept c = 1/(qmax·KL). Dividing slope by intercept gives KL directly.',
              explanationUrRoman: 'Equation Ce/qe = (1/qmax)Ce + 1/(qmax·KL) mein X ke sath 1/qmax hai jo slope hai, aur constant term 1/(qmax·KL) intercept hai.',
              difficulty: 'Intermediate',
              referenceSource: 'CHEM-7124 Adsorption Models Handbook'
            }
          ],
          referencesEn: [
            { citation: 'Langmuir, I. (1918). The adsorption of gases on plane surfaces of glass, mica and platinum. Journal of the American Chemical Society, 40(9), 1361-1403.', type: 'Peer-Reviewed Journal' },
            { citation: 'Brunauer, S., Emmett, P. H., & Teller, E. (1938). Adsorption of gases in multimolecular layers. Journal of the American Chemical Society, 60(2), 309-319.', type: 'Peer-Reviewed Journal' }
          ]
        }
      }
    ]
  }
];
