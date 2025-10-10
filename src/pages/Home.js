import React, { useEffect, useState } from 'react';
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
  ClockIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { GraduationCap, MessageSquareMore, IdCard, PiggyBank, CalendarDays as LucideCalendarDays, Megaphone, ShieldCheck } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to PS 146",
      subtitle: "Anna M. Short",
      description: "Building Excellence in East Harlem",
      image: "/assets/videos/home/PS 146.mp4"
    }
  ];

  useEffect(() => {
    document.title = 'PS 146 Anna M. Short - East Harlem Elementary School';
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Slider Section - Inspired by St. Mary's */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          >
            <source src="/assets/videos/home/PS 146.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ps146-navy-900/95 via-ps146-navy-900/75 to-transparent"></div>
          {/* Additional overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ps146-navy-900/30"></div>
        </div>

        {/* Hero Content - Centered Left */}
        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block text-ps146-coral-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 animate-fade-in">
                  Welcome to Our School
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                PS 146
                <span className="block text-4xl md:text-5xl font-light mt-3 text-white/95">Anna M. Short</span>
              </h1>

              <div className="w-24 h-1.5 bg-ps146-coral-500 mb-8 animate-expand-width shadow-lg shadow-ps146-coral-500/50"></div>

              <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-12 font-light animate-fade-in-up delay-200">
                Hello / Hola — Building Excellence in East Harlem
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <a href="/admissions" className="group inline-flex items-center justify-center bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span>Apply Now</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/about" className="group inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white hover:text-ps146-navy-900 px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-2xl backdrop-blur-sm">
                  <span>Learn More</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 hover:scale-110 ${
                currentSlide === index ? 'w-16 bg-ps146-coral-500 shadow-lg shadow-ps146-coral-500/50' : 'w-2.5 bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Add keyframe animations to index.css or App.css */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 30s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>

      {/* Mission Statement Banner - Inspired by Friends Academy */}
      <section className="py-20 bg-gradient-to-br from-ps146-navy-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="hidden md:block w-1.5 h-32 bg-gradient-to-b from-ps146-coral-500 to-ps146-coral-600 flex-shrink-0 rounded-full shadow-lg"></div>
            <div className="flex-1">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-ps146-navy-900 leading-relaxed mb-6">
                At PS 146, we achieve educational <span className="font-semibold text-ps146-coral-600">excellence</span> through high expectations, rigorous
                standards of learning and living.
              </p>
              <p className="text-lg md:text-xl text-ps146-neutral-600 leading-relaxed">
                Located in the heart of <span className="font-medium text-ps146-navy-800">East Harlem</span>, serving our diverse community from <span className="font-medium">8:00 AM to 2:20 PM</span>, Monday through Friday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section - Inspired by St. Mary's */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-4">Quick Access</h2>
            <div className="w-20 h-1 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            {[
              { title: 'Google Classroom', href: 'https://classroom.google.com', icon: GraduationCap },
              { title: 'Class Dojo', href: 'https://www.classdojo.com', icon: MessageSquareMore },
              { title: 'NYC Schools Account', href: 'https://www.schoolsaccount.nyc/', icon: IdCard },
              { title: 'Student Safety', href: '/student-safety', icon: ShieldCheck },
              { title: 'SAVE For College', href: 'https://nyckidsrise.org/save-for-college-program/', icon: PiggyBank },
              { title: 'Calendar', href: '/school-calendar', icon: LucideCalendarDays },
              { title: 'Announcements', href: '/news', icon: Megaphone }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-ps146-navy-50 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-ps146-coral-100 flex items-center justify-center text-ps146-coral-600 mb-4 group-hover:bg-ps146-coral-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-9 h-9" />
                </div>
                <span className="text-sm font-medium text-ps146-navy-800 group-hover:text-ps146-coral-600">
                  {item.title}
                </span>
              </a>
            ))}
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Library Media Center",
                href: "/lmc",
                icon: BookOpenIcon,
                description: "Discover what our library has to offer",
                color: "bg-blue-50"
              },
              {
                title: "School Store",
                href: "http://www.smoothusa.com/ps146m",
                icon: ShoppingBagIcon,
                description: "PS 146 merchandise now available",
                color: "bg-green-50"
              },
              {
                title: "School Events Gallery",
                href: "/school-events",
                icon: CameraIcon,
                description: "Spirit Day pictures & more",
                color: "bg-purple-50"
              },
              {
                title: "Supply Lists 2025-2026",
                href: "/supply-lists",
                icon: DocumentTextIcon,
                description: "School year supply requirements",
                color: "bg-orange-50"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group ${item.color} hover:shadow-xl p-8 rounded-2xl border border-transparent hover:border-ps146-coral-200 transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-ps146-coral-600 transition-colors duration-300 shadow-sm">
                  <item.icon className="h-7 w-7 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-ps146-navy-900 mb-3 group-hover:text-ps146-coral-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ps146-neutral-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center text-ps146-coral-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Content Section with Image - Inspired by Friends Academy */}
      <section className="py-28 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent p-12">
                  <TrophyIcon className="h-40 w-40 text-white/40" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Our Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Excellence in
                <span className="block">Education</span>
              </h2>
              <div className="w-24 h-1.5 bg-white/60 mb-10 shadow-lg"></div>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8 font-light">
                PS 146 Anna M. Short proudly serves the diverse East Harlem community,
                fostering academic excellence and cultural appreciation in our vibrant neighborhood.
              </p>
              <p className="text-lg text-white/85 leading-relaxed mb-12">
                We celebrate our multilingual community with support in Arabic, Chinese, French,
                Spanish, and Urdu, ensuring every family feels welcome and supported in their
                child's educational journey.
              </p>
              <a href="/about" className="group inline-flex items-center bg-white text-ps146-coral-600 hover:bg-ps146-navy-900 hover:text-white px-10 py-5 font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                Learn More About Us
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-4">Our Community at a Glance</h2>
            <div className="w-20 h-1 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '600+', label: 'Students', icon: UsersIcon },
              { number: '50+', label: 'Faculty & Staff', icon: UsersIcon },
              { number: '5', label: 'Languages Supported', icon: BookOpenIcon },
              { number: '2017', label: 'Hornets Champions', icon: TrophyIcon }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-ps146-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-ps146-coral-600" />
                </div>
                <div className="text-4xl font-bold text-ps146-navy-900 mb-3">{stat.number}</div>
                <div className="text-ps146-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section - Card Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-4">Latest News & Resources</h2>
            <div className="w-20 h-1 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-ps146-navy-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpenIcon className="h-8 w-8 text-ps146-coral-600 mr-4" />
                  <h3 className="text-2xl font-bold text-ps146-navy-900">Padlet Series</h3>
                </div>
                <p className="text-ps146-neutral-600 mb-6 leading-relaxed">
                  Explore our digital collection of interactive books and educational resources.
                </p>
                <a href="#" className="inline-flex items-center text-ps146-coral-600 font-semibold hover:gap-2 transition-all">
                  Explore Now
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-ps146-navy-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-ps146-coral-600 mr-4" />
                  <h3 className="text-2xl font-bold text-ps146-navy-900">NYC DOE Updates</h3>
                </div>
                <p className="text-ps146-neutral-600 mb-6 leading-relaxed">
                  Stay informed with the latest updates from the NYC Department of Education.
                </p>
                <a href="#" className="inline-flex items-center text-ps146-coral-600 font-semibold hover:gap-2 transition-all">
                  Read Updates
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-ps146-coral-600 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Multilingual Support</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  We support families in Arabic, Chinese, French, Spanish, and Urdu.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['العربية', '中文', 'Français', 'Español', 'اردو'].map((lang, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Visit Section - Full Width with Image */}
      <section className="py-24 bg-ps146-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-ps146-coral-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Ready to Open a New Door</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-ps146-coral-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <p className="text-white/80">421 E. 106th Street, New York, NY 10029</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-ps146-coral-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">School Hours</p>
                    <p className="text-white/80">Monday - Friday: 8:00 AM - 2:20 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-ps146-coral-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Contact</p>
                    <p className="text-white/80">Phone: (212) 860-5877</p>
                    <p className="text-white/80">Fax: (212) 860-6078</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://maps.app.goo.gl/8K9qLF8Enz82NGWd9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-8 py-4 font-semibold rounded-lg transition-all">
                  Get Directions
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-ps146-navy-900 px-8 py-4 font-semibold rounded-lg transition-all">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] bg-ps146-navy-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <UsersIcon className="h-32 w-32 text-ps146-navy-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern & Organized */}
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
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-ps146-coral-400 transition-colors">About Us</a></li>
                <li><a href="/admissions" className="hover:text-ps146-coral-400 transition-colors">Admissions</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-400 transition-colors">Library</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-400 transition-colors">Supply Lists</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-400 transition-colors">Google Classroom</a></li>
                <li><a href="https://www.classdojo.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-400 transition-colors">Class Dojo</a></li>
                <li><a href="/school-calendar" className="hover:text-ps146-coral-400 transition-colors">School Calendar</a></li>
                <li><a href="/news" className="hover:text-ps146-coral-400 transition-colors">News & Updates</a></li>
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

export default Home;
