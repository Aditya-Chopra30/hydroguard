import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../Pages/Home';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMsg(''); // Clear error message when email changes
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMsg(''); // Clear error message when password changes
  };

  const validateForm = () => {
    let isValid = true;
    setErrorMsg(''); // Clear any previous errors

    if (!email) {
      isValid = false;
      setErrorMsg('Please enter your email address.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      setErrorMsg('Please enter a valid email address.');
    }

    if (!password) {
      isValid = false;
      setErrorMsg('Please enter your password.');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) {
      return; // Don't submit if form is invalid
    }

    // Simulate login API call (replace with actual login logic)
    console.log(`Email: ${email}, Password: ${password}`);

    // Assuming successful login, redirect to home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form className="max-w-md bg-white p-8 rounded shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 font-bold text-center">Login to Your Account</h2>
        {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
        <div className="mb-4">
          <label htmlFor="email_field" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email_field"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password_field" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password_field"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
