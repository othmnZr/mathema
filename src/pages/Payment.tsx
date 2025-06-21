import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Payment: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { updateUserPayment } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      updateUserPayment();
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Complete Your Purchase</h2>
                <p className="text-blue-100">Get full access to Math Mastery training</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete access to all three training levels</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Interactive quizzes and exercises</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Progress tracking and analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Instant feedback and explanations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lifetime access to all content</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-900">Math Mastery Complete Course</span>
                <span className="text-2xl font-bold text-blue-600">$29.99</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-2" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>Demo Mode:</strong> This is a demonstration. Click "Complete Payment" to simulate 
                the payment process and access the full training dashboard.
              </p>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                'Complete Payment - $29.99'
              )}
            </button>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-1" />
                <span>Secure payment powered by industry-standard encryption</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            For Stripe integration setup, visit:{' '}
            <a 
              href="https://bolt.new/setup/stripe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              https://bolt.new/setup/stripe
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;