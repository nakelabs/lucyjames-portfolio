import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2020-Present",
    title: "Strategic Leadership at PPDC",
    description: "Leading transformational initiatives and driving organizational excellence across multiple divisions.",
    icon: Target,
    achievement: "40% increase in operational efficiency"
  },
  {
    year: "2018-2020",
    title: "Innovation & Development",
    description: "Spearheaded groundbreaking projects that revolutionized industry standards and practices.",
    icon: TrendingUp,
    achievement: "Led 3 award-winning projects"
  },
  {
    year: "2015-2018",
    title: "Team Excellence",
    description: "Built and mentored high-performing teams, fostering a culture of collaboration and innovation.",
    icon: Users,
    achievement: "Mentored 50+ professionals"
  },
  {
    year: "2012-2015",
    title: "Recognition & Awards",
    description: "Received multiple industry recognitions for outstanding contributions and leadership excellence.",
    icon: Award,
    achievement: "12 industry awards"
  }
];

export function BiographySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 }
  };

  const milestoneVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  // Story paragraphs for word-by-word animation
  const storyParagraphs = [
    "Lucy James Abaji stands as a beacon of visionary leadership in today's dynamic business landscape. Her remarkable journey spans multiple industries, where she has consistently demonstrated an exceptional ability to transform challenges into opportunities for growth and innovation.",
    "With a keen strategic mindset and an unwavering commitment to excellence, Lucy has built a reputation for delivering results that exceed expectations. Her leadership philosophy centers on empowering teams, fostering innovation, and creating sustainable value for all stakeholders.",
    "Throughout her career, she has been recognized not only for her professional achievements but also for her dedication to mentoring the next generation of leaders and her commitment to driving positive change in her community."
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      id="biography" 
      className="py-20 bg-gradient-to-br from-background via-secondary/10 to-accent-gold/5 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-accent-gold/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
        >
          <motion.div className="inline-block">
            <motion.span 
              className="inline-block px-4 py-2 bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/20 rounded-full text-accent-gold text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ✨ Professional Journey
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-accent-gold to-foreground bg-clip-text text-transparent"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
          >
            <motion.span
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ staggerChildren: 0.08 }}
            >
              {"A Journey of".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span 
              className="inline-block bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent"
              variants={wordVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              Excellence
            </motion.span>
          </motion.h2>
          
          <motion.div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ staggerChildren: 0.03, delayChildren: 1.5 }}
            >
              {"Transforming visions into reality through strategic leadership and innovative excellence.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Modern Biography Content - Glass Card */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24"
          variants={cardVariants}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div 
            className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 via-transparent to-accent-gold/20 rounded-3xl blur-sm -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Portrait */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 3.5, duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/hero-image.jpg" 
                      alt="Lucy James Abaji - Professional Portrait"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-accent-gold rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Story Content */}
              <div className="space-y-8">
                {storyParagraphs.map((paragraph, paragraphIndex) => (
                  <motion.div
                    key={paragraphIndex}
                    className="space-y-4"
                  >
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 4 + (paragraphIndex * 0.3), duration: 0.6 }}
                    >
                      <div className="w-2 h-2 bg-accent-gold rounded-full" />
                      <div className="h-px bg-gradient-to-r from-accent-gold/50 to-transparent flex-1" />
                    </motion.div>
                    
                    <motion.p
                      className="text-base sm:text-lg leading-relaxed text-foreground/90"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ 
                        staggerChildren: 0.02, 
                        delayChildren: 4.2 + (paragraphIndex * 2) 
                      }}
                    >
                      {paragraph.split(" ").map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          variants={wordVariants}
                          className="inline-block mr-1"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                  </motion.div>
                ))}
                
                {/* Modern Conclusion */}
                <motion.div
                  className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-accent-gold/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 10, duration: 0.8 }}
                >
                  <motion.p 
                    className="text-lg sm:text-xl font-medium bg-gradient-to-r from-accent-gold to-yellow-600 bg-clip-text text-transparent"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.05, delayChildren: 10.5 }}
                  >
                    {"✨ Today, Lucy continues to write her story of excellence, one transformational achievement at a time.".split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        variants={wordVariants}
                        className="inline-block mr-1"
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Modern Timeline/Milestones */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2, delayChildren: 12 }}
        >
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6"
              variants={headerVariants}
            >
              🏆 Career Highlights
            </motion.span>
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              variants={headerVariants}
              transition={{ duration: 0.6 }}
            >
              Key <span className="bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent">Milestones</span>
            </motion.h3>
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-primary to-accent-gold transform md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 12.5, duration: 2, ease: "easeOut" }}
            />
            
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  className={`relative flex items-center mb-12 sm:mb-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={milestoneVariants}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent-gold rounded-full border-2 sm:border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 13 + (index * 0.3), duration: 0.4, type: "spring" }}
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  {/* Content Card */}
                  <motion.div 
                    className={`w-full md:w-5/12 ml-12 sm:ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Card Header */}
                      <motion.div 
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-accent-gold/20"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-accent-gold" />
                        </motion.div>
                        <motion.div 
                          className="text-base sm:text-lg font-bold bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 13.5 + (index * 0.3), duration: 0.6 }}
                        >
                          {milestone.year}
                        </motion.div>
                      </motion.div>
                      
                      {/* Card Content */}
                      <motion.h4 
                        className="text-lg sm:text-xl font-bold mb-3 text-foreground"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ 
                          staggerChildren: 0.05, 
                          delayChildren: 14 + (index * 0.3) 
                        }}
                      >
                        {milestone.title.split(" ").map((word, wordIndex) => (
                          <motion.span
                            key={wordIndex}
                            variants={wordVariants}
                            className="inline-block mr-1"
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ 
                          staggerChildren: 0.02, 
                          delayChildren: 14.5 + (index * 0.3) 
                        }}
                      >
                        {milestone.description.split(" ").map((word, wordIndex) => (
                          <motion.span
                            key={wordIndex}
                            variants={wordVariants}
                            className="inline-block mr-1"
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.p>
                      
                      <motion.div 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 text-accent-gold px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border border-accent-gold/20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: 15.5 + (index * 0.3), duration: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                        {milestone.achievement}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}