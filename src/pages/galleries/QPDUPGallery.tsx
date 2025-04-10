import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";

const QPDUPGallery = () => {
  // This would typically come from a database
  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",
      title: "QPDUP Pipeline Installation",
      description:
        "Installation of pipeline components during a QPDUP project.",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",

      title: "Platform Construction",
      description: "Construction of platform elements for QPDUP operations.",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",

      title: "QPDUP Equipment",
      description: "Specialized equipment used in QPDUP projects.",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Offshore Operations",
      description: "QPDUP operations in an offshore environment.",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",

      title: "Pipeline Connection",
      description: "Connection of pipeline segments in a QPDUP project.",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",

      title: "Engineering Team",
      description: "Our engineering team planning a QPDUP operation.",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Safety Procedures",
      description: "Safety protocols during QPDUP construction.",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Quality Inspection",
      description: "Quality control inspection of QPDUP components.",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",

      title: "Project Completion",
      description: "Completed QPDUP project in operation.",
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="QPDUP Gallery"
        subtitle="Showcasing our QPDUP (Quality, Procurement, Design, Upgrade, Production) projects"
        backgroundImage="https://images.unsplash.com/photo-1605051623064-5562f642c8c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue mb-4">
              QPDUP Project Showcase
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of Quality, Procurement, Design, Upgrade,
              and Production (QPDUP) projects, highlighting our comprehensive
              approach to oil and gas infrastructure development.
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

export default QPDUPGallery;
