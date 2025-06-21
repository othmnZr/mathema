import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Star, Users, Trophy, BookOpen, Target, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Calculator className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Master Mathematics with
            <span className="text-blue-600 block">Interactive Training</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your math skills with our comprehensive training platform. 
            From basic arithmetic to advanced concepts, we make learning mathematics engaging and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Training Now
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Training Level
          </h2>
          <p className="text-xl text-gray-600">
            Start where you're comfortable and progress at your own pace
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beginner</h3>
            <p className="text-gray-600 mb-6">
              Perfect for starting your math journey. Cover basic arithmetic, simple equations, and fundamental concepts.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Addition & Subtraction
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Basic Word Problems
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Number Recognition
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Intermediate</h3>
            <p className="text-gray-600 mb-6">
              Build on your foundation with multiplication, division, and more complex problem-solving skills.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                Multiplication Tables
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                Division Operations
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                Basic Geometry
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
              <Trophy className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced</h3>
            <p className="text-gray-600 mb-6">
              Challenge yourself with fractions, decimals, algebra basics, and advanced problem-solving.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                Fractions & Decimals
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                Basic Algebra
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                Advanced Word Problems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Math Mastery?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the most effective way to learn mathematics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with interactive quizzes and exercises that make learning fun and effective.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Progress</h3>
              <p className="text-gray-600">
                Track your progress and focus on areas that need improvement with our smart system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Content</h3>
              <p className="text-gray-600">
                Learn from carefully crafted content designed by math education experts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Achievement System</h3>
              <p className="text-gray-600">
                Earn achievements and track milestones as you master each concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of students who have improved their math skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Math Mastery completely changed how I understand mathematics. The interactive exercises made learning so much more engaging!"
            </p>
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-gray-600">High School Student</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "I went from struggling with basic math to confidently solving complex problems. The progress tracking kept me motivated!"
            </p>
            <div className="font-semibold text-gray-900">Michael Chen</div>
            <div className="text-gray-600">College Student</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "As a parent, I love how this platform makes math fun for my kids. They actually ask to do their math practice now!"
            </p>
            <div className="font-semibold text-gray-900">Emily Rodriguez</div>
            <div className="text-gray-600">Parent</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Master Mathematics?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have already transformed their math skills
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;