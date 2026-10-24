import { about, education, skillGroups } from "@/lib/content";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">关于</h2>
        </div>
        <div className="split">
          <div>
            <div className="prose">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="pull">{about.pull}</p>
          </div>
          <article className="edu">
            <p className="edu__label">教育经历</p>
            <h3 className="edu__school">{education.school}</h3>
            <p className="edu__major">{education.major}</p>
            <p className="edu__period">{education.period}</p>
            <ul className="edu__scores">
              <li>
                平均成绩 {education.gpa} {education.gpaScale}
              </li>
              <li>{education.rank}</li>
            </ul>
            <ul className="courses">
              {education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            <p className="thesis">{education.thesis}</p>
          </article>
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
