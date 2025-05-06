import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Course } from '../../types';
import Card from './Card';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card hover className="flex flex-col h-full">
      <Link to={`/courses/${course.id}`} className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-3">
            <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-teal-600 rounded">
              {course.category}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 mb-2">
            {course.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4">
            {course.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
              <span>{course.instructor}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-amber-500 text-amber-500" />
                <span className="text-sm font-medium">{course.rating}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  ({course.enrolled.toLocaleString()})
                </span>
              </div>
              
              <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                {course.level} · {course.duration}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CourseCard;