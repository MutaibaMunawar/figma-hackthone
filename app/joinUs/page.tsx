import React from 'react';

const JoinUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <img src="/nike-logo.png" alt="Nike Logo" className="w-12 mx-auto" />
        <h2 className="text-center text-2xl font-semibold mt-4">Become a Nike Member</h2>
        <p className="text-center text-gray-600 mt-2">Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.</p>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              name="dob" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <select 
              id="country" 
              name="country" 
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" 
              required
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" name="gender" value="male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" required /> Female
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              Sign up for updates from Nike on products&apos; offers&apos; and services
            </label>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            By creating an account&apos; you agree to Nike's <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Use</a>.
          </p>

          <button 
            type="submit" 
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            Join Us
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
