import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import useSWR from 'swr';
import type { LanguageMode, QuizAttemptRecord, UserProfile } from '../types';
import { supabase } from '../lib/supabase';

export type AppView =
  | 'dashboard'
  | 'subject'
  | 'lesson'
  | 'quiz'
  | 'graph'
  | 'question-bank'
  | 'revision'
  | 'syllabus-matrix'
  | 'profile'
  | 'admin';

interface PersistedStudyData {
  completedLessons: string[];
  bookmarkedLessons: string[];
  bookmarkedQuestions: string[];
  userNotes: Record<string, string>;
  quizAttempts: QuizAttemptRecord[];
  lastStudiedLessonId: string | null;
  lastStudiedSubjectId: string | null;
  visitedSubjects: string[];
  activityDays: string[];
  rewardedActions: string[];
  profile: UserProfile;
}

interface StudyContextType {
  view: AppView;
  setView: (view: AppView) => void;
  selectedSubjectId: string;
  setSelectedSubjectId: (id: string) => void;
  selectedLessonId: string;
  setSelectedLessonId: (id: string) => void;
  language: LanguageMode;
  setLanguage: (language: LanguageMode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
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
  setSearchQuery: (query: string) => void;
  navigateToLesson: (subjectId: string, lessonId: string) => void;
  lastStudiedLessonId: string | null;
  lastStudiedSubjectId: string | null;
  visitedSubjects: string[];
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  addPoints: (amount: number, reason?: string) => void;
  recentPointsEarned: { amount: number; reason: string } | null;
  storageError: string | null;
  retrySave: () => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function getAuthUsername(user: User): string {
  const metadataUsername = isRecord(user.user_metadata) ? user.user_metadata.username : undefined;
  const emailUsername = user.email?.split('@')[0] ?? '';
  const username = typeof metadataUsername === 'string' ? metadataUsername : emailUsername;
  const normalized = username.trim().toLowerCase();
  return /^[a-z0-9_]{3,24}$/.test(normalized) ? normalized : user.id.replace(/-/g, '').slice(0, 12);
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function calculateStreak(activityDays: string[]): number {
  const activeDays = new Set(activityDays);
  const cursor = new Date(`${todayKey()}T00:00:00.000Z`);
  let cursorKey = cursor.toISOString().slice(0, 10);

  if (!activeDays.has(cursorKey)) {
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    cursorKey = cursor.toISOString().slice(0, 10);
  }

  let streak = 0;
  while (activeDays.has(cursorKey)) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    cursorKey = cursor.toISOString().slice(0, 10);
  }

  return streak;
}

function createInitialStudyData(username: string): PersistedStudyData {
  return {
    completedLessons: [],
    bookmarkedLessons: [],
    bookmarkedQuestions: [],
    userNotes: {},
    quizAttempts: [],
    lastStudiedLessonId: null,
    lastStudiedSubjectId: null,
    visitedSubjects: [],
    activityDays: [],
    rewardedActions: [],
    profile: {
      username,
      fullName: '',
      session: '',
      specialization: '',
      rollNumber: '',
      avatarSeed: 'teal',
      points: 0,
      level: 1,
      streakDays: 0,
      lastActiveDate: '',
      badges: []
    }
  };
}

function normalizeStudyData(value: unknown, username: string): PersistedStudyData {
  const record = isRecord(value) ? value : {};
  const savedProfile = isRecord(record.profile) ? record.profile : {};
  const activityDays = [...new Set(stringArray(record.activityDays).filter((day) => /^\d{4}-\d{2}-\d{2}$/.test(day)))].sort().slice(-365);
  const pointsValue = Number(savedProfile.points);
  const points = Number.isFinite(pointsValue) ? Math.max(0, Math.floor(pointsValue)) : 0;
  const userNotes: Record<string, string> = {};

  if (isRecord(record.userNotes)) {
    for (const [lessonId, note] of Object.entries(record.userNotes)) {
      if (typeof note === 'string' && note.trim()) userNotes[lessonId] = note;
    }
  }

  const quizAttempts = Array.isArray(record.quizAttempts)
    ? record.quizAttempts.filter((attempt): attempt is QuizAttemptRecord => {
        return (
          isRecord(attempt) &&
          typeof attempt.id === 'string' &&
          typeof attempt.subjectId === 'string' &&
          typeof attempt.date === 'string' &&
          typeof attempt.score === 'number' &&
          typeof attempt.total === 'number' &&
          typeof attempt.percentage === 'number' &&
          Array.isArray(attempt.incorrectQuestionIds)
        );
      })
    : [];

  return {
    completedLessons: stringArray(record.completedLessons),
    bookmarkedLessons: stringArray(record.bookmarkedLessons),
    bookmarkedQuestions: stringArray(record.bookmarkedQuestions),
    userNotes,
    quizAttempts,
    lastStudiedLessonId: typeof record.lastStudiedLessonId === 'string' ? record.lastStudiedLessonId : null,
    lastStudiedSubjectId: typeof record.lastStudiedSubjectId === 'string' ? record.lastStudiedSubjectId : null,
    visitedSubjects: stringArray(record.visitedSubjects),
    activityDays,
    rewardedActions: stringArray(record.rewardedActions),
    profile: {
      username,
      fullName: stringValue(savedProfile.fullName),
      session: stringValue(savedProfile.session),
      specialization: stringValue(savedProfile.specialization),
      rollNumber: stringValue(savedProfile.rollNumber),
      avatarSeed: stringValue(savedProfile.avatarSeed) || 'teal',
      points,
      level: Math.floor(points / 100) + 1,
      streakDays: calculateStreak(activityDays),
      lastActiveDate: activityDays[activityDays.length - 1] ?? '',
      badges: []
    }
  };
}

function withStudyActivity(data: PersistedStudyData): PersistedStudyData {
  const activityDays = [...new Set([...data.activityDays, todayKey()])].sort().slice(-365);
  return {
    ...data,
    activityDays,
    profile: {
      ...data.profile,
      lastActiveDate: activityDays[activityDays.length - 1] ?? '',
      streakDays: calculateStreak(activityDays)
    }
  };
}

function addProfilePoints(profile: UserProfile, amount: number): UserProfile {
  const points = profile.points + amount;
  return { ...profile, points, level: Math.floor(points / 100) + 1 };
}

async function loadStudyData(userId: string, username: string): Promise<PersistedStudyData> {
  const { data: row, error } = await supabase
    .from('study_data')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  if (row?.data) return normalizeStudyData(row.data, username);

  const initialData = createInitialStudyData(username);
  const { error: saveError } = await supabase
    .from('study_data')
    .upsert(
      { user_id: userId, data: initialData, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );

  if (saveError) throw saveError;
  return initialData;
}

export const StudyProvider: React.FC<{ children: React.ReactNode; user: User }> = ({ children, user }) => {
  const [view, setView] = useState<AppView>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState('chem-7101');
  const [selectedLessonId, setSelectedLessonId] = useState('res-les-1');
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    try {
      return window.localStorage.getItem('mphil_chem_lang') === 'ur-roman' ? 'ur-roman' : 'en';
    } catch {
      return 'en';
    }
  });
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = window.localStorage.getItem('mphil_chem_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [recentPointsEarned, setRecentPointsEarned] = useState<{ amount: number; reason: string } | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  const toastTimeout = useRef<number | undefined>(undefined);
  const saveQueue = useRef<Promise<void>>(Promise.resolve());
  const writeVersion = useRef(0);
  const username = getAuthUsername(user);

  const {
    data: studyData,
    isLoading,
    mutate
  } = useSWR<PersistedStudyData>(['study-data', user.id], () => loadStudyData(user.id, username), {
    revalidateOnFocus: false
  });

  const currentData = studyData ?? createInitialStudyData(username);
  const currentDataRef = useRef(currentData);
  currentDataRef.current = currentData;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem('mphil_chem_theme', theme);
    } catch {
      return;
    }
  }, [theme]);

  useEffect(() => {
    return () => {
      if (toastTimeout.current !== undefined) window.clearTimeout(toastTimeout.current);
    };
  }, []);

  const persistData = useCallback((nextData: PersistedStudyData) => {
    const version = ++writeVersion.current;
    saveQueue.current = saveQueue.current.catch(() => undefined).then(async () => {
      const { error } = await supabase
        .from('study_data')
        .upsert(
          { user_id: user.id, data: nextData, updated_at: new Date().toISOString() },
          { onConflict: 'user_id' }
        );

      if (error) throw error;
    });

    void saveQueue.current
      .then(() => {
        if (version === writeVersion.current) setStorageError(null);
      })
      .catch(() => {
        if (version === writeVersion.current) {
          setStorageError('Your latest study changes could not be saved. Check your connection and retry.');
        }
      });
  }, [user.id]);

  const updateStudyData = useCallback((update: (current: PersistedStudyData) => PersistedStudyData) => {
    const previous = currentDataRef.current;
    const next = update(previous);
    if (next === previous) return previous;

    currentDataRef.current = next;
    void mutate(next, { revalidate: false });
    persistData(next);
    return next;
  }, [mutate, persistData]);

  const retrySave = useCallback(() => {
    persistData(currentDataRef.current);
  }, [persistData]);

  const showPointsToast = useCallback((amount: number, reason: string) => {
    if (amount <= 0) return;
    setRecentPointsEarned({ amount, reason });
    if (toastTimeout.current !== undefined) window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setRecentPointsEarned(null), 2800);
  }, []);

  const setLanguage = (nextLanguage: LanguageMode) => {
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem('mphil_chem_lang', nextLanguage);
    } catch {
      return;
    }
  };

  const setTheme = (nextTheme: 'light' | 'dark') => setThemeState(nextTheme);
  const toggleTheme = () => setThemeState((current) => current === 'light' ? 'dark' : 'light');

  const addPoints = (amount: number, reason = 'Study Activity') => {
    const pointsToAdd = Math.floor(amount);
    if (!Number.isFinite(pointsToAdd) || pointsToAdd <= 0) return;

    updateStudyData((data) => {
      const activeData = withStudyActivity(data);
      return { ...activeData, profile: addProfilePoints(activeData.profile, pointsToAdd) };
    });
    showPointsToast(pointsToAdd, reason);
  };

  const updateUserProfile = (patch: Partial<UserProfile>) => {
    updateStudyData((data) => ({
      ...data,
      profile: {
        ...data.profile,
        fullName: typeof patch.fullName === 'string' ? patch.fullName.trim().slice(0, 120) : data.profile.fullName,
        session: typeof patch.session === 'string' ? patch.session.trim().slice(0, 80) : data.profile.session,
        specialization: typeof patch.specialization === 'string' ? patch.specialization.trim().slice(0, 120) : data.profile.specialization,
        rollNumber: typeof patch.rollNumber === 'string' ? patch.rollNumber.trim().slice(0, 80) : data.profile.rollNumber,
        avatarSeed: typeof patch.avatarSeed === 'string' ? patch.avatarSeed.slice(0, 80) : data.profile.avatarSeed
      }
    }));
  };

  const markLessonComplete = (id: string) => {
    if (currentDataRef.current.completedLessons.includes(id)) return;
    updateStudyData((data) => {
      const activeData = withStudyActivity(data);
      return {
        ...activeData,
        completedLessons: [...activeData.completedLessons, id],
        profile: addProfilePoints(activeData.profile, 50)
      };
    });
    showPointsToast(50, 'Lesson Completed');
  };

  const unmarkLessonComplete = (id: string) => {
    updateStudyData((data) => {
      if (!data.completedLessons.includes(id)) return data;
      return { ...data, completedLessons: data.completedLessons.filter((lessonId) => lessonId !== id) };
    });
  };

  const isLessonCompleted = (id: string) => currentData.completedLessons.includes(id);

  const toggleBookmarkLesson = (id: string) => {
    const wasBookmarked = currentDataRef.current.bookmarkedLessons.includes(id);
    const rewardKey = `lesson-bookmark:${id}`;
    const shouldReward = !wasBookmarked && !currentDataRef.current.rewardedActions.includes(rewardKey);

    updateStudyData((data) => {
      const bookmarked = data.bookmarkedLessons.includes(id);
      let nextData: PersistedStudyData = {
        ...data,
        bookmarkedLessons: bookmarked
          ? data.bookmarkedLessons.filter((lessonId) => lessonId !== id)
          : [...data.bookmarkedLessons, id]
      };

      if (!bookmarked) nextData = withStudyActivity(nextData);
      if (shouldReward) {
        nextData = {
          ...nextData,
          rewardedActions: [...nextData.rewardedActions, rewardKey],
          profile: addProfilePoints(nextData.profile, 10)
        };
      }
      return nextData;
    });

    if (shouldReward) showPointsToast(10, 'Lesson Bookmarked');
  };

  const toggleBookmarkQuestion = (id: string) => {
    updateStudyData((data) => {
      const bookmarked = data.bookmarkedQuestions.includes(id);
      const nextData = {
        ...data,
        bookmarkedQuestions: bookmarked
          ? data.bookmarkedQuestions.filter((questionId) => questionId !== id)
          : [...data.bookmarkedQuestions, id]
      };
      return bookmarked ? nextData : withStudyActivity(nextData);
    });
  };

  const saveNote = (lessonId: string, noteText: string) => {
    const nextNote = noteText.slice(0, 10000);
    const currentNote = currentDataRef.current.userNotes[lessonId] ?? '';
    if (currentNote === nextNote) return;

    const rewardKey = `lesson-note:${lessonId}`;
    const shouldReward =
      !currentNote.trim() &&
      nextNote.trim().length > 10 &&
      !currentDataRef.current.rewardedActions.includes(rewardKey);

    updateStudyData((data) => {
      const userNotes = { ...data.userNotes };
      if (nextNote.trim()) userNotes[lessonId] = nextNote;
      else delete userNotes[lessonId];

      let nextData: PersistedStudyData = { ...data, userNotes };
      if (nextNote.trim()) nextData = withStudyActivity(nextData);
      if (shouldReward) {
        nextData = {
          ...nextData,
          rewardedActions: [...nextData.rewardedActions, rewardKey],
          profile: addProfilePoints(nextData.profile, 20)
        };
      }
      return nextData;
    });

    if (shouldReward) showPointsToast(20, 'Study Notes Created');
  };

  const recordQuizAttempt = (attempt: Omit<QuizAttemptRecord, 'id' | 'date'>) => {
    const record: QuizAttemptRecord = {
      ...attempt,
      id: crypto.randomUUID(),
      date: todayKey()
    };
    const currentAttempts = currentDataRef.current.quizAttempts;
    const bestPreviousPercentage = currentAttempts
      .filter((previous) => previous.subjectId === attempt.subjectId && previous.topicId === attempt.topicId)
      .reduce((best, previous) => Math.max(best, previous.percentage), 0);
    const pointsAwarded = attempt.percentage > bestPreviousPercentage
      ? attempt.score * 10 + (attempt.percentage === 100 && bestPreviousPercentage < 100 ? 30 : 0)
      : 0;

    updateStudyData((data) => {
      const activeData = withStudyActivity(data);
      const profile = pointsAwarded > 0
        ? addProfilePoints(activeData.profile, pointsAwarded)
        : activeData.profile;
      return { ...activeData, quizAttempts: [record, ...data.quizAttempts], profile };
    });

    if (pointsAwarded > 0) {
      showPointsToast(pointsAwarded, `Quiz Completed (${attempt.score}/${attempt.total})`);
    }
  };

  const navigateToLesson = (subjectId: string, lessonId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedLessonId(lessonId);
    setView('lesson');
    updateStudyData((data) => {
      const activeData = withStudyActivity(data);
      return {
        ...activeData,
        lastStudiedSubjectId: subjectId,
        lastStudiedLessonId: lessonId,
        visitedSubjects: data.visitedSubjects.includes(subjectId)
          ? data.visitedSubjects
          : [...data.visitedSubjects, subjectId]
      };
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-300">
        <p role="status">Loading your study record…</p>
      </main>
    );
  }

  if (!studyData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <section className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900" role="alert">
          <h1 className="font-semibold">Your study record could not be loaded</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Check your connection and try again.</p>
          <button
            type="button"
            onClick={() => void mutate()}
            className="mt-5 rounded-lg bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            Try again
          </button>
        </section>
      </main>
    );
  }

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
        completedLessons: studyData.completedLessons,
        markLessonComplete,
        unmarkLessonComplete,
        isLessonCompleted,
        bookmarkedLessons: studyData.bookmarkedLessons,
        toggleBookmarkLesson,
        bookmarkedQuestions: studyData.bookmarkedQuestions,
        toggleBookmarkQuestion,
        userNotes: studyData.userNotes,
        saveNote,
        quizAttempts: studyData.quizAttempts,
        recordQuizAttempt,
        searchQuery,
        setSearchQuery,
        navigateToLesson,
        lastStudiedLessonId: studyData.lastStudiedLessonId,
        lastStudiedSubjectId: studyData.lastStudiedSubjectId,
        visitedSubjects: studyData.visitedSubjects,
        userProfile: studyData.profile,
        updateUserProfile,
        addPoints,
        recentPointsEarned,
        storageError,
        retrySave
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) throw new Error('useStudy must be used within a StudyProvider');
  return context;
};
