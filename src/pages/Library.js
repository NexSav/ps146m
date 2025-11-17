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

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 bg-ps146-coral-100 px-4 py-2 rounded-full">
              Library Media Center
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            L.M.C.
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light">
            Developing independent learners and bridging the home and school community through our comprehensive library program.
          </p>
        </div>
      </section>

      {/* Library Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ps146-navy-50 to-white rounded-3xl p-12 md:p-16 mb-16 border border-ps146-navy-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 bg-ps146-coral-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-ps146-navy-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Welcome to Our Library</h2>
              <div className="w-20 h-1 bg-ps146-coral-500 mx-auto mb-8"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-ps146-navy-800 leading-relaxed font-light">
                <span className="font-semibold text-ps146-coral-600">Our Library Media Center is open to all faculty, staff, students and their parents/caregivers.</span> We look forward to
                developing independent learners and bridging the home and school community through our Library Media Center Program.
              </p>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Hours of Operation */}
            <div className="group bg-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-coral-600 transition-colors">
                  <ClockIcon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">Hours of Operation</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-ps146-navy-900 mb-2">Monday – Friday:</p>
                  <p className="text-ps146-neutral-700 text-lg">8:00 AM – 2:20 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="group bg-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-navy-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-navy-700 transition-colors">
                  <PhoneIcon className="h-7 w-7 text-ps146-navy-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">Contact Information</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-ps146-navy-900 mb-3">Library Staff:</p>
                  <ul className="space-y-2 text-ps146-neutral-700">
                    <li className="font-medium">Mr. Powers</li>
                    <li className="font-medium">Ms. H. Rodriguez</li>
                    <li className="font-medium">Mr. V. Rijo</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-ps146-navy-900 mb-2">Phone:</p>
                  <p className="text-ps146-coral-600 font-semibold text-lg">(212) 860-5877 ext. 2090</p>
                </div>
                <div>
                  <p className="font-bold text-ps146-navy-900 mb-2">Fax:</p>
                  <p className="text-ps146-neutral-700">(212) 369-1225</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="group bg-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-ps146-coral-600 transition-colors">
                  <LinkIcon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-ps146-navy-900">Quick Access</h3>
              </div>
              <div className="w-16 h-1 bg-ps146-coral-500 mb-6"></div>

              <div className="space-y-4">
                <a href="http://library.nycenet.edu/common/welcome.jsp?site=1212"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block p-5 rounded-2xl bg-gradient-to-br from-ps146-coral-50 to-white border border-ps146-coral-100 hover:shadow-md transition-all">
                  <div className="font-bold text-ps146-coral-700 mb-1">Online Catalog (OPAC)</div>
                  <div className="text-sm text-ps146-neutral-600">Search our library collection</div>
                </a>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-ps146-navy-50 to-white border border-ps146-navy-100">
                  <div className="font-bold text-ps146-navy-700 mb-1">Library Schedules</div>
                  <div className="text-sm text-ps146-neutral-600">View L.M.C. availability</div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-ps146-navy-50 to-white border border-ps146-navy-100">
                  <div className="font-bold text-ps146-navy-700 mb-1">Learning Links</div>
                  <div className="text-sm text-ps146-neutral-600">Online resources and databases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Resources */}
      <section className="py-24 bg-gradient-to-br from-ps146-navy-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Library Services & Resources</h2>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-xl text-ps146-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Discover the wide range of resources and services available to support learning and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpenIcon,
                title: "Book Collections",
                description: "Extensive collection of books for all grade levels and interests"
              },
              {
                icon: ComputerDesktopIcon,
                title: "Digital Resources",
                description: "Online databases and educational technology tools"
              },
              {
                icon: MagnifyingGlassIcon,
                title: "Research Support",
                description: "Guidance for student research projects and assignments"
              },
              {
                icon: UsersIcon,
                title: "Community Access",
                description: "Open to students, families, faculty, and staff"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-ps146-navy-100">
                <div className="w-16 h-16 bg-ps146-coral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ps146-coral-600 transition-colors">
                  <service.icon className="h-8 w-8 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-ps146-navy-900 mb-4 group-hover:text-ps146-coral-700 transition-colors">{service.title}</h3>
                <p className="text-ps146-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Program */}
      <section className="py-24 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-8">
              <AcademicCapIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Library Mission</h2>
            <div className="w-24 h-1.5 bg-white/60 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-12 font-light">
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
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mb-4"></div>
                  <p className="text-white font-bold text-lg">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern & Organized */}
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
                Developing independent learners through comprehensive library and media center services.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</a></li>
                <li><a href="/principal-message" className="hover:text-ps146-coral-600 transition-colors">Principal's Message</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-600 transition-colors">Library Media Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Library Hours</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li>Mon-Fri: 8:00 AM - 2:20 PM</li>
                <li>Phone: Ext. 2090</li>
                <li><a href="http://library.nycenet.edu/common/welcome.jsp?site=1212" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-600 transition-colors">Online Catalog</a></li>
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

export default Library;
