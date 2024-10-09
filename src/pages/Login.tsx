import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
      </p>
    </div>
  );
};

export default Login;