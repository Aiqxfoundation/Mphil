import React from 'react';
import { useStudy } from '../../context/StudyContext';

export const Footer: React.FC = () => {
  const { setView } = useStudy();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            University of Sargodha · MPhil Chemistry Academic Portal
          </p>
          <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span>Institute of Chemistry</span>
            <span>·</span>
            <span>HEC Pakistan Quality Framework</span>
            <span>·</span>
            <span>Session 2024–2026</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          <button
            onClick={() => setView('syllabus-matrix')}
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            Syllabus Verification Audit
          </button>
          <button
            onClick={() => setView('graph')}
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            Cross-Subject Graph
          </button>
          <button
            onClick={() => setView('quiz')}
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            Practice Exams
          </button>
          <a
            href="https://su.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            UOS Official Portal
          </a>
        </div>
      </div>
    </footer>
  );
};
