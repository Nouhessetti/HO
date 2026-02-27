import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Clock, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CourseCard = ({ 
  id,
  title = "Untitled Course", 
  description = "", 
  level = "Beginner", 
  duration = "", 
  category = "General",
  imageUrl = "", // Default to empty string to satisfy the editor
  onEnroll = () => {} // Default to empty function
}) => {
  const getBadgeVariant = () => {
    switch (level) {
      case 'Beginner': return 'outline';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'outline';
    }
  };

  const defaultImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm dark:from-gray-800 dark:to-gray-900/80">
      <div 
        className="h-40 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}
      />
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <Badge variant={getBadgeVariant()} className="shrink-0">{level}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          className="w-full gap-2" 
          variant="default" 
          onClick={() => onEnroll(id)}
        >
          <Book className="h-4 w-4" />
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;