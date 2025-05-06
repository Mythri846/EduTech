import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import CourseCard from '../components/common/CourseCard';
import CategoryFilter from '../components/common/CategoryFilter';
import { mockCourses } from '../data/mockData';
import { Course, Category } from '../types';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(mockCourses);

  useEffect(() => {
    let result = mockCourses;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(course => course.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.description.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
    }
    
    setFilteredCourses(result);
  }, [searchTerm, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Explore Courses
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Discover comprehensive engineering courses taught by industry experts
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for courses..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium whitespace-nowrap">
              Sort by:
            </span>
            <select
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Results count */}
      <div className="mb-6">
        <p className="text-slate-600 dark:text-slate-400">
          Showing <span className="font-medium text-slate-900 dark:text-white">{filteredCourses.length}</span> courses
        </p>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
            No courses found
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;