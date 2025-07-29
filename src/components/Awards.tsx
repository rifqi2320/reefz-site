import React, { useState } from 'react';
import { Award } from '../types';

// Simple chevron icons
const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

interface AwardsProps {
  awards: Award[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getAwardTypeColor = (type: Award['type']) => {
    switch (type) {
      case 'award':
        return 'bg-yellow-100 text-yellow-800';
      case 'honor':
        return 'bg-purple-100 text-purple-800';
      case 'fellowship':
        return 'bg-blue-100 text-blue-800';
      case 'grant':
        return 'bg-green-100 text-green-800';
      case 'recognition':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAwardTypeLabel = (type: Award['type']) => {
    switch (type) {
      case 'award':
        return 'Award';
      case 'honor':
        return 'Honor';
      case 'fellowship':
        return 'Fellowship';
      case 'grant':
        return 'Grant';
      case 'recognition':
        return 'Recognition';
      default:
        return 'Award';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left group"
          >
            <h2 className="text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              Honors & Awards
            </h2>
            <div className="flex items-center text-gray-500 group-hover:text-blue-600 transition-colors">
              <span className="text-sm mr-2">{awards.length} awards</span>
              {isExpanded ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </div>
          </button>
          <p className="text-gray-600 max-w-2xl">
            Recognition and achievements in research, academics, and professional development.
          </p>
        </div>

        {isExpanded && (
          <div className="grid gap-6 animate-in slide-in-from-top duration-300">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-2">
                      {award.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 sm:ml-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getAwardTypeColor(
                        award.type
                      )}`}
                    >
                      {getAwardTypeLabel(award.type)}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {award.year}
                    </span>
                  </div>
                </div>
                
                {award.description && (
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;
