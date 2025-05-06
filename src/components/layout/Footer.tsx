import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-teal-500" />
              <span className="text-xl font-bold">EduTech</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Empowering B.Tech students with quality education and resources to build the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/forums" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Fields */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Engineering Fields</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses?category=Computer Science" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Electrical Engineering" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Mechanical Engineering" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Civil Engineering" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Electronics" className="text-slate-400 hover:text-teal-500 transition-colors">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-slate-400">support@edutech.com</span>
              </li>
              <li className="text-slate-400">
                123 Education Street, Tech Campus, 
                <br />
                Innovation City, 560001
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button className="px-4 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} EduTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-500 hover:text-teal-500 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;