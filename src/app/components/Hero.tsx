import { motion } from 'motion/react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { heroPhoto } from '../config/photos';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Vaibhav! I'm interested in discussing a project with you.");
    window.open(`https://wa.me/917970174517?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-white via-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm"
          >
            Available for Work
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
            Vaibhav <span className="text-cyan-500">Dubey</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600">
            Software Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            A passionate developer focused on AI, clean code, and building real-world solutions. 
            I specialize in creating intuitive user experiences and scalable applications.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transition-colors"
            >
              Hire Me <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              View Projects <Download className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={heroPhoto}
                  alt="Vaibhav Dubey"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-cyan-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
