import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { videoConfig } from '../config/photos';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Introduction <span className="text-cyan-500">Video</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know me better through this introduction video
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              {!isPlaying ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-xl hover:bg-cyan-600 transition-colors"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.button>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoConfig.youtubeVideoId}?autoplay=1`}
                  title="Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            
            {!isPlaying && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{videoConfig.title}</h3>
                  <p className="text-gray-200">{videoConfig.description}</p>
                </div>
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid grid-cols-3 gap-4 text-center"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">
                {videoConfig.stats.experience.value}
              </div>
              <div className="text-gray-600">{videoConfig.stats.experience.label}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">
                {videoConfig.stats.projects.value}
              </div>
              <div className="text-gray-600">{videoConfig.stats.projects.label}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">
                {videoConfig.stats.satisfaction.value}
              </div>
              <div className="text-gray-600">{videoConfig.stats.satisfaction.label}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
