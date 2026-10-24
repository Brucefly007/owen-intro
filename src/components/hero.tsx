import { education, profile, stats } from "@/lib/content";

const spec = [
  { label: "状态", value: profile.availability },
  { label: "方向", value: profile.intent },
  { label: "院校", value: education.school },
  { label: "专业", value: "物联网工程" },
  { label: "成绩", value: `${education.gpa} · 前 10%` },
  { label: "时间", value: education.period },
];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="kicker">
              {profile.cohort}
              <span aria-hidden="true"> / </span>
              {profile.role}
            </p>
            <h1 className="wordmark">{profile.name}</h1>
            <p className="lede">{profile.lede}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#work">
                查看作品 <span aria-hidden="true">→</span>
              </a>
              <a className="btn" href="#contact">
                联系我 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <dl className="spec">
            {spec.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="stats">
          {stats.map((item) => (
            <li key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
