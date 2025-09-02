import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Building, Users, Target, TrendingUp, Lightbulb, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";

const responsibilities = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Leading long-term strategic initiatives and organizational transformation programs."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Managing cross-functional teams and fostering a culture of innovation and excellence."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Driving operational efficiency and implementing data-driven improvement strategies."
  },
  {
    icon: Lightbulb,
    title: "Innovation Management",
    description: "Spearheading innovation initiatives and technology adoption across the organization."
  },
  {
    icon: Globe,
    title: "Stakeholder Relations",
    description: "Building and maintaining strategic partnerships with key industry stakeholders."
  },
  {
    icon: Building,
    title: "Organizational Development",
    description: "Designing and implementing organizational structures that support sustainable growth."
  }
];

export function PPDCSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 }
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      id="ppdc" 
      className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-6">
            <span className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary text-sm font-semibold">
              🏢 Professional Excellence
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            variants={itemVariants}
          >
            Leadership at{" "}
            <span className="bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent">
              PPDC
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Driving transformational change and strategic excellence through visionary leadership and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Modern Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visual Element */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modern placeholder or image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent-gold/10 to-primary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="text-center z-10">
                  <Building className="h-16 w-16 text-accent-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">PPDC Headquarters</h3>
                  <p className="text-muted-foreground mt-2">Excellence in Leadership</p>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-3 -right-3 w-6 h-6 bg-accent-gold rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Impact Card */}
            <motion.div 
              className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Current Role & Impact
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Spearheading critical initiatives that drive organizational excellence and sustainable growth. 
                Strategic vision and innovative approach positioning PPDC as an industry leader.
              </p>
              
              {/* Modern Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="text-center p-4 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 backdrop-blur-sm rounded-xl border border-accent-gold/20"
                  variants={statsVariants}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    40+
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Led</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/20"
                  variants={statsVariants}
                  transition={{ delay: 1, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    200+
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">Team Members</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Modern Responsibilities Grid */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-2 bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/20 rounded-full text-accent-gold text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              💼 Core Responsibilities
            </motion.span>
            <motion.h3 
              className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Key Areas of Excellence
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group cursor-pointer"
                >
                  <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Icon */}
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-accent-gold/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-7 w-7 text-accent-gold" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <motion.div 
                      className="w-8 h-0.5 bg-gradient-to-r from-accent-gold to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Modern Quote Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-r from-accent-gold/5 via-transparent to-accent-gold/5 border border-accent-gold/20 rounded-3xl p-8 md:p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-6xl text-accent-gold/20 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              "
            </motion.div>
            
            <motion.blockquote 
              className="text-2xl md:text-3xl font-light italic text-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              Excellence is not a destination, but a journey of continuous improvement 
              and unwavering commitment to delivering value.
            </motion.blockquote>
            
            <motion.footer 
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent-gold" />
              <span className="text-lg bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent font-semibold">
                Lucy James Abaji
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent-gold" />
            </motion.footer>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}