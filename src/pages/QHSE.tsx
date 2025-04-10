
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import { Shield, Heart, Leaf, PieChart, BadgeCheck, Clipboard, Award } from 'lucide-react';

const QHSE = () => {
  const qhseCategories = [
    {
      title: "Quality",
      icon: <BadgeCheck size={56} className="text-seflam-blue dark:text-seflam-orange" />,
      description: "Our commitment to quality is unwavering. We implement comprehensive quality management systems to ensure all projects meet or exceed client specifications and industry standards.",
      points: [
        "ISO 9001:2015 certified quality management system",
        "Rigorous quality control and quality assurance protocols",
        "Regular audits and continuous improvement processes",
        "Comprehensive documentation and traceability",
        "Advanced testing and inspection procedures"
      ]
    },
    {
      title: "Health",
      icon: <Heart size={56} className="text-seflam-blue dark:text-seflam-orange" />,
      description: "The health and wellbeing of our workforce is paramount. We maintain robust health management policies and procedures to protect all personnel involved in our operations.",
      points: [
        "Comprehensive health risk assessments for all operations",
        "Regular medical checks and fitness-to-work evaluations",
        "Substance abuse prevention programs",
        "Mental health awareness and support initiatives",
        "Ergonomic workplace design and assessment"
      ]
    },
    {
      title: "Safety",
      icon: <Shield size={56} className="text-seflam-blue dark:text-seflam-orange" />,
      description: "Safety is our top priority in every project. We maintain rigorous safety standards and foster a culture where every employee is responsible for both personal and collective safety.",
      points: [
        "Zero accident philosophy and target",
        "Comprehensive safety training and certification programs",
        "Detailed job safety analysis for all operations",
        "Regular safety drills and emergency response training",
        "Advanced personal protective equipment standards",
        "Incident reporting and investigation system"
      ]
    },
    {
      title: "Environment",
      icon: <Leaf size={56} className="text-seflam-blue dark:text-seflam-orange" />,
      description: "We are committed to minimizing the environmental impact of our operations through careful planning, sustainable practices, and continuous monitoring.",
      points: [
        "ISO 14001:2015 certified environmental management system",
        "Environmental impact assessments for all projects",
        "Waste reduction and recycling initiatives",
        "Spill prevention and response procedures",
        "Energy efficiency and carbon footprint reduction programs",
        "Compliance with all local and international environmental regulations"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Quality, Health, Safety & Environment" 
        subtitle="Our commitment to maintaining the highest standards in QHSE"
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-seflam-blue dark:text-seflam-orange mb-4">Our QHSE Philosophy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              At Seflam SGL, we believe that excellence in Quality, Health, Safety, and Environment is fundamental to our success. 
              Our integrated QHSE management system ensures that these principles are embedded in every aspect of our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {qhseCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-t-4 border-seflam-blue dark:border-seflam-orange">
                <div className="flex flex-col items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold mt-4 dark:text-white">{category.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-seflam-blue dark:text-seflam-orange mr-2 font-bold">•</span>
                      <span className="dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-seflam-lightGray dark:bg-gray-800 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="md:mr-8 mb-6 md:mb-0">
                <PieChart size={72} className="text-seflam-blue dark:text-seflam-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">QHSE Performance Metrics</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We maintain transparent QHSE performance metrics and set challenging targets for continuous improvement. 
                  Our commitment to excellence is reflected in our outstanding safety records and client satisfaction.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-seflam-blue dark:text-seflam-orange mb-2">0</div>
                <p className="text-gray-700 dark:text-gray-300">Lost Time Incidents in 3+ Years</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-seflam-blue dark:text-seflam-orange mb-2">100%</div>
                <p className="text-gray-700 dark:text-gray-300">Regulatory Compliance</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl font-bold text-seflam-blue dark:text-seflam-orange mb-2">10,000+</div>
                <p className="text-gray-700 dark:text-gray-300">Safety Training Hours Annually</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-seflam-blue dark:text-seflam-orange">QHSE Certifications & Compliance</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Seflam SGL maintains all relevant QHSE certifications and complies with international standards and local regulations. 
                Our certifications demonstrate our commitment to maintaining the highest standards in all aspects of our operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="text-seflam-blue dark:text-seflam-orange mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold dark:text-white">ISO 9001:2015</h4>
                    <p className="text-gray-600 dark:text-gray-400">Quality Management System</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-seflam-blue dark:text-seflam-orange mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold dark:text-white">ISO 14001:2015</h4>
                    <p className="text-gray-600 dark:text-gray-400">Environmental Management System</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-seflam-blue dark:text-seflam-orange mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold dark:text-white">ISO 45001:2018</h4>
                    <p className="text-gray-600 dark:text-gray-400">Occupational Health and Safety Management System</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-seflam-blue dark:text-seflam-orange mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold dark:text-white">API Q1</h4>
                    <p className="text-gray-600 dark:text-gray-400">American Petroleum Institute Quality Management</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="QHSE Standards" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-seflam-blue dark:bg-seflam-orange p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="text-white flex items-center">
                    <Clipboard className="mr-3" />
                    <div>
                      <p className="font-bold">QHSE Policy</p>
                      <p className="text-sm">Available upon request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default QHSE;
