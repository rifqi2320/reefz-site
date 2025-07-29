import { Tag } from '../types';

// Good color palette with proper contrast
const TAG_COLORS = [
  '#6366f1', // indigo
  '#06b6d4', // cyan
  '#10b981', // emerald
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#ef4444', // red
  '#84cc16', // lime
  '#ec4899', // pink
  '#14b8a6', // teal
  '#f97316', // orange
  '#7c3aed', // purple
  '#059669', // green
  '#dc2626', // red-600
  '#2563eb', // blue
  '#7c2d12', // orange-900
  '#be123c', // rose
  '#6b21a8', // purple-800
  '#0f766e', // teal-700
  '#92400e', // amber-800
  '#1e40af', // blue-700
  '#7e22ce', // purple-700
  '#b91c1c', // red-700
  '#16a34a', // green-600
  '#ca8a04', // yellow-600
  '#9333ea', // violet-600
  '#c2410c', // orange-600
];

// Simple hash function to consistently assign colors to tag names
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function createTagsFromStrings(tagStrings: string[]): Tag[] {
  const tags: Tag[] = tagStrings.map((tagName) => {
    const colorIndex = hashString(tagName) % TAG_COLORS.length;
    const color = TAG_COLORS[colorIndex];
    
    // Generate display name from tag name
    const displayName = tagName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      id: tagName,
      name: displayName,
      color: color
    };
  });
  
  // Sort tags alphabetically by name
  return tags.sort((a, b) => a.name.localeCompare(b.name));
}

export function generateTagsFromData(data: any): {
  experiences: Tag[];
  projects: Tag[];
  publications: Tag[];
} {
  const experienceTags = new Set<string>();
  const projectTags = new Set<string>();
  const publicationTags = new Set<string>();
  
  // Collect tags from experiences
  if (data.experiences) {
    data.experiences.forEach((exp: any) => {
      if (exp.tags) {
        exp.tags.forEach((tag: string) => experienceTags.add(tag));
      }
    });
  }
  
  // Collect tags from projects
  if (data.projects) {
    data.projects.forEach((proj: any) => {
      if (proj.tags) {
        proj.tags.forEach((tag: string) => projectTags.add(tag));
      }
    });
  }
  
  // Collect tags from publications
  if (data.publications) {
    data.publications.forEach((pub: any) => {
      if (pub.tags) {
        pub.tags.forEach((tag: string) => publicationTags.add(tag));
      }
    });
  }
  
  return {
    experiences: createTagsFromStrings(Array.from(experienceTags)),
    projects: createTagsFromStrings(Array.from(projectTags)),
    publications: createTagsFromStrings(Array.from(publicationTags))
  };
}
