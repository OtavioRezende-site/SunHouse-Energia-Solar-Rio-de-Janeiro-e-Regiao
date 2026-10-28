import React from 'react';

export type SectionTransitionType =
  | 'white-to-gray'
  | 'gray-to-white'
  | 'gray-to-dark'
  | 'dark-to-white'
  | 'white-to-dark'
  | 'dark-to-gray';

interface SectionTransitionProps {
  type: SectionTransitionType;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  type,
  className = '',
}) => {
  const getGradientClasses = () => {
    switch (type) {
      case 'white-to-gray':
        return 'h-10 sm:h-16 bg-gradient-to-b from-white to-[#F5F7FA]';
      case 'gray-to-white':
        return 'h-10 sm:h-16 bg-gradient-to-b from-[#F5F7FA] to-white';
      case 'gray-to-dark':
        return 'h-16 sm:h-24 bg-gradient-to-b from-[#F5F7FA] to-[#071C45]';
      case 'dark-to-white':
        return 'h-16 sm:h-24 bg-gradient-to-b from-[#071C45] to-white';
      case 'white-to-dark':
        return 'h-16 sm:h-24 bg-gradient-to-b from-white to-[#071C45]';
      case 'dark-to-gray':
        return 'h-16 sm:h-24 bg-gradient-to-b from-[#071C45] to-[#F5F7FA]';
      default:
        return 'h-12 bg-transparent';
    }
  };

  return (
    <div
      className={`w-full pointer-events-none select-none relative z-10 ${getGradientClasses()} ${className}`}
      aria-hidden="true"
    />
  );
};
