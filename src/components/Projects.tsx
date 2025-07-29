import { motion } from 'framer-motion';
import { Project, Tag } from '../types';
import TagFilter from './TagFilter';

interface ProjectsProps {
  projects: Project[];
  tags: Tag[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const Projects = ({ projects, tags, selectedTags, onTagsChange }: ProjectsProps) => {
  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)))
    : projects;

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 section-padding bg-neutral-100/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building innovative solutions.
          </p>
        </motion.div>

        <TagFilter 
          tags={tags}
          selectedTags={selectedTags}
          onTagsChange={onTagsChange}
        />

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
            <div className="grid gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} tags={tags} index={index} featured />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} tags={tags} index={index} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-neutral-500">No projects match the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  tags: Tag[];
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, tags, index, featured = false }: ProjectCardProps) => {
  const cardClass = featured 
    ? "bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden"
    : "bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cardClass}
      whileHover={{ y: -5 }}
    >
      {project.media.length > 0 && (
        <div className="relative">
          {project.media[0].type === 'image' && (
            <div className="aspect-video bg-neutral-100">
              <img
                src={project.media[0].url}
                alt={project.media[0].alt || project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-neutral-900">
            {project.title}
          </h3>
          <div className="text-sm text-neutral-500">
            {project.startDate} {project.endDate && `- ${project.endDate}`}
          </div>
        </div>

        <p className="text-neutral-600 mb-4 font-medium text-justify">
          {project.summary}
        </p>

        <p className="text-neutral-600 mb-6 leading-relaxed text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tagId) => {
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

        {project.links && (
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            )}

            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            )}

            {project.links.article && (
              <motion.a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Article
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
