import React, { useState } from 'react';
import { Brain, Github, Twitter } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#4285f4]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Puzzlr</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-200">Home</a>
              <a href="#" className="text-white hover:text-gray-200">About us</a>
              <a href="#" className="text-white hover:text-gray-200">Pricing</a>
              <a href="#" className="text-white hover:text-gray-200">Request demo</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-32 text-center">
            <h1 className="text-4xl font-bold mb-6">
              puzzlr is a game studio
              <br />
              <span className="inline-block mt-4">
                designed for{' '}
                <span className="bg-[#4285f4] px-4 py-1 ml-1">news orgs.</span>
              </span>
            </h1>
            <p className="text-base text-gray-300 mb-12 max-w-3xl mx-auto">
              Our goal is to help you boost conversions to paid subscriptions, deepen reader loyalty, 
              and drive engagement across desktop, mobile, and app platforms.
            </p>

            {/* Email Signup Form */}
            <div className="max-w-md mx-auto">
              {submitted ? (
                <div className="bg-[#4285f4]/10 p-4 rounded-lg">
                  <p className="text-[#4285f4]">Thanks for your interest! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#4285f4] text-white rounded-lg hover:bg-[#4285f4]/90 transition-colors"
                  >
                    Request a demo
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 py-16">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#4285f4]">Subscription Growth</h3>
              <p className="text-gray-300">Convert casual readers into loyal subscribers through engaging game experiences.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#4285f4]">Reader Engagement</h3>
              <p className="text-gray-300">Keep your audience coming back with daily interactive content and challenges.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-[#4285f4]">Cross-Platform</h3>
              <p className="text-gray-300">Seamless experience across desktop, mobile, and your existing news apps.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-[#4285f4]" />
              <span className="ml-2 text-lg font-semibold text-white">Puzzlr</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Puzzlr. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;