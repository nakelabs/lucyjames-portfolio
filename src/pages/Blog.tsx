import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Tag, Clock, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBlogPosts, BlogPost } from "@/services/contentful";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Leadership", "Strategy", "Innovation", "Team Building", "Technology", "Sustainability"];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from CMS
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
        setError(null);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Loader className="w-8 h-8 animate-spin text-amber-600 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading amazing content...</p>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-amber-600 hover:bg-amber-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.25, 0, 1]
            }}
            className="text-center mb-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-4 tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1]
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Insights
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="ml-4"
              >
                & Thoughts
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.9
              }}
            >
              Sharing perspectives on leadership, innovation, and strategic thinking from my journey at PPDC and beyond. Explore ideas that shape the future of business and society.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1.3 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-amber-100 hover:text-amber-700 border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchTerm && (
        <motion.section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center">
              Featured Articles
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  onClick={() => handlePostClick(post.slug)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 2.2 + index * 0.2,
                    ease: [0.25, 0.25, 0, 1]
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/api/placeholder/600/400';
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.div 
                      className="flex items-center gap-4 mb-3 text-sm text-gray-500"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.7 + index * 0.2, duration: 0.5 }}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-playfair font-semibold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8 + index * 0.2, duration: 0.6 }}
                    >
                      {post.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.9 + index * 0.2, duration: 0.6 }}
                    >
                      {post.excerpt}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3 + index * 0.2, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <motion.button 
                        title="Read more" 
                        className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Newsletter Section */}
      {selectedCategory === "All" && !searchTerm && (
        <motion.section 
          className="px-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Newsletter variant="inline" />
        </motion.section>
      )}

      {/* Latest Articles Section */}
      <motion.section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            Latest Articles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.9 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                onClick={() => handlePostClick(post.slug)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 3.1 + index * 0.15,
                  ease: [0.25, 0.25, 0, 1]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/600/400';
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.4 + index * 0.15, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-3 text-xs text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.5 + index * 0.15, duration: 0.5 }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg font-playfair font-semibold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.6 + index * 0.15, duration: 0.6 }}
                  >
                    {post.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.7 + index * 0.15, duration: 0.6 }}
                  >
                    {post.excerpt}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8 + index * 0.15, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <motion.button 
                      title="Read more about this article" 
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Load More Articles
              </Button>
            </motion.div>
          </motion.div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <motion.div 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Search className="w-16 h-16 mx-auto" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-playfair font-semibold text-gray-700 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                No articles found
              </motion.h3>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Try adjusting your search terms or filters
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Blog;
