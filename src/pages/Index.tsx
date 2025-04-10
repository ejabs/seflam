import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Settings,
  PenTool,
  Truck,
  Anchor,
  MapPin,
  Wrench,
  PenLine,
  Scan,
  Factory,
} from "lucide-react";
import ServiceCard from "@/components/common/ServiceCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Services data
  const services = [
    {
      title: "Engineering",
      description:
        "Comprehensive engineering solutions including concept, FEED, detailed design, and more.",
      icon: <PenTool size={40} />,
      link: "/services#engineering",
    },
    {
      title: "Procurement",
      description:
        "Strategic sourcing and supply chain management for oil and gas projects.",
      icon: <Truck size={40} />,
      link: "/services#procurement",
    },
    {
      title: "Construction",
      description:
        "Expert construction services for onshore and offshore projects.",
      icon: <Settings size={40} />,
      link: "/services#construction",
    },
    {
      title: "Offshore Installation",
      description:
        "Specialized installation services for offshore oil and gas infrastructure.",
      icon: <Anchor size={40} />,
      link: "/services#offshore-installation",
    },
    {
      title: "Onshore Installation",
      description:
        "End-to-end installation services for onshore facilities and pipelines.",
      icon: <MapPin size={40} />,
      link: "/services#onshore-installation",
    },
    {
      title: "Asset Management",
      description:
        "Comprehensive maintenance and management of oil and gas assets.",
      icon: <Wrench size={40} />,
      link: "/services#asset-management",
    },
    {
      title: "Pipeline & Hot Taps",
      description:
        "Specialized hot tap and line stop services for pipeline systems.",
      icon: <PenLine size={40} />,
      link: "/services#pipeline",
    },
    {
      title: "Laser Scanning",
      description:
        "High-precision 3D laser scanning for engineering and construction projects.",
      icon: <Scan size={40} />,
      link: "/services#laser-scanning",
    },
    {
      title: "Fabrication",
      description:
        "Custom fabrication services for offshore and onshore structures.",
      icon: <Factory size={40} />,
      link: "/services#fabrication",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Engineering Excellence in <br />
            <span className="text-seflam-orange">Oil & Gas Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Providing comprehensive engineering, procurement, and construction
            services for the oil and gas industry across Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-seflam-blue hover:bg-seflam-blue/90 dark:bg-seflam-orange dark:hover:bg-seflam-orange/90"
              >
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-blue border-white hover:bg-white hover:text-seflam-blue dark:hover:text-seflam-orange"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
                About Seflam SGL
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-foreground">
                  <span className="font-semibold text-xl block mb-2">
                    World class Engineering, Procurement, Construction, and
                    Installation
                  </span>
                  Seflam SGL is an ISO 9001 Certified indigenous limited
                  liability Company incorporated under the Laws of The
                  Federation of Nigeria with Corporate Affairs Commission
                  registration number RC 1177212 providing world class
                  Engineering, Procurement, Construction and Installation (EPCI)
                  services in West Africa.
                </p>
                <p className="text-lg text-foreground">
                  With over 20 years experience delivering industry leading
                  services to Oil and Gas majors including ExxonMobil, Chevron,
                  Total, Agip and Shell, we have established ourselves as a
                  trusted partner for both local and international clients.
                </p>
                <p className="text-lg text-foreground">
                  Our commitment to excellence, innovation, and Nigerian content
                  development has made us a leading indigenous engineering
                  company in the region.
                </p>
                <div className="pt-4">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="text-seflam-blue border-seflam-blue hover:bg-seflam-blue hover:text-white dark:text-seflam-orange dark:border-seflam-orange dark:hover:bg-seflam-orange dark:hover:text-black"
                    >
                      Learn More About Us{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-8">
                <img
                  src="https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Offshore Oil Platform"
                  className="rounded-lg shadow-xl w-full object-cover h-64"
                />
                <div className="flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/daxeovezx/image/upload/v1744245543/bureau-veritas-certification-uk-limited-bsi-group-bureau-veritas-veritas-isoiec-27001-iso-9001-quality-management-system-management-system-iso-9000-quality-management_emxbbq.png"
                    alt="ISO 9001 Certification"
                    className="h-32 object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-seflam-blue dark:bg-seflam-orange p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-white dark:text-black">
                  <h3 className="text-2xl font-bold mb-2">20+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Guided by our core values, we strive to deliver exceptional
              service and contribute to Nigeria's industrial development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-seflam-blue dark:bg-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To deliver high-quality engineering solutions that exceed client
                expectations, promote sustainability, and contribute to the
                development of local content in Nigeria's oil and gas sector.
              </p>
            </div>

            <div className="bg-seflam-orange dark:bg-seflam-orange/80 text-white dark:text-black p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading indigenous engineering, procurement, and
                construction company in Nigeria, recognized for excellence,
                innovation, and commitment to sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
              Our Services
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of engineering, procurement, and
              construction services tailored to meet the unique needs of the oil
              and gas industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-seflam-blue hover:bg-seflam-blue/90 dark:bg-seflam-orange dark:hover:bg-seflam-orange/90">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-seflam-blue/80 dark:bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact our team of experts to discuss your engineering,
              procurement, and construction needs. We're here to bring your
              project to life.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-seflam-blue hover:bg-gray-100 dark:bg-seflam-orange dark:text-black dark:hover:bg-seflam-orange/90"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
