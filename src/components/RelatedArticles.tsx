import FeaturedArticle from './FeaturedArticle';

const RelatedArticles = () => {
  const articles = [
    {
      title: "Climate progress screeched to a halt this year. One country had its foot on the brake",
      imageUrl: "https://picsum.photos/800/450",
      snippet: "The world's most ambitious climate negotiations faced unprecedented obstruction...",
      category: "Climate"
    },
    {
      title: "Global temperatures hit new records as climate crisis deepens",
      imageUrl: "https://picsum.photos/800/451",
      snippet: "Scientists warn of accelerating climate change impacts as temperatures soar...",
      category: "Environment"
    },
    {
      title: "New study reveals rapid ice melt in Antarctica",
      imageUrl: "https://picsum.photos/800/452",
      snippet: "Research shows concerning acceleration in polar ice loss...",
      category: "Science"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <FeaturedArticle key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;