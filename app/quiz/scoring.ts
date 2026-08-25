interface QuizAnswer {
  questionId: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
  timeSpentMs: number;
}

interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  passingThreshold: number;
  passed: boolean;
  totalTimeMs: number;
}

export function calculateQuizScore(answers: QuizAnswer[], passingThreshold = 0.7): QuizResult {
  const total = answers.length;
  const correct = answers.filter(a => a.isCorrect).length;
  const score = total > 0 ? correct / total : 0;
  return {
    totalQuestions: total,
    correctAnswers: correct,
    score,
    passingThreshold,
    passed: score >= passingThreshold,
    totalTimeMs: answers.reduce((sum, a) => sum + a.timeSpentMs, 0),
  };
}

export function formatScore(score: number): string {
  return `${Math.round(score * 100)}%`;
}

export function getGrade(score: number): string {
  if (score >= 0.9) return 'A';
  if (score >= 0.8) return 'B';
  if (score >= 0.7) return 'C';
  if (score >= 0.6) return 'D';
  return 'F';
}
