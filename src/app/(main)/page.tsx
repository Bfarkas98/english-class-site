import Link from "next/link";

const cards = [
  {
    href: "/lessons",
    label: "Lessons",
    desc: "Review notes, vocabulary lists, and homework from each session.",
    accent: "var(--color-lessons)",
    iconBg: "#eef3e8",
    iconColor: "#4a7028",
    icon: "📖",
  },
  {
    href: "/calendar",
    label: "Calendar",
    desc: "Check upcoming lesson times and plan ahead for each week.",
    accent: "var(--color-calendar)",
    iconBg: "#e8eef8",
    iconColor: "#2a4e88",
    icon: "📅",
  },
  {
    href: "/questions",
    label: "Questions",
    desc: "Send your questions directly to Beni between lessons.",
    accent: "var(--color-questions)",
    iconBg: "#f8eee8",
    iconColor: "#884028",
    icon: "💬",
  },
];

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="home-hero">
        <div className="chalkboard-header__lines" aria-hidden="true" />
        <div className="home-hero__gold-bar" aria-hidden="true" />
        <span className="home-hero__emoji" aria-hidden="true">
          📚
        </span>

        <div className="home-hero__content">
          <span className="home-hero__badge">English Class</span>
          <h1 className="home-hero__title">
            Welcome to class with{" "}
            <em className="chalkboard-header__accent">Beni</em>
          </h1>
          <p className="home-hero__text">
            Your lesson notes, vocabulary, schedule, and a direct line to ask
            questions — all in one place.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(({ href, label, desc, accent, iconBg, iconColor, icon }) => (
          <Link key={href} href={href} className="group block">
            <article className="feature-card hover:-translate-y-0.5 hover:border-gray-300">
              <div
                className="feature-card__stripe"
                style={{ background: accent }}
              />
              <div
                className="feature-card__icon"
                style={{ background: iconBg, color: iconColor }}
              >
                {icon}
              </div>
              <h2 className="feature-card__title">{label}</h2>
              <p className="feature-card__desc">{desc}</p>
              <span className="feature-card__arrow group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </article>
          </Link>
        ))}
      </div>

      <div className="home-strip">
        <span>English Class with Beni — always learning</span>
        <div className="home-strip__dots" aria-hidden="true">
          <span style={{ background: "var(--color-lessons)" }} />
          <span style={{ background: "var(--color-calendar)" }} />
          <span style={{ background: "var(--color-questions)" }} />
        </div>
      </div>
    </div>
  );
}
