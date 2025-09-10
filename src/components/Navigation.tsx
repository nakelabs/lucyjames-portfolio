import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero", type: "scroll" },
  { name: "Biography", href: "#biography", type: "scroll" },
  { name: "PPDC Role", href: "#ppdc", type: "scroll" },
  { name: "Lifestyle", href: "#lifestyle", type: "scroll" },
  { name: "Gallery", href: "#gallery", type: "scroll" },
  { name: "Blog", href: "/blog", type: "route" },
  { name: "Contact", href: "#contact", type: "scroll" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if we've scrolled for styling
      setIsScrolled(currentScrollY > 50);
      
      // Check if hero section is in view
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroHeight = heroRect.height;
        const heroTop = heroRect.top;
        
        // Show navbar only when hero section is visible
        // Hero is considered visible if any part of it is in the viewport
        const isHeroVisible = heroTop < window.innerHeight && (heroTop + heroHeight) > 0;
        
        setIsVisible(isHeroVisible);
        
        // Close mobile menu when navbar becomes invisible
        if (!isHeroVisible) {
          setIsMobileMenuOpen(false);
        }
      } else {
        // Fallback: if no hero section found, show navbar only at the very top
        setIsVisible(currentScrollY < 100);
      }
    };

    // Add throttling to improve performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === "route") {
      navigate(item.href);
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/" + item.href);
      } else {
        scrollToSection(item.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut" 
          }}
          className="fixed top-4 left-2 right-2 md:top-6 md:left-4 md:right-4 z-40"
        >
          <nav className="px-3 py-2 md:px-4 md:py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div 
                className="text-sm md:text-base font-playfair font-semibold group cursor-pointer tracking-wide"
                onClick={() => navigate("/")}
              >
                <span className="text-accent-gold group-hover:text-yellow-400 transition-colors duration-300">
                  Lucy James
                </span>
                <span className="text-yellow-400 ml-1 group-hover:text-accent-gold transition-colors duration-300">
                  Abaji
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="text-accent-gold hover:text-yellow-400 transition-colors duration-300 font-playfair font-medium text-xs relative group tracking-wide"
                  >
                    {item.name}
                    {/* Underline effect on hover */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-white/10 hover:text-yellow-400 transition-colors duration-300 h-8 w-8 border-none shadow-none flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 text-accent-gold" />
                ) : (
                  <Menu className="h-4 w-4 text-accent-gold" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden mt-3 pt-3 border-t border-white/20 overflow-hidden"
                >
                  <div className="flex flex-col space-y-2 px-1">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item)}
                        className="text-left text-accent-gold hover:text-yellow-400 transition-colors duration-300 font-playfair font-medium py-2 text-sm tracking-wide"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}