import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryTabs />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Index;
