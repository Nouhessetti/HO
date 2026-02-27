import React, { useState } from 'react';
import { NewsSlider } from '@/components/news/NewsSlider';
import { NewsArticleCard } from '@/components/news/NewsArticleCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Data remains the same, just without TypeScript interface enforcement
const newsData = {
  featuredSlider: [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      highlight: "Trending",
      backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Web3 Technologies Reshaping the Internet",
      highlight: "Latest",
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "The Rise of No-Code Platforms",
      highlight: "Popular",
      backgroundImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "TypeScript 5.0: What's New",
      highlight: "Update",
      backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "React 19 Features Preview",
      highlight: "Preview",
      backgroundImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "The State of JavaScript 2025",
      highlight: "Report",
      backgroundImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 7,
      title: "Open Source Contributions for Beginners",
      highlight: "Guide",
      backgroundImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  latestArticles: [
    {
      id: 1,
      title: "Understanding the Latest React Design Patterns",
      excerpt: "Dive into modern React patterns that can help you write cleaner, more maintainable code in your applications.",
      category: "React",
      date: "May 15, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      content: `
        <h2>Modern React Design Patterns</h2>
        <p>React has evolved significantly since its inception, and so have the patterns we use to build applications with it...</p>
        <h3>Component Composition</h3>
        <p>One of the most powerful patterns in React is component composition...</p>
      `
    },
    // ... rest of your articles
  ],
  quickReads: [
    {
      id: 1,
      title: "5 VS Code Extensions You Need to Try",
      excerpt: "Boost your productivity with these must-have extensions for Visual Studio Code.",
      category: "Tools",
      date: "May 9, 2025",
      author: "Chris Parker",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
    },
    // ... rest of your quick reads
  ]
};

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };
  
  const handleBackClick = () => {
    setSelectedArticle(null);
  };
  
  const getRelatedArticles = (article) => {
    return [
      ...newsData.latestArticles,
      ...newsData.quickReads
    ].filter(
      item => item.category === article.category && item.id !== article.id
    ).slice(0, 3);
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
          {selectedArticle ? (
            <>
              {/* Breadcrumb Navigation */}
              <Breadcrumb className="mb-8">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Button 
                        variant="ghost" 
                        className="p-0" 
                        onClick={handleBackClick}
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        News
                      </Button>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">{selectedArticle.category}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{selectedArticle.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              {/* Article Content */}
              <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12">
                <div className="aspect-[21/9] relative">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded text-white">
                      {selectedArticle.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedArticle.date}
                    </span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    {selectedArticle.title}
                  </h1>
                  
                  <div className="flex items-center mb-8">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      By <span className="font-medium">{selectedArticle.author}</span>
                    </span>
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content || '' }}
                  />
                </div>
              </article>
              
              {/* Related Articles */}
              {getRelatedArticles(selectedArticle).length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getRelatedArticles(selectedArticle).map(article => (
                      <div key={`related-${article.id}`} className="md:col-span-1">
                        <NewsArticleCard 
                          {...article} 
                          variant="default" 
                          className="h-full cursor-pointer"
                          onClick={() => handleArticleClick(article)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <>
              <section className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                  Latest News
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Stay up-to-date with the latest developments in technology, programming, and our community.
                </p>
              </section>

              {/* Featured News Slider */}
              <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <NewsSlider 
                      items={newsData.featuredSlider}
                      size="large"
                      autoplay={true}
                      autoplayDelay={5000}
                      onItemClick={(item) => {
                        const article = newsData.latestArticles.find(art => 
                          art.title.toLowerCase().includes(item.title.toLowerCase().split(' ')[0])
                        ) || newsData.latestArticles[0];
                        handleArticleClick(article);
                      }}
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                      <div className="space-y-4">
                        {newsData.latestArticles.slice(1, 3).map((article) => (
                          <div key={article.id} 
                               className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
                               onClick={() => handleArticleClick(article)}>
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-600/80 text-xs px-1.5 py-0.5 rounded">
                                  {article.category}
                                </span>
                                <span className="text-xs opacity-70">
                                  {article.date}
                                </span>
                              </div>
                              <h3 className="text-sm font-semibold line-clamp-2 leading-tight">
                                {article.title}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        {newsData.latestArticles.slice(3, 5).map((article) => (
                          <div key={article.id} 
                               className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
                               onClick={() => handleArticleClick(article)}>
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-600/80 text-xs px-1.5 py-0.5 rounded">
                                  {article.category}
                                </span>
                                <span className="text-xs opacity-70">
                                  {article.date}
                                </span>
                              </div>
                              <h3 className="text-sm font-semibold line-clamp-2 leading-tight">
                                {article.title}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latest News Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  Latest News
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {newsData.quickReads.slice(0, 4).map((article) => (
                    <div key={article.id} 
                         className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group cursor-pointer transition-transform duration-200 hover:scale-105"
                         onClick={() => handleArticleClick(article)}>
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight mb-1">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Reads / Muy Interesado */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  Muy Interesado
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {newsData.quickReads.map((article) => (
                    <div key={article.id} className="h-full">
                      <NewsArticleCard 
                        {...article} 
                        variant="compact" 
                        className="h-full cursor-pointer"
                        onClick={() => handleArticleClick(article)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;