import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'AI Interviews', 'Company Simulations', 'Analytics', 'Mobile App']
    },
    {
      title: 'Companies', 
      links: ['TCS Preparation', 'Accenture Mock', 'Wipro Interview', 'Infosys Simulation', 'All Companies']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Interview Tips', 'Success Stories', 'Help Center', 'API Documentation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service']
    }
  ];

  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-mono font-bold text-xl mb-4">HackerBucket</div>
            <p className="body-small text-gray-300 mb-6 max-w-sm">
              Empowering careers with AI-powered interview preparation. Land your dream job at top MNCs in India.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>support@hackerbucket.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="body-small text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
          <div className="body-small text-gray-300 mb-4 md:mb-0">
            © 2025 HackerBucket. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;