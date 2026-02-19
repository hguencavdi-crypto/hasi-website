import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

const articles = [
  {
    category: 'Sicherheit',
    categoryColor: 'bg-danger/20 text-danger',
    title: 'So schützen Sie Ihren PC vor Viren und Malware',
    excerpt: 'Lernen Sie die wichtigsten Maßnahmen, um Ihren Computer vor modernen Bedrohungen zu schützen – von Antivirus-Software bis zu sicheren Browser-Einstellungen.',
    date: '15. Januar 2026',
    readTime: '5 Min.',
  },
  {
    category: 'Hardware',
    categoryColor: 'bg-accent/20 text-accent',
    title: 'SSD vs. HDD: Welcher Speicher ist der richtige für Sie?',
    excerpt: 'Wir erklären die Unterschiede zwischen SSDs und klassischen Festplatten – und helfen Ihnen bei der Entscheidung für Ihren nächsten Kauf.',
    date: '8. Januar 2026',
    readTime: '4 Min.',
  },
  {
    category: 'Netzwerk',
    categoryColor: 'bg-success/20 text-success',
    title: 'WLAN zu langsam? 7 Tipps für eine bessere Verbindung',
    excerpt: 'Wenn das Internet zuhause oder im Büro zu langsam ist, liegt es oft nicht am Anbieter. Diese 7 Tipps helfen sofort.',
    date: '2. Januar 2026',
    readTime: '6 Min.',
  },
  {
    category: 'Software',
    categoryColor: 'bg-warning/20 text-warning',
    title: 'Windows 11: Lohnt sich das Upgrade wirklich?',
    excerpt: 'Windows 11 ist seit 2021 verfügbar. Wir erklären, wann ein Upgrade sinnvoll ist – und wann Sie besser bei Windows 10 bleiben.',
    date: '28. Dezember 2025',
    readTime: '7 Min.',
  },
  {
    category: 'Sicherheit',
    categoryColor: 'bg-danger/20 text-danger',
    title: 'Sichere Passwörter erstellen und verwalten',
    excerpt: 'Wie erstellt man sichere Passwörter und wie verwaltet man sie? Wir zeigen Ihnen die besten Methoden – inklusive Tipp für den Hasi Safe Stick.',
    date: '20. Dezember 2025',
    readTime: '5 Min.',
  },
  {
    category: 'Hardware',
    categoryColor: 'bg-accent/20 text-accent',
    title: 'PC langsam? Diese Ursachen sind häufig schuld',
    excerpt: 'Ein langsamer Computer nervt. Wir zeigen Ihnen die häufigsten Ursachen und wie Sie das Problem selbst lösen – oder wann Sie einen Experten brauchen.',
    date: '15. Dezember 2025',
    readTime: '5 Min.',
  },
]

const categories = ['Alle', 'Sicherheit', 'Hardware', 'Software', 'Netzwerk', 'Cloud']

export default function ITRatgeber() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #111827 100%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="section-label">IT-RATGEBER</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">
            IT-Tipps & <span className="gradient-text">Wissen</span> für Sie
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Verständliche Erklärungen rund um PC, Internet, Sicherheit und mehr – direkt von Ihrem IT-Experten.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#1f2937] border-b border-gray-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  cat === 'Alle'
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="card-hover highlight-card cursor-pointer"
              >
                <div className="img-placeholder rounded-xl mb-5" style={{ paddingBottom: '55%', position: 'relative' }}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {article.category === 'Sicherheit' ? '🛡️' : article.category === 'Hardware' ? '💻' : article.category === 'Netzwerk' ? '🌐' : '⚙️'}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs">{article.readTime} Lesezeit</span>
                </div>
                <h2 className="text-white font-bold text-lg mb-2 leading-snug">{article.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{article.date}</span>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1">
                    Lesen <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Haben Sie eine IT-Frage?</h2>
          <p className="text-gray-400 mb-8">Kommen Sie vorbei oder rufen Sie an – wir helfen persönlich!</p>
          <Link to="/kontakt" className="btn-primary px-10 py-4 text-base inline-flex items-center gap-2">
            Frage stellen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
