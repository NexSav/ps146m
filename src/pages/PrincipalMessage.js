import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  UserIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const PrincipalMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Principal's Message - PS 146";
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 bg-ps146-coral-100 px-4 py-2 rounded-full">
              Principal's Welcome
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            A Message from
            <span className="block text-4xl md:text-5xl font-light mt-3 text-ps146-navy-800">Our Principal</span>
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light">
            A warm welcome from Dr. Mona Silfen, Principal of PS 146 Anna M. Short
          </p>
        </div>
      </section>

      {/* Principal's Message Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Principal Photo & Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-8 rounded-3xl border border-ps146-navy-100 shadow-lg sticky top-32">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-ps146-coral-100 to-ps146-coral-50 rounded-3xl flex items-center justify-center shadow-lg p-2">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                      <img
                        src="http://ps146.org/wp-content/uploads/2015/12/Dr.-Mona-Silfen-1-610x1024.jpg"
                        alt="Dr. Mona Silfen"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-ps146-navy-100 items-center justify-center hidden">
                        <UserIcon className="h-20 w-20 text-ps146-navy-600" />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-ps146-navy-900 mb-2">Dr. Mona Silfen</h2>
                  <p className="text-ps146-coral-600 font-bold text-lg mb-8">Principal</p>

                  <div className="space-y-4">
                    <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-ps146-coral-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <AcademicCapIcon className="h-5 w-5 text-ps146-coral-600" />
                      </div>
                      <span className="text-sm font-medium text-ps146-navy-700">Educational Leadership</span>
                    </div>
                    <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-ps146-coral-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <HeartIcon className="h-5 w-5 text-ps146-coral-600" />
                      </div>
                      <span className="text-sm font-medium text-ps146-navy-700">Community Partnership</span>
                    </div>
                    <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-ps146-coral-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <StarIcon className="h-5 w-5 text-ps146-coral-600" />
                      </div>
                      <span className="text-sm font-medium text-ps146-navy-700">Academic Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-12 md:p-16 rounded-3xl relative border border-ps146-navy-100 shadow-lg">
                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-3xl md:text-4xl font-light text-ps146-navy-900 mb-4">Dear Students and Families,</h3>
                    <div className="w-20 h-1 bg-ps146-coral-500 shadow-lg"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-ps146-navy-900 leading-relaxed mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-ps146-coral-600 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                      Our school is committed to providing our students with a <span className="font-semibold text-ps146-coral-600">rigorous educational experience</span> that focuses on
                      consistent academic growth as well as social and emotional development of each student. We value our strong
                      partnerships with parents, families and community members.
                    </p>

                    <p className="text-lg text-ps146-neutral-700 leading-relaxed mb-8">
                      Our school staff works hard to create a nurturing educational environment for every student. We work hard to
                      determine how each student learns best and to meet them at this point in their educational career.
                    </p>

                    <p className="text-lg text-ps146-neutral-700 leading-relaxed mb-8">
                      Our school has been <span className="font-semibold text-ps146-navy-800">recognized for our strong partnerships</span> and we have been featured on NY1 two times over
                      the past couple of years. The resilient growth in academics as well as in social and emotional development
                      of our students is a true testament to the hard work and dedication of the staff, students and families at PS 146.
                    </p>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-l-4 border-ps146-coral-500 mb-10">
                      <AcademicCapIcon className="h-8 w-8 text-ps146-coral-500 mb-4" />
                      <p className="text-lg text-ps146-navy-900 leading-relaxed font-medium">
                        The core curriculum at PS 146 is aligned with the NYS Common Core Learning Standards and strategic
                        resources to support student growth.
                      </p>
                    </div>

                    <div className="text-right mt-12 pt-8 border-t border-ps146-navy-200">
                      <p className="text-lg text-ps146-neutral-600 font-medium mb-2">Sincerely,</p>
                      <p className="text-2xl font-bold text-ps146-coral-600 mb-1">Dr. Mona Silfen</p>
                      <p className="text-lg text-ps146-navy-700 italic">Principal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    title: "Rigorous Education",
                    description: "Consistent academic growth and social development",
                    icon: AcademicCapIcon
                  },
                  {
                    title: "Community Partnerships",
                    description: "Strong relationships with families and community",
                    icon: HeartIcon
                  },
                  {
                    title: "Recognition",
                    description: "Featured on NY1 for educational excellence",
                    icon: StarIcon
                  }
                ].map((item, index) => (
                  <div key={index} className="group bg-white p-6 rounded-2xl border border-ps146-navy-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-ps146-coral-600 transition-colors">
                      <item.icon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-ps146-navy-900 mb-3 group-hover:text-ps146-coral-700 transition-colors">{item.title}</h4>
                    <p className="text-ps146-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our PS 146 Family
          </h2>
          <div className="w-24 h-1.5 bg-white/60 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light">
            Experience the excellence and nurturing environment that makes PS 146 Anna M. Short a special place to learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.schools.nyc.gov/enrollment/enrollment-help/family-welcome-centers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-ps146-coral-600 hover:bg-ps146-navy-900 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span>Apply Now</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="mailto:info@ps146.org" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-coral-600 px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300">
              Contact Us
            </a>
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
                Committed to providing rigorous educational experiences and nurturing every student's growth.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</a></li>
                <li><a href="/school-goals" className="hover:text-ps146-coral-600 transition-colors">School Goals</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-600 transition-colors">Library</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Resources</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-600 transition-colors">Google Classroom</a></li>
                <li><a href="https://www.classdojo.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-600 transition-colors">Class Dojo</a></li>
                <li><a href="/school-calendar" className="hover:text-ps146-coral-600 transition-colors">School Calendar</a></li>
                <li><a href="/news" className="hover:text-ps146-coral-600 transition-colors">News & Updates</a></li>
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

export default PrincipalMessage;
