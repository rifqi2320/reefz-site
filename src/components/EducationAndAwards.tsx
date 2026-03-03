import React from 'react';
import { motion } from 'framer-motion';
import { Education, Award } from '../types';

interface EducationAndAwardsProps {
  education: Education[];
  awards: Award[];
}

const EducationAndAwards: React.FC<EducationAndAwardsProps> = ({ education, awards }) => {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

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
      case 'competition':
        return 'bg-orange-100 text-orange-800';
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
      case 'competition':
        return 'Competition';
      default:
        return 'Award';
    }
  };

  return (
    <section className="py-20 bg-neutral-100/50">
      <div className="container mx-auto px-6">
        {/* Desktop: Two column layout, Mobile: Single column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl font-bold mb-6">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto lg:mx-0"></div>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 mt-6">
                Academic background and qualifications that shaped my expertise in technology and research.
              </p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {edu.field}
                      </p>
                      <p className="text-gray-700 font-medium mb-2">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <p className="text-gray-600 font-medium">
                        {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Honors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-gray-600 text-sm mb-4">{edu.description}</p>
                  )}

                  {edu.thesis && (
                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Thesis:</h4>
                      <p className="text-gray-700 font-medium text-sm mb-1">{edu.thesis.title}</p>
                      {edu.thesis.advisor && (
                        <p className="text-gray-600 text-sm mb-2">Advisor: {edu.thesis.advisor}</p>
                      )}
                      {edu.thesis.description && (
                        <p className="text-gray-600 text-sm">{edu.thesis.description}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl font-bold mb-6">Honors & Awards</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto lg:mx-0"></div>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 mt-6">
                Recognition and achievements in research, academics, and professional development.
              </p>
            </div>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
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
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {award.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndAwards;