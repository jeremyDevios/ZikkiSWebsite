import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.header 
      className="text-center py-12 md:py-20 bg-comic-yellow border-3 border-comic-black shadow-comic rounded-xl relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Halftone pattern effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
      </div>
      
      <h1 className="text-6xl md:text-9xl font-comic text-comic-black mb-6 drop-shadow-md tracking-wider uppercase transform -rotate-2">
        ZikkiS
      </h1>
      <p className="text-xl md:text-3xl font-bold text-comic-black bg-white inline-block px-6 py-2 border-3 border-comic-black shadow-comic-sm transform rotate-1 rounded-md">
        AI Artist & Storyteller
      </p>
    </motion.header>
  )
}
