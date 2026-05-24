import Image from "next/image";
import Link from "next/link";
import portfolioData from "./data/portfolioData.json";

const { jobs, posts, stack, quarterWork } = portfolioData as typeof portfolioData & {
  quarterWork: { title: string; status: string; statusLabel: string; desc: string; tags: string[] }[];
};

const stats = [
  { value: "30M+", label: "Monthly active users reached", sublabel: "CarDekho group · 2023–25" },
  { value: "–40%", label: "JavaScript bundle reduction",  sublabel: "react-common · route splitting" },
  { value: "95%",  label: "Faster builds (Webpack→Vite)", sublabel: "Thrillophilia · 2025" },
  { value: "7+",   label: "Years shipping at scale",      sublabel: "Senior IC track · Jaipur" },
];

const shippedFor = ["Thrillophilia", "CarDekho", "BikeDekho", "TruckDekho", "Ashok Leyland", "Kinetic Green"];

export default function HomePage() {
  const notePosts = posts.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <header>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow reveal">
                <span className="live-dot" />
                Open to senior frontend &amp; platform roles · Q3 2026
              </div>

              <h1 className="display-xl reveal">
                Senior Software<br />
                Engineer<br />
                building<br />
                <span className="accent">fast products at scale.</span>
              </h1>

              <p className="lede reveal">
                Seven years of frontend-led full-stack work — design systems,
                platform architecture and Core Web Vitals — for travel,
                automotive and ecommerce brands reaching{" "}
                <strong>~30 million users a month</strong>.
              </p>

              <div className="hero-cta-row reveal">
                <a className="btn-primary" href="#work">
                  See selected work →
                </a>
                <a
                  className="btn-text"
                  href="https://vj-media.s3.eu-north-1.amazonaws.com/vishnu-datt-jangid.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or download CV (PDF, 2 pages)
                </a>
              </div>

              <div className="hero-info-grid reveal">
                <div className="hero-info-item">
                  <div className="hero-info-label">Currently</div>
                  <div className="hero-info-value">Senior SWE @ Thrillophilia</div>
                </div>
                <div className="hero-info-item">
                  <div className="hero-info-label">Based in</div>
                  <div className="hero-info-value">Jaipur, India · GMT+5:30</div>
                </div>
                <div className="hero-info-item">
                  <div className="hero-info-label">Working in</div>
                  <div className="hero-info-value">React · Next · Node · TS</div>
                </div>
              </div>
            </div>

            <div className="hero-right reveal">
              <div className="hero-photo">
                <Image
                  src="https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226+(1).jpeg"
                  fill
                  alt="Vishnu Jangid"
                  style={{ objectFit: "cover" }}
                  loading="eager"
                />
              </div>
              <div className="hero-name-card">
                <span className="name">Vishnu Datt Jangid</span>
                <span className="exp">7+ years · frontend-heavy full-stack</span>
              </div>
            </div>
          </div>

          {/* Full-width shipped-for row */}
          <div className="shipped-for reveal">
            <div className="shipped-label">Shipped for</div>
            <div className="shipped-list">
              {shippedFor.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Stats ────────────────────────────────── */}
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.value} className="stat-card reveal">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-sublabel">{s.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── This quarter ─────────────────────────── */}
      <section className="quarter-section" id="quarter">
        <div className="wrap">
          <div className="quarter-head-row reveal">
            <span className="quarter-eyebrow">Now · May 2026</span>
            <Link href="/blog" className="quarter-link">See /now log →</Link>
          </div>
          <h2 className="quarter-title reveal">What I&apos;m working on this quarter</h2>
          <div className="quarter-grid">
            {quarterWork.map((item) => (
              <div key={item.title} className="quarter-card reveal">
                <span className={`quarter-status ${item.status}`}>{item.statusLabel}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies ─────────────────────────── */}
      <section className="cases-section" id="work">
        <div className="wrap">
          <div className="cases-eyebrow-row reveal">
            <span className="cases-eyebrow">Case studies · 03 featured</span>
            <Link href="/#work" className="cases-link">See archive (11 more) →</Link>
          </div>
          <h2 className="headline-l cases-heading reveal">Three problems, three results.</h2>
          <div className="cases-list">
            {jobs.map((job, i) => (
              <div key={`${job.company}-${i}`} className="case-card reveal">
                <div className="case-left">
                  <div className="case-top-row">
                    <span className="case-no">0{i + 1}</span>
                    <a
                      href={`https://${job.caseUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-url-link"
                    >
                      ↗ {job.caseUrl?.toUpperCase()}
                    </a>
                  </div>
                  <span className="case-type">Case Study</span>
                  <span className="case-result-label">Result</span>
                  <span className="case-metric">{job.metric}</span>
                  <p className="case-result-sub">{job.result_sublabel}</p>
                </div>

                <div className="case-right">
                  <div className="case-company-row">
                    <span className="case-company">
                      <strong>{job.company}</strong>
                      {" · "}
                      {job.role}
                    </span>
                    <span className="case-dates">{job.dates}</span>
                  </div>

                  <p className="case-summary">{job.summary}</p>

                  <div className="case-body">
                    <div className="case-problem">
                      <div className="case-section-label">Problem</div>
                      <p>{job.problem}</p>
                    </div>
                    <div className="case-approach">
                      <div className="case-section-label">Approach</div>
                      <ul>
                        {job.approach?.map((point, pi) => (
                          <li key={pi}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="case-footer">
                    <div className="chip-row">
                      {job.tags?.map((tag) => (
                        <span key={tag} className="chip">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={`https://${job.caseUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-read-more"
                    >
                      Read full case study →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domain ───────────────────────────────── */}
      <section className="domain-section" id="stack">
        <div className="wrap">
          <h2 className="headline-l reveal">What I reach for, by domain.</h2>
          <div className="domain-grid">
            {stack.map((mod) => (
              <div key={mod.tag} className="domain-group reveal">
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                <div className="chip-row">
                  {mod.chips.map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notes ────────────────────────────────── */}
      <section className="notes-section" id="blog">
        <div className="wrap">
          <div className="sec-head-row reveal">
            <h2 className="headline-l" style={{ marginBottom: 0 }}>Notes on the work.</h2>
            <Link href="/blog" className="sec-link">All posts →</Link>
          </div>
          <div className="notes-grid">
            {notePosts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="note-card reveal"
              >
                <h3>{post.title}</h3>
                <span className="read-more">Read post →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="cta-section" id="contact">
        <div className="wrap">
          <div className="cta-grid reveal">
            <div className="cta-left">
              <h2>
                Got something fast<br />
                <span className="accent">to build?</span>
              </h2>
              <p>
                Ambitious frontend, performance problem, or a platform that
                needs to scale — drop a line. I respond within 48 hours.
              </p>
            </div>
            <div className="cta-actions">
              <a className="cta-email" href="mailto:vishnujangid.dev@gmail.com">
                vishnujangid.dev@gmail.com
                <span>→</span>
              </a>
              <div className="cta-social-row">
                <a
                  className="cta-social-btn"
                  href="https://www.linkedin.com/in/vishnu-jangid-7957ba160/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span>↗</span>
                </a>
                <a
                  className="cta-social-btn"
                  href="https://github.com/visdutt1234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>
              <p className="cta-phone">+91 8947972543 · Jaipur, IN · GMT+5:30</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
