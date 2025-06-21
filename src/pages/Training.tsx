import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { quizzes } from '../data/quizzes';
import { Quiz, Question } from '../types';

const Training: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const { updateProgress } = useAuth();
  
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (level) {
      const quiz = quizzes.find(q => q.level === level);
      if (quiz) {
        setCurrentQuiz(quiz);
        setAnswers(new Array(quiz.questions.length).fill(null));
      }
    }
  }, [level]);

  if (!currentQuiz || !level) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1]);
      setShowExplanation(false);
    }
  };

  const completeQuiz = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === currentQuiz.questions[index].correctAnswer
    ).length;
    
    const finalScore = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    setScore(finalScore);
    setQuizCompleted(true);
    
    updateProgress(level as 'beginner' | 'intermediate' | 'advanced', finalScore);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers(new Array(currentQuiz.questions.length).fill(null));
    setQuizCompleted(false);
    setScore(0);
  };

  const getLevelColor = (level: string) => {
    const colors = {
      beginner: 'green',
      intermediate: 'blue',
      advanced: 'purple'
    };
    return colors[level as keyof typeof colors] || 'blue';
  };

  const levelColor = getLevelColor(level);

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className={`bg-${levelColor}-100 p-4 rounded-full w-fit mx-auto mb-6`}>
              <Trophy className={`h-12 w-12 text-${levelColor}-600`} />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
            <p className="text-xl text-gray-600 mb-8">
              You've finished the <strong>{currentQuiz.title}</strong> quiz
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
              <div className="text-gray-700">Your Score</div>
              <div className="mt-4 text-sm text-gray-600">
                {answers.filter((answer, index) => answer === currentQuiz.questions[index].correctAnswer).length} out of {currentQuiz.questions.length} correct
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Try Again
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className={`bg-${levelColor}-600 text-white px-6 py-3 rounded-lg hover:bg-${levelColor}-700 transition-colors`}
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{currentQuiz.title}</h1>
            <span className="text-gray-600">
              Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-${levelColor}-500 transition-all duration-300`}
              style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
              
              if (showExplanation) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 text-gray-500";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += `border-${levelColor}-500 bg-${levelColor}-50 hover:bg-${levelColor}-100`;
                } else {
                  buttonClass += "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showExplanation}
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-4">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Explanation:</h3>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            <div className="text-gray-600">
              {answers.filter(a => a !== null).length} of {currentQuiz.questions.length} answered
            </div>
            
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`bg-${levelColor}-600 text-white px-6 py-3 rounded-lg hover:bg-${levelColor}-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className={`bg-${levelColor}-600 text-white px-6 py-3 rounded-lg hover:bg-${levelColor}-700 transition-colors`}
              >
                {isLastQuestion ? 'Complete Quiz' : 'Next Question'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;