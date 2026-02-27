// @ts-nocheck
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export function NewsSlider({ 
  items = [], 
  size = 'medium', 
  className = "", // Added default to prevent className errors
  maxItems = 10,
  onItemClick = () => {}, // Added default
  autoplay = false,
  autoplayDelay = 4000
}) {
  const limitedItems = items.slice(0, maxItems);

  // We define plugins as a constant to make it easier for the editor to parse
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay })] : [];

  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'h-56 md:h-72';
      case 'large': return 'h-96 lg:h-[500px]';
      case 'medium':
      default: return 'h-72 md:h-96';
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Carousel 
        className="w-full"
        plugins={plugins}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {limitedItems.map((item) => (
            <CarouselItem key={item.id}>
              <div 
                className={cn(
                  "relative overflow-hidden rounded-xl", 
                  getSizeClasses(),
                  "transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                )}
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onClick={() => onItemClick(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white w-full text-left">
                  <div className="bg-blue-600 text-xs md:text-sm px-3 py-1 rounded inline-block mb-4 font-medium uppercase tracking-wider">
                    {item.highlight}
                  </div>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
      </Carousel>
    </div>
  );
}