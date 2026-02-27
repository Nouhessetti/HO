// @ts-nocheck
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useWindowDimensions } from '@/hooks/use-dimensions';

// Sample contributors data
const contributors = [
  { id: 1, name: 'Alex Johnson', title: 'Senior Developer', university: 'MIT', avatar: '/placeholder.svg' },
  { id: 2, name: 'Sarah Williams', title: 'AI Researcher', university: 'Stanford University', avatar: '/placeholder.svg' },
  { id: 3, name: 'Michael Chen', title: 'UX Designer', university: 'Carnegie Mellon University', avatar: '/placeholder.svg' },
  { id: 4, name: 'Priya Patel', title: 'Data Scientist', university: 'UC Berkeley', avatar: '/placeholder.svg' },
  { id: 5, name: 'James Rodriguez', title: 'Backend Engineer', university: 'Georgia Tech', avatar: '/placeholder.svg' },
  { id: 6, name: 'Emma Wilson', title: 'DevOps Specialist', university: 'University of Washington', avatar: '/placeholder.svg' }
];

const Contributors = () => {
  const { isMobile, isTablet } = useWindowDimensions() || { isMobile: false, isTablet: false };
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-xl my-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Our Contributors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals who make our platform possible
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {contributors.map((contributor) => (
                <CarouselItem 
                  key={contributor.id} 
                  className={`pl-2 md:pl-4 ${
                    isMobile ? 'basis-full' : 
                    isTablet ? 'basis-1/2' : 
                    'basis-1/3'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-blue-300">
                    <div className="p-6 flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4 border-2 border-blue-500 p-1">
                        <AvatarImage src={contributor.avatar} alt={contributor.name} />
                        <AvatarFallback className="text-lg text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">{contributor.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{contributor.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{contributor.university}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 left-auto translate-y-0" />
              <CarouselNext className="relative ml-2 right-auto translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Contributors;