import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchBlogPost, BlogPost } from "@/services/contentful";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const fetchedPost = await fetchBlogPost(slug);
        
        if (!fetchedPost) {
          setError('Blog post not found');
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              {error || 'Article Not Found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button 
              onClick={() => navigate('/blog')} 
              className="bg-amber-600 hover:bg-amber-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              onClick={() => navigate('/blog')}
              variant="ghost"
              className="mb-8 text-gray-600 hover:text-amber-600 -ml-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 mb-8 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-4xl"
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-8 text-gray-500 mb-8"
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" />
                <span className="text-lg">{post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span className="text-lg">{post.readTime}</span>
              </div>
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Image - Beautiful Display */}
      {post.image && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/1200/675';
                    }}
                  />
                </div>
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Image Caption (if you want to add one later) */}
              {/* <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 italic">Image caption can go here</p>
              </div> */}
            </div>
          </div>
        </motion.section>
      )}

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pb-16"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="prose prose-xl max-w-none
              prose-headings:font-playfair prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
              prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-em:text-gray-600 prose-em:italic
              prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 
              prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:my-8
              prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-700
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-6
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-lg prose-li:leading-relaxed prose-li:mb-2
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto
              prose-hr:border-gray-200 prose-hr:my-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Newsletter variant="inline" className="mb-12" />
        </div>
      </section>

      {/* Article Footer */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
              Share this article
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="flex items-center gap-3 px-6 py-3 text-lg"
              >
                <Share2 className="w-5 h-5" />
                Copy Link
              </Button>
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h4>
                <p className="text-gray-600">
                  Strategic leader and innovator with expertise in organizational transformation 
                  and sustainable business practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate('/blog')}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 px-8 py-3 text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Back to All Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;