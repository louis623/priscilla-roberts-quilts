"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal, .q-card");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("in");
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px 10% 0px" }
    );
    targets.forEach((el) => {
      io.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
    });
    const timer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal, .q-card").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.2) el.classList.add("in");
      });
    }, 50);
    const onScroll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in), .q-card:not(.in)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 1.1) el.classList.add("in");
        });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);
  return null;
}
