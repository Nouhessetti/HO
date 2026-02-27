import React, { useEffect, useRef } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { Clock, Book } from 'lucide-react';

// Mock course data categories
const COURSE_CATEGORIES = [
  {
    name: 'Development',
    courses: [
      { id: 1, title: 'Full-Stack Web Development Bootcamp', description: 'Learn to build modern web applications', level: 'Intermediate', duration: '12 weeks' },
      { id: 2, title: 'Mobile App Development with React Native', description: 'Build cross-platform mobile applications', level: 'Intermediate', duration: '10 weeks' },
      { id: 3, title: 'API Design with Node.js', description: 'Create robust and scalable APIs', level: 'Advanced', duration: '8 weeks' },
    ]
  },
  {
    name: 'Data Science',
    courses: [
      { id: 4, title: 'Data Science Fundamentals', description: 'Master data analysis and visualization', level: 'Beginner', duration: '8 weeks' },
      { id: 5, title: 'Advanced Machine Learning', description: 'Deep dive into ML algorithms', level: 'Advanced', duration: '14 weeks' },
      { id: 6, title: 'Big Data with Spark', description: 'Process and analyze large datasets', level: 'Intermediate', duration: '9 weeks' },
    ]
  },
  {
    name: 'Design',
    courses: [
      { id: 7, title: 'UI/UX Design Principles', description: 'Create intuitive user interfaces', level: 'Beginner', duration: '6 weeks' },
      { id: 8, title: 'Advanced Figma for Designers', description: 'Master Figma for UI/UX projects', level: 'Intermediate', duration: '5 weeks' },
      { id: 9, title: 'Design Systems Architecture', description: 'Build scalable design systems', level: 'Advanced', duration: '7 weeks' },
    ]
  }
];

const ProductSearchMenu = ({ searchQuery, onClose }) => {
  const menuRef = useRef(null);

  // Filter courses based on search query while maintaining category structure
  const filteredCategories = searchQuery.trim() === '' 
    ? COURSE_CATEGORIES 
    : COURSE_CATEGORIES.map(category => ({
        name: category.name,
        courses: category.courses.filter(course => 
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.courses.length > 0);

  // Hook to handle "Click Outside" to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const getLevelBadgeVariant = (level) => {
    switch (level) {
      case 'Beginner': return 'outline';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div 
      ref={menuRef}
      className="absolute top-full left-0 right-0 mt-1 rounded-md overflow-hidden border border-gray-200 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 z-50"
    >
      <Command>
        <CommandInput placeholder="Search courses..." value={searchQuery} />
        <CommandList className="max-h-[300px] overflow-auto">
          <CommandEmpty>No courses found. Try a different search term.</CommandEmpty>
          
          {filteredCategories.map((category) => (
            <CommandGroup key={category.name} heading={category.name}>
              {category.courses.map((course) => (
                <CommandItem 
                  key={course.id}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors py-2"
                  onSelect={() => {
                    console.log('Selected course:', course);
                    // You would typically navigate to the course details here
                    onClose();
                  }}
                >
                  <div className="flex flex-col py-1 w-full">
                    <div className="flex justify-between items-start gap-2 w-full">
                      <span className="font-medium line-clamp-1">{course.title}</span>
                      <Badge variant={getLevelBadgeVariant(course.level)} className="shrink-0">
                        {course.level}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                      {course.description}
                    </span>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Book className="h-3 w-3" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
};

export default ProductSearchMenu;