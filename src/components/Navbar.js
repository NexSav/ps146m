import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About P.S.146',
      href: '/about',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      megaDescription: 'Learn about our school\'s mission, values, and the dedicated team that makes PS 146 a special place for learning and growth.',
      dropdown: [
        {
          name: 'Mission & Vision Statements',
          href: '/mission-vision',
          description: 'Discover our educational philosophy and commitment to academic excellence and community engagement.'
        },
        {
          name: 'Our Staff',
          href: '/staff',
          description: 'Meet our experienced and passionate educators dedicated to student success.'
        },
        {
          name: "Principal's Message",
          href: '/principal-message',
          description: 'A warm welcome from Dr. Mona Silfen, our school principal.'
        },
        {
          name: 'School Goals',
          href: '/school-goals',
          description: 'Explore our strategic objectives for student performance and community building.'
        },
      ]
    },
    {
      name: 'Faculty/Staff',
      href: '/faculty-staff',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      megaDescription: 'Access important resources and portals for PS 146 faculty and staff members.',
      dropdown: [
        {
          name: 'Staff Login',
          href: '/staff-login',
          description: 'Secure access to the staff portal and resources.'
        },
        {
          name: 'NYCDoE TeachHub',
          href: 'https://teachhub.schools.nyc',
          description: 'NYC Department of Education TeachHub portal for educators.',
          external: true
        },
        {
          name: 'P.S. 146 E-mail',
          href: 'https://outlook.office.com',
          description: 'Access your PS 146 school email account.',
          external: true
        },
        {
          name: 'SESIS',
          href: 'https://sesis.nycenet.edu',
          description: 'Special Education Student Information System portal.',
          external: true
        },
        {
          name: 'DOE E-mail',
          href: 'https://outlook.office.com',
          description: 'NYC Department of Education email access.',
          external: true
        },
        {
          name: 'NYC Dept. of Ed. Site',
          href: 'https://www.schools.nyc.gov',
          description: 'Official NYC Department of Education website.',
          external: true
        },
      ]
    },
    {
      name: 'News',
      href: '/news',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      megaDescription: 'Stay updated with the latest news, announcements, and important information from PS 146.',
      dropdown: [
        {
          name: 'School Cell Phone & Electronic Device Policy',
          href: '/cell-phone-policy',
          description: 'Review our school guidelines for electronic devices and cell phone usage.'
        },
        {
          name: 'School Calendar',
          href: '/school-calendar',
          description: 'View important dates, holidays, and school events for the academic year.'
        },
        {
          name: 'Latest Announcements',
          href: '/announcements',
          description: 'Read the most recent updates and announcements from PS 146.'
        },
      ]
    },
    {
      name: 'L.M.C.',
      href: '/lmc',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
      megaDescription: 'Explore our Library Media Center resources, catalog, and programs designed to foster literacy and research skills.',
      dropdown: [
        {
          name: 'Library Media Center',
          href: '/lmc',
          description: 'Visit our comprehensive Library Media Center with books, resources, and learning spaces.'
        },
        {
          name: 'Online Catalog (OPAC)',
          href: 'http://library.nycenet.edu/common/welcome.jsp?site=1212',
          description: 'Search our library collection and reserve books online.',
          external: true
        },
        {
          name: 'Roles and Responsibilities',
          href: '/library-roles',
          description: 'Learn about library staff responsibilities and student expectations.'
        },
        {
          name: 'Vision, Mission & Program Plan',
          href: '/library-mission',
          description: 'Discover our library program goals and strategic initiatives.'
        },
      ]
    },
    {
      name: 'Parents',
      href: '/parents',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
      megaDescription: 'Resources, information, and support for PS 146 parents and guardians to stay engaged in their child\'s education.',
      dropdown: [
        {
          name: 'Admissions Process',
          href: '/admissions',
          description: 'Learn how to enroll your child at PS 146 with our open admissions policy.'
        },
        {
          name: 'Supply Lists 2025-2026',
          href: '/supply-lists',
          description: 'Download grade-specific supply lists for the upcoming school year.'
        },
        {
          name: 'Calendar of Events',
          href: '/events-calendar',
          description: 'View upcoming school events, activities, and important dates.'
        },
        {
          name: 'Parent Association',
          href: '/parent-association',
          description: 'Join our active parent community and get involved in school activities.'
        },
        {
          name: 'Programs/Partnerships',
          href: '/partnerships',
          description: 'Explore our community partnerships and enrichment programs.'
        },
        {
          name: 'Parents Corner',
          href: '/parents-corner',
          description: 'Access helpful resources, tips, and information for families.'
        },
        {
          name: 'Remote Learning',
          href: '/remote-learning',
          description: 'Online learning resources and platforms for students.',
          subDropdown: [
            {
              name: 'Google Classroom',
              href: 'https://classroom.google.com',
              description: 'Access assignments and online classroom activities.',
              external: true
            },
            {
              name: 'Remote Learning Resources',
              href: '/remote-learning-resources',
              description: 'Comprehensive online learning tools and guides.'
            },
          ]
        },
      ]
    },
    {
      name: 'Students',
      href: '/students',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      megaDescription: 'Educational resources, learning tools, and fun activities for PS 146 students to enhance their learning experience.',
      dropdown: [
        {
          name: 'StudentHub',
          href: 'https://studenthub.schools.nyc',
          description: 'NYC DoE StudentHub portal for student resources.',
          external: true
        },
        {
          name: 'Coding',
          href: '/coding',
          description: 'Learn programming and computer science skills.',
          subDropdown: [
            {
              name: 'CODE.org',
              href: 'https://code.org',
              description: 'Free coding lessons and activities for all ages.',
              external: true
            },
            {
              name: 'Scratch',
              href: 'https://scratch.mit.edu',
              description: 'Create interactive stories, games, and animations.',
              external: true
            },
          ]
        },
        {
          name: 'Math',
          href: '/math',
          description: 'Mathematics practice and learning resources.',
          subDropdown: [
            {
              name: 'EUREKA Math',
              href: 'https://greatminds.org/math',
              description: 'Comprehensive math curriculum and resources.',
              external: true
            },
            {
              name: 'Mathletics',
              href: 'https://www.mathletics.com',
              description: 'Engaging math practice and competitions.',
              external: true
            },
          ]
        },
        {
          name: 'Reading',
          href: '/reading',
          description: 'Reading comprehension and literacy tools.',
          subDropdown: [
            {
              name: 'MyOn',
              href: 'https://www.myon.com',
              description: 'Digital library with thousands of books.',
              external: true
            },
            {
              name: 'Starfall',
              href: 'https://www.starfall.com',
              description: 'Interactive reading and phonics activities.',
              external: true
            },
          ]
        },
        {
          name: 'Educational Games',
          href: '/games',
          description: 'Fun and educational online games.',
          subDropdown: [
            {
              name: 'ABCya!',
              href: 'https://www.abcya.com',
              description: 'Educational computer games for elementary students.',
              external: true
            },
            {
              name: 'Math Playground',
              href: 'https://www.mathplayground.com',
              description: 'Math games, logic puzzles, and problem solving.',
              external: true
            },
            {
              name: 'National Geographic Kids',
              href: 'https://kids.nationalgeographic.com',
              description: 'Explore the world with interactive content.',
              external: true
            },
          ]
        },
      ]
    },
    {
      name: 'QuickLinks',
      href: '/quicklinks',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80',
      megaDescription: 'Quick access to frequently used educational platforms and learning resources for students and families.',
      dropdown: [
        {
          name: 'BrainPop',
          href: 'https://www.brainpop.com',
          description: 'Educational videos, quizzes, and interactive activities.',
          external: true
        },
        {
          name: 'BrainPop Jr!',
          href: 'https://jr.brainpop.com',
          description: 'Learning content designed for younger students.',
          external: true
        },
        {
          name: 'BrainPop ESL',
          href: 'https://esl.brainpop.com',
          description: 'Resources for English language learners.',
          external: true
        },
        {
          name: 'PebbleGo',
          href: 'https://pebblego.com',
          description: 'Research database for elementary students.',
          external: true
        },
      ]
    },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-ps146-navy-900/98 backdrop-blur-lg shadow-2xl'
        : 'bg-ps146-navy-900/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative transform group-hover:scale-105 transition-all duration-300">
              <img
                src="/assets/images/ps146logotransparent.png"
                alt="PS 146 Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <Link
                      to={item.href}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isScrolled
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {activeDropdown === index && (
                      <div
                        className="fixed left-0 right-0 top-16 bg-white shadow-2xl border-t-4 border-ps146-coral-500 z-50"
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{
                          animation: 'slideDown 0.3s ease-out'
                        }}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-8">
                          <div className="grid grid-cols-12 gap-8">
                            {/* Left side - Image and description */}
                            <div className="col-span-5">
                              <div className="sticky top-8">
                                {item.image && (
                                  <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                )}
                                <div className="bg-gradient-to-br from-ps146-navy-50 to-white p-6 rounded-2xl border border-ps146-navy-100">
                                  <h3 className="text-2xl font-bold text-ps146-navy-900 mb-4 flex items-center">
                                    {item.name}
                                  </h3>
                                  <p className="text-ps146-neutral-700 leading-relaxed">
                                    {item.megaDescription}
                                  </p>
                                  <Link
                                    to={item.href}
                                    className="inline-flex items-center mt-6 text-ps146-coral-600 hover:text-ps146-coral-700 font-semibold group"
                                  >
                                    Explore More
                                    <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Right side - Links */}
                            <div className="col-span-7">
                              <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto pr-2">
                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                  <div key={dropdownIndex} className="relative">
                                    {dropdownItem.subDropdown ? (
                                      <div>
                                        <button
                                          onMouseEnter={() => setActiveSubDropdown(dropdownIndex)}
                                          className="w-full text-left p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group border border-transparent hover:border-ps146-navy-100"
                                        >
                                          <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                              <div className="font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 mb-1.5 flex items-center">
                                                {dropdownItem.name}
                                                <ChevronDownIcon className="ml-2 h-4 w-4 -rotate-90" />
                                              </div>
                                              <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                                {dropdownItem.description}
                                              </div>
                                            </div>
                                          </div>
                                        </button>
                                        {activeSubDropdown === dropdownIndex && (
                                          <div
                                            className="ml-6 mt-2 space-y-1 pl-4 border-l-2 border-ps146-coral-300"
                                            onMouseLeave={() => setActiveSubDropdown(null)}
                                          >
                                            {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                              subItem.external ? (
                                                <a
                                                  key={subIndex}
                                                  href={subItem.href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="block p-3 rounded-lg hover:bg-ps146-coral-50 transition-all duration-200 group"
                                                >
                                                  <div className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 text-sm mb-1">
                                                    {subItem.name}
                                                  </div>
                                                  <div className="text-xs text-ps146-neutral-600">
                                                    {subItem.description}
                                                  </div>
                                                </a>
                                              ) : (
                                                <Link
                                                  key={subIndex}
                                                  to={subItem.href}
                                                  className="block p-3 rounded-lg hover:bg-ps146-coral-50 transition-all duration-200 group"
                                                >
                                                  <div className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 text-sm mb-1">
                                                    {subItem.name}
                                                  </div>
                                                  <div className="text-xs text-ps146-neutral-600">
                                                    {subItem.description}
                                                  </div>
                                                </Link>
                                              )
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ) : dropdownItem.external ? (
                                      <a
                                        href={dropdownItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group border border-transparent hover:border-ps146-navy-100"
                                      >
                                        <div className="font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 mb-1.5">
                                          {dropdownItem.name}
                                        </div>
                                        <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                          {dropdownItem.description}
                                        </div>
                                      </a>
                                    ) : (
                                      <Link
                                        to={dropdownItem.href}
                                        className="block p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group border border-transparent hover:border-ps146-navy-100"
                                      >
                                        <div className="font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 mb-1.5">
                                          {dropdownItem.name}
                                        </div>
                                        <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                          {dropdownItem.description}
                                        </div>
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-ps146-coral-600 text-white shadow-lg'
                        : isScrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ps146-coral-400 transition-colors duration-200 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white backdrop-blur-lg border-t border-ps146-navy-100 shadow-xl">
          <div className="px-4 pt-4 pb-4 space-y-2 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-ps146-navy-800 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-xl transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-5 w-5 transform transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <div key={dropdownIndex}>
                            {dropdownItem.subDropdown ? (
                              <div>
                                <button
                                  onClick={() => setActiveSubDropdown(activeSubDropdown === dropdownIndex ? null : dropdownIndex)}
                                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-ps146-neutral-600 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                                >
                                  {dropdownItem.name}
                                  <ChevronDownIcon className={`h-4 w-4 transform transition-transform duration-200 ${
                                    activeSubDropdown === dropdownIndex ? 'rotate-180' : ''
                                  }`} />
                                </button>
                                {activeSubDropdown === dropdownIndex && (
                                  <div className="mt-1 ml-4 space-y-1">
                                    {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                      subItem.external ? (
                                        <a
                                          key={subIndex}
                                          href={subItem.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block px-4 py-2 text-xs text-ps146-neutral-500 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </a>
                                      ) : (
                                        <Link
                                          key={subIndex}
                                          to={subItem.href}
                                          className="block px-4 py-2 text-xs text-ps146-neutral-500 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      )
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : dropdownItem.external ? (
                              <a
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-ps146-neutral-600 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </a>
                            ) : (
                              <Link
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-ps146-neutral-600 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-ps146-coral-100 text-ps146-coral-700'
                        : 'text-ps146-navy-800 hover:text-ps146-coral-600 hover:bg-ps146-coral-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
