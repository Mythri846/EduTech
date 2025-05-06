import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700
        shadow-sm overflow-hidden
        ${hover ? 'transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;