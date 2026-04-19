"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

  const shown = useMemo(
    () => QUILTS.filter((q) => filter === "all" || q.category === filter),
    [filter]
  );

  const openLB = useCallback((id: string) => {
    const idx = QUILTS.findIndex((q) => q.id === id);
    if (idx >= 0) setLbIndex(idx);
  }, []);

  const closeLB = useCallback(() => setLbIndex(-1), []);

  const navLB = useCallback(
    (dir: number) => {
      setLbIndex((i) => (i < 0 ? i : (i + dir + QUILTS.length) % QUILTS.length));
    },
    []
  );

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
        <button className="lb-nav lb-prev" aria-label="Previous" onClick={() => navLB(-1)}>
          ‹
        </button>
        <button className="lb-nav lb-next" aria-label="Next" onClick={() => navLB(1)}>
          ›
        </button>
        {activeQuilt && <LightboxContent quilt={activeQuilt} onBack={closeLB} />}
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
        <div className="q-number">{quilt.id}</div>
        {quilt.featured && <div className="q-featured-tag">Featured</div>}
        <div className="q-info">
          <h3 className="q-name">{quilt.name}</h3>
          <div className="q-recipient">{quilt.recipient}</div>
          {quilt.label && <div className="q-story">&ldquo;{quilt.label}&rdquo;</div>}
        </div>
      </div>
    </article>
  );
}

function LightboxContent({ quilt, onBack }: { quilt: Quilt; onBack: () => void }) {
  const src = heroSrc(quilt.id);
  const categoryLabel = quilt.featured
    ? "Featured"
    : quilt.category === "strong"
    ? "Gallery Piece"
    : "Traditional";
  return (
    <div className="lb-content">
      <div className="lb-photo">
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
      <div className="lb-meta">
        <div className="lb-number">
          {quilt.id} · {categoryLabel}
        </div>
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
          {quilt.hasDetailShot && (
            <>
              <dt>Label</dt>
              <dd>Detail shot: images/{quilt.id}_Detail.jpg</dd>
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
