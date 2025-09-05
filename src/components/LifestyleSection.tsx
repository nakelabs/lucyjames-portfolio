import { useEffect, useRef } from "react";
import { BookOpen, Users, Heart, Globe, Coffee, Star, Dumbbell } from "lucide-react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Passionate about personal growth and staying ahead of industry trends through constant learning.",
    gradient: "from-blue-500/20 to-blue-600/10"
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Actively involved in community initiatives and mentoring programs that make a positive impact.",
    gradient: "from-green-500/20 to-green-600/10"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Believes in maintaining harmony between professional excellence and personal well-being.",
    gradient: "from-pink-500/20 to-pink-600/10"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Embraces diverse cultures and perspectives to drive innovation and inclusive leadership.",
    gradient: "from-purple-500/20 to-purple-600/10"
  },
  {
    icon: Coffee,
    title: "Relationship Building",
    description: "Values meaningful connections and believes in the power of collaboration and networking.",
    gradient: "from-amber-500/20 to-amber-600/10"
  },
  {
    icon: Star,
    title: "Excellence Mindset",
    description: "Committed to pursuing excellence in every aspect of life, both personal and professional.",
    gradient: "from-accent-gold/20 to-accent-gold/10"
  },
  {
    icon: Dumbbell,
    title: "Exercise & Fitness",
    description: "Maintains physical wellness through regular exercise, understanding that a healthy body supports a sharp mind and sustained energy.",
    gradient: "from-red-500/20 to-red-600/10"
  }
];

const interests = [
  "Strategic Leadership Development",
  "Innovation & Technology Trends",
  "Sustainable Business Practices",
  "Cultural Diversity & Inclusion",
  "Executive Coaching & Mentoring",
  "Global Business Strategy",
  "Health and Exercise"
];

export function LifestyleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="lifestyle" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-black mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              letterSpacing: '-0.02em'
            }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Values
            </span>
            <span className="text-white/20 mx-4 text-5xl md:text-6xl">&</span>
            <span className="bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold bg-clip-text text-transparent drop-shadow-lg italic relative">
              Lifestyle
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Beyond professional achievements, Lucy embodies values that drive meaningful 
            impact and foster authentic relationships in both personal and professional spheres.
          </motion.p>
        </motion.div>

        {/* Values Grid - Clean & Stylish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group text-center cursor-pointer"
              >
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-accent-gold/30 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-white group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-white group-hover:text-accent-gold transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {value.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {value.description}
                </motion.p>

                {/* Subtle underline effect */}
                <motion.div 
                  className="w-0 h-0.5 bg-gradient-to-r from-accent-gold to-white mx-auto mt-4 group-hover:w-12 transition-all duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 0 }}
                />
              </motion.div>
            );
          })}
        </div>
        </div>

        {/* Lifestyle Images and Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <motion.div 
              className="space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/frame27.png"
                alt="Lucy's dedication to continuous learning and personal development"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="space-y-6 mt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/frame28.png"
                alt="Professional networking and community engagement"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Personal Philosophy
              </motion.h3>
              <motion.p 
                className="text-white/80 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Lucy believes that true leadership extends beyond professional boundaries. 
                Her approach to life is rooted in authenticity, continuous growth, and 
                making a positive impact on the lives of others.
              </motion.p>
              <motion.p 
                className="text-white/70 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                She advocates for sustainable success that encompasses personal fulfillment, 
                meaningful relationships, and contributing to the greater good of society.
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Areas of Interest
              </motion.h3>
              
              {/* Floating Interest Points */}
              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-6 group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.15 + 0.3,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      x: 10,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {/* Floating Dot with Glow */}
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-accent-gold/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                      <div className="relative w-4 h-4 bg-gradient-to-r from-accent-gold to-yellow-400 rounded-full shadow-lg group-hover:shadow-accent-gold/50 transition-all duration-300" />
                    </motion.div>
                    
                    {/* Interest Text */}
                    <motion.span 
                      className="text-white/80 font-medium text-lg group-hover:text-white group-hover:text-accent-gold transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {interest}
                    </motion.span>
                    
                    {/* Subtle connecting line */}
                    <motion.div 
                      className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 backdrop-blur-sm border border-accent-gold/30 rounded-3xl p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl"
              animate={{ 
                x: [0, 20, 0],
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"
              animate={{ 
                x: [0, -15, 0],
                y: [0, 10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <div className="relative z-10">
              <motion.blockquote 
                className="text-2xl md:text-3xl font-light italic text-white mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                "Inspiration does exist but it must find you working. Keep putting in the work!"
              </motion.blockquote>
              <motion.footer 
                className="text-lg text-accent-gold font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                — Lucy James Abaji
              </motion.footer>
            </div>
          </motion.div>
        </motion.div>
    </section>
  );
}