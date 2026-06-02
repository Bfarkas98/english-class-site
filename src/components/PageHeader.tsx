type PageHeaderProps = {
  badge: string;
  title: string;
  titleAccent?: string;
  description?: string;
  accentColor?: string;
  badgeBg?: string;
  badgeBorder?: string;
};

export default function PageHeader({
  badge,
  title,
  titleAccent,
  description,
  accentColor = "rgba(245, 230, 163, 0.6)",
  badgeBg = "rgba(245, 230, 163, 0.15)",
  badgeBorder = "rgba(245, 230, 163, 0.3)",
}: PageHeaderProps) {
  return (
    <header className="chalkboard-header">
      <div className="chalkboard-header__lines" aria-hidden="true" />
      <div className="chalkboard-header__gold-bar" aria-hidden="true" />

      <div className="chalkboard-header__content">
        <span
          className="chalkboard-header__badge"
          style={{
            color: accentColor,
            background: badgeBg,
            borderColor: badgeBorder,
          }}
        >
          {badge}
        </span>

        <h1 className="chalkboard-header__title">
          {titleAccent ? (
            <>
              {title}{" "}
              <em className="chalkboard-header__accent">{titleAccent}</em>
            </>
          ) : (
            title
          )}
        </h1>

        {description && (
          <p className="chalkboard-header__description">{description}</p>
        )}
      </div>
    </header>
  );
}
