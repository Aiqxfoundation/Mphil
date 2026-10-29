import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import {
  Search,
  Sun,
  Moon,
  Sparkles,
  Flame,
  User,
  GraduationCap,
  X,
  CheckCircle2
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    view,
    setView,
    language,
    setLanguage,
    theme,
    toggleTheme,
    searchQuery,
    setSearchQuery,
    userProfile
  } = useStudy();

  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 py-2.5 sm:py-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setView('dashboard')}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-700 to-emerald-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
                <span>MPhil Chemistry</span>
                <span className="hidden xl:inline text-[10px] font-mono-chem px-1.5 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 font-bold border border-teal-200 dark:border-teal-800">
                  UOS
                </span>
              </div>
              <p className="hidden sm:block text-[10px] text-slate-500 dark:text-slate-400 -mt-0.5 font-medium">
                {language === 'en' ? 'Postgraduate Study App' : 'MPhil Mobile Study App'}
              </p>
            </div>
          </button>
        </div>

        {/* Center Navigation Links (visible on md/lg screens, mobile uses bottom nav) */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <button
            onClick={() => setView('dashboard')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'dashboard'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Courses (7)' : 'Courses (7)'}
          </button>
          <button
            onClick={() => setView('subject')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'subject' || view === 'lesson'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Syllabus & Lessons' : 'Syllabus & Sabaq'}
          </button>
          <button
            onClick={() => setView('syllabus-matrix')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'syllabus-matrix'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Audit Matrix' : 'Audit Matrix'}
          </button>
          <button
            onClick={() => setView('graph')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'graph'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Concept Graph' : 'Concept Graph'}
          </button>
          <button
            onClick={() => setView('quiz')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'quiz'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Exams' : 'Exams'}
          </button>
          <button
            onClick={() => setView('revision')}
            className={`transition-colors hover:text-slate-900 dark:hover:text-white ${
              view === 'revision'
                ? 'text-teal-700 dark:text-teal-400 underline underline-offset-8 decoration-2 decoration-teal-600'
                : ''
            }`}
          >
            {language === 'en' ? 'Flashcards & Notes' : 'Notes & Cards'}
          </button>
        </nav>

        {/* Right Action Hub: Roman Urdu Switcher, XP Points, User Profile, Search, Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Top Roman Urdu Switcher (Prominent & Always Accessible) */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all select-none ${
                language === 'en'
                  ? 'bg-white dark:bg-slate-700 text-teal-800 dark:text-teal-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ur-roman')}
              className={`px-2 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all select-none flex items-center gap-1 ${
                language === 'ur-roman'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="Switch to Roman Urdu (رومن اردو)"
            >
              <span>Roman Urdu</span>
            </button>
          </div>

          {/* Points / XP Badge (Clickable to Profile) */}
          <button
            onClick={() => setView('profile')}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold font-mono-chem rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors select-none"
            title="Your Earned XP Points - Click to View Profile"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{userProfile.points}</span>
            <span className="hidden sm:inline text-[10px] text-amber-600 dark:text-amber-400 font-normal">XP</span>
          </button>

          {/* User Profile Avatar & Username (Clickable to Profile) */}
          <button
            onClick={() => setView('profile')}
            className={`flex items-center gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg border transition-colors group select-none ${
              view === 'profile'
                ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200'
                : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-500'
            }`}
            title={`Logged in as @${userProfile.username} - Click to customize profile`}
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-teal-700 to-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
              {userProfile.username.substring(0, 2).toUpperCase()}
            </div>
            <span className="hidden md:inline text-xs font-semibold truncate max-w-[90px]">
              @{userProfile.username}
            </span>
          </button>

          {/* Search Trigger for Mobile */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="sm:hidden p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Search for Desktop */}
          <div className="relative hidden sm:block w-36 lg:w-48">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search topics...' : 'Talash karein...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Expand Bar */}
      {mobileSearchOpen && (
        <div className="sm:hidden px-3 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search concepts, topics, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-2 py-1.5 text-xs bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-teal-500"
            />
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setMobileSearchOpen(false);
            }}
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
