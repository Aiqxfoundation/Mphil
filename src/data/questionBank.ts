import { MCQ, ShortQuestion, LongQuestion } from '../types';
import { subjectsData } from './subjects';

export interface AggregatedQuestionBank {
  mcqs: (MCQ & { subjectName: string; topicTitle: string })[];
  shortQuestions: (ShortQuestion & { subjectName: string; topicTitle: string })[];
  longQuestions: (LongQuestion & { subjectName: string; topicTitle: string })[];
}

export const getAggregatedQuestionBank = (): AggregatedQuestionBank => {
  const mcqs: (MCQ & { subjectName: string; topicTitle: string })[] = [];
  const shortQuestions: (ShortQuestion & { subjectName: string; topicTitle: string })[] = [];
  const longQuestions: (LongQuestion & { subjectName: string; topicTitle: string })[] = [];

  subjectsData.forEach((subject) => {
    subject.modules.forEach((module) => {
      module.topics.forEach((topic) => {
        const content = topic.lessonContent;
        if (content.mcqs) {
          content.mcqs.forEach((mcq) => {
            mcqs.push({
              ...mcq,
              subjectName: subject.nameEn,
              topicTitle: topic.titleEn
            });
          });
        }
        if (content.shortQuestions) {
          content.shortQuestions.forEach((sq) => {
            shortQuestions.push({
              ...sq,
              subjectName: subject.nameEn,
              topicTitle: topic.titleEn
            });
          });
        }
        if (content.longQuestions) {
          content.longQuestions.forEach((lq) => {
            longQuestions.push({
              ...lq,
              subjectName: subject.nameEn,
              topicTitle: topic.titleEn
            });
          });
        }
      });
    });
  });

  return { mcqs, shortQuestions, longQuestions };
};
