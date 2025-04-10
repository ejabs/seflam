import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import {
  Briefcase,
  Users,
  BookOpen,
  Medal,
  BriefcaseBusiness,
  Heart,
  TrendingUp,
  Mountain,
} from "lucide-react";

const Careers = () => {
  const { toast } = useToast();

  const careerBenefits = [
    {
      title: "Professional Growth",
      icon: (
        <TrendingUp size={36} className="text-seflam-blue dark:text-white" />
      ),
      description:
        "Continuous learning and career advancement opportunities through structured development programs.",
    },
    {
      title: "Challenging Projects",
      icon: <Mountain size={36} className="text-seflam-blue dark:text-white" />,
      description:
        "Work on diverse, complex projects that push the boundaries of engineering and technology.",
    },
    {
      title: "Collaborative Culture",
      icon: <Users size={36} className="text-seflam-blue dark:text-white" />,
      description:
        "Join a team of dedicated professionals who share knowledge and support each other's success.",
    },
    {
      title: "Comprehensive Benefits",
      icon: <Heart size={36} className="text-seflam-blue dark:text-white" />,
      description:
        "Enjoy competitive compensation, health benefits, and work-life balance policies.",
    },
  ];

  const currentOpenings = [
    {
      title: "Senior Mechanical Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
    },
    {
      title: "HSE Officer",
      department: "QHSE",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "Procurement Specialist",
      department: "Supply Chain",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
    },
    {
      title: "Fabrication Supervisor",
      department: "Fabrication",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Application Submitted",
      description:
        "Thank you for your interest. We will review your application and contact you soon.",
    });
  };

  return (
    <>
      <Navbar />

      <PageHeader
        title="Careers at Seflam SGL"
        subtitle="Join our team of professionals making a difference in the oil and gas industry"
        backgroundImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue dark:text-white mb-4">
              Grow Your Career With Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              At Seflam SGL, we believe that our people are our greatest asset.
              We are committed to creating an environment where talent is
              nurtured, diversity is celebrated, and innovation thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-seflam-blue dark:text-white">
                Why Join Seflam SGL?
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                Joining Seflam SGL means becoming part of a dynamic team that
                values excellence, innovation, and professional growth. We offer
                a challenging yet supportive environment where you can develop
                your skills and advance your career while contributing to
                significant projects in the oil and gas industry.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Briefcase className="text-seflam-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Industry Leadership
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Work with a leading company in the oil and gas
                      engineering, procurement, and construction sector.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <BookOpen className="text-seflam-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access ongoing training, educational support, and
                      professional development opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Medal className="text-seflam-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Recognition & Rewards
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Benefit from performance recognition and competitive
                      compensation packages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating on project"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-seflam-lightGray dark:bg-gray-800 rounded-lg p-8 md:p-12 mb-20">
            <div className="text-center mb-12">
              <BriefcaseBusiness
                size={48}
                className="text-seflam-blue dark:text-white mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Current Job Openings
              </h3>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
                Explore our current job opportunities and find a role that
                matches your skills and career aspirations.
              </p>
            </div>

            <div className="space-y-6">
              {currentOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-2 dark:text-white">
                        {job.title}
                      </h4>
                      <div className="space-x-4">
                        <span className="text-gray-600 dark:text-gray-300">
                          {job.department}
                        </span>
                        <span className="text-gray-400 dark:text-gray-400">
                          |
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {job.location}
                        </span>
                        <span className="text-gray-400 dark:text-gray-400">
                          |
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="mt-4 md:mt-0 bg-seflam-blue text-white hover:bg-seflam-blue/90"
                      onClick={() => {
                        document
                          .getElementById("application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="application-form" className="scroll-mt-20">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  Submit Your Application
                </h3>
                <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
                  Interested in joining our team? Please fill out the form below
                  to submit your application. We review all applications
                  carefully and will contact you if there's a match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-1 dark:text-gray-200"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      required
                      placeholder="John Doe"
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 dark:text-gray-200"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1 dark:text-gray-200"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      required
                      placeholder="+234 000 000 0000"
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium mb-1 dark:text-gray-200"
                    >
                      Position Applied For *
                    </label>
                    <Input
                      id="position"
                      required
                      placeholder="e.g. Senior Mechanical Engineer"
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium mb-1 dark:text-gray-200"
                  >
                    Years of Experience *
                  </label>
                  <Input
                    id="experience"
                    type="number"
                    required
                    placeholder="e.g. 5"
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 dark:text-gray-200"
                  >
                    Cover Letter *
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us about yourself and why you're interested in this position..."
                    rows={6}
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium mb-1 dark:text-gray-200"
                  >
                    Resume/CV Upload *
                  </label>
                  <Input
                    id="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="bg-seflam-blue hover:bg-seflam-blue/90 w-full md:w-auto px-8"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
