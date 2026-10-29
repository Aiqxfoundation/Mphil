import React, { useState, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import { getAggregatedQuestionBank } from '../../data/questionBank';
import { MCQ } from '../../types';
import {
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Award,
  Filter,
  Bookmark
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const {
    language,
    recordQuizAttempt,
    bookmarkedQuestions,
    toggleBookmarkQuestion,
    quizAttempts
  } = useStudy();

  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [quizMode, setQuizMode] = useState<'practice' | 'timed'>('practice');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
  const [activeQuestionSet, setActiveQuestionSet] = useState<MCQ[]>([]);

  // Collect available questions
  const { mcqs } = getAggregatedQuestionBank();

  const startQuiz = () => {
    let filtered = [...mcqs];
    if (selectedSubjectFilter !== 'all') {
      filtered = filtered.filter((q) => q.subjectId === selectedSubjectFilter);
    }
    // Shuffle questions
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    setActiveQuestionSet(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizSubmitted(false);
    setTimeLeft(quizMode === 'timed' ? 600 : 0);
    setQuizStarted(true);
  };

  // Timer countdown
  useEffect(() => {
    if (!quizStarted || quizSubmitted || quizMode !== 'timed') return;

    if (timeLeft <= 0) {
      handleSubmitQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizSubmitted, timeLeft, quizMode]);

  const handleSelectOption = (optionId: string) => {
    if (quizSubmitted) return;
    const currentQ = activeQuestionSet[currentQuestionIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    const incorrectIds: string[] = [];

    activeQuestionSet.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      } else {
        incorrectIds.push(q.id);
      }
    });

    recordQuizAttempt({
      subjectId: selectedSubjectFilter,
      score: correctCount,
      total: activeQuestionSet.length,
      percentage: Math.round((correctCount / activeQuestionSet.length) * 100),
      incorrectQuestionIds: incorrectIds
    });
  };

  const currentQ = activeQuestionSet[currentQuestionIndex];

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // If quiz has not started, show the setup screen
  if (!quizStarted) {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-chem mb-2">
            <span>Assessment & Diagnostics</span>
            <span>·</span>
            <span>University Exam Simulator</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {language === 'en' ? 'MPhil Exam Practice & Quiz Engine' : 'MPhil Exam Practice aur Quizzes'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-serif-academic">
            {language === 'en'
              ? 'Test your understanding across all seven subjects with verified multiple-choice questions, distractor explanations, and performance diagnostics.'
              : 'Tamam 7 subjects par verified MCQs ke zariye apni tayyari ka imtehan lein. Har sawal ki mukammal wazahat samne aayegi.'}
          </p>
        </div>

        {/* Configuration Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'Configure Your Test Session' : 'Quiz ki Settings'}
          </h2>

          <div className="space-y-4">
            {/* Subject Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {language === 'en' ? 'Select Subject Domain' : 'Subject ka Intikhab'}
              </label>
              <select
                value={selectedSubjectFilter}
                onChange={(e) => setSelectedSubjectFilter(e.target.value)}
                className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-teal-500"
              >
                <option value="all">All Seven Subjects (Comprehensive Mock Exam)</option>
                {subjectsData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.code}: {s.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {language === 'en' ? 'Examination Mode' : 'Quiz Mode'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setQuizMode('practice')}
                  className={`p-3 text-left rounded-lg border text-xs transition-colors ${
                    quizMode === 'practice'
                      ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-200'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="font-bold block">Untimed Practice Mode</span>
                  <span className="text-[11px] text-slate-500">Instant feedback after each question with distractor rationales.</span>
                </button>
                <button
                  type="button"
                  onClick={() => setQuizMode('timed')}
                  className={`p-3 text-left rounded-lg border text-xs transition-colors ${
                    quizMode === 'timed'
                      ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-200'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="font-bold block">Timed University Simulator</span>
                  <span className="text-[11px] text-slate-500">10-minute strict exam countdown with post-test diagnostic score.</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Generate & Start 10-Question Quiz' : 'Test Shuru Karein'}</span>
            </button>
          </div>
        </div>

        {/* Previous Attempt History */}
        {quizAttempts.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Recent Quiz Diagnostic History' : 'Pichlay Quizzes ka Record'}
            </h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {quizAttempts.slice(0, 5).map((att) => (
                <div key={att.id} className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-mono-chem font-semibold text-slate-800 dark:text-slate-200">
                      {att.date}
                    </span>
                    <span className="text-slate-400 ml-2">
                      ({att.subjectId === 'all' ? 'All Subjects' : att.subjectId})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-chem font-bold text-teal-700 dark:text-teal-400">
                      {att.score} / {att.total} ({att.percentage}%)
                    </span>
                    {att.percentage >= 70 ? (
                      <span className="text-[10px] text-emerald-600 font-semibold">Passed</span>
                    ) : (
                      <span className="text-[10px] text-rose-500 font-semibold">Needs Revision</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // If quiz is finished, show Results Dashboard
  if (quizSubmitted) {
    let correctCount = 0;
    activeQuestionSet.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) correctCount++;
    });
    const percentage = Math.round((correctCount / activeQuestionSet.length) * 100);

    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {percentage >= 70 ? 'Excellent Mastery!' : 'Session Complete'}
          </h2>

          <div className="text-4xl font-bold font-mono-chem text-teal-700 dark:text-teal-400">
            {correctCount} / {activeQuestionSet.length} ({percentage}%)
          </div>

          <p className="text-xs text-slate-500 max-w-md mx-auto font-serif-academic">
            {percentage >= 70
              ? 'Your score demonstrates strong conceptual command consistent with MPhil university expectations.'
              : 'Review the detailed distractor explanations below to clarify missed concepts before your semester examination.'}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-700 dark:bg-teal-600 text-white hover:bg-teal-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Another 10 Questions</span>
            </button>
            <button
              onClick={() => setQuizStarted(false)}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              Exit to Quiz Dashboard
            </button>
          </div>
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Detailed Diagnostic Review & Distractor Rationale
          </h3>

          {activeQuestionSet.map((q, idx) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correctOptionId;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border bg-white dark:bg-slate-900 space-y-3 ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-900/60'
                    : 'border-rose-200 dark:border-rose-900/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
                  <span>Question #{idx + 1}</span>
                  <div className="flex items-center gap-1 font-semibold">
                    {isCorrect ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="text-rose-600 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900 dark:text-white font-serif-academic">
                  {language === 'en' ? q.questionEn : q.questionUrRoman}
                </p>

                {/* Options display */}
                <div className="space-y-1.5 text-xs">
                  {q.options.map((opt) => {
                    const isSelected = userAnswer === opt.id;
                    const isCorrectOpt = opt.id === q.correctOptionId;

                    return (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${
                          isCorrectOpt
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 font-semibold'
                            : isSelected
                            ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                            : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span>{language === 'en' ? opt.textEn : opt.textUrRoman}</span>
                        {isCorrectOpt && <span className="text-[10px] font-bold text-emerald-700 uppercase">Correct Answer</span>}
                        {isSelected && !isCorrectOpt && <span className="text-[10px] font-bold text-rose-700 uppercase">Your Choice</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Verified Explanation */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs space-y-1 text-slate-700 dark:text-slate-300 font-serif-academic">
                  <span className="font-bold text-slate-900 dark:text-white block font-sans">
                    Academic Explanation:
                  </span>
                  <p>{language === 'en' ? q.explanationEn : q.explanationUrRoman}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Test Screen
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header bar: Question Counter + Timer */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono-chem">
          <span className="font-bold text-teal-700 dark:text-teal-400">
            Question {currentQuestionIndex + 1} of {activeQuestionSet.length}
          </span>
          <span>·</span>
          <span className="text-slate-400">{currentQ.difficulty}</span>
        </div>

        {quizMode === 'timed' && (
          <div className="flex items-center gap-1.5 text-xs font-mono-chem font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-800">
            <Timer className="w-3.5 h-3.5" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        )}

        {/* Bookmark Question Toggle */}
        <button
          onClick={() => toggleBookmarkQuestion(currentQ.id)}
          className={`p-1.5 rounded-lg border text-xs transition-colors ${
            bookmarkedQuestions.includes(currentQ.id)
              ? 'border-amber-400 bg-amber-50 text-amber-600'
              : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700'
          }`}
          title="Bookmark this question"
        >
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed font-serif-academic">
          {language === 'en' ? currentQ.questionEn : currentQ.questionUrRoman}
        </h3>

        {/* 4 Interactive MCQ Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedAnswers[currentQ.id] === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full p-4 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'border-teal-600 bg-teal-50/60 text-teal-950 dark:bg-teal-950/30 dark:border-teal-500 dark:text-teal-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                    isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 dark:border-slate-600'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span>{language === 'en' ? opt.textEn : opt.textUrRoman}</span>
              </button>
            );
          })}
        </div>

        {/* Practice Mode Instant Explanation Trigger */}
        {quizMode === 'practice' && selectedAnswers[currentQ.id] && (
          <div className="pt-2">
            {!showExplanation ? (
              <button
                onClick={() => setShowExplanation(true)}
                className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline"
              >
                Show Explanation & Distractor Analysis
              </button>
            ) : (
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-xs space-y-2 font-serif-academic">
                <div className="font-sans font-bold text-slate-800 dark:text-slate-200">
                  {selectedAnswers[currentQ.id] === currentQ.correctOptionId ? (
                    <span className="text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                    </span>
                  ) : (
                    <span className="text-rose-600 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Incorrect Choice
                    </span>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  {language === 'en' ? currentQ.explanationEn : currentQ.explanationUrRoman}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation & Submit Buttons */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => {
              setCurrentQuestionIndex((prev) => prev - 1);
              setShowExplanation(false);
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40"
          >
            Previous
          </button>

          {currentQuestionIndex < activeQuestionSet.length - 1 ? (
            <button
              onClick={() => {
                setCurrentQuestionIndex((prev) => prev + 1);
                setShowExplanation(false);
              }}
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-teal-600 text-white hover:bg-slate-800"
            >
              Next Question
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className="px-6 py-2 text-xs font-bold rounded-lg bg-teal-700 dark:bg-teal-600 text-white hover:bg-teal-800"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
