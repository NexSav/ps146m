import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  AcademicCapIcon,
  UsersIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const MissionVision = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-white">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-navy-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-navy-50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-ps146-navy-800 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full">
              <HeartIcon className="h-4 w-4 mr-2" />
              Our Foundation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-ps146-navy-900 mb-6 leading-tight">
            Our Mission
            <span className="block text-ps146-coral-600 font-extralight mt-2">& Vision</span>
          </h1>
          
          <div className="w-24 h-1 bg-ps146-coral-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-ps146-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover the guiding principles that shape our educational philosophy and community at PS 146 Anna M. Short.
          </p>
        </div>
      </section>

      {/* School Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="bg-ps146-navy-50 p-10 rounded-3xl">
              <div className="flex items-center mb-8">
                <MapPinIcon className="h-8 w-8 text-ps146-coral-500 mr-4" />
                <h2 className="text-2xl font-semibold text-ps146-navy-800">School Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-ps146-navy-900 mb-2">Public School 146M</h3>
                  <div className="text-lg text-ps146-neutral-700 space-y-1">
                    <p>421 East 106th Street</p>
                    <p>New York, NY 10029</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-ps146-navy-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-ps146-coral-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-ps146-neutral-600">Phone</p>
                        <p className="text-lg font-semibold text-ps146-navy-800">(212) 860-5877</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <PrinterIcon className="h-5 w-5 text-ps146-coral-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-ps146-neutral-600">Fax</p>
                        <p className="text-lg font-semibold text-ps146-navy-800">(212) 860-6078</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Information */}
            <div className="bg-white p-10 rounded-3xl border border-ps146-navy-100">
              <div className="flex items-center mb-8">
                <UsersIcon className="h-8 w-8 text-ps146-navy-600 mr-4" />
                <h2 className="text-2xl font-semibold text-ps146-navy-800">School Leadership</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-ps146-coral-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">MS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ps146-navy-800">Dr. Mona Silfen</h3>
                      <p className="text-ps146-coral-600 font-semibold">Principal</p>
                    </div>
                  </div>
                  <p className="text-ps146-neutral-600">
                    Leading our school community with dedication to educational excellence and student success.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-ps146-navy-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">DC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ps146-navy-800">Mr. Daniel Cortes</h3>
                      <p className="text-ps146-navy-600 font-semibold">Assistant Principal</p>
                    </div>
                  </div>
                  <p className="text-ps146-neutral-600">
                    Supporting our educational mission and fostering a positive learning environment for all students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 bg-ps146-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-ps146-coral-600 text-white px-6 py-3 rounded-full mb-6">
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold uppercase tracking-wide">Vision Statement</span>
            </div>
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">Our Vision for the Future</h2>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-ps146-coral-600"></div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-ps146-coral-200 text-8xl font-bold opacity-30">"</div>
              
              <blockquote className="text-2xl text-ps146-navy-800 leading-relaxed font-normal text-center relative z-10 mb-8">
                Our vision statement is to promote an inclusive learning environment that supports and 
                celebrates the growth and progress of the whole child within a diverse community.
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-px bg-ps146-coral-400"></div>
                <div className="w-3 h-3 bg-ps146-coral-500 rounded-full mx-4"></div>
                <div className="w-16 h-px bg-ps146-coral-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-ps146-navy-800 text-white px-6 py-3 rounded-full mb-6">
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold uppercase tracking-wide">Mission Statement</span>
            </div>
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">How We Achieve Excellence</h2>
          </div>

          <div className="bg-ps146-navy-50 rounded-3xl p-12 shadow-lg relative">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-ps146-coral-200/30 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-ps146-navy-200/30 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-ps146-navy-800 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-ps146-coral-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Our mission statement is that we will achieve our mission through implementing a rigorous Common-Core 
                  aligned curriculum to meet the needs of our diverse learners. Our Pre-K to grade 5 students will achieve 
                  success through the implementation of the workshop model, academic streaming, and quality questioning and 
                  discussion techniques.
                </p>
                
                <p className="text-lg text-ps146-neutral-700 leading-relaxed mb-8">
                  We will support our students through after-school programs, one-to-one tutoring, extensive partnerships 
                  with outside agencies, as well as varied health services in a school building that is fully accessible to all.
                </p>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-ps146-coral-500">
                  <p className="text-lg text-ps146-navy-800 leading-relaxed font-medium italic">
                    "The school, home, and community will work as a team to ensure that each child is working to his/her 
                    full potential both cognitively and socially now and in the future."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-ps146-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-8">Our Educational Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Common-Core Aligned",
                description: "Rigorous curriculum designed to meet diverse learning needs",
                icon: "📚"
              },
              {
                title: "Workshop Model",
                description: "Interactive learning through academic streaming and quality discussions",
                icon: "👥"
              },
              {
                title: "Comprehensive Support",
                description: "After-school programs, tutoring, partnerships, and health services",
                icon: "🤝"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-ps146-coral-300">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
              <p className="text-ps146-navy-300 leading-relaxed mb-4">
                Promoting an inclusive learning environment that supports and celebrates the growth of the whole child.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-300">
                <li><a href="/" className="hover:text-ps146-coral-400 transition-colors">Home</a></li>
                <li><a href="/about-us" className="hover:text-ps146-coral-400 transition-colors">About Us</a></li>
                <li><a href="/academics" className="hover:text-ps146-coral-400 transition-colors">Academics</a></li>
                <li><a href="/contact" className="hover:text-ps146-coral-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-ps146-navy-300">
                <p>421 East 106th Street</p>
                <p>New York, NY 10029</p>
                <p>Phone: (212) 860-5877</p>
                <p>Fax: (212) 860-6078</p>
              </div>
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

export default MissionVision;
