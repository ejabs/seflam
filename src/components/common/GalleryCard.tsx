
import React from 'react';
import { Link } from 'react-router-dom';

interface GalleryCardProps {
  title: string;
  imageUrl: string;
  link: string;
  count: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  imageUrl,
  link,
  count,
}) => {
  return (
    <Link to={link} className="block group">
      <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-200">{count} photos</p>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
