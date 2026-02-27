import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight } from 'lucide-react';
import ProductSearchMenu from '@/components/Products/ProductSearchMenu';
import CourseCard from '@/components/Products/CourseCard';
import CourseDetails from '@/components/Products/CourseDetails';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Course data grouped by category
const COURSES_BY_CATEGORY = {
  "Web Development": [
    {
      id: 1, 
      title: 'Full-Stack Web Development Bootcamp', 
      description: 'Learn to build modern web applications from scratch using React, Node.js, and MongoDB.',
      level: 'Intermediate',
      duration: '12 weeks',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=3882&q=80'
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
  ],
  "Data Science": [
    {
      id: 2, 
      title: 'Data Science Fundamentals', 
      description: 'Master the essential concepts of data analysis, visualization, and machine learning with Python.',
      level: 'Beginner',
      duration: '8 weeks',
      category: 'Data Science'
    },
    {
      id: 4, 
      title: 'Advanced Machine Learning Algorithms', 
      description: 'Deep dive into complex machine learning models, neural networks, and practical applications.',
      level: 'Advanced',
      duration: '14 weeks',
      category: 'Data Science'
    },
    {
      id: 14, 
      title: 'Python for Data Analysis', 
      description: 'Learn how to use Python for data manipulation, visualization, and analysis.',
      level: 'Beginner',
      duration: '6 weeks',
      category: 'Data Science'
    },
    {
      id: 15, 
      title: 'Deep Learning with TensorFlow', 
      description: 'Build and train neural networks using TensorFlow for various AI applications.',
      level: 'Advanced',
      duration: '10 weeks',
      category: 'Data Science'
    },
    {
      id: 16, 
      title: 'Data Visualization with D3.js', 
      description: 'Create interactive data visualizations for the web using D3.js.',
      level: 'Intermediate',
      duration: '7 weeks',
      category: 'Data Science'
    },
    {
      id: 17, 
      title: 'Natural Language Processing', 
      description: 'Learn techniques for processing and analyzing human language data.',
      level: 'Advanced',
      duration: '9 weeks',
      category: 'Data Science'
    },
    {
      id: 18, 
      title: 'Big Data with Apache Spark', 
      description: 'Process and analyze large-scale data using Apache Spark.',
      level: 'Intermediate',
      duration: '8 weeks',
      category: 'Data Science'
    },
    {
      id: 19, 
      title: 'Statistics for Data Science', 
      description: 'Master statistical concepts essential for data analysis and machine learning.',
      level: 'Intermediate',
      duration: '6 weeks',
      category: 'Data Science'
    }
  ],
  "Mobile Development": [
    {
      id: 3, 
      title: 'Mobile App Development with React Native', 
      description: 'Build cross-platform mobile applications using React Native.',
      level: 'Intermediate',
      duration: '10 weeks',
      category: 'Mobile Development'
    },
    {
      id: 20, 
      title: 'iOS Development with Swift', 
      description: 'Learn to build native iOS applications using Swift and SwiftUI.',
      level: 'Intermediate',
      duration: '12 weeks',
      category: 'Mobile Development'
    }
  ],
  "Design": [
    {
      id: 5, 
      title: 'UI/UX Design Principles', 
      description: 'Learn how to create intuitive user interfaces.',
      level: 'Beginner',
      duration: '6 weeks',
      category: 'Design'
    }
  ],
  "DevOps": [
    {
      id: 6, 
      title: 'DevOps and Cloud Infrastructure', 
      description: 'Understand CI/CD pipelines and cloud deployment.',
      level: 'Advanced',
      duration: '9 weeks',
      category: 'DevOps'
    }
  ]
};

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      setIsMenuOpen(true);
    }
  };

  const handleInputFocus = () => {
    setIsMenuOpen(true);
  };

  const handleEnrollCourse = (courseId) => {
    // Find the selected course from all categories
    for (const category in COURSES_BY_CATEGORY) {
      const course = COURSES_BY_CATEGORY[category].find(c => c.id === courseId);
      if (course) {
        setSelectedCourse(course);
        break;
      }
    }
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="pt-16">
        {selectedCourse ? (
          <CourseDetails course={selectedCourse} onClose={handleCloseDetails} />
        ) : (
          <>
            <div 
              className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=4076&q=80')" }}
            >
              <div className="container mx-auto px-4 z-10">
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Our Courses</h1>
                  <p className="text-xl text-gray-200 mb-8">Expand your skills with our professional learning paths</p>
                  
                  <div className="relative w-full max-w-xl mx-auto">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full h-12 pl-12 pr-4 rounded-lg bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 text-base focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      
                      <Button 
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-10 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => console.log("Search for:", searchQuery)}
                      >
                        Search
                      </Button>
                    </div>
                    
                    {isMenuOpen && (
                      <ProductSearchMenu 
                        searchQuery={searchQuery} 
                        onClose={() => setIsMenuOpen(false)} 
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="container mx-auto py-16 px-4">
              {Object.entries(COURSES_BY_CATEGORY).map(([category, courses]) => (
                <div key={category} className="mb-16">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">{category}</h2>
                    {courses.length > 7 && (
                      <a 
                        href={`/courses/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        See more <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {courses.slice(0, 7).map((course) => (
                        <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                          <CourseCard 
                            {...course} 
                            onEnroll={handleEnrollCourse}
                          />
                        </CarouselItem>
                      ))}
                      {courses.length > 7 && (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                          <div className="h-full flex items-center justify-center">
                            <a 
                              href={`/courses/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                              className="flex flex-col items-center justify-center px-6 py-12 h-full border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors text-center"
                            >
                              <ChevronRight className="h-12 w-12 text-gray-500 mb-4" />
                              <span className="text-lg font-medium">See {courses.length - 7} more {category} courses</span>
                            </a>
                          </div>
                        </CarouselItem>
                      )}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:left-4" />
                    <CarouselNext className="right-2 md:right-4" />
                  </Carousel>
                </div>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default ProductsPage;