import { Module } from '../../types';

export const subject2Modules: Module[] = [
  {
    id: 'ai-mod-1',
    subjectId: 'chem-7130',
    moduleNumber: 1,
    titleEn: 'AI & Machine Learning Foundations for Chemical Sciences',
    titleUrRoman: 'Chemical Sciences ke liye AI aur Machine Learning ki Bunyad',
    overviewEn: 'Artificial intelligence architecture, narrow vs. general AI, supervised vs. unsupervised paradigms, and computational knowledge representation in molecular systems.',
    overviewUrRoman: 'AI ka bunyadi dhancha, Narrow vs General AI, Supervised aur Unsupervised learning aur chemistry mein computational models.',
    weekSchedule: 'Weeks 1–3',
    topics: [
      {
        id: 'ai-top-1',
        moduleId: 'ai-mod-1',
        subjectId: 'chem-7130',
        titleEn: 'AI Paradigms, Narrow AI, and Molecular Data Encoding',
        titleUrRoman: 'AI Paradigms aur Chemistry Data ki Encoding',
        estimatedMinutes: 50,
        officialTopicMapping: 'Module 1: Definition of AI; narrow vs general; ML and DL; rule-based systems; data, information, and knowledge representation.',
        isSupplementary: false,
        lessonContent: {
          id: 'ai-les-1',
          topicId: 'ai-top-1',
          titleEn: 'Artificial Intelligence Paradigms, Expert Systems, and Molecular Data Representations (SMILES, InChI, Molecular Graphs)',
          titleUrRoman: 'AI Paradigms, Expert Systems aur Molecular Data Representations (SMILES, InChI)',
          learningObjectivesEn: [
            'Classify AI architectures into Narrow AI (ANI), Artificial General Intelligence (AGI), and Rule-Based vs. Data-Driven models.',
            'Differentiate between raw data, structured information, and computational knowledge in chemical decision support.',
            'Convert 2D chemical structural drawings into computer-readable SMILES strings and InChI keys.',
            'Explain the limitations of classical rule-based heuristic systems when predicting complex multi-component chemical equilibria.'
          ],
          learningObjectivesUrRoman: [
            'AI ko Narrow AI (ANI), General AI (AGI) aur Rule-Based models mein taqseem karna.',
            'Chemistry ke raw data, structured information aur computational knowledge ka farq samajhna.',
            'Chemical structures ko computer ki zuban (SMILES strings aur InChI keys) mein tabdeel karna.',
            'Complex chemical systems mein puranay rule-based tareeqon ki kamzoriyan samajhna.'
          ],
          prerequisitesEn: [
            'Basic organic molecular structures, valence, and functional groups.',
            'Introductory computer literacy and algebraic logic.'
          ],
          prerequisitesUrRoman: [
            'Organic chemistry ke functional groups aur covalent bonding ki basic samajh.',
            'Computer aur algebraic logic ka aam ilm.'
          ],
          introductionEn: `Artificial Intelligence (AI) in chemistry is not science fiction; it is an applied discipline that harnesses algorithmic architectures to parse chemical data, infer subtle non-linear structure-property relationships, and guide critical laboratory decisions. While traditional chemistry relied on manual heuristics and trial-and-error synthesis, modern research utilizes Narrow AI systems capable of screening millions of virtual molecules in seconds. To harness AI, chemists must understand how computers translate physical molecules into machine-readable tensors.`,
          introductionUrRoman: `Chemistry mein Artificial Intelligence (AI) koi khayali cheez nahi hai balkay aik amli sciency tool hai jo baray chemical data ko analyze kar ke lab decisions lene mein madad deta hai. Pehle chemistry mein barson lag jatay thay tajarbaat karne mein, magar aaj Narrow AI algorithms chand second mein laakhon molecules ki properties predict kar sakte hain. Computer physical chemical ko kaisay samajhta hai, yeh janna har postgraduate chemist ke liye laazmi hai.`,
          definitionsEn: [
            {
              term: 'Artificial Narrow Intelligence (ANI)',
              definition: 'AI systems engineered and trained to excel at a single, well-defined task (e.g., predicting toxicity or generating retrosynthetic routes for organic compounds).'
            },
            {
              term: 'SMILES (Simplified Molecular Input Line Entry System)',
              definition: 'A chemical line notation using standard ASCII strings to unambiguously represent the 2D topology and connectivity of chemical species (e.g., CC(=O)O for acetic acid).'
            },
            {
              term: 'InChIKey',
              definition: 'A 27-character fixed-length hashed digital representation of an IUPAC International Chemical Identifier designed to facilitate rapid database lookup and indexing.'
            },
            {
              term: 'Expert System',
              definition: 'A rule-based branch of AI that emulates the decision-making ability of a human expert by executing a comprehensive set of "IF-THEN" production rules stored in a knowledge base.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'Artificial Narrow Intelligence (ANI)',
              definition: 'Aisa AI system jo kisi aik makhsoos kaam ke liye banaya gaya ho (maslan chemical ki toxicity predict karna ya reaction ka route batana).'
            },
            {
              term: 'SMILES Notation',
              definition: 'Chemical structure ko aam keyboard ke characters (ASCII) mein likhne ka aalamgir tareeqa (maslan Ethanol = CCO).'
            },
            {
              term: 'Expert System',
              definition: 'Aisa computer program jo human expert ke rules ("agar yeh ho tou woh karo") par faisla karta hai.'
            }
          ],
          detailedTheoryEn: `The hierarchy of AI in chemical decision-making spans three primary tiers:
          
1. Artificial Intelligence (AI): The overarching umbrella encompassing any technique that enables machines to simulate human intelligence and reasoning.
2. Machine Learning (ML): A subset of AI focused on algorithms that learn statistical patterns from historical data without being explicitly programmed with hardcoded physical laws.
3. Deep Learning (DL): A subset of ML utilizing multi-layered artificial neural networks (ANNs), such as Graph Neural Networks (GNNs) and Transformer architectures, capable of automatically extracting features from raw molecular graphs.

Chemical Representation Hierarchy:
To feed a molecule into an ML model, it must be vectorized into numerical tensors:
- Level 1: 1D Descriptors: Molecular weight, LogP, topological polar surface area (TPSA), number of hydrogen bond donors/acceptors (Lipinski parameters).
- Level 2: 2D Linear Strings: SMILES (e.g., Benzene = c1ccccc1, Aspirin = CC(=O)Oc1ccccc1C(=O)O).
- Level 3: 2D Molecular Fingerprints: Morgan / Extended-Connectivity Fingerprints (ECFP4), representing bit-vectors of circular atom neighborhoods (0s and 1s).
- Level 4: Molecular Graphs: Nodes represent atoms (with feature vectors: element, hybridization, charge) and edges represent chemical bonds (single, double, aromatic). These are processed via Graph Convolutional Networks (GCNs).`,
          detailedTheoryUrRoman: `Chemistry mein AI ke teen darjay hain:
1. AI: Tamam automated techniques ka majmooa.
2. Machine Learning (ML): Aise algorithms jo puranay experimental data se patterns seekhte hain bina explicit rules ke.
3. Deep Learning (DL): Multi-layer neural networks jo complex chemical graphs ko direct process karte hain.

Molecules ko computer mein represent karne ke tareeqay:
- 1D Descriptors: Molecular weight, LogP, H-bond donors/acceptors.
- 2D Strings: SMILES format (maslan Benzene ko 'c1ccccc1' likhna).
- Molecular Fingerprints (ECFP4): 1024 ya 2048 bits ka binary code (0 aur 1) jo batata hai ke kon sa chemical group mojood hai.
- Molecular Graphs: Atoms ko nodes aur chemical bonds ko edges bana kar computer ko sikhana.`,
          applicationsEn: [
            'High-throughput virtual screening of million-compound commercial libraries for kinase inhibitor discovery.',
            'Predicting water solubility (LogS) and octanol-water partition coefficients (LogP) in early drug discovery.',
            'Automated retrosynthetic route prediction via Chematica / Synthia platforms.'
          ],
          applicationsUrRoman: [
            'Millions molecules mein se behtareen dawai dhoondne ke liye virtual screening karna.',
            'Laboratory mein chemical banaye baghair uski solubility aur LogP predict karna.',
            'Automated software ke zariye chemical reaction ke steps design karna.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'Artificial General Intelligence (AGI) currently operates in chemical laboratories, capable of inventing new theories independently.',
              correction: 'False. Current chemical AI is strictly Narrow AI (ANI). Models excel only at the narrow mathematical task on which they were trained; they possess zero general chemical intuition or consciousness.'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'AI labs mein khud ba khud naye theories aur laws bana rahi hai.',
              correction: 'Ghalat. Mawjooda AI sirf Narrow AI hai jo sirf trained data par statistical prediction karti hai, uske paas koi insani aqal ya shaoor nahi hota.'
            }
          ],
          examImportantPointsEn: [
            'Difference between Narrow AI, Machine Learning, and Deep Learning.',
            'How SMILES notation represents branched and aromatic structures (parentheses for branches, numbers for ring closures).',
            'Role of molecular fingerprints in quantitative structure-activity relationship (QSAR) studies.'
          ],
          examImportantPointsUrRoman: [
            'AI, ML aur Deep Learning ka Venn diagram aur taaruf.',
            'SMILES strings mein branches aur rings kaisay likhi jati hain.',
            'Molecular fingerprints ki tareef.'
          ],
          revisionSummaryEn: 'Artificial intelligence in chemistry relies on Narrow AI and statistical machine learning. Molecules are translated into machine-readable tensors through 1D physicochemical descriptors, 2D SMILES strings, circular ECFP fingerprints, and molecular graphs. These representations enable models to predict chemical behavior without manual heuristic programming.',
          revisionSummaryUrRoman: 'Chemistry mein AI Narrow AI par mabni hai. Molecules ko computer mein SMILES strings, molecular descriptors aur fingerprints ke zariye convert kiya jata hai taake machine learning models unki properties predict kar sakein.',
          flashcards: [
            {
              id: 'fc-ai-1',
              category: 'AI Basics',
              frontEn: 'What does a branch enclosed in parentheses indicate in a SMILES chemical string?',
              frontUrRoman: 'SMILES string mein parentheses ( ) kya zahir karti hain?',
              backEn: 'In SMILES notation, parentheses () denote a branch or substituent attached to the preceding atom (e.g., CC(=O)O represents acetic acid, where =O is a carbonyl oxygen branch off the central carbon).',
              backUrRoman: 'SMILES notation mein brackets ( ) kisi branch ya substituent ko zahir karti hain jo pechle atom se jura hota hai (maslan CC(=O)O mein =O carbonyl branch hai).'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-ai-1',
              subjectId: 'chem-7130',
              topicId: 'ai-top-1',
              questionEn: 'Convert the following chemical compounds into standard canonical SMILES notation: (a) Ethanol, (b) Acetone, (c) Benzene.',
              questionUrRoman: 'Darj zail chemicals ko standard SMILES notation mein convert karein: (a) Ethanol, (b) Acetone, (c) Benzene.',
              modelAnswerEn: '(a) Ethanol: CCO (two sp3 carbons linked to a hydroxyl oxygen); (b) Acetone: CC(=O)C (central carbon with double-bonded oxygen branch flanked by two methyl groups); (c) Benzene: c1ccccc1 (lowercase "c" indicates aromatic carbons, with numeric markers "1" designating ring closure).',
              modelAnswerUrRoman: '(a) Ethanol: CCO; (b) Acetone: CC(=O)C; (c) Benzene: c1ccccc1 (chota c aromatic carbon ko zahir karta hai aur number 1 ring banne ko dikhata hai).',
              keyPointsEn: [
                'Ethanol = CCO',
                'Acetone = CC(=O)C',
                'Benzene = c1ccccc1'
              ],
              keyPointsUrRoman: [
                'Ethanol = CCO',
                'Acetone = CC(=O)C',
                'Benzene = c1ccccc1'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-ai-1',
              subjectId: 'chem-7130',
              topicId: 'ai-top-1',
              questionEn: 'Compare classical rule-based Expert Systems with modern Machine Learning approaches in chemical property prediction. Discuss why the transition from explicit heuristic rules to data-driven latent representations became essential for handling complex chemical spaces.',
              questionUrRoman: 'Chemical property prediction mein puranay rule-based Expert Systems aur modern Machine Learning ka taqabul karein. Wazeh karein ke heuristics se data-driven models ki taraf aana kyun zaroori hua.',
              rubricEn: [
                'Definition and mechanics of expert systems in chemistry (3 marks)',
                'Failure modes of heuristic rules in non-linear chemical spaces (3 marks)',
                'Machine learning advantages and molecular representation learning (4 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'Historically, computational chemistry attempted to codify chemical intuition into rigid "IF-THEN" rules (e.g., the DENDRAL project for mass spectrometry interpretation). While successful in simple cases, rule-based systems collapsed under the sheer combinatorial complexity of chemical space.',
                mainExplanation: 'A rule-based expert system requires human experts to manually formulate every rule (e.g., "IF molecule has an ester group AND molecular weight < 300, THEN aroma is fruity"). However, chemical behavior is deeply non-linear: adding a single fluorine atom or changing stereochemistry can completely invert a molecule’s reactivity, solubility, or biological target affinity (an activity cliff). Hardcoded rules fail because capturing all synergistic electronic, steric, and thermodynamic interactions requires millions of conflicting exceptions.',
                applicationsOrCriticalAnalysis: 'Machine learning fundamentally alters this paradigm: instead of prescribing explicit rules, algorithms (Random Forests, Gradient Boosting, GNNs) ingest thousands of measured molecular examples and autonomously optimize mathematical weights that map structural features to properties. This enables accurate modeling of multi-parameter physical behaviors like boiling points, critical micelle concentrations, and polymer glass transition temperatures.',
                conclusion: 'While expert systems remain useful for strict compliance checklists, modern chemical decision-making is dominated by data-driven ML models that capture nuanced, multi-dimensional structure-activity landscapes.'
              },
              structuredAnswerUrRoman: {
                introduction: 'Shuru shuru mein computers ko chemistry ke qawaneen "IF-THEN" rules ki soorat mein sikhaye gaye (jaise DENDRAL program mass spectrometry ke liye). Magar yeh tareeqa baray chemical systems mein nakaam ho gaya.',
                mainExplanation: 'Rule-based system mein har cheez insan ko hath se program karni parti hai. Magar chemistry non-linear hai: aik chota sa functional group badalne se chemical ki reactivity aur solubility zameen aasman badal jati hai. Hazaron rules bananey ke bawajood naye molecules par puranay rules apply nahi hotay.',
                applicationsOrCriticalAnalysis: 'Machine learning ka faida yeh hai ke yeh puranay hazaron tajarbaat ka data dekh kar khud ba khud patterns aur mathematical weights seekh leti hai. Is se boiling point, solubility aur polymer properties ka andaza lagana intehayi aasan ho jata hai.',
                conclusion: 'Isi liye aaj har pharmaceutical aur materials company puranay systems ke bajaye machine learning algorithms par inhisar karti hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-ai-1',
              subjectId: 'chem-7130',
              moduleId: 'ai-mod-1',
              topicId: 'ai-top-1',
              questionEn: 'In standard SMILES string representation, how is an aromatic ring differentiated from an aliphatic saturated cyclic ring?',
              questionUrRoman: 'Standard SMILES string mein aromatic ring ko saturated aliphatic ring se kaisay alag pehchana jata hai?',
              options: [
                { id: 'opt-a', textEn: 'By placing an asterisk (*) before each carbon atom', textUrRoman: 'Har carbon se pehle asterisk (*) laga kar' },
                { id: 'opt-b', textEn: 'By using lowercase letters for aromatic atoms (e.g., "c" vs. "C")', textUrRoman: 'Aromatic atoms ke liye chotay huroof (lowercase) istemal kar ke jaise "c" bajaye "C"' },
                { id: 'opt-c', textEn: 'By writing the word "AROMATIC" in brackets', textUrRoman: 'Brackets mein "AROMATIC" likh kar' },
                { id: 'opt-d', textEn: 'By doubling the ring closure number (e.g., "c22ccccc22")', textUrRoman: 'Ring number ko double kar ke' }
              ],
              correctOptionId: 'opt-b',
              explanationEn: 'Under OpenSMILES standards, aromatic ring atoms are designated by lowercase symbols (e.g., "c" for aromatic carbon, "n" for aromatic nitrogen, "o" for aromatic oxygen), whereas aliphatic atoms use uppercase symbols ("C", "N", "O").',
              explanationUrRoman: 'OpenSMILES standard ke mutabiq aromatic carbons ko lowercase "c" se likha jata hai jabkay aliphatic sp3 carbons ko uppercase "C" se likhte hain.',
              difficulty: 'Foundation',
              referenceSource: 'OpenSMILES Specifications & ChemAxon'
            }
          ],
          referencesEn: [
            { citation: 'Weininger, D. (1988). SMILES, a chemical language and information system. Journal of Chemical Information and Computer Sciences, 28(1), 31-36.', type: 'Peer-Reviewed Journal' },
            { citation: 'Gómez-Bombarelli, R., et al. (2018). Automatic chemical design using a data-driven continuous representation of molecules. ACS Central Science, 4(2), 268-276.', type: 'Peer-Reviewed Journal' }
          ]
        }
      }
    ]
  },
  {
    id: 'ai-mod-3',
    subjectId: 'chem-7130',
    moduleNumber: 3,
    titleEn: 'Supervised Learning & Model Evaluation Metrics in Chemistry',
    titleUrRoman: 'Supervised Learning aur Model Evaluation Metrics',
    overviewEn: 'Training classification and regression models, preventing overfitting via cross-validation, and calculating precision, recall, F1-score, and RMSE with numerical chemistry examples.',
    overviewUrRoman: 'Classification aur regression models ki training, cross-validation, aur accuracy, precision, recall, F1-score aur RMSE ke mukammal numericals.',
    weekSchedule: 'Weeks 6–8',
    topics: [
      {
        id: 'ai-top-2',
        moduleId: 'ai-mod-3',
        subjectId: 'chem-7130',
        titleEn: 'Confusion Matrix, Classification Metrics & Regression Validation',
        titleUrRoman: 'Confusion Matrix, Classification Metrics aur Regression Validation',
        estimatedMinutes: 55,
        officialTopicMapping: 'Module 3: Supervised learning; classification and regression; overfitting/underfitting; cross-validation; accuracy, precision, recall, F1-score; confusion matrices.',
        isSupplementary: false,
        lessonContent: {
          id: 'ai-les-2',
          topicId: 'ai-top-2',
          titleEn: 'Evaluating Machine Learning Models: Confusion Matrices, Precision, Recall, F1-Score, and RMSE in Chemical Predictions',
          titleUrRoman: 'Machine Learning Models ki Evaluation: Confusion Matrix, Precision, Recall aur F1-Score',
          learningObjectivesEn: [
            'Construct and interpret a binary Confusion Matrix containing True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).',
            'Derive and calculate Classification Accuracy, Precision (Positive Predictive Value), Sensitivity/Recall, Specificity, and F1-Score.',
            'Explain why high accuracy is mathematically misleading in severely imbalanced chemical datasets (e.g., active drug molecules in a massive library).',
            'Calculate regression evaluation metrics: Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and Coefficient of Determination (R²).'
          ],
          learningObjectivesUrRoman: [
            'Binary Confusion Matrix (TP, TN, FP, FN) tayyar aur interpret karna.',
            'Accuracy, Precision, Recall, Specificity aur F1-score ke formulas aur calculations seekhna.',
            'Yeh samajhna ke imbalanced datasets mein sirf accuracy dekhna kyun ghalat hai.',
            'Regression models ke liye RMSE aur R² calculate karna.'
          ],
          prerequisitesEn: [
            'Basic probability, algebra, and elementary matrix operations.',
            'Conceptual distinction between categorical classes and continuous variables.'
          ],
          prerequisitesUrRoman: [
            'Bunyadi probability aur algebra.',
            'Continuous aur categorical data ka farq.'
          ],
          introductionEn: `In applied artificial intelligence, training a machine learning model is only half the battle. A model that achieves 99% accuracy on training data may utterly fail when deployed in an actual wet laboratory. In chemical decision-making—such as predicting whether an agrochemical candidate causes mutagenic DNA damage (Ames test)—a false negative could have catastrophic toxicological consequences. Chemists must therefore master the quantitative evaluation metrics used to audit predictive models before trusting their outputs for experimental investment.`,
          introductionUrRoman: `Machine learning mein sirf model train karna kaafi nahi hota balkay uski karkardagi ko rigorously test karna sab se ahem hota hai. Aik model jo computer par 99% accuracy dikhaye, lab mein ja kar buri tarah fail ho sakta hai. Khas tor par chemical toxicity ya drug discovery mein false negative aane ka matlab hai ke aik zehreeli dawai pass ho jaye. Is liye MPhil scholars ko confusion matrix, precision, recall aur F1-score ka mukammal hisab aana zaroori hai.`,
          definitionsEn: [
            {
              term: 'True Positive (TP)',
              definition: 'An experimental instance where the model correctly predicts the positive class (e.g., correctly predicting that a carcinogenic molecule is toxic).'
            },
            {
              term: 'False Positive (FP - Type I Error)',
              definition: 'An instance where the model incorrectly predicts the positive class for an actual negative sample (e.g., falsely predicting that a safe molecule is toxic).'
            },
            {
              term: 'False Negative (FN - Type II Error)',
              definition: 'An instance where the model incorrectly predicts the negative class for an actual positive sample (e.g., falsely classifying a toxic substance as safe).'
            },
            {
              term: 'F1-Score',
              definition: 'The harmonic mean of Precision and Recall, providing a balanced metric especially suited for highly skewed and imbalanced chemical databases.'
            }
          ],
          definitionsUrRoman: [
            {
              term: 'True Positive (TP)',
              definition: 'Jab model ne sahi tor par zehreelay chemical ko toxic kaha.'
            },
            {
              term: 'False Positive (FP - Type I Error)',
              definition: 'Jab chemical asal mein mehfooz tha magar model ne usay ghalati se toxic keh diya.'
            },
            {
              term: 'False Negative (FN - Type II Error)',
              definition: 'Jab chemical asal mein toxic tha magar model ne usay mehfooz keh kar pass kar diya (intehayi khatarnaak ghalati).'
            },
            {
              term: 'F1-Score',
              definition: 'Precision aur Recall ka harmonic mean jo imbalanced data ke liye behtareen paimana hai.'
            }
          ],
          detailedTheoryEn: `Mathematical Formulation of Classification Metrics:
          
1. Accuracy:
   Overall proportion of correct predictions across all classes:
   \\text{Accuracy} = \\frac{\\text{TP} + \\text{TN}}{\\text{TP} + \\text{TN} + \\text{FP} + \\text{FN}}
   
2. Precision (Positive Predictive Value):
   Out of all molecules predicted to be active/toxic, what fraction was truly active?
   \\text{Precision} = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}}
   High precision minimizes wasted chemical synthesis on false-positive leads.
   
3. Recall (Sensitivity / True Positive Rate):
   Out of all genuinely active/toxic molecules in existence, what fraction did the model successfully identify?
   \\text{Recall} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}}
   High recall ensures no hazardous toxins or promising drug candidates are missed.
   
4. F1-Score:
   Harmonic mean balancing precision and recall:
   F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2\\text{TP}}{2\\text{TP} + \\text{FP} + \\text{FN}}
   
5. Regression Metrics (for continuous properties like boiling point or logP):
   - Mean Absolute Error: \\text{MAE} = \\frac{1}{N} \\sum_{i=1}^N |y_i - \\hat{y}_i|
   - Root Mean Squared Error: \\text{RMSE} = \\sqrt{\\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2}
   RMSE penalizes large outlier errors more heavily than MAE.`,
          detailedTheoryUrRoman: `Classification Metrics ke Bunyadi Formulas:
- Accuracy: Kul durust predictions ki tadaad / Tamam samples = (TP + TN) / (TP + TN + FP + FN).
- Precision: Jin molecules ko model ne active kaha, unme se kitne waqayi active niklay = TP / (TP + FP).
- Recall (Sensitivity): Asli active molecules mein se model kitnon ko pakar saka = TP / (TP + FN).
- F1-Score: Precision aur Recall ka tawazun = 2 × (Precision × Recall) / (Precision + Recall).
- Regression ke liye RMSE ka formula istemal hota hai jo bari ghaltiyon ko zyada numayan karta hai.`,
          equationsAndDerivations: [
            {
              nameEn: 'Classification F1-Score Equation',
              nameUrRoman: 'F1-Score Formula',
              formula: 'F_1 = \\frac{2 \\cdot \\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
              symbolsAndUnitsEn: [
                { symbol: 'F_1', meaning: 'Harmonic mean score', siUnit: 'Dimensionless (range 0.0 to 1.0)' },
                { symbol: '\\text{Precision}', meaning: 'TP / (TP + FP)', siUnit: 'Dimensionless' },
                { symbol: '\\text{Recall}', meaning: 'TP / (TP + FN)', siUnit: 'Dimensionless' }
              ]
            },
            {
              nameEn: 'Root Mean Squared Error (RMSE)',
              nameUrRoman: 'Root Mean Squared Error Formula',
              formula: '\\text{RMSE} = \\sqrt{\\frac{1}{N} \\sum_{i=1}^{N} (y_i - \\hat{y}_i)^2}',
              symbolsAndUnitsEn: [
                { symbol: 'y_i', meaning: 'Experimental literature measurement', siUnit: 'Property unit (e.g., K, kJ/mol)' },
                { symbol: '\\hat{y}_i', meaning: 'Model predicted value', siUnit: 'Property unit' },
                { symbol: 'N', meaning: 'Test set sample size', siUnit: 'Integer' }
              ]
            }
          ],
          comparisonTables: [
            {
              titleEn: 'Decision Matrix: Trade-Off Between Precision and Recall in Chemical Discovery',
              titleUrRoman: 'Chemical Discovery mein Precision aur Recall ka Taqabul',
              headersEn: ['Operational Context', 'High Precision Priority', 'High Recall Priority', 'Ideal Balanced Metric'],
              headersUrRoman: ['Amli Context', 'Zyada Precision kab chahiye?', 'Zyada Recall kab chahiye?', 'Behtareen Paimana'],
              rowsEn: [
                ['Expensive Lab Synthesis', 'Crucial: Minimizes synthesizing useless inactive molecules ($10,000/compound)', 'Secondary: Acceptable if some active candidates are missed', 'Precision > 0.85'],
                ['Chemical Toxicity Screening', 'Secondary: Labeling a safe compound as toxic is acceptable as a caution', 'Critical: A false negative releases a lethal poison to market', 'Recall > 0.95'],
                ['Virtual Screening Pipeline', 'Stage 2: Top 100 cherry-picked leads for biological assay', 'Stage 1: Initial filtering of 1,000,000 virtual molecules', 'F1-Score / PR-AUC']
              ],
              rowsUrRoman: [
                ['Mehngi Lab Synthesis', 'Zaroori: Fuzool chemicals banane par lakhon rupay zaya na hon', 'Darmiana', 'Precision zyada ho'],
                ['Toxicity Screening', 'Aam', 'Intehayi Zaroori: Koi zehreela chemical ghalati se safe na kehla jaye', 'Recall 0.95 se barh kar ho'],
                ['Virtual Screening', 'Stage 2 (Final leads)', 'Stage 1 (Initial filtering)', 'F1-Score']
              ]
            }
          ],
          workedNumericals: [
            {
              problemStatementEn: 'A machine learning Support Vector Machine (SVM) classifier is trained to predict whether synthetic organic compounds exhibit endocrine disruption activity. The test set comprises 200 compounds with certified wet-lab assay data. The model yields the following confusion matrix results: True Positives (TP) = 36; True Negatives (TN) = 142; False Positives (FP) = 14; False Negatives (FN) = 8. (a) Calculate the classification accuracy. (b) Calculate the model precision. (c) Calculate the sensitivity/recall. (d) Calculate the F1-Score. (e) State which error type presents the greater toxicological hazard.',
              problemStatementUrRoman: 'Aik machine learning model 200 synthetic chemicals par endocrine disruption test karta hai. Results: TP = 36, TN = 142, FP = 14, FN = 8. (a) Accuracy nikalein. (b) Precision nikalein. (c) Recall nikalein. (d) F1-Score calculate karein. (e) Kaunsi ghalti zyada khatarnaak hai?',
              givenParametersEn: [
                'Total samples N = 200',
                'TP = 36, TN = 142, FP = 14, FN = 8'
              ],
              givenParametersUrRoman: [
                'Kul samples = 200',
                'TP = 36, TN = 142, FP = 14, FN = 8'
              ],
              governingFormulaEn: '\\text{Accuracy} = \\frac{\\text{TP}+\\text{TN}}{N}; \\quad \\text{Precision} = \\frac{\\text{TP}}{\\text{TP}+\\text{FP}}; \\quad \\text{Recall} = \\frac{\\text{TP}}{\\text{TP}+\\text{FN}}; \\quad F_1 = \\frac{2 \\times \\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
              stepByStepSolutionEn: [
                'Step 1: Calculate Total Correct Predictions = TP + TN = 36 + 142 = 178.',
                'Step 2: Accuracy = 178 / 200 = 0.890 (89.0%).',
                'Step 3: Precision = TP / (TP + FP) = 36 / (36 + 14) = 36 / 50 = 0.720 (72.0%).',
                'Step 4: Recall = TP / (TP + FN) = 36 / (36 + 8) = 36 / 44 = 0.818 (81.8%).',
                'Step 5: Calculate F1-Score: F1 = 2 × (0.720 × 0.818) / (0.720 + 0.818) = 2 × (0.5890) / (1.538) = 1.178 / 1.538 = 0.766 (76.6%).',
                'Step 6: Risk Analysis: The False Negatives (FN = 8) present the catastrophic risk, as 8 genuinely toxic endocrine disruptors would be mistakenly released as safe.'
              ],
              stepByStepSolutionUrRoman: [
                'Qadam 1: Sahi predictions = 36 + 142 = 178.',
                'Qadam 2: Accuracy = 178 / 200 = 89.0%.',
                'Qadam 3: Precision = 36 / (36 + 14) = 36 / 50 = 72.0%.',
                'Qadam 4: Recall = 36 / (36 + 8) = 36 / 44 = 81.8%.',
                'Qadam 5: F1-Score = 2 × (0.72 × 0.818) / (0.72 + 0.818) = 0.766 (76.6%).',
                'Qadam 6: Khatra: FN = 8 sab se khatarnaak hai kyunke 8 zehreelay chemicals ko mehfooz keh diya gaya.'
              ],
              finalAnswerEn: 'Accuracy = 89.0%, Precision = 72.0%, Recall = 81.8%, F1-Score = 0.766. FN is the critical hazard.',
              finalAnswerUrRoman: 'Accuracy = 89.0%, Precision = 72.0%, Recall = 81.8%, F1-Score = 0.766.',
              unitsAndCheckEn: 'Validation: F1 score (0.766) sits realistically between precision (0.720) and recall (0.818) as required for a harmonic mean.',
              unitsAndCheckUrRoman: 'Check: F1 score hamesha precision aur recall ke darmiyan harmonic mean hota hai.'
            }
          ],
          applicationsEn: [
            'Benchmarking QSAR/QSPR models submitted to regulatory authorities (OECD guidelines) for chemical safety registration.',
            'Evaluating automated peak deconvolution algorithms in high-resolution LC-MS metabolomics.',
            'Balancing synthesis screening campaigns where custom peptide synthesis costs exceed $500 per milligram.'
          ],
          applicationsUrRoman: [
            'OECD guidelines ke mutabiq chemical safety registration ke liye QSAR models ka audit karna.',
            'LC-MS spectrometry mein automatic peak detection models ki accuracy check karna.',
            'Dawa sazi mein aisi molecules dhoondna jinki lab synthesis ka kharcha kam se kam zaya ho.'
          ],
          commonMisconceptionsEn: [
            {
              misconception: 'If a model achieves 95% classification accuracy on a database where 95% of the chemicals are inactive, the model is performing excellently.',
              correction: 'This is the "Accuracy Paradox". A trivial dummy model that predicts "inactive" for 100% of inputs will score 95% accuracy while identifying exactly zero active molecules (Recall = 0.0%, F1 = 0.0%).'
            }
          ],
          commonMisconceptionsUrRoman: [
            {
              misconception: 'Agar kisi database mein 95% chemicals inactive hon aur model 95% accuracy de tou model bohot aala hai.',
              correction: 'Yeh Accuracy Paradox hai! Agar computer baghair soche sab ko inactive keh de tab bhi 95% accuracy aa jayegi magar usne aik bhi kaam ka chemical dhoond kar nahi diya (Recall = 0%).'
            }
          ],
          examImportantPointsEn: [
            'Structure of the 2x2 Confusion Matrix (TP, TN, FP, FN).',
            'Definitions and calculation steps for Precision vs Recall vs F1-Score.',
            'Understanding why the harmonic mean is used for F1-score instead of the arithmetic mean.'
          ],
          examImportantPointsUrRoman: [
            'Confusion matrix ka 2x2 table aur chaaron hissay.',
            'Precision, Recall aur F1-score ke numerical sawal.',
            'F1-score mein harmonic mean kyun use hota hai.'
          ],
          revisionSummaryEn: 'Model evaluation in chemical artificial intelligence requires metric discipline beyond simple accuracy. The Confusion Matrix tracks True Positives, True Negatives, False Positives (Type I), and False Negatives (Type II). Precision guards against wasted laboratory resources, Recall protects against toxicological release, and the F1-Score balances both on skewed datasets.',
          revisionSummaryUrRoman: 'Machine learning models ko test karne ke liye sirf accuracy kaafi nahi hoti. Confusion matrix ke zariye Precision, Recall aur F1-score nikale jatay hain taake lab ke kharche aur chemicals ke toxic hone ke khatray dono se bacha ja sakay.',
          flashcards: [
            {
              id: 'fc-ai-2',
              category: 'Model Evaluation',
              frontEn: 'What is the "Accuracy Paradox" in machine learning classification?',
              frontUrRoman: 'Machine learning mein "Accuracy Paradox" kya hai?',
              backEn: 'It occurs when a model achieves deceptively high accuracy simply by constantly predicting the majority class in an imbalanced dataset, despite failing completely on the minority class of interest.',
              backUrRoman: 'Yeh tab hota hai jab imbalanced data mein model hamesha bari class predict kar ke 95% accuracy le le magar asli zaroori class ko zero detect kare.'
            }
          ],
          shortQuestions: [
            {
              id: 'sq-ai-2',
              subjectId: 'chem-7130',
              topicId: 'ai-top-2',
              questionEn: 'Why is the harmonic mean utilized in the calculation of the F1-Score rather than the standard arithmetic mean?',
              questionUrRoman: 'F1-Score ke formula mein aam arithmetic mean ke bajaye harmonic mean kyun istemal hota hai?',
              modelAnswerEn: 'The harmonic mean punishes extreme disparities between precision and recall far more severely than the arithmetic mean. If a model has a Precision of 1.0 (100%) but a Recall of 0.0 (0%), the arithmetic mean would misleadingly report 0.5 (50%), whereas the harmonic mean correctly plunges to 0.0, indicating the complete operational failure of the classifier.',
              modelAnswerUrRoman: 'Harmonic mean extreme farq ko sakhti se punish karta hai. Agar precision 1.0 ho aur recall 0 ho, tou aam average 0.5 (50%) batayegi jo dhoka hai, jabkay harmonic mean fauri tor par 0.0 kar deta hai jo sachai dikhata hai.',
              keyPointsEn: [
                'Harmonic mean approaches the smaller value.',
                'Prevents high precision or recall from masking zero performance on the other.'
              ],
              keyPointsUrRoman: [
                'Choti value ki taraf zyada jhukaav hota hai.',
                'Model ki asli kamzori ko samne lata hai.'
              ]
            }
          ],
          longQuestions: [
            {
              id: 'lq-ai-2',
              subjectId: 'chem-7130',
              topicId: 'ai-top-2',
              questionEn: 'Design a complete validation protocol for a Quantitative Structure-Property Relationship (QSPR) regression model intended to predict the aqueous solubility (LogS) of organic contaminants. Detail the k-fold cross-validation scheme, evaluation metrics (MAE, RMSE, R²), and methods for defining the model’s Applicability Domain (AD).',
              questionUrRoman: 'Organic contaminants ki solubility (LogS) predict karne walay QSPR regression model ka complete validation protocol design karein: k-fold cross-validation, metrics (MAE, RMSE, R²) aur Applicability Domain (AD) ki wazahat karein.',
              rubricEn: [
                'Data partitioning and 5-fold cross-validation protocol (3 marks)',
                'Mathematical definitions of MAE, RMSE, and R² with target thresholds (3 marks)',
                'Definition and validation of Applicability Domain using leverage/distance metrics (4 marks)'
              ],
              structuredAnswerEn: {
                introduction: 'A QSPR regression model must be statistically robust, externally validated, and bounded by an unambiguous Applicability Domain in accordance with OECD Principle 3.',
                mainExplanation: 'Protocol Architecture: (1) Data Partitioning: The benchmark dataset (e.g., 1,500 diverse organic molecules) is split into an 80% training/validation set and a 20% strictly isolated external test set using stratified clustering to ensure scaffold diversity. (2) K-Fold Cross-Validation: The 80% partition is divided into k = 5 disjoint folds. Iteratively, 4 folds train the model while the 5th validates hyperparameters, preventing data leakage and overfitting. (3) Continuous Evaluation Metrics: Target metrics on the external test set include R² > 0.80, RMSE < 0.60 log units, and MAE < 0.45 log units.',
                derivationOrScheme: 'R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}, \\quad \\text{Leverage } h_i = x_i^T (X^T X)^{-1} x_i',
                applicationsOrCriticalAnalysis: 'Applicability Domain (AD): An ML model cannot extrapolate reliably into unfamiliar chemical spaces. The AD is mapped using William’s plots (standardized residuals vs. leverage hi). Compounds with leverage exceeding the warning threshold h* = 3(p+1)/N are flagged as chemical outliers where predictions must not be trusted.',
                conclusion: 'By integrating 5-fold CV, rigorous RMSE benchmarking, and leverage-based AD boundaries, the resulting QSPR model provides reliable aqueous solubility estimates suitable for environmental risk assessment.'
              },
              structuredAnswerUrRoman: {
                introduction: 'OECD rules ke mutabiq kisi bhi chemical QSPR model ko laagu karne se pehle uski cross-validation aur Applicability Domain check karna laazmi hai.',
                mainExplanation: 'Validation Protocol: 1. Data ko 80% training aur 20% independent testing set mein divide kiya jaye. 2. 5-Fold Cross-Validation lagai jaye jisme data ke 5 hissay kar ke 4 par model train aur 5wen par test ho. 3. Target metrics: R² > 0.80 aur RMSE < 0.60 hona chahiye.',
                derivationOrScheme: 'Williams plot (Standardized Residuals vs Leverage) banaya jata hai.',
                applicationsOrCriticalAnalysis: 'Applicability Domain (AD): Koi bhi model har chemical par kaam nahi kar sakta. Agar naya chemical trained chemicals se structural tor par bohot mukhtalif ho (high leverage), tou model us par warning de deta hai ke is prediction par lab mein bharosa na karein.',
                conclusion: 'Is protocol se tayyar shuda model laboratory ke hazaron ghantay aur solvent ka kharcha bachata hai.'
              }
            }
          ],
          mcqs: [
            {
              id: 'mcq-ai-2',
              subjectId: 'chem-7130',
              moduleId: 'ai-mod-3',
              topicId: 'ai-top-2',
              questionEn: 'In a chemical dataset of 1,000 compounds where only 10 compounds are highly potent catalysts (1% positive class), a naive model predicts that ALL 1,000 compounds are "inactive". What is the Sensitivity (Recall) of this model?',
              questionUrRoman: '1,000 chemicals ke data mein sirf 10 behtareen catalysts hain (1%). Aik model sab ke sab 1,000 ko "inactive" keh deta hai. Is model ka Recall (Sensitivity) kya hoga?',
              options: [
                { id: 'opt-a', textEn: '99.0%', textUrRoman: '99.0%' },
                { id: 'opt-b', textEn: '90.0%', textUrRoman: '90.0%' },
                { id: 'opt-c', textEn: '0.0%', textUrRoman: '0.0%' },
                { id: 'opt-d', textEn: '1.0%', textUrRoman: '1.0%' }
              ],
              correctOptionId: 'opt-c',
              explanationEn: 'Recall is calculated as TP / (TP + FN). Since the naive model predicted zero positives, TP = 0. All 10 actual catalysts were misclassified as inactive (FN = 10). Thus, Recall = 0 / (0 + 10) = 0.0%. Note that while the model had 99% accuracy, its recall for finding catalysts was completely zero.',
              explanationUrRoman: 'Recall ka formula TP / (TP + FN) hai. Chunke model ne kisi ko bhi catalyst nahi kaha tou TP = 0 aur FN = 10. Lihaza Recall = 0 / 10 = 0%. Halankay accuracy 99% thi magar catalyst dhoondne mein model 0% fail raha.',
              difficulty: 'Intermediate',
              referenceSource: 'Machine Learning in Chemoinformatics'
            }
          ],
          referencesEn: [
            { citation: 'Tropsha, A. (2010). Best practices for QSAR model development, validation, and exploitation. Molecular Informatics, 29(6-7), 476-488.', type: 'Peer-Reviewed Journal' },
            { citation: 'Hastie, T., Tibshirani, R., & Friedman, J. (2009). The Elements of Statistical Learning: Data Mining, Inference, and Prediction (2nd ed.). Springer.', type: 'Standard Textbook' }
          ]
        }
      }
    ]
  }
];
