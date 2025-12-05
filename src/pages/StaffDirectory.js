import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const StaffDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Staff Directory - PS 146';
  }, []);

  const staffMembers = [
    // Administration
    { firstName: 'Mona', lastName: 'Silfen', email: 'MSilfen@ps146.org', title: 'Principal', position: 'Administrator', department: 'Administration' },
    { firstName: 'Daniel', lastName: 'Cortes', email: 'DCortes@ps146.org', title: 'Assistant Principal', position: 'Administrator', department: 'Administration' },

    // Teachers
    { firstName: 'Jillian', lastName: 'Best', email: 'JBest@ps146.org', title: 'Teacher', position: 'UPK', department: 'Teachers' },
    { firstName: 'Darryl', lastName: 'Browne', email: 'dbrowne@ps146.org', title: 'Teacher', position: 'Upper Grade', department: 'Teachers' },
    { firstName: 'James', lastName: 'Corbo', email: 'jcorbo@ps146.org', title: 'Teacher', position: 'Bilingual Speech', department: 'Teachers' },
    { firstName: 'Evelyn', lastName: 'Digeorge', email: 'EDigeorge@ps146.org', title: 'Teacher', position: '', department: 'Teachers' },
    { firstName: 'Audra', lastName: 'Gibson-Brown', email: 'AGibsonbrown@ps146.org', title: 'Teacher', position: 'First Grade Gen Ed.', department: 'Teachers' },
    { firstName: 'Lauren', lastName: 'Hoffman', email: 'LHoffman@ps146.org', title: 'Teacher', position: 'Fifth Grade', department: 'Teachers' },
    { firstName: 'Heather', lastName: 'Hoffman', email: 'HHoffman@ps146.org', title: 'Teacher', position: 'First Grade', department: 'Teachers' },
    { firstName: 'Denise', lastName: 'Huey', email: 'DHuey@ps146.org', title: 'Teacher', position: 'Third Grade', department: 'Teachers' },
    { firstName: 'Brenda', lastName: 'Jerez', email: 'BJerez@ps146.org', title: 'Teacher', position: 'Fourth/Fifth Grade', department: 'Teachers' },
    { firstName: 'Gabby', lastName: 'Ros', email: 'GRos@ps146.org', title: 'Teacher', position: 'K/1st Grade', department: 'Teachers' },
    { firstName: 'Amanda', lastName: 'Burley', email: 'ABurley@ps146.org', title: 'Teacher', position: 'ENL', department: 'Teachers' },
    { firstName: 'Tamar', lastName: 'Lindenfeld', email: 'TLindenfeld@ps146.org', title: 'Teacher', position: '', department: 'Teachers' },
    { firstName: 'Sarita', lastName: 'Lopez', email: 'slopez@ps146.org', title: 'Teacher', position: 'Attendance Teacher', department: 'Teachers' },
    { firstName: 'Madeline', lastName: 'Nawa', email: 'MNawa@ps146.org', title: 'Teacher', position: 'K/First Grade', department: 'Teachers' },
    { firstName: 'Thomas', lastName: 'Nemec', email: 'TNemec@ps146.org', title: 'Teacher', position: '3-K', department: 'Teachers' },
    { firstName: 'Melinda', lastName: "O'connell", email: 'moconnell@ps146.org', title: 'Teacher', position: 'UPK', department: 'Teachers' },
    { firstName: 'Lucy', lastName: 'Perez', email: 'LPerez@ps146.org', title: 'Teacher', position: '5th Grade', department: 'Teachers' },
    { firstName: 'Edeline', lastName: 'Pierre', email: 'epierre@ps146.org', title: 'Teacher', position: 'Adaptive Physical Ed.', department: 'Teachers' },
    { firstName: 'Lisa', lastName: 'Santisi', email: 'lsantisi@ps146.org', title: 'Teacher', position: 'First Grade', department: 'Teachers' },
    { firstName: 'Elizabeth', lastName: 'Sinche', email: 'ESinche@ps146.org', title: 'Teacher', position: '3-K', department: 'Teachers' },
    { firstName: 'Danette', lastName: 'Suarez', email: 'dsuarez@ps146.org', title: 'Teacher', position: '2nd Grade', department: 'Teachers' },
    { firstName: 'Veronica', lastName: 'Torres', email: 'VTorres@ps146.org', title: 'Teacher', position: 'First/Second Grade', department: 'Teachers' },
    { firstName: 'Julianna', lastName: 'Mamone', email: 'JMamone@ps146.org', title: 'Teacher', position: '', department: 'Teachers' },
    { firstName: 'Samantha', lastName: 'Fastlich', email: 'SFastlich@ps146.org', title: 'Teacher', position: '5th Grade', department: 'Teachers' },
    { firstName: 'Amanda', lastName: 'Bohlmann', email: 'ABohlmann@ps146.org', title: 'Teacher', position: 'Kindergarten', department: 'Teachers' },
    { firstName: 'Venus', lastName: 'McGee', email: 'VMcGee@ps146.org', title: 'Teacher', position: '2nd Grade', department: 'Teachers' },
    { firstName: 'Cameron', lastName: 'Smith', email: 'Cameron@ps146.org', title: 'Teacher', position: '2nd Grade', department: 'Teachers' },
    { firstName: 'Alicia', lastName: 'Kellier', email: 'AKellier@ps146.org', title: 'Teacher', position: '3rd Grade', department: 'Teachers' },
    { firstName: 'Crista', lastName: 'DeRoma', email: 'CDeRoma@ps146.org', title: 'Teacher', position: '3rd Grade', department: 'Teachers' },
    { firstName: 'Nicole', lastName: 'Levin', email: 'NLevin@ps146.org', title: 'Teacher', position: 'ENL', department: 'Teachers' },

    // Speech Providers
    { firstName: 'Jessica', lastName: 'Star', email: 'JStar@ps146.org', title: 'Speech Provider', position: 'Monolingual Speech', department: 'Speech Providers' },
    { firstName: 'Lauren', lastName: 'Kent', email: 'LKent@ps146.org', title: 'Speech Provider', position: 'Monolingual Speech', department: 'Speech Providers' },
    { firstName: 'Mallory', lastName: 'Schwartz', email: 'MSchwartz@ps146.org', title: 'Speech Provider', position: '', department: 'Speech Providers' },
    { firstName: 'Julianna', lastName: 'Vanmeter', email: 'JVanmeter@ps146.org', title: 'Speech Provider', position: '', department: 'Speech Providers' },

    // Special Education Teachers
    { firstName: 'Ronald', lastName: 'Alvarez', email: 'ralvarez@ps146.org', title: 'Sp. Ed. Teacher', position: '3rd Grade', department: 'Special Education' },
    { firstName: 'Bianca', lastName: 'Mamone', email: 'bmamone@ps146.org', title: 'Sp. Ed. Teacher', position: '4th & 5th Grade', department: 'Special Education' },
    { firstName: 'Jocelyn', lastName: 'Morel', email: 'jmorel@ps146.org', title: 'Sp. Ed. Teacher', position: '2nd & 3rd Grade', department: 'Special Education' },
    { firstName: 'Erica', lastName: 'Nuñez', email: 'emoreno@ps146.org', title: 'Sp. Ed. Teacher', position: '4th Grade', department: 'Special Education' },
    { firstName: 'Erin', lastName: 'Pilipczak', email: 'epilipczak@ps146.org', title: 'Sp. Ed. Teacher', position: 'ICT', department: 'Special Education' },
    { firstName: 'Keisha', lastName: 'Demas', email: 'KDemas@ps146.org', title: 'Sp. Ed. Teacher', position: 'IEP Teacher/Special Ed. Liaison', department: 'Special Education' },
    { firstName: 'Ivelisse', lastName: 'Cortes', email: 'ICortes@ps146.org', title: 'D75 Inclusion', position: 'Teacher', department: 'Special Education' },

    // Cluster Teachers
    { firstName: 'Alberto', lastName: 'Bocus', email: 'abocus@ps146.org', title: 'Cluster Teacher', position: 'Physical Education', department: 'Cluster Teachers' },
    { firstName: 'Francesca', lastName: 'Capobianco', email: 'FCapobianco@ps146.org', title: 'Cluster Teacher', position: 'Science', department: 'Cluster Teachers' },
    { firstName: 'Rebecca', lastName: 'Jung', email: 'RJung@ps146.org', title: 'Cluster Teacher', position: 'Technology', department: 'Cluster Teachers' },
    { firstName: 'Tyler', lastName: 'Hone', email: 'THone@ps146.org', title: 'Cluster Teacher', position: '', department: 'Cluster Teachers' },

    // Support Staff
    { firstName: 'Jennifer', lastName: 'Schwam', email: 'JSchwam@ps146.org', title: 'Social Worker', position: '', department: 'Support Staff' },
    { firstName: 'Ellen', lastName: 'Thomas', email: 'ethomas@ps146.org', title: 'Psychologist', position: 'IEP Team', department: 'Support Staff' },
    { firstName: 'Alanna', lastName: 'Fogarty', email: 'AFogarty@ps146.org', title: 'Occupational Therapist', position: '', department: 'Support Staff' },
    { firstName: 'Marlene', lastName: 'Russell', email: 'mrussell@ps146.org', title: 'Family Worker', position: 'IEP Team', department: 'Support Staff' },
    { firstName: 'Jasmine', lastName: 'Marte', email: 'JMarte@ps146.org', title: 'Family Worker', position: 'EIP Team', department: 'Support Staff' },
    { firstName: 'Dallas', lastName: 'Hill', email: 'DHill@ps146.org', title: 'Community School Coordinator', position: 'City Year', department: 'Support Staff' },
    { firstName: 'Lesly', lastName: 'Serrano', email: 'LSerrano@ps146.org', title: 'Community Coordinator', position: '', department: 'Support Staff' },

    // Office Staff
    { firstName: 'Tania', lastName: 'Ariza', email: 'TAriza@ps146.org', title: 'School Aide', position: 'Main Office', department: 'Office Staff' },
    { firstName: 'Jimmy', lastName: 'Perez', email: 'JPerez@ps146.org', title: 'School Aide', position: 'Main Office', department: 'Office Staff' },
    { firstName: 'Ryan', lastName: 'Ruiz', email: 'RRuiz@ps146.org', title: 'Payroll', position: 'Secretary', department: 'Office Staff' },
    { firstName: 'Diana', lastName: 'Alava', email: 'dalava@ps146.org', title: 'Parent Coordinator', position: '', department: 'Office Staff' },
    { firstName: 'Victor', lastName: 'Rijo', email: 'vrijo@ps146.org', title: 'IT Specialist', position: 'Technology Support', department: 'Office Staff' },

    // Paraprofessionals
    { firstName: 'Taissa', lastName: 'Assejew', email: 'tassejew@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Lena', lastName: 'Castro', email: 'LCastro@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Sharon', lastName: 'Curtis', email: 'scurtis@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Yvette', lastName: 'Dingle', email: 'ydingle@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Jennie', lastName: 'Figueroa', email: 'jfigueroa@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'June', lastName: 'McKeiver', email: 'jmckeiver@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Paola', lastName: 'Olivares', email: 'polivares@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Christine', lastName: 'Pamblanco', email: 'cpamblanco@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Nijah', lastName: 'Parker', email: 'nparker@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Zulma', lastName: 'Perales', email: 'zperales@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'James', lastName: 'Rivers', email: 'jrivers@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Haydee', lastName: 'Rodriguez', email: 'hrodriguez@ps146.org', title: 'Paraprofessional', position: 'Library', department: 'Paraprofessionals' },
    { firstName: 'Charlette', lastName: 'Rodriguez', email: 'crodriguez@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Patti Ann', lastName: 'Russo', email: 'prusso@ps146.org', title: 'Paraprofessional', position: 'Classroom', department: 'Paraprofessionals' },
    { firstName: 'Nicholas', lastName: 'Santeramo', email: 'nsanteramo@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Melinie', lastName: 'Gonzales', email: 'mgonzales@ps146.org', title: 'D75 Para', position: '', department: 'Paraprofessionals' },
    { firstName: 'Dawn', lastName: 'Johns', email: 'DJohns@ps146.org', title: 'D75 Para', position: '', department: 'Paraprofessionals' },
    { firstName: 'Migna', lastName: 'Rodriguez', email: 'MRodriguez@ps146.org', title: 'D75 Para', position: '', department: 'Paraprofessionals' },
    { firstName: 'Christina', lastName: 'Elia', email: 'CElia@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Soraya', lastName: 'Santiago', email: 'SSantiago@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },
    { firstName: 'Shannen', lastName: 'Goyco', email: 'SGoyco@ps146.org', title: 'Paraprofessional', position: '', department: 'Paraprofessionals' },

    // D75 Coordinator
    { firstName: 'Bree', lastName: 'Carnovale', email: 'BCarnovale@ps146.org', title: 'D75 Coordinator', position: '', department: 'Special Education' }
  ];

  const departments = ['All', 'Administration', 'Teachers', 'Speech Providers', 'Special Education', 'Cluster Teachers', 'Support Staff', 'Office Staff', 'Paraprofessionals'];

  const filteredStaff = staffMembers.filter(staff => {
    const matchesSearch =
      staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment = selectedDepartment === 'All' || staff.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-ps146-coral-100 text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 px-4 py-2 rounded-full">
              Our Team
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            Staff Directory
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-4xl mx-auto leading-relaxed font-light">
            Meet the dedicated educators and staff members who make PS 146 Anna M. Short an exceptional place to learn and grow.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-br from-ps146-coral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Box */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-ps146-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, title, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-ps146-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ps146-coral-500 focus:border-transparent text-ps146-navy-900 placeholder-ps146-neutral-400"
              />
            </div>

            {/* Department Filter */}
            <div className="w-full md:w-auto flex items-center gap-3">
              <UserGroupIcon className="h-5 w-5 text-ps146-coral-600" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-6 py-4 border-2 border-ps146-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ps146-coral-500 focus:border-transparent text-ps146-navy-900 bg-white cursor-pointer"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-ps146-neutral-600">
              Showing <span className="font-bold text-ps146-coral-600">{filteredStaff.length}</span> of <span className="font-bold">{staffMembers.length}</span> staff members
            </p>
          </div>
        </div>
      </section>

      {/* Staff Directory Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto shadow-2xl rounded-3xl border-2 border-ps146-navy-100">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-ps146-coral-600 to-ps146-coral-700 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Name</th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Email</th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Title</th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">Position</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-ps146-navy-100">
                {filteredStaff.length > 0 ? (
                  filteredStaff.map((staff, index) => (
                    <tr
                      key={index}
                      className="hover:bg-ps146-coral-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-ps146-coral-500 to-ps146-coral-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                            {staff.firstName.charAt(0)}{staff.lastName.charAt(0)}
                          </div>
                          <div className="text-sm font-bold text-ps146-navy-900">
                            {staff.firstName} {staff.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <a
                          href={`mailto:${staff.email}`}
                          className="flex items-center text-sm text-ps146-coral-600 hover:text-ps146-coral-700 font-medium transition-colors group"
                        >
                          <EnvelopeIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          {staff.email}
                        </a>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-ps146-navy-100 text-ps146-navy-800">
                          {staff.title}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-ps146-neutral-700">
                        {staff.position || '-'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <UserGroupIcon className="h-16 w-16 text-ps146-neutral-300 mb-4" />
                        <p className="text-lg text-ps146-neutral-500 font-medium">No staff members found</p>
                        <p className="text-sm text-ps146-neutral-400 mt-2">Try adjusting your search or filter criteria</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-ps146-coral-50 to-ps146-coral-100 py-16 relative overflow-hidden">
        {/* Playful decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ps146-gold-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-ps146-coral-200/40 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-ps146-coral-500 to-ps146-coral-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                  <span className="text-white font-bold text-lg">146</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-ps146-navy-900">PS 146</div>
                  <div className="text-sm text-ps146-navy-600">Anna M. Short</div>
                </div>
              </div>
              <p className="text-ps146-navy-700 text-sm leading-relaxed">
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</a></li>
                <li><a href="/principal-message" className="hover:text-ps146-coral-600 transition-colors">Principal's Message</a></li>
                <li><a href="/school-goals" className="hover:text-ps146-coral-600 transition-colors">School Goals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Resources</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/admissions" className="hover:text-ps146-coral-600 transition-colors">Admissions</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-600 transition-colors">Library Media Center</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-600 transition-colors">Supply Lists</a></li>
                <li><a href="mailto:info@ps146.org" className="hover:text-ps146-coral-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Contact Info</h4>
              <div className="space-y-3 text-ps146-navy-700 text-sm">
                <p className="text-ps146-navy-900 font-medium">421 E. 106th Street</p>
                <p className="text-ps146-navy-900 font-medium">New York, NY 10029</p>
                <p className="mt-4 text-ps146-coral-600 font-bold text-lg">
                  (212) 860-5877
                </p>
                <a href="mailto:info@ps146.org" className="block text-ps146-coral-600 hover:text-ps146-coral-700 transition-colors font-medium">
                  info@ps146.org
                </a>
                <p>Mon-Fri: 8:00AM-2:20PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-ps146-coral-300 text-center text-ps146-navy-600 text-sm">
            <p>&copy; 2024 PS 146 Anna M. Short. All Rights Reserved. | Proudly created with PS146.org</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default StaffDirectory;
