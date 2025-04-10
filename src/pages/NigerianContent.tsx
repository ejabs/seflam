import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import {
  Users,
  GraduationCap,
  Building,
  Handshake,
  Award,
  TrendingUp,
  Map,
} from "lucide-react";

const NigerianContent = () => {
  const contentAreas = [
    {
      title: "Local Employment",
      icon: <Users size={48} className="text-seflam-blue dark:text-white" />,
      description:
        "We prioritize hiring and developing Nigerian professionals at all levels of our organization, from technical roles to leadership positions.",
      achievements: [
        "Over 95% Nigerian workforce across all projects",
        "Comprehensive career development programs for local talent",
        "Regular skills assessment and advancement opportunities",
        "Competitive compensation and benefits packages",
      ],
    },
    {
      title: "Education & Training",
      icon: (
        <GraduationCap size={48} className="text-seflam-blue dark:text-white" />
      ),
      description:
        "We invest in building the capacity of Nigerian professionals through structured training programs and educational partnerships.",
      achievements: [
        "Technical training programs for engineers and technicians",
        "Internship opportunities for Nigerian students",
        "Scholarships for engineering and technical education",
        "Partnerships with Nigerian educational institutions",
        "Mentorship programs for young professionals",
      ],
    },
    {
      title: "Local Supply Chain",
      icon: <Building size={48} className="text-seflam-blue dark:text-white" />,
      description:
        "We actively engage Nigerian suppliers and contractors, helping them develop capabilities to meet industry standards.",
      achievements: [
        "Supplier development program for local vendors",
        "Preferential consideration for qualified Nigerian suppliers",
        "Technical support to help local companies meet quality standards",
        "Long-term partnership agreements with Nigerian businesses",
        "Regular supplier performance reviews and improvement planning",
      ],
    },
    {
      title: "Community Development",
      icon: (
        <Handshake size={48} className="text-seflam-blue dark:text-white" />
      ),
      description:
        "We contribute to the sustainable development of communities where we operate through targeted initiatives and partnerships.",
      achievements: [
        "Community-based training and skill acquisition programs",
        "Infrastructure development in operational communities",
        "Support for local healthcare and educational facilities",
        "Environmental protection and conservation initiatives",
        "Regular stakeholder engagement and community relations",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <PageHeader
        title="Nigerian Content Development"
        subtitle="Our commitment to advancing local capacity in the oil and gas industry"
        backgroundImage="https://res.cloudinary.com/daxeovezx/image/upload/v1744249687/home-footer-image-01_iapjwr.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue dark:text-white mb-4">
              Our Nigerian Content Commitment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              At Seflam SGL, we are dedicated to advancing Nigerian content
              development in the oil and gas industry through strategic
              initiatives that build local capacity, create sustainable
              employment, and foster economic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {contentAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
              >
                <div className="flex flex-col items-center mb-6">
                  {area.icon}
                  <h3 className="text-2xl font-bold mt-4 dark:text-white">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">
                  {area.description}
                </p>
                <h4 className="font-semibold mb-3 text-seflam-blue dark:text-seflam-orange">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {area.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-seflam-orange mr-2 font-bold">
                        •
                      </span>
                      <span className="dark:text-gray-200">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-seflam-blue text-white rounded-lg p-8 md:p-12 mb-20">
            <div className="text-center mb-10">
              <Award size={64} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Nigerian Content Certifications & Compliance
              </h3>
              <p className="max-w-3xl mx-auto">
                Seflam SGL maintains full compliance with the Nigerian Oil and
                Gas Industry Content Development Act and holds all relevant
                certifications from the Nigerian Content Development and
                Monitoring Board (NCDMB).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p>NCDMB Compliance Rating</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">A+</div>
                <p>Nigerian Content Performance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">95%+</div>
                <p>Nigerian Workforce</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-seflam-blue dark:text-white">
                Strategic Nigerian Content Plan
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                Our Nigerian Content Strategy is built on a comprehensive plan
                that integrates local content development into every aspect of
                our operations. This strategic approach ensures sustainable
                growth and development for both our company and the Nigerian oil
                and gas industry.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <TrendingUp className="text-seflam-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Economic Impact
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We contribute to Nigeria's economic growth by creating
                      jobs, building local capacity, and supporting indigenous
                      businesses throughout our supply chain.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Map className="text-seflam-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">
                      Technology Transfer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We facilitate knowledge and technology transfer through
                      targeted training programs, collaborative projects, and
                      strategic partnerships with educational institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/daxeovezx/image/upload/v1744249485/nigerian-content-2_ndkgyb.jpg"
                alt="Nigerian professionals at work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NigerianContent;
