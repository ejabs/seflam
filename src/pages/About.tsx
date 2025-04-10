import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Award,
  Building,
  ArrowRight,
  Calendar,
  Map,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2003",
      title: "Company Founded",
      description:
        "Seflam SGL was founded to provide indigenous engineering solutions to Nigeria's growing oil and gas industry.",
    },
    {
      year: "2008",
      title: "First Major Contract",
      description:
        "Secured our first major contract with a multinational oil company for pipeline installation services.",
    },
    {
      year: "2013",
      title: "ISO 9001 Certification",
      description:
        "Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.",
    },
    {
      year: "2015",
      title: "Expansion of Services",
      description:
        "Expanded our service offerings to include comprehensive EPCI solutions for both onshore and offshore projects.",
    },
    {
      year: "2018",
      title: "Nigerian Content Champion",
      description:
        "Recognized as a leading contributor to Nigerian content development in the oil and gas sector.",
    },
    {
      year: "2023",
      title: "Celebrating 20 Years",
      description:
        "Celebrating two decades of excellence in engineering services and looking forward to future growth.",
    },
  ];

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in every project we undertake.",
      icon: (
        <Award className="h-12 w-12 text-seflam-blue dark:text-seflam-orange" />
      ),
    },
    {
      title: "Integrity",
      description:
        "We conduct all business with the highest ethical standards and transparency.",
      icon: (
        <Target className="h-12 w-12 text-seflam-blue dark:text-seflam-orange" />
      ),
    },
    {
      title: "Innovation",
      description:
        "We continuously seek innovative solutions to complex engineering challenges.",
      icon: (
        <Building className="h-12 w-12 text-seflam-blue dark:text-seflam-orange" />
      ),
    },
    {
      title: "Teamwork",
      description:
        "We value collaboration and believe that our strength lies in our diverse team.",
      icon: (
        <Users className="h-12 w-12 text-seflam-blue dark:text-seflam-orange" />
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="About Seflam SGL"
        subtitle="A leading indigenous engineering company in Nigeria's oil and gas sector"
        backgroundImage="https://res.cloudinary.com/daxeovezx/image/upload/v1744253460/Layer-4_aqllan.jpg"
      />

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
                Our Story
              </h2>
              <div className="space-y-6 text-foreground dark:text-gray-300">
                <p className="text-lg">
                  Seflam SGL was established in 2003 as an indigenous
                  engineering services company with a vision to become a leading
                  provider of comprehensive engineering, procurement,
                  construction, and installation (EPCI) services in Nigeria's
                  oil and gas industry.
                </p>
                <p className="text-lg">
                  Over the past two decades, we have grown from a small local
                  contractor to a fully integrated EPCI company, serving major
                  international and national oil companies operating in West
                  Africa.
                </p>
                <p className="text-lg">
                  Our success is built on our unwavering commitment to
                  excellence, integrity, and the development of local content
                  and capabilities. We take pride in our ability to deliver
                  world-class solutions while contributing to the growth of
                  Nigeria's industrial capacity.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/daxeovezx/image/upload/v1744253460/team-picture_rdbcyi.jpg"
                alt="Seflam SGL Operations"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-seflam-blue dark:bg-seflam-orange p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-white dark:text-black">
                  <h3 className="text-2xl font-bold mb-2">20+</h3>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground dark:text-gray-300 max-w-3xl mx-auto">
              At Seflam SGL, our values guide every decision we make and every
              project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History/Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
              Our Journey
            </h2>
            <p className="text-lg text-foreground dark:text-gray-300 max-w-3xl mx-auto">
              Over two decades of growth, innovation, and excellence in
              Nigeria's oil and gas sector.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-seflam-blue dark:bg-seflam-orange z-0"></div>

            {/* Timeline events */}
            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-4 md:pb-0">
                    <div
                      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md ${
                        index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2 text-seflam-blue dark:text-seflam-orange">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-seflam-blue dark:bg-seflam-orange text-white dark:text-black flex items-center justify-center font-bold shadow-lg">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12 pt-4 md:pt-0">
                    <div className="text-xl font-bold text-seflam-blue dark:text-seflam-orange">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
              Leadership Team
            </h2>
            <p className="text-lg text-foreground dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of
              expertise in engineering, project management, and oil & gas
              operations.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground dark:text-gray-300 mb-8">
              With a combined experience of over 100 years in the industry, our
              management team has successfully delivered numerous complex
              projects for major clients throughout Nigeria and West Africa.
            </p>
            <Link to="/contact">
              <Button className="bg-seflam-blue hover:bg-seflam-blue/90 dark:bg-seflam-orange dark:hover:bg-seflam-orange/90">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">
                Where We Operate
              </h2>
              <div className="space-y-6 text-foreground dark:text-gray-300">
                <p className="text-lg">
                  Seflam SGL has established a strong presence across Nigeria,
                  with operations focused primarily in the oil-rich Niger Delta
                  region.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-seflam-blue dark:text-seflam-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Niger Delta Region
                      </h3>
                      <p>
                        Comprehensive EPCI services for onshore and offshore
                        projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-seflam-blue dark:text-seflam-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Lagos</h3>
                      <p>
                        Corporate headquarters and engineering design center
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-seflam-blue dark:text-seflam-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Port Harcourt</h3>
                      <p>
                        Operational base for Niger Delta projects and
                        fabrication facilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-seflam-blue dark:text-seflam-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">West Africa</h3>
                      <p>
                        Expanding operations to serve clients throughout the
                        West African region
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="text-seflam-blue border-seflam-blue hover:bg-seflam-blue hover:text-white dark:text-seflam-orange dark:border-seflam-orange dark:hover:bg-seflam-orange dark:hover:text-black"
                  >
                    Contact Our Local Office <Map className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Map of Operations"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-seflam-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Partner with Seflam SGL for your next engineering, procurement,
            construction, or installation project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-seflam-blue hover:bg-gray-100 dark:bg-seflam-orange dark:text-black dark:hover:bg-seflam-orange/90"
              >
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
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

export default About;
