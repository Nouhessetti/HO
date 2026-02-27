import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, MessageSquare, Compass, Info, Settings, Code, Brain, Lightbulb, Mail } from 'lucide-react';
import Contributors from '@/components/Contributors/Contributors';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');

  // Removed the ": React.FormEvent" type annotation
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this to a backend service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section with Neural Background */}
          <section className="text-center max-w-4xl mx-auto relative">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 -z-10 rounded-3xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop)`,
              }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
              
              <div className="absolute inset-0 opacity-30 dark:opacity-40 rounded-3xl">
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-teal-500/30"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 40% 60%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)
                    `,
                    backgroundSize: '60px 60px, 80px 80px, 100px 100px, 120px 120px'
                  }}
                />
                
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                  <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-1/4 right-2/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse delay-75"></div>
                  
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                        <stop offset="100%" stopColor="rgba(20, 184, 166, 0.4)" />
                      </linearGradient>
                    </defs>
                    <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.7" />
                    <line x1="33%" y1="66%" x2="75%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6" />
                    <line x1="75%" y1="25%" x2="33%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative z-10 py-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to Hornet Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                Master the art of coding and advance in understanding profound 
                <span className="block mt-2 text-white font-semibold">
                  algorithmic wisdom through deliberate practice
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Explore Wisdom
                </button>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover how our platform helps you improve your coding skills and connect with others
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-blue-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Step-by-Step Learning</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clear, structured learning paths with progressive difficulty to help you master coding concepts at your own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-green-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect with like-minded developers who share your interests and collaborate on challenging problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-purple-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expert Feedback</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Receive insightful code reviews and suggestions from experienced developers to improve your skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-red-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Compass className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guided Challenges</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tackle real-world coding problems with guided hints and multiple approaches to expand your problem-solving abilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-amber-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Info className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Resources</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access a vast library of tutorials, documentation, and reference materials to support your learning journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden border-2 hover:border-teal-500">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Track your progress, identify improvement areas, and receive custom recommendations tailored to your skill level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Kata Approach Section */}
          <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl my-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  The Kata Approach
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Master your coding skills through deliberate practice and continuous improvement
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 fade-in">
                  <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">What is Kata?</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kata is a Japanese concept referring to a structured pattern of practice to master a skill. 
                    In coding, katas are small, focused exercises designed to hone specific programming abilities.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Through kata practice, you'll demonstrate your understanding, intelligence, and problem-solving abilities
                    by tackling progressively challenging problems in a controlled environment.
                  </p>
                  <div className="flex space-x-4 pt-2">
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-purple-600 mr-2" />
                      <span>Cognitive Growth</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Technical Mastery</span>
                    </div>
                    <div className="flex items-center">
                      <Lightbulb className="h-5 w-5 text-amber-600 mr-2" />
                      <span>Creative Solutions</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">How Kata Works</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-4">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Problem Presentation</h4>
                          <p className="text-gray-600 dark:text-gray-400">Clear problem statements with defined requirements and test cases.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 mr-4">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Solution Development</h4>
                          <p className="text-gray-600 dark:text-gray-400">Implement your solution using best practices and efficient algorithms.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full p-2 mr-4">
                          <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Review & Refine</h4>
                          <p className="text-gray-600 dark:text-gray-400">Get feedback, analyze other solutions, and refactor your code for improvement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <a href="/kata" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                        Try a kata now
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 my-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white md:max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated with Coding Challenges</h2>
                  <p className="text-white/90 mb-6">
                    Join our newsletter to receive weekly coding challenges, tips, and insights from our community of developers.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-white/80" />
                    <div>
                      <p className="font-medium">No spam, ever.</p>
                      <p className="text-sm text-white/80">Unsubscribe anytime.</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-auto">
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 pr-4 w-full min-w-[280px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-white text-blue-600 hover:bg-white/90 font-medium h-12">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <Contributors />
        </div>
      </main>
    </div>
  );
};

export default Index;