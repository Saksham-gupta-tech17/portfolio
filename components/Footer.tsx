"use client";

import { motion } from "framer-motion";
import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="text-xl font-bold">saksham gupta</span>
            </div>
            <p className="text-muted max-w-md">
              Crafting digital experiences with purpose, precision, and passion.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-border"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted text-center md:text-left"
          >
            &copy; {currentYear} saksham gupta. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="#"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-muted">•</span>
            <a
              href="#"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            Made with
            <Heart size={14} className="text-rose-500 animate-pulse" />
            and
            <Coffee size={14} className="text-amber-600" />
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-5 py-2 border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            ↑ Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
}