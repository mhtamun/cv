"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";

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

export default function QuizGameClient({ onComplete }: { onComplete: (result: any) => void }) {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [qid: string]: string[] }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/quiz/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  if (loading || !questions) {
    return <div className="text-center py-10">Loading questions...</div>;
  }

  const q = questions[current];
  const total = questions.length;

  function handleAnswer(selected: string | string[]) {
    setAnswers((prev) => ({ ...prev, [q.id]: Array.isArray(selected) ? selected : [selected] }));
  }

  function handleNext() {
    if (current < total - 1) {
      setCurrent(current + 1);
    } else {
      // Quiz complete
      const result = { answers, questions };
      onComplete(result);
    }
  }

  // For multi-answer, use checkbox; for single, use radio
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-xl mb-8">
        <CardHeader>
          <CardTitle>
            Level {q.level} &mdash; Question {current + 1} / {total}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 whitespace-pre-line font-medium">{q.question}</div>
          {q.multi ? (
            <div>
              <div className="mb-2 text-sm text-muted-foreground">(Select all that apply)</div>
              {q.options.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <Checkbox
                    checked={answers[q.id]?.includes(opt.id) || false}
                    onCheckedChange={(checked) => {
                      let arr = answers[q.id] || [];
                      if (checked) arr = [...arr, opt.id];
                      else arr = arr.filter((id) => id !== opt.id);
                      handleAnswer(arr);
                    }}
                  />
                  <span>{opt.text}</span>
                </label>
              ))}
            </div>
          ) : (
            <RadioGroup value={answers[q.id]?.[0] || ""} onValueChange={(val) => handleAnswer(val)}>
              {q.options.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <RadioGroupItem value={opt.id} />
                  <span>{opt.text}</span>
                </label>
              ))}
            </RadioGroup>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="ml-auto"
            disabled={!answers[q.id] || answers[q.id].length === 0}
            onClick={handleNext}
          >
            {current < total - 1 ? "Next" : "Finish"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
