import { Menu, Search } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-2xl font-bold text-cnn-red">NEWS</a>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium hover:text-cnn-red">World</a>
            <a href="#" className="text-sm font-medium hover:text-cnn-red">Politics</a>
            <a href="#" className="text-sm font-medium hover:text-cnn-red">Business</a>
            <a href="#" className="text-sm font-medium hover:text-cnn-red">Tech</a>
            <a href="#" className="text-sm font-medium hover:text-cnn-red">Science</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;