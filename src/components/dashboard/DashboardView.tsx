import React from 'react';
import { useStudy } from '../../context/StudyContext';
import { subjectsData } from '../../data/subjects';
import {
  FileText,
  Cpu,
  Layers,
  Atom,
  Sun,
  BookOpen,
  BookmarkCheck,
  ArrowRight,
  CheckCircle2,
  BookMarked,
  Sparkles,
  ShieldCheck,
  Network,
  HelpCircle,
  Clock
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Layers: <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Atom: <Atom className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
  Sun: <Sun className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  BookmarkCheck: <BookmarkCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
};

export const DashboardView: React.FC = () => {
  const {
    language,
    setView,
    setSelectedSubjectId,
    completedLessons,
    lastStudiedLessonId,
    lastStudiedSubjectId,
    navigateToLesson
  } = useStudy();

  // Find last studied subject & lesson object
  const lastSubject = subjectsData.find((s) => s.id === lastStudiedSubjectId) || subjectsData[0];
  let lastLessonTitle = 'Scientific Research Methodology';
  lastSubject.modules.forEach((m) => {
    m.topics.forEach((t) => {
      if (t.lessonContent.id === lastStudiedLessonId) {
        lastLessonTitle = language === 'en' ? t.lessonContent.titleEn : t.lessonContent.titleUrRoman;
      }
    });
  });

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="pt-4 pb-2">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            <span>University of Sargodha</span>
            <span>·</span>
            <span>Institute of Chemistry</span>
            <span>·</span>
            <span>Postgraduate MPhil Degree Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
            {language === 'en'
              ? 'Complete Academic Study & Exam Preparation Hub'
              : 'MPhil Chemistry Complete Study aur Exam Hub'}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-serif-academic">
            {language === 'en'
              ? 'A rigorous, university-level study system covering all seven MPhil Chemistry courses. Comprehensive theory, mathematical derivations with SI units, worked numerical examples, exam question banks, and verified University of Sargodha syllabus alignment.'
              : 'University of Sargodha ke MPhil Chemistry ke tamaam 7 subjects ka mukammal course. Gehra theoretical ilm, mathematical derivations, step-by-step solved numericals, aur imtehani sawalat o jawabaat.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setSelectedSubjectId('chem-7101');
                setView('subject');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 dark:bg-teal-600 rounded-lg hover:bg-slate-800 dark:hover:bg-teal-700 transition-colors whitespace-nowrap"
            >
              <span>{language === 'en' ? 'Explore 7 Subjects' : '7 Subjects Parhein'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('syllabus-matrix')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{language === 'en' ? 'Syllabus Verification Audit' : 'Syllabus Audit Report'}</span>
            </button>
            <button
              onClick={() => setView('graph')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors whitespace-nowrap"
            >
              <Network className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{language === 'en' ? 'Cross-Subject Graph' : 'Concept Graph'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Continue Learning Strip (if applicable) */}
      {lastStudiedLessonId && (
        <section className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Resume where you left off' : 'Jahan se chhoda tha wahi se shuru karein'}</span>
                <span>·</span>
                <span className="font-mono-chem font-semibold">{lastSubject.code}</span>
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {lastLessonTitle}
              </h2>
            </div>
            <button
              onClick={() => navigateToLesson(lastSubject.id, lastStudiedLessonId)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-700 dark:bg-teal-600 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors whitespace-nowrap shrink-0"
            >
              <span>{language === 'en' ? 'Continue Lesson' : 'Sabaq Jari Rakhein'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      )}

      {/* 4 Quantitative Rigor Metric Highlights */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="text-2xl font-bold font-mono-chem text-slate-900 dark:text-white">7 / 7</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {language === 'en' ? 'Complete MPhil Subjects' : 'Mukammal Subjects'}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="text-2xl font-bold font-mono-chem text-teal-700 dark:text-teal-400">
            {completedLessons.length}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {language === 'en' ? 'Completed Topic Lessons' : 'Mukammal Shuda Asbaaq'}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="text-2xl font-bold font-mono-chem text-slate-900 dark:text-white">100%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {language === 'en' ? 'Bilingual Content (EN/Urdu)' : 'Bilingual Support (EN/Urdu)'}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="text-2xl font-bold font-mono-chem text-slate-900 dark:text-white">18-Week</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {language === 'en' ? 'Semester Exam Coverage' : 'Semester Exam Syllabus'}
          </div>
        </div>
      </section>

      {/* The Seven Subjects Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {language === 'en' ? 'Curriculum by Subject' : 'Subject-Wise Curriculum'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'en'
                ? 'All seven verified academic streams with deep modules, worked calculations, and question banks.'
                : 'MPhil Chemistry ke 7 ahem subjects jinme derivations, solved numericals aur imtehani sawalat shamil hain.'}
            </p>
          </div>
          <button
            onClick={() => setView('syllabus-matrix')}
            className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>{language === 'en' ? 'View Official Syllabus Verification' : 'Syllabus Verification Table'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsData.map((subject, idx) => {
            // Count total lessons and completed in this subject
            let totalSubjectLessons = 0;
            let completedInSubject = 0;
            subject.modules.forEach((m) => {
              m.topics.forEach((t) => {
                totalSubjectLessons++;
                if (completedLessons.includes(t.lessonContent.id)) {
                  completedInSubject++;
                }
              });
            });
            const progressPercent =
              totalSubjectLessons > 0 ? Math.round((completedInSubject / totalSubjectLessons) * 100) : 0;

            return (
              <div
                key={subject.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Clean unboxed metadata header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-mono-chem font-semibold text-teal-700 dark:text-teal-400">
                      {subject.code}
                    </span>
                    <span>{subject.creditHours} Credit Hours</span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                      {iconMap[subject.iconName] || <FileText className="w-5 h-5 text-teal-600" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                        {language === 'en' ? subject.nameEn : subject.nameUrRoman}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {language === 'en' ? subject.taglineEn : subject.taglineUrRoman}
                      </p>
                    </div>
                  </div>

                  {/* Verification source info */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span className="truncate">{subject.verificationStatus}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                      {subject.codeReferenceType}
                    </div>
                  </div>
                </div>

                {/* Progress bar & Action button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span>{language === 'en' ? 'Syllabus Progress' : 'Kamyabi'}</span>
                    <span className="font-mono-chem font-semibold">{progressPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full bg-teal-600 dark:bg-teal-500 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSubjectId(subject.id);
                      setView('subject');
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors"
                  >
                    <span>{language === 'en' ? 'Open Subject Curriculum' : 'Subject Kholein'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div
          onClick={() => setView('graph')}
          className="cursor-pointer bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-700 dark:text-teal-400 mb-3">
            <Network className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'Cross-Subject Knowledge Graph' : 'Cross-Subject Concept Map'}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {language === 'en'
              ? 'Explore how adsorption connects to polymer nanocomposites, solar photocatalysis, and QSAR machine learning models.'
              : 'Dekhein kaisay surface adsorption, polymers, photochemistry aur machine learning aapas mein milti hain.'}
          </p>
        </div>

        <div
          onClick={() => setView('question-bank')}
          className="cursor-pointer bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-700 dark:text-sky-400 mb-3">
            <HelpCircle className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'Subject Question Bank' : 'Question Bank (Sawalat)'}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {language === 'en'
              ? 'Verified MCQs with distractor rationales, short conceptual questions, and long essay model answers.'
              : 'Mukammal MCQs, short questions aur long answers model jawabaat ke sath.'}
          </p>
        </div>

        <div
          onClick={() => setView('quiz')}
          className="cursor-pointer bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-700 dark:text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {language === 'en' ? 'Interactive Exam Simulation' : 'Exam Simulation (Test)'}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {language === 'en'
              ? 'Timed and untimed university exam practice with instant score diagnostics and weak-topic analysis.'
              : 'Waqt ke sath practice tests, scorecard aur kamzor topics ki nishandehi.'}
          </p>
        </div>
      </section>
    </div>
  );
};
