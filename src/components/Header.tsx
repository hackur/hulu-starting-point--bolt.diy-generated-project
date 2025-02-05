import React from 'react';
import { Menu, User, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Menu className="text-white" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hulu_logo_%282017%29.svg/1200px-Hulu_logo_%282017%29.svg.png" 
            alt="Hulu Logo" 
            className="h-8"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-white" />
          <User className="text-white" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
