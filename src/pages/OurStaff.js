import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { UsersIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const OurStaff = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Our Staff - PS 146 Anna M. Short';
  }, []);

  const staffData = [
    { firstName: "Mona", lastName: "Silfen", email: "MSilfen@ps146.org", title: "Principal", position: "Administrator" },
    { firstName: "Daniel", lastName: "Cortes", email: "DCortes@ps146.org", title: "Assistant Principal", position: "Administrator" },
    { firstName: "Diane", lastName: "Atallah", email: "DAtallah@ps146.org", title: "Teacher", position: "ENL" },
    { firstName: "Jillian", lastName: "Best", email: "JBest@ps146.org", title: "Teacher", position: "UPK" },
    { firstName: "Darryl", lastName: "Browne", email: "dbrowne@ps146.org", title: "Teacher", position: "Upper Grade Science" },
    { firstName: "James", lastName: "Corbo", email: "jcorbo@ps146.org", title: "Teacher", position: "Bilingual Speech" },
    { firstName: "Evelyn", lastName: "Digeorge", email: "EDigeorge@ps146.org", title: "Teacher", position: "" },
    { firstName: "Audra", lastName: "Gibson-Brown", email: "AGibsonbrown@ps146.org", title: "Teacher", position: "First Grade Gen Ed." },
    { firstName: "Lauren", lastName: "Hoffman", email: "LHoffman@ps146.org", title: "Teacher", position: "Fifth Grade" },
    { firstName: "Heather", lastName: "Hoffman", email: "HHoffman@ps146.org", title: "Teacher", position: "First Grade" },
    { firstName: "Denise", lastName: "Huey", email: "DHuey@ps146.org", title: "Teacher", position: "Third Grade" },
    { firstName: "Brenda", lastName: "Jerez", email: "BJerez@ps146.org", title: "Teacher", position: "Fourth/Fifth Grade" },
    { firstName: "Gabby", lastName: "Ros", email: "GRos@ps146.org", title: "Teacher", position: "K/1st Grade" },
    { firstName: "Amanda", lastName: "Burley", email: "ABurley@ps146.org", title: "Teacher", position: "ENL" },
    { firstName: "Tamar", lastName: "Lindenfeld", email: "TLindenfeld@ps146.org", title: "Teacher", position: "" },
    { firstName: "Sarita", lastName: "Lopez", email: "slopez@ps146.org", title: "Teacher", position: "Attendance Teacher" },
    { firstName: "Madeline", lastName: "Nawa", email: "MNawa@ps146.org", title: "Teacher", position: "K/First Grade" },
    { firstName: "Thomas", lastName: "Nemec", email: "TNemec@ps146.org", title: "Teacher", position: "3-K" },
    { firstName: "Melinda", lastName: "O'connell", email: "moconnell@ps146.org", title: "Teacher", position: "UPK" },
    { firstName: "Lucy", lastName: "Perez", email: "LPerez@ps146.org", title: "Teacher", position: "5th Grade" },
    { firstName: "Edeline", lastName: "Pierre", email: "epierre@ps146.org", title: "Teacher", position: "Adaptive Physical Ed." },
    { firstName: "Lisa", lastName: "Santisi", email: "lsantisi@ps146.org", title: "Teacher", position: "First Grade" },
    { firstName: "Elizabeth", lastName: "Sinche", email: "ESinche@ps146.org", title: "Teacher", position: "3-K" },
    { firstName: "Danette", lastName: "Suarez", email: "dsuarez@ps146.org", title: "Teacher", position: "2nd Grade" },
    { firstName: "Veronica", lastName: "Torres", email: "VTorres@ps146.org", title: "Teacher", position: "First/Second Grade" },
    { firstName: "Amy", lastName: "Dennis", email: "adennis@ps146.org", title: "Speech Provider", position: "Monolingual Speech" },
    { firstName: "Lauren", lastName: "Kent", email: "LKent@ps146.org", title: "Speech Provider", position: "Monolingual Speech" },
    { firstName: "Mallory", lastName: "Schwartz", email: "MSchwartz@ps146.org", title: "Speech Provider", position: "" },
    { firstName: "Julianna", lastName: "Vanmeter", email: "JVanmeter@ps146.org", title: "Speech Provider", position: "" },
    { firstName: "Ronald", lastName: "Alvarez", email: "ralvarez@ps146.org", title: "Sp. Ed. Teacher", position: "3rd Grade" },
    { firstName: "Bianca", lastName: "Mamone", email: "bmamone@ps146.org", title: "Sp. Ed. Teacher", position: "4th & 5th Grade." },
    { firstName: "Julianna", lastName: "Mamone", email: "JMamone@ps146.org", title: "Teacher", position: "" },
    { firstName: "Jocelyn", lastName: "Morel", email: "jmorel@ps146.org", title: "Sp. Ed. Teacher", position: "2nd & 3rd Grade" },
    { firstName: "Erica", lastName: "Moreno", email: "emoreno@ps146.org", title: "Sp. Ed. Teacher", position: "4th Grade" },
    { firstName: "Erin", lastName: "Pilipczak", email: "epilipczak@ps146.org", title: "Sp. Ed. Teacher", position: "ICT" },
    { firstName: "Keisha", lastName: "Demas", email: "KDemas@ps146.org", title: "Sp. Ed. Teacher", position: "IEP Teacher/Special Ed. Liaison" },
    { firstName: "Jennifer", lastName: "Schwam", email: "JSchwam@ps146.org", title: "Social Worker", position: "" },
    { firstName: "Eva", lastName: "Cartagena", email: "ecartagena@ps146.org", title: "School Aide", position: "Main Office" },
    { firstName: "Ellen", lastName: "Thomas", email: "ethomas@ps146.org", title: "Psychologist", position: "IEP Team" },
    { firstName: "Ryan", lastName: "Ruiz", email: "RRuiz@ps146.org", title: "Payroll", position: "Secretary" },
    { firstName: "Diana", lastName: "Alava", email: "dalava@ps146.org", title: "Parent Coordinator", position: "" },
    { firstName: "Ivelisse", lastName: "Cortes", email: "ICortes@ps146.org", title: "D75 Inclusion", position: "Teacher" },
    { firstName: "Taissa", lastName: "Assejew", email: "tassejew@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Lena", lastName: "Castro", email: "LCastro@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Sharon", lastName: "Curtis", email: "scurtis@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Yvette", lastName: "Dingle", email: "ydingle@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Jennie", lastName: "Figueroa", email: "jfigueroa@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "June", lastName: "McKeiver", email: "jmckeiver@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Paola", lastName: "Olivares", email: "polivares@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Christine", lastName: "Pamblanco", email: "cpamblanco@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Nijah", lastName: "Parker", email: "nparker@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Zulma", lastName: "Perales", email: "zperales@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "James", lastName: "Rivers", email: "jrivers@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Haydee", lastName: "Rodriguez", email: "hrodriguez@ps146.org", title: "Paraprofessional", position: "Library" },
    { firstName: "Charlette", lastName: "Rodriguez", email: "crodriguez@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Patti Ann", lastName: "Russo", email: "prusso@ps146.org", title: "Paraprofessional", position: "Classroom" },
    { firstName: "Nicholas", lastName: "Santeramo", email: "nsanteramo@ps146.org", title: "Paraprofessional", position: "" },
    { firstName: "Alanna", lastName: "Fogarty", email: "AFogarty@ps146.org", title: "Occupational Therapist", position: "" },
    { firstName: "Victor", lastName: "Rijo", email: "vrijo@ps146.org", title: "IT Specialist", position: "Technology Support" },
    { firstName: "Marlene", lastName: "Russell", email: "mrussell@ps146.org", title: "Family Worker", position: "IEP Team" },
    { firstName: "Jasmine", lastName: "Marte", email: "JMarte@ps146.org", title: "Family Worker", position: "EIP Team" },
    { firstName: "Melinie", lastName: "Gonzales", email: "mgonzales@ps146.org", title: "D75 Para", position: "" },
    { firstName: "Dawn", lastName: "Johns", email: "DJohns@ps146.org", title: "D75 Para", position: "" },
    { firstName: "Migna", lastName: "Rodriguez", email: "MRodriguez@ps146.org", title: "D75 Para", position: "" },
    { firstName: "Bree", lastName: "Carnovale", email: "BCarnovale@ps146.org", title: "D75 Coordinator", position: "" },
    { firstName: "Alberto", lastName: "Bocus", email: "abocus@ps146.org", title: "Cluster Teacher", position: "Physical Education" },
    { firstName: "Francesca", lastName: "Capobianco", email: "FCapobianco@ps146.org", title: "Cluster Teacher", position: "Science" },
    { firstName: "Rebecca", lastName: "Jung", email: "RJung@ps146.org", title: "Cluster Teacher", position: "Technology" }
  ];

  const categories = ['All', 'Administrator', 'Teacher', 'Speech Provider', 'Sp. Ed. Teacher', 'Social Worker', 'Paraprofessional', 'Cluster Teacher', 'Other'];

  const filteredStaff = staffData.filter(staff => {
    const matchesCategory = selectedCategory === 'All' ||
      staff.title === selectedCategory ||
      (selectedCategory === 'Other' && !['Administrator', 'Teacher', 'Speech Provider', 'Sp. Ed. Teacher', 'Social Worker', 'Paraprofessional', 'Cluster Teacher'].includes(staff.title));

    return matchesCategory;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ps146-coral-500 to-ps146-coral-600 rounded-2xl mb-6 shadow-lg">
              <UsersIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ps146-navy-900 mb-6">Our Staff</h1>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>
            <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light">
              P.S. 146 Faculty is dedicated, hard working and committed to the education of every child.
              Our diversity of talents and experience makes the school an exceptional place for all.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-gradient-to-br from-ps146-navy-50 to-white border-b border-ps146-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Centered */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-ps146-coral-600 text-white shadow-lg scale-105'
                    : 'bg-white text-ps146-navy-800 hover:bg-ps146-navy-50 border border-ps146-navy-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-ps146-neutral-600">
              Showing <span className="font-bold text-ps146-coral-600">{filteredStaff.length}</span> of <span className="font-bold">{staffData.length}</span> staff members
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((staff, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-ps146-navy-100 rounded-2xl p-6 hover:shadow-2xl hover:border-ps146-coral-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-ps146-coral-500 to-ps146-coral-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {staff.firstName.charAt(0)}{staff.lastName.charAt(0)}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-ps146-navy-900 group-hover:text-ps146-coral-700 transition-colors">
                      {staff.firstName} {staff.lastName}
                    </h3>
                    <p className="text-sm font-medium text-ps146-coral-600">
                      {staff.title}
                    </p>
                  </div>
                </div>

                {/* Position */}
                {staff.position && (
                  <div className="mb-4">
                    <div className="bg-ps146-navy-50 rounded-lg px-3 py-2">
                      <p className="text-sm text-ps146-navy-800 font-medium">
                        {staff.position}
                      </p>
                    </div>
                  </div>
                )}

                {/* Email */}
                <a
                  href={`mailto:${staff.email}`}
                  className="flex items-center gap-2 text-sm text-ps146-neutral-600 hover:text-ps146-coral-600 transition-colors group/email"
                >
                  <EnvelopeIcon className="h-4 w-4 group-hover/email:scale-110 transition-transform" />
                  <span className="truncate">{staff.email}</span>
                </a>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredStaff.length === 0 && (
            <div className="text-center py-20">
              <UsersIcon className="h-20 w-20 text-ps146-neutral-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-ps146-navy-900 mb-2">No staff members found</h3>
              <p className="text-ps146-neutral-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
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

export default OurStaff;
