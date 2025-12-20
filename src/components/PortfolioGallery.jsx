import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PortfolioGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="break-inside-avoid"
            onClick={() => setSelectedImage(img)}
          >
            <div className="bg-white p-2 border-3 border-comic-black shadow-comic hover:shadow-comic-hover transition-all cursor-pointer rounded-lg">
              <img 
                src={img.url} 
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain border-4 border-white rounded-lg shadow-2xl"
          />
          <button className="absolute top-4 right-4 text-white text-4xl font-comic hover:text-comic-yellow">
            X
          </button>
        </div>
      )}
    </>
  )
}
