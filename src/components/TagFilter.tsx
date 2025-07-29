import { motion } from 'framer-motion';
import { Tag } from '../types';

interface TagFilterProps {
  tags: Tag[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const TagFilter = ({ tags, selectedTags, onTagsChange }: TagFilterProps) => {
  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onTagsChange(selectedTags.filter(id => id !== tagId));
    } else {
      onTagsChange([...selectedTags, tagId]);
    }
  };

  const clearFilters = () => {
    onTagsChange([]);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 mb-4">
        {tags.map((tag) => (
          <motion.button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTags.includes(tag.id)
                ? 'text-white shadow-md'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
            style={{
              backgroundColor: selectedTags.includes(tag.id) ? tag.color : undefined,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag.name}
          </motion.button>
        ))}
      </div>
      
      {selectedTags.length > 0 && (
        <motion.button
          onClick={clearFilters}
          className="text-sm text-accent hover:text-accent-dark transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Clear all filters ({selectedTags.length})
        </motion.button>
      )}
    </div>
  );
};

export default TagFilter;
