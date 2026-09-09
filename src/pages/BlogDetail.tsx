import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router";
import { articles } from "@/data/articles";

// ─── Table of contents ────────────────────────────────────────────────────────
function TableOfContents({ headings }: { headings: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="eyebrow" style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.6rem" }}>DAFTAR ISI</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
        {headings.map((h, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.5,
              color: active === i ? "var(--navy)" : "var(--muted)",
              padding: "0.375rem 0 0.375rem 0.875rem",
              borderLeft: active === i ? "2px solid var(--gold)" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
              fontWeight: active === i ? 600 : 400,
            }}
          >
            {h}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Blog detail page ─────────────────────────────────────────────────────────
export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);
  const fallbackRelated = articles.filter((a) => a.slug !== slug).slice(0, 2);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  const headings = article.content?.filter((s) => s.type === "heading").map((s) => s.text) ?? [];

  return (
    <main style={{ background: "var(--ivory)", paddingTop: "72px" }}>
      {/* ── Article header ── */}
      <div style={{ background: "var(--navy)", padding: "5rem 0 4rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem" }}>
            <Link to="/" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Beranda</Link>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>/</span>
            <Link to="/blog" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</Link>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)" }}>{article.category}</span>
          </nav>

          <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>{article.category.toUpperCase()}</span>

          <h1
            className="font-display"
            style={{ fontSize: "clamp(1.625rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, color: "white", letterSpacing: "-0.02em", maxWidth: "760px", marginBottom: "2rem" }}
          >
            {article.title}
          </h1>

          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)", maxWidth: "620px", marginBottom: "2.5rem" }}>
            {article.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.42)" }}>ANBI Consulting</span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.42)" }}>{article.date}</span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.42)" }}>{article.readTime} baca</span>
          </div>
        </div>
      </div>

      {/* ── Featured image ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ height: "460px", overflow: "hidden", background: "#0a1a26" }}>
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.88)", display: "block" }}
          />
        </div>
      </div>

      {/* ── Article body + sidebar ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 5vw 6rem" }}>
        <div className="article-layout">
          {/* Main content */}
          <article style={{ maxWidth: "760px" }}>
            {article.content ? (
              article.content.map((section, i) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-display"
                      style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3, letterSpacing: "-0.01em", marginTop: "3rem", marginBottom: "1rem" }}
                    >
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === "callout") {
                  return (
                    <div
                      key={i}
                      style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem", margin: "2rem 0", background: "rgba(182,154,98,0.06)", padding: "1.5rem 1.5rem 1.5rem 1.75rem" }}
                    >
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--navy)", fontWeight: 500 }}>
                        {section.text}
                      </p>
                    </div>
                  );
                }
                return (
                  <p
                    key={i}
                    style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--dark)", marginBottom: "1.5rem" }}
                  >
                    {section.text}
                  </p>
                );
              })
            ) : (
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--muted)" }}>
                Konten artikel ini sedang dalam proses penulisan. Hubungi tim ANBI untuk informasi lebih lanjut.
              </p>
            )}

            {/* Share / back */}
            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <Link
                to="/blog"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "var(--navy)", textDecoration: "none", letterSpacing: "0.04em" }}
              >
                ← Kembali ke Blog
              </Link>
              <span className="eyebrow" style={{ color: "var(--muted)" }}>{article.category}</span>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* ToC */}
            {headings.length > 0 && (
              <div style={{ marginBottom: "3rem" }}>
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div style={{ marginBottom: "3rem" }}>
                <div className="eyebrow" style={{ color: "var(--muted)", marginBottom: "1rem", fontSize: "0.6rem" }}>ARTIKEL TERKAIT</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/blog/${rel.slug}`}
                      style={{ textDecoration: "none", padding: "1.125rem 0", borderBottom: "1px solid var(--border-light)", display: "block" }}
                    >
                      <span className="eyebrow" style={{ display: "block", marginBottom: "0.375rem", fontSize: "0.55rem" }}>{rel.category.toUpperCase()}</span>
                      <span className="font-display" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--navy)", lineHeight: 1.4, display: "block", marginBottom: "0.375rem" }}>
                        {rel.title}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{rel.readTime} baca</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA sidebar */}
            <div style={{ background: "var(--navy)", padding: "2rem" }}>
              <div className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>BUTUH BANTUAN?</div>
              <p className="font-display" style={{ fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.4, marginBottom: "1.25rem" }}>
                Diskusikan kebutuhan bisnis Anda dengan tim ANBI.
              </p>
              <a
                href="mailto:hello@anbi-consulting.com"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--gold)", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.07em", padding: "0.875rem 1.25rem", textDecoration: "none", textTransform: "uppercase" }}
              >
                <span>Diskusikan Sekarang</span>
                <span>→</span>
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Related articles full row ── */}
      {relatedArticles.length > 0 && (
        <div style={{ background: "white", padding: "6rem 0", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "3rem" }}>
              <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.01em" }}>Artikel Lainnya</h2>
              <Link to="/blog" style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: "var(--navy)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Semua Artikel
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="related-grid">
              {relatedArticles.map((rel) => {
                return (
                  <Link key={rel.slug} to={`/blog/${rel.slug}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "140px 1fr", gap: "1.5rem", alignItems: "start" }}>
                    <div style={{ height: "100px", overflow: "hidden", background: "#0a1a26" }}>
                      <img src={rel.image} alt={rel.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.88)" }} />
                    </div>
                    <div>
                      <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.55rem" }}>{rel.category.toUpperCase()}</span>
                      <h3 className="font-display" style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4, marginBottom: "0.5rem" }}>{rel.title}</h3>
                      <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{rel.readTime} baca</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
