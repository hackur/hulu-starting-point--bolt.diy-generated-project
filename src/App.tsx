import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentCarousel from './components/ContentCarousel';
import { generateMockContent } from './utils/mockData';

const App: React.FC = () => {
  const contentCategories = generateMockContent();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <div className="container mx-auto px-4">
          {contentCategories.map((category) => (
            <ContentCarousel key={category.name} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
