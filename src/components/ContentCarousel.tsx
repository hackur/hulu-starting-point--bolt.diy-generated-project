import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContentCategory, ContentItem } from '../types/content';

interface ContentCarouselProps {
  category: ContentCategory;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ category }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">{category.name}</h2>
      <InfiniteScroll
        dataLength={visibleItems}
        next={loadMore}
        hasMore={visibleItems < category.items.length}
        loader={<h4 className="text-white text-center">Loading...</h4>}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {category.items.slice(0, visibleItems).map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

const ContentCard: React.FC<{ item: ContentItem }> = ({ item }) => {
  return (
    <div className="relative group cursor-pointer">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-white">
        <h3 className="text-sm font-semibold">{item.title}</h3>
        <p className="text-xs">{item.year} • {item.rating}</p>
      </div>
    </div>
  );
};

export default ContentCarousel;
