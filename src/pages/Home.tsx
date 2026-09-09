import { useState } from "react";
import { Link } from "react-router";
import heroImg from "@/imports/hero-surabaya.jpg";
import officeImg from "@/imports/about-office.jpg";
import footerImg from "@/imports/footer-suramadu.jpg";
import { articles } from "@/data/articles";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--navy)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      {/* Left */}
      <div
        className="hero-left"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "10rem 4rem 6rem 5vw", zIndex: 2 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ display: "block", width: "28px", height: "1px", background: "var(--gold)" }} />
          <span className="eyebrow">ANBI CONSULTING</span>
        </div>

        <h1
          className="font-display"
          style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, color: "white", marginBottom: "2rem", letterSpacing: "-0.02em" }}
        >
          Build Your
          <br />
          Business on a
          <br />
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>Stronger</em>
          <br />
          Foundation.
        </h1>

        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.58)", maxWidth: "380px", marginBottom: "3rem" }}>
          Pendampingan legalitas, perizinan, kepatuhan, dan kebutuhan bisnis dalam satu partner yang memahami perjalanan usaha Anda.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", background: "var(--gold)", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", padding: "1rem 1.75rem", textDecoration: "none" }}
          >
            DISKUSIKAN BISNIS ANDA
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.7)", fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.08em", padding: "1rem 1.75rem", textDecoration: "none" }}
          >
            Lihat Layanan
          </a>
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.09)", display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
          <span className="font-display" style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>01</span>
          <div>
            <div className="font-display" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.38)", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              BUSINESS CONSULTING
            </div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>
              LEGALITY · COMPLIANCE · GROWTH
            </div>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="hero-right" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={heroImg}
          alt="Surabaya cityscape at night with light trails"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.5) contrast(1.08)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--navy) 0%, transparent 35%)" }} />
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "5vw", display: "flex", alignItems: "center", gap: "0.75rem", zIndex: 3 }}>
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.16em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", fontFamily: "Manrope, sans-serif" }}>SCROLL</span>
      </div>
    </section>
  );
}

// ─── Service Band ─────────────────────────────────────────────────────────────
function ServiceBand() {
  const items = ["LEGALITAS", "PERIZINAN", "PERPAJAKAN", "HR & PAYROLL", "KEPATUHAN", "KONSULTASI BISNIS"];
  return (
    <div style={{ background: "var(--navy-mid)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "1.25rem 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0" }}>
        {items.map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center" }}>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.42)", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
              {item}
            </span>
            {i < items.length - 1 && (
              <span style={{ margin: "0 1.5rem", width: "3px", height: "3px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Positioning ──────────────────────────────────────────────────────────────
function Positioning() {
  return (
    <section id="about" style={{ background: "var(--ivory)", padding: "8rem 0 7rem" }}>
      <div className="two-col" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        {/* Left */}
        <div>
          <span className="gold-line" />
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}
          >
            Your business deserves more than paperwork.
          </h2>
        </div>

        {/* Right */}
        <div style={{ paddingBottom: "0.5rem" }}>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--dark)", marginBottom: "1.75rem" }}>
            ANBI membantu bisnis membangun fondasi legal dan administratif yang siap mendukung pertumbuhan. Kami bukan sekadar penyedia jasa, kami adalah partner yang memahami bahwa setiap keputusan bisnis memiliki konsekuensi hukum dan administratif.
          </p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--muted)", marginBottom: "2.5rem" }}>
            Dari pendirian PT hingga kepatuhan pajak tahunan, dari pengurusan izin hingga administrasi SDM dalam satu tempat, dengan standar profesional yang konsisten.
          </p>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textDecoration: "none", borderBottom: "2px solid var(--gold)", paddingBottom: "0.25rem", textTransform: "uppercase" }}
          >
            Lihat Layanan Kami
          </a>
        </div>
      </div>

      {/* Office image */}
      <div style={{ maxWidth: "1400px", margin: "5rem auto 0", padding: "0 5vw" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={officeImg}
            alt="Ruang rapat premium dengan pemandangan kota"
            style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "center 40%", display: "block" }}
          />
          <div style={{ position: "absolute", bottom: "2rem", right: "2.5rem", background: "var(--navy)", padding: "1.25rem 1.75rem" }}>
            <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: "0.25rem" }}>TENTANG KAMI</div>
            <div className="font-display" style={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}>PT Anara Business International</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", marginTop: "0.25rem" }}>Sidoarjo, Jawa Timur</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { num: "01", name: "Business Establishment", desc: "Pendirian PT, CV, Firma, Koperasi, dan Yayasan dengan proses yang terstruktur." },
  { num: "02", name: "Business Licensing", desc: "Pengurusan NIB, izin usaha sektoral, dan perizinan daerah maupun nasional." },
  { num: "03", name: "Accounting & Tax", desc: "Pembukuan, laporan keuangan, SPT, dan perencanaan pajak untuk efisiensi bisnis." },
  { num: "04", name: "HR & Payroll", desc: "Pengelolaan administrasi SDM, penggajian, BPJS, dan perjanjian kerja." },
  { num: "05", name: "Expatriate Services", desc: "KITAS, IMTA, dan kebutuhan administratif tenaga kerja asing di Indonesia." },
  { num: "06", name: "Audit & Compliance", desc: "Audit internal, kepatuhan regulasi, dan kesiapan menghadapi pemeriksaan." },
  { num: "07", name: "Business Consulting", desc: "Strategi pertumbuhan, restrukturisasi, dan advisory untuk keputusan bisnis kritis." },
  { num: "08", name: "Legal & Documentation", desc: "Penyusunan kontrak, perjanjian, akta, dan dokumen legal perusahaan." },
];

function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: "var(--ivory)", padding: "7rem 0 8rem", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div className="two-col" style={{ marginBottom: "5rem", alignItems: "end" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>LAYANAN</span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}>
              Everything your business needs to move forward.
            </h2>
          </div>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--muted)", alignSelf: "end" }}>
            Satu mitra untuk seluruh kebutuhan legal, administratif, dan bisnis Anda. Dari hari pertama pendirian hingga operasional harian yang kompleks.
          </p>
        </div>

        <div>
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="service-row"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr auto", gap: "2rem", alignItems: "center", padding: "2rem 0" }}
            >
              <span
                className="font-display"
                style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: hovered === i ? "var(--gold)" : "var(--muted)", transition: "color 0.25s" }}
              >
                {svc.num}
              </span>
              <span className="font-display" style={{ fontSize: "clamp(1rem, 1.75vw, 1.375rem)", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.01em" }}>
                {svc.name}
              </span>
              <span className="service-desc" style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--muted)" }}>
                {svc.desc}
              </span>
              {/* Arrow purpose: signals "navigate into this service" — directional navigation indicator */}
              <span
                className="service-arrow"
                style={{ fontSize: "1.125rem", color: hovered === i ? "var(--gold)" : "rgba(104,114,124,0.4)", transition: "color 0.25s, transform 0.25s", display: "flex", alignItems: "center" }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Journey ──────────────────────────────────────────────────────────────────
function Journey() {
  const steps = ["START", "STRUCTURE", "COMPLY", "GROW"];
  return (
    <section style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: "520px" }}>
        <img
          src={footerImg}
          alt="Jembatan Suramadu saat senja, simbol koneksi dan pertumbuhan bisnis"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.3) saturate(0.65)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,28,44,0.9) 0%, rgba(8,28,44,0.4) 55%, rgba(8,28,44,0.65) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5vw", maxWidth: "1400px", margin: "0 auto", left: "5vw", right: "5vw" }}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem" }}>PERJALANAN BISNIS</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "3.5rem", maxWidth: "500px" }}
          >
            From setting up your business to scaling it.
          </h2>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0" }}>
            {steps.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <div className="font-display" style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--gold)", marginBottom: "0.375rem" }}>0{i + 1}</div>
                  <div className="font-display" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 800, color: "white", letterSpacing: "0.06em", textTransform: "uppercase" }}>{step}</div>
                </div>
                {i < steps.length - 1 && (
                  <span style={{ margin: "0 2rem", color: "var(--gold)", fontSize: "1.125rem", opacity: 0.5 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  const matrix = [
    { stage: "STARTING", items: ["UMKM", "STARTUP", "FREELANCER"] },
    { stage: "GROWING", items: ["CV", "FIRMA", "PT BARU"] },
    { stage: "ESTABLISHED", items: ["PERUSAHAAN", "MANUFAKTUR", "DISTRIBUSI"] },
    { stage: "SPECIALIZED", items: ["YAYASAN", "KOPERASI", "EKSPATRIAT"] },
  ];

  return (
    <section id="industries" style={{ background: "var(--ivory)", padding: "8rem 0", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ marginBottom: "5rem", maxWidth: "620px" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>INDUSTRI</span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}>
            Built for businesses at every stage.
          </h2>
        </div>

        <div className="industry-grid" style={{ borderTop: "1px solid var(--border-light)" }}>
          {matrix.map((col, ci) => (
            <div
              key={col.stage}
              style={{
                borderRight: ci < matrix.length - 1 ? "1px solid var(--border-light)" : "none",
                padding: "3rem 2.5rem 3rem 0",
                paddingLeft: ci > 0 ? "2.5rem" : "0",
              }}
            >
              <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: "2rem", fontSize: "0.6rem" }}>{col.stage}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {col.items.map((item) => (
                  <div key={item} className="font-display" style={{ fontSize: "clamp(1.25rem, 2vw, 1.875rem)", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why ANBI ─────────────────────────────────────────────────────────────────
function WhyAnbi() {
  const points = [
    { num: "01", title: "ONE PARTNER", desc: "Satu tim untuk semua kebutuhan bisnis Anda. Tidak perlu koordinasi ke berbagai vendor." },
    { num: "02", title: "CLEAR PROCESS", desc: "Setiap tahap pekerjaan terdokumentasi dan dapat dilacak secara berkala." },
    { num: "03", title: "TRANSPARENT FEES", desc: "Biaya diinformasikan di awal tanpa biaya tersembunyi di akhir." },
    { num: "04", title: "PERSONAL GUIDANCE", desc: "Anda memiliki contact person yang memahami situasi bisnis Anda secara spesifik." },
    { num: "05", title: "SPECIALIST NETWORK", desc: "Didukung jaringan notaris, akuntan, dan konsultan hukum berpengalaman." },
    { num: "06", title: "COMPLIANCE FIRST", desc: "Setiap rekomendasi mengutamakan kepatuhan regulasi, bukan sekadar kecepatan." },
  ];

  return (
    <section id="why-anbi" style={{ background: "var(--navy)", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div className="two-col" style={{ alignItems: "start" }}>
          {/* Left — sticky label */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1.5rem" }}>MENGAPA ANBI</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "white", letterSpacing: "-0.02em" }}>
              Why businesses choose ANBI.
            </h2>
            <div style={{ marginTop: "3rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--gold)", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", padding: "1rem 1.75rem", textDecoration: "none", textTransform: "uppercase" }}
              >
                Mulai Konsultasi
              </a>
            </div>
          </div>

          {/* Right — manifesto */}
          <div>
            {points.map((pt, i) => (
              <div key={pt.num} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "2rem", padding: "2.5rem 0", borderBottom: i < points.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <span className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: "rgba(182,154,98,0.28)", lineHeight: 1, paddingTop: "0.25rem" }}>{pt.num}</span>
                <div>
                  <div className="font-display" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--gold)", marginBottom: "0.75rem" }}>{pt.title}</div>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)" }}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { num: "01", label: "DISCOVER", desc: "Konsultasi awal untuk memahami kebutuhan, kondisi, dan tujuan bisnis Anda." },
    { num: "02", label: "PLAN", desc: "Menentukan solusi yang tepat, ruang lingkup pekerjaan, dan estimasi waktu serta biaya." },
    { num: "03", label: "EXECUTE", desc: "Mengurus seluruh proses secara terstruktur dengan update berkala kepada Anda." },
    { num: "04", label: "DELIVER", desc: "Serah terima dokumen dan pendampingan untuk memastikan semua berjalan dengan baik." },
  ];

  return (
    <section id="process" style={{ background: "var(--ivory)", padding: "8rem 0", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ marginBottom: "5rem", textAlign: "center" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>PROSES KERJA</span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}>
            Simple process.{" "}
            <em style={{ fontStyle: "normal", color: "var(--gold)" }}>Serious execution.</em>
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: "relative" }}>
              {i < steps.length - 1 && (
                <div className="process-connector" style={{ position: "absolute", top: "1.25rem", left: "calc(100% - 1rem)", width: "calc(100% - 2rem)", height: "1px", background: "var(--border-light)", zIndex: 0 }} />
              )}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "2.5rem", height: "2.5rem", border: "1px solid var(--border-gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", background: "var(--ivory)" }}>
                  <span className="font-display" style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.05em" }}>{step.num}</span>
                </div>
                <div className="font-display" style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--navy)", marginBottom: "1rem", textTransform: "uppercase" }}>{step.label}</div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--muted)" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust ────────────────────────────────────────────────────────────────────
function Trust() {
  const pillars = ["Clear Agreement", "Transparent Scope", "Progress Updates", "Documented Process", "Professional Network", "Compliance Focus"];

  return (
    <section style={{ background: "var(--navy-mid)", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div className="two-col" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>KOMITMEN KAMI</span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 800, lineHeight: 1.2, color: "white", letterSpacing: "-0.02em" }}>
              Built around clarity and accountability.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {pillars.map((p, i) => (
              <div
                key={p}
                style={{
                  padding: "1.75rem 2rem",
                  borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                {/* Gold square dot as list marker — purpose: establishes consistent visual rhythm within the grid */}
                <span style={{ width: "4px", height: "4px", background: "var(--gold)", flexShrink: 0, display: "block" }} />
                <span className="font-display" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.72)", letterSpacing: "0.02em" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Insights (homepage section) ──────────────────────────────────────────────
function InsightsSection() {
  const featured = articles.find((a) => a.featured);
  const recent = articles.filter((a) => !a.featured).slice(0, 2);

  return (
    <section id="insights" style={{ background: "var(--ivory)", padding: "8rem 0", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>INSIGHTS</span>
            <h2 className="font-display" style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em", maxWidth: "500px" }}>
              Perspektif untuk Menjalankan Bisnis dengan Lebih Baik.
            </h2>
          </div>
          <Link
            to="/blog"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "0.8125rem", letterSpacing: "0.07em", color: "var(--navy)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px", textTransform: "uppercase", whiteSpace: "nowrap" }}
          >
            Lihat Semua Insight
          </Link>
        </div>

        <div className="insights-grid" style={{ background: "var(--border-light)", gap: "2px", display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          {/* Featured */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              style={{ textDecoration: "none", background: "var(--navy)", padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "360px" }}
            >
              <div>
                <span className="eyebrow" style={{ display: "inline-block", border: "1px solid rgba(182,154,98,0.35)", padding: "0.25rem 0.75rem", marginBottom: "2rem" }}>
                  {featured.category.toUpperCase()}
                </span>
                <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 700, lineHeight: 1.3, color: "white", letterSpacing: "-0.01em", maxWidth: "480px" }}>
                  {featured.title}
                </h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.09)", paddingTop: "1.5rem", marginTop: "2rem" }}>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{featured.date}</span>
                {/* Arrow purpose: signals "navigate into this article" — directional link indicator */}
                <span style={{ color: "var(--gold)", fontSize: "1.125rem" }}>→</span>
              </div>
            </Link>
          )}

          {/* Two small */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {recent.map((art) => (
              <Link
                key={art.slug}
                to={`/blog/${art.slug}`}
                style={{
                  textDecoration: "none",
                  background: "var(--ivory)",
                  padding: "2.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: "3px solid transparent",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = "transparent")}
              >
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>{art.category.toUpperCase()}</span>
                  <h3 className="font-display" style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.4, color: "var(--navy)", letterSpacing: "-0.01em" }}>
                    {art.title}
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{art.date}</span>
                  <span style={{ color: "var(--gold)", fontSize: "1rem" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section id="contact" style={{ background: "var(--navy)", position: "relative", overflow: "hidden", padding: "8rem 0" }}>
      {/* Subtle diagonal texture — purpose: breaks visual monotony of flat dark section without gradient explosion */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(135deg, rgba(182,154,98,0.025) 0px, rgba(182,154,98,0.025) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5vw", position: "relative", zIndex: 1 }}>
        <div className="two-col" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "2rem" }}>MULAI SEKARANG</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.05, color: "white", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              Let's build your business properly.
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)", maxWidth: "400px" }}>
              Ceritakan apa yang sedang Anda bangun. Kami akan membantu memahami apa yang perlu disiapkan.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="mailto:hello@anbi-consulting.com"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--gold)", color: "var(--navy)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.07em", padding: "1.375rem 2rem", textDecoration: "none", textTransform: "uppercase" }}
              >
                <span>Start a Conversation</span>
                {/* Arrow purpose: signals external action — opens email client */}
                <span style={{ fontSize: "1.125rem" }}>→</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.72)", fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.07em", padding: "1.375rem 2rem", textDecoration: "none", textTransform: "uppercase" }}
              >
                <span>WhatsApp ANBI</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.09)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)" }}>Sidoarjo, Jawa Timur, Indonesia</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)" }}>hello@anbi-consulting.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceBand />
      <Positioning />
      <Services />
      <Journey />
      <Industries />
      <WhyAnbi />
      <Process />
      <Trust />
      <InsightsSection />
      <ContactCTA />
    </main>
  );
}
