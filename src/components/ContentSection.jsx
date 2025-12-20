import ComicsViewer from './ComicsViewer'
import PortfolioGallery from './PortfolioGallery'
import StorybookLibrary from './StorybookLibrary'
import { comicsData, portfolioData, storybooks } from '../data/content'

export default function ContentSection({ type }) {
  const getTitle = () => {
    switch(type) {
      case 'comics': return 'Bandes Dessinées ZikkiS';
      case 'portfolio': return 'Mon Portfolio';
      case 'storybook': return 'AI Storybook';
      default: return 'Galerie';
    }
  }

  const renderContent = () => {
    switch(type) {
      case 'comics':
        return <ComicsViewer images={comicsData} />
      case 'portfolio':
        return <PortfolioGallery images={portfolioData} />
      case 'storybook':
        return <StorybookLibrary books={storybooks} />
      default:
        return <div className="text-center text-xl">Section en construction...</div>
    }
  }

  return (
    <div className="pb-20">
      <div className="bg-comic-yellow border-3 border-comic-black p-4 mb-8 shadow-comic -rotate-1 inline-block">
        <h2 className="text-4xl md:text-5xl font-comic uppercase">{getTitle()}</h2>
      </div>
      
      {renderContent()}
    </div>
  )
}
