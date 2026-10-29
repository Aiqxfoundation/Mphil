export type LanguageMode = 'en' | 'ur-roman';

export type VerificationStatus =
  | 'VERIFIED IN OFFICIAL SOURCE'
  | 'VERIFIED IN USER-SUPPLIED SYLLABUS'
  | 'PARTIALLY VERIFIED'
  | 'SUPPLEMENTARY ACADEMIC CONTENT'
  | 'REQUIRES CURRENT-SESSION CONFIRMATION';

export interface BilingualText {
  en: string;
  urRoman: string;
}

export interface MCQOption {
  id: string;
  textEn: string;
  textUrRoman: string;
}

export interface MCQ {
  id: string;
  subjectId: string;
  moduleId: string;
  topicId: string;
  questionEn: string;
  questionUrRoman: string;
  options: MCQOption[];
  correctOptionId: string;
  explanationEn: string;
  explanationUrRoman: string;
  distractorNotesEn?: Record<string, string>;
  distractorNotesUrRoman?: Record<string, string>;
  difficulty: 'Foundation' | 'Intermediate' | 'Advanced Postgraduate';
  referenceSource?: string;
}

export interface ShortQuestion {
  id: string;
  subjectId: string;
  topicId: string;
  questionEn: string;
  questionUrRoman: string;
  questionUrdu?: string;
  modelAnswerEn: string;
  modelAnswerUrRoman: string;
  modelAnswerUrdu?: string;
  keyPointsEn: string[];
  keyPointsUrRoman: string[];
  examTipsEn?: string;
  examTipsUrRoman?: string;
}

export interface LongQuestion {
  id: string;
  subjectId: string;
  topicId: string;
  questionEn: string;
  questionUrRoman: string;
  questionUrdu?: string;
  rubricEn: string[];
  structuredAnswerEn: {
    introduction: string;
    mainExplanation: string;
    derivationOrScheme?: string;
    applicationsOrCriticalAnalysis: string;
    conclusion: string;
  };
  structuredAnswerUrRoman: {
    introduction: string;
    mainExplanation: string;
    derivationOrScheme?: string;
    applicationsOrCriticalAnalysis: string;
    conclusion: string;
  };
}

export interface WorkedNumerical {
  problemStatementEn: string;
  problemStatementUrRoman: string;
  givenParametersEn: string[];
  givenParametersUrRoman: string[];
  governingFormulaEn: string;
  stepByStepSolutionEn: string[];
  stepByStepSolutionUrRoman: string[];
  finalAnswerEn: string;
  finalAnswerUrRoman: string;
  unitsAndCheckEn: string;
  unitsAndCheckUrRoman: string;
}

export interface Flashcard {
  id: string;
  frontEn: string;
  frontUrRoman: string;
  backEn: string;
  backUrRoman: string;
  category: string;
}

export interface QuranPassage {
  id: string;
  surahNameArabic: string;
  surahNameTransliteration: string;
  surahNumber: number;
  ayahRange: string;
  arabicTextWithTashkeel: string;
  urduTranslationAuthentic: string;
  englishTranslationAuthentic: string;
  translatorAttribution: string;
  wordByWordAnalysis: {
    arabicWord: string;
    transliteration: string;
    meaningUrdu: string;
    meaningEnglish: string;
    grammaticalNote?: string;
  }[];
  thematicContextEn: string;
  thematicContextUrRoman: string;
  thematicContextUrdu: string;
  keyPrinciplesEn: string[];
  keyPrinciplesUrRoman: string[];
  postgraduateExamQuestions: {
    questionEn: string;
    questionUrdu: string;
    modelAnswerEn: string;
    modelAnswerUrdu: string;
  }[];
}

export interface LessonContent {
  id: string;
  topicId: string;
  titleEn: string;
  titleUrRoman: string;
  learningObjectivesEn: string[];
  learningObjectivesUrRoman: string[];
  prerequisitesEn: string[];
  prerequisitesUrRoman: string[];
  introductionEn: string;
  introductionUrRoman: string;
  definitionsEn: { term: string; definition: string }[];
  definitionsUrRoman: { term: string; definition: string }[];
  detailedTheoryEn: string;
  detailedTheoryUrRoman: string;
  equationsAndDerivations?: {
    nameEn: string;
    nameUrRoman: string;
    formula: string;
    symbolsAndUnitsEn: { symbol: string; meaning: string; siUnit: string }[];
    derivationStepsEn?: string[];
    derivationStepsUrRoman?: string[];
  }[];
  chemicalSchemesOrDiagrams?: {
    titleEn: string;
    diagramAsciiOrSvg: string;
    captionEn: string;
    captionUrRoman: string;
  }[];
  comparisonTables?: {
    titleEn: string;
    titleUrRoman: string;
    headersEn: string[];
    headersUrRoman: string[];
    rowsEn: string[][];
    rowsUrRoman: string[][];
  }[];
  workedNumericals?: WorkedNumerical[];
  applicationsEn: string[];
  applicationsUrRoman: string[];
  commonMisconceptionsEn: { misconception: string; correction: string }[];
  commonMisconceptionsUrRoman: { misconception: string; correction: string }[];
  examImportantPointsEn: string[];
  examImportantPointsUrRoman: string[];
  revisionSummaryEn: string;
  revisionSummaryUrRoman: string;
  flashcards: Flashcard[];
  shortQuestions: ShortQuestion[];
  longQuestions: LongQuestion[];
  mcqs: MCQ[];
  referencesEn: { citation: string; url?: string; type: 'Standard Textbook' | 'Peer-Reviewed Journal' | 'UOS Syllabus' | 'IUPAC / HEC Guideline' }[];
  quranData?: QuranPassage;
}

export interface Topic {
  id: string;
  moduleId: string;
  subjectId: string;
  titleEn: string;
  titleUrRoman: string;
  estimatedMinutes: number;
  officialTopicMapping: string;
  isSupplementary: boolean;
  lessonContent: LessonContent;
}

export interface Module {
  id: string;
  subjectId: string;
  moduleNumber: number;
  titleEn: string;
  titleUrRoman: string;
  overviewEn: string;
  overviewUrRoman: string;
  weekSchedule?: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  code: string;
  codeReferenceType: string;
  nameEn: string;
  nameUrRoman: string;
  taglineEn: string;
  taglineUrRoman: string;
  iconName: string;
  verificationStatus: VerificationStatus;
  officialSourceDocument: string;
  degreeLevel: string;
  creditHours: number;
  overviewEn: string;
  overviewUrRoman: string;
  modules: Module[];
}

export interface ConceptNode {
  id: string;
  nameEn: string;
  nameUrRoman: string;
  subjectId: string;
  subjectName: string;
  category: string;
  definitionEn: string;
  definitionUrRoman: string;
  formula?: string;
  commonMisconceptionEn?: string;
  lessonId: string;
  connectedNodeIds: string[];
  crossSubjectConnectionNoteEn?: string;
}

export interface UserNote {
  lessonId: string;
  content: string;
  updatedAt: string;
}

export interface QuizAttemptRecord {
  id: string;
  subjectId: string;
  topicId?: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  incorrectQuestionIds: string[];
}

export interface UserBadge {
  id: string;
  nameEn: string;
  nameUrRoman: string;
  descriptionEn: string;
  descriptionUrRoman: string;
  icon: string;
  earnedAt?: string;
}

export interface UserProfile {
  username: string;
  fullName: string;
  session: string;
  specialization: string;
  rollNumber: string;
  avatarSeed: string;
  points: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  badges: string[];
}
