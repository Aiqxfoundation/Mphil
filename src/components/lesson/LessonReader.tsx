import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import { LessonContent } from '../../types';
import {
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Languages,
  BookOpen,
  Calculator,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  FileCheck2,
  Copy,
  ChevronDown,
  ChevronUp,
  Save,
  Clock,
  Layers
} from 'lucide-react';

export const LessonReader: React.FC = () => {
  const {
    selectedSubjectId,
    selectedLessonId,
    setView,
    language,
    setLanguage,
    completedLessons,
    markLessonComplete,
    unmarkLessonComplete,
    bookmarkedLessons,
    toggleBookmarkLesson,
    userNotes,
    saveNote,
    navigateToLesson
  } = useStudy();

  const [activeTab, setActiveTab] = useState<'theory' | 'numericals' | 'exam-qa' | 'flashcards' | 'notes'>('theory');
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('sq-0');
  const [noteText, setNoteText] = useState(userNotes[selectedLessonId] || '');
  const [noteSavedAlert, setNoteSavedAlert] = useState(false);

  // Locate the target lesson, topic, and subject
  let currentSubject = subjectsData.find((s) => s.id === selectedSubjectId) || subjectsData[0];
  let currentTopic = currentSubject.modules[0]?.topics[0];
  let currentLesson: LessonContent = currentTopic?.lessonContent;

  // Search across all subjects to find the exact lesson
  for (const s of subjectsData) {
    for (const m of s.modules) {
      for (const t of m.topics) {
        if (t.lessonContent.id === selectedLessonId) {
          currentSubject = s;
          currentTopic = t;
          currentLesson = t.lessonContent;
          break;
        }
      }
    }
  }

  const isCompleted = completedLessons.includes(currentLesson.id);
  const isBookmarked = bookmarkedLessons.includes(currentLesson.id);

  const handleSaveNote = () => {
    saveNote(currentLesson.id, noteText);
    setNoteSavedAlert(true);
    setTimeout(() => setNoteSavedAlert(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setView('subject')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'en' ? `Back to ${currentSubject.code}` : 'Wapis Module'}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmarkLesson(currentLesson.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              isBookmarked
                ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-600'
                : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5" />}
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          {/* Mark Complete Toggle */}
          <button
            onClick={() => {
              if (isCompleted) {
                unmarkLessonComplete(currentLesson.id);
              } else {
                markLessonComplete(currentLesson.id);
              }
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              isCompleted
                ? 'bg-teal-700 text-white dark:bg-teal-600'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isCompleted ? (language === 'en' ? 'Completed' : 'Mukammal') : (language === 'en' ? 'Mark Complete' : 'Mukammal Karein')}</span>
          </button>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 transition-colors">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-chem text-slate-500 dark:text-slate-400 mb-2">
          <span className="font-semibold text-teal-700 dark:text-teal-400">{currentSubject.code}</span>
          <span>·</span>
          <span>{currentSubject.nameEn}</span>
          <span>·</span>
          <span>{currentTopic.estimatedMinutes} Mins Study</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {language === 'en' ? currentLesson.titleEn : currentLesson.titleUrRoman}
        </h1>

        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-serif-academic border-l-2 border-teal-600/40 pl-4">
          {language === 'en' ? currentLesson.introductionEn : currentLesson.introductionUrRoman}
        </p>

        {/* Learning Objectives Box */}
        <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'en' ? 'Learning Objectives' : 'Taleemi Maqasid'}</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            {(language === 'en' ? currentLesson.learningObjectivesEn : currentLesson.learningObjectivesUrRoman).map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-teal-600 dark:text-teal-400 font-bold">·</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lesson Segmented Tab Navigation */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg overflow-x-auto">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'theory'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          }`}
        >
          {language === 'en' ? 'Theory & Derivations' : 'Theory o Derivations'}
        </button>

        {currentLesson.workedNumericals && currentLesson.workedNumericals.length > 0 && (
          <button
            onClick={() => setActiveTab('numericals')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'numericals'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            {language === 'en' ? `Solved Numericals (${currentLesson.workedNumericals.length})` : 'Solved Numericals'}
          </button>
        )}

        <button
          onClick={() => setActiveTab('exam-qa')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'exam-qa'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          }`}
        >
          {language === 'en' ? 'Exam Questions & Answers' : 'Imtehani Sawalat'}
        </button>

        {currentLesson.flashcards && currentLesson.flashcards.length > 0 && (
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'flashcards'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            {language === 'en' ? `Flashcards (${currentLesson.flashcards.length})` : 'Flashcards'}
          </button>
        )}

        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'notes'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          }`}
        >
          {language === 'en' ? 'My Study Notes' : 'Mera Notebook'}
        </button>
      </div>

      {/* TAB 1: THEORY, DERIVATIONS & DETAILED EXPLANATION */}
      {activeTab === 'theory' && (
        <div className="space-y-8">
          {/* SPECIAL: Quran Passage Section if present */}
          {currentLesson.quranData && (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="text-xs font-semibold text-rose-700 dark:text-rose-400">
                  {currentLesson.quranData.surahNameTransliteration} ({currentLesson.quranData.ayahRange})
                </span>
                <h3 className="text-2xl font-bold font-arabic-quran text-slate-900 dark:text-white text-right mt-2">
                  {currentLesson.quranData.surahNameArabic}
                </h3>
              </div>

              {/* Verified Arabic Text with Full Vocalization (Tashkeel) */}
              <div className="bg-amber-50/50 dark:bg-amber-950/20 p-6 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
                <p className="font-arabic-quran text-xl sm:text-2xl text-slate-900 dark:text-amber-100 text-right leading-loose selection:bg-amber-300 dark:selection:bg-amber-700">
                  {currentLesson.quranData.arabicTextWithTashkeel}
                </p>
              </div>

              {/* Authentic Urdu Translation */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authentic Urdu Translation (با محاورہ اردو ترجمہ)
                </h4>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-serif-academic text-right bg-slate-50 dark:bg-slate-800/40 p-4 rounded-lg">
                  {currentLesson.quranData.urduTranslationAuthentic}
                </p>
                <div className="text-[11px] text-slate-400">
                  Translator: {currentLesson.quranData.translatorAttribution}
                </div>
              </div>

              {/* English Translation */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authorized English Translation (Sahih International)
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif-academic italic bg-slate-50 dark:bg-slate-800/40 p-4 rounded-lg">
                  "{currentLesson.quranData.englishTranslationAuthentic}"
                </p>
              </div>

              {/* Word-by-Word Vocabulary Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Word-by-Word Linguistic Breakdown (لفظ بہ لفظ معانی و قواعد)
                </h4>
                <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                      <tr>
                        <th className="p-3 text-right">Arabic Word</th>
                        <th className="p-3">Transliteration</th>
                        <th className="p-3">Urdu Meaning</th>
                        <th className="p-3">English Meaning</th>
                        <th className="p-3">Grammatical Root</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {currentLesson.quranData.wordByWordAnalysis.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                          <td className="p-3 font-arabic-quran text-base text-right text-slate-900 dark:text-white font-bold">
                            {item.arabicWord}
                          </td>
                          <td className="p-3 font-mono text-slate-600 dark:text-slate-400">{item.transliteration}</td>
                          <td className="p-3 font-serif-academic text-slate-800 dark:text-slate-200">{item.meaningUrdu}</td>
                          <td className="p-3 text-slate-700 dark:text-slate-300">{item.meaningEnglish}</td>
                          <td className="p-3 text-slate-500 dark:text-slate-400 text-[11px]">{item.grammaticalNote}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Core Definitions Grid */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{language === 'en' ? 'Core Scientific Definitions' : 'Bunyadi Scientific Tareefain'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(language === 'en' ? currentLesson.definitionsEn : currentLesson.definitionsUrRoman).map((def, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wide">
                    {def.term}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif-academic">
                    {def.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Conceptual Theory */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'In-Depth Conceptual & Mechanistic Theory' : 'Tafseeli Theory aur Mechanisms'}
            </h3>

            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif-academic whitespace-pre-line space-y-4">
              {language === 'en' ? currentLesson.detailedTheoryEn : currentLesson.detailedTheoryUrRoman}
            </div>
          </div>

          {/* Equations & Derivations Section */}
          {currentLesson.equationsAndDerivations && currentLesson.equationsAndDerivations.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{language === 'en' ? 'Governing Equations & Mathematical Derivations' : 'Equations aur Derivations'}</span>
              </h3>

              <div className="space-y-6">
                {currentLesson.equationsAndDerivations.map((eq, idx) => (
                  <div key={idx} className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {language === 'en' ? eq.nameEn : eq.nameUrRoman}
                      </h4>
                    </div>

                    {/* Formula Callout */}
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center font-mono-chem text-sm sm:text-base text-teal-900 dark:text-teal-300 overflow-x-auto">
                      {eq.formula}
                    </div>

                    {/* Symbols and Units Table */}
                    <div className="mt-3">
                      <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Symbols & SI Units
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {eq.symbolsAndUnitsEn.map((sym, sIdx) => (
                          <div key={sIdx} className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded border border-slate-100 dark:border-slate-800">
                            <span className="font-mono-chem font-semibold text-slate-800 dark:text-slate-200">{sym.symbol}</span>
                            <span className="text-slate-500 text-[11px] truncate max-w-[150px]">{sym.meaning}</span>
                            <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400">{sym.siUnit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Derivation Steps if available */}
                    {eq.derivationStepsEn && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                        <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Step-by-Step Mathematical Derivation
                        </h5>
                        <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300 font-serif-academic">
                          {eq.derivationStepsEn.map((step, sIdx) => (
                            <li key={sIdx} className="pl-1 leading-relaxed">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Tables */}
          {currentLesson.comparisonTables && currentLesson.comparisonTables.map((tbl, tIdx) => (
            <div key={tIdx} className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'en' ? tbl.titleEn : tbl.titleUrRoman}
              </h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    <tr>
                      {(language === 'en' ? tbl.headersEn : tbl.headersUrRoman).map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-semibold whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-serif-academic">
                    {(language === 'en' ? tbl.rowsEn : tbl.rowsUrRoman).map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Common Misconceptions & Exam Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>{language === 'en' ? 'Common Pitfalls & Misconceptions' : 'Aam Ghalat Fehmiyan'}</span>
              </h3>
              <div className="space-y-3">
                {(language === 'en' ? currentLesson.commonMisconceptionsEn : currentLesson.commonMisconceptionsUrRoman).map((misc, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-lg bg-rose-50/40 dark:bg-rose-950/20 text-xs space-y-1">
                    <p className="font-semibold text-rose-900 dark:text-rose-300 line-through">
                      {misc.misconception}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 font-serif-academic">
                      {misc.correction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4" />
                <span>{language === 'en' ? 'Crucial University Exam Takeaways' : 'Exam ke Ahem Nuqaat'}</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-serif-academic">
                {(language === 'en' ? currentLesson.examImportantPointsEn : currentLesson.examImportantPointsUrRoman).map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Academic References */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Verified Academic References & Source Materials
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono-chem">
              {currentLesson.referencesEn.map((ref, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2">
                  <span className="text-slate-400">[{rIdx + 1}]</span>
                  <div>
                    <span>{ref.citation}</span>
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 ml-2">({ref.type})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: SOLVED NUMERICALS */}
      {activeTab === 'numericals' && currentLesson.workedNumericals && (
        <div className="space-y-6">
          {currentLesson.workedNumericals.map((num, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono-chem text-slate-500">
                <span className="font-bold text-teal-700 dark:text-teal-400">Problem #{idx + 1}</span>
                <span>University Postgraduate Standard</span>
              </div>

              <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed font-serif-academic">
                {language === 'en' ? num.problemStatementEn : num.problemStatementUrRoman}
              </h4>

              {/* Given Data */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-300">Given Parameters:</span>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 font-mono-chem">
                  {(language === 'en' ? num.givenParametersEn : num.givenParametersUrRoman).map((g, gIdx) => (
                    <li key={gIdx}>{g}</li>
                  ))}
                </ul>
              </div>

              {/* Governing Formula */}
              <div className="p-3 bg-teal-50/50 dark:bg-teal-950/20 rounded-lg text-center font-mono-chem text-sm text-teal-900 dark:text-teal-300">
                {num.governingFormulaEn}
              </div>

              {/* Step by step solution */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Step-by-Step Calculation:
                </h5>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-serif-academic">
                  {(language === 'en' ? num.stepByStepSolutionEn : num.stepByStepSolutionUrRoman).map((step, sIdx) => (
                    <div key={sIdx} className="p-2 rounded bg-slate-50 dark:bg-slate-800/30 font-mono-chem">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Answer Banner */}
              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                    Final Verified Result
                  </span>
                  <span className="font-mono-chem font-bold text-sm text-emerald-900 dark:text-emerald-200">
                    {language === 'en' ? num.finalAnswerEn : num.finalAnswerUrRoman}
                  </span>
                </div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-serif-academic max-w-sm">
                  {language === 'en' ? num.unitsAndCheckEn : num.unitsAndCheckUrRoman}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: EXAM QUESTIONS & MODEL ANSWERS */}
      {activeTab === 'exam-qa' && (
        <div className="space-y-6">
          {/* Short Questions Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Short Answer Questions & Model Solutions' : 'Mukhtasar Sawalat o Jawabaat'}
            </h3>

            {currentLesson.shortQuestions.map((sq, idx) => (
              <div
                key={sq.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === `sq-${idx}` ? null : `sq-${idx}`)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Q{idx + 1}: {language === 'en' ? sq.questionEn : sq.questionUrRoman}
                  </span>
                  {openAccordion === `sq-${idx}` ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {openAccordion === `sq-${idx}` && (
                  <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif-academic">
                      {language === 'en' ? sq.modelAnswerEn : sq.modelAnswerUrRoman}
                    </p>
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                      <span className="font-semibold text-slate-600 dark:text-slate-400">Marking Key Points: </span>
                      <span className="text-slate-500 font-serif-academic">
                        {(language === 'en' ? sq.keyPointsEn : sq.keyPointsUrRoman).join(' · ')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Long Questions Section */}
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Comprehensive Essay Questions (MPhil Exam Format)' : 'Tafseeli Sawalat o Model Jawabaat'}
            </h3>

            {currentLesson.longQuestions.map((lq, idx) => (
              <div
                key={lq.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
                  <span className="font-bold text-teal-700 dark:text-teal-400">Essay Question #{idx + 1}</span>
                  <span>10 Marks Rubric</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {language === 'en' ? lq.questionEn : lq.questionUrRoman}
                </h4>

                {/* Rubric */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs space-y-1">
                  <span className="font-bold text-slate-600 dark:text-slate-400">Marking Rubric:</span>
                  <div className="flex flex-wrap gap-2 text-slate-500">
                    {lq.rubricEn.map((r, rIdx) => (
                      <span key={rIdx}>· {r}</span>
                    ))}
                  </div>
                </div>

                {/* Structured 5-Part Model Answer */}
                <div className="space-y-3 text-xs sm:text-sm font-serif-academic leading-relaxed">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/20">
                    <strong className="block text-slate-900 dark:text-white mb-1 font-sans text-xs uppercase">
                      1. Introduction & Context
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300">
                      {language === 'en' ? lq.structuredAnswerEn.introduction : lq.structuredAnswerUrRoman.introduction}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/20">
                    <strong className="block text-slate-900 dark:text-white mb-1 font-sans text-xs uppercase">
                      2. Detailed Scientific Explanation
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300">
                      {language === 'en' ? lq.structuredAnswerEn.mainExplanation : lq.structuredAnswerUrRoman.mainExplanation}
                    </p>
                  </div>

                  {lq.structuredAnswerEn.derivationOrScheme && (
                    <div className="p-3 rounded-lg bg-teal-50/50 dark:bg-teal-950/20 font-mono-chem text-xs text-center text-teal-900 dark:text-teal-300">
                      {lq.structuredAnswerEn.derivationOrScheme}
                    </div>
                  )}

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/20">
                    <strong className="block text-slate-900 dark:text-white mb-1 font-sans text-xs uppercase">
                      3. Critical Evaluation & Applications
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300">
                      {language === 'en' ? lq.structuredAnswerEn.applicationsOrCriticalAnalysis : lq.structuredAnswerUrRoman.applicationsOrCriticalAnalysis}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/20">
                    <strong className="block text-slate-900 dark:text-white mb-1 font-sans text-xs uppercase">
                      4. Scientific Conclusion
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300">
                      {language === 'en' ? lq.structuredAnswerEn.conclusion : lq.structuredAnswerUrRoman.conclusion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: FLASHCARDS */}
      {activeTab === 'flashcards' && currentLesson.flashcards && currentLesson.flashcards.length > 0 && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono-chem">
              <span>Card {activeFlashcardIndex + 1} of {currentLesson.flashcards.length}</span>
              <span>{currentLesson.flashcards[activeFlashcardIndex].category}</span>
            </div>

            {/* Interactive Flip Card */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[220px] p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-800/20 border border-slate-200 dark:border-slate-700 cursor-pointer flex flex-col items-center justify-center transition-all hover:shadow-md select-none"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">
                {isFlipped ? 'Answer (Click to flip back)' : 'Prompt (Click to reveal answer)'}
              </span>

              <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white max-w-lg leading-relaxed font-serif-academic">
                {!isFlipped
                  ? (language === 'en'
                      ? currentLesson.flashcards[activeFlashcardIndex].frontEn
                      : currentLesson.flashcards[activeFlashcardIndex].frontUrRoman)
                  : (language === 'en'
                      ? currentLesson.flashcards[activeFlashcardIndex].backEn
                      : currentLesson.flashcards[activeFlashcardIndex].backUrRoman)}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                disabled={activeFlashcardIndex === 0}
                onClick={() => {
                  setIsFlipped(false);
                  setActiveFlashcardIndex((prev) => prev - 1);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40"
              >
                Previous Card
              </button>
              <button
                disabled={activeFlashcardIndex === currentLesson.flashcards.length - 1}
                onClick={() => {
                  setIsFlipped(false);
                  setActiveFlashcardIndex((prev) => prev + 1);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-teal-600 text-white disabled:opacity-40"
              >
                Next Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: STUDY NOTES */}
      {activeTab === 'notes' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Personal Study Notes for this Topic
              </h3>
              <p className="text-xs text-slate-500">
                Notes are persistently stored in your browser storage for this lesson.
              </p>
            </div>
            {noteSavedAlert && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold animate-fade-in">
                Saved!
              </span>
            )}
          </div>

          <textarea
            rows={10}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Type your personal observations, experimental queries, formula reminders or thesis thoughts here..."
            className="w-full p-4 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-teal-500 font-serif-academic leading-relaxed"
          />

          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Note</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
