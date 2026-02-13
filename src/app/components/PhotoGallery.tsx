import { motion } from 'motion/react';
import { galleryPhotos } from '../config/photos';

const photos = [
  {
    src: galleryPhotos[0],
    alt: 'Vaibhav Dubey - Professional photo 1',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    src: galleryPhotos[1],
    alt: 'Vaibhav Dubey - Professional photo 2',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    src: galleryPhotos[2],
    alt: 'Vaibhav Dubey - Professional photo 3',
    gradient: 'from-orange-500/20 to-yellow-500/20'
  }
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Photo <span className="text-cyan-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into my professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${photo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}></div>
                
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
              </div>

              {/* Hover effect light */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.6 }}
              className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-cyan-600 w-4 h-4' : 'bg-gray-300'}`}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
