
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Edit, Trash, Eye } from 'lucide-react';

export const ContentManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 1, title: 'React Fundamentals', category: 'Web Development', status: 'Published', enrollments: 1250, rating: 4.8, lastUpdated: '2024-01-15' },
    { id: 2, title: 'Python Data Science', category: 'Data Science', status: 'Draft', enrollments: 0, rating: 0, lastUpdated: '2024-01-20' },
    { id: 3, title: 'Advanced Mathematics', category: 'Math', status: 'Published', enrollments: 890, rating: 4.6, lastUpdated: '2024-01-10' },
  ];

  const kataProblems = [
    { id: 1, title: 'Two Sum Problem', difficulty: 'Beginner', category: 'Algorithms', submissions: 5420, successRate: 85, createdDate: '2024-01-05' },
    { id: 2, title: 'Binary Tree Traversal', difficulty: 'Intermediate', category: 'Data Structures', submissions: 2340, successRate: 65, createdDate: '2024-01-12' },
    { id: 3, title: 'Dynamic Programming', difficulty: 'Advanced', category: 'Algorithms', submissions: 890, successRate: 45, createdDate: '2024-01-18' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="kata">Kata Problems</TabsTrigger>
          <TabsTrigger value="news">News Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Course Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Course
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enrollments</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                      </TableCell>
                      <TableCell>{course.enrollments}</TableCell>
                      <TableCell>{course.rating > 0 ? course.rating : 'N/A'}</TableCell>
                      <TableCell>{course.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kata">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Kata Problems Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Kata
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Submissions</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Created Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kataProblems.map((kata) => (
                    <TableRow key={kata.id}>
                      <TableCell className="font-medium">{kata.title}</TableCell>
                      <TableCell>
                        <Badge className={getDifficultyColor(kata.difficulty)}>{kata.difficulty}</Badge>
                      </TableCell>
                      <TableCell>{kata.category}</TableCell>
                      <TableCell>{kata.submissions}</TableCell>
                      <TableCell>{kata.successRate}%</TableCell>
                      <TableCell>{kata.createdDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>News Articles Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">News article management coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
