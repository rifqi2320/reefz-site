import { motion } from 'framer-motion';
import { Experience as ExperienceType, Tag } from '../types';
import TagFilter from './TagFilter';

interface ExperienceProps {
  experiences: ExperienceType[];
  tags: Tag[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const Experience = ({ experiences, tags, selectedTags, onTagsChange }: ExperienceProps) => {
  const filteredExperiences = selectedTags.length > 0
    ? experiences.filter(exp => exp.tags.some(tag => selectedTags.includes(tag)))
    : experiences;

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My professional journey and the impactful work I've done across different roles and companies.
          </p>
        </motion.div>

        <TagFilter 
          tags={tags}
          selectedTags={selectedTags}
          onTagsChange={onTagsChange}
        />

        <div className="space-y-8">
          {filteredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden"
            >
              <div className="p-8">
                <div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-accent font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-sm text-neutral-500 mt-2 sm:mt-0">
                        <div>{experience.location}</div>
                        <div>
                          {experience.startDate} - {experience.endDate || 'Present'}
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-4 text-lg font-medium text-justify">
                      {experience.summary}
                    </p>

                    <p className="text-neutral-600 mb-6 leading-relaxed text-justify">
                      {experience.description}
                    </p>

                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-neutral-600 text-justify">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tagId) => {
                        const tag = tags.find(t => t.id === tagId);
                        return tag ? (
                          <span
                            key={tagId}
                            className="px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: tag.color }}
                          >
                            {tag.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-neutral-500">No experiences match the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
