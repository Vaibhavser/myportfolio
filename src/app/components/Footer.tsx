import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { socialLinks } from '../config/photos';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Vaibhav<span className="text-cyan-500">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Building innovative solutions with passion and dedication. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-cyan-500 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-cyan-500 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-cyan-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-500 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Bhopal, India</p>
              <p>vaibhavdubeydash@gmail.com</p>
              <p>+91 7970174517</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center justify-center gap-2"
          >
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Vaibhav Dubey © {currentYear}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}