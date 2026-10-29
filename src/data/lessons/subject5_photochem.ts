import { Module } from '../../types';

export const subject5Modules: Module[] = [
  {
    id: 'photo-mod-3',
    subjectId: 'chem-7123',
    moduleNumber: 3,
    titleEn: 'Excited State Dynamics, Jablonski Diagram & Deactivation Pathways',
    titleUrRoman: 'Excited State Dynamics, Jablonski Diagram aur Deactivation Pathways',
    overviewEn: 'Singlet vs. triplet multiplicity, spin conservation, radiative transitions (fluorescence, phosphorescence), and non-radiative transitions (IC, ISC, vibrational relaxation).',
    overviewUrRoman: 'Singlet aur triplet states, spin conservation, radiative transitions (fluorescence, phosphorescence) aur non-radiative transitions (IC, ISC).',
    weekSchedule: 'Weeks 4–6',
    topics: [
      {
        id: 'photo-top-1',
        moduleId: 'photo-mod-3',
        subjectId: 'chem-7123',
        titleEn: 'Jablonski Diagram, Fluorescence, Phosphorescence & Spin Inversion',
        titleUrRoman: 'Jablonski Diagram, Fluorescence, Phosphorescence aur Spin Inversion',
        estimatedMinutes: 55,
        officialTopicMapping: 'Module 3: Singlet states; triplet states; excited-state lifetimes; fluorescence; phosphorescence; internal conversion; intersystem crossing; vibrational relaxation; Jablonski diagram.',
        isSupplementary: false,
        lessonContent: {
          id: 'photo-les-1',
          topicId: 'photo-top-1',
          titleEn: 'Photophysical Deactivation Kinetics: The Jablonski Diagram, Radiative vs. Non-Radiative Transitions, and Spin Selection Rules',
          titleUrRoman: 'Jablonski Diagram: Fluorescence, Phosphorescence aur Non-Radiative Transitions',
          learningObjectivesEn: [
            'Construct and annotate a complete state-energy Jablonski diagram comprising S₀, S₁, S₂, T₁, and vibrational sub-levels.',
            'Differentiate between radiative (fluorescence, phosphorescence) and non-radiative processes (internal conversion, intersystem crossing, vibrational relaxation).',
            'Explain Hund\'s rule of maximum multiplicity and explain why the lowest triplet state (T₁) always lies at lower energy than the corresponding excited singlet state (S₁).',
            'Relate quantum spin selection rules (ΔS = 0) to excited-state lifetimes (fluorescence: 10⁻⁹ to 10⁻⁷ s; phosphorescence: 10⁻⁴ to > 10 s).'
          ],
          learningObjectivesUrRoman: [
            'Jablonski diagram ka mukammal sketch banana (S₀, S₁, T₁ aur vibrational levels).',
            'Radiative transitions (Fluorescence, Phosphorescence) aur Non-radiative transitions (IC, ISC) ka farq samajhna.',
            'Hund ke qanoon ke mutabiq yeh wazeh karna ke Triplet state (T₁) hamesha Singlet (S₁) se kam energy par kyun hoti hai.',
            'Spin selection rule (ΔS = 0) aur lifetimes ka farq samajhna (Fluorescence: nanoseconds, Phosphorescence: seconds ya minutes).'
          ],
          prerequisitesEn: [
            'Quantum mechanics of spin: Total spin quantum number S and Multiplicity (2S + 1).',
            'Planck\'s equation (E = hν) and molecular orbital theory (HOMO-LUMO electronic excitation).'
          ],
          prerequisitesUrRoman: [
            'Quantum spin aur multiplicity formula 2S + 1.',
            'Planck ki equation E = hν aur molecular orbitals.'
          ],
          introductionEn: `When a molecule absorbs an ultraviolet or visible photon, an electron transitions from a bonding or non-bonding orbital into an antibonding orbital (typically π -> π* or n -> π*), generating an electronically excited state in less than 10⁻¹⁵ seconds (the Franck-Condon principle). What happens next to this excess electronic energy forms the foundation of all photochemistry. The Jablonski diagram, formulated by Polish physicist Aleksander Jabłoński in 1935, visually maps the competitive radiative and non-radiative pathways through which an excited molecule dissipates its energy to return to the ground state.`,
          introductionUrRoman: `Jab koi chemical molecule roshni (UV ya visible photon) jazb karta hai, tou 10⁻¹⁵ second ke andar electron neechay se jump kar ke excited state mein chala jata hai. Iske baad yeh molecule apni izafi energy kaisay kharij kar ke wapis aam halat mein aata hai, is poore safar ko 1935 mein polish physicist Aleksander Jablonski ne aik chart ke zariye wazeh kiya jise Jablonski Diagram kehte hain. Is diagram ko samjhe baghair photochemistry aur solar energy conversion samajhna na-mumkin hai.`,
          definitionsEn: [
            {
              term: 'Spin Multiplicity (2S + 1)',
              definition: 'The quantum mechanical degeneracy of total spin angular momentum, where S is the sum of electron spin numbers. Paired electron spins (S = +1/2 - 1/2 = 0) yield a Singlet state (2(0)+1 = 1); parallel unpaired spins (S = 1/2 + 1/2 = 1) yield a Triplet state (2(1)+1 = 3).'
            },
            {
              term: 'Fluorescence',
              definition: 'A spin-allowed radiative transition between states of the SAME spin multiplicity (typically S₁ -> S₀ + hν_f), characterized by rapid emission kinetics (lifetimes ~ 10⁻⁹ to 10⁻⁷ seconds).'
            },
            {
              term: 'Phosphorescence',
              definition: 'A spin-forbidden radiative transition between states of DIFFERENT spin multiplicity (typically T₁ -> S₀ + hν_p), characterized by slow emission kinetics (lifetimes ~ 10⁻⁴ to 10² seconds) and delayed afterglow.'
            },
            {
              term: 'Internal Conversion (IC)',
              definition: 'An isoenergetic non-radiative radiationless transition between electronic states of the identical spin multiplicity (e.g., S₂ -> S₁ or S₁ -> S₀).'
            },
            {
              term: 'Intersystem Crossing (ISC)',
              definition: 'An isoenergetic non-radiative transition between electronic states of differing spin multiplicity, mediated by spin-orbit coupling (e.g., S₁ -> T₁).'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Spin Multiplicity (2S + 1)',
              definition: 'Paired spins (opposite direction) par Singlet state (2S+1 = 1) banti hai. Unpaired parallel spins par Triplet state (2S+1 = 3) banti hai.'
            },
            {
              term: 'Fluorescence',
              definition: 'Same spin states ke darmiyan roshni ka kharij hona (S₁ -> S₀ + light). Yeh foran (nanoseconds mein) roshni nikaal kar band ho jata hai.'
            },
            {
              term: 'Phosphorescence',
              definition: 'Mukhtalif spin states ke darmiyan spin-forbidden transition (T₁ -> S₀ + light). Yeh roshni band hone ke baad bhi ghanton tak chamakta rehta hai.'
            },
            {
              term: 'Internal Conversion (IC)',
              definition: 'Baghair roshni nikale same multiplicity states ke darmiyan energy ka girna (S₂ se S₁).'
            },
            {
              term: 'Intersystem Crossing (ISC)',
              definition: 'Spin badal kar singlet se triplet mein chale jana (S₁ se T₁).'
            }
          ],
          detailedTheoryEn: `Photophysical Pathways in the Jablonski Architecture:
          
1. Photon Absorption (Ground State S₀ -> Excited Singlet S₁ or S₂):
   Occurs on the femtosecond timescale (~10⁻¹⁵ s). According to the Franck-Condon Principle, electronic excitation is so rapid that the heavy atomic nuclei remain stationary during the vertical transition.
   
2. Vibrational Relaxation (VR):
   Within 10⁻¹² s, molecules in higher vibrational levels of S₁ cascade down to the lowest vibrational level (v=0) by transferring excess kinetic energy to surrounding solvent molecules as heat.
   
3. Kasha's Rule:
   Photon emission (fluorescence or phosphorescence) occurs with appreciable quantum yield ONLY from the lowest excited electronic state of a given multiplicity (S₁ for fluorescence, T₁ for phosphorescence). Higher states (S₂, S₃) undergo ultra-fast Internal Conversion (IC) to S₁ within ~10⁻¹³ s.
   
4. The Singlet-Triplet Energy Split (ΔE_S-T):
   Why is T₁ always lower in energy than S₁?
   According to Hund's Rule and quantum exchange integral theory:
   E(S₁) = E₀ + J + K
   E(T₁) = E₀ + J - K
   where J is the Coulombic electron-electron repulsion energy, and K is the Quantum Exchange Energy. In the triplet state, parallel spins are prevented from occupying the same spatial region by the Pauli Exclusion Principle (Fermi hole), lowering mutual electron-electron electrostatic repulsion by 2K.
   
5. Stokes Shift:
   Fluorescence emission always occurs at a LONGER wavelength (lower photon energy) than the absorbed light. Energy is lost non-radiatively via vibrational relaxation before photon emission occurs.`,
          detailedTheoryUrRoman: `Jablonski Diagram ke Marahil:
1. Absorption (S₀ se S₁ ya S₂): Roshni jazb karna sirf 10⁻¹⁵ second mein ho jata hai (Franck-Condon principle).
2. Vibrational Relaxation: Molecule solvent ko garmi de kar S₁ ke sab se neechay walay vibrational level par aa jata hai (10⁻¹² second).
3. Kasha ka Qanoon: Roshni ka emission sirf S₁ (fluorescence) ya T₁ (phosphorescence) se hi ho sakta hai. Agar electron S₂ par chala jaye tou woh bina roshni nikale (IC) foran S₁ par gir jata hai.
4. Triplet State (T₁) kam energy par kyun hoti hai?
Hund ke qanoon ke mutabiq triplet state mein dono electrons ki spin parallel hoti hai jis se woh aik doosray se door rehte hain (Fermi hole). Is se electrostatic repulsion kam hoti hai aur energy 2K kam ho jati hai. Lihaza T₁ hamesha S₁ se neechay hoti hai.
5. Stokes Shift: Kharij hone wali fluorescence light ki wavelength hamesha jazb hone wali light se lambi (kam energy) hoti hai kyunke kuch energy vibrational heat mein zaya ho jati hai.`,
          comparisonTables: [
            {
              titleEn: 'Comprehensive Comparison: Fluorescence vs. Phosphorescence',
              titleUrRoman: 'Fluorescence aur Phosphorescence ka Taqabuli Jaiza',
              headersEn: ['Property', 'Fluorescence', 'Phosphorescence'],
              headersUrRoman: ['Khususiyat', 'Fluorescence', 'Phosphorescence'],
              rowsEn: [
                ['Electronic Transition', 'S₁ -> S₀ + hν_f (Singlet to Singlet)', 'T₁ -> S₀ + hν_p (Triplet to Singlet)'],
                ['Quantum Selection Rule', 'Spin-Allowed (ΔS = 0)', 'Spin-Forbidden (ΔS = 1)'],
                ['Excited State Lifetime (τ)', 'Ultra-short: 10⁻⁹ to 10⁻⁷ seconds (1 to 100 ns)', 'Extremely long: 10⁻⁴ to 10² seconds (milliseconds to minutes)'],
                ['Afterglow Persistence', 'Extinguishes instantaneously when excitation light stops (< 10⁻⁶ s)', 'Persists as an afterglow long after excitation source is turned off'],
                ['Emission Wavelength Range', 'Longer than absorption (Stokes shifted)', 'Substantially longer wavelength than fluorescence (T₁ is lower than S₁)'],
                ['Oxygen Sensitivity', 'Mildly quenched by dissolved molecular oxygen', 'Drastically quenched by ground-state triplet oxygen (³O₂) via energy transfer'],
                ['Temperature Dependency', 'Relatively insensitive to temperature in solution', 'Favored at low temperatures (77 K liquid N₂) or in rigid solid matrices']
              ],
              rowsUrRoman: [
                ['Transition', 'S₁ se S₀ (Singlet se Singlet)', 'T₁ se S₀ (Triplet se Singlet)'],
                ['Spin Rule', 'Allowed (ΔS = 0)', 'Forbidden (ΔS = 1)'],
                ['Lifetime (Waqt)', 'Bohat chota (10⁻⁹ se 10⁻⁷ second)', 'Bohat lamba (10⁻⁴ se 100 second)'],
                ['Roshni band karne par', 'Fauri tor par andhera ho jata hai', 'Andhere mein bhi dair tak chamakta rehta hai'],
                ['Wavelength', 'Absorption se lambi', 'Fluorescence se bhi zyada lambi wavelength'],
                ['Oxygen ka asar', 'Thora bohot', 'Bohat shadeed (Oxygen fauran phosphorescence khatam kar deti hai)']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'Anthracene exhibits an absorption maximum at λ_abs = 360 nm and its primary fluorescence emission peak appears at λ_fl = 402 nm. (a) Calculate the photon energy in Joules and in electron-volts (eV) for both absorption and emission. (b) Calculate the Stokes shift in wavenumbers (cm⁻¹). (c) If the fluorescence quantum yield is Φ_f = 0.30 and the observed fluorescence lifetime is τ = 5.0 ns, calculate the radiative rate constant (kr) and non-radiative rate constant (knr).',
              problemStatementUrRoman: 'Anthracene ka absorption peak 360 nm par hai aur fluorescence emission peak 402 nm par hai. (a) Absorption aur emission dono ki photon energy (Joules aur eV mein) nikalein. (b) Stokes shift (cm⁻¹ mein) calculate karein. (c) Agar quantum yield Φ_f = 0.30 aur lifetime τ = 5.0 ns ho tou radiative (kr) aur non-radiative (knr) rate constants nikalein.',
              givenParametersEn: [
                'λ_abs = 360 nm = 3.60 × 10⁻⁷ m',
                'λ_fl = 402 nm = 4.02 × 10⁻⁷ m',
                'Planck\'s constant h = 6.626 × 10⁻³⁴ J·s',
                'Speed of light c = 2.998 × 10⁸ m/s',
                '1 eV = 1.602 × 10⁻¹⁹ J',
                'Φ_f = 0.30, τ = 5.0 ns = 5.0 × 10⁻⁹ s'
              ],
              givenParametersUrRoman: [
                'λ_abs = 360 nm, λ_fl = 402 nm',
                'h = 6.626 × 10⁻³⁴ J·s, c = 2.998 × 10⁸ m/s',
                'Φ_f = 0.30, τ = 5.0 × 10⁻⁹ s'
              ],
              governingFormulaEn: 'E = \\frac{hc}{\\lambda}; \\quad \\Delta \\bar{\\nu} = \\frac{1}{\\lambda_{\\text{abs}}} - \\frac{1}{\\lambda_{\\text{fl}}}; \\quad \\Phi_f = k_r \\tau; \\quad \\tau = \\frac{1}{k_r + k_{nr}}',
              stepByStepSolutionEn: [
                'Step 1: Calculate Absorption Energy (E_abs):',
                'E_abs = (6.626 × 10⁻³⁴ J·s × 2.998 × 10⁸ m/s) / (3.60 × 10⁻⁷ m) = 1.9865 × 10⁻¹⁶ / 3.60 × 10⁻⁷ = 5.518 × 10⁻¹⁹ Joules.',
                'In eV: (5.518 × 10⁻¹⁹ J) / (1.602 × 10⁻¹⁹ J/eV) = 3.444 eV.',
                'Step 2: Calculate Emission Energy (E_fl):',
                'E_fl = (1.9865 × 10⁻¹⁶) / (4.02 × 10⁻⁷ m) = 4.9415 × 10⁻¹⁹ Joules.',
                'In eV: (4.9415 × 10⁻¹⁹ J) / (1.602 × 10⁻¹⁹) = 3.085 eV.',
                'Step 3: Calculate Stokes Shift (Δν̄):',
                'ν̄_abs = 1 / (3.60 × 10⁻⁵ cm) = 27,778 cm⁻¹.',
                'ν̄_fl = 1 / (4.02 × 10⁻⁵ cm) = 24,876 cm⁻¹.',
                'Stokes Shift = 27,778 - 24,876 = 2,902 cm⁻¹.',
                'Step 4: Calculate Rate Constants (kr and knr):',
                'kr = Φ_f / τ = 0.30 / (5.0 × 10⁻⁹ s) = 6.00 × 10⁷ s⁻¹.',
                'Total deactivation rate = 1 / τ = 1 / (5.0 × 10⁻⁹) = 2.00 × 10⁸ s⁻¹.',
                'knr = (1 / τ) - kr = 2.00 × 10⁸ - 0.60 × 10⁸ = 1.40 × 10⁸ s⁻¹.'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: E_abs = hc / λ = (6.626×10⁻³⁴ × 3×10⁸) / (360×10⁻⁹) = 5.52 × 10⁻¹⁹ J (3.44 eV).',
                'Qadam 2: E_fl = hc / λ = (1.9865×10⁻¹⁶) / (402×10⁻⁹) = 4.94 × 10⁻¹⁹ J (3.08 eV).',
                'Qadam 3: Stokes Shift = (1 / 360×10⁻⁷ cm) - (1 / 402×10⁻⁷ cm) = 27,778 - 24,876 = 2,902 cm⁻¹.',
                'Qadam 4: kr = Φ_f / τ = 0.30 / 5×10⁻⁹ = 6.0 × 10⁷ s⁻¹.',
                'Qadam 5: knr = (1/τ) - kr = 2.0 × 10⁸ - 0.6 × 10⁸ = 1.4 × 10⁸ s⁻¹.'
              ],
              finalAnswerEn: 'E_abs = 3.44 eV; E_fl = 3.08 eV; Stokes Shift = 2,902 cm⁻¹; kr = 6.0 × 10⁷ s⁻¹; knr = 1.4 × 10⁸ s⁻¹.',
              finalAnswerUrRoman: 'E_abs = 3.44 eV; E_fl = 3.08 eV; Stokes Shift = 2,902 cm⁻¹; kr = 6.0 × 10⁷ s⁻¹; knr = 1.4 × 10⁸ s⁻¹.',
              unitsAndCheckEn: 'Validation: knr (1.4 × 10⁸) > kr (0.6 × 10⁸), which aligns perfectly with a modest fluorescence quantum yield of 30% where 70% of deactivation is radiationless.',
              unitsAndCheckUrRoman: 'Tasdeeq: knr ki value kr se bari aayi hai jo bilkul sahi hai kyunke 70% energy baghair roshni ke zaya ho rahi hai (yield 30% hai).'
            }
          ],
          applicationsEn: [
            'Fluorescence Resonance Energy Transfer (FRET) "molecular rulers" measuring nanometer-scale protein folding in biophysical chemistry.',
            'Developing phosphorescent organometallic iridium(III) emitters for high-efficiency Organic Light-Emitting Diodes (OLEDs) harvesting 100% of singlet and triplet excitons.',
            'Photodynamic therapy (PDT) utilizing photosensitizer intersystem crossing (S₁ -> T₁) to generate cytotoxic singlet oxygen (¹O₂) for targeted cancer destruction.'
          ],
          applicationsUrRoman: [
            'FRET microscopy se proteins ke nanometer scale faslay maloom karna.',
            'Smartphones aur TVs ki OLED screens mein phosphorescent iridium complexes use kar ke 100% light efficiency hasil karna.',
            'Cancer ke ilaj (Photodynamic Therapy) mein light aur photosensitizer se singlet oxygen banana jo cancer cells ko khatam karti hai.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'Fluorescence and phosphorescence are distinguished merely by how bright the emitted light appears to the naked eye.',
              correction: 'False. They are fundamentally distinguished by quantum spin mechanics. Fluorescence is spin-allowed (ΔS = 0, singlet-to-singlet) with nanosecond lifetimes; phosphorescence is spin-forbidden (ΔS = 1, triplet-to-singlet) with millisecond-to-second lifetimes.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Fluorescence aur phosphorescence mein sirf chamak ka farq hota hai.',
              correction: 'Ghalat. Yeh quantum spin ka farq hai: Fluorescence spin-allowed hoti hai (nanoseconds mein khatam), jabkay Phosphorescence spin-forbidden hoti hai (triplet state se) aur ghanton tak chamak sakti hai.'
            }
          ],
          examImportantPointsEn: [
            'Complete annotated sketch of the Jablonski diagram with time scales for all transitions.',
            'Physical reason why T₁ is always lower in energy than S₁ (Hund’s rule / exchange energy 2K).',
            'Derivation relating quantum yield, lifetime, and radiative rate constant: Φ = kr·τ.'
          ],
          examImportantPointsUrRoman: [
            'Jablonski diagram ka clean sketch banana exam ka sab se favorite long question hai.',
            'Triplet state ki energy kam kyun hoti hai (Hund ka qanoon).',
            'Stokes shift ki tareef aur formula.'
          ],
          revisionSummaryEn: 'The Jablonski diagram maps the competing pathways of excited-state relaxation. After vertical Franck-Condon absorption, vibrational relaxation and internal conversion lower the molecule to S₁ (Kasha\'s rule). S₁ can emit fluorescence (spin-allowed, 10⁻⁸ s) or undergo intersystem crossing to T₁. Because electron exchange lowers repulsion in parallel spins, T₁ lies below S₁. Radiative relaxation from T₁ to S₀ produces long-lived phosphorescence (spin-forbidden, seconds).',
          revisionSummaryUrRoman: 'Jablonski diagram excited states ki deactivation ko wazeh karta hai. Franck-Condon absorption ke baad molecule vibrational relaxation se S₁ par aata hai. S₁ se foran fluorescence (nanoseconds) hoti hai ya spin badal kar triplet T₁ par jata hai. T₁ se wapis aate waqt spin-forbidden phosphorescence hoti hai jo dair tak chamakti hai.',
          flashcards: [
            {
              id: 'fc-photo-1',
              category: 'Photophysics',
              frontEn: 'What is Kasha\'s Rule in molecular photochemistry?',
              frontUrRoman: 'Photochemistry mein Kasha ka Qanoon (Kasha\'s Rule) kya hai?',
              backEn: 'Kasha\'s rule states that photon emission (fluorescence or phosphorescence) occurs with appreciable yield only from the lowest excited electronic state of a given multiplicity (S₁ or T₁), because higher states (S₂, S₃) decay to S₁ via ultrafast non-radiative internal conversion.',
              backUrRoman: 'Kasha ka qanoon kehta hai ke roshni hamesha sab se neechay wali excited state (S₁ ya T₁) se hi nikalti hai kyunke ooper wali states bina roshni nikale foran S₁ par gir jati hain.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-photo-1',
              subjectId: 'chem-7123',
              topicId: 'photo-top-1',
              questionEn: 'State the Franck-Condon Principle and explain its quantum mechanical basis.',
              questionUrRoman: 'Franck-Condon Principle ki tareef karein aur iski quantum mechanical wazahat karein.',
              modelAnswerEn: 'The Franck-Condon Principle states that an electronic transition occurs so rapidly (~10⁻¹⁵ seconds) that the atomic nuclei, being several thousand times more massive than electrons, undergo no significant displacement during the absorption event. Consequently, electronic transitions on potential energy diagrams are represented as strictly vertical lines ("vertical transitions"), and the transition probability is governed by the vibrational overlap integral (Franck-Condon factor) between the ground and excited state wavefunctions.',
              modelAnswerUrRoman: 'Franck-Condon principle kehta hai ke electron ka jump itna teez (10⁻¹⁵ s) hota hai ke bhaari nuclei apni jagah se hil bhi nahi paate. Is liye potential energy curve par absorption ko hamesha bilkul seedhi amoodi (vertical) lakeer se dikhaya jata hai.',
              keyPointsEn: [
                'Electronic transitions occur in ~10⁻¹⁵ s.',
                'Heavy nuclei remain stationary (vertical transition).',
                'Transition probability proportional to vibrational overlap.'
              ],
              keyPointsUrRoman: [
                'Transition 10⁻¹⁵ s mein hoti hai.',
                'Nuclei hilte nahi hain (vertical transition).'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-photo-1',
              subjectId: 'chem-7123',
              topicId: 'photo-top-1',
              questionEn: 'Construct and annotate a comprehensive Jablonski diagram illustrating all major photophysical processes following photon absorption. Differentiate explicitly between radiative and non-radiative transitions, state their characteristic lifetimes, and explain why phosphorescence is formally spin-forbidden under non-relativistic quantum mechanics.',
              questionUrRoman: 'Jablonski diagram ka mukammal sketch banayein. Radiative aur non-radiative transitions ka farq, unke lifetimes aur phosphorescence ke spin-forbidden hone ki quantum mechanical wazahat karein.',
              rubricEn: [
                'Fully annotated Jablonski diagram with state labels and vibrational levels (4 marks)',
                'Explanation and lifetimes of radiative (fluorescence, phosphorescence) and non-radiative processes (IC, ISC, VR) (3 marks)',
                'Quantum mechanical analysis of the spin-forbidden nature of phosphorescence and spin-orbit coupling (3 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'The Jablonski diagram is the master coordinate map of photochemistry, depicting electronic singlet states (S₀, S₁, S₂) and triplet states (T₁, T₂) vertically along an energy ordinate.',
                mainExplanation: 'Radiative Transitions: (1) Fluorescence: S₁ -> S₀ + hν_f (spin-allowed, ΔS = 0, lifetime 10⁻⁹ to 10⁻⁷ s). (2) Phosphorescence: T₁ -> S₀ + hν_p (spin-forbidden, ΔS = 1, lifetime 10⁻⁴ to 10² s). Non-Radiative Transitions: (1) Vibrational Relaxation: decay within a vibrational manifold (10⁻¹² s). (2) Internal Conversion: S₂ -> S₁ or S₁ -> S₀ without photon emission (10⁻¹² to 10⁻¹⁴ s). (3) Intersystem Crossing: S₁ -> T₁ non-radiative spin inversion (10⁻¹⁰ to 10⁻⁸ s).',
                derivationOrScheme: 'Spin-Orbit Coupling Mechanism: Phosphorescence (T₁ -> S₀) violates the electric dipole selection rule (ΔS = 0). The transition dipole moment integral M = ∫ Ψ_T1 * μ̂ Ψ_S0 dτ equals ZERO because singlet and triplet spin wavefunctions are orthogonal. However, relativistic Spin-Orbit Coupling mixes a tiny fraction of singlet character into the triplet state, conferring a finite, albeit minuscule, transition probability that manifests as long-lived phosphorescent afterglow.',
                applicationsOrCriticalAnalysis: 'The presence of heavy atoms (e.g., Br, I, Pt) enhances spin-orbit coupling (the Heavy Atom Effect, scaling with Z⁴), dramatically accelerating intersystem crossing and phosphorescence rates.',
                conclusion: 'Mastery of the Jablonski diagram provides the kinetic foundation for designing laser dyes, bio-imaging probes, and solar photoredox catalysts.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Jablonski diagram photochemistry ka markazi naksha hai jo Singlet (S₀, S₁) aur Triplet (T₁) states ko energy ke hisaab se dikhata hai.',
                mainExplanation: 'Radiative Transitions: 1. Fluorescence: S₁ se S₀ (spin-allowed, 10⁻⁸ second). 2. Phosphorescence: T₁ se S₀ (spin-forbidden, seconds tak). Non-Radiative: 1. Vibrational Relaxation (10⁻¹² s). 2. Internal Conversion S₂ se S₁ (10⁻¹³ s). 3. Intersystem Crossing S₁ se T₁ (10⁻⁸ s).',
                derivationOrScheme: 'Phosphorescence Forbidden Kyun Hai? Non-relativistic quantum mechanics mein spin change (ΔS = 1) mamnoo (forbidden) hai kyunke singlet aur triplet wavefunctions orthogonal hotay hain aur transition dipole integral zero hota hai. Magar heavy atoms ki wajah se spin-orbit coupling hoti hai jo thori si ijazat de deti hai, jis se roshni bohat aahista aahista nikalti hai.',
                applicationsOrCriticalAnalysis: 'Heavy Atom Effect: Iodine ya Platinum shamil karne se spin-orbit coupling barh jati hai aur phosphorescence teez ho jati hai.',
                conclusion: 'Jablonski diagram se hi OLED screens aur cancer phototherapy ke materials design kiye jatay hain.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-photo-1',
              subjectId: 'chem-7123',
              moduleId: 'photo-mod-3',
              topicId: 'photo-top-1',
              questionEn: 'Why is the lowest excited triplet state (T₁) always lower in energy than the corresponding first excited singlet state (S₁) of the same molecule?',
              questionUrRoman: 'Triplet state (T₁) hamesha Singlet state (S₁) se kam energy par kyun hoti hai?',
              options: [
                { id: 'opt-a', textEn: 'Because parallel electron spins have higher mutual electrostatic repulsion', textUrRoman: 'Kyunke parallel spins mein repulsion zyada hoti hai' },
                { id: 'opt-b', textEn: 'Because the Pauli exclusion principle keeps parallel-spin electrons further apart in space (Fermi hole), minimizing electron-electron Coulombic repulsion by 2K', textUrRoman: 'Kyunke Pauli principle ke mutabiq parallel-spin electrons door rehte hain (Fermi hole) jis se repulsion 2K kam ho jati hai' },
                { id: 'opt-c', textEn: 'Because triplet states violate the law of conservation of energy', textUrRoman: 'Kyunke triplet states energy conservation ke khilaf hain' },
                { id: 'opt-d', textEn: 'Because singlet states cannot undergo vibrational relaxation', textUrRoman: 'Kyunke singlet states vibrational relaxation nahi kar sakeen' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'According to Hund’s rule of maximum multiplicity and exchange integral theory, electrons with parallel spins (triplet) avoid occupying the same spatial region due to the Pauli principle (creating a "Fermi hole"). This spatial separation significantly lowers electron-electron Coulombic repulsion by 2K (exchange energy), stabilizing the triplet state relative to the singlet state.',
              explanationUrRoman: 'Hund ke qanoon ke mutabiq triplet state mein electrons parallel spin hone ki wajah se aik doosray se door rehte hain (Fermi hole), jis se repulsion kam hoti hai aur energy 2K gir kar T₁ ko S₁ se zyada stable bana deti hai.',
              difficulty: 'Foundation',
              referenceSource: 'Molecular Photochemistry (Turro)'
            }
          ],
          referencesEn: [
            { citation: 'Turro, N. J., Ramamurthy, V., & Scaiano, J. C. (2010). Principles of Molecular Photochemistry: An Introduction. University Science Books.', type: 'Standard Textbook' },
            { citation: 'Lakowicz, J. R. (2006). Principles of Fluorescence Spectroscopy (3rd ed.). Springer.', type: 'Standard Textbook' }
          ]
        }
      }
    ]
  },
  {
    id: 'photo-mod-4',
    subjectId: 'chem-7123',
    moduleNumber: 4,
    titleEn: 'Photochemical Laws, Quantum Yield & Chemical Actinometry',
    titleUrRoman: 'Photochemical Laws, Quantum Yield aur Actinometry',
    overviewEn: 'Grotthuss-Draper law, Stark-Einstein law of photochemical equivalence, primary vs. secondary quantum yields (Φ), and potassium ferrioxalate chemical actinometry.',
    overviewUrRoman: 'Grotthuss-Draper law, Stark-Einstein law, Quantum yield Φ ke numericals aur Potassium ferrioxalate actinometry.',
    weekSchedule: 'Weeks 7–9',
    topics: [
      {
        id: 'photo-top-2',
        moduleId: 'photo-mod-4',
        subjectId: 'chem-7123',
        titleEn: 'Stark-Einstein Equivalence, Quantum Yield Φ & Actinometry Calculations',
        titleUrRoman: 'Stark-Einstein Law, Quantum Yield Φ aur Actinometry',
        estimatedMinutes: 55,
        officialTopicMapping: 'Module 4: Grotthuss-Draper law; Stark-Einstein law; quantum yield; primary and secondary processes; reaction kinetics; quantum yield calculations; chemical actinometry.',
        isSupplementary: false,
        lessonContent: {
          id: 'photo-les-2',
          topicId: 'photo-top-2',
          titleEn: 'Laws of Photochemistry: Stark-Einstein Equivalence, Quantum Yield Determination, and Chemical Actinometry',
          titleUrRoman: 'Photochemistry ke Qawaneen: Stark-Einstein Law, Quantum Yield aur Actinometry',
          learningObjectivesEn: [
            'State and evaluate the two foundational laws of photochemistry: The Grotthuss-Draper Law and the Stark-Einstein Law.',
            'Define Primary Quantum Yield (φ) and Overall Quantum Yield (Φ), explaining why experimental Φ can range from 0.001 to > 10⁶.',
            'Perform step-by-step mathematical calculations converting photon flux, einsteins of light absorbed, and moles reacted into quantum yield.',
            'Explain the operating mechanism of the standard Potassium Ferrioxalate chemical actinometer.'
          ],
          learningObjectivesUrRoman: [
            'Photochemistry ke do bunyadi qawaneen: Grotthuss-Draper aur Stark-Einstein Law.',
            'Primary Quantum Yield (φ) aur Overall Quantum Yield (Φ) ka farq aur Φ ka 0.001 se 10⁶ tak hona.',
            'Einstein of light, absorbed photon flux aur moles decomposed se quantum yield calculate karna.',
            'Potassium Ferrioxalate actinometer se roshni ki intensity measure karne ka tareeqa.'
          ],
          prerequisitesEn: [
            'Basic photon energy relations (E = hν) and Avogadro\'s number.',
            'Reaction stoichiometry and chemical kinetics.'
          ],
          prerequisitesUrRoman: [
            'Photon energy E = hν aur Avogadro\'s number ka hisab.',
            'Chemical stoichiometry aur moles ki samajh.'
          ],
          introductionEn: `Unlike thermal reactions where activation energy is supplied collectively through thermal collisions across Maxwell-Boltzmann distributions, photochemical reactions are initiated by discrete, quantized energy packages: photons. The quantification of how efficiently absorbed light drives chemical transformation is expressed through the Quantum Yield (Φ). While the Stark-Einstein law dictates that one absorbed photon activates exactly one molecule in the primary photophysical act, secondary chain reactions or rapid deactivation pathways cause observed chemical yields to deviate wildly from unity.`,
          introductionUrRoman: `Aam thermal reactions mein garmi ke takraav se molecules activate hotay hain, magar photochemical reactions mein har aik chemical molecule aik makhsoos photon ko jazb kar ke activate hota hai. Roshni kitni efficiency ke sath chemical reaction karwati hai, is paimane ko Quantum Yield (Φ) kehte hain. Stark-Einstein qanoon kehta hai ke 1 photon sirf 1 molecule ko activate karta hai, magar aagay chalne wali chain reactions ki wajah se quantum yield 1 se le kar 10 laakh tak ja sakti hai!`,
          definitionsEn: [
            {
              term: 'Grotthuss-Draper Law (First Law of Photochemistry)',
              definition: 'Only that radiation which is absorbed by a reacting chemical system can be effective in producing a photochemical transformation. Reflected or transmitted light produces zero chemical change.'
            },
            {
              term: 'Stark-Einstein Law (Second Law / Photochemical Equivalence)',
              definition: 'Each molecule taking part in a chemical reaction absorbs one quantum (photon) of light in the primary photochemical activation step.'
            },
            {
              term: 'Einstein of Radiation',
              definition: 'A molar unit of radiant energy equal to one mole of photons (N_A × hν = 6.022 × 10²³ photons).'
            },
            {
              term: 'Quantum Yield (Φ)',
              definition: 'The ratio of the number of molecules of reactant transformed (or product formed) to the total number of photons (quanta) absorbed by the reacting system.'
            },
            {
              term: 'Chemical Actinometer',
              definition: 'A well-characterized photochemical reference system whose quantum yield is accurately known across specific wavelengths, used to measure absolute photon flux.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Grotthuss-Draper Law',
              definition: 'Sirf wahi roshni chemical reaction karwa sakti hai jo solution jazb (absorb) kare. Jo roshni guzar jaye ya reflect ho jaye us se koi reaction nahi hota.'
            },
            {
              term: 'Stark-Einstein Law',
              definition: 'Primary photochemical step mein har 1 molecule sirf 1 photon jazb karta hai.'
            },
            {
              term: 'Einstein',
              definition: '1 mole photons (6.022 × 10²³ photons) ki kul energy ko 1 Einstein kehte hain.'
            },
            {
              term: 'Quantum Yield (Φ)',
              definition: 'Reaction karne walay molecules ki tadaad / Jazb hone walay photons ki tadaad.'
            },
            {
              term: 'Chemical Actinometer',
              definition: 'Aisa standard chemical solution jis se roshni ke photons ki tadaad (light intensity) accurately naapi jati hai.'
            }
          ],
          detailedTheoryEn: `Mathematical Formulation of Quantum Yield:
          
\\Phi = \\frac{\\text{Number of molecules reacting}}{\\text{Number of photons absorbed}} = \\frac{\\text{Moles of substance reacted}}{\\text{Einsteins of light absorbed}} = \\frac{d[M]/dt}{I_a}
where Ia is the rate of photon absorption in einsteins/(L·s).

Classification of Quantum Yield Values:
1. Low Quantum Yield (Φ << 1, e.g., Φ = 0.01 to 0.5):
   Reasons for low efficiency:
   - Rapid radiative or non-radiative photophysical deactivation of S₁/T₁ back to ground state S₀ before chemical reaction can occur.
   - Fast geminate recombination of initial dissociated radical fragments inside the solvent cage (cage effect).
   - Steric or thermodynamic barriers in the excited state.
   Example: Photolysis of acetone in solution (Φ ≈ 0.1).

2. Unitary Quantum Yield (Φ ≈ 1.0):
   Primary dissociation proceeds quantitatively with negligible deactivation and no chain propagation.
   Example: Dissociation of hydrogen iodide: 2 HI + hν -> H₂ + I₂ (Φ = 2.0).

3. Enormous Quantum Yield (Φ >> 1, e.g., Φ = 10³ to 10⁶):
   Indicates a Photochemical Chain Reaction!
   Absorption of a single photon dissociates an initiator into free radicals that propagate through thousands of cyclic reaction steps before termination occurs.
   Example: Photochemical synthesis of hydrogen chloride:
   Cl₂ + hν -> 2 Cl· (Primary step, φ = 1)
   Cl· + H₂ -> HCl + H·
   H· + Cl₂ -> HCl + Cl· (Chain propagation, repeating ~10⁵ times)
   Observed Quantum Yield Φ(HCl) ≈ 10⁵ to 10⁶.

Potassium Ferrioxalate Actinometry (Hatchard-Parker Actinometer):
The international standard actinometer consists of K₃[Fe(C₂O₄)₃]·3H₂O dissolved in 0.1 N H₂SO₄.
Upon absorbing a photon (λ = 254 to 500 nm):
2 [Fe(C₂O₄)₃]³⁻ + hν -> 2 Fe²⁺ + 5 (C₂O₄)²⁻ + 2 CO₂
The generated Fe²⁺ is quantitatively chelated with 1,10-phenanthroline to form a brilliant red tris-phenanthroline complex [Fe(phen)₃]²⁺, whose concentration is measured spectrophotometrically at λ = 510 nm (ε = 11,100 L/(mol·cm)). Because Φ(Fe²⁺) is certified (e.g., 1.25 at 366 nm), measuring Fe²⁺ yields the exact incident photon flux.`,
          detailedTheoryUrRoman: `Quantum Yield ka Formula:
Φ = (React karne walay molecules) / (Jazb hone walay photons) = (Moles reacted) / (Einsteins absorbed)

Quantum Yield ki Iqsaam:
1. Kam Quantum Yield (Φ < 1, maslan 0.05):
Iska matlab hai ke photon jazb karne ke baad molecule reaction karne ke bajaye wapis roshni nikaal kar (fluorescence) ya garmi de kar normal ho gaya, ya radicals dobara jud gaye.
2. Normal Quantum Yield (Φ = 1 ya 2):
Har photon ne aik molecule ko toor diya aur koi chain reaction nahi hui (jaise HI ka tootna).
3. Intehayi Zyada Quantum Yield (Φ = 10,000 se 1,000,000):
Yeh Photochemical Chain Reaction ko zahir karti hai!
Aik photon ne Cl₂ ko toor kar 2 radicals banaye, aur har radical ne H₂ ke sath mil kar hazaron HCl banaye jab tak radical khatam nahi hua (H₂ + Cl₂ reaction).

Potassium Ferrioxalate Actinometer:
Roshni ke photons ginne ke liye K₃[Fe(C₂O₄)₃] solution use hota hai. Roshni parte hi Fe³⁺ toot kar Fe²⁺ banata hai. Phir 1,10-phenanthroline daal kar red color ka complex banaya jata hai aur spectrometer par 510 nm par absorbance naap kar photon flux calculate kar liya jata hai.`,
          equationsAndDerivations: [
            {
              nameEn: 'Energy of One Einstein of Radiation',
              nameUrRoman: 'One Einstein Energy Formula',
              formula: 'E = N_A \\frac{hc}{\\lambda} = \\frac{1.196 \\times 10^5}{\\lambda \\text{ (in nm)}} \\text{ kJ/einstein}',
              symbolsAndUnitsEn: [
                { symbol: 'E', meaning: 'Energy of one mole of photons', siUnit: 'kJ·einstein⁻¹ or J·mol⁻¹' },
                { symbol: 'N_A', meaning: 'Avogadro\'s constant (6.022 × 10²³ mol⁻¹)', siUnit: 'mol⁻¹' },
                { symbol: '\\lambda', meaning: 'Wavelength of radiation', siUnit: 'nm or m' }
              ]
            },
            {
              nameEn: 'Quantum Yield Calculation Equation',
              nameUrRoman: 'Quantum Yield Formula',
              formula: '\\Phi = \\frac{\\Delta n_{\\text{substance}} \\times N_A}{I_a \\times t}',
              symbolsAndUnitsEn: [
                { symbol: '\\Delta n', meaning: 'Moles of chemical transformed', siUnit: 'mol' },
                { symbol: 'I_a', meaning: 'Absorbed photon rate', siUnit: 'photons·s⁻¹' },
                { symbol: 't', meaning: 'Irradiation time interval', siUnit: 'seconds (s)' }
              ]
            }
          ],
          comparisonTables: [
            {
              titleEn: 'Comparison of High vs. Low Quantum Yield Photochemical Reactions',
              titleUrRoman: 'Aala aur Kam Quantum Yield Reactions ka Taqabul',
              headersEn: ['Characteristic', 'Low Quantum Yield (Φ < 1)', 'High Quantum Yield (Φ >> 1)'],
              headersUrRoman: ['Pehlu', 'Kam Quantum Yield (Φ < 1)', 'Zyada Quantum Yield (Φ >> 1)'],
              rowsEn: [
                ['Typical Magnitude', 'Φ = 0.001 to 0.8', 'Φ = 10³ to 10⁶'],
                ['Underlying Mechanism', 'Excited state deactivation, fluorescence, solvent cage geminate recombination', 'Secondary chain propagation carrying thousands of elementary turnover cycles'],
                ['Sensitivity to Inhibitors', 'Insensitive to trace radical scavengers', 'Extremely sensitive: 0.01% O₂ or radical trap halts the entire chain immediately'],
                ['Classic Textbook Case', 'Photolysis of NH₃ into N₂ and H₂ (Φ ≈ 0.2)', 'Photochemical combination of H₂ + Cl₂ (Φ ≈ 10⁵ to 10⁶)']
              ],
              rowsUrRoman: [
                ['Value Range', 'Φ = 0.001 se 0.8', 'Φ = 1,000 se 10,00,000'],
                ['Asal Wajah', 'Fluorescence aur deactivation se energy zaya ho jana', 'Free radical chain reaction chal parna'],
                ['Inhibitors ka asar', 'Koi khas nahi', 'Bohot shadeed (halki si oxygen chain reaction ko fauran rok deti hai)'],
                ['Misal', 'Ammonia ka tootna (Φ = 0.2)', 'H₂ + Cl₂ se HCl banna (Φ = 1,000,000)']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'A solution of an organic dye in a 100 mL photoreactor is irradiated with monochromatic light of wavelength λ = 313 nm. The light source delivers an absorbed radiant power of 15.0 milliwatts (mW) to the solution. After 30.0 minutes of continuous irradiation, analytical chromatography confirms that exactly 1.85 × 10⁻⁴ moles of the dye were photochemically decomposed. (a) Calculate the energy of one photon and one einstein at 313 nm. (b) Calculate the total number of photons absorbed by the solution during the 30-minute exposure. (c) Calculate the quantum yield (Φ) for the photodecomposition reaction.',
              problemStatementUrRoman: 'Aik dye solution (100 mL) par 313 nm roshni 30 minute tak dali gayi. Power absorbed = 15.0 mW. 30 minute baad dye ke 1.85 × 10⁻⁴ moles decompose ho gaye. (a) 1 photon aur 1 Einstein ki energy nikalein. (b) 30 minute mein kul kitne photons absorb huay? (c) Reaction ki quantum yield (Φ) calculate karein.',
              givenParametersEn: [
                'Wavelength λ = 313 nm = 3.13 × 10⁻⁷ m',
                'Absorbed power P = 15.0 mW = 1.50 × 10⁻² J/s',
                'Time t = 30.0 min = 1,800 seconds',
                'Moles decomposed Δn = 1.85 × 10⁻⁴ mol',
                'h = 6.626 × 10⁻³⁴ J·s, c = 2.998 × 10⁸ m/s, NA = 6.022 × 10²³ mol⁻¹'
              ],
              givenParametersUrRoman: [
                'λ = 313 nm',
                'Power P = 1.50 × 10⁻² J/s',
                'Waqt t = 1,800 s',
                'Moles decomposed = 1.85 × 10⁻⁴ mol'
              ],
              governingFormulaEn: 'E_{\\text{photon}} = \\frac{hc}{\\lambda}; \\quad E_{\\text{einstein}} = N_A E_{\\text{photon}}; \\quad Q_{\\text{total}} = P \\times t; \\quad N_{\\text{photons}} = \\frac{Q_{\\text{total}}}{E_{\\text{photon}}}; \\quad \\Phi = \\frac{\\Delta n \\times N_A}{N_{\\text{photons}}}',
              stepByStepSolutionEn: [
                'Step 1: Calculate energy of one photon at 313 nm:',
                'E_photon = (6.626 × 10⁻³⁴ J·s × 2.998 × 10⁸ m/s) / (3.13 × 10⁻⁷ m) = 1.9865 × 10⁻¹⁶ / 3.13 × 10⁻⁷ = 6.347 × 10⁻¹⁹ Joules.',
                'Step 2: Calculate energy of one einstein:',
                'E_einstein = (6.347 × 10⁻¹⁹ J) × (6.022 × 10²³ mol⁻¹) = 382,216 J/einstein = 382.2 kJ/einstein.',
                'Step 3: Calculate total radiant energy absorbed in 30 minutes:',
                'Q_total = Power × time = (1.50 × 10⁻² J/s) × 1,800 s = 27.0 Joules.',
                'Step 4: Calculate total photons absorbed:',
                'N_photons = 27.0 J / (6.347 × 10⁻¹⁹ J/photon) = 4.254 × 10¹⁹ photons absorbed.',
                'Or in einsteins: 27.0 J / (382,216 J/einstein) = 7.064 × 10⁻⁵ einsteins.',
                'Step 5: Calculate total molecules of dye decomposed:',
                'N_molecules = 1.85 × 10⁻⁴ mol × 6.022 × 10²³ molecules/mol = 1.114 × 10²⁰ molecules.',
                'Step 6: Calculate Quantum Yield (Φ):',
                'Φ = N_molecules / N_photons = (1.114 × 10²⁰) / (4.254 × 10¹⁹) = 2.619 ≈ 2.62.',
                'Alternative check: Φ = Moles decomposed / Einsteins absorbed = (1.85 × 10⁻⁴) / (7.064 × 10⁻⁵) = 2.62.'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: 1 photon ki energy: E = hc / λ = (1.9865×10⁻¹⁶) / (3.13×10⁻⁷) = 6.347 × 10⁻¹⁹ Joules.',
                'Qadam 2: 1 Einstein ki energy: E = NA × E_photon = 382.2 kJ/einstein.',
                'Qadam 3: Kul energy: Q = P × t = 0.015 × 1800 = 27.0 Joules.',
                'Qadam 4: Kul photons: 27.0 / 6.347×10⁻¹⁹ = 4.254 × 10¹⁹ photons (ya 7.064 × 10⁻⁵ einsteins).',
                'Qadam 5: Decomposed molecules: 1.85×10⁻⁴ × 6.022×10²³ = 1.114 × 10²⁰.',
                'Qadam 6: Quantum yield: Φ = 1.114×10²⁰ / 4.254×10¹⁹ = 2.62.'
              ],
              finalAnswerEn: 'E_photon = 6.35 × 10⁻¹⁹ J; E_einstein = 382.2 kJ; Photons = 4.25 × 10¹⁹; Φ = 2.62.',
              finalAnswerUrRoman: 'E_photon = 6.35 × 10⁻¹⁹ J; 1 Einstein = 382.2 kJ; Φ = 2.62.',
              unitsAndCheckEn: 'Validation: A quantum yield of 2.62 (> 1.0) indicates that secondary dark reactions (such as thermal radical propagation) are occurring following the primary single-photon excitation event.',
              unitsAndCheckUrRoman: 'Tasdeeq: Φ = 2.62 (> 1) saabit karta hai ke primary photon ke baad secondary radical chain reaction bhi chal rahi hai.'
            }
          ],
          applicationsEn: [
            'Benchmarking photochemical reactors for environmental destruction of persistent PFAS and pesticide runoff.',
            'Calibrating solar light simulators used for evaluating dye-sensitized solar cells (DSSCs) and perovskite photostability.',
            'Industrial ultraviolet curing of acrylate polymers in 3D stereolithography printing.'
          ],
          applicationsUrRoman: [
            'Water pollution mein toxic pesticides aur chemicals ko UV reactor se torhne ki efficiency check karna.',
            'Solar cells aur solar water-splitting catalysts ki photostability test karna.',
            '3D printing mein UV light se plastic ko jamana (curing).'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'The Stark-Einstein law states that for every photon absorbed, exactly one mole of final chemical product is always produced.',
              correction: 'False. The Stark-Einstein law applies STRICTLY to the primary activation step (one photon excites one molecule). The overall quantum yield (Φ) can be far less than 1 (due to deactivation) or far greater than 1 (due to chain reactions).'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Stark-Einstein law ke mutabiq har photon hamesha 1 product molecule hi banata hai.',
              correction: 'Ghalat. Qanoon sirf pehle step (activation) par laagu hota hai. Overall yield deactivation ki wajah se 0.01 bhi ho sakti hai aur chain reaction ki wajah se 100,000 bhi.'
            }
          ],
          examImportantPointsEn: [
            'Statements of Grotthuss-Draper and Stark-Einstein laws.',
            'Definition and numerical calculation of Quantum Yield (Φ).',
            'Why photochemical reactions like H₂ + Cl₂ exhibit quantum yields exceeding 10⁵.'
          ],
          examImportantPointsUrRoman: [
            'Stark-Einstein law aur Grotthuss-Draper law ke statements.',
            'Quantum yield ka formula aur numerical hal karne ka tareeqa.',
            'Chain reaction mein quantum yield 1 se barh kyun jati hai.'
          ],
          revisionSummaryEn: 'Photochemical reactions obey the Grotthuss-Draper law (only absorbed light is active) and the Stark-Einstein law (one photon activates one molecule in the primary step). The overall quantum yield (Φ) measures chemical efficiency. Values of Φ < 1 stem from non-radiative deactivation or recombination, while Φ >> 1 signals a self-propagating free radical chain reaction.',
          revisionSummaryUrRoman: 'Photochemistry ke do qawaneen hain: Sirf jazb shuda roshni reaction karti hai (Grotthuss-Draper) aur 1 photon 1 molecule ko activate karta hai (Stark-Einstein). Overall quantum yield (Φ) batati hai ke reaction kitna kamyab hua. Kam yield deactivation ki wajah se hoti hai aur bohot zyada yield chain reactions ki wajah se hoti hai.',
          flashcards: [
            {
              id: 'fc-photo-2',
              category: 'Photochemical Laws',
              frontEn: 'Why does the photochemical reaction between H₂ and Cl₂ exhibit an astronomical quantum yield (Φ ≈ 10⁶)?',
              frontUrRoman: 'H₂ aur Cl₂ ke photochemical reaction ki quantum yield 10 laakh (10⁶) kyun hoti hai?',
              backEn: 'Because it is a free radical chain reaction. A single photon dissociates one Cl₂ molecule into 2 Cl· radicals, each initiating a repeating propagation cycle (Cl· + H₂ -> HCl + H· ; H· + Cl₂ -> HCl + Cl·) that cycles ~10⁵ times before termination.',
              backUrRoman: 'Kyunke yeh chain reaction hai! 1 photon se 2 chlorine radicals bante hain jo cyclic reaction shuru karte hain aur har radical khatam hone se pehle 50,000 martaba HCl banata hai.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-photo-2',
              subjectId: 'chem-7123',
              topicId: 'photo-top-2',
              questionEn: 'Define an "Einstein" of radiation and calculate its energy content at λ = 254 nm in kJ.',
              questionUrRoman: '1 "Einstein" ki tareef karein aur 254 nm par iski energy (kJ mein) calculate karein.',
              modelAnswerEn: 'An Einstein is a unit of radiant energy equal to one mole (Avogadro\'s number, NA = 6.022 × 10²³) of photons. At λ = 254 nm: E = (NA × h × c) / λ = (6.022 × 10²³ × 6.626 × 10⁻³⁴ J·s × 2.998 × 10⁸ m/s) / (254 × 10⁻⁹ m) = 1.196 × 10⁸ / 254 = 470,900 J/einstein = 470.9 kJ/einstein.',
              modelAnswerUrRoman: '1 Einstein ka matlab 1 mole photons (6.022 × 10²³ photons) ki energy hai. 254 nm par: E = (NA × h × c) / λ = (1.196 × 10⁵) / 254 = 470.9 kJ/einstein.',
              keyPointsEn: [
                '1 Einstein = 1 mole of photons',
                'E = 470.9 kJ at 254 nm'
              ],
              keyPointsUrRoman: [
                '1 Einstein = 1 mole photons',
                'E = 470.9 kJ'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-photo-2',
              subjectId: 'chem-7123',
              topicId: 'photo-top-2',
              questionEn: 'Discuss the experimental procedure and chemical mechanism of Potassium Ferrioxalate actinometry. Derive the mathematical expressions used to calculate the absolute incident photon flux (I₀) from spectrophotometric absorbance measurements at 510 nm.',
              questionUrRoman: 'Potassium Ferrioxalate actinometry ka chemical mechanism aur experimental procedure wazeh karein. Spectrophotometer ki absorbance (510 nm) se photon flux (I₀) nikalne ki derivation karein.',
              rubricEn: [
                'Photoreduction mechanism of ferrioxalate complex (3 marks)',
                'Spectrophotometric complexation with 1,10-phenanthroline (3 marks)',
                'Derivation linking Beer-Lambert absorbance to absorbed photon rate Ia (4 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'Potassium ferrioxalate (Hatchard and Parker, 1956) is the gold standard chemical actinometer for the 254–500 nm range due to its high sensitivity, reproducible quantum yield (Φ ≈ 1.2), and low thermal background.',
                mainExplanation: 'Chemical Mechanism: Upon irradiation, iron(III) oxalate undergoes intramolecular electron transfer: [Fe(C₂O₄)₃]³⁻ + hν -> Fe²⁺ + C₂O₄·⁻ + 2 (C₂O₄)²⁻. The generated Fe²⁺ ion reacts with 1,10-phenanthroline in a buffered medium (pH 4.5) to form the red ferroin complex: Fe²⁺ + 3 phen -> [Fe(phen)₃]²⁺.',
                derivationOrScheme: 'Derivation: From Beer-Lambert law, A₅₁₀ = ε · b · [Fe²⁺]. The moles of Fe²⁺ formed is: n_Fe2+ = (A₅₁₀ · V_total) / (ε · b · 1000). The total einsteins absorbed by the actinometer is: N_einsteins = n_Fe2+ / Φ_Fe2+. The incident photon rate is: I₀ = N_einsteins / (t · (1 - 10^(-A_act))), where A_act is the absorbance of the actinometer solution at the irradiation wavelength.',
                applicationsOrCriticalAnalysis: 'Because the solution is photochemically sensitive, all preparatory work must be conducted under red photographic darkroom safelights to avoid ambient room light contamination.',
                conclusion: 'Potassium ferrioxalate actinometry allows researchers to accurately quantify light intensity in chemical reactors without expensive calibrated radiometers.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Potassium ferrioxalate actinometer dunya mein roshni ke photons ki tadaad naapne ka sab se mashhoor aur accurate tareeqa hai.',
                mainExplanation: 'Mechanism: Roshni parte hi Fe³⁺ toot kar Fe²⁺ banata hai. Phir solution mein 1,10-phenanthroline milaya jata hai jis se red color ka complex [Fe(phen)₃]²⁺ banta hai.',
                derivationOrScheme: 'Derivation: Spectrometer se 510 nm par absorbance (A) naapi jati hai: A = ε·b·c. Fe²⁺ ke moles: n = (A × V) / (ε × b). Jazb shuda Einsteins = n / Φ. Is se roshni ka photon flux (I₀) nikal aata hai.',
                applicationsOrCriticalAnalysis: 'Is experiment ko kamray ki aam light se bacha kar red safe light mein kiya jata hai taake faaltu roshni result kharab na kare.',
                conclusion: 'Is tareeqay se lab mein mehnge digital meters ke baghair roshni ki absolute power naapi jati hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-photo-2',
              subjectId: 'chem-7123',
              moduleId: 'photo-mod-4',
              topicId: 'photo-top-2',
              questionEn: 'In potassium ferrioxalate chemical actinometry, what spectrophotometric reagent is added after irradiation to develop the intense red colored complex measured at 510 nm?',
              questionUrRoman: 'Potassium ferrioxalate actinometry mein roshni dalne ke baad 510 nm par red color banane ke liye konsa reagent milaya jata hai?',
              options: [
                { id: 'opt-a', textEn: 'Potassium thiocyanate (KSCN)', textUrRoman: 'Potassium thiocyanate (KSCN)' },
                { id: 'opt-b', textEn: '1,10-Phenanthroline', textUrRoman: '1,10-Phenanthroline' },
                { id: 'opt-c', textEn: 'EDTA disodium salt', textUrRoman: 'EDTA disodium salt' },
                { id: 'opt-d', textEn: 'Dimethylglyoxime', textUrRoman: 'Dimethylglyoxime' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: '1,10-Phenanthroline selectively chelates the photochemically produced Fe²⁺ ions to form the tris(1,10-phenanthroline)iron(II) complex, which exhibits an intense charge-transfer absorption band at 510 nm (ε = 11,100 L/(mol·cm)).',
              explanationUrRoman: '1,10-Phenanthroline fauri tor par Fe²⁺ ke sath jud kar red color ka complex banata hai jiski absorbance 510 nm par naapi jati hai.',
              difficulty: 'Foundation',
              referenceSource: 'Chemical Actinometry Standards (IUPAC)'
            }
          ],
          referencesEn: [
            { citation: 'Hatchard, C. G., & Parker, C. A. (1956). A new sensitive chemical actinometer. II. Potassium ferrioxalate as a standard chemical actinometer. Proceedings of the Royal Society A, 235(1203), 518-536.', type: 'Peer-Reviewed Journal' },
            { citation: 'Kuhn, H. J., Braslavsky, S. E., & Schmidt, R. (2004). Chemical actinometry (IUPAC Technical Report). Pure and Applied Chemistry, 76(12), 2105-2146.', type: 'IUPAC / HEC Guideline' }
          ]
        }
      }
    ]
  }
];
