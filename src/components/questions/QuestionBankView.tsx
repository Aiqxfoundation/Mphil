import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import { getAggregatedQuestionBank } from '../../data/questionBank';
import {
  HelpCircle,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Filter
} from 'lucide-react';

export const QuestionBankView: React.FC = () => {
  const {
    language,
    bookmarkedQuestions,
    toggleBookmarkQuestion
  } = useStudy();

  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterType, setFilterType] = useState<'all' | 'mcq' | 'short' | 'long'>('all');
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { mcqs, shortQuestions, longQuestions } = getAggregatedQuestionBank();

  // Filter lists
  const filteredMCQs = mcqs.filter((q) => filterSubject === 'all' || q.subjectId === filterSubject);
  const filteredShort = shortQuestions.filter((q) => filterSubject === 'all' || q.subjectId === filterSubject);
  const filteredLong = longQuestions.filter((q) => filterSubject === 'all' || q.subjectId === filterSubject);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-chem mb-2">
          <span>Question Repository</span>
          <span>·</span>
          <span>University of Sargodha Syllabus Alignment</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {language === 'en' ? 'Comprehensive MPhil Question Bank' : 'MPhil Chemistry Question Bank'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-serif-academic">
          {language === 'en'
            ? 'Complete repository of verified multiple-choice questions, conceptual short-answer questions, and structured long essay derivations with model solutions.'
            : 'Tamam 7 subjects ke verified MCQs, short questions aur structured long questions model solutions ke sath.'}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Type Segmented Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
              filterType === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setFilterType('mcq')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
              filterType === 'mcq'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            MCQs ({filteredMCQs.length})
          </button>
          <button
            onClick={() => setFilterType('short')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
              filterType === 'short'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Short Q&A ({filteredShort.length})
          </button>
          <button
            onClick={() => setFilterType('long')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
              filterType === 'long'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Long Essays ({filteredLong.length})
          </button>
        </div>

        {/* Subject Filter Dropdown */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold">Subject:</span>
          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="all">All Seven Subjects</option>
            {subjectsData.map((s) => (
              <option key={s.id} value={s.id}>
                {s.code}: {s.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* QUESTIONS ACCORDION LIST */}
      <div className="space-y-6">
        {/* SECTION 1: MCQs */}
        {(filterType === 'all' || filterType === 'mcq') && filteredMCQs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Multiple Choice Questions (MCQs)
            </h2>

            {filteredMCQs.map((q, idx) => {
              const isBookmarked = bookmarkedQuestions.includes(q.id);
              const isOpen = openItem === q.id;

              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
                    <span className="font-semibold text-teal-700 dark:text-teal-400">
                      {q.subjectName} · {q.difficulty}
                    </span>
                    <button
                      onClick={() => toggleBookmarkQuestion(q.id)}
                      className="p-1 text-slate-400 hover:text-amber-500 transition-colors"
                      title="Bookmark Question"
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-serif-academic">
                    {language === 'en' ? q.questionEn : q.questionUrRoman}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-lg border ${
                          opt.id === q.correctOptionId
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium'
                            : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {language === 'en' ? opt.textEn : opt.textUrRoman}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs">
                    <button
                      onClick={() => setOpenItem(isOpen ? null : q.id)}
                      className="text-teal-700 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>{isOpen ? 'Hide Distractor Analysis' : 'Show Verified Distractor Rationale'}</span>
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isOpen && (
                      <div className="mt-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-serif-academic text-xs leading-relaxed">
                        <strong className="block text-slate-900 dark:text-white mb-1 font-sans">
                          Explanation:
                        </strong>
                        <p>{language === 'en' ? q.explanationEn : q.explanationUrRoman}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SECTION 2: Short Questions */}
        {(filterType === 'all' || filterType === 'short') && filteredShort.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Short Answer Questions & Model Solutions
            </h2>

            {filteredShort.map((sq, idx) => (
              <div
                key={sq.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">{sq.subjectName}</span>
                  <button
                    onClick={() => handleCopy(sq.id, `${sq.questionEn}\n\nAnswer: ${sq.modelAnswerEn}`)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-700"
                  >
                    {copiedId === sq.id ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === sq.id ? 'Copied' : 'Copy Q&A'}</span>
                  </button>
                </div>

                <h3 className="text-sm font-semibold text-slate-900 dark:text-white font-serif-academic">
                  {language === 'en' ? sq.questionEn : sq.questionUrRoman}
                </h3>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs text-slate-700 dark:text-slate-300 font-serif-academic leading-relaxed space-y-2">
                  <p>{language === 'en' ? sq.modelAnswerEn : sq.modelAnswerUrRoman}</p>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700 text-[11px] text-slate-500">
                    <strong>Grading Key: </strong>
                    <span>{(language === 'en' ? sq.keyPointsEn : sq.keyPointsUrRoman).join(' · ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION 3: Long Essay Questions */}
        {(filterType === 'all' || filterType === 'long') && filteredLong.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Structured Long Essay Questions
            </h2>

            {filteredLong.map((lq, idx) => (
              <div
                key={lq.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">{lq.subjectName}</span>
                  <span>10 Marks Model</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {language === 'en' ? lq.questionEn : lq.questionUrRoman}
                </h3>

                <div className="space-y-2.5 text-xs font-serif-academic text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                    <strong className="font-sans uppercase text-[11px] text-slate-900 dark:text-white block mb-1">
                      Model Introduction:
                    </strong>
                    <p>{language === 'en' ? lq.structuredAnswerEn.introduction : lq.structuredAnswerUrRoman.introduction}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                    <strong className="font-sans uppercase text-[11px] text-slate-900 dark:text-white block mb-1">
                      Scientific Derivation & Explanation:
                    </strong>
                    <p>{language === 'en' ? lq.structuredAnswerEn.mainExplanation : lq.structuredAnswerUrRoman.mainExplanation}</p>
                  </div>
                  {lq.structuredAnswerEn.derivationOrScheme && (
                    <div className="p-2.5 bg-teal-50 dark:bg-teal-950/30 font-mono-chem text-center text-teal-900 dark:text-teal-300 rounded">
                      {lq.structuredAnswerEn.derivationOrScheme}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
