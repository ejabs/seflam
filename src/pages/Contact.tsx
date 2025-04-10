
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/common/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, support, or information"
        backgroundImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-seflam-blue dark:text-white mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
                Whether you have questions about our services, want to discuss a potential project, or are interested in career opportunities, 
                we'd love to hear from you. Our team is ready to assist you with any inquiries you may have.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="text-seflam-blue dark:text-seflam-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-200">+234 1 453 8880</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-seflam-blue dark:text-seflam-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Email</h3>
                    <p className="text-gray-700 dark:text-gray-200">info@seflamsgl.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-seflam-blue dark:text-seflam-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">Business Hours</h3>
                    <p className="text-gray-700 dark:text-gray-200">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700 dark:text-gray-200">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center dark:text-white">
                    <MapPin className="text-seflam-blue dark:text-seflam-orange mr-2" /> Head Office
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    11 Olosa Street, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center dark:text-white">
                    <MapPin className="text-seflam-blue dark:text-seflam-orange mr-2" /> Construction Yard
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    Seflam Yard, Rumuolumeni, Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
          
          <div className="bg-seflam-lightGray dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7302425683953!2d3.4246847147708765!3d6.426379395350837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe04f6c616d!2sOlosa%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1617055674469!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Seflam SGL Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
