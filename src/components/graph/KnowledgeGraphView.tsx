import React, { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import { conceptNodesData } from '../../data/concepts';
import { ConceptNode } from '../../types';
import {
  Network,
  ArrowRight,
  Sparkles,
  Link2,
  BookOpen,
  Filter,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const KnowledgeGraphView: React.FC = () => {
  const { language, navigateToLesson } = useStudy();
  const [selectedNodeId, setSelectedNodeId] = useState<string>(conceptNodesData[0].id);
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  const selectedNode = conceptNodesData.find((n) => n.id === selectedNodeId) || conceptNodesData[0];

  const filteredNodes = subjectFilter === 'all'
    ? conceptNodesData
    : conceptNodesData.filter((n) => n.subjectId === subjectFilter);

  // Connected nodes
  const connectedNodes = conceptNodesData.filter((n) =>
    selectedNode.connectedNodeIds.includes(n.id)
  );

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-chem mb-2">
          <span>Epistemological Architecture</span>
          <span>·</span>
          <span>Interdisciplinary Chemical Connections</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {language === 'en' ? 'Cross-Subject Knowledge Graph' : 'Cross-Subject Knowledge Graph'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-serif-academic max-w-3xl">
          {language === 'en'
            ? 'Chemistry is an interconnected continuum. Discover how interfacial adsorption directly impacts polymer nanocomposite mechanics, semiconductor solar photocatalysis, and QSAR machine learning property predictions.'
            : 'Dekhein kaisay surface adsorption, polymers, photochemistry, machine learning aur research methods aapas mein juday huay hain.'}
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="font-semibold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        <button
          onClick={() => setSubjectFilter('all')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
            subjectFilter === 'all'
              ? 'bg-slate-900 text-white dark:bg-teal-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          All Disciplines
        </button>
        <button
          onClick={() => setSubjectFilter('chem-7124')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
            subjectFilter === 'chem-7124'
              ? 'bg-slate-900 text-white dark:bg-teal-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Surface Chemistry
        </button>
        <button
          onClick={() => setSubjectFilter('chem-7119')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
            subjectFilter === 'chem-7119'
              ? 'bg-slate-900 text-white dark:bg-teal-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Polymers & Composites
        </button>
        <button
          onClick={() => setSubjectFilter('chem-7123')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
            subjectFilter === 'chem-7123'
              ? 'bg-slate-900 text-white dark:bg-teal-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Photochemistry
        </button>
        <button
          onClick={() => setSubjectFilter('chem-7130')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
            subjectFilter === 'chem-7130'
              ? 'bg-slate-900 text-white dark:bg-teal-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Applied AI
        </button>
      </div>

      {/* Main 2-Column Split: Node Cloud vs. Active Concept Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Node Map */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono-chem">
            <span>Concept Nodes ({filteredNodes.length})</span>
            <span>Click any node to inspect details</span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {filteredNodes.map((node) => {
              const isSelected = node.id === selectedNode.id;
              const isConnected = selectedNode.connectedNodeIds.includes(node.id);

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-teal-700 text-white border-teal-700 dark:bg-teal-600 dark:border-teal-500 shadow-md scale-105'
                      : isConnected
                      ? 'bg-teal-50 text-teal-900 border-teal-300 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-700'
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{language === 'en' ? node.nameEn : node.nameUrRoman}</span>
                  {isConnected && !isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" title="Connected Concept" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Connection Network Summary */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Direct Concept Links from "{language === 'en' ? selectedNode.nameEn : selectedNode.nameUrRoman}"</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {connectedNodes.map((cn) => (
                <div
                  key={cn.id}
                  onClick={() => setSelectedNodeId(cn.id)}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-teal-500 cursor-pointer transition-colors text-xs"
                >
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {language === 'en' ? cn.nameEn : cn.nameUrRoman}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {cn.subjectName} · {cn.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Concept Card with Formula & Lesson Jump */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono-chem mb-1">
              <span>{selectedNode.subjectName}</span>
              <span>{selectedNode.category}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? selectedNode.nameEn : selectedNode.nameUrRoman}
            </h2>
          </div>

          {/* Definition */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Exact Definition
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-serif-academic">
              {language === 'en' ? selectedNode.definitionEn : selectedNode.definitionUrRoman}
            </p>
          </div>

          {/* Formula if applicable */}
          {selectedNode.formula && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Governing Equation
              </h4>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center font-mono-chem text-xs text-teal-800 dark:text-teal-300 overflow-x-auto">
                {selectedNode.formula}
              </div>
            </div>
          )}

          {/* Cross-Subject Connection Note */}
          {selectedNode.crossSubjectConnectionNoteEn && (
            <div className="p-3 bg-teal-50/50 dark:bg-teal-950/20 rounded-lg text-xs space-y-1 border border-teal-100 dark:border-teal-900/40">
              <span className="font-bold text-teal-900 dark:text-teal-200 block">
                Cross-Disciplinary Bridge:
              </span>
              <p className="text-teal-800 dark:text-teal-300 font-serif-academic text-[11px]">
                {selectedNode.crossSubjectConnectionNoteEn}
              </p>
            </div>
          )}

          {/* Common Misconception */}
          {selectedNode.commonMisconceptionEn && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Common Misconception</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-serif-academic bg-rose-50/30 dark:bg-rose-950/20 p-2.5 rounded border border-rose-100 dark:border-rose-900/40">
                {selectedNode.commonMisconceptionEn}
              </p>
            </div>
          )}

          {/* Jump to Full Lesson Button */}
          <div className="pt-2">
            <button
              onClick={() => navigateToLesson(selectedNode.subjectId, selectedNode.lessonId)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-teal-600 rounded-lg hover:bg-slate-800 dark:hover:bg-teal-700 transition-colors"
            >
              <span>{language === 'en' ? 'Study Full Academic Lesson' : 'Mukammal Sabaq Parhein'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
