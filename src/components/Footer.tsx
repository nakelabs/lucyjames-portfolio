import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-default"
          >
            <h3 className="text-3xl font-light text-gray-900 group-hover:text-accent-gold transition-colors duration-300">
              Lucy James Abaji
            </h3>
            <p className="text-gray-600 mt-2 group-hover:text-accent-gold transition-colors duration-300">
              Visionary Leader • Strategic Innovator
            </p>
          </motion.div>

          {/* Simple Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => document.querySelector("#biography")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Biography
            </button>
            <button
              onClick={() => document.querySelector("#ppdc")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-accent-gold transition-colors duration-300"
            >
              PPDC
            </button>
            <button
              onClick={() => document.querySelector("#lifestyle")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Lifestyle
            </button>
            <button
              onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-accent-gold transition-colors duration-300"
            >
              Contact
            </button>
          </motion.div>

          {/* Simple Copyright */}
          <motion.div 
            className="pt-8 border-t border-gray-100 group cursor-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-500 text-sm group-hover:text-accent-gold transition-colors duration-300">
              © {currentYear} Lucy James Abaji. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}