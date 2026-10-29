import { Subject } from '../types';
import { subject1Modules } from './lessons/subject1_research';
import { subject2Modules } from './lessons/subject2_ai';
import { subject3Modules } from './lessons/subject3_surface';
import { subject4Modules } from './lessons/subject4_polymers';
import { subject5Modules } from './lessons/subject5_photochem';
import { subject6Modules } from './lessons/subject6_litwriting';
import { subject7Modules } from './lessons/subject7_quran';

export const subjectsData: Subject[] = [
  {
    id: 'chem-7101',
    code: 'CHEM-7101',
    codeReferenceType: 'User-Supplied Syllabus Reference',
    nameEn: 'Scientific Writing & Research Methods',
    nameUrRoman: 'Scientific Writing aur Research Methods',
    taglineEn: '18-week master curriculum: Research methodology, chemical database queries, synopsis drafting, Turnitin compliance, and research ethics.',
    taglineUrRoman: '18 hafton ka mukammal curriculum: Research design, chemical databases, synopsis aur thesis writing, Turnitin aur research ethics.',
    iconName: 'FileText',
    verificationStatus: 'VERIFIED IN USER-SUPPLIED SYLLABUS',
    officialSourceDocument: 'User-Supplied MPhil Curriculum & HEC National Research Methodology Framework',
    degreeLevel: 'MPhil Chemistry (General Core / Research Preparation)',
    creditHours: 3,
    overviewEn: 'Foundational course equipping postgraduate scholars with methodological rigour, chemical information retrieval across SciFinder-n and Reaxys, manuscript drafting, and strict compliance with HEC plagiarism regulations.',
    overviewUrRoman: 'Postgraduate scholars ke liye aala tareen course jo research design, chemical databases ka istemal, MPhil synopsis aur thesis likhne aur HEC plagiarism rules par mabni hai.',
    modules: subject1Modules
  },
  {
    id: 'chem-7130',
    code: 'CHEM-7130 / CS-7001',
    codeReferenceType: 'Postgraduate Interdisciplinary Core',
    nameEn: 'Applied Artificial Intelligence for Decision Making',
    nameUrRoman: 'Applied Artificial Intelligence for Decision Making',
    taglineEn: 'Machine learning, molecular descriptors, chemical property forecasting, decision matrices, and responsible scientific AI governance.',
    taglineUrRoman: 'Machine learning, SMILES descriptors, chemical property prediction, decision matrices aur AI ka zimmedarana istemal.',
    iconName: 'Cpu',
    verificationStatus: 'SUPPLEMENTARY ACADEMIC CONTENT',
    officialSourceDocument: 'HEC Emerging Technologies Graduate Guidelines & Computational Chemistry Curriculum',
    degreeLevel: 'MPhil / MS Interdisciplinary (Decision Support in Chemical Sciences)',
    creditHours: 3,
    overviewEn: 'Bridging chemical intuition with modern data-driven computational intelligence: supervised classification, confusion matrices, QSPR property modeling, and verifying AI-generated scientific outputs.',
    overviewUrRoman: 'Chemistry aur computational intelligence ka milaap: machine learning models, classification metrics, confusion matrix, QSPR solubility modeling aur AI governance.',
    modules: subject2Modules
  },
  {
    id: 'chem-7124',
    code: 'CHEM-7124',
    codeReferenceType: 'University of Sargodha Official Course Registry',
    nameEn: 'Surface Chemistry',
    nameUrRoman: 'Surface Chemistry (Satah ki Chemistry)',
    taglineEn: 'Interfacial thermodynamics, Langmuir & BET adsorption isotherms, heterogeneous catalysis, and advanced surface microscopy.',
    taglineUrRoman: 'Interfacial thermodynamics, Langmuir aur BET isotherms, heterogeneous catalysis aur advanced surface characterization.',
    iconName: 'Layers',
    verificationStatus: 'VERIFIED IN OFFICIAL SOURCE',
    officialSourceDocument: 'University of Sargodha MPhil Chemistry Course Outline (1609322424.pdf) & Prospectus 2024/2025',
    degreeLevel: 'MPhil Chemistry (Physical Chemistry Specialization / Advanced Elective)',
    creditHours: 3,
    overviewEn: 'Rigorous advanced study of liquid and solid surfaces, thermodynamic derivations of surface excess, gas-solid adsorption isotherms, BET specific surface area determination, and catalytic interfacial kinetics.',
    overviewUrRoman: 'Solid aur liquid surfaces ka gehra mutala: surface tension, Gibbs adsorption equation, Langmuir aur BET isotherms ke solved numericals, aur heterogeneous catalysis.',
    modules: subject3Modules
  },
  {
    id: 'chem-7119',
    code: 'CHEM-7119',
    codeReferenceType: 'University of Sargodha Official Course Registry',
    nameEn: 'Polymers and Advanced Composite Materials',
    nameUrRoman: 'Polymers aur Advanced Composite Materials',
    taglineEn: 'Polymerization kinetics, tacticity, Flory-Huggins thermodynamics, molecular weight averages (Mn, Mw, PDI), and fiber-reinforced composites.',
    taglineUrRoman: 'Polymerization kinetics, Trommsdorff effect, tacticity, Mn, Mw aur PDI ke solved numericals aur composite materials.',
    iconName: 'Atom',
    verificationStatus: 'VERIFIED IN OFFICIAL SOURCE',
    officialSourceDocument: 'University of Sargodha MPhil Chemistry Course Outline (1609322424.pdf) & Prospectus 2024/2025',
    degreeLevel: 'MPhil Chemistry (Physical / Applied / Polymer Specialization)',
    creditHours: 3,
    overviewEn: 'Comprehensive macromolecular science covering free radical kinetics, autoacceleration, stereoregularity, GPC/DSC/DMA thermal characterization, and rule of mixtures for fiber-reinforced polymer composites.',
    overviewUrRoman: 'Polymer science ka aala course: free radical kinetics, Trommsdorff gel effect, tacticity, molecular weight distributions, DSC/GPC characterization aur nanocomposites.',
    modules: subject4Modules
  },
  {
    id: 'chem-7123',
    code: 'CHEM-7123',
    codeReferenceType: 'University of Sargodha Official Course Registry',
    nameEn: 'Advanced Photochemistry',
    nameUrRoman: 'Advanced Photochemistry (Shua\'i Chemistry)',
    taglineEn: 'Photophysical excited states, Jablonski diagrams, Stark-Einstein law, quantum yield calculations, and semiconductor solar photocatalysis.',
    taglineUrRoman: 'Jablonski diagram, fluorescence, phosphorescence, Stark-Einstein law, quantum yield calculations aur solar photocatalysis.',
    iconName: 'Sun',
    verificationStatus: 'VERIFIED IN OFFICIAL SOURCE',
    officialSourceDocument: 'University of Sargodha MPhil Chemistry Course Outline (1609322424.pdf) & Prospectus 2024/2025',
    degreeLevel: 'MPhil Chemistry (Physical Chemistry Specialization)',
    creditHours: 3,
    overviewEn: 'Advanced electronic excitation principles, spin multiplicity, radiative vs. non-radiative transitions, chemical actinometry, Stern-Volmer fluorescence quenching, and semiconductor photocatalytic mechanisms.',
    overviewUrRoman: 'Light absorption, electronic transitions, Jablonski diagram, quantum selection rules, chemical actinometry se light intensity naapna aur semiconductor photocatalysis.',
    modules: subject5Modules
  },
  {
    id: 'chem-7102',
    code: 'CHEM-7102',
    codeReferenceType: 'User-Supplied Dedicated Writing Pathway',
    nameEn: 'Literature Survey and Technical Writing',
    nameUrRoman: 'Literature Survey aur Technical Writing',
    taglineEn: 'Systematic literature matrices, weak vs. improved academic prose, thesis drafting, peer-review rebuttal letters, and patent documentation.',
    taglineUrRoman: 'Literature review matrix, weak vs improved scientific writing, thesis drafting, reviewer comments ke jawab aur patent documentation.',
    iconName: 'BookOpen',
    verificationStatus: 'VERIFIED IN USER-SUPPLIED SYLLABUS',
    officialSourceDocument: 'User-Supplied Dedicated Technical Writing Pathway',
    degreeLevel: 'MPhil Chemistry (Applied Academic Communication Laboratory)',
    creditHours: 3,
    overviewEn: 'Hands-on practical mastery of literature research: synthesizing disparate chemical papers into comparative matrices, converting weak writing into publication-grade prose, and navigating peer review.',
    overviewUrRoman: 'Scientific communication ka amli laboratory course: 15 modules jisme literature matrix banana, weak writing ko improve karna, research gap nikalna aur reviewers ko defend karna sikhaya jata hai.',
    modules: subject6Modules
  },
  {
    id: 'hq-7001',
    code: 'HQ-7001',
    codeReferenceType: 'PHEC / UOS Mandatory Postgraduate Course',
    nameEn: 'Translation of Holy Quran',
    nameUrRoman: 'Tarjuma Quran-e-Majeed (Translation of Holy Quran)',
    taglineEn: 'Prescribed postgraduate curriculum: Surah Al-Hujurat, Surah Al-Furqan, Ayatul Kursi, verified Arabic text, authentic Urdu translation, and exam Q&A.',
    taglineUrRoman: 'Postgraduate lazmi course: Surah Al-Hujurat, Surah Al-Furqan, Ayatul Kursi, mustanad Arabi matan, lafzi o ba-muhawara Urdu tarjuma aur exam tayyari.',
    iconName: 'BookmarkCheck',
    verificationStatus: 'VERIFIED IN OFFICIAL SOURCE',
    officialSourceDocument: 'Punjab Higher Education Commission (PHEC) & University of Sargodha Mandatory Postgraduate Regulations',
    degreeLevel: 'MPhil / Postgraduate Mandatory Degree Requirement',
    creditHours: 0,
    overviewEn: 'Respectful, academically verified study of prescribed Quranic passages with vocalized Arabic text, word-by-word meanings, authentic Urdu translations, ethical principles of information verification (Ayah 6), and postgraduate examination preparation.',
    overviewUrRoman: 'MPhil ke liye lazmi course: Surah Al-Hujurat aur deegar prescribed aayat ka mutanad Arabi matan, lafz-ba-lafz aur ba-muhawara Urdu tarjuma, tehqeeq-e-khabar ke islami asool aur imtehani sawalat o jawabaat.',
    modules: subject7Modules
  }
];
