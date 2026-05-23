import type { Project } from "../types";

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
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
