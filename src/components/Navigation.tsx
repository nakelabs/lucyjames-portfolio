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
    <header
      className={`fixed top-2 left-4 right-4 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl"
          : "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
      }`}
    >
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold group cursor-pointer">
            <span className="text-foreground group-hover:text-accent-gold transition-colors duration-300">Lucy James</span>
            <span className="text-accent-gold ml-1 group-hover:text-yellow-400 transition-colors duration-300">Abaji</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-300 font-medium px-3 py-1.5 rounded-full backdrop-blur-sm text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent-gold/10 hover:text-accent-gold rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 h-8 w-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-white/20">
            <div className="flex flex-col space-y-1 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-300 font-medium py-2 px-3 rounded-md backdrop-blur-sm text-sm"
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