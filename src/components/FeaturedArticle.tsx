import { useState } from 'react';

interface FeaturedArticleProps {
  title: string;
  imageUrl: string;
  snippet: string;
  category: string;
}

const FeaturedArticle = ({ title, imageUrl, snippet, category }: FeaturedArticleProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="relative group cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <span className="text-cnn-red font-bold uppercase text-sm">{category}</span>
        <h2 className="text-2xl font-bold mt-2 group-hover:text-cnn-red">
          {title}
        </h2>
        <p className="mt-2 text-cnn-bodyText text-sm">
          {snippet}
        </p>
      </div>
    </article>
  );
};

export default FeaturedArticle;