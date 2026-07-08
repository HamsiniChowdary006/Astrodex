"use client"

export function LoadingSkeleton() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-deep)",
        zIndex: 40,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div
          className="animate-pulse-glow"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "2px solid var(--accent-cyan)",
            borderTopColor: "transparent",
            animation: "spin 0.9s linear infinite",
          }}
        />
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          Initializing Orbit Systems...
        </span>
      </div>
    </div>
  )
}