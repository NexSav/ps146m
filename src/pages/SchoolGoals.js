import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  LightBulbIcon,
  UsersIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SchoolGoals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'School Goals - PS 146';
  }, []);

  const goals = [
    {
      category: "Student Performance",
      subject: "English Language Arts (ELA)",
      description: "By June 2024 we will develop rigorous and meaningful academic goals to improve student performance in English Language Arts.",
      icon: BookOpenIcon,
      color: "coral"
    },
    {
      category: "Student Performance",
      subject: "Mathematics",
      description: "By June 2024 we will develop rigorous and meaningful academic goals to improve student performance in Mathematics.",
      icon: ChartBarIcon,
      color: "navy"
    },
    {
      category: "Communication",
      subject: "Parent Communication",
      description: "By June 2024 we will increase parent engagement in their child's academic performance and progress.",
      icon: ChatBubbleLeftRightIcon,
      color: "coral"
    },
    {
      category: "Building Capacity",
      subject: "Improving Student Outcomes",
      description: "By June 2024 we will differentiate professional development to engage teachers in an active partnership to promote student learning and attain professional goals.",
      icon: LightBulbIcon,
      color: "navy"
    },
    {
      category: "Building Capacity",
      subject: "Communication",
      description: "By June 2024 we will clearly communicate the school-wide vision and expectations across the school community.",
      icon: UsersIcon,
      color: "coral"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-gold-50 via-ps146-coral-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-ps146-coral-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-ps146-gold-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block text-ps146-coral-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 bg-ps146-coral-100 px-4 py-2 rounded-full">
              Strategic Vision
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ps146-navy-900 mb-6 leading-tight">
            School Goals
          </h1>

          <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8 shadow-lg shadow-ps146-coral-500/50"></div>

          <p className="text-xl md:text-2xl text-ps146-navy-800 max-w-3xl mx-auto leading-relaxed font-light">
            Our strategic objectives guide our commitment to academic excellence, community engagement, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Goals Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Strategic Focus Areas</h2>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-ps146-neutral-600 max-w-2xl mx-auto leading-relaxed">
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
              <div key={index} className="group bg-gradient-to-br from-ps146-navy-50 to-white p-8 rounded-3xl border border-ps146-navy-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md mb-6 mx-auto group-hover:bg-ps146-coral-600 transition-colors">
                  <area.icon className="h-10 w-10 text-ps146-coral-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-ps146-navy-900 text-center mb-4 group-hover:text-ps146-coral-700 transition-colors">{area.title}</h3>
                <p className="text-ps146-neutral-600 text-center mb-6 leading-relaxed">{area.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-ps146-coral-100 text-ps146-coral-700 px-4 py-2 rounded-full text-sm font-bold">
                    {area.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Goals */}
      <section className="py-24 bg-gradient-to-br from-ps146-navy-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ps146-navy-900 mb-6">Our Commitments for 2024</h2>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-ps146-navy-100">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Goal Icon & Category */}
                    <div className="lg:col-span-3">
                      <div className="text-center lg:text-left">
                        <div className={`inline-flex items-center justify-center w-20 h-20 ${
                          goal.color === 'coral' ? 'bg-ps146-coral-100' : 'bg-ps146-navy-100'
                        } rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                          <goal.icon className={`h-10 w-10 ${
                            goal.color === 'coral' ? 'text-ps146-coral-600' : 'text-ps146-navy-700'
                          }`} />
                        </div>
                        <div className="mb-3">
                          <span className={`inline-block ${
                            goal.color === 'coral' ? 'bg-ps146-coral-100 text-ps146-coral-700' : 'bg-ps146-navy-100 text-ps146-navy-700'
                          } px-4 py-2 rounded-full text-sm font-bold`}>
                            {goal.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-ps146-navy-900">{goal.subject}</h3>
                      </div>
                    </div>

                    {/* Goal Description */}
                    <div className="lg:col-span-8">
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1.5 h-full bg-ps146-coral-500 rounded-full lg:block hidden"></div>
                        <p className="text-lg text-ps146-navy-700 leading-relaxed lg:pl-8">
                          {goal.description}
                        </p>
                      </div>
                    </div>

                    {/* Goal Number */}
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        <div className={`w-14 h-14 ${
                          goal.color === 'coral' ? 'bg-ps146-coral-600' : 'bg-ps146-navy-700'
                        } text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg`}>
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
      <section className="py-24 bg-gradient-to-br from-ps146-coral-600 to-ps146-coral-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Achieving Excellence Together</h2>
            <div className="w-24 h-1.5 bg-white/60 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Academic Growth", subtitle: "Rigorous & Meaningful Goals", icon: AcademicCapIcon },
              { title: "Family Engagement", subtitle: "Strong Partnerships", icon: UsersIcon },
              { title: "Professional Development", subtitle: "Teacher Excellence", icon: LightBulbIcon }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-white/90 text-center">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-white/95 leading-relaxed text-center max-w-3xl mx-auto">
            These goals represent our unwavering commitment to providing exceptional education while building
            strong partnerships with families and our community. Together, we work toward continuous improvement
            and student success.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-ps146-navy-900 mb-8">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-ps146-neutral-600 mb-10 leading-relaxed">
            Join us in our mission to achieve excellence and create a nurturing environment for every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="inline-flex items-center justify-center bg-ps146-coral-600 hover:bg-ps146-coral-700 text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <span>Apply Now</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center border-2 border-ps146-navy-700 text-ps146-navy-700 hover:bg-ps146-navy-700 hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Modern & Organized */}
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
                Working together to achieve our strategic goals and provide exceptional education for every student.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Our Focus</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li>Academic Excellence</li>
                <li>Parent Engagement</li>
                <li>Professional Development</li>
                <li>Community Communication</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-ps146-navy-900 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-ps146-navy-700 text-sm">
                <li><a href="/" className="hover:text-ps146-coral-600 transition-colors">Home</a></li>
                <li><a href="/mission-vision" className="hover:text-ps146-coral-600 transition-colors">Mission & Vision</a></li>
                <li><a href="/principal-message" className="hover:text-ps146-coral-600 transition-colors">Principal's Message</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-600 transition-colors">Library</a></li>
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

export default SchoolGoals;
