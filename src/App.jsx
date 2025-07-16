import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import './App.css'

// Import components and translations
import HomePage from './HomePage.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import { translations } from './translations.js'
import FourFrontLogo from './assets/FourFront.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [currentPage, setCurrentPage] = useState('home') // 'home' or 'portfolio'

  const t = translations[language]

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigateToPage('home')}>
              <img src={FourFrontLogo} alt="FourFront Logo" className="h-8" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateToPage('home')}
                className={`text-foreground hover:text-foreground/80 transition-colors ${currentPage === 'home' ? 'font-semibold' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('portfolio')}
                className={`text-foreground hover:text-foreground/80 transition-colors ${currentPage === 'portfolio' ? 'font-semibold' : ''}`}
              >
                Portfolio
              </button>
              <select 
                value={language} 
                onChange={handleLanguageChange}
                className="border border-border rounded px-2 py-1 text-sm bg-background text-foreground"
              >
                <option value="en">EN</option>
                <option value="pt">PT</option>
              </select>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.contactUs}
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => navigateToPage('home')}
                className={`w-full text-left py-2 text-foreground hover:text-foreground/80 transition-colors ${currentPage === 'home' ? 'font-semibold' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('portfolio')}
                className={`w-full text-left py-2 text-foreground hover:text-foreground/80 transition-colors ${currentPage === 'portfolio' ? 'font-semibold' : ''}`}
              >
                Portfolio
              </button>
              <select 
                value={language} 
                onChange={handleLanguageChange}
                className="w-full border border-border rounded px-2 py-1 text-sm bg-background text-foreground"
              >
                <option value="en">EN</option>
                <option value="pt">PT</option>
              </select>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t.contactUs}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      {currentPage === 'home' && (
        <HomePage t={t} language={language} setLanguage={setLanguage} />
      )}
      
      {currentPage === 'portfolio' && (
        <PortfolioPage t={t} language={language} setLanguage={setLanguage} />
      )}
    </div>
  )
}

export default App

