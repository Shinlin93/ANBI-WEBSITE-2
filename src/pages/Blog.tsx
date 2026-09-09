import { useState } from "react";
import { Link } from "react-router";
import { articles, categories, getArticlesByCategory, type Article } from "@/data/articles";

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blog/${article.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        background: "var(--ivory)",
        borderBottom: "1px solid var(--border-light)",
        height: "100%",
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", flexShrink: 0, background: "#0a1a26", height: large ? "320px" : "220px" }}>
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: "brightness(0.92)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: large ? "2rem 2rem 2rem" : "1.5rem 0 0", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: "0.875rem" }}>
            {article.category.toUpperCase()}
          </span>
          <h3
            className="font-display"
            style={{
              fontSize: large ? "clamp(1.125rem, 2vw, 1.5rem)" : "1rem",
              fontWeight: 700,
              lineHeight: 1.35,
              color: "var(--navy)",
              letterSpacing: "-0.01em",
              marginBottom: "0.875rem",
              transition: "color 0.2s",
              color: hovered ? "var(--navy-mid)" : "var(--navy)",
            }}
          >
            {article.title}
          </h3>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {article.excerpt}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{article.date}</span>
            <span style={{ fontSize: "0.75rem", color: "var(--muted)", opacity: 0.6 }}>{article.readTime} baca</span>
          </div>
          {/* Arrow purpose: signals "navigate into this article" — directional link indicator */}
          <span
            style={{
              fontSize: "1rem",
              color: "var(--gold)",
              transition: "transform 0.25s ease",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Blog page ────────────────────────────────────────────────────────────────
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filtered = getArticlesByCategory(activeCategory);
  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = featured ? filtered.filter((a) => a.slug !== featured.slug) : filtered;

  return (
    <main style={{ background: "var(--ivory)", paddingTop: "72px" }}>
      {/* ── Hero header ── */}
      <div style={{ background: "var(--navy)", padding: "6rem 0 5rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1.5rem" }}>ANBI INSIGHTS</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.08, color: "white", letterSpacing: "-0.025em", maxWidth: "700px", marginBottom: "1.5rem" }}
          >
            Insight untuk Membantu Bisnis Anda Bertumbuh.
          </h1>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)", maxWidth: "560px" }}>
            Panduan, informasi, dan perspektif seputar legalitas, perizinan, pajak, kepatuhan, dan pengembangan bisnis.
          </p>
        </div>
      </div>

      {/* ── Category filter ── */}
      <div style={{ borderBottom: "1px solid var(--border-light)", background: "var(--ivory)", position: "sticky", top: "72px", zIndex: 10 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
          <nav
            aria-label="Filter kategori artikel"
            style={{ display: "flex", gap: "0", overflowX: "auto", scrollbarWidth: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeCategory === cat ? "2px solid var(--gold)" : "2px solid transparent",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: activeCategory === cat ? 700 : 500,
                  letterSpacing: "0.04em",
                  color: activeCategory === cat ? "var(--navy)" : "var(--muted)",
                  padding: "1.125rem 1.25rem",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 5vw 8rem" }}>

        {/* Empty state (R-27) */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "6rem 0" }}>
            <div className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: "var(--navy)", marginBottom: "1rem" }}>Belum ada artikel</div>
            <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>Belum ada artikel dalam kategori ini. Coba kategori lain.</p>
            <button
              onClick={() => setActiveCategory("Semua")}
              style={{ background: "var(--navy)", color: "var(--ivory)", border: "none", cursor: "pointer", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "0.8125rem", letterSpacing: "0.07em", padding: "0.875rem 2rem", textTransform: "uppercase" }}
            >
              Lihat Semua Artikel
            </button>
          </div>
        )}

        {filtered.length > 0 && (
          <>
            {/* ── Featured article ── */}
            {featured && (
              <div style={{ marginBottom: "5rem" }}>
                <div className="eyebrow" style={{ marginBottom: "2rem", color: "var(--muted)" }}>ARTIKEL PILIHAN</div>
                <Link
                  to={`/blog/${featured.slug}`}
                  style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "4rem", alignItems: "center", background: "white", padding: "0" }}
                  className="featured-article"
                >
                  <div style={{ overflow: "hidden", height: "460px", background: "#0a1a26" }}>
                    <img
                      src={featured.image}
                      alt={featured.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)", display: "block", transition: "transform 0.5s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div style={{ padding: "3rem 3rem 3rem 0" }}>
                    <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>{featured.category.toUpperCase()}</span>
                    <h2 className="font-display" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.2, color: "var(--navy)", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2rem" }}>
                      {featured.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "1.25rem" }}>
                        <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>{featured.date}</span>
                        <span style={{ fontSize: "0.8125rem", color: "var(--muted)", opacity: 0.6 }}>{featured.readTime} baca</span>
                      </div>
                      <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.8125rem", color: "var(--navy)", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid var(--gold)", paddingBottom: "2px" }}>
                        Baca Artikel
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ── Latest articles ── */}
            {rest.length > 0 && (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem" }}>
                  <h2 className="font-display" style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.01em" }}>Artikel Terbaru</h2>
                  <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>{rest.length} artikel</span>
                </div>

                {/* Large + 2 small row */}
                {rest.length >= 1 && (
                  <div className="blog-lead-row" style={{ marginBottom: "2rem" }}>
                    <ArticleCard article={rest[0]} large />
                    {rest.length >= 2 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {rest.slice(1, 3).map((a) => (
                          <ArticleCard key={a.slug} article={a} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3-column grid */}
                {rest.length > 3 && (
                  <div className="blog-grid">
                    {rest.slice(3).map((a) => (
                      <ArticleCard key={a.slug} article={a} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Contact CTA band ── */}
      <div style={{ background: "var(--navy)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="font-display" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "0.75rem" }}>
              Perlu bantuan untuk bisnis Anda?
            </div>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
              Diskusikan kebutuhan bisnis Anda dengan tim ANBI.
            </p>
          </div>
          <a
            href="mailto:hello@anbi-consulting.com"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--gold)", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", padding: "1rem 1.75rem", textDecoration: "none", textTransform: "uppercase", flexShrink: 0 }}
          >
            Diskusikan Kebutuhan Anda
          </a>
        </div>
      </div>
    </main>
  );
}
