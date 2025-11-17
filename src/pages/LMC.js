import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  BookOpenIcon,
  ClockIcon,
  PhoneIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const LMC = () => {
  useEffect(() => {
    document.title = 'School Library - PS 146';
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-ps146-coral-100 text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 px-4 py-2 rounded-full">
              Library Media Center
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            Library Media Center
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-4xl mx-auto leading-relaxed font-light">
            Our Library Media Center is open to all faculty, staff, students and their parents/caregivers.
            We look forward to developing independent learners and bridging the home and school community
            through our Library Media Center Program.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

            {/* Hours of Operation */}
            <div className="group bg-gradient-to-br from-ps146-navy-50 to-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-coral-600 transition-colors">
                  <ClockIcon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">Hours of Operation</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>
              <div className="space-y-6 text-ps146-neutral-700">
                <div className="flex flex-col pb-4 border-b border-ps146-navy-100">
                  <span className="font-bold text-ps146-navy-900 mb-2">Monday – Friday:</span>
                  <span className="text-ps146-coral-600 font-semibold text-lg">8:00 AM – 2:20 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="group bg-gradient-to-br from-ps146-coral-50 to-white p-10 rounded-3xl shadow-lg border border-ps146-coral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-coral-600 transition-colors">
                  <PhoneIcon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">Contact Information</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>
              <div className="space-y-5 text-ps146-neutral-700">
                <div>
                  <p className="font-bold text-ps146-navy-900 mb-3">Library Staff:</p>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-ps146-coral-700">Ms. H. Rodriguez</p>
                    <p className="text-lg font-medium text-ps146-coral-700">Mr. V. Rijo</p>
                  </div>
                </div>
                <div className="pt-5 border-t border-ps146-coral-200 space-y-3">
                  <p className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 text-ps146-coral-600" />
                    <span className="font-bold text-ps146-navy-900">Phone:</span>
                    <span className="ml-2 text-ps146-coral-600 font-semibold">(212) 860-5877 ext. 2090</span>
                  </p>
                </div>
              </div>
            </div>

            {/* What's on this Site */}
            <div className="group bg-gradient-to-br from-ps146-navy-50 to-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-coral-600 transition-colors">
                  <GlobeAltIcon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">What's on this Site</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>
              <div className="space-y-4">
                <a
                  href="/library-schedules"
                  className="block p-5 bg-white hover:bg-ps146-coral-50 rounded-2xl border border-ps146-navy-100 hover:border-ps146-coral-200 hover:shadow-md transition-all duration-300 group"
                >
                  <p className="font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 mb-1">
                    The Library Schedules/Calendars
                  </p>
                  <p className="text-sm text-ps146-neutral-600">View L.M.C. availability</p>
                </a>
                <a
                  href="/library-collections"
                  className="block p-5 bg-white hover:bg-ps146-coral-50 rounded-2xl border border-ps146-navy-100 hover:border-ps146-coral-200 hover:shadow-md transition-all duration-300 group"
                >
                  <p className="font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 mb-1">
                    L.M.C. Book Collections Info
                  </p>
                  <p className="text-sm text-ps146-neutral-600">View a general listing of the types of materials available</p>
                </a>
                <div className="block p-5 bg-white rounded-2xl border border-ps146-navy-100">
                  <p className="font-bold text-ps146-navy-900 mb-1">
                    Policies and Procedures
                  </p>
                  <p className="text-sm text-ps146-neutral-600">Info for all patrons regarding borrowing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Quick Access</h2>
              <div className="w-24 h-1.5 bg-white/60 mx-auto"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a
                href="http://library.nycenet.edu/common/servlet/presenthomeform.do;jsessionid=E8EFADBF8B281D1656FB472D5B0DB3D2?l2m=Home&tm=Home&l2m=Home"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white p-10 rounded-3xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 group-hover:bg-ps146-coral-600 rounded-xl flex items-center justify-center mr-4 transition-colors">
                    <BookOpenIcon className="h-7 w-7 text-white group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-ps146-navy-900 transition-colors">
                    Online Catalog
                  </h3>
                </div>
                <p className="text-white/90 group-hover:text-ps146-neutral-700 transition-colors leading-relaxed">
                  Searchable database of materials available in the library media center
                </p>
              </a>

              <a
                href="http://ps146wiki.wikispaces.com/Databases"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white p-10 rounded-3xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 group-hover:bg-ps146-coral-600 rounded-xl flex items-center justify-center mr-4 transition-colors">
                    <GlobeAltIcon className="h-7 w-7 text-white group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-ps146-navy-900 transition-colors">
                    Learning Links
                  </h3>
                </div>
                <p className="text-white/90 group-hover:text-ps146-neutral-700 transition-colors leading-relaxed">
                  Links to online resources for students, parents and teachers, including a variety of databases
                </p>
              </a>
            </div>
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
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</a></li>
                <li><a href="/library" className="hover:text-ps146-coral-600 transition-colors">Library Media Center</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-600 transition-colors">Supply Lists</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Library Hours</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li>Mon-Fri: 8:00 AM - 2:20 PM</li>
                <li>Phone: Ext. 2090</li>
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

export default LMC;
