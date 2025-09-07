import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Create Contentful client with fallback values
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '5uil89dl07lv',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'Mz4JCSV89TOkkHNAGDyjKkTRNd1TDu1RFistn_PIWfA',
});

// Define blog post type
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  slug: string;
}

// Helper function to process image URLs
const processImageUrl = (imageField: any): string => {
  if (!imageField) return '/api/placeholder/600/400';
  
  // Handle different image field structures
  let imageUrl = '';
  
  if (imageField.fields?.file?.url) {
    imageUrl = imageField.fields.file.url;
  } else if (typeof imageField === 'string') {
    imageUrl = imageField;
  }
  
  // Add https: if missing
  if (imageUrl && imageUrl.startsWith('//')) {
    imageUrl = 'https:' + imageUrl;
  } else if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = 'https://' + imageUrl;
  }
  
  return imageUrl || '/api/placeholder/600/400';
};

// Helper function to process rich text content
const processContent = (contentField: any): string => {
  if (!contentField) return 'No content available';
  
  // If it's already a string, return it
  if (typeof contentField === 'string') return contentField;
  
  // If it's rich text, convert to HTML
  try {
    return documentToHtmlString(contentField);
  } catch (error) {
    console.warn('Error processing rich text content:', error);
    return contentField.toString() || 'Content processing error';
  }
};

// Fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('🔄 Fetching blog posts from Contentful...');
    
    // Try different content type possibilities
    let response;
    const contentTypeOptions = ['blogPost', 'blog post', 'blog-post'];
    
    for (const contentType of contentTypeOptions) {
      try {
        response = await client.getEntries({
          content_type: contentType,
          order: ['-sys.createdAt'],
        });
        
        if (response.items.length > 0) {
          console.log(`✅ Found ${response.items.length} posts with content type: ${contentType}`);
          break;
        }
      } catch (error) {
        console.log(`❌ Content type '${contentType}' not found, trying next...`);
        continue;
      }
    }

    if (!response || response.items.length === 0) {
      console.log('⚠️ No blog posts found with any content type');
      return [];
    }

    return response.items.map((item: any) => {
      console.log('📄 Processing item fields:', Object.keys(item.fields));
      
      return {
        id: item.sys.id,
        title: item.fields.title || 'Untitled Post',
        excerpt: item.fields.excerpt || item.fields.description || 'No excerpt available',
        content: processContent(item.fields.content || item.fields.body),
        author: item.fields.author || 'Lucy James Abaji',
        date: item.fields.publishDate || item.fields.date || item.sys.createdAt,
        readTime: item.fields.readTime || '5 min read',
        category: item.fields.category || 'Leadership',
        tags: Array.isArray(item.fields.tags) ? item.fields.tags : 
              typeof item.fields.tags === 'string' ? [item.fields.tags] : [],
        image: processImageUrl(item.fields.image || item.fields.featuredImage || item.fields.heroImage),
        featured: item.fields.featured || false,
        slug: item.fields.slug || item.sys.id,
      };
    });
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    throw error;
  }
};

// Update the fetchBlogPost function
export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const contentTypeOptions = ['blogPost', 'blog post', 'blog-post'];
    
    for (const contentType of contentTypeOptions) {
      try {
        const response = await client.getEntries({
          content_type: contentType,
          'fields.slug': slug,
          limit: 1,
        });

        if (response.items.length > 0) {
          const item = response.items[0] as any;
          return {
            id: item.sys.id,
            title: item.fields.title,
            excerpt: item.fields.excerpt || item.fields.description,
            content: processContent(item.fields.content || item.fields.body),
            author: item.fields.author || 'Lucy James Abaji',
            date: item.fields.publishDate || item.fields.date || item.sys.createdAt,
            readTime: item.fields.readTime || '5 min read',
            category: item.fields.category,
            tags: Array.isArray(item.fields.tags) ? item.fields.tags : 
                  typeof item.fields.tags === 'string' ? [item.fields.tags] : [],
            image: processImageUrl(item.fields.image || item.fields.featuredImage || item.fields.heroImage),
            featured: item.fields.featured || false,
            slug: item.fields.slug,
          };
        }
      } catch (error) {
        continue;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

// Update fetchPostsByCategory function
export const fetchPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const contentTypeOptions = ['blogPost', 'blog post', 'blog-post'];
    
    for (const contentType of contentTypeOptions) {
      try {
        const response = await client.getEntries({
          content_type: contentType,
          'fields.category': category,
          order: ['-sys.createdAt'],
        });

        if (response.items.length > 0) {
          return response.items.map((item: any) => ({
            id: item.sys.id,
            title: item.fields.title,
            excerpt: item.fields.excerpt || item.fields.description,
            content: processContent(item.fields.content || item.fields.body),
            author: item.fields.author || 'Lucy James Abaji',
            date: item.fields.publishDate || item.fields.date || item.sys.createdAt,
            readTime: item.fields.readTime || '5 min read',
            category: item.fields.category,
            tags: Array.isArray(item.fields.tags) ? item.fields.tags : 
                  typeof item.fields.tags === 'string' ? [item.fields.tags] : [],
            image: processImageUrl(item.fields.image || item.fields.featuredImage || item.fields.heroImage),
            featured: item.fields.featured || false,
            slug: item.fields.slug,
          }));
        }
      } catch (error) {
        continue;
      }
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    throw error;
  }
};