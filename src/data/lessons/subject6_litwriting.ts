import { Module } from '../../types';

export const subject6Modules: Module[] = [
  {
    id: 'lit-mod-5',
    subjectId: 'chem-7102',
    moduleNumber: 5,
    titleEn: 'Literature Synthesis Matrices & Critical Gap Identification',
    titleUrRoman: 'Literature Synthesis Matrix aur Critical Gap Identification',
    overviewEn: 'Constructing systematic comparative literature review matrices, evaluating conflicting findings, extracting quantitative benchmarks, and formulating verified research gaps.',
    overviewUrRoman: 'Systematic literature review matrix banana, mutazad findings ka taqabul, quantitative benchmarks aur research gap nikalna.',
    weekSchedule: 'Modules 4–6',
    topics: [
      {
        id: 'lit-top-1',
        moduleId: 'lit-mod-5',
        subjectId: 'chem-7102',
        titleEn: 'Literature Review Matrix Design & Synthesizing Multi-Paper Findings',
        titleUrRoman: 'Literature Review Matrix Design aur Papers ka Synthesis',
        estimatedMinutes: 50,
        officialTopicMapping: 'Module 5: Research gap identification and literature matrices; writing a coherent literature review; avoiding unsupported conclusions.',
        isSupplementary: false,
        lessonContent: {
          id: 'lit-les-1',
          topicId: 'lit-top-1',
          titleEn: 'Constructing the Literature Review Matrix: Critical Synthesis, Thematic Grouping, and Weak vs. Improved Writing Examples',
          titleUrRoman: 'Literature Review Matrix: Papers ka Taqabuli Jaiza aur Writing Examples',
          learningObjectivesEn: [
            'Design a multi-column Literature Review Matrix extracting material precursors, reaction conditions, analytical characterization, quantitative performance, and verified limitations.',
            'Synthesize 10+ disparate chemistry research papers into coherent thematic paragraphs rather than author-by-author summaries.',
            'Transform "weak" descriptive summaries into "improved" critical postgraduate academic prose.',
            'Audit a literature draft using a standard peer-review evaluation checklist.'
          ],
          learningObjectivesUrRoman: [
            'Multi-column Literature Review Matrix design karna (precursors, conditions, characterization, limitations).',
            '10 se zyada papers ko jor kar aik cohesive thematic paragraph likhna.',
            'Kamzor (weak) descriptive writing ko aala (improved) postgraduate scientific prose mein badalna.',
            'Peer-review checklist ke mutabiq literature review ka audit karna.'
          ],
          prerequisitesEn: [
            'Understanding of primary research articles vs review articles.',
            'Proficiency in identifying independent and dependent variables in chemical publications.'
          ],
          prerequisitesUrRoman: [
            'Original research papers aur review papers ka farq.',
            'Paper mein se quantitative data nikalne ka tareeqa.'
          ],
          introductionEn: `A frequent shortcoming in MPhil chemistry dissertations is the "annotated bibliography" trap: writing a disjointed sequence of paragraphs where each paragraph merely states what one author did ("Ahmed et al. (2021) synthesized X. Then Khan et al. (2022) measured Y..."). A true postgraduate literature survey is not a catalog of who did what; it is a critical synthesis of ideas, chemical trends, conflicting mechanisms, and technological bottlenecks organized thematically around a research gap. The literature review matrix is the indispensable scientific instrument that converts scattered papers into a coherent analytical argument.`,
          introductionUrRoman: `MPhil dissertations mein sab se aam kharabi yeh hoti hai ke student har scientist ka naam likh kar alag alag line likh deta hai ("Ahmed ne yeh kiya, phir Khan ne woh kiya"). Yeh literature review nahi balkay fehrist hai. Asli postgraduate literature review papers ka aapas mein muwazna hota hai ke kis chemical reaction mein yield behtar aayi, kahan ghalti hui, aur kahan mawjooda science mein kami (research gap) hai. Is maqsad ke liye Literature Review Matrix sab se zaroori tool hai.`,
          definitionsEn: [
            {
              term: 'Literature Review Matrix',
              definition: 'A structured analytical grid (table) that systematically cross-tabulates key parameters—such as chemical precursors, synthetic routes, surface areas, kinetic rate constants, and reported limitations—across published studies to reveal trends and research gaps.'
            },
            {
              term: 'Thematic Synthesis',
              definition: 'The intellectual integration of findings from multiple sources organized by conceptual themes (e.g., impact of dopant valence on charge recombination) rather than by chronological authors.'
            },
            {
              term: 'Activity Cliff',
              definition: 'A sharp, non-linear change in chemical or biological activity caused by a minor structural modification in a molecule or catalyst.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Literature Review Matrix',
              definition: 'Aik aisi table jisme mukhtalif papers ke materials, reaction conditions, surface areas, yields aur kamzoriyon ko aamne saamne rakh kar muwazna kiya jata hai.'
            },
            {
              term: 'Thematic Synthesis',
              definition: 'Papers ko saal ya author ke bajaye chemical themes (maslan pH ka asar ya catalyst doping) ke hisaab se jor kar likhna.'
            }
          ],
          detailedTheoryEn: `How to Construct and Deploy a Literature Matrix:
          
Step 1: Define Column Headers based on Experimental Variables:
- Column 1: Author, Year & Journal (with DOI)
- Column 2: Material / Catalyst Composition & Morphology
- Column 3: Synthetic Method & Thermal Conditions (e.g., Sol-gel, 500°C)
- Column 4: Key Characterization Metrics (e.g., BET Surface Area, Bandgap eV, Crystallite Size)
- Column 5: Target Performance (e.g., Adsorption qmax mg/g, Rate Constant k min⁻¹, % Yield)
- Column 6: Unaddressed Limitations / Critical Flaws (e.g., poor reusability, toxic solvent used)

Step 2: Identifying Discrepancies and Mechanistic Clashes:
When five papers examine the same reaction (e.g., photocatalytic CO₂ reduction), why do their reported yields vary by an order of magnitude? The matrix immediately reveals the root cause: Paper A used a 300 W Xenon lamp with full UV-visible flux, whereas Paper C used a low-power 15 W LED; or Paper B failed to report dissolved oxygen background blanks.

Step 3: Transforming Matrix Rows into Academic Prose:
Instead of writing:
"Chen (2021) made g-C₃N₄ and found surface area was 35 m²/g. Kumar (2022) added graphene and surface area was 110 m²/g. Zhao (2023) added MoS₂."
Write:
"Recent investigations into graphitic carbon nitride (g-C₃N₄) demonstrate that pristine pristine sheets suffer from low specific surface areas (typically 25–40 m²/g) and rapid exciton recombination. To overcome this limitation, hybridizing g-C₃N₄ with conductive 2D carbonaceous scaffolds has emerged as an effective strategy; for instance, Chen et al. (2021) and Kumar et al. (2022) achieved a threefold surface area expansion (up to 110 m²/g) via graphene oxide integration. However, while interfacial electron transfer was enhanced, these binary systems remain constrained by poor visible-light utilization beyond 460 nm, underscoring the urgent need for ternary Z-scheme heterojunction architectures."`,
          detailedTheoryUrRoman: `Literature Matrix banane ka tareeqa:
1. Columns banayein: Author & Year, Catalyst composition, Synthesis method, Surface area & bandgap, Reaction yield, aur Sab se ahem: Paper ki kami (Limitation).
2. Papers ka aapas mein takraav (Conflict) check karein: Agar do papers ke results mukhtalif hain tou matrix dekh kar pata chalta hai ke shayad aik ne temperature zyada rakha tha ya roshni ka bulb mukhtalif tha.
3. Thematic Paragraph Likhein: Kabhi bhi "Ali ne yeh kiya, Usman ne woh kiya" mat likhein. Hamesha chemical concept ke hisaab se sab papers ko mila kar aik cohesive paragraph banayein jaisa ke example mein dikhaya gaya hai.`,
          comparisonTables: [
            {
              titleEn: 'Writing Transformation: Weak vs. Improved Chemical Literature Review Writing',
              titleUrRoman: 'Writing Transformation: Kamzor vs. Behtareen Scientific Writing',
              headersEn: ['Aspect', 'Weak Example (Disjointed / Passive)', 'Improved Example (Critical / Thematic Synthesis)'],
              headersUrRoman: ['Pehlu', 'Kamzor Misal (Weak)', 'Behtareen Misal (Improved)'],
              rowsEn: [
                ['Opening Sentence', '"Many researchers have worked on water purification using various adsorbents."', '"Heavy metal contamination of municipal groundwater presents severe nephrotoxic risks, necessitating adsorbents with ultra-high selective binding capacities."'],
                ['Paper Integration', '"Smith (2019) used biochar for lead and got 25 mg/g. Then Jones (2021) modified biochar with acid and got 48 mg/g. Also, Lee (2023) tried magnetic biochar."', '"While pristine biochars typically exhibit modest lead(II) adsorption capacities (20–30 mg/g) owing to low surface charge density, chemical functionalization substantially enhances interfacial chelation. For example, acid oxidation introduces carboxyl and phenolic functionalities, elevating uptake to 48 mg/g (Jones et al., 2021), whereas magnetic Fe₃O₄ incorporation enables rapid magnetic decantation without sacrificing porous architecture (Lee et al., 2023)."'],
                ['Identification of Gap', '"More work is needed in this area to test other materials."', '"Despite these functionalization advances, existing modified biochars suffer from severe pore blockage during cyclic desorption, resulting in a > 35% capacity loss after four cycles. A synthesis protocol that anchors magnetic nanocrystals without obstructing micropores remains an unaddressed research challenge."']
              ],
              rowsUrRoman: [
                ['Shuruat', '"Pani saaf karne par bohat se logon ne kaam kiya hai."', '"Pani mein heavy metals ka hona kidney ke liye intehayi khatarnaak hai jis ke liye aala adsorbents darkaar hain."'],
                ['Papers ka Synthesis', '"Smith ne lead nikaala 25 mg/g aya. Jones ne acid use kiya tou 48 aya."', '"Aam biochar kam surface charge ki wajah se kam lead pakarta hai, magar acid se modify karne se functional groups barh jatay hain jis se capacity 48 mg/g tak pohanch jati hai (Jones et al., 2021)."'],
                ['Research Gap', '"Is topic par mazeed kaam hona chahiye."', '"In tamam taraqqi ke bawajood, mojooda biochars 4 dafa use hone ke baad 35% kamzor ho jatay hain kyunke pores band ho jatay hain. Pores ko khula rakhte huay magnet lagana aik an-dekha challenge hai."']
              ]
            }
          ],
          applicationsEn: [
            'Drafting Chapter 2 (Literature Review) of the MPhil Chemistry dissertation with high academic polish.',
            'Writing comprehensive review articles targeted at Q1 chemical journals (Chemical Reviews, Coordination Chemistry Reviews, Applied Catalysis B).',
            'Conducting prior art and patentability freedom-to-operate searches before filing industrial chemical patents.'
          ],
          applicationsUrRoman: [
            'MPhil thesis ka Chapter 2 (Literature Review) aala international standard par likhna.',
            'Q1 journals ke liye high-impact review papers likhna.',
            'Naye chemical process ka patent search karna taake pata chal sakay ke koi pehle se tou daawa nahi kar raha.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'A longer literature review containing 150 summarized papers is automatically superior to a concise review containing 60 synthesized papers.',
              correction: 'False. Reviewing literature is about analytical depth and critical synthesis, not volume. An uncritical dump of 150 papers reads like a phonebook, whereas 60 meticulously synthesized and compared studies reveal clear mechanistic insights and defensible research gaps.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Literature review jitna lamba hoga (150 papers ki list) utna hi number zyada milenge.',
              correction: 'Ghalat. Fazool lambi list examiners ko pasand nahi aati. 50-60 ahem papers ko aapas mein critically compare kar ke likhna asal postgraduate research hoti hai.'
            }
          ],
          examImportantPointsEn: [
            'How to construct a 6-column literature matrix.',
            'Techniques for transforming weak author-based prose into thematic paragraphs.',
            'Formulating a defensible research gap with quantitative justification.'
          ],
          examImportantPointsUrRoman: [
            'Literature matrix ke zaroori columns.',
            'Weak vs Improved scientific writing ke exam sawalat.',
            'Research gap ko quantitative tareeqay se wazeh karna.'
          ],
          revisionSummaryEn: 'A postgraduate literature review must avoid isolated author summaries. By organizing published studies into a systematic multi-column literature review matrix, researchers extract quantitative benchmarks, detect experimental discrepancies, and synthesize thematic paragraphs that clearly substantiate an empirical research gap.',
          revisionSummaryUrRoman: 'Literature review mein har scientist ki alag alag line likhne se bachein. Literature Matrix ke zariye papers ka muwazna karein aur themes ke hisaab se critical paragraphs likhein jo aapke thesis ke research gap ko thos saboot ke sath justify karein.',
          flashcards: [
            {
              id: 'fc-lit-1',
              category: 'Literature Survey',
              frontEn: 'What is the primary danger of writing a literature review as a chronological "annotated bibliography"?',
              frontUrRoman: 'Chronological andaz mein literature review likhne ka sab se bara nuqsan kya hai?',
              backEn: 'It fails to synthesize findings, obscures conflicting evidence, and prevents the reader from understanding the underlying chemical trends or the scientific rationale behind the research gap.',
              backUrRoman: 'Is se papers ka aapas mein muwazna nahi ho pata aur examiner ko samajh nahi aati ke mawjooda science mein asal kami (research gap) kahan hai.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-lit-1',
              subjectId: 'chem-7102',
              topicId: 'lit-top-1',
              questionEn: 'Identify the three core components required to establish a valid, defensible research gap in a chemical literature review.',
              questionUrRoman: 'Chemical literature review mein aik mazboot research gap wazeh karne ke 3 zaroori ajza likhein.',
              modelAnswerEn: 'A valid research gap requires: (1) Current State of the Art: A summary of established progress and highest reported benchmark figures; (2) The Unresolved Bottleneck / Contradiction: Specific empirical limitations (e.g., poor cyclic stability, high bandgap, toxic precursor, or conflicting mechanistic claims); (3) The Proposed Chemical Solution: Why the newly proposed methodology, composite, or mechanism is uniquely poised to resolve that specific bottleneck.',
              modelAnswerUrRoman: '1. Mawjooda taraqqi (ab tak kya kamyabi hui hai); 2. Unresolved masla ya kami (jaise 4 cycles ke baad catalyst ka kharab hona ya mehnga hona); 3. Naya hal (aapka banaya hua naya material is maslay ko kaisay door karega).',
              keyPointsEn: [
                'State of the art baseline',
                'Explicit unresolved limitation or contradiction',
                'Proposed unique resolution'
              ],
              keyPointsUrRoman: [
                'Mawjooda baseline',
                'Thos kami ya limitation',
                'Aapka tajweez shuda hal'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-lit-1',
              subjectId: 'chem-7102',
              topicId: 'lit-top-1',
              questionEn: 'Examine the following weak literature review excerpt: "Ali et al. (2020) studied TiO₂ for dye degradation and degraded 70% in 90 min. Then Bilal et al. (2022) added nitrogen to TiO₂ and got 85% in 60 min. Also, Chen (2023) made graphene-TiO₂ and reported 92% degradation." (a) Critique why this excerpt fails postgraduate academic writing standards. (b) Rewrite this excerpt into an improved, critically synthesized academic paragraph. (c) Derive a plausible research gap from these three studies.',
              questionUrRoman: 'Diye gaye kamzor literature review excerpt par tabsira karein ke isme kya khamiyan hain. Isay aala postgraduate academic andaz mein do-bara likhein aur is se aik mazboot research gap extract karein.',
              rubricEn: [
                'Critical analysis of weak excerpt deficiencies (3 marks)',
                'Rewritten high-level thematic synthesis paragraph (4 marks)',
                'Formulation of a justified, quantitative research gap (3 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'Critique of Weak Excerpt: The excerpt is purely descriptive, lacks chemical mechanism explanations, provides no context regarding light source or dye identity, and fails to compare why the modifications improved photocatalytic activity.',
                mainExplanation: 'Improved Synthesis Rewrite: "Titanium dioxide (TiO₂) remains the benchmark semiconductor for photocatalytic organic pollutant degradation; however, its pristine anatase form is constrained by a wide optical bandgap (3.20 eV, restricting absorption strictly to UV radiation) and fast carrier recombination. To extend photoresponse into the solar visible regime, heteroatom doping and 2D carbon hybridization have been actively pursued. Anion doping with nitrogen narrows the bandgap through N 2p-O 2p orbital hybridization, accelerating degradation rates (Bilal et al., 2022), while interfacial coupling with graphene scaffolds promotes rapid electron shuttling across 2D sheets, elevating degradation efficiencies to > 90% (Chen et al., 2023)."',
                applicationsOrCriticalAnalysis: 'Derived Research Gap: "While nitrogen doping enhances visible-light absorption and graphene facilitates charge transport independently, dual-functionalized N-TiO₂/graphene ternary nanocomposites frequently suffer from dopant-induced lattice defects acting as charge trapping centers at high dopant loadings. Establishing the precise atomic coordination threshold that maximizes visible-light absorption while preventing charge trapping represents a critical unresolved challenge in solar photocatalyst engineering."',
                conclusion: 'By shifting focus from author names to electronic band structure and charge transport mechanisms, the literature review establishes a clear scientific justification for subsequent experimental synthesis.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Kamzor Excerpt ka Nuqsan: Isme na roshni ki wavelength ka zikr hai, na dye ka naam, aur na hi yeh bataya gaya hai ke Nitrogen ya Graphene dalne se chemical tor par kya tabdeeli aayi.',
                mainExplanation: 'Behtareen Synthesis: "TiO₂ aala catalyst hai magar 3.2 eV bandgap ki wajah se sirf UV light mein kaam karta hai. Visible light mein kaam karwane ke liye Nitrogen doping ki gayi jo valence band ko ooper lati hai (Bilal et al., 2022). Jabkay Graphene oxide milane se electron tezi se sheet par chalay jatay hain aur electron-hole recombination ruk jati hai jis se efficiency 92% tak pohanch jati hai (Chen et al., 2023)."',
                applicationsOrCriticalAnalysis: 'Derived Research Gap: "Dono tareeqon ke bawajood, zyada nitrogen dalne se crystal lattice mein defects peda ho jatay hain jo electrons ko qaid kar letay hain. Aisa balance dhoondna jahan visible light absorption bhi aala ho aur crystal defects bhi na hon, mawjooda research ka aik ahem un-resolved masla hai."',
                conclusion: 'Is tarah likhne se examiner ko saaf pata chalta hai ke student ko chemistry ke mechanisms ki gehri samajh hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-lit-1',
              subjectId: 'chem-7102',
              moduleId: 'lit-mod-5',
              topicId: 'lit-top-1',
              questionEn: 'Which of the following organizational strategies represents the GOLD STANDARD for writing the Literature Review chapter of an MPhil Chemistry thesis?',
              questionUrRoman: 'MPhil Chemistry thesis ke Literature Review chapter ko organize karne ka GOLD STANDARD tareeqa konsa hai?',
              options: [
                { id: 'opt-a', textEn: 'Strictly chronological order from oldest published paper (1950) to newest (2026)', textUrRoman: '1950 se le kar 2026 tak har saal ke hisaab se likhna' },
                { id: 'opt-b', textEn: 'Thematic organization structured around chemical mechanisms, material classes, and conflicting parameters', textUrRoman: 'Chemical mechanisms, materials ki aqsaam aur mukhtalif parameters ke themes bana kar likhna' },
                { id: 'opt-c', textEn: 'Alphabetical order based on the first author’s last name', textUrRoman: 'Authors ke naamon ki alphabetical A to Z tarteeb' },
                { id: 'opt-d', textEn: 'Grouping papers strictly by the country where the research was performed', textUrRoman: 'Mulkon ke hisaab se alag alag karna' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'Thematic organization is universally recognized as the postgraduate gold standard. It synthesizes literature around concepts (e.g., impact of pH, synthesis temperature, dopant concentration, reaction kinetics), allowing direct comparison of findings and highlighting research gaps.',
              explanationUrRoman: 'Thematic organization sab se aala tareeqa hai jisme chemical concepts, reaction mechanisms aur parameters ko aapas mein compare kar ke likha jata hai.',
              difficulty: 'Foundation',
              referenceSource: 'Academic Writing in Chemistry Guidelines'
            }
          ],
          referencesEn: [
            { citation: 'Booth, A., Sutton, A., & Papaioannou, D. (2016). Systematic Approaches to a Successful Literature Review (2nd ed.). SAGE Publications.', type: 'Standard Textbook' },
            { citation: 'American Chemical Society. (2020). The ACS Guide to Scholarly Communication. ACS Publications.', type: 'IUPAC / HEC Guideline' }
          ]
        }
      }
    ]
  }
];
