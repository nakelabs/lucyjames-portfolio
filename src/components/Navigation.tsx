import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Biography", href: "#biography" },
  { name: "PPDC Role", href: "#ppdc" },
  { name: "Lifestyle", href: "#lifestyle" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-6 left-4 right-4 z-40">
      <nav className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-playfair font-semibold group cursor-pointer tracking-wide">
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
                onClick={() => scrollToSection(item.href)}
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
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-800 hover:text-accent-gold transition-colors duration-300 font-playfair font-medium py-2 text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}