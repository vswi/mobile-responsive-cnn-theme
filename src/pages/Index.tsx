import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import RelatedArticles from '../components/RelatedArticles';

const Index = () => {
  const mainArticle = {
    title: "Climate progress screeched to a halt this year. One country had its foot on the brake",
    imageUrl: "https://picsum.photos/1200/675",
    snippet: "The world's most ambitious climate negotiations faced unprecedented obstruction this year, as Saudi Arabia worked to stall progress on key issues, according to multiple people involved in the talks.",
    category: "Climate Crisis"
  };

  const sideArticles = [
    {
      title: "Global temperatures hit new records as climate crisis deepens",
      imageUrl: "https://picsum.photos/800/450",
      snippet: "Scientists warn of accelerating climate change impacts...",
      category: "Environment"
    },
    {
      title: "New study reveals rapid ice melt in Antarctica",
      imageUrl: "https://picsum.photos/800/451",
      snippet: "Research shows concerning acceleration in polar ice loss...",
      category: "Science"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedArticle {...mainArticle} />
          </div>
          
          <div className="space-y-8">
            {sideArticles.map((article, index) => (
              <FeaturedArticle key={index} {...article} />
            ))}
          </div>
        </div>
      </main>
      
      <RelatedArticles />
    </div>
  );
};

export default Index;