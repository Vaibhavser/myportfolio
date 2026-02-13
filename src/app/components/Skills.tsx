import { motion } from 'motion/react';
import { Palette, Figma, Smartphone, Code, Database, GitBranch, Server } from 'lucide-react';

const skills = [
  {
    name: 'UI/UX Design',
    icon: Palette,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Figma',
    icon: Figma,
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'App Development',
    icon: Smartphone,
    color: 'from-green-400 to-cyan-500'
  },
  {
    name: 'Python',
    icon: Code,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'MySQL',
    icon: Database,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Database Management',
    icon: Server,
    color: 'from-indigo-400 to-purple-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse set of skills and technologies that I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
