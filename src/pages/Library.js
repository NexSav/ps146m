import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  BookOpenIcon,
  ClockIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  UsersIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const Library = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ps146-navy-50 via-white to-ps146-coral-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-ps146-navy-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-ps146-coral-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-ps146-coral-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full">
              <BookOpenIcon className="h-4 w-4 mr-2" />
              Library Media Center
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-ps146-navy-900 mb-6 leading-tight">
            L.M.C.
            <span className="block text-ps146-coral-600 font-extralight mt-2">Library Media Center</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-ps146-navy-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-ps146-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Developing independent learners and bridging the home and school community through our comprehensive library program.
          </p>
        </div>
      </section>

      {/* Library Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ps146-navy-50 to-ps146-coral-50 rounded-3xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-ps146-navy-900 mb-6">Welcome to Our Library</h2>
              <div className="w-16 h-0.5 bg-ps146-coral-500 mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-ps146-navy-800 leading-relaxed mb-8">
                <strong>Our Library Media Center is open to all faculty, staff, students and their parents/caregivers.</strong> We look forward to 
                developing independent learners and bridging the home and school community through our Library Media Center Program.
              </p>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Hours of Operation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-ps146-navy-100">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-8 w-8 text-ps146-coral-500 mr-3" />
                <h3 className="text-xl font-semibold text-ps146-navy-800">Hours of Operation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-ps146-navy-700 mb-1">Monday – Wednesday:</p>
                  <p className="text-ps146-neutral-600 text-lg">8:00 AM – 3:10 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-ps146-navy-700 mb-1">Thursday – Friday:</p>
                  <p className="text-ps146-neutral-600 text-lg">8:00 AM – 2:20 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-ps146-navy-100">
              <div className="flex items-center mb-6">
                <PhoneIcon className="h-8 w-8 text-ps146-coral-500 mr-3" />
                <h3 className="text-xl font-semibold text-ps146-navy-800">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-ps146-navy-700 mb-2">Library Staff:</p>
                  <ul className="space-y-1 text-ps146-neutral-600">
                    <li><strong>Mr. Powers</strong></li>
                    <li><strong>Ms. H. Rodriguez</strong></li>
                    <li><strong>Mr. V. Rijo</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-ps146-navy-700">Phone:</p>
                  <p className="text-ps146-neutral-600">(212) 860-5877 ext. 2090</p>
                </div>
                <div>
                  <p className="font-semibold text-ps146-navy-700">Fax:</p>
                  <p className="text-ps146-neutral-600">(212) 369-1225</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-ps146-navy-100">
              <div className="flex items-center mb-6">
                <LinkIcon className="h-8 w-8 text-ps146-coral-500 mr-3" />
                <h3 className="text-xl font-semibold text-ps146-navy-800">Quick Access</h3>
              </div>
              
              <div className="space-y-3">
                <a href="http://library.nycenet.edu/common/welcome.jsp?site=1212" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block p-3 rounded-lg bg-ps146-coral-50 hover:bg-ps146-coral-100 transition-colors duration-200">
                  <div className="font-semibold text-ps146-coral-700">Online Catalog (OPAC)</div>
                  <div className="text-sm text-ps146-neutral-600">Search our library collection</div>
                </a>
                
                <div className="p-3 rounded-lg bg-ps146-navy-50">
                  <div className="font-semibold text-ps146-navy-700">Library Schedules</div>
                  <div className="text-sm text-ps146-neutral-600">View L.M.C. availability</div>
                </div>
                
                <div className="p-3 rounded-lg bg-ps146-navy-50">
                  <div className="font-semibold text-ps146-navy-700">Learning Links</div>
                  <div className="text-sm text-ps146-neutral-600">Online resources and databases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Resources */}
      <section className="py-20 bg-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">Library Services & Resources</h2>
            <p className="text-lg text-ps146-neutral-600 max-w-2xl mx-auto">
              Discover the wide range of resources and services available to support learning and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpenIcon,
                title: "Book Collections",
                description: "Extensive collection of books for all grade levels and interests",
                color: "ps146-coral"
              },
              {
                icon: ComputerDesktopIcon,
                title: "Digital Resources",
                description: "Online databases and educational technology tools",
                color: "ps146-navy"
              },
              {
                icon: MagnifyingGlassIcon,
                title: "Research Support",
                description: "Guidance for student research projects and assignments",
                color: "ps146-coral"
              },
              {
                icon: UsersIcon,
                title: "Community Access",
                description: "Open to students, families, faculty, and staff",
                color: "ps146-navy"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-ps146-navy-800 mb-4">{service.title}</h3>
                <p className="text-ps146-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Program */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ps146-navy-900 to-ps146-coral-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/10 rounded-full opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <AcademicCapIcon className="h-16 w-16 text-white mx-auto mb-6" />
                <h2 className="text-3xl font-light mb-4">Our Library Mission</h2>
                <div className="w-16 h-0.5 bg-white/60 mx-auto"></div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  The PS 146 Library Media Center serves as the heart of our learning community, fostering literacy, 
                  research skills, and digital citizenship while supporting the diverse educational needs of our students, 
                  families, and staff.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    "Independent Learning",
                    "Research Skills", 
                    "Community Connection"
                  ].map((goal, index) => (
                    <div key={index} className="text-center">
                      <div className="w-2 h-2 bg-ps146-coral-300 rounded-full mx-auto mb-3"></div>
                      <p className="text-white font-medium">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ps146-navy-900 text-white py-16 border-t border-ps146-navy-800">
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
              <p className="text-ps146-navy-300 leading-relaxed">
                Developing independent learners through comprehensive library and media center services.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Library Hours</h4>
              <div className="space-y-2 text-ps146-navy-300">
                <p>Mon-Wed: 8:00 AM - 3:10 PM</p>
                <p>Thu-Fri: 8:00 AM - 2:20 PM</p>
                <p>Ext: 2090</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-300">
                <li><a href="http://library.nycenet.edu/common/welcome.jsp?site=1212" className="hover:text-ps146-coral-400 transition-colors">Online Catalog</a></li>
                <li><a href="/library-roles" className="hover:text-ps146-coral-400 transition-colors">Roles & Responsibilities</a></li>
                <li><a href="/library-mission" className="hover:text-ps146-coral-400 transition-colors">Vision & Mission</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ps146-navy-800 mt-16 pt-8 text-center text-ps146-navy-400">
            <p>&copy; 2024 PS 146 Anna M. Short. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Library;
