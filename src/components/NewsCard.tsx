import { Clock } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  timestamp: string;
  category: string;
  isBreaking?: boolean;
  isLive?: boolean;
}

const NewsCard = ({ title, summary, imageUrl, timestamp, category, isBreaking, isLive }: NewsCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isBreaking && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
            BREAKING
          </div>
        )}
        {isLive && (
          <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 text-xs font-bold rounded live-indicator">
            LIVE
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {timestamp}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {summary}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;