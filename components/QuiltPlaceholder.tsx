import type { Quilt } from "@/lib/quilts";

export function QuiltPlaceholder({ quilt }: { quilt: Quilt }) {
  const palette = quilt.palette.length > 0 ? quilt.palette : ["#1a1228", "#241932"];
  const gradient = `linear-gradient(135deg, ${palette[0]} 0%, ${
    palette[Math.min(1, palette.length - 1)]
  } 50%, ${palette[palette.length - 1]} 100%)`;
  return (
    <div className="q-placeholder" style={{ background: gradient }}>
      {palette.map((c, i) => (
        <div
          key={`${c}-${i}`}
          style={{
            position: "absolute",
            inset: `${10 + i * 8}% ${5 + i * 6}%`,
            background: c,
            opacity: 0.35 - i * 0.06,
            mixBlendMode: "screen",
          }}
        />
      ))}
      <div className="q-placeholder-label">
        {quilt.id}
        <br />
        <span style={{ opacity: 0.7 }}>images/{quilt.id}_Hero.jpg</span>
      </div>
    </div>
  );
}
