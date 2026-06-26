export function MeasuredTag({ measured }: { measured: boolean }) {
  return (
    <span className={`tag ${measured ? "measured" : "illus"}`}>
      {measured ? "● mesuré" : "○ estimation"}
    </span>
  );
}

export function Sources({ items }: { items: { title: string; url: string }[] }) {
  if (!items?.length) return null;
  return (
    <div style={{ marginTop: "1.4rem", fontSize: "0.74rem", color: "var(--muted)" }}>
      <span style={{ fontWeight: 700, letterSpacing: "0.08em" }}>SOURCES · </span>
      {items.slice(0, 6).map((s, i) => (
        <span key={i}>
          {i > 0 && " · "}
          <a href={s.url} target="_blank" rel="noreferrer" style={{ color: "var(--clay-deep)" }}>
            {s.title}
          </a>
        </span>
      ))}
    </div>
  );
}
