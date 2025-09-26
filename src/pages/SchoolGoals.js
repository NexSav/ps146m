import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { 
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  LightBulbIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const SchoolGoals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goals = [
    {
      category: "Student Performance",
      subject: "English Language Arts (ELA)",
      description: "By June 2024 we will develop rigorous and meaningful academic goals to improve student performance in English Language Arts.",
      icon: BookOpenIcon,
      color: "ps146-coral"
    },
    {
      category: "Student Performance", 
      subject: "Mathematics",
      description: "By June 2024 we will develop rigorous and meaningful academic goals to improve student performance in Mathematics.",
      icon: ChartBarIcon,
      color: "ps146-navy"
    },
    {
      category: "Communication",
      subject: "Parent Communication",
      description: "By June 2024 we will increase parent engagement in their child's academic performance and progress.",
      icon: ChatBubbleLeftRightIcon,
      color: "ps146-coral"
    },
    {
      category: "Building Capacity",
      subject: "Improving Student Outcomes",
      description: "By June 2024 we will differentiate professional development to engage teachers in an active partnership to promote student learning and attain professional goals.",
      icon: LightBulbIcon,
      color: "ps146-navy"
    },
    {
      category: "Building Capacity",
      subject: "Communication",
      description: "By June 2024 we will clearly communicate the school-wide vision and expectations across the school community.",
      icon: UsersIcon,
      color: "ps146-coral"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-ps146-navy-50 via-white to-ps146-coral-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-navy-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-coral-100/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-ps146-navy-800 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full">
              <StarIcon className="h-4 w-4 mr-2" />
              Strategic Vision
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-ps146-navy-900 mb-6 leading-tight">
            Our School
            <span className="block text-ps146-coral-600 font-extralight mt-2">Goals</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-ps146-coral-400 to-ps146-navy-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-ps146-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our strategic objectives guide our commitment to academic excellence, community engagement, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Goals Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-8">Strategic Focus Areas</h2>
            <p className="text-lg text-ps146-neutral-600 max-w-2xl mx-auto">
              Our goals are organized around three key areas that drive our educational mission and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Student Performance",
                description: "Enhancing academic achievement in core subjects",
                icon: AcademicCapIcon,
                count: "2 Goals"
              },
              {
                title: "Communication",
                description: "Strengthening family and community connections",
                icon: ChatBubbleLeftRightIcon,
                count: "1 Goal"
              },
              {
                title: "Building Capacity",
                description: "Developing our educational community",
                icon: LightBulbIcon,
                count: "2 Goals"
              }
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-ps146-navy-50 to-ps146-coral-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6 mx-auto">
                  <area.icon className="h-8 w-8 text-ps146-coral-600" />
                </div>
                <h3 className="text-xl font-semibold text-ps146-navy-800 text-center mb-4">{area.title}</h3>
                <p className="text-ps146-neutral-600 text-center mb-4">{area.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-ps146-coral-100 text-ps146-coral-700 px-3 py-1 rounded-full text-sm font-medium">
                    {area.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Goals */}
      <section className="py-20 bg-ps146-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-ps146-navy-900 mb-4">Our Commitments for 2024</h2>
            <div className="w-20 h-0.5 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Goal Icon & Category */}
                    <div className="lg:col-span-3">
                      <div className="text-center lg:text-left">
                        <div className={`inline-flex items-center justify-center w-20 h-20 bg-${goal.color}-100 rounded-2xl mb-4`}>
                          <goal.icon className={`h-10 w-10 text-${goal.color}-600`} />
                        </div>
                        <div className="mb-2">
                          <span className={`inline-block bg-${goal.color}-100 text-${goal.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                            {goal.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-ps146-navy-800">{goal.subject}</h3>
                      </div>
                    </div>

                    {/* Goal Description */}
                    <div className="lg:col-span-8">
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-ps146-coral-400 to-ps146-navy-400 rounded-full lg:block hidden"></div>
                        <p className="text-lg text-ps146-navy-700 leading-relaxed lg:pl-8">
                          {goal.description}
                        </p>
                      </div>
                    </div>

                    {/* Goal Number */}
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <div className={`w-12 h-12 bg-${goal.color}-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ps146-navy-900 to-ps146-coral-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/10 rounded-full opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-light mb-8">Achieving Excellence Together</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { title: "Academic Growth", subtitle: "Rigorous & Meaningful Goals" },
                  { title: "Family Engagement", subtitle: "Strong Partnerships" },
                  { title: "Professional Development", subtitle: "Teacher Excellence" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                These goals represent our unwavering commitment to providing exceptional education while building 
                strong partnerships with families and our community. Together, we work toward continuous improvement 
                and student success.
              </p>
            </div>
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
                Working together to achieve our strategic goals and provide exceptional education for every student.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Our Focus</h4>
              <ul className="space-y-3 text-ps146-navy-300">
                <li>Academic Excellence</li>
                <li>Parent Engagement</li>
                <li>Professional Development</li>
                <li>Community Communication</li>
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

export default SchoolGoals;
