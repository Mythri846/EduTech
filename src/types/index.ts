export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolled: number;
  lastUpdated: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Link' | 'Article';
  url: string;
  courseId?: string;
}

export type Category = 
  | 'Computer Science'
  | 'Electrical Engineering'
  | 'Mechanical Engineering'
  | 'Civil Engineering'
  | 'Electronics'
  | 'Chemical Engineering'
  | 'Biotechnology'
  | 'All';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Student' | 'Instructor' | 'Admin';
  enrolledCourses: string[];
}