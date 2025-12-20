import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function StorybookLibrary({ books }) {
  const [selectedBook, setSelectedBook] = useState(null)

  if (selectedBook) {
    return <BookReader book={selectedBook} onBack={() => setSelectedBook(null)} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
      {books.map((book) => (
        <motion.div
          key={book.id}
          onClick={() => setSelectedBook(book)}
          className="bg-white p-6 border-3 border-comic-black shadow-comic hover:shadow-comic-hover cursor-pointer rounded-xl flex flex-col items-center gap-4 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full aspect-[3/4] overflow-hidden border-2 border-comic-black rounded-lg relative">
            <img 
              src={book.cover} 
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <h3 className="text-3xl font-comic text-center">{book.title}</h3>
          <span className="bg-comic-yellow px-4 py-1 border-2 border-comic-black rounded-full font-bold text-sm">
            Lire le livre
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function BookReader({ book, onBack }) {
  const [pageIndex, setPageIndex] = useState(0)
  const totalPages = book.pages.length

  const nextPage = () => {
    if (pageIndex < totalPages - 1) setPageIndex(p => p + 1)
  }

  const prevPage = () => {
    if (pageIndex > 0) setPageIndex(p => p - 1)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="text-lg font-bold underline hover:text-comic-blue"
        >
          ← Retour à la bibliothèque
        </button>
        <h2 className="text-2xl font-comic">{book.title} - Page {pageIndex + 1}/{totalPages}</h2>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 items-start justify-center min-h-[60vh]">
        {/* Image Side */}
        <div className="w-full md:w-1/2 bg-white p-2 border-3 border-comic-black shadow-comic rounded-lg relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={pageIndex}
              src={book.pages[pageIndex]}
              alt={`Page ${pageIndex + 1}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </AnimatePresence>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full py-8">
          <motion.div
            key={`text-${pageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 border-3 border-comic-black shadow-comic-sm rounded-xl relative"
          >
            {/* Speech Bubble Triangle */}
            <div className="absolute top-1/2 -left-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[16px] border-r-comic-black border-b-[10px] border-b-transparent hidden md:block transform -translate-y-1/2" />
            <div className="absolute top-1/2 -left-[13px] w-0 h-0 border-t-[7px] border-t-transparent border-r-[13px] border-r-white border-b-[7px] border-b-transparent hidden md:block transform -translate-y-1/2 z-10" />

            <h3 className="font-comic text-2xl mb-4 text-comic-blue">Chapitre {pageIndex + 1}</h3>
            <p className="font-body text-lg leading-relaxed text-gray-800">
              {/* Placeholder text since we don't have real text yet */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 font-body text-gray-600 italic">
              (Texte généré par IA pour accompagner l'illustration...)
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevPage}
              disabled={pageIndex === 0}
              className="flex items-center gap-2 px-6 py-3 bg-white border-3 border-comic-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 active:translate-y-1 transition-all font-bold"
            >
              <ChevronLeft /> Précédent
            </button>
            <button 
              onClick={nextPage}
              disabled={pageIndex === totalPages - 1}
              className="flex items-center gap-2 px-6 py-3 bg-comic-yellow border-3 border-comic-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:translate-y-1 transition-all font-bold shadow-comic active:shadow-none"
            >
              Suivant <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
