import { marquee, profile } from "@/lib/content";

const channels = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "GitHub", value: profile.github, href: profile.githubHref },
];

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact__center">
        <p className="contact__rule">Get in touch / 联系</p>
        <h2 className="section-title">
          <span className="section-index">04 — 联系</span>
          聊聊。
        </h2>
        <p className="contact__sub">
          聊聊 Agent、RAG，或者一个需要落地的真实场景。{profile.location} · {profile.cohort} ·{" "}
          {profile.availability}。
        </p>
        <p className="contact__status">
          <i aria-hidden="true" />
          当前开放机会 · {profile.role}
        </p>
        <ul className="contact-list">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <small>{channel.label}</small>
                <strong>{channel.value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__set" key={copy}>
              {marquee.map((item) => (
                <span key={`${copy}-${item}`}>
                  <b>{item}</b>
                  <span> · </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
