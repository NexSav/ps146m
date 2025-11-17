import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  AcademicCapIcon,
  UsersIcon,
  HeartIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const MissionVision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Mission & Vision - PS 146';
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-ps146-coral-100 text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 px-4 py-2 rounded-full">
              Our Foundation
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            Mission & Vision
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the guiding principles that shape our educational philosophy and community at PS 146 Anna M. Short.
          </p>
        </div>
      </section>

      {/* School Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-10 rounded-3xl border border-ps146-navy-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4">
                  <MapPinIcon className="h-7 w-7 text-ps146-coral-600" />
                </div>
                <h2 className="text-2xl font-bold text-ps146-navy-800">School Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-ps146-navy-900 mb-2">Public School 146M</h3>
                  <div className="text-lg text-ps146-neutral-700 space-y-1">
                    <p>421 East 106th Street</p>
                    <p>New York, NY 10029</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-ps146-navy-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-6 w-6 text-ps146-coral-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-ps146-neutral-600 mb-1">Phone</p>
                        <p className="text-lg font-bold text-ps146-coral-600">(212) 860-5877</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PrinterIcon className="h-6 w-6 text-ps146-coral-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-ps146-neutral-600 mb-1">Fax</p>
                        <p className="text-lg font-bold text-ps146-navy-800">(212) 860-6078</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Information */}
            <div className="bg-white p-10 rounded-3xl border-2 border-ps146-navy-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-ps146-navy-100 rounded-xl flex items-center justify-center mr-4">
                  <UsersIcon className="h-7 w-7 text-ps146-navy-700" />
                </div>
                <h2 className="text-2xl font-bold text-ps146-navy-800">School Leadership</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-ps146-coral-50 to-white p-6 rounded-2xl border border-ps146-coral-100">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-ps146-coral-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold text-xl">MS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ps146-navy-900">Dr. Mona Silfen</h3>
                      <p className="text-ps146-coral-600 font-bold">Principal</p>
                    </div>
                  </div>
                  <p className="text-ps146-neutral-700 leading-relaxed">
                    Leading our school community with dedication to educational excellence and student success.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-6 rounded-2xl border border-ps146-navy-100">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-ps146-navy-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold text-xl">DC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ps146-navy-900">Mr. Daniel Cortes</h3>
                      <p className="text-ps146-navy-600 font-bold">Assistant Principal</p>
                    </div>
                  </div>
                  <p className="text-ps146-neutral-700 leading-relaxed">
                    Supporting our educational mission and fostering a positive learning environment for all students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-24 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-white/80 text-sm font-bold uppercase tracking-wider mb-4">
              Vision Statement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Vision for the Future</h2>
            <div className="w-24 h-1.5 bg-white/60 mx-auto"></div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-8 -left-8 text-ps146-coral-200 text-9xl font-bold opacity-20">"</div>
            <div className="absolute -bottom-8 -right-8 text-ps146-coral-200 text-9xl font-bold opacity-20 rotate-180">"</div>

            <blockquote className="text-2xl md:text-3xl text-ps146-navy-900 leading-relaxed font-light text-center relative z-10 mb-8">
              Our vision statement is to promote an <span className="font-semibold text-ps146-coral-600">inclusive learning environment</span> that supports and
              celebrates the growth and progress of the <span className="font-semibold text-ps146-coral-600">whole child</span> within a diverse community.
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="w-20 h-px bg-ps146-coral-400"></div>
              <StarIcon className="w-6 h-6 text-ps146-coral-500 mx-4" />
              <div className="w-20 h-px bg-ps146-coral-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-ps146-coral-400 text-sm font-bold uppercase tracking-wider mb-4">
              Mission Statement
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">How We Achieve Excellence</h2>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-ps146-navy-50 to-white rounded-3xl p-12 md:p-16 shadow-lg relative border border-ps146-navy-100">
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-ps146-navy-900 leading-relaxed mb-8 font-light first-letter:text-7xl first-letter:font-bold first-letter:text-ps146-coral-600 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                Our mission statement is that we will achieve our mission through implementing a <span className="font-semibold">rigorous Common-Core
                aligned curriculum</span> to meet the needs of our diverse learners. Our Pre-K to grade 5 students will achieve
                success through the implementation of the workshop model, academic streaming, and quality questioning and
                discussion techniques.
              </p>

              <p className="text-lg md:text-xl text-ps146-neutral-700 leading-relaxed mb-10">
                We will support our students through after-school programs, one-to-one tutoring, extensive partnerships
                with outside agencies, as well as varied health services in a school building that is fully accessible to all.
              </p>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-l-4 border-ps146-coral-500">
                <HeartIcon className="h-8 w-8 text-ps146-coral-500 mb-4" />
                <p className="text-lg md:text-xl text-ps146-navy-900 leading-relaxed font-medium italic">
                  "The school, home, and community will work as a team to ensure that each child is working to his/her
                  full potential both cognitively and socially now and in the future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-ps146-gold-200/20 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-ps146-coral-200/20 rounded-full translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Our Educational Approach</h2>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto shadow-lg shadow-ps146-coral-500/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Common-Core Aligned",
                description: "Rigorous curriculum designed to meet diverse learning needs",
                icon: AcademicCapIcon,
                color: "coral"
              },
              {
                title: "Workshop Model",
                description: "Interactive learning through academic streaming and quality discussions",
                icon: UsersIcon,
                color: "gold"
              },
              {
                title: "Comprehensive Support",
                description: "After-school programs, tutoring, partnerships, and health services",
                icon: HeartIcon,
                color: "coral"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border-2 border-ps146-navy-100 hover:border-ps146-coral-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${item.color === 'gold' ? 'bg-ps146-gold-100 group-hover:bg-ps146-gold-500' : 'bg-ps146-coral-100 group-hover:bg-ps146-coral-600'} rounded-2xl flex items-center justify-center mb-6 transition-all shadow-md group-hover:shadow-xl`}>
                  <item.icon className={`h-8 w-8 ${item.color === 'gold' ? 'text-ps146-gold-600 group-hover:text-white' : 'text-ps146-coral-600 group-hover:text-white'} transition-colors`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-ps146-navy-900 ${item.color === 'gold' ? 'group-hover:text-ps146-gold-700' : 'group-hover:text-ps146-coral-700'} transition-colors`}>{item.title}</h3>
                <p className="text-ps146-neutral-700 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-ps146-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-ps146-navy-900 mb-8">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-ps146-neutral-600 mb-10 leading-relaxed">
            Discover how PS 146 Anna M. Short can provide an exceptional educational experience for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="inline-flex items-center justify-center bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <span>Apply Now</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center border-2 border-ps146-navy-700 text-ps146-navy-700 hover:bg-ps146-navy-700 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300">
              Contact Us
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
                Promoting an inclusive learning environment that supports and celebrates the growth of the whole child.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-ps146-coral-600 transition-colors">About Us</a></li>
                <li><a href="/admissions" className="hover:text-ps146-coral-600 transition-colors">Admissions</a></li>
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

export default MissionVision;
