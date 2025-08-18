import NewsCard from "./NewsCard";

const newsData = [
  {
    title: "Heavy Rainfall Alert Issued for Hyderabad and Surrounding Areas",
    summary: "The Meteorological Department has issued a yellow alert for heavy rainfall in Hyderabad and its surrounding districts for the next 48 hours.",
    imageUrl: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "30 mins ago",
    category: "Weather",
    isBreaking: true,
  },
  {
    title: "New IT Policy Announced by Telangana Government",
    summary: "The state government has unveiled a comprehensive IT policy aimed at attracting more tech companies to Hyderabad and creating employment opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "1 hour ago",
    category: "Technology",
  },
  {
    title: "Hyderabad FC Qualifies for Asian Cup Quarter Finals",
    summary: "In a thrilling match last night, Hyderabad FC secured their position in the quarter finals of the Asian Cup with a 2-1 victory.",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "3 hours ago",
    category: "Sports",
  },
  {
    title: "Heritage Building Restoration Project Launched in Old City",
    summary: "A major restoration project has been initiated to preserve historical monuments and buildings in Hyderabad's Old City area.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "4 hours ago",
    category: "Culture",
  },
  {
    title: "Traffic Diversions on Outer Ring Road Due to Construction",
    summary: "Commuters are advised to take alternate routes as major traffic diversions are in place on the Outer Ring Road for infrastructure improvements.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "5 hours ago",
    category: "Transport",
  },
  {
    title: "Startup Funding Event Brings Global Investors to Hyderabad",
    summary: "A major startup funding event is taking place in HITEC City, attracting investors from around the world to the city's booming tech sector.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    timestamp: "6 hours ago",
    category: "Business",
  },
];

const NewsGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <div className="flex items-center space-x-2">
            <div className="live-indicator text-sm font-semibold text-red-600">
              LIVE UPDATES
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              timestamp={news.timestamp}
              category={news.category}
              isBreaking={news.isBreaking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;