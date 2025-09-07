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
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if we've scrolled for styling
      setIsScrolled(currentScrollY > 50);
      
      // Show navbar at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          className="fixed top-6 left-4 right-4 z-40"
        >
          <nav className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div 
                className="text-lg font-playfair font-semibold group cursor-pointer tracking-wide"
                onClick={() => navigate("/")}
              >
                <span className="text-gray-800 group-hover:text-accent-gold transition-colors duration-300">
                  Lucy James
                </span>
                <span className="text-accent-gold ml-1 group-hover:text-yellow-500 transition-colors duration-300">
                  Abaji
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="text-gray-800 hover:text-accent-gold transition-colors duration-300 font-playfair font-medium text-sm relative group tracking-wide"
                  >
                    {item.name}
                    {/* Underline effect on hover */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent hover:text-accent-gold transition-colors duration-300 h-8 w-8 border-none shadow-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-800" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-800" />
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
                  className="md:hidden mt-4 pt-4 border-t border-gray-200/30 overflow-hidden"
                >
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item)}
                        className="text-left text-gray-800 hover:text-accent-gold transition-colors duration-300 font-playfair font-medium py-2 text-sm tracking-wide"
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