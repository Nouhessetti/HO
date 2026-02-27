
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Edit, Trash, Eye, Video, MessageSquare, ThumbsUp, ThumbsDown, FileText } from 'lucide-react';
import { BlogPostForm } from './BlogPostForm';
import { VideoUploadForm } from './VideoUploadForm';

export const BlogVideoManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showVideoForm, setShowVideoForm] = useState(false);

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      author: 'John Doe',
      status: 'Published',
      publishDate: '2024-01-15',
      views: 2540,
      likes: 184,
      dislikes: 12,
      comments: 45,
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Advanced Python Techniques',
      author: 'Jane Smith',
      status: 'Draft',
      publishDate: '2024-01-20',
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: 0,
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      author: 'Mike Johnson',
      status: 'Published',
      publishDate: '2024-01-10',
      views: 3420,
      likes: 267,
      dislikes: 18,
      comments: 89,
      category: 'Data Science'
    }
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'JavaScript ES6 Tutorial',
      creator: 'Tech Academy',
      status: 'Published',
      uploadDate: '2024-01-12',
      duration: '45:32',
      views: 15640,
      likes: 892,
      dislikes: 34,
      comments: 156,
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'Building REST APIs with Node.js',
      creator: 'Code Masters',
      status: 'Processing',
      uploadDate: '2024-01-18',
      duration: '32:15',
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: 0,
      category: 'Backend'
    },
    {
      id: 3,
      title: 'CSS Grid Layout Masterclass',
      creator: 'Design Pro',
      status: 'Published',
      uploadDate: '2024-01-08',
      duration: '28:47',
      views: 8920,
      likes: 445,
      dislikes: 21,
      comments: 78,
      category: 'CSS'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSaveBlog = (blogData: any) => {
    setBlogPosts(prev => [...prev, blogData]);
  };

  const handleSaveVideo = (videoData: any) => {
    setVideos(prev => [...prev, videoData]);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="blogs">
        <TabsList>
          <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="analytics">Content Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Blog Management
                </CardTitle>
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => setShowBlogForm(true)}
                >
                  <Plus className="h-4 w-4" />
                  Write New Blog
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search blog posts..."
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
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Dislikes</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                      </TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-500" />
                        {post.views.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-green-600">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </div>
                      </TableCell>
                      <TableCell className="text-red-600">
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4" />
                          {post.dislikes}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                          {post.comments}
                        </div>
                      </TableCell>
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

        <TabsContent value="videos">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Video Management
                </CardTitle>
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => setShowVideoForm(true)}
                >
                  <Plus className="h-4 w-4" />
                  Upload Video
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search videos..."
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
                    <TableHead>Creator</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Dislikes</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {videos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell className="font-medium">{video.title}</TableCell>
                      <TableCell>{video.creator}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(video.status)}>{video.status}</Badge>
                      </TableCell>
                      <TableCell>{video.duration}</TableCell>
                      <TableCell className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-500" />
                        {video.views.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-green-600">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {video.likes}
                        </div>
                      </TableCell>
                      <TableCell className="text-red-600">
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4" />
                          {video.dislikes}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                          {video.comments}
                        </div>
                      </TableCell>
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

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Blog Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,960</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Video Views</CardTitle>
                <Video className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,560</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,788</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">368</div>
                <p className="text-xs text-muted-foreground">+22% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Content Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed analytics charts and insights coming soon...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <BlogPostForm
        isOpen={showBlogForm}
        onClose={() => setShowBlogForm(false)}
        onSave={handleSaveBlog}
      />

      <VideoUploadForm
        isOpen={showVideoForm}
        onClose={() => setShowVideoForm(false)}
        onSave={handleSaveVideo}
      />
    </div>
  );
};
