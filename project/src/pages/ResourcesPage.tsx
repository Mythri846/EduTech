import React, { useState } from 'react';
import { Search, BookOpen, FileText, Video, Link as LinkIcon } from 'lucide-react';
import { mockResources } from '../data/mockData';
import ResourceCard from '../components/common/ResourceCard';
import Button from '../components/common/Button';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState<string>('All');
  
  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'All' || resource.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Learning Resources
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Access a wide range of educational materials to support your studies
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
              placeholder="Search for resources..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Resource Type Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeType === 'All' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveType('All')}
            className="flex items-center"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            All Types
          </Button>
          <Button
            variant={activeType === 'PDF' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveType('PDF')}
            className="flex items-center"
          >
            <FileText className="h-4 w-4 mr-2" />
            PDFs
          </Button>
          <Button
            variant={activeType === 'Video' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveType('Video')}
            className="flex items-center"
          >
            <Video className="h-4 w-4 mr-2" />
            Videos
          </Button>
          <Button
            variant={activeType === 'Article' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveType('Article')}
            className="flex items-center"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Articles
          </Button>
          <Button
            variant={activeType === 'Link' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveType('Link')}
            className="flex items-center"
          >
            <LinkIcon className="h-4 w-4 mr-2" />
            Links
          </Button>
        </div>
      </div>

      {/* Resources List */}
      <div className="space-y-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <BookOpen className="h-12 w-12 mx-auto text-slate-400" />
            <h3 className="text-xl font-medium text-slate-900 dark:text-white mt-4 mb-2">
              No resources found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>

      {/* Resource upload suggestion */}
      <div className="mt-12 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
              Have a resource to share?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Upload your study materials to help other students in the community.
            </p>
          </div>
          <Button>
            Upload Resource
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;