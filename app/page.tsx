import portfolioData from "./data/portfolioData.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

const { jobs, posts, projects, stack } = portfolioData;

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
                <Image
                  src="https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226+(1).jpeg"
                  fill
                  alt="Vishnu Jangid"
                  className="ini"
                  style={{ objectFit: "cover" }}
                  loading="eager"
                />
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
            {stack.map((mod) => (
              <div key={mod.tag} className="mod">
                <div className="tag">{mod.tag}</div>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                <div className="chips">
                  {mod.chips.map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
              </div>
            ))}
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
          {jobs.map((job, index) => (
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
          ))}
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
