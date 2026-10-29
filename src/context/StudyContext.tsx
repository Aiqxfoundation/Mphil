import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageMode, QuizAttemptRecord, UserNote, UserProfile } from '../types';
import { subjectsData } from '../data/subjects';

export type AppView =
  | 'dashboard'
  | 'subject'
  | 'lesson'
  | 'quiz'
  | 'graph'
  | 'question-bank'
  | 'revision'
  | 'syllabus-matrix'
  | 'profile';

interface StudyContextType {
  view: AppView;
  setView: (v: AppView) => void;
  selectedSubjectId: string;
  setSelectedSubjectId: (id: string) => void;
  selectedLessonId: string;
  setSelectedLessonId: (id: string) => void;
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  toggleTheme: () => void;
  completedLessons: string[];
  markLessonComplete: (id: string) => void;
  unmarkLessonComplete: (id: string) => void;
  isLessonCompleted: (id: string) => boolean;
  bookmarkedLessons: string[];
  toggleBookmarkLesson: (id: string) => void;
  bookmarkedQuestions: string[];
  toggleBookmarkQuestion: (id: string) => void;
  userNotes: Record<string, string>;
  saveNote: (lessonId: string, noteText: string) => void;
  quizAttempts: QuizAttemptRecord[];
  recordQuizAttempt: (attempt: Omit<QuizAttemptRecord, 'id' | 'date'>) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  navigateToLesson: (subjectId: string, lessonId: string) => void;
  lastStudiedLessonId: string | null;
  lastStudiedSubjectId: string | null;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  addPoints: (amount: number, reason?: string) => void;
  recentPointsEarned: { amount: number; reason: string } | null;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<AppView>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('chem-7101');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('res-les-1');
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    return (localStorage.getItem('mphil_chem_lang') as LanguageMode) || 'en';
  });
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('mphil_chem_theme') as 'light' | 'dark') || 'light';
  });

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_completed');
      return saved ? JSON.parse(saved) : ['res-les-1'];
    } catch {
      return ['res-les-1'];
    }
  });

  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_bookmarks');
      return saved ? JSON.parse(saved) : ['surf-les-2'];
    } catch {
      return ['surf-les-2'];
    }
  });

  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_bookmarked_q');
      return saved ? JSON.parse(saved) : ['mcq-surf-2'];
    } catch {
      return ['mcq-surf-2'];
    }
  });

  const [userNotes, setUserNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_notes');
      return saved ? JSON.parse(saved) : {
        'res-les-1': 'Remember: Precision = repeatability (%RSD < 1%), while accuracy = closeness to certified standard (|error| < 1%).',
        'surf-les-2': 'Langmuir assumes single monolayer and homogeneous sites. For multilayers, always use BET.'
      };
    } catch {
      return {};
    }
  });

  const [quizAttempts, setQuizAttempts] = useState<QuizAttemptRecord[]>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_quizzes');
      return saved ? JSON.parse(saved) : [
        {
          id: 'qa-1',
          subjectId: 'chem-7124',
          topicId: 'surf-top-2',
          date: '2026-10-28',
          score: 4,
          total: 5,
          percentage: 80,
          incorrectQuestionIds: ['mcq-surf-2']
        }
      ];
    } catch {
      return [];
    }
  });

  const [lastStudiedLessonId, setLastStudiedLessonId] = useState<string | null>(() => {
    return localStorage.getItem('mphil_chem_last_lesson') || 'res-les-1';
  });

  const [lastStudiedSubjectId, setLastStudiedSubjectId] = useState<string | null>(() => {
    return localStorage.getItem('mphil_chem_last_subject') || 'chem-7101';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');

  // User Profile State with gamification
  const [userProfile, setUserProfileState] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('mphil_chem_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      username: 'Chemist_Scholar',
      fullName: 'MPhil Chemistry Scholar',
      session: 'Session 2024–2026',
      specialization: 'Physical Chemistry',
      rollNumber: 'UOS-CH-2024-88',
      avatarSeed: 'teal',
      points: 240,
      level: 3,
      streakDays: 4,
      lastActiveDate: new Date().toISOString().split('T')[0],
      badges: ['Syllabus Explorer', 'Research Starter', 'Surface Adsorption Master']
    };
  });

  const [recentPointsEarned, setRecentPointsEarned] = useState<{ amount: number; reason: string } | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('mphil_chem_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
    localStorage.setItem('mphil_chem_lang', lang);
  };

  const setTheme = (t: 'light' | 'dark') => {
    setThemeState(t);
  };

  const addPoints = (amount: number, reason: string = 'Study Activity') => {
    setUserProfileState((prev) => {
      const newPoints = prev.points + amount;
      const newLevel = Math.floor(newPoints / 100) + 1;
      const updated = {
        ...prev,
        points: newPoints,
        level: newLevel
      };
      localStorage.setItem('mphil_chem_profile', JSON.stringify(updated));
      return updated;
    });

    setRecentPointsEarned({ amount, reason });
    setTimeout(() => {
      setRecentPointsEarned(null);
    }, 2800);
  };

  const updateUserProfile = (patch: Partial<UserProfile>) => {
    setUserProfileState((prev) => {
      const updated = { ...prev, ...patch };
      localStorage.setItem('mphil_chem_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const markLessonComplete = (id: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem('mphil_chem_completed', JSON.stringify(updated));
      return updated;
    });
    addPoints(50, 'Lesson Completed');
  };

  const unmarkLessonComplete = (id: string) => {
    setCompletedLessons((prev) => {
      const updated = prev.filter((item) => item !== id);
      localStorage.setItem('mphil_chem_completed', JSON.stringify(updated));
      return updated;
    });
  };

  const isLessonCompleted = (id: string) => completedLessons.includes(id);

  const toggleBookmarkLesson = (id: string) => {
    setBookmarkedLessons((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('mphil_chem_bookmarks', JSON.stringify(updated));
      if (!exists) {
        addPoints(10, 'Lesson Bookmarked');
      }
      return updated;
    });
  };

  const toggleBookmarkQuestion = (id: string) => {
    setBookmarkedQuestions((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('mphil_chem_bookmarked_q', JSON.stringify(updated));
      return updated;
    });
  };

  const saveNote = (lessonId: string, noteText: string) => {
    setUserNotes((prev) => {
      const isNew = !prev[lessonId] || prev[lessonId].trim().length === 0;
      const updated = { ...prev, [lessonId]: noteText };
      localStorage.setItem('mphil_chem_notes', JSON.stringify(updated));
      if (isNew && noteText.trim().length > 10) {
        addPoints(20, 'Study Notes Created');
      }
      return updated;
    });
  };

  const recordQuizAttempt = (attempt: Omit<QuizAttemptRecord, 'id' | 'date'>) => {
    const newRecord: QuizAttemptRecord = {
      ...attempt,
      id: `qa-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setQuizAttempts((prev) => {
      const updated = [newRecord, ...prev];
      localStorage.setItem('mphil_chem_quizzes', JSON.stringify(updated));
      return updated;
    });

    // Reward points for quiz
    const pointsAwarded = attempt.score * 10 + (attempt.percentage === 100 ? 30 : 0);
    addPoints(pointsAwarded, `Quiz Completed (${attempt.score}/${attempt.total})`);
  };

  const navigateToLesson = (subjectId: string, lessonId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedLessonId(lessonId);
    setLastStudiedSubjectId(subjectId);
    setLastStudiedLessonId(lessonId);
    localStorage.setItem('mphil_chem_last_subject', subjectId);
    localStorage.setItem('mphil_chem_last_lesson', lessonId);
    setView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StudyContext.Provider
      value={{
        view,
        setView,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedLessonId,
        setSelectedLessonId,
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        completedLessons,
        markLessonComplete,
        unmarkLessonComplete,
        isLessonCompleted,
        bookmarkedLessons,
        toggleBookmarkLesson,
        bookmarkedQuestions,
        toggleBookmarkQuestion,
        userNotes,
        saveNote,
        quizAttempts,
        recordQuizAttempt,
        searchQuery,
        setSearchQuery,
        navigateToLesson,
        lastStudiedLessonId,
        lastStudiedSubjectId,
        userProfile,
        updateUserProfile,
        addPoints,
        recentPointsEarned
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};
