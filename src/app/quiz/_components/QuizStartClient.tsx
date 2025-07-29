"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
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
  name: z.string().min(2, "Name is required"),
  designation: z.string().min(2, "Designation is required"),
  city: z.string().min(2, "City is required"),
});

type PlayerInfo = z.infer<typeof playerSchema>;
type Attempt = {
  id: string;
  date: string;
  score: number;
  level: number;
  details: any;
};

function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

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
    if (isCorrect) score++;
    if (isCorrect && q.level > lastLevel) lastLevel = q.level;
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

function ResultCard({ result, onBack }: { result: any; onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-2xl mb-8">
        <CardHeader>
          <CardTitle>Quiz Result / Certification</CardTitle>
          <CardDescription>
            Score:{" "}
            <span className="font-bold">
              {result.score} / {result.max}
            </span>{" "}
            &mdash; Highest Level: <span className="font-bold">{result.level}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 text-sm text-muted-foreground">
            Below is your answer transcript. Correct answers are{" "}
            <span className="text-green-600">green</span>, wrong are{" "}
            <span className="text-red-600">red</span>.
          </div>
          <Accordion type="multiple" className="w-full">
            {result.details.map((d: any, i: number) => (
              <AccordionItem key={i} value={"q" + i}>
                <AccordionTrigger>
                  <span className={d.isCorrect ? "text-green-600" : "text-red-600"}>
                    Q{i + 1}: {d.question.slice(0, 60)}
                    {d.question.length > 60 ? "..." : ""}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-2">
                    <div className="font-medium">Question:</div>
                    <div className="whitespace-pre-line mb-2">{d.question}</div>
                    <div className="font-medium">Your Answer:</div>
                    <ul className="mb-2">
                      {d.user.length === 0 ? (
                        <li className="text-red-600">No answer</li>
                      ) : (
                        d.user.map((id: string) => {
                          const opt = d.options.find((o: any) => o.id === id);
                          return <li key={id}>{opt ? opt.text : id}</li>;
                        })
                      )}
                    </ul>
                    <div className="font-medium">Correct Answer:</div>
                    <ul className="mb-2">
                      {d.correct.map((id: string) => {
                        const opt = d.options.find((o: any) => o.id === id);
                        return <li key={id}>{opt ? opt.text : id}</li>;
                      })}
                    </ul>
                    <div className="font-medium">Explanation:</div>
                    <div className="text-xs text-muted-foreground mb-2">{d.explanation}</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={onBack}>
            Back to Start
          </Button>
          <Button className="w-full print:hidden" onClick={() => window.print()}>
            Print / Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function QuizStartClient() {
  const [player, setPlayer] = useState<PlayerInfo | null>(null);
  const [history, setHistory] = useState<Attempt[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setPlayer(getLocal("quiz_player", null));
    setHistory(getLocal("quiz_history", []));
  }, []);

  // Form setup
  const form = useForm<PlayerInfo>({
    resolver: zodResolver(playerSchema),
    defaultValues: { name: "", designation: "", city: "" },
  });

  function onSubmit(data: PlayerInfo) {
    setPlayer(data);
    setLocal("quiz_player", data);
    setShowForm(false);
  }

  function handleStartGame() {
    setGameStarted(true);
    setResult(null);
  }

  function handleShowForm() {
    setShowForm(true);
  }

  function handleQuizComplete({ answers, questions }: any) {
    // Calculate score, level, details
    const res = calculateScore(questions, answers);
    setResult(res);
    setGameStarted(false);
    // Save to history
    const attempt: Attempt = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score: res.score,
      level: res.level,
      details: res.details,
    };
    const newHistory = [attempt, ...history].slice(0, 20); // keep last 20
    setHistory(newHistory);
    setLocal("quiz_history", newHistory);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-teal-50 p-4">
      <Card className="w-full max-w-md mb-8">
        <CardHeader>
          <CardTitle>JavaScript Quiz Game</CardTitle>
          <CardDescription>
            Test your JS, Node.js, and System Design skills!
            <br />
            <span className="text-xs text-red-500">
              If you refresh or close the tab, your current progress will be lost and a new game
              will start.
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {player && !showForm ? (
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name:</span> {player.name}
              </div>
              <div>
                <span className="font-medium">Designation:</span> {player.designation}
              </div>
              <div>
                <span className="font-medium">City:</span> {player.city}
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" autoComplete="off">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select designation" />
                          </SelectTrigger>
                          <SelectContent>
                            {DESIGNATIONS.map((d) => (
                              <SelectItem key={d} value={d}>
                                {d}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Save & Continue
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          {player && !showForm && (
            <Button className="w-full" onClick={handleStartGame}>
              Start New Game
            </Button>
          )}
          {player && !showForm && (
            <Button variant="outline" className="w-full" onClick={handleShowForm}>
              Update Info
            </Button>
          )}
        </CardFooter>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Previous Attempts</CardTitle>
        </CardHeader>
        <CardContent>
          {history.length === 0 ? (
            <div className="text-muted-foreground text-sm">No attempts yet.</div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {history.map((attempt) => (
                <AccordionItem key={attempt.id} value={attempt.id}>
                  <AccordionTrigger>
                    <div className="flex justify-between w-full">
                      <span>{new Date(attempt.date).toLocaleString()}</span>
                      <span className="font-semibold">Score: {attempt.score}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-xs text-muted-foreground">
                      Highest Level: {attempt.level}
                      <br />
                      (Click to expand/collapse)
                    </div>
                    <Accordion type="multiple" className="w-full mt-2">
                      {attempt.details.map((d: any, i: number) => (
                        <AccordionItem key={i} value={"q" + i}>
                          <AccordionTrigger>
                            <span className={d.isCorrect ? "text-green-600" : "text-red-600"}>
                              Q{i + 1}: {d.question.slice(0, 60)}
                              {d.question.length > 60 ? "..." : ""}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="mb-2">
                              <div className="font-medium">Question:</div>
                              <div className="whitespace-pre-line mb-2">{d.question}</div>
                              <div className="font-medium">Your Answer:</div>
                              <ul className="mb-2">
                                {d.user.length === 0 ? (
                                  <li className="text-red-600">No answer</li>
                                ) : (
                                  d.user.map((id: string) => {
                                    const opt = d.options.find((o: any) => o.id === id);
                                    return <li key={id}>{opt ? opt.text : id}</li>;
                                  })
                                )}
                              </ul>
                              <div className="font-medium">Correct Answer:</div>
                              <ul className="mb-2">
                                {d.correct.map((id: string) => {
                                  const opt = d.options.find((o: any) => o.id === id);
                                  return <li key={id}>{opt ? opt.text : id}</li>;
                                })}
                              </ul>
                              <div className="font-medium">Explanation:</div>
                              <div className="text-xs text-muted-foreground mb-2">
                                {d.explanation}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
