import React, { useEffect, useRef, useState } from "react";

const DURATION = 1600;
const STAGGER = 140;

function useCountUp(target, active, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(target);
      return undefined;
    }

    let frame;
    let timeout;
    let startTime;

    const tick = now => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min(1, (now - startTime) / DURATION);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, active, delay]);

  return value;
}

function StatItem({ stat, active, index }) {
  const count = useCountUp(stat.value, active, index * STAGGER);

  return (
    <div className="relative px-3 py-7 sm:px-4 sm:py-10 text-center border border-white/10 -ml-px -mt-px">
      <div className="text-3xl sm:text-5xl font-extrabold text-amr-orange tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
        {count}
        <span>{stat.suffix}</span>
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-slate-300 font-semibold leading-snug px-1">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsCounter({ stats = [] }) {
  const slabRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = slabRef.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    let started = false;
    let hasScrolled = window.scrollY > 0;

    const start = () => {
      if (started) return;
      started = true;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const check = () => {
      if (started) return;
      if (!hasScrolled) {
        hasScrolled = window.scrollY > 0;
        if (!hasScrolled) return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) start();
    };

    const onScroll = () => check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!stats.length) return null;

  return (
    <div
      ref={slabRef}
      className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-800"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amr-navy via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-amr-orange/10 via-transparent to-transparent" />
      <div className="absolute -top-16 -right-10 w-56 h-56 bg-amr-orange/10 rounded-full blur-3xl" />

      <div className="relative grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} stat={stat} active={visible} index={index} />
        ))}
      </div>
    </div>
  );
}
