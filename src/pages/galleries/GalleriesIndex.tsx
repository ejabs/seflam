
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import GalleryCard from '@/components/common/GalleryCard';

const GalleriesIndex = () => {
  const galleries = [
    {
      title: "Hot Tap Gallery",
      description: "Explore our specialized hot tap and line stop operations",
      imageUrl: "https://images.unsplash.com/photo-1574394290902-7c5c475de052?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/galleries/hot-tap",
      count: 8
    },
    {
      title: "QPDUP Gallery",
      description: "Quality, Procurement, Design, Upgrade, Production projects",
      imageUrl: "https://images.unsplash.com/photo-1605051623064-5562f642c8c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/galleries/qpdup",
      count: 9
    },
    {
      title: "Miscellaneous Gallery",
      description: "A diverse collection from various projects and operations",
      imageUrl: "https://images.unsplash.com/photo-1558214225-08391a2e566a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/galleries/miscellaneous",
      count: 10
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Project Galleries" 
        subtitle="Explore visual showcases of our various projects and operations"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue mb-4">Explore Our Project Galleries</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our collection of project galleries showcasing our expertise in various aspects of oil and gas engineering, procurement, and construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleries.map((gallery, index) => (
              <GalleryCard
                key={index}
                title={gallery.title}
                imageUrl={gallery.imageUrl}
                link={gallery.link}
                count={gallery.count}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default GalleriesIndex;
