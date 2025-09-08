// Create file: src/components/Newsletter.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { subscribeToNewsletterDirect } from "@/services/newsletter"; // Fixed import path

interface NewsletterProps {
  variant?: "default" | "footer" | "inline";
  className?: string;
}

export const Newsletter = ({ variant = "default", className = "" }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      const result = await subscribeToNewsletterDirect({ // Using the direct function
        email,
        firstName: firstName || undefined,
      });

      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        setEmail("");
        setFirstName("");
        
        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "footer") {
    return (
      <div className={`${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600">
            Get insights on leadership, innovation, and sustainable business practices.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="First name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>

          {/* Status Messages */}
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 text-sm ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status === "success" ? (
                <Check className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {message}
            </motion.div>
          )}
        </form>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 ${className}`}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wide">
              Newsletter
            </span>
          </div>
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
            Join 500+ Leaders
          </h3>
          <p className="text-gray-600">
            Weekly insights on leadership, strategy, and innovation delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-12"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>

          {/* Status Messages */}
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 text-sm ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status === "success" ? (
                <Check className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {message}
            </motion.div>
          )}
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          No spam, unsubscribe anytime. Read our{" "}
          <a href="#" className="text-amber-600 hover:underline">
            privacy policy
          </a>.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 px-4 ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Mail className="w-8 h-8 text-amber-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Join My Newsletter
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get exclusive insights on leadership, innovation, and sustainable business practices. 
            Join 500+ executives and leaders who trust my weekly insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 text-lg"
              />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 py-3 text-lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Subscribing...
                </div>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </>
              )}
            </Button>

            {/* Status Messages */}
            {status !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 text-lg ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status === "success" ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                {message}
              </motion.div>
            )}
          </form>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Weekly insights</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            By subscribing, you agree to receive occasional emails from Lucy James Abaji. 
            You can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};