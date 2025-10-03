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
      name: 'About P.S. 146',
      href: '/about',
      dropdown: [
        { name: 'Mission & Vision Statements', href: '/mission-vision', description: 'Our educational philosophy and goals' },
        { name: 'Our Staff', href: '/staff', description: 'Meet our dedicated faculty and staff' },
        { name: "Principal's Message", href: '/principal-message', description: 'A welcome from our school leadership' },
        { name: 'School Goals', href: '/school-goals', description: 'Our academic and community objectives' },
      ]
    },
    {
      name: 'School Library',
      href: '/library',
      dropdown: [
        { name: 'Library Media Center', href: '/library', description: 'Discover what our library has to offer' },
        { name: 'Online Catalog (OPAC)', href: 'http://library.nycenet.edu/common/welcome.jsp?site=1212', description: 'Search our library collection online' },
        { name: 'Roles and Responsibilities', href: '/library-roles', description: 'Library staff and student responsibilities' },
        { name: 'Vision, Mission & Program Plan', href: '/library-mission', description: 'Our library program goals and plans' },
      ]
    },
    {
      name: 'Parents',
      href: '/parents',
      dropdown: [
        { name: 'Admissions Process', href: '/admissions', description: 'How to enroll your child at PS 146' },
        { name: 'NYC DOE School Calendar 2025-2026', href: '/school-calendar', description: 'Important school year dates' },
        { name: 'Calendar of Events 2025-2026', href: '/events-calendar', description: 'School events and activities' },
        { name: 'Parent Association (PA)', href: '/parent-association', description: 'Get involved with our parent community' },
        { name: 'Programs/Partnerships', href: '/partnerships', description: 'Our community partnerships and programs' },
        { name: 'Parents Corner', href: '/parents-corner', description: 'Resources and information for families' },
        { name: 'FAQs', href: '/faqs', description: 'Frequently asked questions' },
      ]
    },
    {
      name: 'Students',
      href: '/students',
      dropdown: [
        { name: 'Student Resources', href: '/student-resources', description: 'Educational tools and websites' },
        { name: 'Remote Learning', href: '/remote-learning', description: 'Online learning resources and tools' },
        { name: 'Google Classroom', href: '/google-classroom', description: 'Access your online classroom' },
        { name: 'Educational Links', href: '/educational-links', description: 'Math, reading, and coding resources' },
      ]
    },
    {
      name: 'News',
      href: '/news',
      dropdown: [
        { name: 'School News', href: '/news', description: 'Latest announcements and updates' },
        { name: 'Cell Phone Policy', href: '/cell-phone-policy', description: 'School electronic device guidelines' },
        { name: 'NYC DOE News & Updates', href: '/nyc-doe-updates', description: 'Department of Education announcements' },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-ps146-navy-100' 
        : 'bg-white/90 backdrop-blur-md shadow-md'
    }`}>
      {/* Top accent line */}
      <div className={`h-1 bg-ps146-gold-500 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-60'
      }`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative transform group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-ps146-navy-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">146</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-ps146-gold-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-ps146-navy-800 tracking-tight transition-colors duration-300">PS 146</div>
              <div className="text-sm font-medium text-ps146-coral-600 -mt-1 group-hover:text-ps146-coral-700 transition-colors duration-300">Anna M. Short</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center px-4 py-2 text-sm font-medium text-ps146-navy-700 hover:text-ps146-coral-600 rounded-lg hover:bg-ps146-navy-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-sm"
                      onMouseEnter={() => setActiveDropdown(index)}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    {activeDropdown === index && (
                      <div 
                        className="absolute top-full left-0 mt-3 w-80 bg-white shadow-2xl border border-ps146-navy-100 rounded-2xl py-6 z-50 animate-slide-up backdrop-blur-sm"
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{
                          animation: 'slideUp 0.3s ease-out'
                        }}
                      >
                        <div className="px-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.href}
                              className="block p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group transform hover:-translate-y-0.5"
                            >
                              <div className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 mb-1">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-sm ${
                      location.pathname === item.href
                        ? 'bg-ps146-coral-50 text-ps146-coral-700 shadow-sm'
                        : 'text-ps146-navy-700 hover:text-ps146-coral-600 hover:bg-ps146-navy-50'
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
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-ps146-navy-700 rounded-lg hover:bg-ps146-navy-100 focus:outline-none focus:ring-2 focus:ring-ps146-coral-200 transition-colors duration-200"
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
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-ps146-neutral-600 hover:text-ps146-coral-600 hover:bg-ps146-coral-50 rounded-lg transition-all duration-150"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
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
    </nav>
  );
};

export default Navbar;