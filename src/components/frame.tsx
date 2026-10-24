"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export function Frame({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll", progress.toFixed(4));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#hero">
        跳到正文
      </a>
      <div className="rail" aria-hidden="true">
        <span />
        <em>
          {profile.nameEn} · {profile.role} · {profile.location}
        </em>
      </div>
      <i className="cross cross--tr" aria-hidden="true" />
      <i className="cross cross--bl" aria-hidden="true" />
      <i className="cross cross--br" aria-hidden="true" />
      <header className={open ? "nav is-open" : "nav"}>
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          {profile.nameZh}
          <span className="brand__dot" aria-hidden="true" />
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="site-nav" className="nav__links" aria-label="主导航">
          {nav.map((item, index) => (
            <span key={item.href} className="contents">
              {index > 0 ? <span className="nav__sep">/</span> : null}
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </span>
          ))}
          <a className="nav__status" href="#contact" onClick={() => setOpen(false)}>
            <span className="brand__dot" aria-hidden="true" />
            {profile.availability}
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>
          © 2026 {profile.nameZh} · {profile.nameEn}
        </span>
        <span>
          {profile.cohort} · {profile.availability}
        </span>
      </footer>
    </>
  );
}
