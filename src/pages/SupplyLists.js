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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-navy-900 via-ps146-navy-800 to-ps146-navy-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center bg-ps146-coral-600/10 backdrop-blur-sm text-ps146-coral-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full border border-ps146-coral-400/30">
                <AcademicCapIcon className="h-5 w-5 mr-2" />
                School Year 2025-2026
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Supply Lists
            </h1>
            <div className="w-24 h-1 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Download the supply list for your child's grade to ensure they're prepared
              for a successful school year at PS 146 Anna M. Short.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Important Notice */}
          <div className="bg-ps146-coral-50 border-l-4 border-ps146-coral-600 p-8 rounded-2xl mb-16 shadow-sm">
            <div className="flex items-start">
              <DocumentTextIcon className="h-8 w-8 text-ps146-coral-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-ps146-navy-800 mb-2">
                  Important Information
                </h3>
                <p className="text-ps146-neutral-700 leading-relaxed">
                  Please review your child's grade-specific supply list carefully. All items should be labeled
                  with your child's name. If you have any questions, please contact your child's teacher or
                  the main office at <span className="font-semibold text-ps146-coral-700">(212) 860-5877</span>.
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
          <div className="mt-20 bg-ps146-navy-50 rounded-3xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-ps146-navy-900 mb-6">Need Assistance?</h2>
              <p className="text-lg text-ps146-neutral-700 mb-8 leading-relaxed">
                If you need help obtaining school supplies or have questions about the supply lists,
                please don't hesitate to reach out to our main office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-8 py-4 font-semibold rounded-2xl transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+12128605877"
                  className="border-2 border-ps146-navy-700 text-ps146-navy-700 hover:bg-ps146-navy-700 hover:text-white px-8 py-4 font-semibold rounded-2xl transition-all duration-300"
                >
                  Call (212) 860-5877
                </a>
              </div>
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
                <li><a href="/lmc" className="hover:text-ps146-coral-400 transition-colors">Library Media Center</a></li>
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

export default SupplyLists;
