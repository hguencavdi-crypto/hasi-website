import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  {
    label: 'Dienstleistungen',
    path: '/dienstleistungen',
    dropdown: [
      { label: '🏠 Digital Hausmeister', path: '/digital-hausmeister' },
      { label: '☁️ Cloud', path: '/cloud' },
      { label: '🔐 Hasi Safe Stick', path: '/hasi-safe-stick' },
      { label: '🛡️ Hasi Care Support', path: '/hasi-care-support' },
    ],
  },
  { label: 'IT-Ratgeber', path: '/it-ratgeber' },
  { label: 'Kontakt', path: '/kontakt' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#111827] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-1.5">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="tel:+4970421639 1" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={12} /> 07042 16391
            </a>
            <span className="text-gray-700">|</span>
            <a href="mailto:info@hasi-elektronic.de" className="hover:text-accent transition-colors">
              info@hasi-elektronic.de
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link to="/datenschutzerklaerung" className="hover:text-accent transition-colors">Datenschutz</Link>
            <Link to="/agbs" className="hover:text-accent transition-colors">AGBs</Link>
            <Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111827]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800'
            : 'bg-[#1f2937] border-b border-gray-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-accent leading-none group-hover:text-accent-light transition-colors">
                  HASI
                </span>
                <span className="text-xs italic text-gray-400 font-medium -mt-0.5">
                  elektronic
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          location.pathname.startsWith('/dienstleistungen') ||
                          location.pathname === '/digital-hausmeister' ||
                          location.pathname === '/cloud' ||
                          location.pathname === '/hasi-safe-stick' ||
                          location.pathname === '/hasi-care-support'
                            ? 'text-accent bg-accent/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="nav-dropdown mt-2 py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-accent/10 transition-colors ${
                                location.pathname === item.path ? 'text-accent bg-accent/10' : ''
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-accent bg-accent/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/support"
                className="hidden lg:flex btn-primary text-xs"
              >
                🖥️ Remote-Support
              </Link>
              <a
                href="tel:+4970421639 1"
                className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone size={14} className="text-accent" />
                </div>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Menü öffnen"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-gray-800 mobile-menu-enter">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-accent bg-accent/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-accent bg-accent/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-800 space-y-2">
                <Link to="/support" className="btn-primary w-full justify-center">
                  🖥️ Remote-Support
                </Link>
                <a
                  href="tel:+4970421639 1"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-accent transition-colors"
                >
                  <Phone size={16} /> 07042 16391
                </a>
              </div>
              <div className="pt-3 border-t border-gray-800 flex gap-4 text-xs text-gray-500">
                <Link to="/datenschutzerklaerung" className="hover:text-gray-300">Datenschutz</Link>
                <Link to="/agbs" className="hover:text-gray-300">AGBs</Link>
                <Link to="/impressum" className="hover:text-gray-300">Impressum</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
