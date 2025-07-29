import { Suspense } from "react";
import QuizStartClient from "./_components/QuizStartClient";

// Loading component for Suspense
function QuizLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600">Loading quiz game...</p>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <main role="main" aria-label="JavaScript Quiz Game">
      <Suspense fallback={<QuizLoading />}>
        <QuizStartClient />
      </Suspense>
    </main>
  );
}
