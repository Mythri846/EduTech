import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          About EduTech
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Empowering the next generation of engineers through quality education and innovative learning solutions
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
          <Target className="h-12 w-12 text-teal-600 mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To provide accessible, high-quality engineering education through innovative digital learning platforms and foster a collaborative community of future engineers.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
          <Award className="h-12 w-12 text-amber-500 mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400">
            To become the leading platform for engineering education, creating a global community of skilled engineers who drive technological innovation and progress.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Quality Content
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Expertly crafted courses and resources designed specifically for B.Tech students
            </p>
          </div>
          <div className="text-center">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Active Community
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Vibrant community of students and educators sharing knowledge and experiences
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Industry Recognition
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Courses aligned with industry standards and current technological trends
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
          Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: 'Dr. Rajesh Kumar',
              role: 'Founder & CEO',
              image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              name: 'Prof. Sarah Chen',
              role: 'Academic Director',
              image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              name: 'Mike Anderson',
              role: 'Tech Lead',
              image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
              name: 'Dr. Priya Sharma',
              role: 'Content Director',
              image: 'https://images.pexels.com/photos/3796024/pexels-photo-3796024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have questions or want to learn more about our platform?
        </p>
        <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutPage;