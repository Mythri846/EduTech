import React from 'react';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';
import Card from '../components/common/Card';

const ForumsPage: React.FC = () => {
  const forumCategories = [
    {
      title: 'General Discussion',
      description: 'Discuss general engineering topics and student life',
      icon: MessageSquare,
      topics: 234,
      posts: 1543
    },
    {
      title: 'Technical Forums',
      description: 'Subject-specific technical discussions and problem-solving',
      icon: TrendingUp,
      topics: 456,
      posts: 2891
    },
    {
      title: 'Study Groups',
      description: 'Find and join study groups for different subjects',
      icon: Users,
      topics: 178,
      posts: 892
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Student Forums
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Connect with fellow students, share knowledge, and participate in discussions
        </p>
      </div>

      <div className="grid gap-6">
        {forumCategories.map((category, index) => (
          <Card key={index} hover className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                <category.icon className="h-6 w-6 text-teal-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {category.description}
                </p>
                <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>{category.topics} topics</span>
                  <span>{category.posts} posts</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-100 dark:border-teal-800">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Forum Guidelines
        </h2>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
          <li>• Be respectful and professional in all interactions</li>
          <li>• Stay on topic and use appropriate categories for discussions</li>
          <li>• Share knowledge and help others learn</li>
          <li>• Follow academic integrity guidelines</li>
        </ul>
      </div>
    </div>
  );
};

export default ForumsPage;