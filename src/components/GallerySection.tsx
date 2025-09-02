import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox } from "./ui/lightbox";
import { Eye, Filter, Grid, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hero-image.jpg",
    alt: "Lucy James Abaji - Professional Portrait",
    category: "Professional",
    featured: true
  },
  {
    src: "/images/gallery1.jpg",
    alt: "Leadership meeting at PPDC",
    category: "Professional",
    featured: false
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Conference presentation and public speaking",
    category: "Speaking",
    featured: true
  },
  {
    src: "/images/ppdc-building.jpg",
    alt: "PPDC corporate headquarters",
    category: "Workplace",
    featured: false
  },
  {
    src: "/images/lifestyle1.jpg",
    alt: "Personal development and continuous learning",
    category: "Lifestyle",
    featured: false
  },
  {
    src: "/images/lifestyle2.jpg",
    alt: "Professional networking and community engagement",
    category: "Community",
    featured: true
  }
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const imagePaths = filteredImages.map(img => img.src);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === imagePaths.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? imagePaths.length - 1 : prev - 1
    );
  };

  // Reset to first image when filter changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 30, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="p-3 bg-accent-gold/10 backdrop-blur-sm rounded-2xl border border-accent-gold/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageIcon className="w-8 h-8 text-accent-gold" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-accent-gold to-white bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Visual <span className="text-accent-gold">Journey</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            An immersive gallery showcasing Lucy's professional milestones, leadership moments, 
            and community engagements that define her journey of impact and excellence.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Filter className="w-4 h-4 text-accent-gold" />
            <span className="text-white/70 text-sm font-medium">Filter by:</span>
          </motion.div>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                filter === category
                  ? "bg-accent-gold text-black shadow-lg shadow-accent-gold/25"
                  : "bg-white/5 backdrop-blur-sm text-white/80 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter === category && (
                <motion.div
                  className="absolute inset-0 bg-accent-gold"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {filteredImages.map((image, index) => {
              const isHovered = hoveredIndex === index;
              const isFeatured = image.featured;
              
              return (
                <motion.div
                  key={`${image.src}-${filter}`}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: isHovered ? 1.15 : 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: isHovered ? 0.6 : 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Category Badge */}
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <span className="bg-accent-gold/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {image.category}
                        </span>
                      </motion.div>
                      
                      {/* Featured Badge */}
                      {isFeatured && (
                        <motion.div 
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                        >
                          <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                            Featured
                          </div>
                        </motion.div>
                      )}
                      
                      {/* View Button */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          scale: isHovered ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="h-6 w-6 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Image Info */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 20
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.alt}
                        </h3>
                        <p className="text-white/70 text-sm">
                          Click to view full size
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Gallery Stats */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2 bg-accent-gold/10 rounded-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Grid className="w-5 h-5 text-accent-gold" />
              </motion.div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{filteredImages.length}</p>
                <p className="text-white/60 text-sm">Images {filter !== 'All' ? `in ${filter}` : 'Total'}</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2 bg-blue-500/10 rounded-xl"
                whileHover={{ scale: 1.1 }}
              >
                <ImageIcon className="w-5 h-5 text-blue-400" />
              </motion.div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{categories.length - 1}</p>
                <p className="text-white/60 text-sm">Categories</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          images={imagePaths}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      </div>
    </section>
  );
}