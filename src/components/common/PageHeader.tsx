
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1518488240718-2aea3078e44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
}) => {
  return (
    <div 
      className="page-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white opacity-90">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
