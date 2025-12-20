import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ImageCard({ image }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="bg-white p-3 border-3 border-comic-black shadow-comic rounded-lg hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
    >
      <div className="aspect-[4/3] bg-gray-100 border-2 border-comic-black overflow-hidden relative mb-3">
        {/* Skeleton / Placeholder */}
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
             <span className="font-comic text-gray-400 text-xl rotate-12">ZikkiS Art</span>
          </div>
        </div>
        
        <img 
          src={image.url} 
          alt={image.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      
      <h3 className="font-comic text-xl mb-1 truncate border-b-2 border-transparent group-hover:border-comic-black inline-block transition-colors">{image.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2 font-body">{image.description}</p>
    </motion.div>
  )
}
