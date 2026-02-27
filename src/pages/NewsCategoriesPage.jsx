import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

const NewsCategoriesPage = () => {
  // Sample categories data
  const categories = [
    {
      id: 1,
      title: "Technology",
      description: "Latest news on tech trends, gadgets, and innovations",
      articleCount: 24,
    },
    {
      id: 2,
      title: "Business",
      description: "Updates from the business world, markets, and economy",
      articleCount: 19,
    },
    {
      id: 3,
      title: "Science",
      description: "Discoveries, research, and breakthroughs in science",
      articleCount: 15,
    },
    {
      id: 4,
      title: "Health",
      description: "Healthcare news, wellness tips, and medical research",
      articleCount: 21,
    },
    {
      id: 5,
      title: "Entertainment",
      description: "Movies, music, celebrities, and pop culture news",
      articleCount: 32,
    },
    {
      id: 6,
      title: "Sports",
      description: "Coverage of sporting events, athletes, and teams",
      articleCount: 27,
    },
    {
      id: 7,
      title: "Politics",
      description: "Political news, policy updates, and government affairs",
      articleCount: 18,
    },
    {
      id: 8,
      title: "Environment",
      description: "Climate change, conservation, and environmental issues",
      articleCount: 12,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">News Categories</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explore our diverse range of news topics and stay informed on subjects that interest you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="mb-2">{category.articleCount} Articles</Badge>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Newspaper className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                >
                  View articles
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsCategoriesPage;