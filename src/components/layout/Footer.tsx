import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const services = [
  { label: 'PC & Laptop Reparatur', path: '/dienstleistungen' },
  { label: 'Datenrettung', path: '/dienstleistungen' },
  { label: 'Virenentfernung', path: '/dienstleistungen' },
  { label: 'Cloud-Services', path: '/cloud' },
  { label: 'Digital Hausmeister', path: '/digital-hausmeister' },
  { label: 'Hasi Safe Stick', path: '/hasi-safe-stick' },
  { label: 'Hasi Care Support', path: '/hasi-care-support' },
  { label: 'Remote-Support', path: '/support' },
]

const quickLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'Dienstleistungen', path: '/dienstleistungen' },
  { label: 'IT-Ratgeber', path: '/it-ratgeber' },
  { label: 'Kontakt', path: '/kontakt' },
  { label: 'Support', path: '/support' },
  { label: 'Datenschutz', path: '/datenschutzerklaerung' },
  { label: 'Impressum', path: '/impressum' },
]

const openingHours = [
  { day: 'Montag', hours: '09:00–13:00 & 15:30–18:00' },
  { day: 'Dienstag', hours: '09:00–13:00 & 15:30–18:00' },
  { day: 'Mittwoch', hours: 'Geschlossen' },
  { day: 'Donnerstag', hours: '09:00–13:00 & 15:30–18:00' },
  { day: 'Freitag', hours: '09:00–13:00 & 15:30–18:00' },
  { day: 'Samstag', hours: '10:00–13:00' },
]

export default function Footer() {
  const today = new Date().getDay()

  return (
    <footer className="bg-[#111827] border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="mb-5">
              <span className="text-3xl font-black text-accent block leading-none">HASI</span>
              <span className="text-sm italic text-gray-400">elektronic</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Ihr zuverlässiger IT-Partner in Vaihingen an der Enz. Professionelle Lösungen für Privat- und Geschäftskunden seit 1986.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 transition-all"
                aria-label="Twitter/X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent"></div>
              Dienstleistungen
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent"></div>
              Schnell-Links
            </h3>
            <ul className="space-y-2.5 mb-6">
              {quickLinks.slice(0, 6).map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent"></div>
              <Clock size={14} /> Öffnungszeiten
            </h3>
            <div className="space-y-1.5">
              {openingHours.map((oh, i) => {
                const dayIndex = [0, 1, 2, 3, 4, 5, 6]
                const isToday = dayIndex[i + 1] === today
                return (
                  <div
                    key={oh.day}
                    className={`flex justify-between text-xs ${
                      isToday ? 'text-accent font-semibold' : 'text-gray-500'
                    }`}
                  >
                    <span>{oh.day}{isToday && ' ●'}</span>
                    <span className={oh.hours === 'Geschlossen' ? 'text-danger/70' : ''}>{oh.hours}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent"></div>
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Grabenstraße 18</p>
                  <p className="text-xs text-gray-400">71665 Vaihingen an der Enz</p>
                  <p className="text-xs text-gray-500 mt-0.5">(Eingang Heilbronner Straße)</p>
                </div>
              </div>
              <a href="tel:+4970421639 1" className="flex gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium group-hover:text-accent transition-colors">07042 16391</p>
                  <p className="text-xs text-gray-400">Mobil: 0160 1236060</p>
                </div>
              </a>
              <a href="mailto:info@hasi-elektronic.de" className="flex gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium group-hover:text-accent transition-colors">info@hasi-elektronic.de</p>
                  <p className="text-xs text-gray-400">www.hasi-elektronic.de</p>
                </div>
              </a>
            </div>

            {/* Service area */}
            <div className="mt-5 p-3 rounded-lg bg-accent/5 border border-accent/10">
              <p className="text-xs text-gray-400 font-medium mb-1.5">Service-Gebiet:</p>
              <p className="text-xs text-gray-500">
                Vaihingen/Enz • Mühlacker • Pforzheim • Stuttgart & Umgebung
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Hasi Elektronic. Alle Rechte vorbehalten. Inhaber: Hamdi Güncavdi
            </p>
            <div className="flex gap-4">
              <Link to="/datenschutzerklaerung" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
              <Link to="/agbs" className="hover:text-gray-300 transition-colors">AGBs</Link>
              <Link to="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
