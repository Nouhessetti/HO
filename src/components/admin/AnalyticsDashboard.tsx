
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export const AnalyticsDashboard: React.FC = () => {
  const userActivityData = [
    { name: 'Mon', active: 4000, registered: 2400 },
    { name: 'Tue', active: 3000, registered: 1398 },
    { name: 'Wed', active: 2000, registered: 9800 },
    { name: 'Thu', active: 2780, registered: 3908 },
    { name: 'Fri', active: 1890, registered: 4800 },
    { name: 'Sat', active: 2390, registered: 3800 },
    { name: 'Sun', active: 3490, registered: 4300 },
  ];

  const courseCompletionData = [
    { name: 'Web Dev', value: 400, color: '#0088FE' },
    { name: 'Data Science', value: 300, color: '#00C49F' },
    { name: 'Math', value: 200, color: '#FFBB28' },
    { name: 'Physics', value: 100, color: '#FF8042' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>User Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="active" fill="#3B82F6" name="Active Users" />
              <Bar dataKey="registered" fill="#10B981" name="New Registrations" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Popularity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={courseCompletionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {courseCompletionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Monthly Growth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="active" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="registered" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
