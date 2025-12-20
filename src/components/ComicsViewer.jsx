import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUp } from 'lucide-react'

export default function ComicsViewer({ images }) {
  const [visibleCount, setVisibleCount] = useState(5)
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '400px', // Load well before reaching the bottom
  })

  useEffect(() => {
    if (inView && visibleCount < images.length) {
      // Load more
      setVisibleCount(prev => Math.min(prev + 5, images.length))
    }
  }, [inView, visibleCount, images.length])

  const visibleImages = images.slice(0, visibleCount)
  const allLoaded = visibleCount >= images.length

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      <div className="w-full px-0 md:px-[20px]">
        {visibleImages.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            className="w-full"
          >
            <img 
              src={img.url} 
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto block"
              style={{ display: 'block' }}
            />
          </motion.div>
        ))}
        
        {/* Loading trigger element */}
        {!allLoaded && (
          <div ref={ref} className="h-20 flex items-center justify-center bg-white">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </div>
      
      {allLoaded && (
        <div className="mt-12 mb-8 flex flex-col items-center gap-4">
            <p className="text-comic-black font-comic text-xl">Fin de l'épisode !</p>
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 px-6 py-3 bg-comic-yellow border-3 border-comic-black text-comic-black font-bold rounded-full hover:scale-110 transition-transform shadow-comic"
            >
                <ArrowUp size={20} />
                Retour en haut
            </button>
        </div>
      )}
    </div>
  )
}
