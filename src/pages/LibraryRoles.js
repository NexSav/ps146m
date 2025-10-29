import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { UserGroupIcon, AcademicCapIcon, BuildingLibraryIcon, UsersIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const LibraryRoles = () => {
  useEffect(() => {
    document.title = 'Library Roles & Responsibilities - PS 146 Anna M. Short';
  }, []);

  const roles = [
    {
      title: "Library Media Specialist (School Librarian)",
      icon: BuildingLibraryIcon,
      description: "Click on the link below to view the responsibilities of the Library Media Specialist with regards to the school library media center program",
      link: "https://www.schools.nyc.gov/system/404",
      color: "from-ps146-coral-500 to-ps146-coral-600"
    },
    {
      title: "Teachers",
      icon: AcademicCapIcon,
      description: "Click on the link below to view the teachers' responsibilities with regards to the school library media center program",
      link: "https://www.schools.nyc.gov/system/404",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "School Principal",
      icon: UserGroupIcon,
      description: "Click on the link below to view the principals' responsibilities with regards to the school library media center program",
      link: "https://www.schools.nyc.gov/system/404",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Library Advisory Team Members",
      icon: UsersIcon,
      description: "Click on the link below to view library advisory team member responsibilities",
      link: "https://docs.google.com/fileview?id=0BwF5Uxm1fj62ZjAzMGMzNWQtNDUzZi00YjQ1LTg2ODMtYmQwNTAwOGJjMGEw&hl=en",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-navy-900 to-ps146-navy-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMS0yLjY5IDYtNiA2cy02LTIuNjktNi02IDIuNjktNiA2LTYgNiAyLjY5IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-ps146-coral-600 rounded-2xl mb-6 shadow-lg">
              <BuildingLibraryIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Roles & Responsibilities</h1>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Understanding the roles and responsibilities of our library media center stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Roles Cards Section */}
      <section className="py-20 bg-gradient-to-br from-white to-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border-2 border-ps146-navy-100 hover:border-ps146-coral-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${role.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <role.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white flex-1">
                      {role.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-ps146-neutral-700 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Link Button */}
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    View Responsibilities
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-ps146-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <BuildingLibraryIcon className="h-16 w-16 text-ps146-coral-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Library Media Center</h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                The Library Media Center is a collaborative space where students, teachers, and staff work together
                to promote literacy, research skills, and a love of learning. Each stakeholder plays a vital role
                in ensuring the success of our library program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ps146-navy-800 text-white py-16">
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

export default LibraryRoles;
