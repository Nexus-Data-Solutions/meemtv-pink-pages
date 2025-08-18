import { Button } from "@/components/ui/button";
import { Search, Menu, Play } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      {/* Breaking News Ticker */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 overflow-hidden">
        <div className="breaking-news-ticker whitespace-nowrap">
          <span className="font-semibold mr-8">BREAKING:</span>
          <span className="mr-12">Hyderabad Metro Phase 2 construction begins</span>
          <span className="mr-12">Telangana government announces new IT policy</span>
          <span className="mr-12">Heavy rains expected in Hyderabad this weekend</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e4e3c38f-40b3-444c-83de-4b379364c6e2.png" 
              alt="MEEM TV Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Hyderabad</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Telangana</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">National</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Sports</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Entertainment</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary-deep text-white font-medium">
              <Play className="h-4 w-4 mr-2" />
              Live TV
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;