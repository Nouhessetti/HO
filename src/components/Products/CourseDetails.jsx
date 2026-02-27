import React from 'react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Clock, GraduationCap, CheckCircle, X, FileText } from 'lucide-react';

const CourseDetails = ({ course, onClose }) => {
  const { title, description, level, duration, category, imageUrl } = course;
  const defaultImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

  const getBadgeVariant = () => {
    switch (level) {
      case 'Beginner': return 'outline';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'outline';
    }
  };

  // Logic for conditional prerequisites based on course level
  const prerequisites = [
    'Basic understanding of programming concepts',
    'Familiarity with web technologies',
    level === 'Advanced' ? 'Previous experience with related technologies' : null,
    level === 'Intermediate' || level === 'Advanced' ? 'Completion of beginner courses' : null,
  ].filter(Boolean);

  const whatYouWillLearn = [
    'Master core concepts and best practices',
    'Build real-world projects from scratch',
    'Implement industry-standard patterns and solutions',
    'Work with modern tools and frameworks',
    'Solve complex problems efficiently',
  ];

  const courseContent = [
    {
      module: 'Introduction',
      lessons: ['Overview of the course', 'Setting up your environment', 'Basic concepts']
    },
    {
      module: 'Core Fundamentals',
      lessons: ['Key principles', 'Building blocks', 'Standard practices']
    },
    {
      module: 'Advanced Topics',
      lessons: ['Advanced patterns', 'Performance optimization', 'Integration with other systems']
    },
    {
      module: 'Projects',
      lessons: ['Planning your project', 'Implementation', 'Testing and deployment']
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Bar: Breadcrumbs and Close Button */}
      <div className="flex justify-between items-center mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/products?category=${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="font-medium">{title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <div 
            className="w-full h-64 md:h-80 rounded-lg bg-cover bg-center mb-6 shadow-md" 
            style={{ backgroundImage: `url(${imageUrl || defaultImage})` }} 
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant={getBadgeVariant()} className="text-sm px-3 py-1.5">{level}</Badge>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Enrollment Sidebar */}
        <div className="relative">
          <Card className="sticky top-24 shadow-lg border-primary/10">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4">Course Snapshot</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{duration} of content</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{level} level</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full gap-2 text-md py-6">
                  <Book className="h-5 w-5" />
                  Enroll Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground italic">
                  Join hundreds of developers mastering {title}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Curriculum & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Learning Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-muted/30 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {courseContent.map((module, index) => (
                <div key={index} className="border rounded-lg dark:border-gray-700 overflow-hidden">
                  <div className="p-4 bg-muted/50 border-b dark:border-gray-700">
                    <h3 className="font-bold text-primary">{module.module}</h3>
                  </div>
                  <ul className="p-4 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center gap-3">
                        <Book className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;