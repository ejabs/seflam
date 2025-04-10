import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";

const MiscellaneousGallery = () => {
  // This would typically come from a database
  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246583/onshore-installation-4_p5ra0w.jpg",
      title: "Facility Overview",
      description: "Aerial view of an oil and gas processing facility.",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246583/onshore-installation-4_p5ra0w.jpg",

      title: "Construction Team",
      description: "Our construction team at work on a major project.",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fabrication Shop",
      description: "Inside our state-of-the-art fabrication workshop.",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Engineering Design",
      description: "Engineering team working on detailed project designs.",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Quality Inspection",
      description: "Quality control process for manufactured components.",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Safety Training",
      description: "Regular safety training sessions for all personnel.",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246583/onshore-installation-4_p5ra0w.jpg",

      title: "Equipment Testing",
      description: "Rigorous testing of equipment before deployment.",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Project Planning",
      description:
        "Project management team discussing implementation strategy.",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Client Meeting",
      description:
        "Collaborative session with clients to discuss project requirements.",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246583/onshore-installation-4_p5ra0w.jpg",

      title: "Completed Project",
      description: "View of a successfully completed project by Seflam SGL.",
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="Miscellaneous Gallery"
        subtitle="A diverse collection showcasing various aspects of our operations"
        backgroundImage="https://images.unsplash.com/photo-1558214225-08391a2e566a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue mb-4">
              Diverse Project Collection
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through a diverse collection of images showcasing various
              aspects of our operations, facilities, team, and completed
              projects.
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

export default MiscellaneousGallery;
