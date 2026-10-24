import { education, profile, stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <p className="kicker">
              <i aria-hidden="true" />
              {profile.cohort} · {profile.role}
            </p>
            <h1 className="wordmark">{profile.nameZh}</h1>
            <p className="wordmark-en">{profile.nameEn}</p>
          </div>
          <aside className="dossier" aria-label="个人档案">
            <div className="dossier__top">
              <span className="dossier__status">
                <i aria-hidden="true" />
                {profile.availability}
              </span>
              <span>DOSSIER / 01</span>
            </div>
            <div className="dossier__mark" aria-hidden="true">
              澳
            </div>
            <p className="dossier__id">
              <strong>{profile.nameZh}</strong>
              {profile.role}
              <br />
              {profile.intent}
              <br />
              {profile.coords} · {profile.location}
            </p>
          </aside>
          <div className="hero__copy">
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
        </div>
        <ul className="stats">
          {stats.map((item) => (
            <li key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="edu__meta hero__edu">
          {education.school} · {education.major} · {education.period}
        </p>
      </div>
    </section>
  );
}
