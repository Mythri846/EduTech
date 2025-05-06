import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <AlertTriangle className="h-20 w-20 text-amber-500 mb-6" />
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => navigate('/')}>
          Go to Homepage
        </Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;