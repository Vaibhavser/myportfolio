import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Computer Science student and passionate software developer with a strong focus on 
              creating innovative solutions that make a difference. My journey in tech is driven by 
              curiosity and a commitment to excellence in every project I undertake.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science, I specialize in AI development, 
              UI/UX design, and building scalable applications. I believe in the power of clean code 
              and user-centered design to create meaningful digital experiences.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I'm actively seeking job opportunities and freelance projects where I can contribute 
              my skills and continue growing as a developer. Let's build something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  B.Tech in Computer Science
                </h4>
                <p className="text-gray-600 mt-1">
                  Lakshmi Narayan College of Technology & Science
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Bhopal, India</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-cyan-500" />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
