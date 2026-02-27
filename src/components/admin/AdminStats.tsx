// @ts-nocheck
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';

export const AdminStats = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,456',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Courses',
      value: '48',
      change: '+3%',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Kata Completed',
      value: '8,234',
      change: '+18%',
      icon: Award,
      color: 'text-purple-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,567',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              <span className="text-green-600 font-medium">{stat.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};