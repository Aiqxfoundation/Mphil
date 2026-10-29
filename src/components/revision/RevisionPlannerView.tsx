import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import { Flashcard } from '../../types';
import {
  RotateCcw,
  BookmarkCheck,
  AlertCircle,
  FileText,
  ArrowRight,
  Sparkles,
  BookMarked,
  CheckCircle2,
  Trash2
} from 'lucide-react';

export const RevisionPlannerView: React.FC = () => {
  const {
    language,
    bookmarkedLessons,
    toggleBookmarkLesson,
    userNotes,
    quizAttempts,
    navigateToLesson
  } = useStudy();

  const [activeTab, setActiveTab] = useState<'flashcards' | 'weak-topics' | 'bookmarks' | 'notes'>('flashcards');

  // Collect all flashcards from all subjects
  const allFlashcards: (Flashcard & { subjectName: string; lessonId: string; subjectId: string })[] = [];
  subjectsData.forEach((s) => {
    s.modules.forEach((m) => {
      m.topics.forEach((t) => {
        if (t.lessonContent.flashcards) {
          t.lessonContent.flashcards.forEach((fc) => {
            allFlashcards.push({
              ...fc,
              subjectName: s.nameEn,
              lessonId: t.lessonContent.id,
              subjectId: s.id
            });
          });
        }
      });
    });
  });

  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Weak topics calculation from quiz attempts
  const weakAttempts = quizAttempts.filter((a) => a.percentage < 70);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-chem mb-2">
          <span>Cognitive Retention & Spaced Repetition</span>
          <span>·</span>
          <span>MPhil Revision Engine</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {language === 'en' ? 'Revision Planner & Study Tools' : 'Revision Planner aur Study Tools'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-serif-academic">
          {language === 'en'
            ? 'Spaced-repetition flashcards, diagnostic weak-topic detection based on quiz attempts, and personal study notebooks.'
            : 'Flashcards, kamzor topics ki nishandehi, aur aapke banaye huay notes ka markazi hub.'}
        </p>
      </div>

      {/* Segmented Control */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs overflow-x-auto">
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`px-4 py-2 font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'flashcards'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {language === 'en' ? `Flashcards Deck (${allFlashcards.length})` : 'Flashcards Deck'}
        </button>
        <button
          onClick={() => setActiveTab('weak-topics')}
          className={`px-4 py-2 font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'weak-topics'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {language === 'en' ? 'Weak Topics Analysis' : 'Kamzor Topics'}
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2 font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'bookmarks'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {language === 'en' ? `Bookmarked Lessons (${bookmarkedLessons.length})` : 'Bookmarks'}
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2 font-semibold rounded-md transition-colors whitespace-nowrap ${
            activeTab === 'notes'
              ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {language === 'en' ? `My Saved Notes (${Object.keys(userNotes).length})` : 'Saved Notes'}
        </button>
      </div>

      {/* TAB 1: ALL FLASHCARDS PLAYER */}
      {activeTab === 'flashcards' && allFlashcards.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono-chem">
            <span>Card {cardIndex + 1} of {allFlashcards.length}</span>
            <span>{allFlashcards[cardIndex].subjectName}</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[220px] p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-800/20 border border-slate-200 dark:border-slate-700 cursor-pointer flex flex-col items-center justify-center transition-all hover:shadow-md select-none"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">
              {isFlipped ? 'Answer (Click to flip back)' : 'Prompt (Click to reveal answer)'}
            </span>

            <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white max-w-lg leading-relaxed font-serif-academic">
              {!isFlipped
                ? (language === 'en' ? allFlashcards[cardIndex].frontEn : allFlashcards[cardIndex].frontUrRoman)
                : (language === 'en' ? allFlashcards[cardIndex].backEn : allFlashcards[cardIndex].backUrRoman)}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              disabled={cardIndex === 0}
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((prev) => prev - 1);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex(Math.floor(Math.random() * allFlashcards.length));
              }}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              Shuffle
            </button>
            <button
              disabled={cardIndex === allFlashcards.length - 1}
              onClick={() => {
                setIsFlipped(false);
                setCardIndex((prev) => prev + 1);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-teal-600 text-white disabled:opacity-40"
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: WEAK TOPICS */}
      {activeTab === 'weak-topics' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span>Diagnostic Weak-Topic Detector</span>
            </h3>

            {weakAttempts.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  No critical weakness detected!
                </p>
                <p className="mt-1">
                  All quiz attempts scored above 70%. Take more topic quizzes to generate real-time diagnostic recommendations.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Based on recent quiz attempts, the following subject areas scored below the 70% mastery threshold:
                </p>
                {weakAttempts.map((att) => (
                  <div
                    key={att.id}
                    className="p-4 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-rose-900 dark:text-rose-300">
                        {att.subjectId === 'all' ? 'All Subjects Simulation' : att.subjectId}
                      </span>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        Attempted on {att.date} · Score: {att.score}/{att.total} ({att.percentage}%)
                      </div>
                    </div>
                    <button
                      onClick={() => navigateToLesson(att.subjectId === 'all' ? 'chem-7101' : att.subjectId, 'res-les-1')}
                      className="px-3 py-1.5 text-[11px] font-semibold text-white bg-rose-700 dark:bg-rose-600 rounded-md hover:bg-rose-800"
                    >
                      Review Suggested Lesson
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: BOOKMARKS */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Bookmarked Lessons for Quick Revision
          </h3>

          {bookmarkedLessons.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              No bookmarked lessons yet. Click the "Bookmark" button on any lesson reader page to save it here.
            </div>
          ) : (
            <div className="space-y-3">
              {bookmarkedLessons.map((bId) => {
                // Find lesson details
                let foundSubject = subjectsData[0];
                let foundTopic = foundSubject.modules[0].topics[0];
                subjectsData.forEach((s) => {
                  s.modules.forEach((m) => {
                    m.topics.forEach((t) => {
                      if (t.lessonContent.id === bId) {
                        foundSubject = s;
                        foundTopic = t;
                      }
                    });
                  });
                });

                return (
                  <div
                    key={bId}
                    className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-mono-chem text-teal-700 dark:text-teal-400 font-semibold">
                        {foundSubject.code} · {foundSubject.nameEn}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                        {language === 'en' ? foundTopic.titleEn : foundTopic.titleUrRoman}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateToLesson(foundSubject.id, bId)}
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800"
                      >
                        Study Lesson
                      </button>
                      <button
                        onClick={() => toggleBookmarkLesson(bId)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: SAVED NOTES */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Saved Topic Study Notes
          </h3>

          {Object.keys(userNotes).length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              No notes saved yet. Open any lesson and write your notes in the "My Study Notes" tab.
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(userNotes).map(([lesId, text]) => (
                <div
                  key={lesId}
                  className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono-chem">
                    <span className="font-semibold text-teal-700 dark:text-teal-400">Lesson ID: {lesId}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-serif-academic leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
