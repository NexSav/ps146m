import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const PrincipalMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ps146-coral-50 via-white to-ps146-navy-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-ps146-coral-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-ps146-navy-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-ps146-coral-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full">
              <UserIcon className="h-4 w-4 mr-2" />
              Principal's Welcome
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-ps146-navy-900 mb-6 leading-tight">
            A Message from
            <span className="block text-ps146-coral-600 font-extralight mt-2">Our Principal</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-ps146-navy-400 mx-auto mb-8"></div>
        </div>
      </section>

      {/* Principal's Message Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Principal Photo & Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-ps146-navy-50 to-ps146-coral-50 p-8 rounded-3xl shadow-lg sticky top-32">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-ps146-coral-200 to-ps146-navy-200 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="w-44 h-44 bg-white rounded-2xl flex items-center justify-center">
                      <img 
                        src="http://ps146.org/wp-content/uploads/2015/12/Dr.-Mona-Silfen-1-610x1024.jpg" 
                        alt="Dr. Mona Silfen" 
                        className="w-40 h-40 object-cover rounded-xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-40 h-40 bg-ps146-coral-100 rounded-xl items-center justify-center hidden">
                        <UserIcon className="h-16 w-16 text-ps146-coral-600" />
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-ps146-navy-800 mb-2">Dr. Mona Silfen</h2>
                  <p className="text-ps146-coral-600 font-semibold text-lg mb-6">Principal</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center text-ps146-neutral-600">
                      <AcademicCapIcon className="h-5 w-5 mr-2 text-ps146-coral-500" />
                      <span className="text-sm">Educational Leadership</span>
                    </div>
                    <div className="flex items-center justify-center text-ps146-neutral-600">
                      <HeartIcon className="h-5 w-5 mr-2 text-ps146-coral-500" />
                      <span className="text-sm">Community Partnership</span>
                    </div>
                    <div className="flex items-center justify-center text-ps146-neutral-600">
                      <StarIcon className="h-5 w-5 mr-2 text-ps146-coral-500" />
                      <span className="text-sm">Academic Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-ps146-navy-50 p-12 rounded-3xl relative">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-ps146-coral-200/30 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-ps146-navy-200/30 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-3xl font-light text-ps146-navy-900 mb-4">Dear Students and Families,</h3>
                    <div className="w-16 h-0.5 bg-ps146-coral-500"></div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-ps146-navy-800 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-ps146-coral-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      Our school is committed to providing our students with a rigorous educational experience that focuses on 
                      consistent academic growth as well as social and emotional development of each student. We value our strong 
                      partnerships with parents, families and community members.
                    </p>
                    
                    <p className="text-lg text-ps146-navy-700 leading-relaxed mb-6">
                      Our school staff works hard to create a nurturing educational environment for every student. We work hard to 
                      determine how each student learns best and to meet them at this point in their educational career.
                    </p>
                    
                    <p className="text-lg text-ps146-navy-700 leading-relaxed mb-6">
                      Our school has been recognized for our strong partnerships and we have been featured on NY1 two times over 
                      the past couple of years. The resilient growth in academics as well as in social and emotional development 
                      of our students is a true testament to the hard work and dedication of the staff, students and families at PS 146.
                    </p>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-ps146-coral-500 mb-8">
                      <p className="text-lg text-ps146-navy-800 leading-relaxed font-medium">
                        The core curriculum at PS 146 is aligned with the NYS Common Core Learning Standards and strategic 
                        resources to support student growth.
                      </p>
                    </div>
                    
                    <div className="text-right mt-10">
                      <p className="text-lg text-ps146-navy-800 font-medium mb-2">Sincerely,</p>
                      <p className="text-xl font-bold text-ps146-coral-600 mb-1">Dr. Mona Silfen</p>
                      <p className="text-lg text-ps146-navy-600 italic">Principal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Rigorous Education",
                    description: "Consistent academic growth and social development",
                    icon: "📚"
                  },
                  {
                    title: "Community Partnerships",
                    description: "Strong relationships with families and community",
                    icon: "🤝"
                  },
                  {
                    title: "Recognition",
                    description: "Featured on NY1 for educational excellence",
                    icon: "🌟"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-semibold text-ps146-navy-800 mb-3">{item.title}</h4>
                    <p className="text-ps146-neutral-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ps146-navy-900 text-white py-16">
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
                Committed to providing rigorous educational experiences and nurturing every student's growth.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-300">
                <li><a href="/" className="hover:text-ps146-coral-400 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-400 transition-colors">Mission & Vision</a></li>
                <li><a href="/staff" className="hover:text-ps146-coral-400 transition-colors">Our Staff</a></li>
                <li><a href="/contact" className="hover:text-ps146-coral-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-ps146-navy-300">
                <p>421 East 106th Street</p>
                <p>New York, NY 10029</p>
                <p>Phone: (212) 860-5877</p>
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

export default PrincipalMessage;
