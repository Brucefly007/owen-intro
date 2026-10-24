import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">作品</h2>
          <p className="section-note">2025 — 2026 · 四个项目独立完成</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" id={project.id} key={project.id}>
              <div className="project__meta">
                <span className="project__index">{project.index}</span>
                <span>{project.category}</span>
                <span className="project__period">{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project__summary">{project.summary}</p>
              <ul className="project__points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="chips">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project__foot">
                <p className="metric">
                  <b>{project.metric.value}</b>
                  <span>{project.metric.unit}</span>
                  <small>{project.metric.note}</small>
                </p>
                <div className="project__link">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel} →
                    </a>
                  ) : (
                    <span>{project.footnote}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
