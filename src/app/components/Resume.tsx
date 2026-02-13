import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { resumePhoto, resumeFile } from '../config/photos';

export function Resume() {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumeFile.url;
    link.download = resumeFile.fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-cyan-500">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my resume to learn more about my skills, experience, and education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={resumePhoto}
                alt="Vaibhav Dubey Resume"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Resume Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Summary</h3>
                  <p className="text-gray-600">
                    Software developer with experience in Artificial Intelligence, focusing on writing clean, 
                    efficient code and solving real-world problems through software.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-700">B.Tech Computer Science</p>
                <p className="text-gray-600 text-sm">Lakshmi Narayan College of Technology & Science, Bhopal</p>
                <p className="text-gray-500 text-sm">Expected 2027 | GPA: 7.5</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Git & GitHub</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Figma</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</li>
                  <li>• Oracle Cloud Infrastructure 2025 Certified Foundations Associate</li>
                  <li>• Junior Cybersecurity Analyst Career Path Cisco</li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="w-full px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}