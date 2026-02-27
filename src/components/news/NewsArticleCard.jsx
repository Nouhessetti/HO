import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function NewsArticleCard({
  title,
  excerpt,
  category,
  date,
  author,
  image,
  variant = 'default',
  className,
  onClick
}) {
  
  // Different variants for different shapes and formats
  switch (variant) {
    case 'horizontal':
      return (
        <Card className={cn("flex overflow-hidden h-40 cursor-pointer", className)} onClick={onClick}>
          <div className="w-1/3 relative">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-2/3">
            <CardHeader className="p-3 pb-0">
              <div className="flex items-center justify-between mb-1">
                <span className="bg-blue-600 text-xs px-2 py-0.5 rounded text-white">{category}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
              <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
            </CardHeader>
            <CardContent className="p-3 pt-1">
              <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
            </CardContent>
            <CardFooter className="p-3 pt-0">
              <span className="text-xs">By {author}</span>
            </CardFooter>
          </div>
        </Card>
      );
      
    case 'minimal':
      return (
        <Card className={cn("p-3 cursor-pointer", className)} onClick={onClick}>
          <div className="flex items-start gap-2">
            <span className="bg-blue-600 text-xs px-2 py-0.5 rounded text-white h-fit">{category}</span>
            <div>
              <h3 className="font-medium line-clamp-2">{title}</h3>
              <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                <span>{date}</span>
                <span>•</span>
                <span>By {author}</span>
              </div>
            </div>
          </div>
        </Card>
      );
    
    case 'compact':
      return (
        <Card className={cn("overflow-hidden cursor-pointer", className)} onClick={onClick}>
          <div className="aspect-[4/3] relative">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute top-2 left-2">
              <span className="bg-blue-600 text-xs px-2 py-0.5 rounded text-white">{category}</span>
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-sm font-medium line-clamp-2 mb-1">{title}</h3>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>{date}</span>
              <span>By {author}</span>
            </div>
          </div>
        </Card>
      );
    
    case 'featured':
      return (
        <Card className={cn("relative overflow-hidden cursor-pointer h-full min-h-[300px]", className)} onClick={onClick}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
          </div>
          <div className="relative h-full flex flex-col justify-end p-5 text-white">
            <span className="bg-blue-600 text-xs px-2 py-0.5 rounded inline-block mb-3 h-fit w-fit">{category}</span>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <p className="line-clamp-2 text-white/80 mb-3">{excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">By {author}</span>
              <span className="text-xs text-white/70">{date}</span>
            </div>
          </div>
        </Card>
      );
    
    case 'default':
    default:
      return (
        <Card className={cn("overflow-hidden cursor-pointer", className)} onClick={onClick}>
          <div className="aspect-video relative">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="bg-blue-600 text-xs px-2 py-0.5 rounded text-white">{category}</span>
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <span className="text-xs">By {author}</span>
          </CardFooter>
        </Card>
      );
  }
}