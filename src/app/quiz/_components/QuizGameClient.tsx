"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle, CheckSquare, ChevronRight, Circle, Clock, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// Type definitions
interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  level: number;
  question: string;
  options: Option[];
  correct: string[];
  multi: boolean;
  explanation: string;
}

interface QuizGameClientProps {
  onComplete: (result: any) => void;
}

export default function QuizGameClient({ onComplete }: QuizGameClientProps) {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [qid: string]: string[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showValidation, setShowValidation] = useState(false);

  // Refs for focus management
  const questionRef = useRef<HTMLHeadingElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const firstOptionRef = useRef<HTMLLabelElement>(null);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  // Load questions with error handling
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/quiz/questions.json");

        if (!response.ok) {
          throw new Error(`Failed to load questions: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No questions found");
        }

        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load quiz questions");
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  // Focus management when question changes
  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [current]);

  // Handle answer selection with validation
  const handleAnswer = useCallback(
    (selected: string | string[]) => {
      const newAnswers = Array.isArray(selected) ? selected : [selected];
      setSelectedAnswers(newAnswers);
      setShowValidation(false);

      if (questions) {
        setAnswers((prev) => ({
          ...prev,
          [questions[current].id]: newAnswers,
        }));
      }
    },
    [questions, current]
  );

  // Handle navigation with validation
  const handleNext = useCallback(() => {
    if (!questions) return;

    const currentQuestion = questions[current];
    const hasAnswer = selectedAnswers.length > 0;

    if (!hasAnswer) {
      setShowValidation(true);
      // Focus first option to guide user
      if (firstOptionRef.current) {
        firstOptionRef.current.focus();
      }
      return;
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelectedAnswers(answers[questions[current + 1]?.id] || []);
    } else {
      // Quiz complete
      const result = {
        answers,
        questions,
        timeSpent,
        completedAt: new Date().toISOString(),
      };
      onComplete(result);
    }
  }, [questions, current, selectedAnswers, answers, onComplete, timeSpent]);

  // Handle previous question
  const handlePrevious = useCallback(() => {
    if (current > 0) {
      setCurrent(current - 1);
      if (questions) {
        setSelectedAnswers(answers[questions[current - 1].id] || []);
      }
    }
  }, [current, questions, answers]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.target === nextButtonRef.current) {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext]);

  // Format time display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    );
  }

  // Loading state with better accessibility
  if (loading || !questions) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen p-4"
        role="status"
        aria-live="polite"
        aria-label="Loading quiz questions"
      >
        <div className="animate-pulse space-y-4 w-full max-w-2xl">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
        <span className="sr-only">Loading questions...</span>
      </div>
    );
  }

  const q = questions[current];
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / total) * 100;
  const isAnswered = selectedAnswers.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-4 px-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress and Status Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Level {q.level}
              </Badge>
              <div
                className="flex items-center gap-2 text-sm text-gray-600"
                aria-label={`Time elapsed: ${formatTime(timeSpent)}`}
              >
                <Clock className="h-4 w-4" />
                <time>{formatTime(timeSpent)}</time>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-700">
              Question {current + 1} of {total}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress
              value={progress}
              className="h-3"
              aria-label={`Quiz progress: ${Math.round(progress)}% complete`}
            />
            <div className="text-xs text-gray-500 text-right">{Math.round(progress)}% complete</div>
          </div>
        </div>

        {/* Main Quiz Card */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="w-fit flex items-center justify-center gap-2">
                <span className="text-sm">Level {q.level}</span>
              </Badge>

              {/* Answer Type Indicator */}
              <Badge variant="outline" className="w-fit flex items-center gap-2 text-gray-600">
                {q.multi ? (
                  <>
                    <CheckSquare className="h-3.5 w-3.5" />
                    Multiple Answers
                  </>
                ) : (
                  <>
                    <Circle className="h-3.5 w-3.5" />
                    Single Answer
                  </>
                )}
              </Badge>
            </div>

            <CardTitle
              ref={questionRef}
              tabIndex={-1}
              className="text-xl md:text-2xl font-medium text-gray-800 whitespace-pre-line"
            >
              {q.question}
            </CardTitle>

            {/* Instruction Text */}
            <div className="text-sm text-gray-600">
              <div className="flex items-center gap-2">
                {q.multi ? (
                  <>
                    <CheckSquare className="h-4 w-4" />
                    <span>Select all correct answers</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-4 w-4" />
                    <span>Select the best answer</span>
                  </>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Validation Message */}
            {showValidation && (
              <Alert variant="destructive" role="alert">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please select {q.multi ? "at least one answer" : "an answer"} before continuing.
                </AlertDescription>
              </Alert>
            )}

            {/* Answer Options */}
            <fieldset className="space-y-3">
              <legend className="sr-only">Answer options for question {current + 1}</legend>

              {q.multi ? (
                // Multiple Choice with Checkboxes
                <div className="space-y-3" role="group" aria-labelledby="current-question">
                  {q.options.map((opt, index) => (
                    <label
                      key={opt.id}
                      ref={index === 0 ? firstOptionRef : null}
                      className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200
                               hover:border-blue-300 hover:bg-blue-50 transition-all duration-200
                               cursor-pointer focus-within:ring-2 focus-within:ring-blue-500
                               focus-within:ring-offset-2 group"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          const isChecked = selectedAnswers.includes(opt.id);
                          const newAnswers = isChecked
                            ? selectedAnswers.filter((id) => id !== opt.id)
                            : [...selectedAnswers, opt.id];
                          handleAnswer(newAnswers);
                        }
                      }}
                      style={{ minHeight: "48px" }} // WCAG minimum target size
                    >
                      <Checkbox
                        id={opt.id}
                        checked={selectedAnswers.includes(opt.id)}
                        onCheckedChange={(checked) => {
                          const newAnswers = checked
                            ? [...selectedAnswers, opt.id]
                            : selectedAnswers.filter((id) => id !== opt.id);
                          handleAnswer(newAnswers);
                        }}
                        className="mt-1 h-5 w-5"
                        aria-describedby={`option-${opt.id}-text`}
                      />
                      <span
                        id={`option-${opt.id}-text`}
                        className="flex-1 text-gray-700 group-hover:text-gray-900 leading-relaxed whitespace-pre-line"
                      >
                        {opt.text}
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                // Single Choice with Radio Buttons
                <RadioGroup
                  value={selectedAnswers[0] || ""}
                  onValueChange={(val) => handleAnswer(val)}
                  className="space-y-3"
                  aria-labelledby="current-question"
                >
                  {q.options.map((opt, index) => (
                    <label
                      key={opt.id}
                      ref={index === 0 ? firstOptionRef : null}
                      className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200
                               hover:border-blue-300 hover:bg-blue-50 transition-all duration-200
                               cursor-pointer focus-within:ring-2 focus-within:ring-blue-500
                               focus-within:ring-offset-2 group"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleAnswer(opt.id);
                        }
                      }}
                      style={{ minHeight: "48px" }} // WCAG minimum target size
                    >
                      <RadioGroupItem
                        value={opt.id}
                        id={opt.id}
                        className="mt-1 h-5 w-5"
                        aria-describedby={`option-${opt.id}-text`}
                      />
                      <span
                        id={`option-${opt.id}-text`}
                        className="flex-1 text-gray-700 group-hover:text-gray-900 leading-relaxed whitespace-pre-line"
                      >
                        {opt.text}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              )}
            </fieldset>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6">
            {/* Previous Button */}
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={current === 0}
              className="w-full sm:w-auto min-h-[48px]" // WCAG minimum target size
            >
              Previous
            </Button>

            {/* Next/Finish Button */}
            <Button
              ref={nextButtonRef}
              onClick={handleNext}
              disabled={!isAnswered}
              className="w-full sm:flex-1 min-h-[48px] font-medium" // WCAG minimum target size
              aria-describedby={showValidation ? "validation-message" : undefined}
            >
              {current < total - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Finish Quiz"
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Keyboard Shortcuts Help */}
        <div className="mt-4 text-center">
          <details className="inline-block text-sm text-gray-600">
            <summary className="cursor-pointer hover:text-gray-800">Keyboard shortcuts</summary>
            <div className="mt-2 text-xs bg-gray-50 p-3 rounded-lg max-w-md mx-auto">
              <p>
                <kbd className="px-1 bg-gray-200 rounded">Tab</kbd> to navigate
              </p>
              <p>
                <kbd className="px-1 bg-gray-200 rounded">Space/Enter</kbd> to select
              </p>
              <p>
                <kbd className="px-1 bg-gray-200 rounded">Enter</kbd> on Next button to continue
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
