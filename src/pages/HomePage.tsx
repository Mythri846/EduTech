import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Users, BarChart3, Lightbulb } from 'lucide-react';
import Button from '../components/common/Button';
import CourseCard from '../components/common/CourseCard';
import { mockCourses } from '../data/mockData';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredCourses = mockCourses.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shaping the Future of <span className="text-teal-400">Engineering Education</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Access quality courses, resources, and a community of engineers to elevate your B.Tech journey. Learn from industry experts and build the skills for tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => navigate('/courses')}>
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Join Community
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <input
                  type="text"
                  placeholder="Search for courses, topics, or materials..."
                  className="flex-grow px-4 py-3 bg-transparent text-white placeholder-slate-400 focus:outline-none"
                />
                <button className="px-6 bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 dark:bg-slate-900 -mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 text-slate-50 dark:text-slate-900 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,224C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Transforming Engineering Education
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover how our platform is revolutionizing the way B.Tech students learn, collaborate, and prepare for their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="h-16 w-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Comprehensive Courses</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Expertly crafted courses covering all engineering disciplines with practical examples and industry insights.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="h-16 w-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Student Community</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Connect with peers, share knowledge, and collaborate on projects in our vibrant engineering community.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Progress Tracking</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Monitor your learning journey with detailed analytics and personalized performance insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Practical Learning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Apply theoretical knowledge through interactive projects, simulations, and real-world problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Featured Courses
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Explore our top-rated engineering courses
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/courses')}>
              View All Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Engineering Skills?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are mastering engineering concepts and building their future with EduTech.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => navigate('/signup')}
            >
              Sign Up for Free
            </Button>
            <Button 
              className="bg-white text-teal-600 hover:bg-teal-50"
              size="lg" 
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              What Students Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Hear from our community of engineering students and how EduTech has helped them succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Student" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Rajiv Sharma
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Computer Science, Final Year
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic">
                "The Data Structures course helped me ace my technical interviews. The interactive exercises and real-world projects made complex algorithms much easier to understand."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Student" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Priya Patel
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Electrical Engineering, 3rd Year
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic">
                "The community forums helped me connect with peers facing similar challenges. The Circuit Design course completely transformed my understanding of complex electrical systems."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Student" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Rahul Verma
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Mechanical Engineering, Graduate
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic">
                "The practical approach to thermodynamics made a traditionally difficult subject enjoyable. I credit EduTech for helping me land my dream job at a leading automotive company."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;