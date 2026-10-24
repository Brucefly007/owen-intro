"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/content";

export function Frame({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#hero">
        跳到正文
      </a>
      <header className="site-header">
        <div className="wrap site-header__bar">
          <a className="brand" href="#hero" onClick={() => setOpen(false)}>
            {profile.name}
          </a>
          <nav className="nav__links" aria-label="主导航">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav__status" href="#contact">
              {profile.availability}
            </a>
          </nav>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "关闭" : "菜单"}
          </button>
        </div>
        {open ? (
          <nav id="mobile-nav" className="nav__panel" aria-label="主导航">
            <div className="wrap">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                {profile.availability}
              </a>
            </div>
          </nav>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="wrap site-footer__bar">
          <span>© 2026 {profile.name}</span>
          <span>
            {profile.cohort} · {profile.availability}
          </span>
        </div>
      </footer>
    </>
  );
}
