import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ArrowUp, MessageCircle } from 'lucide-react'

function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('hasi-cookies')
    if (!accepted) setShow(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('hasi-cookies', 'accepted')
    setShow(false)
  }
  const handleDecline = () => {
    localStorage.setItem('hasi-cookies', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie-banner">
      <div className="glass rounded-2xl p-5 border border-gray-700 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">🍪</span>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Cookie-Einstellungen</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Wir verwenden technisch notwendige Cookies. Mit Ihrer Einwilligung nutzen wir auch Analyse-Cookies zur Verbesserung unserer Website.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={handleDecline}
            className="btn-outline text-xs py-2 px-4 flex-1 justify-center"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      aria-label="Nach oben scrollen"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/491601236060"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
