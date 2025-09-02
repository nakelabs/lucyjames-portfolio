import { Button } from "./ui/button";
import { ArrowDown, Linkedin, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      // Use the hero.png from public/images folder
      backgroundRef.current.style.backgroundImage = `url(/images/hero.png)`;
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#biography");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1 },
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.98, y: 0 }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5 }
  };

  // Text content for letter-by-letter animation
  const nameText = "Lucy James";
  const highlightText = "Abaji";
  const taglineText = "Visionary Leader • Strategic Innovator • Excellence Driver";
  const descriptionText = "Transforming organizations through strategic leadership and innovative solutions. Dedicated to driving excellence and creating lasting impact in every endeavor.";

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div 
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side - Hero Image */}
            <motion.div 
              className="flex justify-center lg:justify-start order-1 lg:order-1"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.img
                  src="/images/hero.png"
                  alt="Lucy James Abaji - Professional Portrait"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-[var(--shadow-elegant)] border-4 border-accent-gold"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-accent-gold"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              className="text-center lg:text-left order-2 lg:order-2"
              variants={itemVariants}
            >
              {/* Main heading */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
                variants={itemVariants}
              >
                <motion.span
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08, delayChildren: 0.5 }}
                  className="inline-block"
                >
                  {nameText.split("").map((letter, index) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      variants={wordVariants}
                      className={`inline-block ${letter === " " ? "w-4" : ""}`}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        color: "#D4AF37",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span 
                  className="text-accent-gold inline-block ml-4 italic font-serif"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08, delayChildren: 1.8 }}
                >
                  {highlightText.split("").map((letter, index) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      variants={wordVariants}
                      className="inline-block"
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.h1>

              {/* Professional tagline */}
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl mb-6 text-white/90"
                variants={itemVariants}
              >
                <motion.span
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.05, delayChildren: 1.8 }}
                >
                  {taglineText.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className="inline-block mr-2"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.p>

              {/* Description */}
              <motion.div 
                className="max-w-2xl lg:max-w-none mb-8"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-base md:text-lg text-white/80 leading-relaxed"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.02, delayChildren: 3 }}
                >
                  {descriptionText.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className="inline-block mr-1"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 4.5 }}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration: 0.2 
                  }}
                  className="relative overflow-hidden"
                >
                  <Button 
                    size="lg" 
                    className="btn-hero px-8 py-4 text-base font-semibold relative z-10 shadow-lg hover:shadow-xl transform transition-all duration-300 bg-gradient-to-r from-accent-gold to-yellow-500 hover:from-yellow-500 hover:to-accent-gold text-black border-2 border-accent-gold/20"
                    onClick={() => document.querySelector("#biography")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Discover My Journey
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration: 0.2,
                    delay: 0.1 
                  }}
                  className="relative overflow-hidden"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-white border-2 border-white/60 hover:bg-white hover:text-primary px-8 py-4 text-base font-semibold backdrop-blur-sm bg-white/10 hover:border-white shadow-lg hover:shadow-xl transform transition-all duration-300"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get in Touch
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 5.2, staggerChildren: 0.1 }}
              >
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-gold transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                  variants={socialIconVariants}
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-7 w-7" />
                </motion.a>
                <motion.a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-gold transition-colors duration-300"
                  aria-label="Threads Profile"
                  variants={socialIconVariants}
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MessageCircle className="h-7 w-7" />
                </motion.a>
                <motion.a
                  href="mailto:iyanglucy2014@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-gold transition-colors duration-300"
                  aria-label="Email Contact"
                  variants={socialIconVariants}
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-7 w-7" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-accent-gold transition-colors duration-300"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 5.8, duration: 0.8 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}