import { profile } from "@/lib/content";

const channels = [
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "GitHub", value: profile.github, href: profile.githubHref },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">联系</h2>
        </div>
        <p className="lede contact__sub">
          聊聊 Agent、RAG，或者一个需要落地的真实场景。
        </p>
        <p className="contact__status">Open to work · {profile.availability}</p>
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
    </section>
  );
}
