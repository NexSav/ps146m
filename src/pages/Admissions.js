import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
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
              Join Our Community
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Admissions
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to PS 146 Anna M. Short! We're excited to help your child become part of our learning community.
          </p>
        </div>
      </section>

      {/* Main Admissions Information */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Information Card */}
          <div className="bg-gradient-to-br from-ps146-navy-50 to-white rounded-3xl p-12 md:p-16 mb-16 relative overflow-hidden border border-ps146-navy-100 shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-ps146-coral-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-ps146-navy-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-ps146-coral-600 rounded-2xl mx-auto mb-8 shadow-lg">
                <CheckCircleIcon className="h-10 w-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-8">Unlimited Admissions</h2>
              <div className="w-20 h-1 bg-ps146-coral-500 mx-auto mb-8"></div>

              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-ps146-navy-800 leading-relaxed mb-12 font-light">
                  <span className="font-semibold text-ps146-coral-600">P.S. 146 has unlimited Admissions.</span> Rank us at the top of your list. We have no requirements,
                  so your choice is the most significant factor for acceptance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      icon: ClipboardDocumentCheckIcon,
                      title: "No Requirements",
                      description: "Open enrollment with no special requirements"
                    },
                    {
                      icon: AcademicCapIcon,
                      title: "Your Choice Matters",
                      description: "Your preference is the key factor for acceptance"
                    },
                    {
                      icon: CheckCircleIcon,
                      title: "Rank Us First",
                      description: "Put PS 146 at the top of your school choice list"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-ps146-navy-100">
                      <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-ps146-coral-600 transition-colors">
                        <feature.icon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-ps146-navy-900 mb-3 group-hover:text-ps146-coral-700 transition-colors">{feature.title}</h3>
                      <p className="text-ps146-neutral-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Methods */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-ps146-navy-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-light text-ps146-navy-900 mb-4">Get More Information</h3>
                <div className="w-16 h-1 bg-ps146-coral-500 mx-auto mb-4"></div>
                <p className="text-ps146-neutral-600">We're here to help you through the enrollment process</p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center p-6 bg-gradient-to-br from-ps146-coral-50 to-white rounded-2xl border border-ps146-coral-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="h-7 w-7 text-ps146-coral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-ps146-navy-900 mb-1">Call Us</p>
                    <p className="text-ps146-coral-600 font-semibold text-lg">(212) 860-5877</p>
                    <p className="text-sm text-ps146-neutral-600">For enrollment information</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gradient-to-br from-ps146-navy-50 to-white rounded-2xl border border-ps146-navy-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-ps146-navy-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <EnvelopeIcon className="h-7 w-7 text-ps146-navy-600" />
                  </div>
                  <div>
                    <p className="font-bold text-ps146-navy-900 mb-1">Email Us</p>
                    <p className="text-ps146-coral-600 font-semibold">admissions@ps146.org</p>
                    <p className="text-sm text-ps146-neutral-600">For enrollment questions</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gradient-to-br from-ps146-coral-50 to-white rounded-2xl border border-ps146-coral-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-ps146-coral-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPinIcon className="h-7 w-7 text-ps146-coral-600" />
                  </div>
                  <div>
                    <p className="font-bold text-ps146-navy-900 mb-1">Visit Us</p>
                    <p className="text-ps146-neutral-700">421 East 106th Street</p>
                    <p className="text-ps146-neutral-700">New York, NY 10029</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="bg-gradient-to-br from-ps146-navy-900 to-ps146-navy-800 p-10 rounded-3xl text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-8 right-8 w-32 h-32 bg-ps146-coral-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-ps146-coral-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-light mb-8">Why Choose PS 146?</h3>
                <div className="w-16 h-1 bg-ps146-coral-500 mb-8"></div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Inclusive Environment",
                      description: "We celebrate and support the growth of every child in our diverse community"
                    },
                    {
                      title: "Rigorous Curriculum",
                      description: "Common Core aligned education with strategic resources for student growth"
                    },
                    {
                      title: "Strong Partnerships",
                      description: "Active collaboration between school, families, and community"
                    },
                    {
                      title: "Comprehensive Support",
                      description: "After-school programs, tutoring, and varied health services"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-ps146-coral-400 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-white">{benefit.title}</h4>
                        <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <p className="text-center text-white font-medium text-lg">
                    Join our learning community today!
                  </p>
                </div>
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
            Ready to Get Started?
          </h2>
          <div className="w-24 h-1.5 bg-white/60 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light">
            Contact us today to learn more about enrollment and begin your child's journey at PS 146 Anna M. Short.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:212-860-5877"
               className="inline-flex items-center justify-center bg-white text-ps146-coral-600 hover:bg-ps146-navy-900 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Call (212) 860-5877
            </a>
            <a href="mailto:admissions@ps146.org"
               className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-coral-600 px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300">
              Email Admissions
            </a>
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
                Welcoming new families to join our inclusive learning community.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-400 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-400 transition-colors">Mission & Vision</a></li>
                <li><a href="/principal-message" className="hover:text-ps146-coral-400 transition-colors">Principal's Message</a></li>
                <li><a href="/school-goals" className="hover:text-ps146-coral-400 transition-colors">School Goals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Admissions</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Phone: (212) 860-5877</li>
                <li>Email: admissions@ps146.org</li>
                <li>No enrollment requirements</li>
                <li>Unlimited admissions</li>
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

export default Admissions;
