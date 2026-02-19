export default function Datenschutz() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">RECHTLICHES</span>
          <h1 className="text-5xl font-black text-white mt-3">Datenschutzerklärung</h1>
        </div>
      </section>
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {[
            {
              title: '1. Datenschutz auf einen Blick',
              content: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
            },
            {
              title: '2. Verantwortlicher',
              content: 'Hasi Elektronic, Inhaber: Hamdi Güncavdi, Grabenstraße 18, 71665 Vaihingen an der Enz. Telefon: 07042 16391. E-Mail: info@hasi-elektronic.de',
            },
            {
              title: '3. Datenerfassung auf dieser Website',
              content: 'Einige Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten. Diese Daten werden nicht gespeichert oder ausgewertet.',
            },
            {
              title: '4. Kontaktformular',
              content: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
            },
            {
              title: '5. Ihre Rechte',
              content: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
            },
            {
              title: '6. Cookies',
              content: 'Unsere Website verwendet technisch notwendige Cookies. Diese dienen ausschließlich dazu, die Funktionalität der Website zu gewährleisten. Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.',
            },
          ].map((section) => (
            <div key={section.title} className="highlight-card">
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
