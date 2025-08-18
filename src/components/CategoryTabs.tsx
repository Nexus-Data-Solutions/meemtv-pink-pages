import { Button } from "@/components/ui/button";

const categories = [
  { name: "All News", active: true },
  { name: "Hyderabad", active: false },
  { name: "Telangana", active: false },
  { name: "National", active: false },
  { name: "International", active: false },
  { name: "Sports", active: false },
  { name: "Entertainment", active: false },
  { name: "Technology", active: false },
];

const CategoryTabs = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 py-4 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "ghost"}
              className={`whitespace-nowrap ${
                category.active 
                  ? "bg-primary hover:bg-primary-deep text-white" 
                  : "text-gray-600 hover:text-primary hover:bg-news-hover"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;