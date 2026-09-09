import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import logoNavy from "@/imports/logo-navy.png";
import logoWhite from "@/imports/logo-white.png";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const forceSolidNav = !isHome || scrolled;

  function handleAnchorNav(hash: string) {
    if (isHome) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    setMenuOpen(false);
  }

  const navTextColor = forceSolidNav ? "var(--navy)" : "rgba(255,255,255,0.85)";
  const mutedTextColor = forceSolidNav ? "var(--muted)" : "rgba(255,255,255,0.55)";
  const ctaBg = forceSolidNav ? "var(--navy)" : "var(--gold)";
  const ctaColor = forceSolidNav ? "var(--ivory)" : "var(--navy)";

  const anchorLinks = [
    { label: "About", hash: "about" },
    { label: "Services", hash: "services" },
    { label: "Industries", hash: "industries" },
    { label: "Why ANBI", hash: "why-anbi" },
    { label: "Process", hash: "process" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        background: forceSolidNav ? "var(--ivory)" : "transparent",
        borderBottom: forceSolidNav
          ? "1px solid var(--border-light)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: forceSolidNav ? "0 1px 20px rgba(8,28,44,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link to="/" aria-label="ANBI Consulting — beranda">
            <img
              src={forceSolidNav ? logoNavy : logoWhite}
              alt="ANBI Consulting"
              style={{ height: "34px", width: "auto", objectFit: "contain", display: "block" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Navigasi utama"
            style={{ display: "flex", alignItems: "center", gap: "0" }}
            className="desktop-nav"
          >
            {anchorLinks.map((item) => (
              <button
                key={item.hash}
                onClick={() => handleAnchorNav(item.hash)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  color: navTextColor,
                  padding: "0.5rem 1rem",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: location.pathname.startsWith("/blog") ? 700 : 500,
                letterSpacing: "0.03em",
                color: location.pathname.startsWith("/blog") ? "var(--gold)" : navTextColor,
                textDecoration: "none",
                padding: "0.5rem 1rem",
                transition: "opacity 0.2s",
                borderBottom: location.pathname.startsWith("/blog") ? "2px solid var(--gold)" : "none",
              }}
            >
              Blog
            </Link>

            <div style={{ width: "1px", height: "18px", background: "rgba(128,128,128,0.25)", margin: "0 0.75rem" }} />

            <button
              onClick={() => handleAnchorNav("contact")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: mutedTextColor,
                padding: "0.5rem 0.75rem",
              }}
            >
              Contact
            </button>

            <button
              onClick={() => handleAnchorNav("contact")}
              style={{
                background: ctaBg,
                color: ctaColor,
                border: "none",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                padding: "0.625rem 1.25rem",
                transition: "opacity 0.2s",
                whiteSpace: "nowrap",
                marginLeft: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              DISKUSIKAN BISNIS ANDA
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="mobile-hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: forceSolidNav ? "var(--navy)" : "white",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        role="dialog"
        aria-label="Menu navigasi mobile"
        aria-hidden={!menuOpen}
        style={{
          background: "var(--navy)",
          overflow: "hidden",
          maxHeight: menuOpen ? "520px" : "0",
          transition: "max-height 0.4s ease",
        }}
      >
        <nav aria-label="Navigasi mobile" style={{ padding: "1.5rem 2rem 2.5rem" }}>
          {anchorLinks.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleAnchorNav(item.hash)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                padding: "0.875rem 0",
              }}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "Manrope, sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 500,
              color: "var(--gold)",
              textDecoration: "none",
              padding: "0.875rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            Blog
          </Link>
          <button
            onClick={() => handleAnchorNav("contact")}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              cursor: "pointer",
              fontFamily: "Manrope, sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              padding: "0.875rem 0",
            }}
          >
            Contact
          </button>
          <button
            onClick={() => handleAnchorNav("contact")}
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              background: "var(--gold)",
              color: "var(--navy)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "0.8125rem",
              letterSpacing: "0.07em",
              padding: "0.875rem 2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            DISKUSIKAN BISNIS ANDA
          </button>
        </nav>
      </div>
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  const navigate = useNavigate();

  function goAnchor(hash: string) {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  return (
    <footer
      style={{
        background: "#050E16",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "5rem 0 3rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Top grid */}
        <div className="footer-grid" style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Brand */}
          <div>
            <img
              src={logoWhite}
              alt="ANBI Consulting"
              style={{ height: "32px", objectFit: "contain", marginBottom: "1.5rem", opacity: 0.85 }}
            />
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.32)",
                maxWidth: "260px",
                marginBottom: "1.5rem",
              }}
            >
              PT Anara Business International. Mitra bisnis untuk legalitas, perizinan, kepatuhan, dan administrasi perusahaan di Indonesia.
            </p>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}>
              Sidoarjo, Jawa Timur, Indonesia
            </div>
          </div>

          {/* Layanan */}
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.28)", marginBottom: "1.5rem", fontSize: "0.6rem" }}>
              LAYANAN
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {["Business Establishment", "Business Licensing", "Accounting & Tax", "HR & Payroll", "Expatriate Services", "Audit & Compliance"].map((s) => (
                <button
                  key={s}
                  onClick={() => goAnchor("services")}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", fontFamily: "Plus Jakarta Sans, sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Perusahaan */}
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.28)", marginBottom: "1.5rem", fontSize: "0.6rem" }}>
              PERUSAHAAN
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Tentang Kami", action: () => goAnchor("about") },
                { label: "Mengapa ANBI", action: () => goAnchor("why-anbi") },
                { label: "Proses Kerja", action: () => goAnchor("process") },
                { label: "Industri", action: () => goAnchor("industries") },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", fontFamily: "Plus Jakarta Sans, sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/blog"
                style={{ fontSize: "0.875rem", color: "var(--gold)", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.28)", marginBottom: "1.5rem", fontSize: "0.6rem" }}>
              KONTAK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href="mailto:hello@anbi-consulting.com"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                hello@anbi-consulting.com
              </a>
              <a
                href="https://wa.me/6281234567890"
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.03em" }}>
            2026 PT Anara Business International. Seluruh hak cipta dilindungi.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Instagram", "LinkedIn", "WhatsApp"].map((s) => (
              <a
                key={s}
                href="https://wa.me/6281234567890"
                style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.28)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
