// @ts-nocheck
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LogOut, Mail, Lock } from 'lucide-react';

const AuthButtons = ({ className = "", vertical = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { user, logout, login, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSocialLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsOpen(false);
      navigate('/profile');
    } catch (error) { console.error(error); }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) await login(email, password);
      else await signUp(email, password);
      setIsOpen(false);
      navigate('/profile');
    } catch (error) { alert(error.message); }
  };

  if (user) {
    return (
      <div className={cn('flex items-center gap-3', vertical && 'flex-col w-full', className)}>
        <Button variant="ghost" onClick={() => navigate('/profile')} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {user.email[0].toUpperCase()}
          </div>
          <span className="text-xs font-bold hidden sm:block">{user.displayName || 'Student'}</span>
        </Button>
        <Button variant="outline" size="icon" onClick={logout} className="text-red-500"><LogOut className="h-4 w-4" /></Button>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4', vertical && 'flex-col w-full', className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="border-blue-500 text-blue-600">Sign In</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-5 shadow-xl">
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <h3 className="font-bold text-center">{isLoginMode ? 'Welcome Back' : 'Create Account'}</h3>
            <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" className="w-full bg-blue-600">{isLoginMode ? 'Sign In' : 'Sign Up'}</Button>
            <Button variant="outline" type="button" className="w-full" onClick={handleSocialLogin}>Continue with Google</Button>
            <p className="text-center text-xs">
              <button type="button" onClick={() => setIsLoginMode(!isLoginMode)} className="text-blue-600 font-bold">
                {isLoginMode ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AuthButtons;