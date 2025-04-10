import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";

const HotTapGallery = () => {
  // This would typically come from a database
  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",
      title: "Hot Tap Pipeline Connection",
      description:
        "Installation of hot tap connection on a live pipeline system.",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",
      title: "Offshore Pipeline Modification",
      description: "Hot tap operation on an offshore pipeline structure.",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",

      title: "Line Stop Equipment",
      description: "Specialized line stop equipment for pipeline isolation.",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",

      title: "Hot Tap Machinery",
      description: "Specialized hot tap machinery in action.",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",

      title: "Pipeline Welding",
      description: "Precision welding during hot tap operations.",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Onshore Pipeline Work",
      description: "Hot tap installation on an onshore pipeline network.",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",

      title: "Safety Procedures",
      description: "Safety protocols during hot tap operations.",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744248582/offshore-rig-square_jkt3qy.jpg",

      title: "Pipeline Inspection",
      description: "Quality inspection of completed hot tap installation.",
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="Hot Tap Gallery"
        subtitle="Explore our specialized hot tap and line stop operations"
        backgroundImage="https://images.unsplash.com/photo-1574394290902-7c5c475de052?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue mb-4">
              Hot Tap & Line Stop Project Gallery
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our portfolio of hot tap and line stop projects,
              showcasing our expertise in pipeline modification without
              shutdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer relative rounded-lg overflow-hidden card-shadow"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 mt-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HotTapGallery;
