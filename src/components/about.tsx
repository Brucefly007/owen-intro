import { about, education, profile, skillGroups, skills } from "@/lib/content";

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__layout">
        <div>
          <h2 className="section-title">
            <span className="section-index">02 — 简历</span>
            关于
            <br />
            我。
          </h2>
          <div className="prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="pull">{about.pull}</p>
          <article className="edu">
            <div className="edu__head">
              <div>
                <h3 className="edu__school">{education.school}</h3>
                <p className="edu__major">{education.major}</p>
              </div>
              <p className="edu__period">{education.period}</p>
            </div>
            <ul className="edu__scores">
              <li>平均成绩 {education.gpa} {education.gpaScale}</li>
              <li>{education.rank}</li>
              <li>
                {profile.gender} · {profile.birth}
              </li>
              <li>现居{profile.location}</li>
            </ul>
            <ul className="courses">
              {education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            <p className="thesis">{education.thesis}</p>
          </article>
        </div>
        <div>
          <div className="signal__head">
            <h3 className="signal__title">技能栈</h3>
            <p className="signal__legend">Depth · 简历原词</p>
          </div>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li className="skill-row" key={skill.name}>
                <div>
                  <strong>{skill.name}</strong>
                  <small>{skill.detail}</small>
                </div>
                <span className="ticks" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, index) => (
                    <i key={index} className={index < skill.ticks ? "on" : undefined} />
                  ))}
                </span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
          <div className="groups">
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
