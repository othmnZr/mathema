import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Training from './pages/Training';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/payment" 
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requirePayment>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/training/:level" 
              element={
                <ProtectedRoute requirePayment>
                  <Training />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;