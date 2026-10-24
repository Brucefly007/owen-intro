import { profile, stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero__copy">
          <p className="kicker">
            {profile.role}
            <span aria-hidden="true"> / </span>
            {profile.intent}
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
