import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SPEED = 45; // pixels per second
const TWEEN_MS = 520; // arrow navigation duration

function ClientCard({ client }) {
  return (
    <div className="group shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amr-orange/50">
      <div className="h-16 w-full flex items-center justify-center">
        <img
          src={client.image}
          alt={client.name}
          loading="lazy"
          className="max-h-16 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-center text-xs sm:text-[13px] font-semibold leading-snug text-slate-700 transition-colors duration-300 group-hover:text-amr-orange">
        {client.name}
      </p>
    </div>
  );
}

export default function ClientsSlider({ clients = [] }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const setRef = useRef(null);

  const offsetRef = useRef(0); // scroll offset inside one set of logos
  const baseRef = useRef(0); // px shift applied before the offset
  const loopWRef = useRef(0); // width of one set of logos
  const stepRef = useRef(0); // width of a single card + gap
  const copiesRef = useRef(0);
  const tweenRef = useRef(null);
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);
  const reducedRef = useRef(false);

  const [copies, setCopies] = useState(2);

  const measure = useCallback(() => {
    const setEl = setRef.current;
    const viewport = viewportRef.current;
    if (!setEl || !viewport) return;

    const loopW = setEl.offsetWidth;
    if (!loopW) return;

    const cards = setEl.children;
    const step =
      cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : loopW;
    const containerW = viewport.clientWidth;

    loopWRef.current = loopW;
    stepRef.current = step;
    baseRef.current = loopW;

    const needed = Math.max(2, Math.ceil((containerW + step) / loopW) + 2);
    if (needed !== copiesRef.current) {
      copiesRef.current = needed;
      setCopies(needed);
    }
  }, []);

  useLayoutEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = query.matches;
    const onChange = () => {
      reducedRef.current = query.matches;
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let frame;
    let last = performance.now();

    const tick = now => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const loopW = loopWRef.current;
      const track = trackRef.current;
      if (loopW > 0 && track) {
        let delta = offsetRef.current;
        const tween = tweenRef.current;

        if (draggingRef.current) {
          // offset is driven by the pointer handler
        } else if (tween) {
          tween.elapsed += dt * 1000;
          const progress = Math.min(1, tween.elapsed / tween.duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          delta = tween.from + (tween.to - tween.from) * eased;
          if (progress >= 1) tweenRef.current = null;
        } else if (!hoverRef.current && !reducedRef.current) {
          delta += SPEED * dt;
        }

        if (delta >= loopW) delta -= loopW;
        if (delta < 0) delta += loopW;

        offsetRef.current = delta;
        track.style.transform = `translate3d(${-(baseRef.current + delta)}px, 0, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const nudge = useCallback(direction => {
    const step = stepRef.current;
    if (!step) return;
    const from = offsetRef.current;
    tweenRef.current = {
      from,
      to: from + direction * step,
      elapsed: 0,
      duration: reducedRef.current ? 1 : TWEEN_MS,
    };
  }, []);

  const dragStart = useRef({ x: 0, offset: 0 });

  const onPointerDown = event => {
    if (event.pointerType === "mouse") return;
    draggingRef.current = true;
    tweenRef.current = null;
    dragStart.current = { x: event.clientX, offset: offsetRef.current };
    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const onPointerMove = event => {
    if (!draggingRef.current) return;
    const loopW = loopWRef.current;
    if (!loopW) return;
    const distance = dragStart.current.offset - (event.clientX - dragStart.current.x);
    offsetRef.current = ((distance % loopW) + loopW) % loopW;
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  if (!clients.length) return null;

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Our Clients
        </h2>
        <p className="text-sm text-slate-500">
          Trusted by leading industries across steel, infrastructure and water
          treatment.
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <div
          ref={viewportRef}
          className="overflow-hidden"
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div ref={trackRef} className="flex w-max will-change-transform">
            {Array.from({ length: copies }).map((_, copyIndex) => (
              <div
                key={copyIndex}
                ref={copyIndex === 0 ? setRef : undefined}
                className="relative flex shrink-0 gap-6 pr-6"
              >
                {clients.map(client => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />

        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Show previous clients"
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 shadow-lg transition hover:border-amr-orange hover:text-amr-orange active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Show next clients"
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 shadow-lg transition hover:border-amr-orange hover:text-amr-orange active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
