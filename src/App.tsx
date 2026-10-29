import React from 'react';
import { StudyProvider, useStudy } from './context/StudyContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { DashboardView } from './components/dashboard/DashboardView';
import { SubjectView } from './components/subject/SubjectView';
import { LessonReader } from './components/lesson/LessonReader';
import { QuizView } from './components/quiz/QuizView';
import { KnowledgeGraphView } from './components/graph/KnowledgeGraphView';
import { QuestionBankView } from './components/questions/QuestionBankView';
import { RevisionPlannerView } from './components/revision/RevisionPlannerView';
import { SyllabusVerificationModal } from './components/audit/SyllabusVerificationModal';
import { ProfileView } from './components/profile/ProfileView';
import { subjectsData } from './data/subjects';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

const AppContent: React.FC = () => {
  const {
    view,
    searchQuery,
    setSearchQuery,
    navigateToLesson,
    language,
    recentPointsEarned
  } = useStudy();

  // Search Results filtering across all 7 subjects
  const matchingTopics: {
    subjectId: string;
    subjectName: string;
    lessonId: string;
    title: string;
    matchType: string;
  }[] = [];

  if (searchQuery.trim().length >= 2) {
    const q = searchQuery.toLowerCase();

    subjectsData.forEach((s) => {
      s.modules.forEach((m) => {
        m.topics.forEach((t) => {
          const content = t.lessonContent;
          if (
            t.titleEn.toLowerCase().includes(q) ||
            t.titleUrRoman.toLowerCase().includes(q) ||
            content.detailedTheoryEn.toLowerCase().includes(q) ||
            content.introductionEn.toLowerCase().includes(q)
          ) {
            matchingTopics.push({
              subjectId: s.id,
              subjectName: s.nameEn,
              lessonId: content.id,
              title: language === 'en' ? t.titleEn : t.titleUrRoman,
              matchType: 'Lesson Content'
            });
          }
        });
      });
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-teal-500 selection:text-white">
      {/* Sticky Top Header with Roman Urdu Switcher & Profile/Points Bar */}
      <Header />

      {/* Floating XP Points Earned Toast Banner */}
      {recentPointsEarned && (
        <div className="fixed top-16 right-4 sm:right-6 z-50 animate-bounce duration-300">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-800 text-white shadow-xl border border-teal-600 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>
              +{recentPointsEarned.amount} XP: {recentPointsEarned.reason}
            </span>
          </div>
        </div>
      )}

      {/* Global Search Results Overlay */}
      {searchQuery.trim().length >= 2 && (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg z-40 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Search Results for "{searchQuery}" ({matchingTopics.length} matches found)
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1 text-xs"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>

            {matchingTopics.length === 0 ? (
              <p className="text-xs text-slate-500 py-3">
                No lessons or concepts directly matched your query. Try searching for terms like "Langmuir", "Trommsdorff", "SMILES", "Jablonski", "Turnitin", or "Hujurat".
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pt-1">
                {matchingTopics.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      navigateToLesson(item.subjectId, item.lessonId);
                      setSearchQuery('');
                    }}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 bg-slate-50/70 dark:bg-slate-800/40 cursor-pointer transition-colors"
                  >
                    <div className="text-[10px] font-mono-chem text-teal-700 dark:text-teal-400 font-bold truncate">
                      {item.subjectName}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white truncate mt-0.5 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main View Router - with pb-24 for mobile bottom navigation clearance */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 pt-4 sm:pt-6 pb-24 sm:pb-16">
        {view === 'dashboard' && <DashboardView />}
        {view === 'subject' && <SubjectView />}
        {view === 'lesson' && <LessonReader />}
        {view === 'quiz' && <QuizView />}
        {view === 'graph' && <KnowledgeGraphView />}
        {view === 'question-bank' && <QuestionBankView />}
        {view === 'revision' && <RevisionPlannerView />}
        {view === 'syllabus-matrix' && <SyllabusVerificationModal />}
        {view === 'profile' && <ProfileView />}
      </main>

      {/* Mobile Ergonomic Bottom Navigation Bar (Fixed on mobile/tablet) */}
      <MobileBottomNav />

      {/* Desktop Footer (Hidden on small mobile views to prioritize clean app screen) */}
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <StudyProvider>
      <AppContent />
    </StudyProvider>
  );
}
