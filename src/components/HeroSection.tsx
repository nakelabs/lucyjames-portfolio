import { Button } from "./ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewsletterModal } from "./NewsletterModal";

export function HeroSection() {
  const words = ["Hi", "I", "am", "Lucy", "James", "Abagi"];
  const subtitleText = " A Leader, Builder, Developer, Innovator, and Relentless Creator.";

  // Animation state
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 2.5,
        type: "spring" as const,
        stiffness: 80,
        damping: 10
      }
    }
  };

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex(prev => prev + 1);
      }, 400); // Slightly increased delay for better Framer Motion sync
      
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-[#f9f5f2] px-4 relative overflow-hidden"
    >
      {/* Global floating bubbles across entire hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side bubbles */}
        <motion.div 
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400/60 rounded-full"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-60 left-10 w-3 h-3 bg-pink-400/50 rounded-full"
          animate={{ 
            y: [0, 15, 0], 
            x: [0, -8, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-96 left-32 w-2 h-2 bg-yellow-400/60 rounded-full"
          animate={{ 
            y: [0, -25, 0], 
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-44 left-5 w-2.5 h-2.5 bg-emerald-400/45 rounded-full"
          animate={{ 
            y: [0, -18, 0], 
            x: [0, 12, 0],
            opacity: [0.45, 0.75, 0.45]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.div 
          className="absolute top-12 left-8 w-1.5 h-1.5 bg-violet-400/50 rounded-full"
          animate={{ 
            y: [0, 12, 0], 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
        />
        <motion.div 
          className="absolute top-80 left-6 w-3.5 h-3.5 bg-amber-400/40 rounded-full"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
        />
        
        {/* Center bubbles */}
        <motion.div 
          className="absolute top-32 left-1/2 w-3.5 h-3.5 bg-green-400/40 rounded-full"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-80 left-1/2 w-2.5 h-2.5 bg-purple-400/55 rounded-full"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div 
          className="absolute top-4 left-1/2 w-2 h-2 bg-red-400/45 rounded-full"
          animate={{ 
            y: [0, 22, 0], 
            x: [0, -25, 0],
            opacity: [0.45, 0.8, 0.45]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
        />
        <motion.div 
          className="absolute top-56 left-1/2 w-4 h-4 bg-sky-400/35 rounded-full"
          animate={{ 
            y: [0, -35, 0], 
            scale: [1, 1.6, 1],
            rotate: [0, -120, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/2 w-2.5 h-2.5 bg-lime-400/50 rounded-full"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 18, 0]
          }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 4.1 }}
        />
        
        {/* Right side bubbles */}
        <motion.div 
          className="absolute top-16 right-24 w-5 h-5 bg-indigo-400/45 rounded-full"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, -12, 0],
            opacity: [0.45, 0.7, 0.45]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-52 right-16 w-2.5 h-2.5 bg-teal-400/50 rounded-full"
          animate={{ 
            y: [0, 18, 0], 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div 
          className="absolute top-88 right-8 w-3 h-3 bg-orange-400/60 rounded-full"
          animate={{ 
            y: [0, -22, 0], 
            x: [0, 8, 0]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.div 
          className="absolute top-8 right-12 w-1.5 h-1.5 bg-fuchsia-400/55 rounded-full"
          animate={{ 
            y: [0, 14, 0], 
            x: [0, -10, 0],
            opacity: [0.55, 0.85, 0.55]
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.9 }}
        />
        <motion.div 
          className="absolute top-36 right-4 w-3.5 h-3.5 bg-rose-400/40 rounded-full"
          animate={{ 
            y: [0, -28, 0], 
            scale: [1, 1.4, 1],
            rotate: [0, 270, 360]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.div 
          className="absolute top-72 right-20 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{ 
            y: [0, 16, 0], 
            x: [0, -14, 0]
          }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        <motion.div 
          className="absolute bottom-16 right-8 w-4 h-4 bg-emerald-400/35 rounded-full"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 16, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        />
        
        {/* Top edge bubbles */}
        <motion.div 
          className="absolute top-2 left-1/4 w-2.5 h-2.5 bg-blue-500/45 rounded-full"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -8, 0],
            opacity: [0.45, 0.7, 0.45]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.div 
          className="absolute top-6 left-3/4 w-1.5 h-1.5 bg-purple-500/50 rounded-full"
          animate={{ 
            y: [0, 18, 0], 
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.7 }}
        />
        
        {/* Bottom edge bubbles */}
        <motion.div 
          className="absolute bottom-8 left-1/4 w-3 h-3 bg-yellow-500/40 rounded-full"
          animate={{ 
            y: [0, -25, 0], 
            x: [0, 12, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        />
        <motion.div 
          className="absolute bottom-12 left-3/4 w-2 h-2 bg-pink-500/55 rounded-full"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, -10, 0]
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3.8 }}
        />
        
        {/* Additional scattered bubbles */}
        <motion.div 
          className="absolute top-40 left-96 w-1.5 h-1.5 bg-cyan-400/55 rounded-full"
          animate={{ 
            y: [0, -10, 0], 
            opacity: [0.55, 0.8, 0.55]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
        <motion.div 
          className="absolute top-72 right-32 w-4 h-4 bg-rose-400/40 rounded-full"
          animate={{ 
            y: [0, 25, 0], 
            x: [0, -20, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute top-24 left-2/3 w-2.5 h-2.5 bg-indigo-500/45 rounded-full"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
        <motion.div 
          className="absolute top-64 left-1/3 w-1.5 h-1.5 bg-green-500/60 rounded-full"
          animate={{ 
            y: [0, 12, 0], 
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.9 }}
        />
        <motion.div 
          className="absolute bottom-24 left-1/5 w-3 h-3 bg-orange-500/50 rounded-full"
          animate={{ 
            y: [0, -18, 0], 
            x: [0, 8, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.div 
          className="absolute bottom-32 right-1/3 w-2 h-2 bg-violet-500/45 rounded-full"
          animate={{ 
            y: [0, -22, 0], 
            x: [0, -12, 0]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3.3 }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between pt-16 pb-8 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center relative">
          {/* Local floating bubbles around text */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-16 left-72 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse pulseBubble"></div>
            <div className="absolute top-8 left-12 w-2 h-2 bg-pink-300 rounded-full opacity-50 animate-bounce custom-bounce"></div>
            <div className="absolute top-36 left-56 w-2.5 h-2.5 bg-yellow-300 rounded-full opacity-45 animate-ping custom-bubble"></div>
            <div className="absolute top-2 left-48 w-1.5 h-1.5 bg-green-300 rounded-full opacity-35 animate-pulse custom-animation"></div>
            <div className="absolute top-24 left-8 w-3.5 h-3.5 bg-purple-300 rounded-full opacity-30 animate-bounce custom-purple-bubble"></div>
            <div className="absolute top-4 left-28 w-2 h-2 bg-indigo-300 rounded-full opacity-45 animate-pulse custom-pulse"></div>
            <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-40 animate-ping tealBubble"></div>
            <div className="absolute top-12 left-64 w-2.5 h-2.5 bg-orange-300 rounded-full opacity-35 animate-bounce bounceOrangeBubble"></div>
            <div className="absolute top-32 left-40 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-pulse custom-animation"></div>
            <div className="absolute top-6 left-80 w-2 h-2 bg-rose-300 rounded-full opacity-40 animate-ping custom-ping"></div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 mb-6 leading-tight relative z-10 max-w-lg tracking-wide"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-wrap gap-x-3 gap-y-2">
              <AnimatePresence>
                {displayedWords.map((word, index) => (
                  <motion.span 
                    key={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.1, 
                      color: "#3B82F6",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </AnimatePresence>
              {currentWordIndex < words.length && (
                <motion.span 
                  className="inline-block w-0.5 h-12 bg-gray-900"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          </motion.h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
            {/* Geometric moving circles around image */}
            <motion.div 
              className="absolute w-80 h-80 md:w-96 md:h-96 border-2 border-blue-300/30 rounded-full z-0"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <motion.div 
              className="absolute w-72 h-72 md:w-88 md:h-88 border border-purple-300/40 rounded-full z-0"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 0.95, 1]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <motion.div 
              className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-dashed border-green-300/35 rounded-full z-0"
              animate={{ 
                rotate: [0, 360],
                scale: [0.95, 1.1, 0.95]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute w-56 h-56 md:w-72 md:h-72 border border-dotted border-orange-300/50 rounded-full z-0"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.08, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />

            {/* Background shadow */}
            <div className="absolute -left-10 top-10 w-72 h-72 md:w-88 md:h-88 bg-gray-900/15 rounded-full z-5"></div>
            
            {/* Main image */}
            <motion.img
              src="/frame13.png"
              alt="Lucy James Abaji - Professional Portrait"
              className="w-72 h-72 md:w-88 md:h-88 rounded-full object-cover object-center border-4 border-white shadow-2xl z-10 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              style={{ 
                objectPosition: "center center",
                aspectRatio: "1/1"
              }}
            />
            
            {/* Outer decorative ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 z-20 pointer-events-none opacity-30"
              animate={{ 
                rotate: [0, 360] 
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center">
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-2 text-right max-w-xs border-b border-dotted border-gray-400 pb-2 cursor-default transition-all duration-500"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              scale: 1.05,
              color: "#3B82F6",
              textShadow: "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {subtitleText}
          </motion.p>
        </div>
      </div>

      {/* Floating Newsletter Button */}
      <motion.button
        onClick={() => setIsNewsletterModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Subscribe to newsletter"
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
        >
          <Mail size={24} />
        </motion.div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Subscribe to Newsletter
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </motion.button>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

  {/* ...existing code... */}
    </section>
  );
}