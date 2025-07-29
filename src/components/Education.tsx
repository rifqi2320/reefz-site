import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../types';

interface EducationProps {
  education: Education[];
}

const EducationComponent: React.FC<EducationProps> = ({ education }) => {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="py-20 bg-neutral-100/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Academic background and qualifications that shaped my expertise in technology and research.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-1">
                    {edu.field}
                  </p>
                  <p className="text-gray-600 font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {edu.location}
                  </p>
                </div>
                
                <div className="lg:text-right mt-4 lg:mt-0">
                  <div className="text-gray-500 font-medium mb-2">
                    {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                  </div>
                  {edu.gpa && (
                    <div className="text-green-600 font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  {edu.description}
                </p>
              )}

              {edu.honors && edu.honors.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Honors & Recognition:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.thesis && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Thesis:</h4>
                  <p className="font-medium text-gray-800 mb-1">
                    {edu.thesis.title}
                  </p>
                  {edu.thesis.advisor && (
                    <p className="text-gray-600 text-sm mb-2">
                      Advisor: {edu.thesis.advisor}
                    </p>
                  )}
                  {edu.thesis.description && (
                    <p className="text-gray-700 text-sm text-justify">
                      {edu.thesis.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
