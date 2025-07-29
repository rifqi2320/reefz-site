import { motion } from 'framer-motion';
import { Publication, Tag } from '../types';
import TagFilter from './TagFilter';

interface PublicationsProps {
  publications: Publication[];
  tags: Tag[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const Publications = ({ publications, tags, selectedTags, onTagsChange }: PublicationsProps) => {
  const filteredPublications = selectedTags.length > 0
    ? publications.filter(pub => pub.tags.some(tag => selectedTags.includes(tag)))
    : publications;

  const featuredPublications = filteredPublications.filter(p => p.featured);
  const otherPublications = filteredPublications.filter(p => !p.featured);

  return (
    <section id="publications" className="py-20 section-padding bg-neutral-100/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Research contributions to the advancement of machine learning and artificial intelligence.
          </p>
        </motion.div>

        <TagFilter 
          tags={tags}
          selectedTags={selectedTags}
          onTagsChange={onTagsChange}
        />

        {featuredPublications.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Featured Publications</h3>
            <div className="space-y-6">
              {featuredPublications.map((publication, index) => (
                <PublicationCard key={publication.id} publication={publication} tags={tags} index={index} featured />
              ))}
            </div>
          </div>
        )}

        {otherPublications.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8">Other Publications</h3>
            <div className="space-y-6">
              {otherPublications.map((publication, index) => (
                <PublicationCard key={publication.id} publication={publication} tags={tags} index={index} />
              ))}
            </div>
          </div>
        )}

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-neutral-500">No publications match the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface PublicationCardProps {
  publication: Publication;
  tags: Tag[];
  index: number;
  featured?: boolean;
}

const PublicationCard = ({ publication, tags, index, featured = false }: PublicationCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'accepted': return 'bg-blue-100 text-blue-800';
      case 'under-review': return 'bg-yellow-100 text-yellow-800';
      case 'preprint': return 'bg-purple-100 text-purple-800';
      case 'in-preparation': return 'bg-orange-100 text-orange-800';
      case 'upcoming': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getVenueIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'journal':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'workshop':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-neutral-900">
              {publication.title}
            </h3>
            {featured && (
              <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            )}
            {publication.isPartial && (
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                Partial Info
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
            <div className="flex items-center gap-1">
              {getVenueIcon(publication.type)}
              <span>{publication.venue || (publication.isPartial ? 'Venue TBD' : 'Unknown Venue')}</span>
            </div>
            {(publication.year || publication.expectedDate) && (
              <>
                <span>•</span>
                <span>{publication.year || publication.expectedDate}</span>
              </>
            )}
            {publication.citations !== undefined && (
              <>
                <span>•</span>
                <span>{publication.citations} citations</span>
              </>
            )}
          </div>
          
          <p className="text-sm text-neutral-600 mb-3">
            <strong>Authors:</strong> {publication.authors.join(', ')}
          </p>
        </div>
        
        {publication.status && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(publication.status)}`}>
            {publication.status.replace('-', ' ').replace('_', ' ')}
          </span>
        )}
      </div>

      {publication.abstract ? (
        <p className="text-neutral-600 mb-4 leading-relaxed text-justify">
          {publication.abstract}
        </p>
      ) : publication.isPartial ? (
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
          <p className="text-gray-600 text-sm">
            <strong>Abstract:</strong> {publication.partialNote || 'Abstract will be available upon publication.'}
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2 mb-4">
        {publication.tags.map((tagId) => {
          const tag = tags.find(t => t.id === tagId);
          return tag ? (
            <span
              key={tagId}
              className="px-2 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: tag.color }}
            >
              {tag.name}
            </span>
          ) : null;
        })}
      </div>

      {publication.links && (
        <div className="flex flex-wrap gap-3">
          {publication.links.paper && (
            <motion.a
              href={publication.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-200 text-sm"
              whileHover={{ y: -1 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Paper
            </motion.a>
          )}

          {publication.links.arxiv && (
            <motion.a
              href={publication.links.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-200 text-sm"
              whileHover={{ y: -1 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              arXiv
            </motion.a>
          )}

          {publication.links.code && (
            <motion.a
              href={publication.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-200 text-sm"
              whileHover={{ y: -1 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </motion.a>
          )}

          {publication.links.slides && (
            <motion.a
              href={publication.links.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-200 text-sm"
              whileHover={{ y: -1 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h3zM9 3v1h6V3H9zm1 4h4v2h-4V7zm-3 4h10v2H7v-2zm0 4h10v2H7v-2z" />
              </svg>
              Slides
            </motion.a>
          )}

          {publication.links.poster && (
            <motion.a
              href={publication.links.poster}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-200 text-sm"
              whileHover={{ y: -1 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Poster
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Publications;
