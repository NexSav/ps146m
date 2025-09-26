import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  UserPlusIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ps146-coral-50 via-white to-ps146-navy-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-navy-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-ps146-coral-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full">
              <UserPlusIcon className="h-4 w-4 mr-2" />
              Join Our Community
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-ps146-navy-900 mb-6 leading-tight">
            Admissions
            <span className="block text-ps146-coral-600 font-extralight mt-2">Process</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-ps146-navy-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-ps146-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to PS 146 Anna M. Short! We're excited to help your child become part of our learning community.
          </p>
        </div>
      </section>

      {/* Main Admissions Information */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Information Card */}
          <div className="bg-gradient-to-br from-ps146-navy-50 to-ps146-coral-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-ps146-coral-200/30 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-ps146-navy-200/30 rounded-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-ps146-coral-600 rounded-2xl mx-auto mb-8">
                <CheckCircleIcon className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">Unlimited Admissions</h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-ps146-navy-800 leading-relaxed mb-8 font-light">
                  <strong>P.S. 146 has unlimited Admissions.</strong> Rank us at the top of your list. We have no requirements, 
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
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                      <feature.icon className="h-8 w-8 text-ps146-coral-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-ps146-navy-800 mb-2">{feature.title}</h3>
                      <p className="text-ps146-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-ps146-navy-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-ps146-navy-800 mb-4">Get More Information</h3>
                <p className="text-ps146-neutral-600">We're here to help you through the enrollment process</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-ps146-coral-50 rounded-xl">
                  <PhoneIcon className="h-8 w-8 text-ps146-coral-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ps146-navy-800 mb-1">Call Us</p>
                    <p className="text-ps146-neutral-600">(212) 860-5877</p>
                    <p className="text-sm text-ps146-neutral-500">For enrollment information</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-ps146-navy-50 rounded-xl">
                  <EnvelopeIcon className="h-8 w-8 text-ps146-navy-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ps146-navy-800 mb-1">Email Us</p>
                    <p className="text-ps146-coral-600 font-medium">admissions@ps146.org</p>
                    <p className="text-sm text-ps146-neutral-500">For enrollment questions</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-ps146-coral-50 rounded-xl">
                  <MapPinIcon className="h-8 w-8 text-ps146-coral-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ps146-navy-800 mb-1">Visit Us</p>
                    <p className="text-ps146-neutral-600">421 East 106th Street</p>
                    <p className="text-ps146-neutral-600">New York, NY 10029</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="bg-ps146-navy-900 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6">Why Choose PS 146?</h3>
                
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
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ps146-coral-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <p className="text-center text-white/90 font-medium">
                    Join our learning community today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-ps146-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-ps146-neutral-600 mb-12 max-w-2xl mx-auto">
            Contact us today to learn more about enrollment and begin your child's journey at PS 146 Anna M. Short.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:212-860-5877" 
               className="bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Call (212) 860-5877
            </a>
            <a href="mailto:admissions@ps146.org"
               className="border-2 border-ps146-navy-700 text-ps146-navy-700 hover:bg-ps146-navy-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300">
              Email Admissions
            </a>
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
                Welcoming new families to join our inclusive learning community.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Admissions Contact</h4>
              <div className="space-y-2 text-ps146-navy-300">
                <p>Phone: (212) 860-5877</p>
                <p>Email: admissions@ps146.org</p>
                <p>No enrollment requirements</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">School Location</h4>
              <div className="space-y-2 text-ps146-navy-300">
                <p>421 East 106th Street</p>
                <p>New York, NY 10029</p>
                <p>Hours: Mon-Fri 8:00AM-3:00PM</p>
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

export default Admissions;
