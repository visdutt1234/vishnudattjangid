import portfolioData from "./data/portfolioData.json";
import Image from "next/image";

const { jobs, posts, projects } = portfolioData;
type Project = (typeof projects)[number];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const host = p.url.replace(/^https?:\/\//, "").split("/")[0];
  const initials = p.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const hue = (index * 47) % 360;
  const cover = `linear-gradient(150deg,hsl(${hue} 30% 24%),hsl(${(hue + 34) % 360} 36% 13%))`;

  return (
    <div className="card reveal">
      <div className="frame">
        <div className="browserbar">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="urlpill">
            <span className="lock">&#128274;</span>
            {host}
          </div>
        </div>
        <div className="cover" style={{ background: cover }}>
          <span className="plabel">{p.ix}</span>
          <span className="mono">{initials}</span>
          <a className="overlay" href={p.url} target="_blank" rel="noopener noreferrer">
            <span className="open-btn">Open site ↗</span>
          </a>
        </div>
      </div>
      <div className="card-meta">
        <div className="ix">{p.ix}</div>
        <h4>
          {p.name}
          <a href={p.url} target="_blank" rel="noopener noreferrer">
            ↗
          </a>
        </h4>
        <p>{p.desc}</p>
        <div className="card-tags">
          {p.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <>
      <a id="top" />

      <header>
        <div className="wrap">
          <div className="status reveal">
            <span className="live">Shipping to 30M+ monthly users</span>
            <span>{"// 7+ yrs - frontend-heavy full-stack"}</span>
            <span>{"// performance - systems - scale"}</span>
          </div>
          <div className="hero-grid">
            <div className="reveal">
              <h1 className="title">
                Senior Software <em>Engineer</em>
                <span className="sub">Full-stack - Frontend-focused - Performance and Architecture</span>
              </h1>
              <p className="lede">
                I build products end-to-end - from architecture and APIs to the pixels users touch - with a
                frontend specialty. 7+ years shipping high-traffic, multi-brand platforms across travel, automotive
                and ecommerce.
              </p>
              <div className="cta">
                <a className="btn primary" href="#projects">
                  View Projects ↗
                </a>
                <a className="btn" href="mailto:vishnujangid.dev@gmail.com">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="id-card reveal">
              <div className="avatar">
                <Image src="https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226+(1).jpeg" fill alt="Vishnu Jangid" className="ini" objectFit="cover" loading="eager" />
              </div>
              <div className="id-row">
                <span>EXP</span>
                <span>7+ years</span>
              </div>
              <div className="id-row">
                <span>ROLE</span>
                <span>Sr. Software Eng</span>
              </div>
              <div className="id-row">
                <span>SCALE</span>
                <span>30M+ MAU</span>
              </div>
              <div className="id-row">
                <span>STACK</span>
                <span>React - Node</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {featuredPosts.length > 0 && (
        <section id="featured" className="featured">
          <div className="wrap">
            <div className="feat-bar reveal">
              <span className="lbl">FEATURED</span>
              <span>{"// latest writing and updates"}</span>
              <span className="line" />
            </div>
            <div className="featured-grid reveal">
              {featuredPosts.map((post, index) => (
                <a
                  key={`${post.url}-${index}`}
                  className="featured-link-card"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="featured-link-title">{post.title || `Featured Post ${index + 1}`}</h3>
                  <span className="featured-link-cta">View post ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="stack">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-no">01</span>
            <span className="sec-title">Core Stack</span>
            <span className="sec-tag">[ skills index ]</span>
          </div>
          <div className="mods reveal">
            <div className="mod">
              <div className="tag">MOD_01</div>
              <h3>INTERFACE_DEV</h3>
              <p>Production React UI engineering, responsive interfaces, and component-driven development at scale.</p>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">Next.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Tailwind</span>
              </div>
            </div>
            <div className="mod">
              <div className="tag">MOD_02</div>
              <h3>ARCHITECTURE</h3>
              <p>Monorepo setups, design systems, design tokens, and shared component libraries across brands.</p>
              <div className="chips">
                <span className="chip">Nx</span>
                <span className="chip">Design Systems</span>
                <span className="chip">PWA</span>
                <span className="chip">SSR</span>
              </div>
            </div>
            <div className="mod">
              <div className="tag">MOD_03</div>
              <h3>PERFORMANCE</h3>
              <p>Core Web Vitals, critical CSS, bundle optimization, code splitting, and caching strategies.</p>
              <div className="chips">
                <span className="chip">Vite</span>
                <span className="chip">Webpack</span>
                <span className="chip">CWV</span>
                <span className="chip">AMP</span>
              </div>
            </div>
            <div className="mod">
              <div className="tag">MOD_04</div>
              <h3>QUALITY_OPS</h3>
              <p>E2E and unit testing, linting pipelines, code review, and CI automation for reliability.</p>
              <div className="chips">
                <span className="chip">Playwright</span>
                <span className="chip">Jest</span>
                <span className="chip">Storybook</span>
                <span className="chip">GH Actions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-no">02</span>
            <span className="sec-title">Work Archive</span>
            <span className="sec-tag">[ career timeline ]</span>
          </div>
          {jobs.map((job, index) => {
            return (
              <div key={job.company + job.dates} className={`job reveal ${index === 0 ? "open" : ""}`}>
                <div className="job-head">
                  <span className="loc">{job.location}</span>
                  <div>
                    <h3>{job.company}</h3>
                    <span className="role">{job.role}</span>
                  </div>
                  <span className="dates">{job.dates}</span>
                  <span className="exp">+</span>
                </div>
                <div className="job-body">
                  <div className="job-body-in">
                    <div className="impact-label">{job.impact}</div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-no">03</span>
            <span className="sec-title">Selected Work</span>
            <span className="sec-tag">[ live previews ]</span>
          </div>
          <p className="proj-note reveal">
            Each tile is a browser-framed preview with the live site favicon and URL. Hit <b>Open</b> to launch the
            real site in a new tab.
          </p>
          <div className="proj-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.ix} p={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="edu">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-no">04</span>
            <span className="sec-title">Credentials</span>
            <span className="sec-tag">[ verified ]</span>
          </div>
          <div className="edu reveal">
            <span className="yr">&apos;18</span>
            <div>
              <h3>Bachelor of Computer Applications</h3>
              <p>University of Maharaja&apos;s College, Jaipur - Computer Science - 2015 to 2018</p>
            </div>
            <span className="verified">CREDENTIAL VERIFIED</span>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact reveal">
            <div className="ping">OPEN CHANNEL // AWAITING SIGNAL</div>
            <h2>
              Let&apos;s build something <em>fast.</em>
            </h2>
            <p>
              Got an ambitious frontend, a performance problem, or a platform that needs to scale? Drop a line - I am
              always up for interesting architecture.
            </p>
            <div className="links">
              <a className="btn primary" href="mailto:vishnujangid.dev@gmail.com">
                Send mail
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/vishnu-jangid-7957ba160/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn" href="tel:+918947972543">
                +91 8947972543
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
