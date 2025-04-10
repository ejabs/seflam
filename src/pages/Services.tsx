import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import {
  PenTool,
  Truck,
  Settings,
  Anchor,
  MapPin,
  Wrench,
  PenLine,
  Scan,
  Factory,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "engineering",
      title: "Engineering",
      icon: (
        <PenTool
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "Our engineering services cover the complete project lifecycle, from concept development to detailed design and implementation. We specialize in:",
      points: [
        "Conceptual Studies and FEED (Front End Engineering Design)",
        "Detailed Engineering and Design",
        "Piping and Pipeline Engineering",
        "Structural Engineering",
        "Electrical and Instrumentation Engineering",
        "As-Built Documentation and 3D Modeling",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "procurement",
      title: "Procurement",
      icon: (
        <Truck size={48} className="text-seflam-blue dark:text-seflam-orange" />
      ),
      description:
        "Our procurement specialists manage the entire supply chain process, ensuring timely delivery of quality materials and equipment for your project:",
      points: [
        "Vendor Selection and Qualification",
        "Material Requisition and Purchase Orders",
        "Expediting and Inspection",
        "Logistics and Transportation",
        "Customs Clearance and Documentation",
        "Warehouse Management and Inventory Control",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246582/inventory-and-warehouse-management-complete-guide-1_b6gnto.jpg",
    },
    {
      id: "construction",
      title: "Construction",
      icon: (
        <Settings
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "Our construction capabilities encompass various aspects of oil and gas infrastructure development:",
      points: [
        "Site Preparation and Civil Works",
        "Mechanical and Structural Installation",
        "Electrical and Instrumentation Installation",
        "Piping Fabrication and Installation",
        "Equipment Installation and Commissioning",
        "Quality Control and Project Management",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "offshore-installation",
      title: "Offshore Installation",
      icon: (
        <Anchor
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "We specialize in the installation of structures and equipment in offshore environments:",
      points: [
        "Platform Installation and Retrofitting",
        "Subsea Pipeline Installation",
        "Riser Installation and Hook-up",
        "Offshore Module Installation",
        "Mooring Systems Installation",
        "Offshore Construction Support Services",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/offshore-installation_pmfecd.jpg",
    },
    {
      id: "onshore-installation",
      title: "Onshore Installation",
      icon: (
        <MapPin
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "Our onshore installation services cover a wide range of infrastructure projects:",
      points: [
        "Terminal and Storage Facility Construction",
        "Process Plant Installation",
        "Pipeline Installation and Testing",
        "Pump Station Construction",
        "Metering and Control Systems Installation",
        "Facility Expansion and Upgrades",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246583/onshore-installation-4_p5ra0w.jpg",
    },
    {
      id: "asset-management",
      title: "Asset Management",
      icon: (
        <Wrench
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "We offer comprehensive asset management services to maximize the efficiency and lifespan of your oil and gas assets:",
      points: [
        "Preventive and Corrective Maintenance",
        "Asset Integrity Management",
        "Condition Monitoring and Assessment",
        "Equipment Overhaul and Replacement",
        "Performance Optimization",
        "Facility Management and Operations Support",
      ],
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pipeline",
      title: "Pipeline and Equipment Hot Taps & Line Stop",
      icon: (
        <PenLine
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "Our specialized hot tap and line stop services allow for pipeline modifications without shutdown:",
      points: [
        "Hot Tapping on Live Pipelines",
        "Line Stopping and Isolation",
        "Pipeline Repair and Modification",
        "Pipeline Integrity Assessment",
        "Equipment Tie-ins and Connections",
        "Emergency Response Services",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246581/alignment_fo13zl.jpg",
    },
    {
      id: "laser-scanning",
      title: "Laser Scanning",
      icon: (
        <Scan size={48} className="text-seflam-blue dark:text-seflam-orange" />
      ),
      description:
        "Our advanced laser scanning services provide high-precision 3D data for a variety of applications:",
      points: [
        "As-Built Verification and Documentation",
        "Dimensional Control and Analysis",
        "Clash Detection and Resolution",
        "Retrofitting and Revamp Planning",
        "Equipment Alignment and Positioning",
        "Digital Twin Creation",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246828/laser-scanning_mpedjq.jpg",
    },
    {
      id: "fabrication",
      title: "Fabrication",
      icon: (
        <Factory
          size={48}
          className="text-seflam-blue dark:text-seflam-orange"
        />
      ),
      description:
        "Our fabrication services include the production of custom components and structures for oil and gas projects:",
      points: [
        "Structural Steel Fabrication",
        "Piping Spools and Manifolds",
        "Pressure Vessels and Tanks",
        "Process Skids and Modules",
        "Custom Equipment and Components",
        "Quality Assurance and Testing",
      ],
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1744246584/fabrication_n7zjf4.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="Our Services"
        subtitle="Comprehensive engineering, procurement, and construction solutions for the oil and gas industry."
        backgroundImage="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue dark:text-seflam-orange mb-4">
              Comprehensive Oil & Gas Services
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              At Seflam SGL, we offer a complete range of services designed to
              meet the unique challenges of the oil and gas industry, from
              initial concept to ongoing maintenance.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl md:text-3xl font-bold ml-4 text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-seflam-blue dark:text-seflam-orange mr-2">
                          •
                        </span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: "400px" }}
                  />
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

export default Services;
