import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const SupplyLists = () => {
  useEffect(() => {
    document.title = 'Supply Lists 2025-2026 - PS 146';
  }, []);

  const supplyLists = [
    {
      grade: 'Pre-K',
      fileName: 'prek.pdf',
      description: 'Pre-Kindergarten supply requirements',
      color: 'from-purple-50 to-white border-purple-100'
    },
    {
      grade: '3-K',
      fileName: '3k.pdf',
      description: '3-K supply requirements',
      color: 'from-pink-50 to-white border-pink-100'
    },
    {
      grade: '1st Grade',
      fileName: '1st.pdf',
      description: 'First grade supply requirements',
      color: 'from-blue-50 to-white border-blue-100'
    },
    {
      grade: '2nd Grade',
      fileName: '2nd.pdf',
      description: 'Second grade supply requirements',
      color: 'from-green-50 to-white border-green-100'
    },
    {
      grade: '3rd Grade',
      fileName: '3rd.pdf',
      description: 'Third grade supply requirements',
      color: 'from-yellow-50 to-white border-yellow-100'
    },
    {
      grade: '4th Grade',
      fileName: '4th.pdf',
      description: 'Fourth grade supply requirements',
      color: 'from-orange-50 to-white border-orange-100'
    },
    {
      grade: '5th Grade',
      fileName: '5th.pdf',
      description: 'Fifth grade supply requirements',
      color: 'from-red-50 to-white border-red-100'
    }
  ];

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-navy-900 via-ps146-navy-800 to-ps146-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-coral-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block text-ps146-coral-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
              School Year 2025-2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Supply Lists
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Download the supply list for your child's grade to ensure they're prepared
            for a successful school year at PS 146 Anna M. Short.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Important Notice */}
          <div className="bg-gradient-to-br from-ps146-coral-50 to-white border-l-4 border-ps146-coral-600 p-10 rounded-3xl mb-16 shadow-lg">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                <DocumentTextIcon className="h-7 w-7 text-ps146-coral-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ps146-navy-900 mb-4">
                  Important Information
                </h3>
                <p className="text-lg text-ps146-neutral-700 leading-relaxed">
                  Please review your child's grade-specific supply list carefully. All items should be labeled
                  with your child's name. If you have any questions, please contact your child's teacher or
                  the main office at <span className="font-bold text-ps146-coral-700">(212) 860-5877</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Supply Lists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyLists.map((list, index) => (
              <a
                key={index}
                href={`/assets/documents/supply list/${list.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br ${list.color} p-8 rounded-3xl shadow-sm border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <DocumentTextIcon className="h-8 w-8 text-ps146-coral-600" />
                  </div>
                  <div className="w-12 h-12 bg-ps146-coral-100 rounded-full flex items-center justify-center group-hover:bg-ps146-coral-200 transition-colors">
                    <ArrowDownTrayIcon className="h-6 w-6 text-ps146-coral-700" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-ps146-navy-800 mb-3 group-hover:text-ps146-coral-700 transition-colors">
                  {list.grade}
                </h3>
                <p className="text-ps146-neutral-600 mb-6 leading-relaxed">
                  {list.description}
                </p>

                <div className="flex items-center text-ps146-coral-600 font-semibold group-hover:text-ps146-coral-700 transition-colors">
                  <span>Download PDF</span>
                  <ArrowDownTrayIcon className="h-4 w-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-20 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Need Assistance?</h2>
              <div className="w-24 h-1.5 bg-white/60 mx-auto mb-10"></div>
              <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light">
                If you need help obtaining school supplies or have questions about the supply lists,
                please don't hesitate to reach out to our main office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-ps146-coral-600 hover:bg-ps146-navy-900 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+12128605877"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-coral-600 px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300"
                >
                  Call (212) 860-5877
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ps146-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-ps146-coral-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">146</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-white">PS 146</div>
                  <div className="text-sm text-gray-400">Anna M. Short</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-400 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-400 transition-colors">Mission & Vision</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-400 transition-colors">Library Media Center</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-400 transition-colors">Supply Lists</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/school-events" className="hover:text-ps146-coral-400 transition-colors">School Events</a></li>
                <li><a href="http://www.smoothusa.com/ps146m" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-400 transition-colors">School Store</a></li>
                <li><a href="/admissions" className="hover:text-ps146-coral-400 transition-colors">Admissions</a></li>
                <li><a href="/school-goals" className="hover:text-ps146-coral-400 transition-colors">School Goals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="text-white">421 E. 106th Street</p>
                <p className="text-white">New York, NY 10029</p>
                <p className="mt-4 text-ps146-coral-400 font-semibold text-lg">
                  (212) 860-5877
                </p>
                <p>Mon-Fri: 8:00AM-2:20PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>&copy; 2024 PS 146 Anna M. Short. All Rights Reserved. | Proudly created with PS146.org</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SupplyLists;
