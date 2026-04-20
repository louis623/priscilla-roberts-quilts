"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { QUILTS, heroSrc, type Quilt, type QuiltCategory } from "@/lib/quilts";
import { QuiltPlaceholder } from "./QuiltPlaceholder";

type Filter = "all" | QuiltCategory;

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All 25", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "Gallery Pieces", value: "strong" },
  { label: "Traditional & Tonal", value: "traditional" },
];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lbIndex, setLbIndex] = useState<number>(-1);

  const shown = QUILTS.filter((q) => filter === "all" || q.category === filter);

  const openLB = useCallback((id: string) => {
    const idx = QUILTS.findIndex((q) => q.id === id);
    if (idx >= 0) setLbIndex(idx);
  }, []);

  const closeLB = useCallback(() => setLbIndex(-1), []);

  const navLB = useCallback((dir: number) => {
    setLbIndex((i) => (i < 0 ? i : (i + dir + QUILTS.length) % QUILTS.length));
  }, []);

  useEffect(() => {
    if (lbIndex < 0) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLB();
      else if (e.key === "ArrowLeft") navLB(-1);
      else if (e.key === "ArrowRight") navLB(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lbIndex, closeLB, navLB]);

  const activeQuilt = lbIndex >= 0 ? QUILTS[lbIndex] : null;

  return (
    <>
      <div className="gallery-filter reveal">
        <span className="filter-label">View</span>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? "active" : undefined}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
        <span className="count">{shown.length} works shown</span>
      </div>

      <div className="gallery-grid hover--glow">
        {QUILTS.map((q) => (
          <QuiltCard
            key={q.id}
            quilt={q}
            hidden={filter !== "all" && q.category !== filter}
            onClick={() => openLB(q.id)}
          />
        ))}
      </div>

      <div
        className={`lightbox${activeQuilt ? " open" : ""}`}
        aria-hidden={activeQuilt ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLB();
        }}
      >
        <button className="lb-close" aria-label="Close" onClick={closeLB} />
        {activeQuilt && (
          <LightboxContent
            quilt={activeQuilt}
            onBack={closeLB}
            onPrev={() => navLB(-1)}
            onNext={() => navLB(1)}
          />
        )}
      </div>
    </>
  );
}

function QuiltCard({
  quilt,
  hidden,
  onClick,
}: {
  quilt: Quilt;
  hidden: boolean;
  onClick: () => void;
}) {
  const src = heroSrc(quilt.id);
  return (
    <article
      className={`q-card size-${quilt.size}`}
      style={{ display: hidden ? "none" : undefined }}
      onClick={onClick}
    >
      <div className="q-frame">
        <QuiltPlaceholder quilt={quilt} />
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="q-img"
            src={src}
            alt={quilt.name}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        {quilt.featured && <div className="q-featured-tag">Featured</div>}
        <div className="q-info">
          <div className="q-info-inner">
            <h3 className="q-name">{quilt.name}</h3>
            <div className="q-recipient">{quilt.recipient}</div>
            {quilt.label && <div className="q-story">&ldquo;{quilt.label}&rdquo;</div>}
          </div>
        </div>
      </div>
    </article>
  );
}

function LightboxContent({
  quilt,
  onBack,
  onPrev,
  onNext,
}: {
  quilt: Quilt;
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const src = heroSrc(quilt.id);
  const [hintVisible, setHintVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const delta = e.changedTouches[0].clientX - start;
    setHintVisible(false);
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNext();
      else onPrev();
    }
  };

  return (
    <div className="lb-content">
      <div className="lb-photo-wrap">
        <button
          className="lb-arrow lb-arrow-prev"
          aria-label="previous quilt"
          onClick={onPrev}
        >
          ‹
        </button>
        <div
          className="lb-photo"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <QuiltPlaceholder quilt={quilt} />
          {src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={quilt.name}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
        </div>
        <button
          className="lb-arrow lb-arrow-next"
          aria-label="next quilt"
          onClick={onNext}
        >
          ›
        </button>
        <div className={`lb-swipe-hint${hintVisible ? "" : " hidden"}`}>
          ← swipe →
        </div>
      </div>
      <div className="lb-meta">
        <h2 className="lb-name">{quilt.name}</h2>
        <div className="lb-recipient">{quilt.recipient}</div>
        {quilt.label && (
          <div className="lb-label-pullquote">
            <div className="eyebrow">The Label</div>
            <blockquote>&ldquo;{quilt.label}&rdquo;</blockquote>
          </div>
        )}
        {quilt.description && <p className="lb-description">{quilt.description}</p>}
        <dl className="lb-details">
          {quilt.details?.year && (
            <>
              <dt>Year</dt>
              <dd>{quilt.details.year}</dd>
            </>
          )}
          {quilt.details?.size && (
            <>
              <dt>Size</dt>
              <dd>{quilt.details.size}</dd>
            </>
          )}
          {quilt.details?.technique && (
            <>
              <dt>Technique</dt>
              <dd>{quilt.details.technique}</dd>
            </>
          )}
          {quilt.details?.materials && (
            <>
              <dt>Materials</dt>
              <dd>{quilt.details.materials}</dd>
            </>
          )}
        </dl>
        <a
          className="lb-back"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          ← Back to collection
        </a>
      </div>
      {quilt.longform && <div className="lb-longform">A longer story is coming.</div>}
    </div>
  );
}
