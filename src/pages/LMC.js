import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  BookOpenIcon,
  ClockIcon,
  PhoneIcon,
  CalendarDaysIcon,
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-navy-900 via-ps146-navy-800 to-ps146-navy-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center bg-ps146-coral-600/10 backdrop-blur-sm text-ps146-coral-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full border border-ps146-coral-400/30">
                <BookOpenIcon className="h-5 w-5 mr-2" />
                Library Media Center
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Library Media Center
            </h1>
            <div className="w-24 h-1 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Our Library Media Center is open to all faculty, staff, students and their parents/caregivers.
              We look forward to developing independent learners and bridging the home and school community
              through our Library Media Center Program.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

            {/* Hours of Operation */}
            <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-8 rounded-3xl shadow-sm border border-ps146-navy-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-ps146-coral-100 rounded-2xl flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-ps146-coral-600" />
                </div>
                <h3 className="text-2xl font-semibold text-ps146-navy-800">Hours of Operation</h3>
              </div>
              <div className="space-y-4 text-ps146-neutral-700">
                <div className="flex justify-between items-center pb-3 border-b border-ps146-navy-100">
                  <span className="font-medium">Monday – Wednesday:</span>
                  <span className="text-ps146-navy-900 font-semibold">8:00 AM – 3:10 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Thursday – Friday:</span>
                  <span className="text-ps146-navy-900 font-semibold">8:00 AM – 2:20 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-ps146-coral-50 to-white p-8 rounded-3xl shadow-sm border border-ps146-coral-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-ps146-coral-100 rounded-2xl flex items-center justify-center mr-4">
                  <PhoneIcon className="h-6 w-6 text-ps146-coral-600" />
                </div>
                <h3 className="text-2xl font-semibold text-ps146-navy-800">Contact Information</h3>
              </div>
              <div className="space-y-3 text-ps146-neutral-700">
                <div>
                  <p className="font-medium text-ps146-navy-800 mb-2">Library Staff:</p>
                  <p className="text-lg font-semibold text-ps146-coral-700">Mr. Powers</p>
                  <p className="text-lg font-semibold text-ps146-coral-700">Ms. H. Rodriguez</p>
                  <p className="text-lg font-semibold text-ps146-coral-700">Mr. V. Rijo</p>
                </div>
                <div className="pt-4 border-t border-ps146-coral-100">
                  <p className="flex items-center mb-2">
                    <PhoneIcon className="h-4 w-4 mr-2 text-ps146-coral-600" />
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2 text-ps146-navy-900 font-semibold">(212) 860-5877 ext. 2090</span>
                  </p>
                  <p className="flex items-center">
                    <DocumentTextIcon className="h-4 w-4 mr-2 text-ps146-coral-600" />
                    <span className="font-medium">Fax:</span>
                    <span className="ml-2 text-ps146-navy-900 font-semibold">(212) 369-1225</span>
                  </p>
                </div>
              </div>
            </div>

            {/* What's on this Site */}
            <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-8 rounded-3xl shadow-sm border border-ps146-navy-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-ps146-coral-100 rounded-2xl flex items-center justify-center mr-4">
                  <GlobeAltIcon className="h-6 w-6 text-ps146-coral-600" />
                </div>
                <h3 className="text-2xl font-semibold text-ps146-navy-800">What's on this Site</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="/library-schedules"
                  className="block p-4 bg-white hover:bg-ps146-coral-50 rounded-xl border border-ps146-navy-100 hover:border-ps146-coral-200 transition-all duration-300 group"
                >
                  <p className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 mb-1">
                    The Library Schedules/Calendars
                  </p>
                  <p className="text-sm text-ps146-neutral-600">View L.M.C. availability</p>
                </a>
                <a
                  href="/library-collections"
                  className="block p-4 bg-white hover:bg-ps146-coral-50 rounded-xl border border-ps146-navy-100 hover:border-ps146-coral-200 transition-all duration-300 group"
                >
                  <p className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 mb-1">
                    L.M.C. Book Collections Info
                  </p>
                  <p className="text-sm text-ps146-neutral-600">View a general listing of the types of materials available</p>
                </a>
                <div className="block p-4 bg-white rounded-xl border border-ps146-navy-100">
                  <p className="font-semibold text-ps146-navy-800 mb-1">
                    Policies and Procedures
                  </p>
                  <p className="text-sm text-ps146-neutral-600">Info for all patrons regarding borrowing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-ps146-navy-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-ps146-navy-900 mb-4">Quick Access</h2>
              <div className="w-20 h-0.5 bg-ps146-coral-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a
                href="http://library.nycenet.edu/common/servlet/presenthomeform.do;jsessionid=E8EFADBF8B281D1656FB472D5B0DB3D2?l2m=Home&tm=Home&l2m=Home"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-ps146-coral-600 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <BookOpenIcon className="h-8 w-8 text-ps146-coral-600 group-hover:text-white mr-4 transition-colors" />
                  <h3 className="text-xl font-semibold text-ps146-navy-800 group-hover:text-white transition-colors">
                    Online Catalog
                  </h3>
                </div>
                <p className="text-ps146-neutral-600 group-hover:text-white/90 transition-colors">
                  Searchable database of materials available in the library media center
                </p>
              </a>

              <a
                href="http://ps146wiki.wikispaces.com/Databases"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-ps146-coral-600 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-ps146-coral-600 group-hover:text-white mr-4 transition-colors" />
                  <h3 className="text-xl font-semibold text-ps146-navy-800 group-hover:text-white transition-colors">
                    Learning Links
                  </h3>
                </div>
                <p className="text-ps146-neutral-600 group-hover:text-white/90 transition-colors">
                  Links to online resources for students, parents and teachers, including a variety of databases
                </p>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ps146-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-ps146-coral-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">146</span>
                </div>
                <div>
                  <div className="font-semibold text-xl">PS 146</div>
                  <div className="text-sm text-ps146-navy-300">Anna M. Short</div>
                </div>
              </div>
              <p className="text-ps146-navy-300 leading-relaxed mb-4">
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
              <p className="text-ps146-navy-400 text-sm">
                @2024 by PS146. All Rights Reserved.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-300">
                <li><a href="/library" className="hover:text-ps146-coral-400 transition-colors">Library Media Center</a></li>
                <li><a href="/school-events" className="hover:text-ps146-coral-400 transition-colors">School Events</a></li>
                <li><a href="http://www.smoothusa.com/ps146m" className="hover:text-ps146-coral-400 transition-colors">School Store</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-400 transition-colors">Supply Lists</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-ps146-navy-300">
                <p>421 E. 106th Street</p>
                <p>New York, NY 10029</p>
                <p>Hours: Mon-Fri 8:00AM-3:00PM</p>
                <p className="text-ps146-coral-400 font-medium">(212) 860-5877</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LMC;
