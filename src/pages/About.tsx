import React from 'react';
import { Target, Users, Award, BookOpen, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Math Mastery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're on a mission to make mathematics accessible, engaging, and enjoyable for students of all ages. 
              Our interactive platform transforms the way people learn math.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Math Mastery, we believe that every student has the potential to excel in mathematics. 
                Our goal is to break down barriers and make math learning intuitive, interactive, and inspiring.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We combine proven educational methods with modern technology to create a learning experience 
                that adapts to each student's pace and learning style.
              </p>
              <div className="flex items-center text-blue-600">
                <Heart className="h-6 w-6 mr-2" />
                <span className="font-medium">Empowering students to succeed in mathematics</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    10K+
                  </div>
                  <p className="text-gray-700 font-medium">Students Helped</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    95%
                  </div>
                  <p className="text-gray-700 font-medium">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    3
                  </div>
                  <p className="text-gray-700 font-medium">Learning Levels</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    24/7
                  </div>
                  <p className="text-gray-700 font-medium">Accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Math Mastery Works</h2>
            <p className="text-xl text-gray-600">
              Our structured approach ensures effective learning at every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start at Your Level</h3>
              <p className="text-gray-600">
                Choose from Beginner, Intermediate, or Advanced levels based on your current math skills and comfort zone.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Practice</h3>
              <p className="text-gray-600">
                Engage with interactive quizzes, exercises, and real-time feedback to reinforce your learning.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your improvement with detailed progress tracking and personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Love Math Mastery</h2>
            <p className="text-xl text-gray-600">
              Features designed to make math learning effective and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
                <p className="text-gray-600">
                  Our platform adapts to your learning pace and provides personalized challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Achievement System</h3>
                <p className="text-gray-600">
                  Earn badges and track milestones as you progress through different levels.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Progress Analytics</h3>
                <p className="text-gray-600">
                  Detailed insights into your strengths and areas for improvement.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Content</h3>
                <p className="text-gray-600">
                  Curriculum designed by mathematics education professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                <p className="text-gray-600">
                  Get immediate explanations and corrections to learn from mistakes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-lg mr-4 flex-shrink-0">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Engaging Experience</h3>
                <p className="text-gray-600">
                  Interactive elements and gamification make learning enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Math Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have already discovered the joy of learning mathematics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;