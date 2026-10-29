import React from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const SubjectView: React.FC = () => {
  const {
    selectedSubjectId,
    setSelectedSubjectId,
    setView,
    language,
    navigateToLesson,
    completedLessons
  } = useStudy();

  const currentSubject = subjectsData.find((s) => s.id === selectedSubjectId) || subjectsData[0];

  return (
    <div className="space-y-8">
      {/* Back button & Subject Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setView('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Back to All Subjects' : 'Wapis Dashboard'}</span>
        </button>

        {/* Horizontal Subject Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {subjectsData.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSubjectId(s.id)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                s.id === currentSubject.id
                  ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {s.code.split('/')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 transition-colors">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono-chem">
              <span className="font-bold text-teal-700 dark:text-teal-400">{currentSubject.code}</span>
              <span>·</span>
              <span>{currentSubject.creditHours} Credit Hours</span>
              <span>·</span>
              <span>{currentSubject.degreeLevel}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {language === 'en' ? currentSubject.nameEn : currentSubject.nameUrRoman}
            </h1>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif-academic">
              {language === 'en' ? currentSubject.overviewEn : currentSubject.overviewUrRoman}
            </p>

            {/* Official Source Verification Box */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Verification Status: {currentSubject.verificationStatus}</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Source Document: {currentSubject.officialSourceDocument}
              </p>
            </div>
          </div>

          {/* Action cluster: Subject Quiz & Syllabus Audit */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button
              onClick={() => setView('quiz')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Start Subject Quiz' : 'Subject Quiz Dein'}</span>
            </button>
            <button
              onClick={() => setView('syllabus-matrix')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Syllabus Mapping Audit' : 'Syllabus Audit'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Module and Topic Syllabus Tree */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'Modules & Lesson Roadmap' : 'Modules aur Asbaaq'}
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-chem">
            {currentSubject.modules.length} Modules Available
          </span>
        </div>

        <div className="space-y-4">
          {currentSubject.modules.map((module) => (
            <div
              key={module.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
            >
              {/* Module Banner */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
                    <span>Module {module.moduleNumber}</span>
                    {module.weekSchedule && (
                      <>
                        <span>·</span>
                        <span>{module.weekSchedule}</span>
                      </>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {module.topics.length} {module.topics.length === 1 ? 'Topic' : 'Topics'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'en' ? module.titleEn : module.titleUrRoman}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-serif-academic">
                  {language === 'en' ? module.overviewEn : module.overviewUrRoman}
                </p>
              </div>

              {/* Topics inside this module */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {module.topics.map((topic) => {
                  const isDone = completedLessons.includes(topic.lessonContent.id);

                  return (
                    <div
                      key={topic.id}
                      onClick={() => navigateToLesson(currentSubject.id, topic.lessonContent.id)}
                      className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="mt-1">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shrink-0" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                            {language === 'en' ? topic.titleEn : topic.titleUrRoman}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 font-serif-academic">
                            {topic.officialTopicMapping}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 font-mono-chem">
                          <Clock className="w-3 h-3" />
                          {topic.estimatedMinutes}m
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
