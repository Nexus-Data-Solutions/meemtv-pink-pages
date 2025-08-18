import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded uppercase">
                Breaking News
              </span>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                2 hours ago
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Hyderabad Metro Phase 2 Construction Officially Begins
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              The Telangana government has officially launched the second phase of Hyderabad Metro Rail, 
              which will connect key areas across the city and improve public transportation infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-deep text-white">
                Read Full Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Hyderabad Metro Construction"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;