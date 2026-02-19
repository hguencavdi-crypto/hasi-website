import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import UeberUns from './pages/UeberUns'
import Dienstleistungen from './pages/Dienstleistungen'
import DigitalHausmeister from './pages/DigitalHausmeister'
import Cloud from './pages/Cloud'
import Kontakt from './pages/Kontakt'
import ITRatgeber from './pages/ITRatgeber'
import Support from './pages/Support'
import HasiSafeStick from './pages/HasiSafeStick'
import HasiCareSupport from './pages/HasiCareSupport'
import Datenschutz from './pages/Datenschutz'
import AGBs from './pages/AGBs'
import Impressum from './pages/Impressum'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="text-center">
        <div className="text-8xl mb-6">🔌</div>
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-8">Diese Seite konnte nicht gefunden werden.</p>
        <a href="/" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
          ← Zurück zur Startseite
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ueber-uns" element={<UeberUns />} />
          <Route path="dienstleistungen" element={<Dienstleistungen />} />
          <Route path="digital-hausmeister" element={<DigitalHausmeister />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="it-ratgeber" element={<ITRatgeber />} />
          <Route path="support" element={<Support />} />
          <Route path="hasi-safe-stick" element={<HasiSafeStick />} />
          <Route path="hasi-care-support" element={<HasiCareSupport />} />
          <Route path="datenschutzerklaerung" element={<Datenschutz />} />
          <Route path="agbs" element={<AGBs />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
