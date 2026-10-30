import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import {
  User,
  Award,
  Sparkles,
  Flame,
  BookOpen,
  CheckCircle2,
  Bookmark,
  FileText,
  ShieldCheck,
  Edit3,
  Save,
  RotateCcw,
  Languages,
  Compass,
  Microscope,
  FlaskConical,
  Dna,
  Zap,
  BookOpenCheck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AvailableBadge {
  id: string;
  nameEn: string;
  nameUrRoman: string;
  descEn: string;
  descUrRoman: string;
  icon: LucideIcon;
  category: string;
  subjectIndex?: number;
}

const allBadges: AvailableBadge[] = [
  {
    id: 'b-1',
    nameEn: 'Syllabus Explorer',
    nameUrRoman: 'Syllabus Explorer',
    descEn: 'Completed at least one lesson in each of the 7 subjects.',
    descUrRoman: '7 subjects mein har aik ka kam az kam aik lesson mukammal kiya.',
    icon: Compass,
    category: 'All subjects'
  },
  {
    id: 'b-2',
    nameEn: 'Research Methodology Pro',
    nameUrRoman: 'Research Methodology Pro',
    descEn: 'Completed every lesson in Subject 1.',
    descUrRoman: 'Subject 1 ke tamam lessons mukammal kiye.',
    icon: Microscope,
    category: 'Subject 1',
    subjectIndex: 0
  },
  {
    id: 'b-3',
    nameEn: 'Adsorption & Isotherm Master',
    nameUrRoman: 'Adsorption Master',
    descEn: 'Completed every lesson in Subject 3.',
    descUrRoman: 'Subject 3 ke tamam lessons mukammal kiye.',
    icon: FlaskConical,
    category: 'Subject 3',
    subjectIndex: 2
  },
  {
    id: 'b-4',
    nameEn: 'Polymer Kinetics Analyst',
    nameUrRoman: 'Polymer Analyst',
    descEn: 'Completed every lesson in Subject 4.',
    descUrRoman: 'Subject 4 ke tamam lessons mukammal kiye.',
    icon: Dna,
    category: 'Subject 4',
    subjectIndex: 3
  },
  {
    id: 'b-5',
    nameEn: 'Photochemical Pioneer',
    nameUrRoman: 'Photochem Pioneer',
    descEn: 'Completed every lesson in Subject 5.',
    descUrRoman: 'Subject 5 ke tamam lessons mukammal kiye.',
    icon: Zap,
    category: 'Subject 5',
    subjectIndex: 4
  },
  {
    id: 'b-6',
    nameEn: 'Quranic Verification Scholar',
    nameUrRoman: 'Tehqeeq-e-Khabar Scholar',
    descEn: 'Completed every lesson in Subject 7.',
    descUrRoman: 'Subject 7 ke tamam lessons mukammal kiye.',
    icon: BookOpenCheck,
    category: 'Subject 7',
    subjectIndex: 6
  }
];

export const ProfileView: React.FC = () => {
  const {
    userProfile,
    updateUserProfile,
    language,
    setLanguage,
    completedLessons,
    bookmarkedLessons,
    userNotes,
    quizAttempts
  } = useStudy();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: userProfile.fullName,
    session: userProfile.session,
    specialization: userProfile.specialization,
    rollNumber: userProfile.rollNumber
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(formData);
    setIsEditing(false);
  };

  // Calculate points progress to next level
  const pointsInCurrentLevel = userProfile.points % 100;
  const pointsNeeded = 100 - pointsInCurrentLevel;

  // Quiz accuracy average
  let totalQuizQuestions = 0;
  let totalQuizCorrect = 0;
  quizAttempts.forEach((a) => {
    totalQuizQuestions += a.total;
    totalQuizCorrect += a.score;
  });
  const avgAccuracy = totalQuizQuestions > 0 ? Math.round((totalQuizCorrect / totalQuizQuestions) * 100) : 0;
  const completedSubjectIds = new Set(
    subjectsData
      .filter((subject) => subject.modules.some((module) =>
        module.topics.some((topic) => completedLessons.includes(topic.lessonContent.id))
      ))
      .map((subject) => subject.id)
  );
  const hasCompletedSubject = (subjectIndex: number) => {
    const subject = subjectsData[subjectIndex];
    const lessonIds = subject?.modules.flatMap((module) =>
      module.topics.map((topic) => topic.lessonContent.id)
    ) ?? [];
    return lessonIds.length > 0 && lessonIds.every((lessonId) => completedLessons.includes(lessonId));
  };
  const earnedBadges = allBadges.filter((badge) =>
    badge.id === 'b-1'
      ? subjectsData.length > 0 && completedSubjectIds.size === subjectsData.length
      : typeof badge.subjectIndex === 'number' && hasCompletedSubject(badge.subjectIndex)
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-10">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 transition-colors">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Big Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-teal-700 to-emerald-500 text-white font-bold text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-teal-700/20">
              {userProfile.username.substring(0, 2).toUpperCase()}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {userProfile.fullName || userProfile.username}
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 font-mono-chem font-bold border border-teal-200 dark:border-teal-800">
                  Lvl {userProfile.level}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono-chem">
                  @{userProfile.username} · {userProfile.rollNumber || 'Roll number not set'}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mt-1.5">
                  <span>{userProfile.specialization || 'Specialization not set'}</span>
                  <span>·</span>
                  <span>{userProfile.session || 'Session not set'}</span>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
          </button>
        </div>

        {/* Edit Form Drawer */}
        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1" htmlFor="profile-username">
                  Username
                </label>
                <input
                  id="profile-username"
                  type="text"
                  value={userProfile.username}
                  readOnly
                  aria-describedby="profile-username-help"
                  className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                />
                <p id="profile-username-help" className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  This username is used to sign in and cannot be changed.
                </p>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Student Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  MPhil Chemistry Specialization
                </label>
                <select
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="">Choose a specialization</option>
                  <option value="Physical Chemistry">Physical Chemistry</option>
                  <option value="Organic Chemistry">Organic Chemistry</option>
                  <option value="Inorganic Chemistry">Inorganic Chemistry</option>
                  <option value="Applied / Polymer Chemistry">Applied / Polymer Chemistry</option>
                  <option value="Analytical Chemistry">Analytical Chemistry</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  University Roll / Registration #
                </label>
                <input
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        )}

        {/* Level & Points Progress Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Level {userProfile.level} Scholar</span>
            </div>
            <span className="font-mono-chem font-semibold">
              {userProfile.points} Total XP Points · {pointsNeeded} XP to Level {userProfile.level + 1}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${pointsInCurrentLevel}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 Quantitative Study Activity Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Points</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold font-mono-chem text-slate-900 dark:text-white">
            {userProfile.points}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Total Earned XP</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Study Streak</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-bold font-mono-chem text-orange-600 dark:text-orange-400">
            {userProfile.streakDays} Days
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Consecutive Study</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Completed</span>
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl font-bold font-mono-chem text-teal-700 dark:text-teal-400">
            {completedLessons.length}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Topic Lessons Mastered</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Quiz Accuracy</span>
            <Award className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-bold font-mono-chem text-sky-700 dark:text-sky-400">
            {totalQuizQuestions > 0 ? `${avgAccuracy}%` : 'N/A'}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">{quizAttempts.length} Quizzes Attempted</div>
        </div>
      </div>

      {/* Language Preference Settings Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Languages className="w-4 h-4 text-teal-600" />
          <span>Language Preference & Roman Urdu Display</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Select your default study language. Roman Urdu translates all scientific explanations, derivations, and exam questions into clear Roman Urdu while preserving chemical formulas.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => setLanguage('en')}
            className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
              language === 'en'
                ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-950 dark:text-teal-200 shadow-sm'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            <span className="block font-bold">Standard English</span>
            <span className="text-[11px] font-normal text-slate-500">Official postgraduate academic terminology</span>
          </button>
          <button
            onClick={() => setLanguage('ur-roman')}
            className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
              language === 'ur-roman'
                ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-950 dark:text-teal-200 shadow-sm'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            <span className="block font-bold">Roman Urdu (رومن اردو)</span>
            <span className="text-[11px] font-normal text-slate-500">Aasan Roman Urdu wazahat aur misalein</span>
          </button>
        </div>
      </div>

      {/* Earned Academic Badges Showcase */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>MPhil Academic Badges & Milestones</span>
          </h3>
          <span className="text-xs font-mono-chem text-slate-400">
            {earnedBadges.length} {earnedBadges.length === 1 ? 'Badge Earned' : 'Badges Earned'}
          </span>
        </div>

        {earnedBadges.length === 0 ? (
          <div className="flex items-start gap-3 rounded-xl border border-dashed border-slate-300 p-4 dark:border-slate-700">
            <Award aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-slate-400" />
            <div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">No badges earned yet</h4>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Complete lessons to unlock milestones recorded from your study progress.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 md:grid-cols-3">
            {earnedBadges.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={badge.id}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30"
                >
                  <div className="shrink-0 rounded-lg border border-slate-100 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
                    <BadgeIcon aria-hidden="true" className="size-5 text-teal-700 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {language === 'en' ? badge.nameEn : badge.nameUrRoman}
                    </h4>
                    <p className="mt-0.5 line-clamp-2 text-[11px] text-slate-500 dark:text-slate-400">
                      {language === 'en' ? badge.descEn : badge.descUrRoman}
                    </p>
                    <div className="mt-2 text-[10px] font-semibold text-teal-700 dark:text-teal-400">
                      {badge.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
