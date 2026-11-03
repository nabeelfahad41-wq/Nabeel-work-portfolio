"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const onPortfolio = pathname.startsWith("/work");
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["hero", ...NAV.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled || !isHome ? " is-scrolled" : ""}`}>
        <a href={href("hero")} className="nav-mark" data-cursor="">
          <span className="nav-mark-kg">N</span>
          <span className="nav-mark-meta">
            Nabeel
            <em>{SITE.role}</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.id} href={href(n.id)} className={active === n.id ? "is-active" : ""}>
              <span className="nav-num">{n.num}</span>
              {n.label}
            </a>
          ))}
        </nav>

        <Link
          href="/work"
          className={`nav-portfolio${onPortfolio ? " is-current" : ""}`}
          aria-current={pathname === "/work" ? "page" : undefined}
          data-cursor=""
        >
          <span className="nav-portfolio-spark" aria-hidden="true">✦</span>
          Portfolio
          <span className="nav-portfolio-arw" aria-hidden="true">↗</span>
        </Link>

        <a href={href("contact")} className="nav-status">
          <span className="dot" aria-hidden="true" />
          Open to roles
        </a>

        <button
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-sheet${open ? " is-open" : ""}`} aria-hidden={!open}>
        <Link href="/work" className="nav-sheet-portfolio" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          <span className="nav-num">IDX</span>
          Portfolio
          <i aria-hidden="true">↗</i>
        </Link>
        {NAV.map((n) => (
          <a key={n.id} href={href(n.id)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span className="nav-num">{n.num}</span>
            {n.label}
          </a>
        ))}
        <div className="nav-sheet-foot">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>WhatsApp {SITE.whatsappLabel}</a>
          <div className="nav-sheet-links">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>LinkedIn ↗</a>
          </div>
        </div>
      </div>

      {!onPortfolio && (
        <Link href="/work" className="fab-portfolio" aria-label="View detailed portfolio">
          <span className="fab-portfolio-spark" aria-hidden="true">✦</span>
          <span className="fab-portfolio-text">Portfolio</span>
        </Link>
      )}
    </>
  );
}
