import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'beginner-1',
    title: 'Basic Addition & Subtraction',
    description: 'Master the fundamentals of addition and subtraction',
    level: 'beginner',
    questions: [
      {
        id: '1',
        question: 'What is 5 + 3?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '5 + 3 = 8. When adding, we combine the values together.',
        level: 'beginner'
      },
      {
        id: '2',
        question: 'What is 12 - 7?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: '12 - 7 = 5. When subtracting, we take away the second number from the first.',
        level: 'beginner'
      },
      {
        id: '3',
        question: 'What is 9 + 6?',
        options: ['14', '15', '16', '17'],
        correctAnswer: 1,
        explanation: '9 + 6 = 15. Breaking it down: 9 + 6 = 9 + 1 + 5 = 10 + 5 = 15.',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'intermediate-1',
    title: 'Multiplication & Division',
    description: 'Learn multiplication tables and division operations',
    level: 'intermediate',
    questions: [
      {
        id: '1',
        question: 'What is 7 × 8?',
        options: ['54', '56', '58', '60'],
        correctAnswer: 1,
        explanation: '7 × 8 = 56. This is a key multiplication fact to memorize.',
        level: 'intermediate'
      },
      {
        id: '2',
        question: 'What is 72 ÷ 9?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '72 ÷ 9 = 8. Think: what number times 9 equals 72? 9 × 8 = 72.',
        level: 'intermediate'
      },
      {
        id: '3',
        question: 'What is 6 × 12?',
        options: ['70', '72', '74', '76'],
        correctAnswer: 1,
        explanation: '6 × 12 = 72. You can think of it as 6 × 10 + 6 × 2 = 60 + 12 = 72.',
        level: 'intermediate'
      }
    ]
  },
  {
    id: 'advanced-1',
    title: 'Fractions & Decimals',
    description: 'Master fractions, decimals, and their operations',
    level: 'advanced',
    questions: [
      {
        id: '1',
        question: 'What is 3/4 + 1/8?',
        options: ['7/8', '4/12', '5/8', '1/2'],
        correctAnswer: 0,
        explanation: '3/4 + 1/8 = 6/8 + 1/8 = 7/8. Convert 3/4 to eighths: 3/4 = 6/8.',
        level: 'advanced'
      },
      {
        id: '2',
        question: 'What is 0.75 as a fraction in lowest terms?',
        options: ['75/100', '3/4', '7/10', '15/20'],
        correctAnswer: 1,
        explanation: '0.75 = 75/100 = 3/4 when reduced to lowest terms (dividing by 25).',
        level: 'advanced'
      },
      {
        id: '3',
        question: 'What is 2.5 × 1.2?',
        options: ['2.8', '3.0', '3.2', '3.5'],
        correctAnswer: 1,
        explanation: '2.5 × 1.2 = 3.0. You can calculate: 25 × 12 = 300, then place the decimal to get 3.00.',
        level: 'advanced'
      }
    ]
  }
];