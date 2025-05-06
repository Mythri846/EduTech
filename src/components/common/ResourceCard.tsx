import React from 'react';
import { FileText, Video, Link as LinkIcon, BookOpen } from 'lucide-react';
import { Resource } from '../../types';
import Card from './Card';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'PDF':
        return <FileText className="h-6 w-6 text-red-500" />;
      case 'Video':
        return <Video className="h-6 w-6 text-blue-500" />;
      case 'Link':
        return <LinkIcon className="h-6 w-6 text-purple-500" />;
      case 'Article':
        return <BookOpen className="h-6 w-6 text-green-500" />;
      default:
        return <FileText className="h-6 w-6 text-slate-500" />;
    }
  };

  return (
    <Card hover className="flex items-center p-4 gap-4">
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-slate-900 dark:text-white truncate">
          {resource.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {resource.type}
        </p>
      </div>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
      >
        <LinkIcon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
      </a>
    </Card>
  );
};

export default ResourceCard;