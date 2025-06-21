export interface User {
  id: string;
  name: string;
  email: string;
  hasPaid: boolean;
  progress: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  level: 'beginner' | 'intermediate' | 'advanced';
}