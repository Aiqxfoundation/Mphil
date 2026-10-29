import React from 'react';
import { useStudy, AppView } from '../../context/StudyContext';
import {
  BookOpen,
  FileText,
  Sparkles,
  Network,
  User,
  ShieldCheck
} from 'lucide-react';

interface NavTabItem {
  id: AppView;
  labelEn: string;
  labelUrRoman: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navTabs: NavTabItem[] = [
  {
    id: 'dashboard',
    labelEn: 'Courses',
    labelUrRoman: 'Courses',
    icon: BookOpen
  },
  {
    id: 'subject',
    labelEn: 'Lessons',
    labelUrRoman: 'Sabaq',
    icon: FileText
  },
  {
    id: 'quiz',
    labelEn: 'Exams',
    labelUrRoman: 'Exams',
    icon: Sparkles
  },
  {
    id: 'graph',
    labelEn: 'Graph',
    labelUrRoman: 'Graph',
    icon: Network
  },
  {
    id: 'profile',
    labelEn: 'Profile',
    labelUrRoman: 'Profile',
    icon: User
  }
];

export const MobileBottomNav: React.FC = () => {
  const { view, setView, language, userProfile } = useStudy();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center h-16 px-1">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            view === tab.id ||
            (tab.id === 'subject' && view === 'lesson') ||
            (tab.id === 'dashboard' && view === 'syllabus-matrix');

          return (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className="flex flex-col items-center justify-center py-1 min-h-[44px] min-w-[44px] relative transition-colors group select-none"
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-teal-700 dark:text-teal-400 -translate-y-0.5'
                    : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              </div>

              <span
                className={`text-[10px] font-medium tracking-tight mt-0.5 truncate max-w-[56px] ${
                  isActive
                    ? 'text-teal-700 dark:text-teal-400 font-bold'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {language === 'en' ? tab.labelEn : tab.labelUrRoman}
              </span>

              {/* Active Dot Indicator */}
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-teal-600 dark:bg-teal-400 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
