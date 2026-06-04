/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QuizQuestion } from "../types";
import { QUIZ_QUESTIONS } from "../data";
import { CheckCircle2, XCircle, RefreshCw, Trophy, AlertCircle, HelpCircle, ArrowRight, ArrowLeft, BookOpen, Key } from "lucide-react";

export default function QuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [structuredAnswers, setStructuredAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const activeQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectMC = (choice: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [activeQuestion.id]: choice
    }));
  };

  const handleChangeStructured = (val: string) => {
    if (quizSubmitted) return;
    setStructuredAnswers((prev) => ({
      ...prev,
      [activeQuestion.id]: val
    }));
  };

  const isStructuredCorrect = (question: QuizQuestion, sText = "") => {
    if (!sText || sText.trim() === "") return false;
    // check if key phrases exist in text
    const keywords = (question.correctAnswer as string).split(",").map(k => k.trim().toLowerCase());
    const lowerText = sText.toLowerCase();
    // if at least 1 or 2 keywords match depending on size, or we check common ones
    return keywords.some(kw => lowerText.includes(kw));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (q.type === "mc") {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          score++;
        }
      } else {
        if (isStructuredCorrect(q, structuredAnswers[q.id])) {
          score++;
        }
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setStructuredAnswers({});
    setQuizSubmitted(false);
    setCurrentQuestionIndex(0);
    setShowExplanation({});
  };

  const score = calculateScore();
  const totalQuestions = QUIZ_QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* Banner introduction to quizzes */}
      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-5 shadow-xs flex items-center justify-between">
        <div className="max-w-xl">
          <h3 className="text-violet-900 font-semibold flex items-center gap-2 text-base md:text-lg font-sans">
            <Trophy className="w-5 h-5 text-indigo-500" />
            HKDSE Exam Preparation Room
          </h3>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Test your knowledge with challenging transition metal questions styled directly on the <strong>HKDSE Chemistry Syllabus</strong>.
            Gain experience analyzing d-block definitions, anomalous subshell configurations, and complex ion thermodynamics.
          </p>
        </div>
        <div className="hidden md:block bg-white border border-indigo-100 rounded-full px-4 py-2 shadow-3xs font-mono text-xs font-bold text-indigo-600">
          {totalQuestions} Exam Scenarios
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left main Question card */}
        <div className="lg:col-span-2 border border-slate-200/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[440px]">
          {!quizSubmitted ? (
            <div className="space-y-6">
              {/* Question metadata */}
              <div className="flex items-center justify-between pb-3 border-b border-secondary/50">
                <span className="font-mono text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  Topic: {activeQuestion.syllabusTopic}
                </span>
              </div>

              {/* Syllabus reference tag */}
              {activeQuestion.hkdseYearReference && (
                <div className="inline-block px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-700 font-mono font-semibold">
                  Exam Match: {activeQuestion.hkdseYearReference}
                </div>
              )}

              {/* The Question Text */}
              <div className="text-slate-800 font-sans font-medium text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {activeQuestion.question}
              </div>

              {/* Question options or inputs depending on Type */}
              {activeQuestion.type === "mc" ? (
                <div className="space-y-3 mt-4">
                  {activeQuestion.options?.map((option) => {
                    const letter = option.charAt(0);
                    const isSelected = selectedAnswers[activeQuestion.id] === letter;

                    return (
                      <button
                        key={option}
                        id={`quiz-option-${letter}`}
                        onClick={() => handleSelectMC(letter)}
                        className={`w-full text-left p-3.5 rounded-xl border border-slate-200 text-sm font-sans tracking-wide leading-relaxed cursor-pointer transition-all duration-150 flex items-start gap-3 hover:bg-slate-50/50 ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50/50 font-medium text-indigo-950"
                            : "text-slate-700 bg-white"
                        }`}
                      >
                        <span className={`w-5 h-5 flex-shrink-0 rounded-full font-mono text-[11px] font-bold flex items-center justify-center border ${
                          isSelected ? "bg-indigo-600 text-white border-transparent" : "bg-slate-100 text-slate-600 border-slate-300"
                        }`}>
                          {letter}
                        </span>
                        <span>{option.slice(3)}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4 mt-4">
                  <div className="text-xs text-slate-500 font-sans italic">
                    Type a complete explanation responding to the question. To score, include relevant key terms (such as <strong>coordinate bond</strong>, <strong>octahedral</strong>, etc.).
                  </div>
                  <textarea
                    id="quiz-structured-input"
                    rows={4}
                    value={structuredAnswers[activeQuestion.id] || ""}
                    onChange={(e) => handleChangeStructured(e.target.value)}
                    placeholder="Enter structural bonding analysis..."
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm font-sans tracking-wide leading-relaxed focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                  />
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                    <span className="font-sans font-semibold text-slate-500">Key words matched automatically:</span>
                    <span>coordinate bond</span> / <span>octahedral dative</span> / <span>thiocyanate SCN</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Quiz completed overall result view
            <div className="text-center py-10 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h4 className="text-slate-900 font-bold text-2xl font-sans">Self-Assessment Complete!</h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Excellent study effort! Review your compiled analytical report card with matched correct items and official guidelines.
                </p>
              </div>

              {/* Progress visual circular bar */}
              <div className="flex justify-center py-2">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="72" cy="72" r="64" stroke="#e2e8f0" strokeWidth="8" fill="transparent" />
                    <circle cx="72" cy="72" r="64" stroke="#4f46e5" strokeWidth="8" fill="transparent"
                      strokeDasharray="402"
                      strokeDashoffset={402 - (402 * percentage) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="text-center z-10">
                    <span className="font-mono text-3xl font-extrabold text-slate-900 block leading-none">{percentage}%</span>
                    <span className="font-mono text-[10px] text-slate-500 font-bold block mt-1.5 uppercase tracking-wide">
                      {score} / {totalQuestions} Correct
                    </span>
                  </div>
                </div>
              </div>

              {/* Score categorization message */}
              <div className="max-w-md mx-auto text-xs px-4 py-2.5 rounded-lg border bg-slate-50 font-sans text-slate-600">
                {percentage === 100 ? (
                  <span className="text-green-700 font-semibold flex items-center justify-center gap-1">🏆 Perfect HKDSE Grade 5** Level Performance! Amazing!</span>
                ) : percentage >= 75 ? (
                  <span className="text-teal-700 font-semibold flex items-center justify-center gap-1">🌟 Strong Grade 5* Level! Ready for the exam.</span>
                ) : percentage >= 50 ? (
                  <span className="text-indigo-600 font-medium">Capable Grade 4 Level. Recommended to review exception elements like Cr, Cu, Zn.</span>
                ) : (
                  <span className="text-amber-700 font-medium">Keep practicing d-block rules to unlock secure points in Chemical Systems module.</span>
                )}
              </div>
            </div>
          )}

          {/* Navigation and Submission Buttons footer area */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6 gap-3">
            {!quizSubmitted ? (
              <>
                <button
                  id="quiz-prev-btn"
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-3.5 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold font-sans flex items-center gap-1 my-btn cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-slate-600 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous
                </button>

                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    id="quiz-next-btn"
                    onClick={handleNext}
                    className="px-4 py-1.5 border bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 rounded-lg text-xs font-semibold font-sans flex items-center gap-1 cursor-pointer"
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id="quiz-submit-btn"
                    onClick={() => setQuizSubmitted(true)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold font-sans border border-transparent bg-indigo-600 text-white shadow-3xs cursor-pointer hover:bg-indigo-700"
                  >
                    Submit Exam Paper
                  </button>
                )}
              </>
            ) : (
              <button
                id="quiz-retry-btn"
                onClick={handleReset}
                className="w-full py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer shadow-3xs"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Restart Self-Assessment
              </button>
            )}
          </div>
        </div>

        {/* Right Help Desk/Syllabus Feedback center */}
        <div className="border border-slate-200/80 bg-slate-50/50 rounded-2xl p-5 shadow-3xs flex flex-col justify-between">
          {!quizSubmitted ? (
            <div className="space-y-4">
              <h4 className="text-slate-800 font-bold text-sm flex items-center gap-1.5 border-b border-slate-205 pb-2">
                <AlertCircle className="w-4 h-4 text-slate-500 animate-pulse" />
                Live Assessment Helper
              </h4>

              <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-3xs text-xs space-y-3">
                <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
                  How HKDSE Graders Review
                </span>
                <p className="text-slate-600 leading-relaxed font-sans">
                  HKDSE Chemistry markers look for highly precise chemical terminology. Ensure you know the exact formulations:
                </p>
                <ul className="list-disc pl-4 space-y-1.5 text-slate-500 text-[11px] leading-relaxed">
                  <li><strong>Partially filled d-subshell:</strong> Essential definition phrasing when debating Sc/Zn.</li>
                  <li><strong>Ligands:</strong> Mention electron pairs dative bonding inside central transition orbitals.</li>
                  <li><strong>d-d transition:</strong> Trigger source of the color compound wavelengths.</li>
                </ul>
              </div>

              {/* Toggle to show answer explanations early for training */}
              <div className="pt-2">
                <button
                  id={`reveal-explain-btn-${activeQuestion.id}`}
                  onClick={() => setShowExplanation(p => ({ ...p, [activeQuestion.id]: !p[activeQuestion.id] }))}
                  className="w-full py-2 border border-dashed border-slate-300 hover:bg-white text-[11px] font-bold text-indigo-600 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-all duration-150 shadow-3xs"
                >
                  <Key className="w-3.5 h-3.5" />
                  {showExplanation[activeQuestion.id] ? "Hide Syllabus Solution Guidance" : "Reveal Syllabus Solution Guidance"}
                </button>

                <AnimatePresence>
                  {showExplanation[activeQuestion.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 bg-indigo-50/40 border border-indigo-100 rounded-lg p-3 text-[11px] text-slate-700 leading-relaxed overflow-hidden"
                    >
                      <strong className="block text-indigo-950 font-bold mb-1 font-mono uppercase tracking-tight">Grade 5** Standard Explanation:</strong>
                      {activeQuestion.explanation}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // Compilation Review Section
            <div className="space-y-4">
              <h4 className="text-slate-800 font-bold text-sm flex items-center gap-1.5 border-b border-slate-205 pb-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Compiled Exam Answers Review
              </h4>
              <div className="space-y-2 h-[340px] overflow-y-auto pr-1">
                {QUIZ_QUESTIONS.map((q, i) => {
                  const isMC = q.type === "mc";
                  const usrAns = isMC ? selectedAnswers[q.id] : structuredAnswers[q.id];
                  const isCorrect = isMC ? usrAns === q.correctAnswer : isStructuredCorrect(q, usrAns);

                  return (
                    <div key={q.id} className="bg-white border rounded-lg p-3 text-[11px] shadow-3xs border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-800">Scenario {i + 1} ({q.syllabusTopic})</span>
                        {isCorrect ? (
                          <span className="text-green-600 font-bold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3 text-green-500 inline" /> Correct
                          </span>
                        ) : (
                          <span className="text-rose-600 font-bold flex items-center gap-0.5">
                            <XCircle className="w-3 h-3 text-rose-500 inline" /> Incorrect
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 line-clamp-2 italic mb-1">"{q.question}"</p>
                      <div className="text-[10px] text-indigo-600 font-sans leading-relaxed pt-1 border-t border-slate-50">
                        <strong>Official Answer Key:</strong> {q.correctAnswer}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] text-slate-400 font-mono text-center">
            *All assessment rules follow HKDSE chemistry assessment parameters.
          </div>
        </div>
      </div>
    </div>
  );
}
