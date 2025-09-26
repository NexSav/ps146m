import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  DocumentTextIcon,
  MapPinIcon,
  PhoneIcon,
  UsersIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  CameraIcon,
  TrophyIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handler for any future animations
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section - Clean and Elegant with Video Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/home/PS 146.mp4" type="video/mp4" />
            {/* Fallback gradient background if video doesn't load */}
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-end">
          <div className="w-full">
            {/* Bottom Left Hero Content */}
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pb-16 lg:pb-24">
              <div className="max-w-3xl">
                {/* Elegant badge */}
                <div className="mb-8">
                  <span className="inline-flex items-center bg-black/30 backdrop-blur-md text-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-full border border-white/30 shadow-2xl">
                    <span className="w-2 h-2 bg-ps146-coral-400 rounded-full mr-3 animate-pulse"></span>
                    Welcome to PS 146
                  </span>
                </div>
                
                {/* Main title with sophisticated styling */}
                <div className="mb-10">
                  <div className="mb-4">
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin text-white leading-none tracking-tight drop-shadow-2xl">
                      PS 146
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-transparent mt-2 mb-6"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white/95 leading-tight drop-shadow-xl mb-3">
                    Anna M. Short
                  </h2>
                  
                  <div className="text-xl md:text-2xl font-normal text-white/80 italic drop-shadow-lg mb-8 tracking-wide">
                    Hello / Hola — Building Excellence in East Harlem
                  </div>
                </div>
                
                {/* Description with elegant formatting */}
                <div className="mb-12 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-ps146-coral-400 to-transparent rounded-full"></div>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl pl-8 font-normal drop-shadow-lg">
                    Located in the heart of East Harlem, PS 146 Anna M. Short serves our diverse community with 
                    dedication, offering exceptional education from 8:00 AM to 3:00 PM, Monday through Friday.
                  </p>
                </div>
                
                {/* Sophisticated button design */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="group relative bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-400 transform hover:-translate-y-1 shadow-2xl hover:shadow-coral-500/25 overflow-hidden">
                    <span className="relative z-10">Explore Our School</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-ps146-coral-500 to-ps146-coral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  </button>
                  <button className="group relative border-2 border-white/70 text-white hover:bg-white hover:text-ps146-navy-800 px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-400 backdrop-blur-sm hover:backdrop-blur-none overflow-hidden">
                    <span className="relative z-10">Leave a Message</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section - Real PS 146 Resources */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ps146-navy-50/30 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-6">Quick Access</h2>
            <div className="w-20 h-0.5 bg-ps146-coral-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Library Media Center", 
                href: "/library", 
                icon: BookOpenIcon,
                description: "Discover what our library has to offer"
              },
              { 
                title: "School Store", 
                href: "http://www.smoothusa.com/ps146m", 
                icon: ShoppingBagIcon,
                description: "PS 146 merchandise now available"
              },
              { 
                title: "School Events Gallery", 
                href: "/school-events", 
                icon: CameraIcon,
                description: "Spirit Day pictures & more"
              },
              { 
                title: "Supply Lists 2024-2025", 
                href: "/supply-lists", 
                icon: DocumentTextIcon,
                description: "School year supply requirements"
              }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="group relative bg-white hover:bg-ps146-navy-50 p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-ps146-navy-100 hover:border-ps146-coral-200 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ps146-coral-500/5 to-ps146-navy-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-ps146-coral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ps146-coral-200 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-ps146-coral-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 transition-colors duration-300 leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ps146-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-ps146-coral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Our School Section */}
      <section className="py-32 bg-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="inline-block bg-ps146-coral-600 text-white px-5 py-2 text-sm font-medium uppercase tracking-wider rounded-full">
                  Our Community
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-light text-ps146-navy-900 mb-12 leading-tight">
                Serving East Harlem
                <span className="block text-ps146-coral-600 font-normal">with Excellence</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <p className="text-xl text-ps146-neutral-600 leading-relaxed">
                  PS 146 Anna M. Short proudly serves the diverse East Harlem community, 
                  fostering academic excellence and cultural appreciation in our vibrant neighborhood.
                </p>
                
                <p className="text-lg text-ps146-neutral-600 leading-relaxed">
                  We celebrate our multilingual community with support in Arabic, Chinese, French, Spanish, and Urdu, 
                  ensuring every family feels welcome and supported in their child's educational journey.
                </p>
              </div>

              {/* Hornets Achievement */}
              <div className="bg-white p-8 rounded-3xl shadow-sm mb-12">
                <div className="flex items-center mb-4">
                  <TrophyIcon className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-ps146-navy-800">Hornets Champions!</h3>
                </div>
                <p className="text-ps146-neutral-600 leading-relaxed">
                  Celebrating our Hornets' 2016-2017 Championship victory - a testament to the 
                  dedication and spirit that defines PS 146!
                </p>
              </div>
              
              <div className="flex gap-6">
                <button className="bg-ps146-navy-800 hover:bg-ps146-navy-900 text-white px-8 py-4 font-medium rounded-2xl transition-colors duration-300">
                  Learn More About Us
                </button>
                <button className="border-2 border-ps146-coral-600 text-ps146-coral-600 hover:bg-ps146-coral-600 hover:text-white px-8 py-4 font-medium rounded-2xl transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <div className="aspect-square bg-ps146-navy-100 rounded-2xl flex items-center justify-center mb-6">
                    <UsersIcon className="h-16 w-16 text-ps146-navy-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-ps146-navy-800 mb-2 text-center">Our Diverse Community</h3>
                  <p className="text-ps146-neutral-600 text-center text-sm">Building bridges across cultures and languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Information Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-ps146-coral-100 text-ps146-coral-700 mb-8">
              <MapPinIcon className="h-4 w-4 mr-2" />
              Visit Us in East Harlem
            </span>
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">
              PS 146 Anna M. Short
            </h2>
          </div>
          
          <div className="bg-ps146-navy-50 p-16 rounded-3xl relative">
            <div className="absolute top-8 left-8 w-12 h-1 bg-ps146-coral-500 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-12 h-1 bg-ps146-coral-500 rounded-full"></div>
            
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-ps146-navy-800 mb-8">
                421 E. 106th Street, New York, NY 10029
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-ps146-coral-500 mr-3" />
                  <div>
                    <p className="font-semibold text-ps146-navy-800">School Hours</p>
                    <p className="text-ps146-neutral-600">Mon-Fri 8:00AM-3:00PM</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-ps146-coral-500 mr-3" />
                  <div>
                    <p className="font-semibold text-ps146-navy-800">Main Office</p>
                    <p className="text-ps146-neutral-600">(212) 860-5877</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-8 py-4 font-medium rounded-2xl transition-colors duration-300 mr-4">
                Get Directions
              </button>
              <button className="border-2 border-ps146-navy-700 text-ps146-navy-700 hover:bg-ps146-navy-700 hover:text-white px-8 py-4 font-medium rounded-2xl transition-all duration-300">
                Leave us a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections - Padlet & Resources */}
      <section className="py-32 bg-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Padlet Series */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-10">
                <div className="flex items-center mb-6">
                  <BookOpenIcon className="h-8 w-8 text-ps146-coral-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-ps146-navy-800">Padlet Series of Books</h3>
                </div>
                <p className="text-ps146-neutral-600 mb-8 leading-relaxed text-lg">
                  Explore our digital collection of interactive books and educational resources 
                  designed to enhance learning and engagement for our students.
                </p>
                <button className="bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-6 py-3 font-medium rounded-xl transition-colors duration-300">
                  Click Here to Explore!
                </button>
              </div>
            </div>

            {/* Resources & Updates */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-ps146-navy-800 mb-4 text-lg">NYC DOE News & Updates</h4>
                <p className="text-ps146-neutral-600 mb-4">Stay informed with the latest updates from the NYC Department of Education.</p>
                <button className="text-ps146-coral-600 hover:text-ps146-coral-700 font-medium">
                  Read Updates →
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-ps146-navy-800 mb-4 text-lg">COVID-19 Resources</h4>
                <p className="text-ps146-neutral-600 mb-4">Access important health and safety information for our school community.</p>
                <button className="text-ps146-coral-600 hover:text-ps146-coral-700 font-medium">
                  View Resources →
                </button>
              </div>

              <div className="bg-ps146-coral-600 p-8 rounded-2xl text-white">
                <h4 className="font-semibold mb-4 text-lg">Multilingual Support</h4>
                <p className="text-white/90 mb-4">We support families in Arabic, Chinese, French, Spanish, and Urdu.</p>
                <div className="flex flex-wrap gap-2">
                  {['العربية', '中文', 'Français', 'Español', 'اردو'].map((lang, index) => (
                    <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean and Simple */}
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
                <li><a href="/library" className="hover:text-ps146-coral-400 transition-colors">Library Media Center</a></li>
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

export default Home;