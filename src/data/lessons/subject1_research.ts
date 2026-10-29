import { Module } from '../../types';

export const subject1Modules: Module[] = [
  {
    id: 'res-mod-1',
    subjectId: 'chem-7101',
    moduleNumber: 1,
    titleEn: 'Foundations of Scientific Research & Methodology',
    titleUrRoman: 'Scientific Research aur Methodology ke Bunyadi Usool',
    overviewEn: 'Core epistemological principles of chemistry research, formulating hypotheses, distinguishing variables, and ensuring measurement accuracy vs. precision.',
    overviewUrRoman: 'Chemistry research ke bunyadi falsafiana usool, hypotheses banana, variables ki pehchan, aur accuracy vs precision ka farq.',
    weekSchedule: 'Weeks 1–2',
    topics: [
      {
        id: 'res-top-1',
        moduleId: 'res-mod-1',
        subjectId: 'chem-7101',
        titleEn: 'Research Paradigms, Variables, and Hypothesis Testing',
        titleUrRoman: 'Research Paradigms, Mutaghayyiraat (Variables) aur Hypotheses',
        estimatedMinutes: 45,
        officialTopicMapping: 'Module 1: Meaning and purpose of scientific research; basic vs applied; independent, dependent, and controlled variables.',
        isSupplementary: false,
        lessonContent: {
          id: 'res-les-1',
          topicId: 'res-top-1',
          titleEn: 'Scientific Research Methodology, Hypotheses Formulation & Experimental Control in Chemical Sciences',
          titleUrRoman: 'Chemical Sciences mein Scientific Research Methodology, Hypotheses aur Experimental Control',
          learningObjectivesEn: [
            'Differentiate between fundamental, applied, and translational chemical research with real-world case examples.',
            'Isolate and define independent, dependent, extraneous, and confounding variables in laboratory chemistry experiments.',
            'Formulate testable null (H₀) and alternate (H₁) hypotheses conforming to statistical rigour.',
            'Distinguish epistemologically between measurement accuracy, precision, repeatability, and systematic bias.'
          ],
          learningObjectivesUrRoman: [
            'Fundamental, applied, aur translational chemical research ke darmiyan misalon ke sath farq wazeh karna.',
            'Chemical laboratory experiments mein independent, dependent, aur controlled variables ko identify aur regulate karna.',
            'Statistical criteria ke mutabiq testable Null (H₀) aur Alternate (H₁) hypotheses formulate karna.',
            'Measurement accuracy, precision, reproducibility, aur systematic bias mein sciency farq samajhna.'
          ],
          prerequisitesEn: [
            'Undergraduate analytical chemistry and laboratory safety protocols.',
            'Elementary understanding of probability and normal distribution curves.'
          ],
          prerequisitesUrRoman: [
            'BS Chemistry level ki analytical chemistry aur lab procedures ki bunyadi samajh.',
            'Statistical distribution aur data variance ka basic ilm.'
          ],
          introductionEn: `Scientific research in chemistry is not a mere accumulation of haphazard laboratory observations; it is a systematic, iterative epistemological process designed to discover empirical truths, elucidate molecular mechanisms, and expand verifiable human knowledge. At the postgraduate level (MPhil/PhD), transitioning from passive textbook learning to active scientific inquiry requires mastering the rigorous design of experiments where cause-and-effect relationships can be unequivocally established without the interference of uncontrolled variables.`,
          introductionUrRoman: `Chemistry mein scientific research mehez laboratory ke aam tajarbaat ka majmooa nahi hai, balkay yeh aik muntazam aur scientific tareeqa-e-kaar hai jis se naye molecular mechanisms daryaft kiye jatay hain. MPhil level par aik student ko yeh seekhna hota hai ke kis tarah aisi experimental design tayyar ki jaye jahan cause-and-effect relationship baghair kisi confounding variable ki rukaawat ke saaf tor par saabit ho sakay.`,
          definitionsEn: [
            {
              term: 'Fundamental (Basic) Research',
              definition: 'Investigation aimed at expanding theoretical knowledge and understanding underlying chemical principles without immediate commercial or utilitarian application (e.g., investigating transition state geometries in pericyclic reactions).'
            },
            {
              term: 'Applied Research',
              definition: 'Methodological inquiry conducted to solve a specific, practical problem or develop targeted chemical technology (e.g., formulating a novel mesoporous silica catalyst for biomass pyrolysis).'
            },
            {
              term: 'Independent Variable (IV)',
              definition: 'The factor intentionally manipulated or varied by the chemical investigator to determine its effect on the experimental system (e.g., calcination temperature of TiO₂ nanoparticles).'
            },
            {
              term: 'Dependent Variable (DV)',
              definition: 'The outcome factor measured and quantified to assess the effect of changing the independent variable (e.g., photocatalytic degradation efficiency of methylene blue dye).'
            },
            {
              term: 'Confounding Variable',
              definition: 'An unmonitored external factor that correlates with both the independent and dependent variables, potentially creating a spurious association or obscuring real causal relationships.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Fundamental (Basic) Research',
              definition: 'Aisi research jo bunyadi sciency ilm aur theoretical samajh ko barhanay ke liye ki jaye, jiska fauri tijarti faida maqsood na ho (maslan chemical reaction ke transition states ki energy verify karna).'
            },
            {
              term: 'Applied Research',
              definition: 'Aisi research jo kisi makhsoos amli maslay ko hal karne ya naye material/product ko bananay ke liye ki jaye (maslan industrial effluents se heavy metals nikalne ke liye novel bio-adsorbent banana).'
            },
            {
              term: 'Independent Variable (IV)',
              definition: 'Woh factor jisko researcher apni marzi se tabdeel karta hai taake doosray factor par asar dekha ja sakay (maslan catalyst ka calcination temperature).'
            },
            {
              term: 'Dependent Variable (DV)',
              definition: 'Woh factor jisko measure kiya jata hai aur jo independent variable ke tabdeel hone se badalta hai (maslan photocatalytic degradation ki percentage).'
            }
          ],
          detailedTheoryEn: `The core of the scientific method rests upon the hypothetico-deductive model. Formulating a hypothesis requires translating a broad research question into an empirically falsifiable statement. 
          
In postgraduate chemistry, hypothesis testing follows a strict statistical construct:
- Null Hypothesis (H₀): Posits that there is no statistically significant relationship or difference between the investigated groups (e.g., "The functionalization of graphene oxide with polyaniline causes no significant variation in its electrical conductivity compared to unfunctionalized graphene oxide, at α = 0.05").
- Alternate Hypothesis (H₁): Posits that a statistically significant effect exists due to the experimental intervention.

To validate or reject H₀, chemical measurements must be scrutinized for validity (internal and external) and reliability. Accuracy denotes the closeness of an experimental value to the accepted true or literature reference value, measured by percent error. Precision represents the repeatability and mutual agreement among independent replicate measurements obtained under identical operating conditions, quantified through standard deviation (s) and relative standard deviation (%RSD). An analytical protocol may exhibit high precision while suffering from severe systematic error (bias), such as an uncalibrated pH electrode or spectrophotometer wavelength drift.`,
          detailedTheoryUrRoman: `Scientific research ka bunyadi sotoon hypothetico-deductive model hai. Isme ahem marhala hypothesis banana hai. 
          
Statistical research mein do tarah ki hypotheses hoti hain:
- Null Hypothesis (H₀): Yeh farz karti hai ke independent variable ka dependent variable par koi haqeeqi ya statistically significant asar nahi para (maslan: "Graphene oxide ko modify karne se uski battery storage capacity par koi numayan farq nahi parta, p > 0.05").
- Alternate Hypothesis (H₁): Yeh daawa karti hai ke experimental intervention se wazeh aur statistical farq paida hua hai.

Accuracy aur Precision mein farq samajhna MPhil scholar ke liye intehayi zaroori hai. Accuracy ka matlab hai ke aapka reading true reference value ke kitna qareeb hai. Jabkay Precision ka matlab hai ke jab aap wohi experiment 3 ya 5 dafa repeat karein tou kitni barabari aati hai (kam standard deviation). Agar aapka UV-Vis spectrometer calibrated na ho, tou aapki readings bohot precise tou ho sakti hain magar accurate hargiz nahi hongi.`,
          equationsAndDerivations: [
            {
              nameEn: 'Relative Error (Accuracy Indicator)',
              nameUrRoman: 'Relative Error Formula',
              formula: '\\text{Relative Error (\\%)} = \\left| \\frac{\\bar{x} - \\mu}{\\mu} \\right| \\times 100',
              symbolsAndUnitsEn: [
                { symbol: '\\bar{x}', meaning: 'Sample experimental mean value', siUnit: 'Arbitrary / mol·L⁻¹ / mg·g⁻¹' },
                { symbol: '\\mu', meaning: 'True, accepted reference value (NIST Standard)', siUnit: 'Same as sample' }
              ]
            },
            {
              nameEn: 'Relative Standard Deviation (%RSD - Precision Indicator)',
              nameUrRoman: 'Relative Standard Deviation (%RSD)',
              formula: '\\%\\text{RSD} = \\left( \\frac{s}{\\bar{x}} \\right) \\times 100 = \\left( \\frac{\\sqrt{\\frac{\\sum_{i=1}^{N}(x_i - \\bar{x})^2}{N - 1}}}{\\bar{x}} \\right) \\times 100',
              symbolsAndUnitsEn: [
                { symbol: 's', meaning: 'Sample standard deviation', siUnit: 'Same as variable' },
                { symbol: 'N', meaning: 'Number of replicate determinations', siUnit: 'Dimensionless integer' }
              ]
            }
          ],
          comparisonTables: [
            {
              titleEn: 'Epistemological Comparison: Fundamental vs. Applied vs. Translational Chemistry Research',
              titleUrRoman: 'Fundamental, Applied aur Translational Chemistry Research ka Taqabuli Jaiza',
              headersEn: ['Dimension', 'Fundamental (Basic) Research', 'Applied Research', 'Translational Research'],
              headersUrRoman: ['Pehlu', 'Fundamental Research', 'Applied Research', 'Translational Research'],
              rowsEn: [
                ['Primary Objective', 'Expand theoretical models and thermodynamic/kinetic foundations', 'Develop functional solutions for specific technical obstacles', 'Bridge laboratory discovery with commercial industrial production'],
                ['Driving Question', '"Why does this molecular transition occur?"', '"How can we synthesize this compound to inhibit enzyme X?"', '"Can this reaction be scaled up economically to pilot plant metric tons?"'],
                ['Timescale of Impact', 'Decades / Long-term paradigm shifts', '3 to 7 years / Medium term', '1 to 3 years / Near term to market launch'],
                ['Chemistry Case', 'Deriving quantum mechanical tunneling rates in C-H activation', 'Synthesizing fluorinated organocatalysts for asymmetric aldol reaction', 'Formulating stable, pilot-scale active pharmaceutical ingredients (API)']
              ],
              rowsUrRoman: [
                ['Bunyadi Maqsad', 'Theories aur bunyadi scientific laws ko wazeh karna', 'Khas amli maslay ka solution nikalna', 'Lab ke tajarbay ko industry aur market mein le jana'],
                ['Markazi Sawal', '"Yeh molecular phenomenon kyun hota hai?"', '"Is chemical ko kaisay banayein jo pollution khatam kare?"', '"Kya yeh process factory mein sasta aur mehfooz banaya ja sakta hai?"'],
                ['Faidah Ka Waqt', 'Taweel muddat (10-20 saal)', 'Darmiani muddat (3-7 saal)', 'Qareebi muddat (1-3 saal)']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'An MPhil researcher prepares a standard copper(II) sulfate solution having an authentic certified concentration of μ = 25.00 mg/L. Replicate atomic absorption spectroscopy (AAS) runs produce the following 5 measurements: 24.80, 24.85, 24.78, 24.82, and 24.85 mg/L. (a) Calculate the mean experimental concentration. (b) Determine the percent relative error (accuracy). (c) Determine the sample standard deviation and percent RSD (precision). (d) State whether the method exhibits high precision or high accuracy.',
              problemStatementUrRoman: 'Aik researcher copper(II) sulfate standard (certified true value μ = 25.00 mg/L) analyze karta hai AAS se. 5 readings aati hain: 24.80, 24.85, 24.78, 24.82, 24.85 mg/L. (a) Mean calculate karein. (b) % Relative Error (accuracy) nikalein. (c) Standard deviation aur %RSD (precision) nikalein. (d) Result par tabsira karein.',
              givenParametersEn: [
                'True certified value μ = 25.00 mg/L',
                'Measurements (N = 5): x₁=24.80, x₂=24.85, x₃=24.78, x₄=24.82, x₅=24.85 mg/L'
              ],
              givenParametersUrRoman: [
                'True certified value μ = 25.00 mg/L',
                'Readings (N = 5): 24.80, 24.85, 24.78, 24.82, 24.85 mg/L'
              ],
              governingFormulaEn: '\\bar{x} = \\frac{\\sum x_i}{N}; \\quad s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{N - 1}}; \\quad \\%\\text{Error} = \\frac{|\\bar{x} - \\mu|}{\\mu} \\times 100; \\quad \\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100',
              stepByStepSolutionEn: [
                'Step 1: Calculate Mean (x̄) = (24.80 + 24.85 + 24.78 + 24.82 + 24.85) / 5 = 124.10 / 5 = 24.82 mg/L.',
                'Step 2: Calculate Deviations from Mean: (24.80-24.82)² = 0.0004; (24.85-24.82)² = 0.0009; (24.78-24.82)² = 0.0016; (24.82-24.82)² = 0.0000; (24.85-24.82)² = 0.0009.',
                'Step 3: Sum of squared deviations = 0.0004 + 0.0009 + 0.0016 + 0.0000 + 0.0009 = 0.0038.',
                'Step 4: Sample Variance s² = 0.0038 / (5 - 1) = 0.0038 / 4 = 0.00095.',
                'Step 5: Sample Standard Deviation s = √(0.00095) = 0.03082 mg/L.',
                'Step 6: Percent Relative Error = |24.82 - 25.00| / 25.00 × 100 = 0.18 / 25.00 × 100 = 0.72%.',
                'Step 7: Percent Relative Standard Deviation (%RSD) = (0.03082 / 24.82) × 100 = 0.124%.'
              ],
              stepByStepSolutionUrRoman: [
                'Pehla Qadam: Mean (x̄) = 124.10 / 5 = 24.82 mg/L.',
                'Doosra Qadam: Mean se farq ka square nikalein: Sum = 0.0038.',
                'Teesra Qadam: Sample standard deviation s = √(0.0038 / 4) = 0.03082 mg/L.',
                'Choutha Qadam: Relative error = (0.18 / 25.00) × 100 = 0.72%.',
                'Paanchwan Qadam: %RSD = (0.03082 / 24.82) × 100 = 0.124%.'
              ],
              finalAnswerEn: 'Mean = 24.82 mg/L; %Relative Error = 0.72%; s = 0.031 mg/L; %RSD = 0.12%.',
              finalAnswerUrRoman: 'Mean = 24.82 mg/L, Error = 0.72%, %RSD = 0.12%.',
              unitsAndCheckEn: 'Validation: An RSD of 0.12% (< 1.0%) demonstrates exceptionally high analytical precision, while a relative error of 0.72% indicates excellent accuracy with minimal systematic bias.',
              unitsAndCheckUrRoman: 'Result Check: 0.12% RSD bohot aala precision ko zahir karta hai aur 0.72% relative error shandar accuracy ko dikhata hai.'
            }
          ],
          applicationsEn: [
            'Designing multi-variable optimization protocols (e.g., Response Surface Methodology - RSM) in green extraction chemistry.',
            'Establishing analytical method validation parameters in accordance with ICH Q2(R1) guidelines for pharmaceutical assays.',
            'Rigorous quality control in nanotechnology synthesis to avoid batch-to-batch polydispersity.'
          ],
          applicationsUrRoman: [
            'Green extraction chemistry mein Response Surface Methodology (RSM) se optimization design karna.',
            'Pharmaceutical assays ke liye ICH Q2(R1) guidelines ke mutabiq method validation karna.',
            'Nanomaterial synthesis mein batch-to-batch variation ko control karna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'A high value of correlation coefficient (e.g., R² = 0.99) between two chemical variables definitively proves causation.',
              correction: 'Correlation indicates statistical association, not cause and effect. Hidden confounding variables (such as pH or ionic strength drift) often produce high correlation without direct mechanistic link.'
            },
            {
              misconception: 'If an experiment gives identical replicate numbers, the data is automatically accurate.',
              correction: 'Replicate agreement reflects precision. If an analytical tool has a persistent calibration offset (e.g., balance zero drift), precision will be high but accuracy will be flawed.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Agar do variables ka correlation R² = 0.99 ho tou iska matlab hai ke pehla variable hi doosray ki wajah hai.',
              correction: 'Correlation ka matlab lazmi tor par causation nahi hota. Koi teesra chupa hua factor (jaise temperature ya pH) dono ko mutassir kar sakta hai.'
            }
          ],
          examImportantPointsEn: [
            'Distinction between H₀ and H₁: Always define H₀ as "no effect" and state the significance level (typically α = 0.05).',
            'Independent vs. Dependent variables: In graphs, independent variables are universally placed on the X-axis (abscissa) and dependent variables on the Y-axis (ordinate).',
            'Formula for %RSD and its academic acceptance threshold in graduate chemical analysis (typically < 2.0% for major components, < 5.0% for trace impurities).'
          ],
          examImportantPointsUrRoman: [
            'Null hypothesis hamesha "no significant effect" ko zahir karti hai.',
            'Independent variable hamesha X-axis par aur Dependent variable Y-axis par plot hota hai.',
            'Postgraduate exams mein %RSD ka formula aur standard deviation calculation numerical zaroor pucha jata hai.'
          ],
          revisionSummaryEn: 'Scientific research is grounded in the hypothetico-deductive model. Independent variables are systematically manipulated while controlling extraneous factors to measure dependent outcomes. Accuracy measures proximity to truth (relative error), whereas precision quantifies reproducibility across replicates (%RSD). Rigorous scientific methodology prevents confounding variables from generating invalid conclusions.',
          revisionSummaryUrRoman: 'Scientific research hypothetico-deductive model par mabni hai. Independent variables ko tabdeel kar ke dependent variables ka data liya jata hai jabkay doosray tamam factors ko control kiya jata hai. Accuracy haqeeqi qeemat ke qareeb hone ko kehte hain aur Precision replicates ke apas mein milne ko (%RSD). Yeh asool reliable scientific nateeja nikalnay ke liye laazmi hain.',
          flashcards: [
            {
              id: 'fc-res-1',
              category: 'Scientific Methodology',
              frontEn: 'What is the primary difference between a Null Hypothesis (H₀) and an Alternate Hypothesis (H₁)?',
              frontUrRoman: 'Null Hypothesis (H₀) aur Alternate Hypothesis (H₁) mein bunyadi farq kya hai?',
              backEn: 'H₀ posits no statistically significant difference or effect caused by the experimental variable (observed differences are due to chance). H₁ claims that a real, significant effect or relationship exists.',
              backUrRoman: 'H₀ kehti hai ke experimental variable se koi statistical farq nahi parta, jabkay H₁ kehti hai ke haqeeqi aur numayan farq peda hota hai.'
            },
            {
              id: 'fc-res-2',
              category: 'Measurement Metrics',
              frontEn: 'Can an analytical method be highly precise yet inaccurate? Explain with an example.',
              frontUrRoman: 'Kya koi chemical measurement precise ho sakti hai magar accurate nahi? Misal dein.',
              backEn: 'Yes. If a digital spectrophotometer has a 0.050 AU baseline offset, repeated measurements will agree tightly (%RSD < 0.2%, high precision) but all values will systematically deviate from the true value (poor accuracy).',
              backUrRoman: 'Haan. Agar balance ya spectrometer mein zero calibration error ho, tou tamam readings aapas mein milengi (high precision) magar true value se door hongi (low accuracy).'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-res-1',
              subjectId: 'chem-7101',
              topicId: 'res-top-1',
              questionEn: 'Differentiate between internal validity and external validity in chemical experimental design.',
              questionUrRoman: 'Chemical experimental design mein internal validity aur external validity mein farq wazeh karein.',
              modelAnswerEn: 'Internal validity refers to the degree of confidence that the observed changes in the dependent variable are caused strictly by the independent variable and not by uncontrolled confounding factors (e.g., temperature fluctuations or solvent impurities). External validity, on the other hand, represents the generalizability of the findings beyond the specific experimental setting (e.g., whether a nanocatalyst exhibiting high efficiency in a 50 mL batch reactor will perform similarly in a continuous-flow industrial setting).',
              modelAnswerUrRoman: 'Internal validity ka matlab yeh hai ke kya result sirf aur sirf independent variable ki wajah se aya hai ya kisi aur chupi hui kharabi se. External validity ka matlab yeh hai ke kya yeh lab ka nateeja real-world ya factory ke scale par bhi laagu hoga.',
              keyPointsEn: [
                'Internal validity = isolation of causal relationship within the experimental system.',
                'External validity = generalizability and applicability to diverse systems or larger scales.'
              ],
              keyPointsUrRoman: [
                'Internal validity: Experiment ke andar cause-effect ka sach hona.',
                'External validity: Lab se bahar aam halaat mein natijay ka laagu hona.'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-res-1',
              subjectId: 'chem-7101',
              topicId: 'res-top-1',
              questionEn: 'Discuss the systematic architecture of chemical research design. Using a postgraduate-level scenario (e.g., developing a biopolymer-based adsorbent for heavy metal remediation), elucidate how independent, dependent, and controlled variables are established, and how systematic errors are identified and mitigated.',
              questionUrRoman: 'Chemical research design ke bunyadi dhanchay par tafseeli behas karein. Aik MPhil level ki misal (jaise heavy metals nikalne ke liye biopolymer adsorbent) ke zariye independent, dependent, aur controlled variables wazeh karein aur systematic errors ko khatam karne ka tareeqa batayein.',
              rubricEn: [
                'Introduction: Epistemological basis of chemical research design (2 marks)',
                'Variable classification in the selected case scenario (3 marks)',
                'Mitigation of systematic and random errors (3 marks)',
                'Scientific conclusion and hypothesis confirmation protocols (2 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'A robust chemical research design establishes a controlled framework capable of testing specific hypotheses while insulating the system from extraneous variations. In postgraduate research, inadequate variable isolation leads to irreproducible data and flawed mechanistic interpretations.',
                mainExplanation: 'Consider the synthesis and adsorption study of crosslinked chitosan-pectin hydrogels for Pb(II) removal from aqueous wastewater: (1) Independent Variables: Initial Pb(II) concentration (10–500 mg/L), solution pH (2.0–9.0), contact time (5–240 min), and adsorbent dosage (0.5–5.0 g/L). (2) Dependent Variables: Equilibrium adsorption capacity (qe, mg/g) and percentage removal efficiency (%). (3) Controlled Variables: Agitation speed (150 rpm), temperature (298 K ± 0.5 K), and ionic strength (0.01 M NaNO₃ background). Without strictly holding temperature and ionic strength constant, thermodynamic equilibria and Debye-Hückel screening effects would confound the apparent adsorption capacity.',
                derivationOrScheme: 'q_e = \\frac{(C_0 - C_e) V}{m} \\quad \\text{where } C_0 = \\text{initial conc}, C_e = \\text{equilibrium conc}, V = \\text{volume}, m = \\text{mass}',
                applicationsOrCriticalAnalysis: 'Systematic errors (such as Pb(II) precipitation as Pb(OH)₂ at pH > 6.0 rather than genuine adsorption) must be addressed through blank runs without adsorbent. Instrument drift on the ICP-OES/AAS must be continuously monitored using certified reference standards every 10 samples.',
                conclusion: 'By rigorously categorizing variables and incorporating blanks, replicates (n ≥ 3), and certified standards, the researcher ensures high internal validity, enabling true thermodynamic and kinetic modelling without confounding artifact.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Aik behtareen research design woh hoti hai jo hypotheses ko aazmane ke liye aisi conditions provide kare jahan koi chupa hua variable data ko kharab na kar sakay.',
                mainExplanation: 'Misal ke tor par crosslinked chitosan hydrogel se pani se lead (Pb²⁺) nikalne ka experiment: Independent variables mein solution ki pH, initial concentration, aur contact time shamil hain. Dependent variable lead ki adsorption capacity (qe, mg/g) hai. Controlled variables mein temperature (25°C), stirring speed (150 rpm), aur container ka size shamil hain.',
                derivationOrScheme: 'q_e = ((C₀ - C_e) × V) / m',
                applicationsOrCriticalAnalysis: 'Systematic error se bachne ke liye blank samples chalana laazmi hai taake pata chal sakay ke lead container ki deewaron par tou nahi chipak rahi.',
                conclusion: 'Variables ko control kar ke aur 3 dafa experiment repeat kar ke internal validity ensure ki jati hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-res-1',
              subjectId: 'chem-7101',
              moduleId: 'res-mod-1',
              topicId: 'res-top-1',
              questionEn: 'In an experiment investigating the effect of calcination temperature (300°C to 800°C) on the photocatalytic efficiency of synthesized ZnO nanoparticles, which of the following represents the INDEPENDENT variable?',
              questionUrRoman: 'ZnO nanoparticles ke calcination temperature (300°C se 800°C) ka photocatalytic efficiency par asar dekhne ke liye, darj zail mein se INDEPENDENT variable konsa hai?',
              options: [
                { id: 'opt-a', textEn: 'The percentage degradation of dye after 60 minutes', textUrRoman: '60 minute baad dye ki percentage degradation' },
                { id: 'opt-b', textEn: 'The calcination temperature applied to the nanoparticles', textUrRoman: 'Nanoparticles par lagaya gaya calcination temperature' },
                { id: 'opt-c', textEn: 'The specific surface area of the resulting ZnO powder', textUrRoman: 'Tayyar shuda ZnO powder ka surface area' },
                { id: 'opt-d', textEn: 'The intensity of the UV irradiation source', textUrRoman: 'UV light source ki intensity' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'The calcination temperature is deliberately manipulated and controlled by the researcher, making it the independent variable. The percentage degradation is the dependent outcome variable, while surface area is an intermediate physical characteristic and UV intensity is a controlled variable.',
              explanationUrRoman: 'Calcination temperature researcher khud apni marzi se tabdeel kar raha hai, is liye yeh independent variable hai. Dye degradation dependent variable hai aur light intensity controlled variable hai.',
              distractorNotesEn: {
                'opt-a': 'Dye degradation is the dependent variable measured as a result of temperature variations.',
                'opt-c': 'Specific surface area is a responding structural parameter, not the primary manipulated variable.',
                'opt-d': 'UV intensity must be kept constant as a controlled variable.'
              },
              difficulty: 'Foundation',
              referenceSource: 'CHEM-7101 Research Methodology Core Unit'
            },
            {
              id: 'mcq-res-2',
              subjectId: 'chem-7101',
              moduleId: 'res-mod-1',
              topicId: 'res-top-1',
              questionEn: 'A researcher measures the concentration of a trace pesticide three times and records 4.12 ppm, 4.11 ppm, and 4.13 ppm. The authentic NIST certified concentration is 8.50 ppm. This analytical data is best described as:',
              questionUrRoman: 'Aik researcher pesticide ki concentration 3 martaba measure karta hai: 4.12, 4.11, aur 4.13 ppm. Jabkay certified true value 8.50 ppm hai. Yeh data kaisa hai?',
              options: [
                { id: 'opt-a', textEn: 'Both accurate and precise', textUrRoman: 'Accurate bhi aur precise bhi' },
                { id: 'opt-b', textEn: 'Accurate but not precise', textUrRoman: 'Accurate hai magar precise nahi' },
                { id: 'opt-c', textEn: 'Precise but not accurate', textUrRoman: 'Precise hai magar accurate nahi' },
                { id: 'opt-d', textEn: 'Neither accurate nor precise', textUrRoman: 'Na accurate hai na precise' }
              ],
              correctOptionId: 'opt-c',
              explanationEn: 'The values are tightly clustered together (standard deviation is very low, %RSD < 0.3%), indicating high precision. However, the mean (4.12 ppm) is far from the true certified value (8.50 ppm), indicating substantial systematic bias and very poor accuracy.',
              explanationUrRoman: 'Tamam readings aik doosray ke bohot qareeb hain (high precision), lekin asli certified value (8.50 ppm) se aadhi hain, jo zahir karta hai ke method accurate nahi hai (systematic error mojood hai).',
              difficulty: 'Intermediate',
              referenceSource: 'Analytical Chemistry Principles & ICH Guidelines'
            }
          ],
          referencesEn: [
            { citation: 'Creswell, J. W., & Creswell, J. D. (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches (5th ed.). SAGE Publications.', type: 'Standard Textbook' },
            { citation: 'Miller, J. N., & Miller, J. C. (2018). Statistics and Chemometrics for Analytical Chemistry (7th ed.). Pearson Education.', type: 'Standard Textbook' },
            { citation: 'IUPAC Compendium of Chemical Terminology (Gold Book), 2nd ed. (1997). Online version (2019-).', url: 'https://goldbook.iupac.org/', type: 'IUPAC / HEC Guideline' }
          ]
        }
      }
    ]
  },
  {
    id: 'res-mod-3',
    subjectId: 'chem-7101',
    moduleNumber: 3,
    titleEn: 'Digital Research Databases & Chemical Search Strategies',
    titleUrRoman: 'Digital Research Databases aur Chemical Search Strategies',
    overviewEn: 'Mastering chemical literature retrieval across Web of Science, SciFinder-n, Reaxys, PubChem, Boolean syntax, and structure searching.',
    overviewUrRoman: 'Web of Science, SciFinder-n, Reaxys aur PubChem par chemical literature, reactions aur structure search ki professional techniques.',
    weekSchedule: 'Weeks 4–5',
    topics: [
      {
        id: 'res-top-2',
        moduleId: 'res-mod-3',
        subjectId: 'chem-7101',
        titleEn: 'SciFinder-n, Reaxys, Web of Science & Boolean Query Optimization',
        titleUrRoman: 'SciFinder-n, Reaxys, Web of Science aur Boolean Query Optimization',
        estimatedMinutes: 50,
        officialTopicMapping: 'Module 3: Web of Science, SciFinder-n, PubChem, Reaxys, Boolean operators, wildcard truncation, structure searching.',
        isSupplementary: false,
        lessonContent: {
          id: 'res-les-2',
          topicId: 'res-top-2',
          titleEn: 'Navigating Chemical Databases: SciFinder-n, Reaxys, Substructure Search & Boolean Operators',
          titleUrRoman: 'Chemical Databases ka Istemal: SciFinder-n, Reaxys aur Structure Search',
          learningObjectivesEn: [
            'Differentiate between bibliographic databases (Web of Science, Scopus) and substance/reaction databases (SciFinder-n, Reaxys).',
            'Construct complex multi-tiered Boolean search strings utilizing AND, OR, NOT, phrase quotation, and truncation wildcards (*, ?).',
            'Execute exact structure, substructure, and similarity queries in chemistry informatics platforms.',
            'Filter chemical literature by impact quartile (Q1–Q4), document type, citation count, and synthesis yield.'
          ],
          learningObjectivesUrRoman: [
            'Bibliographic databases (Web of Science) aur chemical structure databases (SciFinder-n, Reaxys) ka farq samajhna.',
            'Complex Boolean queries banana (AND, OR, NOT, inverted commas aur wildcard asterisks k sath).',
            'Chemistry databases mein exact structure, substructure aur similarity search chalana.',
            'Literature ko Q1-Q4 quartiles, citations aur reaction yield ke hisaab se filter karna.'
          ],
          prerequisitesEn: [
            'Basic knowledge of chemical IUPAC nomenclature and SMILES / InChI notation.',
            'Familiarity with online scientific journal articles and DOIs.'
          ],
          prerequisitesUrRoman: [
            'Chemical IUPAC names aur functional groups ki bunyadi pehchan.',
            'Research articles aur DOI numbers ki aam samajh.'
          ],
          introductionEn: `In chemical sciences, standard general-purpose search engines (like Google) are grossly inadequate for postgraduate research. Chemical literature requires specialized indexing that understands molecular topologies, CAS Registry Numbers, reaction mechanisms, functional group transformations, and stereochemical configurations. SciFinder-n (Chemical Abstracts Service) and Reaxys (Elsevier) represent the gold standard for synthetic and analytical chemists, while Web of Science (Clarivate) provides robust citation network tracking.`,
          introductionUrRoman: `Chemistry mein aam search engines (jaise Google) postgraduate research ke liye kaafi nahi hote. Chemical literature daryaft karne ke liye aisi databases darkaar hoti hain jo chemical structures, CAS registry numbers, reaction conditions, aur reagents ko samajh sakein. SciFinder-n aur Reaxys dunya ki do sab se ahem chemical databases hain, jabkay Web of Science citation tracking aur journal metrics ke liye bunyadi source hai.`,
          definitionsEn: [
            {
              term: 'CAS Registry Number (CAS RN)',
              definition: 'A unique numeric identifier assigned by the Chemical Abstracts Service to every chemical substance described in open scientific literature (up to 10 digits divided by hyphens, e.g., 50-00-0 for formaldehyde).'
            },
            {
              term: 'SciFinder-n',
              definition: 'The premier chemistry database curated by the American Chemical Society (ACS), indexing over 200 million chemical substances, reactions, formulations, and patents.'
            },
            {
              term: 'Reaxys',
              definition: 'An Elsevier-curated expert chemistry database focused on validated chemical synthesis pathways, reaction energetics, bioactivity data, and NMR/mass spectral properties.'
            },
            {
              term: 'Substructure Search',
              definition: 'A search query that retrieves all chemical molecules that contain a designated molecular core or scaffold, irrespective of substituents attached to designated open valences.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'CAS Registry Number',
              definition: 'Chemical Abstracts Service ki taraf se har chemical substance ko diya gaya makhsoos number (maslan water ka 7732-18-5).'
            },
            {
              term: 'SciFinder-n',
              definition: 'ACS ki dunya ki sab se bari chemistry research database jisme karoron chemicals, reactions, aur patents ka record hota hai.'
            },
            {
              term: 'Substructure Search',
              definition: 'Aisi search jisme aik khas molecular core draw ki jaye aur database woh tamam molecules dhoond kar laye jinme woh core mojood ho.'
            }
          ],
          detailedTheoryEn: `Mastering Boolean operators is paramount for synthesizing broad search spaces into targeted sets of high-relevance papers:
          
1. The 'AND' Operator (Intersection):
   Query: "photocatalysis" AND "TiO2" AND "water splitting"
   Yields only documents containing ALL three concepts simultaneously. Narrows search results.
   
2. The 'OR' Operator (Union):
   Query: ("nanoparticles" OR "nanocrystals" OR "quantum dots")
   Expands results by capturing synonyms, alternate spelling variants, and related terminology.
   
3. The 'NOT' Operator (Exclusion):
   Query: "metal-organic frameworks" NOT "zeolites"
   Eliminates unwanted domains. Note: Use sparingly, as it may inadvertently discard relevant comparative reviews.
   
4. Truncation and Wildcards:
   - Asterisk (*): Captures root word variants. For example, "polymeri*" retrieves polymerization, polymerize, polymerised, polymerizable.
   - Question Mark (?): Replaces a single character, useful for British vs. American spelling (e.g., "col?ur" finds color and colour).
   
5. Proximity Operators (SAME, NEAR/x):
   In Web of Science and Reaxys, "adsorption NEAR/3 isotherm" retrieves articles where the two words appear within 3 words of each other, drastically reducing irrelevant false-positive hits.`,
          detailedTheoryUrRoman: `Search strings banate waqt Boolean Operators ka istemal kaisay kiya jaye:
- AND: Yeh do ya zyada alfaz ko jorta hai. Nateeja sirf wahi papers honge jinme dono alfaz hon (results kam aur focused ho jatay hain).
- OR: Yeh mutaradif alfaz (synonyms) ke liye istemal hota hai (maslan: "dye degradation" OR "pollutant removal"). Is se results barh jatay hain.
- NOT: Kisi lafz ko nikalne ke liye (maslan: "perovskite solar cells" NOT "silicon").
- Wildcard Asterisk (*): Root word ke tamam alfaz lene ke liye, maslan "cataly*" likhne se catalyst, catalysis, catalytic tamam papers samne aayenge.`,
          comparisonTables: [
            {
              titleEn: 'Comparison of Major Scientific Databases for MPhil Chemistry Research',
              titleUrRoman: 'Chemistry Research ke liye Digital Databases ka Taqabuli Jaiza',
              headersEn: ['Feature', 'SciFinder-n', 'Reaxys', 'Web of Science (WoS)', 'Google Scholar'],
              headersUrRoman: ['Khususiyat', 'SciFinder-n', 'Reaxys', 'Web of Science', 'Google Scholar'],
              rowsEn: [
                ['Primary Focus', 'Chemistry, biochemistry, formulations, patents', 'Organic synthesis, reaction conditions, physical properties', 'Multidisciplinary peer-reviewed citation index', 'Broad automated academic web crawler'],
                ['Structure Search', 'Full 2D/3D structure, substructure, similarity', 'Full reaction drawing, atom mapping, retrosynthesis', 'No structure search (text/title/abstract only)', 'No chemical structure search capability'],
                ['Data Curation', 'Expert human indexing by CAS scientists', 'Extracted from peer-reviewed experimental sections', 'Rigorous editorial journal selection (JCR)', 'Unfiltered algorithmic indexing (includes preprints & predatory papers)'],
                ['Reaction Conditions', 'Yes (Catalysts, solvents, yields, step counts)', 'Yes (Extremely detailed temperature, pressure, yield)', 'No reaction condition tables', 'No reaction mapping']
              ],
              rowsUrRoman: [
                ['Khas Maqsad', 'Chemical structures, reactions, CAS numbers, patents', 'Synthetic routes, detailed reaction yields, properties', 'Citation index, journal impact factor, Q1-Q4 ranking', 'Aam academic search engine'],
                ['Structure Search', 'Haan (2D ChemDraw substructure search)', 'Haan (Retrosynthesis reaction planner)', 'Nahi (Sirf text aur keywords)', 'Nahi'],
                ['Curation Quality', 'Expert PhD scientists dwara curated', 'Lab experiments se nikala gaya authentic data', 'HEC aur JCR approved high quality journals', 'Automated crawler (kabhi kabhi predatory journals bhi aa jatay hain)']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'An MPhil student wants to conduct a literature survey on "Adsorption of ciprofloxacin (an antibiotic) onto biochar synthesized from agricultural waste". The initial query "ciprofloxacin biochar" in Google Scholar returned 18,400 hits, mostly irrelevant. Construct an optimized multi-tiered Boolean query for Web of Science Core Collection that captures synonym variations, ensures high precision, and restricts results to peer-reviewed articles from the last 5 years.',
              problemStatementUrRoman: 'Aik student ciprofloxacin antibiotic ki biochar par adsorption par research kar raha hai. Aam search par 18,400 bay-rabt results aa gaye. Web of Science ke liye aisi Boolean query tayyar karein jo ciprofloxacin ke synonyms, agricultural waste ki terms aur adsorption parameters ko filter kare.',
              givenParametersEn: [
                'Target Pollutant: Ciprofloxacin (and fluoroquinolones)',
                'Target Adsorbent: Biochar derived from agricultural waste/biomass',
                'Target Process: Adsorption / isotherm / kinetic remediation'
              ],
              givenParametersUrRoman: [
                'Pollutant: Ciprofloxacin / fluoroquinolone antibiotic',
                'Adsorbent: Agricultural biochar / agro-waste carbon',
                'Process: Adsorption equilibrium / batch adsorption'
              ],
              governingFormulaEn: '\\text{Query} = (\\text{Pollutant Terms}) \\text{ AND } (\\text{Adsorbent Terms}) \\text{ AND } (\\text{Process Terms})',
              stepByStepSolutionEn: [
                'Step 1: Identify Synonyms for Pollutant: ("ciprofloxacin" OR "CIP" OR "fluoroquinolone*")',
                'Step 2: Identify Synonyms for Adsorbent: ("biochar" OR "activated carbon" OR "pyrolyzed biomass" OR "agro-waste carbon" OR "agricultural residue*")',
                'Step 3: Identify Synonyms for Process: ("adsorption" OR "sorption" OR "removal" OR "isotherm*")',
                'Step 4: Combine using Boolean Logic with field tags (TS = Topic Search):',
                'TS=(("ciprofloxacin" OR "fluoroquinolone*") AND ("biochar" OR "pyroly* biomass" OR "agro-waste*") AND ("adsorp*" OR "sorption" OR "isotherm*"))',
                'Step 5: Apply filters in database interface: Document Types: "Article" OR "Review"; Publication Years: 2021–2026; Web of Science Categories: "Chemistry, Physical" OR "Environmental Sciences".',
                'Result: Refines 18,400 uncontrolled web results down to ~145 highly targeted, top-tier peer-reviewed papers.'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: Pollutant ke synonyms: ("ciprofloxacin" OR "fluoroquinolone*").',
                'Qadam 2: Material ke synonyms: ("biochar" OR "pyrolyzed biomass" OR "agricultural waste").',
                'Qadam 3: Process ke synonyms: ("adsorption" OR "sorption" OR "isotherm*").',
                'Qadam 4: AND operator se teeno ko jorein taake teeno cheezein aik paper mein mojood hon.',
                'Qadam 5: Web of Science mein Document Type "Article" aur Year 2021-2026 filter lagayein.'
              ],
              finalAnswerEn: 'Optimized Query: TS=(("ciprofloxacin" OR "fluoroquinolone*") AND ("biochar" OR "agro* waste" OR "pyroly* biomass") AND ("adsorp*" OR "isotherm*"))',
              finalAnswerUrRoman: 'Targted Query: TS=(("ciprofloxacin" OR "fluoroquinolone*") AND ("biochar" OR "agro* waste") AND ("adsorp*"))',
              unitsAndCheckEn: 'Validation: Tested query restricts noise while preserving high recall for all agricultural biochar precursor variations.',
              unitsAndCheckUrRoman: 'Tasdeeq: Yeh query tamam bay-faida results ko nikal kar sirf kaam ke MPhil papers samne lati hai.'
            }
          ],
          applicationsEn: [
            'Conducting retrosynthetic pathway planning for multi-step drug candidates using Reaxys.',
            'Monitoring patent priority claims and freedom-to-operate searches via SciFinder-n prior to industrial commercialization.',
            'Tracking h-index and citation trajectories of potential foreign PhD supervisors in Web of Science.'
          ],
          applicationsUrRoman: [
            'Reaxys ke zariye organic synthesis ke naye chemical routes banana.',
            'SciFinder-n par check karna ke kya yeh chemical reaction pehle se kisi company ne patent tou nahi kiya.',
            'Web of Science par international professors aur foreign scholarships ke liye research group ka h-index check karna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'Google Scholar citation counts are equal in quality and authority to Web of Science citation counts.',
              correction: 'Google Scholar counts include citations from self-published student theses, preprints, slide presentations, and predatory non-indexed journals. Web of Science counts only citations appearing in strictly vetted JCR indexed journals.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Google Scholar ke citation counts aur Web of Science ke counts barabar hotay hain.',
              correction: 'Google Scholar kisi bhi website, thesis, ya non-peer reviewed blog ke citations bhi gin leta hai jabkay Web of Science sirf verified Q1-Q4 journals ke citations shumar karta hai.'
            }
          ],
          examImportantPointsEn: [
            'Difference between Web of Science Core Collection and Google Scholar.',
            'Exact function of Boolean AND vs OR vs NOT operators.',
            'How truncation wildcards (*) function in search queries.'
          ],
          examImportantPointsUrRoman: [
            'Web of Science aur Google Scholar mein quality ka farq exam ka ahem sawal hai.',
            'Boolean operators AND, OR, NOT ka table aur misalein.',
            'CAS Registry Number ki tareef aur ahmiyat.'
          ],
          revisionSummaryEn: 'Specialized chemical databases (SciFinder-n, Reaxys) index molecular structures, CAS numbers, and reaction yields that general search engines cannot parse. Web of Science provides verified citation network tracking. Strategic deployment of Boolean operators (AND, OR, NOT) and truncation wildcards (*) enables precise literature surveys free of predatory contamination.',
          revisionSummaryUrRoman: 'Chemistry research ke liye SciFinder-n aur Reaxys sab se ahem hain kyunke inme chemical structures aur reaction yields daryaft ho sakti hain. Web of Science citation index ke liye best hai. Boolean operators (AND, OR, NOT) ka durust istemal search ko behtareen aur focused banata hai.',
          flashcards: [
            {
              id: 'fc-res-3',
              category: 'Chemical Databases',
              frontEn: 'What is a CAS Registry Number, and why is it superior to IUPAC names for chemical searches?',
              frontUrRoman: 'CAS Registry Number kya hai aur yeh IUPAC name se behtar kyun hai?',
              backEn: 'A CAS RN is a unique 10-digit numerical identifier. It eliminates ambiguity caused by multiple IUPAC synonyms, trade names, common names, or translation variations (e.g., acetaminophen vs. paracetamol both share CAS 103-90-2).',
              backUrRoman: 'CAS RN aik unique number hai jo har chemical ko milta hai. Iska faida yeh hai ke chemical ka chahe koi bhi tijarti ya mukhtalif naam ho, CAS number aik hi rehta hai (maslan Paracetamol ka 103-90-2).'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-res-2',
              subjectId: 'chem-7101',
              topicId: 'res-top-2',
              questionEn: 'Explain how the truncation wildcard (*) functions in chemical keyword searches. Give two concrete examples.',
              questionUrRoman: 'Chemical keyword search mein wildcard asterisk (*) kaisay kaam karta hai? Do misalein dein.',
              modelAnswerEn: 'The truncation wildcard (*) represents zero or more alphanumeric characters appended to a root stem. In chemistry searches, it enables the retrieval of plural forms, adjective derivations, and spelling variants without writing separate queries. Example 1: "adsorp*" retrieves adsorption, adsorptive, adsorbate, and adsorbent. Example 2: "photocataly*" retrieves photocatalysis, photocatalytic, photocatalyst, and photocatalyze.',
              modelAnswerUrRoman: 'Wildcard asterisk (*) kisi lafz ki bunyadi jarr (stem) ke aagay lagaya jata hai taake us se banne walay tamam alfaz search mein shamil ho jayein. Misal 1: "adsorp*" likhne se adsorption, adsorbent, adsorbate sab aa jatay hain. Misal 2: "photocataly*" se photocatalyst, photocatalysis dono aa jatay hain.',
              keyPointsEn: [
                'Asterisk captures variable word endings.',
                'Prevents omission of critical morphological variants.'
              ],
              keyPointsUrRoman: [
                'Mukhtalif spellings aur word endings ko shamil karta hai.',
                'Waqt bachata hai aur search comprehensive banata hai.'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-res-2',
              subjectId: 'chem-7101',
              topicId: 'res-top-2',
              questionEn: 'Evaluate the structural search capabilities of SciFinder-n versus Reaxys. Describe how an MPhil scholar should conduct a complete substructure search and retrosynthetic analysis for a newly targeted heterocyclic coordinating ligand.',
              questionUrRoman: 'SciFinder-n aur Reaxys ki structural search ki salahiyaton ka jaiza lein. Aik MPhil scholar kis tarah substructure search aur retrosynthesis design karega?',
              rubricEn: [
                'Comparative architectural features of SciFinder-n and Reaxys (3 marks)',
                'Substructure search protocol and open valence rules (3 marks)',
                'Retrosynthetic disconnect analysis and reaction conditions extraction (4 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'When investigating novel or modified molecules, text-based keyword queries frequently fail because new compounds lack established literature names. Both SciFinder-n and Reaxys offer graphical molecular drawing canvases (ChemDraw/Marvin JS) allowing topological substructure and reaction querying.',
                mainExplanation: 'In SciFinder-n, a substructure search matches the drawn fragment within any larger molecule, provided the investigator leaves substitution sites open. In Reaxys, reaction queries allow atom-by-atom mapping between starting materials and final heterocyclic ligands, indicating which bonds are cleaved or formed. Reaxys excels in providing explicit reagent stoichiometry, temperature, catalytic co-solvents, and isolated percentage yields directly from verified journal data.',
                applicationsOrCriticalAnalysis: 'Retrosynthetic analysis in these platforms enables an MPhil researcher to identify commercially accessible precursor synthons (e.g., from Sigma-Aldrich or Tokyo Chemical Industry catalogs), avoiding impossible synthetic routes and saving institutional research funding.',
                conclusion: 'Mastery of chemical structure and reaction databases transforms literature retrieval from a passive reading exercise into an active, predictive experimental design tool.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Naye chemicals ke liye keyword search nakaam ho jati hai kyunke naye compound ka koi aam naam nahi hota. Iske liye SciFinder-n aur Reaxys mein structure draw kar ke search ki jati hai.',
                mainExplanation: 'SciFinder-n mein substructure search ke zariye aap central ring draw karte hain aur open positions par substituents dhoondte hain. Reaxys mein reaction mapping hoti hai jo starting material se final product tak chemical bond banne aur tootte huay dikhati hai.',
                applicationsOrCriticalAnalysis: 'Iska sab se bara faida yeh hai ke researcher ko pehle se pata chal jata hai ke starting chemicals market mein mil rahe hain ya nahi aur reaction ki percentage yield kitni aayegi.',
                conclusion: 'Structure search ke baghair organic aur inorganic chemistry mein MPhil research karna na-mumkin hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-res-3',
              subjectId: 'chem-7101',
              moduleId: 'res-mod-3',
              topicId: 'res-top-2',
              questionEn: 'Which of the following search strings will return the NARROWEST (most restrictive) set of literature results?',
              questionUrRoman: 'Darj zail mein se konsi search query sab se kam aur sab se NARROW results degi?',
              options: [
                { id: 'opt-a', textEn: '"conducting polymers" OR "polyaniline"', textUrRoman: '"conducting polymers" OR "polyaniline"' },
                { id: 'opt-b', textEn: '"conducting polymers" AND "polyaniline"', textUrRoman: '"conducting polymers" AND "polyaniline"' },
                { id: 'opt-c', textEn: 'conducting polymers polyaniline (without quotes or operators)', textUrRoman: 'conducting polymers polyaniline (bina quotes ke)' },
                { id: 'opt-d', textEn: '"polymers"', textUrRoman: '"polymers"' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'The AND operator with exact phrase quotes requires both distinct concepts to appear within the indexed text, creating the tightest intersection. The OR operator expands results, unquoted text matches isolated words, and "polymers" alone is extremely broad.',
              explanationUrRoman: 'Quotes k sath AND lagane se search sab se narrow ho jati hai kyunke dono exact phrases ka aik sath paper mein hona laazmi hota hai.',
              difficulty: 'Foundation',
              referenceSource: 'Information Retrieval in Chemical Sciences'
            }
          ],
          referencesEn: [
            { citation: 'Warr, W. A. (2011). Representation of chemical structures. Wiley Interdisciplinary Reviews: Computational Molecular Science, 1(4), 557-579.', type: 'Peer-Reviewed Journal' },
            { citation: 'American Chemical Society. (2024). SciFinder-n User Guide and Best Practices. CAS Publications.', type: 'UOS Syllabus' }
          ]
        }
      }
    ]
  },
  {
    id: 'res-mod-7',
    subjectId: 'chem-7101',
    moduleNumber: 7,
    titleEn: 'Research Synopsis Formulation & Thesis Composition',
    titleUrRoman: 'Research Synopsis aur MPhil Thesis Writing',
    overviewEn: 'Step-by-step architecture of the MPhil research proposal (synopsis) and final thesis: title crafting, problem statement, research gap, methodology, and defense defense.',
    overviewUrRoman: 'MPhil research synopsis aur thesis likhne ka mukammal tareeqa: title, problem statement, research gap, methodology aur defense.',
    weekSchedule: 'Weeks 10–11',
    topics: [
      {
        id: 'res-top-3',
        moduleId: 'res-mod-7',
        subjectId: 'chem-7101',
        titleEn: 'MPhil Synopsis Architecture, Research Gaps & Thesis Chapters',
        titleUrRoman: 'MPhil Synopsis ka Dhancha, Research Gaps aur Thesis Chapters',
        estimatedMinutes: 55,
        officialTopicMapping: 'Module 7: Synopsis and Thesis: selecting topic, title, background, problem statement, objectives, methodology, timeline, thesis chapters.',
        isSupplementary: false,
        lessonContent: {
          id: 'res-les-3',
          topicId: 'res-top-3',
          titleEn: 'Writing the MPhil Chemistry Synopsis and Thesis: Structure, Problem Statement, and Defense Preparation',
          titleUrRoman: 'MPhil Chemistry Synopsis aur Thesis Writing: Structure aur Defense ki Tayyari',
          learningObjectivesEn: [
            'Structure an official University of Sargodha compliant MPhil research synopsis.',
            'Articulate a compelling problem statement and defend an empirical research gap.',
            'Differentiate between research aims, overarching objectives, and concrete work packages.',
            'Organize thesis chapters following the standard IMRaD format (Introduction, Literature Review, Materials & Methods, Results & Discussion, Conclusions & Future Perspectives).'
          ],
          learningObjectivesUrRoman: [
            'University of Sargodha ke rules ke mutabiq MPhil research synopsis tayyar karna.',
            'Mazboot problem statement aur genuine research gap wazeh karna.',
            'Research aims aur amli objectives ke darmiyan farq samajhna.',
            'Thesis ke 5 bunyadi chapters (IMRaD format) ko professional tareeqay se arrange karna.'
          ],
          prerequisitesEn: [
            'Completion of initial literature survey and identification of research domain.',
            'Familiarity with reference management tools (EndNote / Mendeley).'
          ],
          prerequisitesUrRoman: [
            'Literature survey ka bunyadi tajruba aur research topic ka intikhab.',
            'EndNote ya Mendeley software ka aam istemal.'
          ],
          introductionEn: `The research synopsis is the legally binding academic blueprint between the MPhil scholar, the supervisory committee, the Departmental Board of Studies (BOS), and the Advanced Studies & Research Board (ASRB) of the University of Sargodha. A poorly drafted synopsis with ambiguous objectives or unverified methodology invariably leads to thesis rejection or prolonged delays. Learning to write a crisp, scientifically defensible synopsis is a core milestone of postgraduate study.`,
          introductionUrRoman: `MPhil synopsis aik kanooni aur academic dastavez hai jo student, supervisor, Board of Studies (BOS), aur University of Sargodha ke Advanced Studies & Research Board (ASRB) ke darmiyan manzoor hota hai. Agar synopsis mein objectives wazeh na hon ya methodology mein ghaltiyan hon tou thesis pass hona mushkil ho jata hai. Is lesson mein synopsis aur thesis likhne ke tamam zaroori hissay samjhaye gaye hain.`,
          definitionsEn: [
            {
              term: 'Research Gap',
              definition: 'A specific unanswered question, unaddressed limitation, or uncharted contradiction within the established body of chemical literature that justifies conducting a new study.'
            },
            {
              term: 'Problem Statement',
              definition: 'A concise, authoritative explanation of the real-world or theoretical chemical challenge being investigated, demonstrating why existing approaches are insufficient.'
            },
            {
              term: 'Gantt Chart',
              definition: 'A horizontal bar chart visual tool representing the chronological schedule, milestones, and work package deliverables across the 24-month MPhil degree span.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Research Gap',
              definition: 'Mawjooda scientific literature mein aisi kami ya an-dekha pehlu jisko pehle kisi ne hal na kiya ho aur jiske liye naya experiment karna zaroori ho.'
            },
            {
              term: 'Problem Statement',
              definition: 'Woh thos wazahat jo batati hai ke mawjooda halaat mein kya masla hai aur puranay tareeqay kyun na-kafi hain.'
            }
          ],
          detailedTheoryEn: `An official UOS-standard MPhil Chemistry Synopsis comprises the following strictly designated sections:
          
1. Research Title:
   Must be unambiguous, devoid of unnecessary fluff ("A study on...", "Investigation into..."), and explicitly name the targeted chemical system, modification, and analytical/catalytic application.
   - Poor: "Study of some polymers for dye removal"
   - Excellent: "Synthesis, Characterization, and Adsorptive Performance of Poly(aniline-co-pyrrole)/Magnetic Biochar Nanocomposites for Azo-Dye Remediation"
   
2. Introduction & Background:
   Contextualizes the chemical class, industrial relevance, and fundamental thermodynamics.
   
3. Problem Statement & Research Gap:
   Highlights the specific roadblock: e.g., "While TiO₂ exhibits high photocatalytic stability, its wide bandgap (3.2 eV) restricts absorption exclusively to the UV spectrum (< 5% of solar irradiance). Current transition-metal doping suffers from rapid photocorrosion and dopant leaching."
   
4. Research Objectives (Bullet format, actionable, measurable using Bloom's Taxonomy):
   - To synthesize...
   - To characterize the structural, morphological, and optical properties using FTIR, XRD, SEM-EDX, and UV-Vis DRS.
   - To optimize batch adsorption parameters (pH, dosage, contact time) using Response Surface Methodology.
   - To elucidate the adsorption kinetics (pseudo-first vs. pseudo-second order) and equilibrium isotherms (Langmuir vs. Freundlich).
   
5. Plan of Work & Methodology:
   Detailed step-by-step chemical procedures, analytical instrumentation specifications, and safety measures.
   
6. Thesis Chapters Framework:
   - Chapter 1: Introduction (Background, Problem Statement, Objectives)
   - Chapter 2: Literature Review (Comprehensive, thematic, critical review of prior work)
   - Chapter 3: Materials & Methods (Chemicals, synthesis, characterization specs, protocols)
   - Chapter 4: Results & Discussion (Data graphs, tables, mechanistic explanations, error bars)
   - Chapter 5: Conclusions & Recommendations (Summary of achievements, unanswered questions)`,
          detailedTheoryUrRoman: `UOS MPhil Synopsis ke zaroori ajza:
1. Research Title: Title hamesha specific hona chahiye. Fazool alfaz jaise "A study on..." nahi hone chahiye.
2. Introduction: Topic ka bunyadi taaruf aur uski chemical ahmiyat.
3. Problem Statement & Research Gap: Saaf batana ke mawjooda tareeqon mein kya kharabi hai jisko aap theek kar rahe hain.
4. Objectives: Hamesha bullet points mein measurable verbs ke sath likhein (maslan: To synthesize, To characterize, To evaluate).
5. Methodology: Chemicals kahan se aayenge, synthesis kaisay hogi, characterization ke kon se instruments istemal honge.
6. References: EndNote se ACS ya RSC format mein references shamil karein.`,
          applicationsEn: [
            'Drafting formal research proposals for Higher Education Commission (HEC) National Research Program for Universities (NRPU) grants.',
            'Defending the MPhil research synopsis in front of the University Board of Studies.',
            'Organizing laboratory milestones to complete thesis defense within the official 4-semester duration.'
          ],
          applicationsUrRoman: [
            'HEC ke research grants ke liye funding proposals tayyar karna.',
            'Departmental Board of Studies ke samne apna MPhil topic kamyabi se defend karna.',
            'Apna lab work 2 saal ke andar mukammal kar ke degree bar-waqt hasil karna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'The Literature Review chapter should be an author-by-author chronological diary: "Smith et al. did X. Then Jones et al. did Y."',
              correction: 'A postgraduate literature review must be thematic and critical. Papers must be synthesized and compared based on underlying chemistry principles, reaction mechanisms, and methodological shortcomings.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Literature review mein sirf har scientist ka naam likh kar aik aik line likh dena kaafi hai.',
              correction: 'Literature review ko topics aur themes ke hisaab se likhna chahiye aur mukhtalif papers ka aapas mein muwazna karna chahiye.'
            }
          ],
          examImportantPointsEn: [
            'Essential sections of an MPhil synopsis according to UOS guidelines.',
            'How to formulate a scientific problem statement.',
            'Action verbs suitable for research objectives (synthesize, characterize, optimize, evaluate).'
          ],
          examImportantPointsUrRoman: [
            'Synopsis ke 6 bunyadi hissay exam mein aksar puche jatay hain.',
            'Research gap ki tareef aur ahmiyat.',
            'Objectives likhne ka sahi tareeqa.'
          ],
          revisionSummaryEn: 'The MPhil synopsis is the foundational blueprint of postgraduate research. A strong proposal features a non-generic title, a rigorously substantiated research gap, actionable objectives, robust methodology, and an organized timeline. Thesis chapters follow the standard five-chapter academic format designed to prove the candidate has mastered independent chemical inquiry.',
          revisionSummaryUrRoman: 'Synopsis research ka bunyadi naksha hai. Isme aala title, wazeh research gap, measurable objectives, aur authentic methodology hona laazmi hai. Thesis ke 5 chapters student ki research ko dunya ke samne pesh karte hain.',
          flashcards: [
            {
              id: 'fc-res-4',
              category: 'Thesis Preparation',
              frontEn: 'What are the five standard chapters of an MPhil Chemistry thesis?',
              frontUrRoman: 'MPhil Chemistry thesis ke 5 standard chapters konse hotay hain?',
              backEn: 'Chapter 1: Introduction; Chapter 2: Literature Review; Chapter 3: Materials and Methods; Chapter 4: Results and Discussion; Chapter 5: Conclusions and Future Recommendations.',
              backUrRoman: '1. Introduction, 2. Literature Review, 3. Materials and Methods, 4. Results and Discussion, 5. Conclusions and Future Recommendations.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-res-3',
              subjectId: 'chem-7101',
              topicId: 'res-top-3',
              questionEn: 'Why must research objectives be phrased using measurable action verbs rather than vague phrases like "to study"?',
              questionUrRoman: 'Research objectives mein "to study" ke bajaye measurable action verbs kyun zaroori hain?',
              modelAnswerEn: 'Phrases like "to study" or "to understand" describe passive mental processes that cannot be objectively verified during a thesis defense. In contrast, action verbs based on Bloom’s taxonomy (e.g., "to synthesize", "to quantify", "to evaluate", "to optimize") specify concrete, observable empirical outcomes with clear criteria for successful completion.',
              modelAnswerUrRoman: '"To study" aik aam lafz hai jiska koi paimana nahi hota. Jabkay "to synthesize", "to characterize" aur "to optimize" thos amli kaam hain jinka nateeja thesis mein wazeh dikhta hai aur examiner unhe check kar sakta hai.',
              keyPointsEn: [
                'Action verbs provide verifiable empirical criteria.',
                'Prevents ambiguity regarding whether the degree requirements were met.'
              ],
              keyPointsUrRoman: [
                'Action verbs se kaam ki pemaish aasan hoti hai.',
                'Defense mein examiner ko wazeh jawab milta hai.'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-res-3',
              subjectId: 'chem-7101',
              topicId: 'res-top-3',
              questionEn: 'Draft a complete mock research synopsis outline for an MPhil Chemistry project involving "Green synthesis of metal-oxide nanoparticles for dye degradation". Include title, problem statement, research gap, four specific objectives, and expected outcomes.',
              questionUrRoman: 'Green synthesis of metal-oxide nanoparticles for dye degradation par MPhil synopsis ka mukammal outline draft karein: Title, problem statement, research gap, 4 specific objectives aur expected outcomes shamil hon.',
              rubricEn: [
                'Professional scientific title (2 marks)',
                'Problem statement and research gap (3 marks)',
                'Four measurable objectives (3 marks)',
                'Expected outcomes and methodology summary (2 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'Title: "Phytochemical-Mediated Green Synthesis of Zinc Oxide/Graphene Oxide Nanocomposites Using Moringa oleifera Leaf Extract for Photocatalytic Mineralization of Toxic Textile Effluents"',
                mainExplanation: 'Problem Statement: Conventional chemical methods for synthesizing ZnO nanoparticles rely on hazardous reducing agents (e.g., hydrazine hydrate, sodium borohydride) and toxic organic capping ligands, generating hazardous secondary chemical waste. Furthermore, bare ZnO exhibits limited visible-light activity (bandgap 3.37 eV) and rapid electron-hole recombination, crippling its industrial viability.',
                derivationOrScheme: 'Research Gap: While Moringa oleifera leaf extract contains rich polyphenols and flavonoids capable of bio-reduction, its application in producing stable, visible-light active ZnO/GO heterojunctions with suppressed photocorrosion remains unexplored.',
                applicationsOrCriticalAnalysis: 'Objectives: (1) To optimize green synthesis conditions (extract volume, precursor Zn(NO₃)₂ concentration, calcination temp); (2) To characterize nanocomposites via XRD (crystallite size via Scherrer eq), FTIR, FESEM-EDX, and UV-Vis DRS; (3) To determine photocatalytic degradation rates of Reactive Black 5 dye under simulated solar irradiation; (4) To establish catalyst reusability and identify reactive radical species using scavengers (IPA, EDTA, BQ).',
                conclusion: 'Expected Outcomes: Development of an eco-friendly, non-toxic nanocatalyst achieving > 90% dye mineralization with high stability over 5 consecutive cycles.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Title: "Phytochemical-Mediated Green Synthesis of Zinc Oxide/Graphene Oxide Nanocomposites Using Moringa oleifera Leaf Extract for Photocatalytic Mineralization of Toxic Textile Effluents"',
                mainExplanation: 'Problem Statement: ZnO banane ke puranay chemical tareeqon mein khatarnaak toxic chemicals (hydrazine, NaBH4) istemal hotay hain jo mahol ko nuqsan pohanchate hain. Sath hi ZnO sirf UV light mein kaam karta hai jo dhoop ka sirf 5% hissa hai.',
                derivationOrScheme: 'Research Gap: Moringa oleifera (Sohanjna) ke pattay bohot aala natural antioxidants rakhte hain magar inko use kar ke ZnO/Graphene Oxide ka stable photocatalyst pehle nahi banaya gaya.',
                applicationsOrCriticalAnalysis: 'Objectives: 1. Green synthesis conditions ko optimize karna; 2. XRD, FTIR, SEM se characterization karna; 3. Dhoop mein dye degradation check karna; 4. Catalyst ko 5 martaba dho kar reusability verify karna.',
                conclusion: 'Expected Outcome: Sasta, green aur safe catalyst tayyar hoga jo textile factories ke ganday pani ko saaf karega.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-res-4',
              subjectId: 'chem-7101',
              moduleId: 'res-mod-7',
              topicId: 'res-top-3',
              questionEn: 'Which of the following research objectives is formulated most appropriately for an MPhil Chemistry synopsis?',
              questionUrRoman: 'MPhil Chemistry synopsis ke liye konsa objective sab se behtareen aur durust andaz mein likha gaya hai?',
              options: [
                { id: 'opt-a', textEn: 'To study various aspects of water pollution in Sargodha', textUrRoman: 'Sargodha mein water pollution ke mukhtalif pehluon ko parhna' },
                { id: 'opt-b', textEn: 'To synthesize and evaluate the thermal stability of novel polyurethane/clay nanocomposites using TGA and DSC', textUrRoman: 'TGA aur DSC ke zariye novel polyurethane/clay nanocomposites ko synthesize aur unki thermal stability evaluate karna' },
                { id: 'opt-c', textEn: 'To understand how catalysts work in organic reactions', textUrRoman: 'Yeh samajhna ke organic reactions mein catalysts kaisay kaam karte hain' },
                { id: 'opt-d', textEn: 'To read 50 papers on polymer degradation', textUrRoman: 'Polymer degradation par 50 papers parhna' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'Option B uses active, measurable verbs ("synthesize", "evaluate"), names specific materials, and specifies the exact analytical techniques (TGA, DSC). Options A and C are vague, and Option D is an activity, not a scientific outcome.',
              explanationUrRoman: 'Option B bilkul scientific aur measurable hai jisme chemicals aur instruments (TGA, DSC) ka wazeh zikr hai. Baqi options aam aur ghair-scientific hain.',
              difficulty: 'Foundation',
              referenceSource: 'University of Sargodha Synopsis Writing Handbook'
            }
          ],
          referencesEn: [
            { citation: 'University of Sargodha. (2024). Regulations for MPhil / MS Degree Programs. Directorate of Academics.', type: 'UOS Syllabus' },
            { citation: 'Gastel, B., & Day, R. A. (2016). How to Write and Publish a Scientific Paper (8th ed.). Greenwood.', type: 'Standard Textbook' }
          ]
        }
      }
    ]
  },
  {
    id: 'res-mod-10',
    subjectId: 'chem-7101',
    moduleNumber: 10,
    titleEn: 'Research Integrity, Ethics & Turnitin Similarity Analysis',
    titleUrRoman: 'Research Integrity, Ethics aur Turnitin Similarity Analysis',
    overviewEn: 'Academic fraud prevention, understanding Turnitin reports, plagiarism vs. similarity, data fabrication, research ethics, and responsible AI usage.',
    overviewUrRoman: 'Academic fraud ki rok-tham, Turnitin similarity report samajhna, data fabrication, research ethics aur AI ka zimmedarana istemal.',
    weekSchedule: 'Weeks 16–17',
    topics: [
      {
        id: 'res-top-4',
        moduleId: 'res-mod-10',
        subjectId: 'chem-7101',
        titleEn: 'Turnitin Similarity Index, Plagiarism Protocols & Publication Ethics',
        titleUrRoman: 'Turnitin Similarity Index, Plagiarism aur Publication Ethics',
        estimatedMinutes: 50,
        officialTopicMapping: 'Module 10: Research Ethics: plagiarism, self-plagiarism, data integrity, Turnitin reports, AI-generated content verification, authorship.',
        isSupplementary: false,
        lessonContent: {
          id: 'res-les-4',
          topicId: 'res-top-4',
          titleEn: 'Academic Integrity in Chemistry: Plagiarism, Turnitin Interpretation, Data Fabrication & Responsible AI',
          titleUrRoman: 'Chemistry mein Academic Integrity: Plagiarism, Turnitin Reports aur Responsible AI',
          learningObjectivesEn: [
            'Differentiate between intellectual plagiarism, text similarity, self-plagiarism, and duplicate submission.',
            'Interpret Turnitin similarity reports in accordance with official HEC Pakistan policies (≤ 19% overall, ≤ 5% single source).',
            'Identify ethical violations including data falsification, fabrication (dry-labbing), and gift/ghost authorship.',
            'Apply ethical frameworks to AI-assisted scientific writing without hallucination or unauthorized text submission.'
          ],
          learningObjectivesUrRoman: [
            'Plagiarism, text similarity, self-plagiarism aur duplicate submission mein farq samajhna.',
            'HEC Pakistan ki policy (overall ≤ 19%, single source ≤ 5%) ke mutabiq Turnitin report interpret karna.',
            'Data fabrication (farzi readings banana) aur gift/ghost authorship ke nuqsanat ko samajhna.',
            'Research paper aur thesis likhne mein AI tools ka zimmedarana istemal seekhna.'
          ],
          prerequisitesEn: [
            'Understanding of paraphrasing, in-text referencing, and bibliographies.',
            'Awareness of institutional disciplinary procedures.'
          ],
          prerequisitesUrRoman: [
            'Paraphrasing aur citation styles ki bunyadi samajh.',
            'University disciplinary rules ka aam ilm.'
          ],
          introductionEn: `In postgraduate chemical research, scientific integrity is the non-negotiable bedrock of academic reputation. Fabricating spectra, falsifying NMR peak integrations, or plagiarizing published text destroys research careers, invalidates degrees, and compromises scientific progress. Under Higher Education Commission (HEC) Pakistan and University of Sargodha regulations, strict automated similarity screening (Turnitin) is enforced before any MPhil thesis can be submitted for external defense.`,
          introductionUrRoman: `Postgraduate chemistry mein research integrity sab se ahem shart hai. NMR ya FTIR ke farzi data banana, ya doosray scientists ke alfaz chori kar ke apna bana kar pesh karna na-qabil-e-maafi jurm hai. HEC Pakistan aur University of Sargodha ke qawaneen ke mutabiq har thesis defense se pehle Turnitin software se guzara jata hai aur similarity 19% se kam hona laazmi hai.`,
          definitionsEn: [
            {
              term: 'Plagiarism',
              definition: 'The appropriation of another person’s ideas, processes, results, or words without giving appropriate academic credit and attribution.'
            },
            {
              term: 'Data Fabrication',
              definition: 'The invention or recording of fictitious experimental data or laboratory results that were never actually generated ("dry-labbing").'
            },
            {
              term: 'Data Falsification',
              definition: 'The deliberate manipulation of research materials, equipment, or processes, or altering/omitting genuine experimental data points so that the research is not accurately represented.'
            },
            {
              term: 'Turnitin Similarity Index',
              definition: 'A percentage figure generated by comparing a document against billions of web pages, journals, and institutional student repositories; it measures textual overlap, which an experienced academic must evaluate to determine if true plagiarism occurred.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Plagiarism',
              definition: 'Kisi doosray shakhs ke research ideas, alfaz, ya data ko baghair hawala (reference) diye apna keh kar pesh karna.'
            },
            {
              term: 'Data Fabrication',
              definition: 'Lab mein experiment kiye baghair farzi readings aur graphs bana lena.'
            },
            {
              term: 'Data Falsification',
              definition: 'Apni marzi ka nateeja lane ke liye asli readings ko tabdeel karna ya kharab points ko chupa lena.'
            }
          ],
          detailedTheoryEn: `HEC Pakistan Plagiarism Policy Strictures:
          
1. Quantitative Thresholds:
   - Maximum allowable overall similarity index: ≤ 19%.
   - Maximum allowable similarity from any single source: < 5%.
   - Note: Merely scoring 15% does NOT mean the document is free of plagiarism! If even one paragraph of text is copied verbatim without quotation marks and citation, it constitutes gross plagiarism regardless of the total percentage.
   
2. Permissible Exclusions in Turnitin:
   - Bibliography / Reference list.
   - Standard chemical phrases and IUPAC names (e.g., "1,3,5-benzenetricarboxylic acid").
   - Universal mathematical and chemical equations.
   
3. Authorship Ethics (COPE Guidelines):
   - Authorship requires: (a) Substantial contributions to conception, design, acquisition of data, or analysis; (b) Drafting or revising the article; (c) Final approval; (d) Accountability.
   - Gift Authorship: Granting co-authorship to a senior academic who contributed nothing (strictly unethical).
   - Ghost Authorship: Omitting the name of a junior scholar who conducted the bulk of the experimental syntheses (unethical).
   
4. Responsible AI Usage:
   Generative AI (e.g., ChatGPT, Claude) can assist with language refinement and grammar editing. However, an AI cannot be listed as a co-author. Fabricated citations produced by AI hallucinations violate research integrity if submitted without manual verification.`,
          detailedTheoryUrRoman: `HEC Pakistan ki Plagiarism Policy ke ahem nuqaat:
- Overall Similarity: 19% se zyada nahi honi chahiye.
- Single Source: Kisi aik website ya paper se 5% se zyada match nahi hona chahiye.
- Turnitin mein References aur standard chemical names ko exclude karne ki ijazat hoti hai.
- Authorship Rules: Sirf un logon ko author banaya jaye jinhon ne waqayi lab mein kaam kiya ho ya paper likha ho.
- AI ka Istemal: AI se grammar theek ki ja sakti hai magar AI-generated references ko verify kiye baghair shamil karna academic dishonesty hai.`,
          comparisonTables: [
            {
              titleEn: 'Academic Misconduct Categories in Postgraduate Chemical Research',
              titleUrRoman: 'Chemical Research mein Bad-Unwani ki Iqsaam',
              headersEn: ['Violation Type', 'Nature of Offense', 'Detection Method', 'Institutional Penalty (HEC/UOS)'],
              headersUrRoman: ['Jurm Ki Qism', 'Offense ki Wazahat', 'Pakarne ka Tareeqa', 'Saza (HEC/UOS Rules)'],
              rowsEn: [
                ['Verbatim Plagiarism', 'Copying sentences directly without quotation marks or attribution', 'Turnitin string matching algorithm', 'Thesis rejection, 1-year ban from resubmission'],
                ['Data Fabrication', 'Inventing fictitious spectra, titration values, or XRD patterns', 'Audit of raw instrument logbooks and digital time-stamps', 'Degree cancellation, expulsion, blacklist notification'],
                ['Data Falsification', 'Selectively erasing outlier points to falsely boost R² to 0.999', 'Chemometric statistical variance testing', 'Retraction of publication, public reprimand'],
                ['Salami Slicing', 'Splitting one cohesive study into tiny papers to artificially boost publication count', 'Editorial peer review and cross-manuscript audit', 'Rejection across journal networks']
              ],
              rowsUrRoman: [
                ['Verbatim Plagiarism', 'Doosron ke jumlay bina quotation aur reference ke copy karna', 'Turnitin software', 'Thesis reject, dobara likhne ka hukum'],
                ['Data Fabrication', 'Farzi graphs aur readings banana', 'Lab notebook aur instrument logbook check karna', 'Degree cancel, university se nikalna'],
                ['Data Falsification', 'Asli data ko badal kar zabardasti theek sabit karna', 'Statistical audit', 'Paper retract (wapis lena), badnami']
              ]
            }
          ],
          applicationsEn: [
            'Conducting pre-submission Turnitin scans on MPhil theses to eradicate unintended similarity clusters.',
            'Ensuring compliance with Committee on Publication Ethics (COPE) standards when submitting manuscripts to ACS, RSC, or Elsevier journals.',
            'Maintaining pristine electronic lab notebooks (ELNs) with verifiable audit trails for pharmaceutical patent audits.'
          ],
          applicationsUrRoman: [
            'Thesis jama karwane se pehle Turnitin check kar ke matching sentences ko apne alfaz mein dhalna.',
            'International ACS aur RSC journals mein papers bhejte waqt ethics standards poore karna.',
            'Lab notebook mein date aur time ke sath har experiment ka record mehfooz rakhna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'If my thesis Turnitin similarity score is 12%, it is guaranteed to be 100% free of plagiarism.',
              correction: 'False. Turnitin measures word-for-word string similarity, not ethics. If page 45 contains an unreferenced paragraph copied verbatim from an uncited patent, that is severe plagiarism despite the 12% total score.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Agar Turnitin score 14% aa gaya tou iska matlab hai thesis bilkul theek hai.',
              correction: 'Ghalat. Agar aik poora paragraph kisi paper se bina reference ke uthaya gaya ho, tou Turnitin score 10% hone ke bawajood bhi plagiarism ka case ban jata hai.'
            }
          ],
          examImportantPointsEn: [
            'HEC Pakistan similarity limits: 19% aggregate, < 5% single source.',
            'Difference between fabrication (making up data) and falsification (altering data).',
            'Gift authorship vs. Ghost authorship definitions.'
          ],
          examImportantPointsUrRoman: [
            'HEC ke 19% overall aur 5% single-source rules.',
            'Fabrication aur Falsification mein farq.',
            'Research ethics aur Turnitin ka role.'
          ],
          revisionSummaryEn: 'Academic integrity requires absolute honesty in generating, analyzing, and reporting chemical discoveries. Plagiarism involves passing off another’s work as one’s own, whereas fabrication and falsification corrupt the empirical scientific record. Under HEC guidelines, Turnitin similarity must remain under 19% with zero uncredited textual appropriation.',
          revisionSummaryUrRoman: 'Academic integrity research ki bunyad hai. Plagiarism, data fabrication aur falsification se bachen. HEC ke mutabiq thesis ka Turnitin score 19% se kam hona laazmi hai aur tamam sources ko sahi tareeqay se cite karna zaroori hai.',
          flashcards: [
            {
              id: 'fc-res-5',
              category: 'Research Ethics',
              frontEn: 'What is the exact difference between Data Fabrication and Data Falsification?',
              frontUrRoman: 'Data Fabrication aur Data Falsification mein kya farq hai?',
              backEn: 'Fabrication is the outright invention of fake data that was never measured. Falsification is the manipulation, alteration, or deceptive omission of real data to skew experimental findings.',
              backUrRoman: 'Fabrication ka matlab hai farzi data create karna (jo kabhi measure hi na hua ho). Falsification ka matlab hai asli data ko badalna ya kharab readings ko chupa kar zabardasti graph theek karna.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-res-4',
              subjectId: 'chem-7101',
              topicId: 'res-top-4',
              questionEn: 'State the official HEC Pakistan criteria for MPhil thesis Turnitin similarity percentage.',
              questionUrRoman: 'MPhil thesis ke Turnitin similarity percentage ke liye HEC Pakistan ka official rule kya hai?',
              modelAnswerEn: 'According to the official HEC Pakistan Plagiarism Policy: (1) The overall Turnitin similarity index of the thesis must not exceed 19%; (2) The similarity from any individual single source must remain strictly below 5%; (3) References, bibliography, and standard common chemical nomenclature may be excluded from the match calculation.',
              modelAnswerUrRoman: 'HEC Pakistan ke qanoon ke mutabiq: 1. Overall similarity 19% se zyada na ho; 2. Kisi aik source se 5% se zyada match na ho; 3. References aur standard chemical names ko filter out karne ki ijazat hai.',
              keyPointsEn: [
                'Overall index ≤ 19%',
                'Single source < 5%',
                'Exclude bibliography and quotes'
              ],
              keyPointsUrRoman: [
                'Kul similarity ≤ 19%',
                'Aik source se < 5%',
                'References exclude hotay hain'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-res-4',
              subjectId: 'chem-7101',
              topicId: 'res-top-4',
              questionEn: 'Analyze the ethical implications of using Artificial Intelligence (AI) and Large Language Models (LLMs) in postgraduate chemical research and thesis composition. Propose an institutional framework for responsible AI adoption that prevents hallucinations and maintains genuine scholarship.',
              questionUrRoman: 'Postgraduate chemical research mein Artificial Intelligence aur LLMs ke istemal ke ikhlaqi pehluon ka jaiza lein. Aik aisi institutional framework tajweez karein jo AI hallucinations se bachaye aur research integrity qaim rakhay.',
              rubricEn: [
                'Ethical risks of AI in scientific writing: Hallucination and bias (3 marks)',
                'Authorship restrictions for AI entities under COPE guidelines (2 marks)',
                'Permissible vs. Prohibited AI use cases in chemical research (3 marks)',
                'Proposed departmental governance and audit protocol (2 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'The rapid emergence of Large Language Models (e.g., GPT-4) presents unprecedented opportunities for academic drafting assistance, but equally severe ethical risks regarding fabricated citations, synthetic data, and intellectual opacity.',
                mainExplanation: 'Under international publishing guidelines (COPE, Nature, ACS), an AI tool cannot be credited with authorship because it cannot assume legal accountability, disclose conflicts of interest, or consent to copyright transfers. The principal risk in chemistry research is "hallucination"—where an LLM invents plausible-sounding journal titles, false volume numbers, or non-existent chemical reaction yields that an unwary graduate student might paste into a literature survey.',
                applicationsOrCriticalAnalysis: 'Permissible Use: Language polishing, correcting grammatical syntax, summarizing broad review articles, and drafting boilerplate code for data plotting. Prohibited Use: Generating synthetic experimental spectra, fabricating analytical readings, producing entire thesis sections without human oversight, or submitting unpublished proprietary research data into public AI training corpora.',
                conclusion: 'Postgraduate institutions must mandate explicit AI disclosure statements in all MPhil theses, specifying which tools were employed and confirming that all factual assertions and literature citations were independently verified against primary peer-reviewed sources.'
              },
              structuredAnswerUrRoman: {
                introduction: 'AI tools (jaise ChatGPT) se research paper likhne mein madad li ja sakti hai magar iske sath bohot baray ikhlaqi khatraat bhi jure hain.',
                mainExplanation: 'COPE aur ACS guidelines ke mutabiq AI ko kabhi bhi research paper ka author nahi banaya ja sakta kyunke AI kanooni zimmedari nahi le sakta. Sab se bara khatra "AI Hallucination" hai jisme AI farzi papers, fake references aur ghalat chemical reactions bana kar pesh kar deta hai.',
                applicationsOrCriticalAnalysis: 'Jayez Istemal: English grammar theek karna, sentence structure behtar banana. Na-jayez Istemal: Farzi graphs banana, poora thesis AI se likhwana, ya doosron ka unpublished data AI mein upload karna.',
                conclusion: 'MPhil student ko thesis ke aakhir mein aik Declaration of AI Usage lagani chahiye jisme likha ho ke AI se sirf grammar check ki gayi aur tamam facts aur references student ne khud verify kiye.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-res-5',
              subjectId: 'chem-7101',
              moduleId: 'res-mod-10',
              topicId: 'res-top-4',
              questionEn: 'Under Committee on Publication Ethics (COPE) and major chemical society guidelines, can an Artificial Intelligence tool (such as ChatGPT) be listed as a co-author on a scientific manuscript?',
              questionUrRoman: 'COPE aur international chemical societies ke mutabiq kya kisi AI tool (jaise ChatGPT) ko research paper ka co-author banaya ja sakta hai?',
              options: [
                { id: 'opt-a', textEn: 'Yes, provided the AI contributed more than 50% of the text drafting', textUrRoman: 'Haan, agar AI ne 50% se zyada paper likha ho' },
                { id: 'opt-b', textEn: 'No, because authorship requires legal accountability, conflict-of-interest disclosure, and consent to copyright transfer, which AI cannot provide', textUrRoman: 'Nahi, kyunke author hone ke liye kanooni zimmedari aur ethics ki pabandi laazmi hai jo AI nahi kar sakta' },
                { id: 'opt-c', textEn: 'Yes, but only if listed as the corresponding author', textUrRoman: 'Haan, magar sirf corresponding author ke tor par' },
                { id: 'opt-d', textEn: 'Only with the written permission of the university vice chancellor', textUrRoman: 'Sirf university VC ki ijazat se' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'Authorship implies accountability for the integrity and factual veracity of the research. Non-human artificial intelligence entities cannot assume legal responsibility, sign copyright transfers, or disclose ethical conflicts, making authorship impossible.',
              explanationUrRoman: 'Author hone ke liye kanooni aur ikhlaqi zimmedari lena parti hai jo AI nahi le sakta. Is liye kisi bhi international journal mein AI author nahi ban sakta.',
              difficulty: 'Foundation',
              referenceSource: 'COPE Authorship Guidelines & Nature Editorial Policy'
            }
          ],
          referencesEn: [
            { citation: 'Higher Education Commission (HEC) of Pakistan. (2021). National Plagiarism Policy Version 2.0. Islamabad.', type: 'IUPAC / HEC Guideline' },
            { citation: 'Committee on Publication Ethics (COPE). (2023). Authorship and AI tools: COPE position statement.', type: 'IUPAC / HEC Guideline' }
          ]
        }
      }
    ]
  }
];
