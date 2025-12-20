import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import TileGrid from './components/TileGrid'
import ContentSection from './components/ContentSection'

function App() {
  const [activeSection, setActiveSection] = useState(null) // null = home, or 'comics', 'portfolio', 'storybook'

  const handleTileClick = (section) => {
    setActiveSection(section)
  }

  const handleBack = () => {
    setActiveSection(null)
  }

  return (
    <div className="min-h-screen font-body p-4 md:p-8 max-w-7xl mx-auto">
      <AnimatePresence mode="wait">
        {!activeSection ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-12"
          >
            <Hero />
            <TileGrid onTileClick={handleTileClick} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <button 
              onClick={handleBack}
              className="mb-8 px-6 py-2 bg-white border-3 border-comic-black shadow-comic hover:shadow-comic-hover hover:-translate-y-1 active:shadow-comic-active active:translate-y-1 transition-all font-comic text-xl rounded-lg"
            >
              ← Back to Home
            </button>
            <ContentSection type={activeSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
