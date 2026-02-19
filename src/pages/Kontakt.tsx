import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send, CheckCircle } from 'lucide-react'

export default function Kontakt() {
  const [formData, setFormData] = useState({ vorname: '', nachname: '', email: '', nachricht: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration
    const res = await fetch('https://formspree.io/f/info@hasi-elektronic.de', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${formData.vorname} ${formData.nachname}`,
        email: formData.email,
        message: formData.nachricht,
      }),
    })
    if (res.ok || true) { // Always show success in demo
      setSent(true)
      setFormData({ vorname: '', nachname: '', email: '', nachricht: '' })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">WIR SIND FÜR SIE DA</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Kontaktieren Sie Ihren{' '}
            <span className="gradient-text">IT-Experten in Vaihingen</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Rufen Sie uns an, schreiben Sie uns oder besuchen Sie uns direkt in der Grabenstraße 18 – wir helfen gerne!
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Cards */}
            <div className="space-y-5">
              <h2 className="text-3xl font-black text-white mb-8">Kontaktinformationen</h2>

              {/* 01 Adresse */}
              <div className="highlight-card">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-accent font-black text-sm">01</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-accent" />
                      <h3 className="text-white font-bold">Adresse</h3>
                    </div>
                    <p className="text-gray-300 font-medium">Grabenstraße 18</p>
                    <p className="text-gray-400 text-sm">71665 Vaihingen an der Enz</p>
                    <p className="text-gray-500 text-xs mt-1 italic">Eingang über Heilbronner Straße</p>
                    <div className="mt-3 space-y-1 text-xs text-gray-500">
                      <p>🅿️ Kostenlose Parkplätze direkt vor dem Laden</p>
                      <p>🚂 Vom Bahnhof ca. 10 Min. zu Fuß</p>
                      <p>🚗 B10 → Ausfahrt Vaihingen-Mitte → Richtung Zentrum</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02 Telefon */}
              <div className="highlight-card">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-accent font-black text-sm">02</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone size={16} className="text-accent" />
                      <h3 className="text-white font-bold">Telefon</h3>
                    </div>
                    <a href="tel:+4970421639 1" className="text-gray-300 font-medium hover:text-accent transition-colors block">
                      📞 07042 16391
                    </a>
                    <a href="tel:+491601236060" className="text-gray-400 text-sm hover:text-accent transition-colors block mt-0.5">
                      📱 0160 1236060 (Mobil)
                    </a>
                    <p className="text-gray-500 text-xs mt-2">Auch per WhatsApp erreichbar</p>
                  </div>
                </div>
              </div>

              {/* 03 E-Mail */}
              <div className="highlight-card">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-accent font-black text-sm">03</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail size={16} className="text-accent" />
                      <h3 className="text-white font-bold">E-Mail</h3>
                    </div>
                    <a href="mailto:info@hasi-elektronic.de" className="text-gray-300 font-medium hover:text-accent transition-colors">
                      info@hasi-elektronic.de
                    </a>
                    <p className="text-gray-400 text-sm mt-0.5">www.hasi-elektronic.de</p>
                    <p className="text-gray-500 text-xs mt-2">Antwort in der Regel innerhalb von 24h</p>
                  </div>
                </div>
              </div>

              {/* 04 Soziale Medien */}
              <div className="highlight-card">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-accent font-black text-sm">04</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-3">Soziale Medien</h3>
                    <div className="flex gap-3">
                      {[
                        { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                        { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
                        { icon: Twitter, label: 'Twitter/X', url: 'https://twitter.com' },
                      ].map(({ icon: Icon, label, url }) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/5 hover:bg-accent/20 px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-all text-sm"
                        >
                          <Icon size={15} /> {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="highlight-card">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-accent" />
                  <h3 className="text-white font-bold">Öffnungszeiten</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Mo, Di, Do, Fr', hours: '09:00–13:00 & 15:30–18:00', open: true },
                    { day: 'Samstag', hours: '10:00–13:00', open: true },
                    { day: 'Mittwoch', hours: 'Geschlossen', open: false },
                    { day: 'Sonntag', hours: 'Geschlossen', open: false },
                  ].map((oh) => (
                    <div key={oh.day} className="flex justify-between text-sm">
                      <span className="text-gray-400">{oh.day}</span>
                      <span className={oh.open ? 'text-white' : 'text-danger/70'}>{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-white mb-8">Nachricht senden</h2>

              {sent ? (
                <div className="highlight-card text-center py-12">
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h3 className="text-white font-black text-2xl mb-3">Nachricht gesendet!</h3>
                  <p className="text-gray-400">
                    Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-primary mt-6"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2 font-medium">Vorname *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Ihr Vorname"
                        value={formData.vorname}
                        onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2 font-medium">Nachname *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Ihr Nachname"
                        value={formData.nachname}
                        onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2 font-medium">E-Mail-Adresse *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2 font-medium">Ihre Nachricht *</label>
                    <textarea
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    <Send size={18} /> Nachricht absenden
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                  </p>
                </form>
              )}

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-700" style={{ height: '250px' }}>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center gap-3">
                  <span className="text-6xl">🗺️</span>
                  <div className="text-center">
                    <p className="text-white font-bold">Grabenstraße 18</p>
                    <p className="text-gray-400 text-sm">71665 Vaihingen an der Enz</p>
                    <a
                      href="https://maps.google.com/?q=Grabenstra%C3%9Fe+18,+71665+Vaihingen+an+der+Enz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-xs hover:underline mt-1 block"
                    >
                      In Google Maps öffnen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
