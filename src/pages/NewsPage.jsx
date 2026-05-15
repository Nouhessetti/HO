import React, { useState } from 'react';
import { NewsSlider } from '@/components/news/NewsSlider';
import { NewsArticleCard } from '@/components/news/NewsArticleCard';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Mock Data ---
const newsData = {
  featuredSlider: [
    { id: 1, title: "The Future of AI in Software Development", highlight: "Trending", backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, title: "Web3 Technologies Reshaping the Internet", highlight: "Latest", backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, title: "The Rise of No-Code Platforms", highlight: "Popular", backgroundImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1200&q=80" },
    { id: 4, title: "TypeScript 5.0: What's New", highlight: "Update", backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" },
    { id: 5, title: "React 19 Features Preview", highlight: "Preview", backgroundImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80" }
  ],
  latestArticles: [
    {
      id: 1,
      title: "Understanding the Latest React Design Patterns",
      excerpt: "Dive into modern React patterns that can help you write cleaner, more maintainable code.",
      category: "React",
      date: "May 15, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      content: "<h2>Modern React Design Patterns</h2><p>React has evolved significantly...</p>"
    },
    {
      id: 2,
      title: "The Future of Frontend Development in 2026",
      excerpt: "What trends and technologies will shape the future of frontend development?",
      category: "Trends",
      date: "May 14, 2025",
      author: "Mike Thompson",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      content: "<h2>Frontend Development: Looking Ahead to 2026</h2><p>As we approach 2026...</p>"
    },
    {
      id: 3,
      title: "The Future of Frontend Development in 2026",
      excerpt: "What trends and technologies will shape the future of frontend development?",
      category: "Trends",
      date: "May 14, 2025",
      author: "Mike Thompson",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      content: "<h2>Frontend Development: Looking Ahead to 2026</h2><p>As we approach 2026...</p>"
    },
    {
      id: 4,
      title: "The Future of Frontend Development in 2026",
      excerpt: "What trends and technologies will shape the future of frontend development?",
      category: "Trends",
      date: "May 14, 2025",
      author: "Mike Thompson",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      content: "<h2>Frontend Development: Looking Ahead to 2026</h2><p>As we approach 2026...</p>"
    }
    // ... other articles
  ],
  quickReads: [
    { id: 101, title: "5 VS Code Extensions You Need", excerpt: "Boost your productivity.", category: "Tools", date: "May 9, 2025", author: "Chris Parker", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80" },
    { id: 102, title: "CSS Grid in 5 Minutes", excerpt: "A quick guide.", category: "CSS", date: "May 8, 2025", author: "Lisa Wong", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80" },
    { id: 101, title: "5 VS Code Extensions You Need", excerpt: "Boost your productivity.", category: "Tools", date: "May 9, 2025", author: "Chris Parker", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80" },
    { id: 102, title: "CSS Grid in 5 Minutes", excerpt: "A quick guide.", category: "CSS", date: "May 8, 2025", author: "Lisa Wong", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80" }
  ]
};

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  const getRelatedArticles = (article) => {
    return [...newsData.latestArticles, ...newsData.quickReads]
      .filter(item => item.category === article.category && item.id !== article.id)
      .slice(0, 3);
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {selectedArticle ? (
          /* --- ARTICLE DETAIL VIEW --- */
          <>
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Button variant="ghost" className="p-0 h-auto hover:bg-transparent" onClick={handleBackClick}>
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    News
                  </Button>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <span className="cursor-default">{selectedArticle.category}</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="max-w-[200px] truncate">{selectedArticle.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100 dark:border-gray-700">
              <div className="aspect-[21/9] relative">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <span className="text-sm text-gray-500">{selectedArticle.date}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
                  {selectedArticle.title}
                </h1>
                <div className="flex items-center mb-10 pb-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-white font-semibold">By {selectedArticle.author}</p>
                    <p className="text-gray-500">Staff Writer</p>
                  </div>
                </div>
                <div 
                  className="prose prose-blue prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content || '' }}
                />
              </div>
            </article>

            {getRelatedArticles(selectedArticle).length > 0 && (
              <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-bold mb-8">Related Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getRelatedArticles(selectedArticle).map(article => (
                    <NewsArticleCard 
                      key={article.id}
                      {...article} 
                      onClick={() => handleArticleClick(article)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          /* --- NEWS LISTING VIEW --- */
          <>
           

            {/* Featured Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-2">
                  <NewsSlider 
                    items={newsData.featuredSlider}
                    onItemClick={(item) => {
                      const article = newsData.latestArticles.find(a => a.id === item.id) || newsData.latestArticles[0];
                      handleArticleClick(article);
                    }}
                  />
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {newsData.latestArticles.slice(0, 4).map((article) => (
                    <div 
                      key={article.id} 
                      className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-sm"
                      onClick={() => handleArticleClick(article)}
                    >
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 p-4 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">{article.category}</p>
                        <h3 className="text-sm font-bold line-clamp-2 leading-snug">{article.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Grid Sections */}
            <section className="space-y-20">
              <div>
                <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Latest Insights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {newsData.quickReads.slice(0, 4).map((article) => (
                    <NewsArticleCard 
                      key={article.id} 
                      {...article} 
                      onClick={() => handleArticleClick(article)} 
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8 border-l-4 border-emerald-500 pl-4">Quick Reads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsData.quickReads.slice(4).map((article) => (
                    <NewsArticleCard 
                      key={article.id} 
                      variant="compact" 
                      {...article} 
                      onClick={() => handleArticleClick(article)} 
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;