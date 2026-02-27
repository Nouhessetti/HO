// @ts-nocheck
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, ShieldCheck, GraduationCap, Award, Settings } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar: User Card */}
          <div className="md:w-1/3">
            <Card className="border-t-4 border-t-blue-600 shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-inner">
                  {user?.email?.[0].toUpperCase()}
                </div>
                <CardTitle className="text-xl">{user?.displayName || 'Active Student'}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Mail className="h-3 w-3" /> {user?.email}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="pt-2 border-t text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Member since</span>
                    <span className="font-medium">2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" /> Verified
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 gap-2">
                  <Settings className="h-4 w-4" /> Edit Profile
                </Button>
                <Button variant="destructive" className="w-full gap-2" onClick={logout}>
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content: Progress & Courses */}
          <div className="md:w-2/3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Courses Started</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50/50 border-purple-100">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Certificates</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="py-10 text-center">
                <div className="space-y-3">
                  <p className="text-gray-400">You haven't enrolled in any courses yet.</p>
                  <Button className="bg-blue-600">Explore Catalog</Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;