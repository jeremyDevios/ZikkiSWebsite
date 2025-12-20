import { motion } from 'framer-motion'
import { BookOpen, Palette, Sparkles } from 'lucide-react'

const tiles = [
  {
    id: 'comics',
    title: 'Bandes Dessinées',
    icon: BookOpen,
    color: 'bg-comic-red',
    description: 'Plongez dans mes univers illustrés.'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    icon: Palette,
    color: 'bg-comic-blue',
    description: 'Une sélection de mes meilleures œuvres.'
  },
  {
    id: 'storybook',
    title: 'AI Storybook',
    icon: Sparkles,
    color: 'bg-green-400',
    description: 'Histoires générées par l\'IA.'
  }
]

export default function TileGrid({ onTileClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiles.map((tile, index) => (
        <motion.div
          key={tile.id}
          onClick={() => onTileClick(tile.id)}
          className={`${tile.color} p-8 rounded-xl border-3 border-comic-black shadow-comic cursor-pointer relative overflow-hidden group h-80 flex flex-col justify-between`}
          whileHover={{ y: -8, boxShadow: '10px 10px 0px 0px #18181b' }}
          whileTap={{ y: 4, boxShadow: '2px 2px 0px 0px #18181b' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Background Icon Decoration */}
          <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
            <tile.icon size={200} color="black" />
          </div>
          
          <div className="relative z-10">
            <div className="bg-white w-16 h-16 rounded-full border-3 border-comic-black flex items-center justify-center mb-6 shadow-comic-sm group-hover:rotate-12 transition-transform">
              <tile.icon size={32} className="text-comic-black" />
            </div>
            <h2 className="text-4xl font-comic text-white mb-3 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              {tile.title}
            </h2>
          </div>
          
          <div className="relative z-10">
             <p className="font-bold text-comic-black bg-white p-3 rounded-lg border-3 border-comic-black shadow-comic-sm text-sm">
              {tile.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
