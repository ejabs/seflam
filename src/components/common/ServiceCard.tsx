
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg card-shadow p-6 hover:border-seflam-blue hover:border transition-all">
      <div className="text-seflam-blue mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-seflam-gray mb-4">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="w-full hover:bg-seflam-blue hover:text-white transition-colors">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
