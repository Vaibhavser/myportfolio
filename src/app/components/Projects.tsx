import { motion } from 'motion/react';
import { ExternalLink, Github, Mic, Bell } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import project photos from config
const projectMarshallPhoto = 'https://images.unsplash.com/photo-1613262155980-c9e47252316b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHZvaWNlJTIwYXNzaXN0YW50JTIwbWljcm9waG9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTY4MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080';
const projectRemindKaroPhoto = 'https://images.unsplash.com/photo-1746286721374-cd541e26911a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjByZW1pbmRlciUyMG5vdGlmaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5NjgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080';

const projects = [
  {
    title: 'Marshall',
    subtitle: 'AI Voice Assistant',
    description: 'An intelligent voice assistant powered by advanced AI algorithms, capable of understanding natural language and providing contextual responses. Features real-time speech recognition and text-to-speech capabilities.',
    techStack: ['Python', 'AI/ML', 'Speech Recognition', 'Natural Language Processing'],
    image: projectMarshallPhoto,
    icon: Mic,
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Remind Karo',
    subtitle: 'Smart Reminder App',
    description: 'A beautifully designed reminder and task management app with intelligent notifications. Features location-based reminders, recurring tasks, and a clean, intuitive UI/UX built in Figma.',
    techStack: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
    image: projectRemindKaroPhoto,
    icon: Bell,
    demoLink: '#',
    githubLink: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in AI and UI/UX design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-cyan-300 text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
