"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Edit3,
  MapPin,
  Play,
  Target,
  Trophy,
  User,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import QuizGameClient from "./QuizGameClient";

const DESIGNATIONS = [
  "Student",
  "Intern",
  "Junior Developer",
  "Software Engineer",
  "Senior Software Engineer",
  "Tech Lead",
  "Engineering Manager",
  "Architect",
  "CTO",
  "Freelancer",
  "Other",
];

const playerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  designation: z.string().min(1, "Please select a designation"),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be less than 50 characters"),
});

type PlayerInfo = z.infer<typeof playerSchema>;
type Attempt = {
  id: string;
  date: string;
  score: number;
  level: number;
  details: any;
  timeSpent?: number;
};

// Local storage helpers with error handling
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (error) {
    console.warn(`Failed to parse localStorage item "${key}":`, error);
    return fallback;
  }
}

function setLocal<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to save to localStorage "${key}":`, error);
  }
}

// Score calculation with enhanced details
function calculateScore(
  questions: any[],
  answers: Record<string, string[]>
): { score: number; max: number; level: number; details: any[] } {
  let score = 0;
  let max = questions.length;
  let lastLevel = 1;

  const details = questions.map((q, idx) => {
    const userAns = answers[q.id] || [];
    const correct = q.correct.sort().join(",");
    const user = userAns.sort().join(",");
    const isCorrect = correct === user;

    if (isCorrect) {
      score++;
      if (q.level > lastLevel) lastLevel = q.level;
    }

    return {
      idx: idx + 1,
      question: q.question,
      options: q.options,
      correct: q.correct,
      user: userAns,
      explanation: q.explanation,
      multi: q.multi,
      isCorrect,
      level: q.level,
    };
  });

  return { score, max, level: lastLevel, details };
}

// Enhanced Result Card Component
function ResultCard({ result, onBack }: { result: any; onBack: () => void }) {
  const percentage = Math.round((result.score / result.max) * 100);
  const correctAnswers = result.details.filter((d: any) => d.isCorrect).length;
  const incorrectAnswers = result.details.filter((d: any) => !d.isCorrect).length;

  // Performance level based on score
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: "Excellent", color: "bg-green-500", icon: Trophy };
    if (percentage >= 75) return { level: "Good", color: "bg-blue-500", icon: Target };
    if (percentage >= 60) return { level: "Average", color: "bg-yellow-500", icon: BarChart3 };
    return { level: "Needs Improvement", color: "bg-red-500", icon: AlertTriangle };
  };

  const performance = getPerformanceLevel(percentage);
  const PerformanceIcon = performance.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-4 px-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-full ${performance.color} text-white`}>
                <PerformanceIcon className="h-8 w-8" />
              </div>
            </div>

            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
              Quiz Complete!
            </CardTitle>

            <CardDescription className="text-lg">
              You scored{" "}
              <span className="font-bold text-xl text-gray-900">
                {result.score} / {result.max}
              </span>{" "}
              ({percentage}%)
            </CardDescription>

            <Badge
              variant="secondary"
              className={`text-sm font-medium ${performance.color} text-white border-0 mt-2`}
            >
              {performance.level}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-green-700">{correctAnswers}</div>
                <div className="text-sm text-green-600">Correct</div>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-lg">
                <XCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-red-700">{incorrectAnswers}</div>
                <div className="text-sm text-red-600">Incorrect</div>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-blue-700">{result.level}</div>
                <div className="text-sm text-blue-600">Max Level</div>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-purple-700">
                  {result.timeSpent ? Math.round(result.timeSpent / 60) : "N/A"}
                </div>
                <div className="text-sm text-purple-600">Minutes</div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Overall Performance</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-3" />
            </div>

            {/* Detailed Results */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Detailed Results
              </h3>

              <Alert className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Review your answers below. Correct answers are{" "}
                  <span className="text-green-600 font-medium">highlighted in green</span>,
                  incorrect ones in <span className="text-red-600 font-medium">red</span>.
                </AlertDescription>
              </Alert>

              <Accordion type="multiple" className="w-full">
                {result.details.map((d: any, i: number) => (
                  <AccordionItem
                    key={i}
                    value={`q${i}`}
                    className="border border-gray-200 rounded-lg mb-2"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center gap-3 w-full">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                            d.isCorrect ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span
                          className={`text-left flex-1 ${
                            d.isCorrect ? "text-green-700" : "text-red-700"
                          }`}
                        >
                          {d.question.slice(0, 80)}
                          {d.question.length > 80 ? "..." : ""}
                        </span>
                        <Badge
                          variant={d.isCorrect ? "default" : "destructive"}
                          className="text-xs"
                        >
                          Level {d.level}
                        </Badge>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Question:</h4>
                          <p className="text-gray-700 whitespace-pre-line">{d.question}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Your Answer:</h4>
                            <div className="space-y-1">
                              {d.user.length === 0 ? (
                                <div className="text-red-600 italic">No answer selected</div>
                              ) : (
                                d.user.map((id: string) => {
                                  const opt = d.options.find((o: any) => o.id === id);
                                  return (
                                    <div key={id} className="text-gray-700 bg-gray-50 p-2 rounded">
                                      {opt ? opt.text : id}
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Correct Answer:</h4>
                            <div className="space-y-1">
                              {d.correct.map((id: string) => {
                                const opt = d.options.find((o: any) => o.id === id);
                                return (
                                  <div
                                    key={id}
                                    className="text-green-700 bg-green-50 p-2 rounded font-medium"
                                  >
                                    {opt ? opt.text : id}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Explanation:</h4>
                          <p className="text-gray-600 bg-blue-50 p-3 rounded-lg text-sm">
                            {d.explanation}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button onClick={onBack} variant="outline" className="w-full sm:flex-1 min-h-[48px]">
              <Play className="h-4 w-4 mr-2" />
              Take Another Quiz
            </Button>

            <Button
              onClick={() => window.print()}
              className="w-full sm:flex-1 min-h-[48px] print:hidden"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Results
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function QuizStartClient() {
  const [player, setPlayer] = useState<PlayerInfo | null>(null);
  const [history, setHistory] = useState<Attempt[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Refs for focus management
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      setPlayer(getLocal("quiz_player", null));
      setHistory(getLocal("quiz_history", []));
    } catch (error) {
      console.warn("Failed to load data from localStorage:", error);
      setFormError("Failed to load saved data. Please refresh the page.");
    }
  }, []);

  // Form setup with enhanced validation
  const form = useForm<PlayerInfo>({
    resolver: zodResolver(playerSchema),
    defaultValues: { name: "", designation: "", city: "" },
    mode: "onBlur", // Validate on blur for better UX
  });

  // Handle form submission with error handling
  function onSubmit(data: PlayerInfo) {
    try {
      setFormError(null);
      setPlayer(data);
      setLocal("quiz_player", data);
      setShowForm(false);

      // Focus start button after form submission
      setTimeout(() => {
        if (startButtonRef.current) {
          startButtonRef.current.focus();
        }
      }, 100);
    } catch (error) {
      setFormError("Failed to save your information. Please try again.");
    }
  }

  function handleStartGame() {
    setGameStarted(true);
    setResult(null);
  }

  function handleShowForm() {
    setShowForm(true);
    // Focus form after opening
    setTimeout(() => {
      if (formRef.current) {
        const firstInput = formRef.current.querySelector("input");
        if (firstInput) {
          firstInput.focus();
        }
      }
    }, 100);
  }

  function handleQuizComplete({ answers, questions, timeSpent, completedAt }: any) {
    try {
      // Calculate score, level, details
      const res = calculateScore(questions, answers);
      const resultWithTime = { ...res, timeSpent, completedAt };
      setResult(resultWithTime);
      setGameStarted(false);

      // Save to history
      const attempt: Attempt = {
        id: Date.now().toString(),
        date: completedAt || new Date().toISOString(),
        score: res.score,
        level: res.level,
        details: res.details,
        timeSpent,
      };

      const newHistory = [attempt, ...history].slice(0, 20); // keep last 20
      setHistory(newHistory);
      setLocal("quiz_history", newHistory);
    } catch (error) {
      console.error("Failed to save quiz results:", error);
      setFormError("Failed to save quiz results. Your score is still valid.");
    }
  }

  function handleBackToStart() {
    setResult(null);
    setGameStarted(false);
  }

  // Render quiz/game/result or start/history
  if (gameStarted) {
    return <QuizGameClient onComplete={handleQuizComplete} />;
  }

  if (result) {
    return <ResultCard result={result} onBack={handleBackToStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-4 px-4 sm:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Quiz Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                JavaScript Quiz Game
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Test your JS, Node.js, and System Design skills!
              </CardDescription>

              <Alert className="mt-4 text-left">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Important:</strong> If you refresh or close the tab, your current progress
                  will be lost and a new game will start.
                </AlertDescription>
              </Alert>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error Display */}
              {formError && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}

              {/* Player Info or Form */}
              {player && !showForm ? (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Player Information
                  </h3>

                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-700">Name:</span>
                      <span className="text-gray-900">{player.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-700">Role:</span>
                      <span className="text-gray-900">{player.designation}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-700">Location:</span>
                      <span className="text-gray-900">{player.city}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {player ? "Update Information" : "Player Information"}
                  </h3>

                  <Form {...form}>
                    <form
                      ref={formRef}
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                      autoComplete="off"
                      noValidate
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Full Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className="min-h-[48px]" // WCAG minimum target size
                                aria-describedby="name-error"
                              />
                            </FormControl>
                            <FormMessage id="name-error" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              Job Title/Role <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger
                                  className="min-h-[48px]" // WCAG minimum target size
                                  aria-describedby="designation-error"
                                >
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                  {DESIGNATIONS.map((designation) => (
                                    <SelectItem
                                      key={designation}
                                      value={designation}
                                      className="min-h-[48px] flex items-center" // WCAG minimum target size
                                    >
                                      {designation}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage id="designation-error" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                              City <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className="min-h-[48px]" // WCAG minimum target size
                                aria-describedby="city-error"
                              />
                            </FormControl>
                            <FormMessage id="city-error" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full min-h-[48px] font-medium" // WCAG minimum target size
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? "Saving..." : "Save & Continue"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-3 pt-6">
              {player && !showForm && (
                <>
                  <Button
                    ref={startButtonRef}
                    onClick={handleStartGame}
                    className="w-full min-h-[48px] font-medium text-lg" // WCAG minimum target size
                    size="lg"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Start New Quiz
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleShowForm}
                    className="w-full min-h-[48px]" // WCAG minimum target size
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Update Information
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>

          {/* Previous Attempts */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Trophy className="h-5 w-5" />
                Previous Attempts
              </CardTitle>
              <CardDescription>Your quiz history and performance over time</CardDescription>
            </CardHeader>

            <CardContent>
              {history.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No attempts yet.</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Start your first quiz to see results here!
                  </p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {history.map((attempt) => {
                    const percentage = Math.round((attempt.score / attempt.details.length) * 100);
                    const date = new Date(attempt.date);

                    return (
                      <AccordionItem
                        key={attempt.id}
                        value={attempt.id}
                        className="border border-gray-200 rounded-lg"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <div className="flex items-center justify-between w-full">
                            <div className="text-left">
                              <div className="font-medium text-gray-900">
                                {date.toLocaleDateString()} at{" "}
                                {date.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </div>
                              <div className="text-sm text-gray-500">
                                Score: {attempt.score}/{attempt.details.length} • Level{" "}
                                {attempt.level}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  percentage >= 75
                                    ? "default"
                                    : percentage >= 60
                                    ? "secondary"
                                    : "destructive"
                                }
                                className="text-sm font-medium"
                              >
                                {percentage}%
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-4">
                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="bg-green-50 p-3 rounded-lg">
                                <div className="text-lg font-bold text-green-700">
                                  {attempt.details.filter((d: any) => d.isCorrect).length}
                                </div>
                                <div className="text-xs text-green-600">Correct</div>
                              </div>

                              <div className="bg-red-50 p-3 rounded-lg">
                                <div className="text-lg font-bold text-red-700">
                                  {attempt.details.filter((d: any) => !d.isCorrect).length}
                                </div>
                                <div className="text-xs text-red-600">Wrong</div>
                              </div>

                              <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="text-lg font-bold text-blue-700">
                                  {attempt.timeSpent
                                    ? `${Math.round(attempt.timeSpent / 60)}m`
                                    : "N/A"}
                                </div>
                                <div className="text-xs text-blue-600">Time</div>
                              </div>
                            </div>

                            {/* Detailed Questions */}
                            <Accordion type="multiple" className="w-full space-y-1">
                              {attempt.details.map((d: any, i: number) => (
                                <AccordionItem
                                  key={i}
                                  value={`q${i}`}
                                  className="border border-gray-100 rounded"
                                >
                                  <AccordionTrigger className="px-3 py-2 text-sm hover:no-underline">
                                    <span
                                      className={`text-left flex-1 ${
                                        d.isCorrect ? "text-green-700" : "text-red-700"
                                      }`}
                                    >
                                      Q{i + 1}: {d.question.slice(0, 50)}
                                      {d.question.length > 50 ? "..." : ""}
                                    </span>
                                  </AccordionTrigger>

                                  <AccordionContent className="px-3 pb-3 text-xs">
                                    <div className="space-y-2">
                                      <div>
                                        <div className="font-medium text-gray-700">Question:</div>
                                        <div className="text-gray-600">{d.question}</div>
                                      </div>

                                      <div className="grid sm:grid-cols-2 gap-2">
                                        <div>
                                          <div className="font-medium text-gray-700">
                                            Your Answer:
                                          </div>
                                          <div className="text-gray-600">
                                            {d.user.length === 0 ? (
                                              <span className="text-red-600 italic">No answer</span>
                                            ) : (
                                              d.user
                                                .map((id: string) => {
                                                  const opt = d.options.find(
                                                    (o: any) => o.id === id
                                                  );
                                                  return opt ? opt.text : id;
                                                })
                                                .join(", ")
                                            )}
                                          </div>
                                        </div>

                                        <div>
                                          <div className="font-medium text-gray-700">Correct:</div>
                                          <div className="text-green-600">
                                            {d.correct
                                              .map((id: string) => {
                                                const opt = d.options.find((o: any) => o.id === id);
                                                return opt ? opt.text : id;
                                              })
                                              .join(", ")}
                                          </div>
                                        </div>
                                      </div>

                                      <div>
                                        <div className="font-medium text-gray-700">
                                          Explanation:
                                        </div>
                                        <div className="text-gray-600 bg-gray-50 p-2 rounded">
                                          {d.explanation}
                                        </div>
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
