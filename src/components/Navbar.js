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
      dropdown: [
        { name: 'Mission & Vision Statements', href: '/mission-vision', description: 'Our educational philosophy and goals' },
        { name: 'Our Staff', href: '/staff', description: 'Meet our dedicated faculty and staff' },
        { name: "Principal's Message", href: '/principal-message', description: 'A welcome from our school leadership' },
        { name: 'School Goals', href: '/school-goals', description: 'Our academic and community objectives' },
      ]
    },
    {
      name: 'Faculty/Staff',
      href: '/faculty-staff',
      dropdown: [
        { name: 'Staff Login', href: '/staff-login', description: 'Access staff portal' },
        { name: 'NYCDoE TeachHub', href: 'https://teachhub.schools.nyc', description: 'NYC DoE TeachHub portal', external: true },
        { name: 'P.S. 146 E-mail', href: 'https://outlook.office.com', description: 'School email access', external: true },
        { name: 'SESIS', href: 'https://sesis.nycenet.edu', description: 'Special education student information system', external: true },
        { name: 'DOE E-mail', href: 'https://outlook.office.com', description: 'NYC DoE email access', external: true },
        { name: 'NYC Dept. of Ed. Site', href: 'https://www.schools.nyc.gov', description: 'NYC Department of Education', external: true },
        { name: 'P.S. 146 Dept. of Ed. Site', href: 'https://www.schools.nyc.gov/schools/Q146', description: 'PS 146 on NYC DoE website', external: true },
      ]
    },
    {
      name: 'News',
      href: '/news',
      dropdown: [
        { name: 'School Cell Phone & Electronic Device Policy', href: '/cell-phone-policy', description: 'School electronic device guidelines' },
      ]
    },
    {
      name: 'L.M.C.',
      href: '/lmc',
      dropdown: [
        { name: 'P.S. 146 L.M.C. Online Catalog (OPAC)', href: 'http://library.nycenet.edu/common/welcome.jsp?site=1212', description: 'Search our library collection online', external: true },
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
        { name: 'PA', href: '/parent-association', description: 'Parent Association information' },
        { name: 'Programs/Partnerships', href: '/partnerships', description: 'Our community partnerships and programs' },
        { name: 'Parents Corner', href: '/parents-corner', description: 'Resources and information for families' },
        { name: 'FAQs', href: '/faqs', description: 'Frequently asked questions' },
        {
          name: 'Remote Learning',
          href: '/remote-learning',
          description: 'Online learning resources',
          subDropdown: [
            { name: 'Google Classroom', href: 'https://classroom.google.com', description: 'Access your online classroom', external: true },
            { name: 'Remote Learning Resources', href: '/remote-learning-resources', description: 'Online learning tools and resources' },
          ]
        },
      ]
    },
    {
      name: 'Students',
      href: '/students',
      dropdown: [
        { name: 'NYCDoE StudentHub', href: 'https://studenthub.schools.nyc', description: 'NYC DoE StudentHub portal', external: true },
        {
          name: 'Coding',
          href: '/coding',
          description: 'Programming resources',
          subDropdown: [
            { name: 'CODE', href: 'https://code.org', description: 'Learn computer science', external: true },
            { name: 'Scratch Website', href: 'https://scratch.mit.edu', description: 'Create stories, games, and animations', external: true },
          ]
        },
        {
          name: 'Math',
          href: '/math',
          description: 'Mathematics learning tools',
          subDropdown: [
            { name: 'EUREKA Math', href: 'https://greatminds.org/math', description: 'Eureka Math resources', external: true },
            { name: 'Mathletics', href: 'https://www.mathletics.com', description: 'Math practice and games', external: true },
          ]
        },
        {
          name: 'Reading',
          href: '/reading',
          description: 'Reading and literacy resources',
          subDropdown: [
            { name: 'MyOn Website', href: 'https://www.myon.com', description: 'Digital library for students', external: true },
            { name: 'Starfall Website', href: 'https://www.starfall.com', description: 'Reading and phonics games', external: true },
          ]
        },
        {
          name: 'Typing Practice',
          href: '/typing',
          description: 'Improve typing skills',
          subDropdown: [
            { name: 'Typing Practice 1', href: 'https://www.typingclub.com', description: 'Learn touch typing', external: true },
            { name: 'Typing Practice 2', href: 'https://www.typing.com', description: 'Typing games and lessons', external: true },
            { name: 'Typing Lessons', href: 'https://www.keybr.com', description: 'Touch typing tutor', external: true },
          ]
        },
        {
          name: 'Safe Search Engines',
          href: '/safe-search',
          description: 'Kid-friendly search engines',
          subDropdown: [
            { name: 'Kiddle Visual Search', href: 'https://www.kiddle.co', description: 'Safe visual search for kids', external: true },
            { name: 'Kidrex!', href: 'https://www.kidrex.org', description: 'Kid-safe search powered by Google', external: true },
            { name: 'Safe Search Kids', href: 'https://www.safesearchkids.com', description: 'Safe search for students', external: true },
          ]
        },
        {
          name: 'Free Computer Time!',
          href: '/free-time',
          description: 'Educational games and activities',
          subDropdown: [
            { name: 'ABCya!', href: 'https://www.abcya.com', description: 'Educational computer games', external: true },
            { name: 'Bomomo', href: 'https://www.bomomo.com', description: 'Create digital art', external: true },
            { name: 'Coloring-Online!', href: 'https://www.coloring-online.com', description: 'Online coloring pages', external: true },
            { name: 'Kids', href: 'https://kids.nationalgeographic.com', description: 'National Geographic Kids', external: true },
            { name: 'Math Playground', href: 'https://www.mathplayground.com', description: 'Math games and logic puzzles', external: true },
            { name: 'Multiplication Games', href: 'https://www.multiplication.com', description: 'Practice multiplication facts', external: true },
            { name: 'NASA Space Place', href: 'https://spaceplace.nasa.gov', description: 'NASA resources for kids', external: true },
            { name: 'National Geographic Kids', href: 'https://kids.nationalgeographic.com', description: 'Explore the world', external: true },
          ]
        },
      ]
    },
    {
      name: 'QuickLinks',
      href: '/quicklinks',
      dropdown: [
        { name: 'Brainpop', href: 'https://www.brainpop.com', description: 'Educational videos and quizzes', external: true },
        { name: 'BrainPop Jr! 24/7 Access', href: 'https://jr.brainpop.com', description: 'BrainPop for younger students', external: true },
        { name: 'BrainPopESL! 24/7 Access', href: 'https://esl.brainpop.com', description: 'BrainPop for English language learners', external: true },
        { name: 'PebbleGo Next!', href: 'https://pebblego.com', description: 'Research database for elementary students', external: true },
      ]
    },
    { name: 'CONTACT US', href: '/contact' },
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
                    <Link
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm font-medium text-ps146-navy-700 hover:text-ps146-coral-600 rounded-lg hover:bg-ps146-navy-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-sm"
                      onMouseEnter={() => setActiveDropdown(index)}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Link>
                    
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
                            <div key={dropdownIndex} className="relative">
                              {dropdownItem.subDropdown ? (
                                <div>
                                  <button
                                    onMouseEnter={() => setActiveSubDropdown(dropdownIndex)}
                                    className="w-full text-left p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group transform hover:-translate-y-0.5"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 mb-1">
                                          {dropdownItem.name}
                                        </div>
                                        <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <ChevronDownIcon className="h-4 w-4 text-ps146-navy-600 -rotate-90" />
                                    </div>
                                  </button>
                                  {activeSubDropdown === dropdownIndex && (
                                    <div
                                      className="absolute left-full top-0 ml-2 w-72 bg-white shadow-2xl border border-ps146-navy-100 rounded-2xl py-4 z-50"
                                      onMouseLeave={() => setActiveSubDropdown(null)}
                                    >
                                      <div className="px-2">
                                        {dropdownItem.subDropdown.map((subItem, subIndex) => (
                                          subItem.external ? (
                                            <a
                                              key={subIndex}
                                              href={subItem.href}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block p-3 rounded-lg hover:bg-ps146-navy-50 transition-all duration-200"
                                            >
                                              <div className="font-medium text-ps146-navy-800 hover:text-ps146-coral-700 text-sm">
                                                {subItem.name}
                                              </div>
                                              <div className="text-xs text-ps146-neutral-600 mt-0.5">
                                                {subItem.description}
                                              </div>
                                            </a>
                                          ) : (
                                            <Link
                                              key={subIndex}
                                              to={subItem.href}
                                              className="block p-3 rounded-lg hover:bg-ps146-navy-50 transition-all duration-200"
                                            >
                                              <div className="font-medium text-ps146-navy-800 hover:text-ps146-coral-700 text-sm">
                                                {subItem.name}
                                              </div>
                                              <div className="text-xs text-ps146-neutral-600 mt-0.5">
                                                {subItem.description}
                                              </div>
                                            </Link>
                                          )
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : dropdownItem.external ? (
                                <a
                                  href={dropdownItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-4 rounded-xl hover:bg-ps146-navy-50 transition-all duration-300 group transform hover:-translate-y-0.5"
                                >
                                  <div className="font-semibold text-ps146-navy-800 group-hover:text-ps146-coral-700 mb-1">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-ps146-neutral-600 leading-relaxed">
                                    {dropdownItem.description}
                                  </div>
                                </a>
                              ) : (
                                <Link
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
                              )}
                            </div>
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
    </nav>
  );
};

export default Navbar;