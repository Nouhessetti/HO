
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { CourseProps } from '@/components/Products/CourseCard';
import CourseCard from '@/components/Products/CourseCard';

const WebDevelopmentCourses: CourseProps[] = [
  {
    id: 1, 
    title: 'Full-Stack Web Development Bootcamp', 
    description: 'Learn to build modern web applications from scratch using React, Node.js, and MongoDB.',
    level: 'Intermediate',
    duration: '12 weeks',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80'
  },
  {
    id: 7, 
    title: 'JavaScript for Beginners', 
    description: 'Master the fundamentals of JavaScript programming and DOM manipulation.',
    level: 'Beginner',
    duration: '6 weeks',
    category: 'Web Development'
  },
  {
    id: 8, 
    title: 'Advanced React Patterns', 
    description: 'Learn advanced React patterns, hooks, and state management techniques.',
    level: 'Advanced',
    duration: '8 weeks',
    category: 'Web Development'
  },
  {
    id: 9, 
    title: 'Responsive Web Design', 
    description: 'Create beautiful, responsive websites that work on any device.',
    level: 'Beginner',
    duration: '4 weeks',
    category: 'Web Development'
  },
  {
    id: 10, 
    title: 'GraphQL API Development', 
    description: 'Build efficient APIs using GraphQL and integrate them with frontend applications.',
    level: 'Intermediate',
    duration: '6 weeks',
    category: 'Web Development'
  },
  {
    id: 11, 
    title: 'CSS Animations and Transitions', 
    description: 'Create engaging user experiences with CSS animations and transitions.',
    level: 'Intermediate',
    duration: '3 weeks',
    category: 'Web Development'
  },
  {
    id: 12, 
    title: 'Web Performance Optimization', 
    description: 'Optimize your web applications for speed and performance.',
    level: 'Advanced',
    duration: '5 weeks',
    category: 'Web Development'
  },
  {
    id: 13, 
    title: 'Progressive Web Apps', 
    description: 'Build offline-capable web applications that work like native apps.',
    level: 'Advanced',
    duration: '7 weeks',
    category: 'Web Development'
  }
];

const WebDevelopmentPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState<CourseProps | null>(null);

  const handleEnrollCourse = (courseId: number) => {
    const course = WebDevelopmentCourses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Web Development Courses</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Master the art of web development with our comprehensive courses designed for all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WebDevelopmentCourses.map((course) => (
              <div key={course.id} className="h-full">
                <CourseCard 
                  {...course} 
                  onEnroll={handleEnrollCourse}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
