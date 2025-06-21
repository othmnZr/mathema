import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Trophy, TrendingUp, Award, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const levels = [
    {
      id: 'beginner',
      title: 'Beginner Level',
      description: 'Master basic arithmetic and fundamental concepts',
      icon: BookOpen,
      color: 'green',
      progress: user.progress.beginner,
      topics: ['Addition & Subtraction', 'Basic Word Problems', 'Number Recognition']
    },
    {
      id: 'intermediate',
      title: 'Intermediate Level',
      description: 'Build skills with multiplication, division, and geometry',
      icon: Target,
      color: 'blue',
      progress: user.progress.intermediate,
      topics: ['Multiplication Tables', 'Division Operations', 'Basic Geometry']
    },
    {
      id: 'advanced',
      title: 'Advanced Level',
      description: 'Challenge yourself with fractions, decimals, and algebra',
      icon: Trophy,
      color: 'purple',
      progress: user.progress.advanced,
      topics: ['Fractions & Decimals', 'Basic Algebra', 'Advanced Word Problems']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100 text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        progress: 'bg-green-500'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        progress: 'bg-blue-500'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        progress: 'bg-purple-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const overallProgress = Math.round((user.progress.beginner + user.progress.intermediate + user.progress.advanced) / 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">Ready to continue your math mastery journey?</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
                </div>
                <p className="text-sm text-gray-600">Overall Progress</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-yellow-600 mr-2" />
                  <span className="text-2xl font-bold text-yellow-600">
                    {Object.values(user.progress).filter(p => p >= 80).length}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Levels Mastered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            Your Learning Progress
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level) => {
              const colors = getColorClasses(level.color);
              return (
                <div key={level.id} className="text-center">
                  <div className={`p-3 rounded-full w-fit mx-auto mb-2 ${colors.icon}`}>
                    <level.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{level.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full ${colors.progress} transition-all duration-500`}
                      style={{ width: `${level.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{level.progress}% Complete</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Levels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level) => {
            const colors = getColorClasses(level.color);
            return (
              <div
                key={level.id}
                className={`bg-white rounded-xl shadow-lg p-8 border-2 ${colors.border} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`p-4 rounded-full w-fit mb-6 ${colors.icon}`}>
                  <level.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.title}</h3>
                <p className="text-gray-600 mb-6">{level.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {level.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-gray-400 rounded-full mr-3"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-700">{level.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${colors.progress} transition-all duration-500`}
                      style={{ width: `${level.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Link
                  to={`/training/${level.id}`}
                  className={`w-full text-white py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${colors.button}`}
                >
                  {level.progress === 0 ? 'Start Training' : 'Continue Training'}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Keep Up the Great Work!</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">{overallProgress}%</div>
                <div className="text-blue-100">Overall Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {Object.values(user.progress).reduce((acc, val) => acc + (val > 0 ? 1 : 0), 0)}
                </div>
                <div className="text-blue-100">Levels Started</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {Object.values(user.progress).filter(p => p >= 100).length}
                </div>
                <div className="text-blue-100">Levels Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;