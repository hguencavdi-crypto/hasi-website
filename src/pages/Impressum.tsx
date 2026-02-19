export default function Impressum() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">RECHTLICHES</span>
          <h1 className="text-5xl font-black text-white mt-3">Impressum</h1>
        </div>
      </section>
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="highlight-card space-y-6">
            <div>
              <h2 className="text-white font-bold text-xl mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1 text-gray-400 text-sm">
                <p className="text-white font-semibold">Hasi Elektronic</p>
                <p>Inhaber: Hamdi Güncavdi</p>
                <p>Grabenstraße 18</p>
                <p>71665 Vaihingen an der Enz</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-5">
              <h2 className="text-white font-bold text-xl mb-3">Kontakt</h2>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>Telefon: 07042 16391</p>
                <p>Mobil: 0160 1236060</p>
                <p>E-Mail: info@hasi-elektronic.de</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-5">
              <h2 className="text-white font-bold text-xl mb-3">Verantwortlich für den Inhalt</h2>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>Hamdi Güncavdi</p>
                <p>Grabenstraße 18, 71665 Vaihingen an der Enz</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-5">
              <h2 className="text-white font-bold text-xl mb-3">Haftungsausschluss</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-5">
              <h2 className="text-white font-bold text-xl mb-3">Urheberrecht</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung des Autors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
