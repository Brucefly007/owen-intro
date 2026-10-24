import { about, skillGroups } from "@/lib/content";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">关于</h2>
        </div>
        <div className="prose">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pull">{about.pull}</p>
        </div>
        <div className="skill-block">
          <h3 className="block-title">专业技能</h3>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
