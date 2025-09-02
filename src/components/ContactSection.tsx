import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "lucy.abaji@example.com",
    href: "mailto:lucy.abaji@example.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234-70-612-36272",
    href: "tel:+2347061236272"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abuja , Nigeria",
    href: "#"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with Lucy",
    href: "https://linkedin.com/in/lucy-james-abaji"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form submission feedback
    alert("Thank you for your message! Lucy will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Simple Header */}
        <motion.div 
          className="text-center mb-16 group cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 group-hover:text-accent-gold transition-colors duration-300">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto group-hover:text-accent-gold transition-colors duration-300">
            Ready to collaborate or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:border-accent-gold hover:border-accent-gold group-hover:text-accent-gold focus:outline-none transition-colors duration-300 text-lg placeholder:group-hover:text-accent-gold/70"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:border-accent-gold hover:border-accent-gold group-hover:text-accent-gold focus:outline-none transition-colors duration-300 text-lg placeholder:group-hover:text-accent-gold/70"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:border-accent-gold hover:border-accent-gold group-hover:text-accent-gold focus:outline-none resize-none transition-colors duration-300 text-lg placeholder:group-hover:text-accent-gold/70"
                />
              </div>
              
              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white hover:bg-accent-gold hover:text-black transition-colors duration-300 text-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8 group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                >
                  <div className="mt-1">
                    <IconComponent className="h-5 w-5 text-gray-600 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 group-hover:text-accent-gold/70 uppercase tracking-wide mb-1 transition-colors duration-300">
                      {info.title}
                    </div>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-lg text-gray-900 hover:text-accent-gold group-hover:text-accent-gold transition-colors duration-300 flex items-center gap-1"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                        {info.href.startsWith('http') && <ExternalLink className="h-4 w-4" />}
                      </a>
                    ) : (
                      <div className="text-lg text-gray-900 group-hover:text-accent-gold transition-colors duration-300">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Simple CTA */}
            <motion.div 
              className="pt-8 border-t border-gray-100 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-gray-600 group-hover:text-accent-gold transition-colors duration-300 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                and interesting conversations. Let's create something amazing together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}