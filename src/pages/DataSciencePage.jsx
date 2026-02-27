import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// Removed CourseProps import as it's a TypeScript interface
import CourseCard from '@/components/Products/CourseCard';

// Removed the ": CourseProps[]" type annotation
const DataScienceCourses = [
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
];

const DataSciencePage = () => {
  // Removed the generic type <CourseProps | null>
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  // Removed the ": number" type for courseId
  const handleEnrollCourse = (courseId) => {
    const course = DataScienceCourses.find(c => c.id === courseId);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Data Science Courses</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Unlock the power of data with our comprehensive data science curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DataScienceCourses.map((course) => (
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

export default DataSciencePage;