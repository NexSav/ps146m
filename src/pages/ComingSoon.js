import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  ClockIcon,
  HomeIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const ComingSoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Coming Soon - PS 146';
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-4 h-full">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="border border-ps146-navy-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-ps146-coral-100 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-ps146-coral-200 animate-pulse shadow-lg">
                <ClockIcon className="h-12 w-12 text-ps146-coral-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-ps146-coral-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            Coming Soon
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            We're working hard to bring you this page. Check back soon for updates and new content from PS 146 Anna M. Short.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-white text-ps146-navy-900 hover:bg-ps146-coral-600 hover:text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-navy-900 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Under Development',
                description: 'This page is currently being developed with new content and features to better serve our school community.',
                icon: ClockIcon,
                color: 'coral'
              },
              {
                title: 'Stay Connected',
                description: 'Follow us on social media and check our homepage regularly for the latest updates and announcements.',
                icon: EnvelopeIcon,
                color: 'navy'
              },
              {
                title: 'Need Help?',
                description: 'If you have questions or need assistance, please don\'t hesitate to contact our main office.',
                icon: HomeIcon,
                color: 'coral'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-ps146-navy-50 to-white p-8 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${
                  item.color === 'coral' ? 'bg-ps146-coral-100' : 'bg-ps146-navy-100'
                } rounded-2xl flex items-center justify-center mb-6 group-hover:${
                  item.color === 'coral' ? 'bg-ps146-coral-600' : 'bg-ps146-navy-700'
                } transition-colors`}>
                  <item.icon className={`h-8 w-8 ${
                    item.color === 'coral' ? 'text-ps146-coral-600 group-hover:text-white' : 'text-ps146-navy-700 group-hover:text-white'
                  } transition-colors`} />
                </div>
                <h3 className="text-2xl font-bold text-ps146-navy-900 mb-4 group-hover:text-ps146-coral-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ps146-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-br from-ps146-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Explore PS 146</h2>
          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8"></div>
          <p className="text-xl text-ps146-neutral-600 mb-12 leading-relaxed">
            While you're here, explore other areas of our website to learn more about PS 146 Anna M. Short.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Mission & Vision', href: '/mission-vision' },
              { name: "Principal's Message", href: '/principal-message' },
              { name: 'School Goals', href: '/school-goals' },
              { name: 'Admissions', href: '/admissions' },
              { name: 'Library Media Center', href: '/lmc' },
              { name: 'Supply Lists', href: '/supply-lists' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'Home', href: '/' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group bg-white hover:bg-ps146-coral-600 p-4 rounded-xl border border-ps146-navy-100 hover:border-ps146-coral-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <span className="text-ps146-navy-800 group-hover:text-white font-semibold transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Have Questions?
          </h2>
          <div className="w-24 h-1.5 bg-white/60 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light">
            Our team is here to help. Contact us for any questions or to learn more about PS 146.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-ps146-coral-600 hover:bg-ps146-navy-900 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
            <a
              href="tel:+12128605877"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-coral-600 px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300"
            >
              Call (212) 860-5877
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-ps146-coral-50 to-ps146-coral-100 py-16 relative overflow-hidden">
        {/* Playful decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ps146-gold-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-ps146-coral-200/40 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-ps146-coral-500 to-ps146-coral-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                  <span className="text-white font-bold text-lg">146</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-ps146-navy-900">PS 146</div>
                  <div className="text-sm text-ps146-navy-600">Anna M. Short</div>
                </div>
              </div>
              <p className="text-ps146-navy-700 text-sm leading-relaxed">
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><Link to="/" className="hover:text-ps146-coral-600 transition-colors">Home</Link></li>
                <li><Link to="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</Link></li>
                <li><Link to="/principal-message" className="hover:text-ps146-coral-600 transition-colors">Principal's Message</Link></li>
                <li><Link to="/school-goals" className="hover:text-ps146-coral-600 transition-colors">School Goals</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Resources</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><Link to="/admissions" className="hover:text-ps146-coral-600 transition-colors">Admissions</Link></li>
                <li><Link to="/lmc" className="hover:text-ps146-coral-600 transition-colors">Library Media Center</Link></li>
                <li><Link to="/supply-lists" className="hover:text-ps146-coral-600 transition-colors">Supply Lists</Link></li>
                <li><Link to="/contact" className="hover:text-ps146-coral-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Contact Info</h4>
              <div className="space-y-3 text-ps146-navy-700 text-sm">
                <p className="text-ps146-navy-900 font-medium">421 E. 106th Street</p>
                <p className="text-ps146-navy-900 font-medium">New York, NY 10029</p>
                <p className="mt-4 text-ps146-coral-600 font-bold text-lg">
                  (212) 860-5877
                </p>
                <a href="mailto:info@ps146.org" className="block text-ps146-coral-600 hover:text-ps146-coral-700 transition-colors font-medium">
                  info@ps146.org
                </a>
                <p>Mon-Fri: 8:00AM-2:20PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-ps146-coral-300 text-center text-ps146-navy-600 text-sm">
            <p>&copy; 2024 PS 146 Anna M. Short. All Rights Reserved. | Proudly created with PS146.org</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ComingSoon;
