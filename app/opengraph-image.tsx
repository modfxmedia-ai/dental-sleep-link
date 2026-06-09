import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dental Sleep Link — MSO for dental sleep medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(42,191,191,0.30), transparent 60%), radial-gradient(700px 400px at 5% 90%, rgba(42,191,191,0.20), transparent 60%), #0b1f3a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2abfbf",
              boxShadow: "0 0 24px rgba(42,191,191,0.8)",
            }}
          />
          <span
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#2abfbf",
              fontWeight: 700,
            }}
          >
            Dental Sleep Link
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            The nation&apos;s first MSO built exclusively for dental sleep medicine.
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
            Centralized billing. Done-for-you systems. Real partnership.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>dentalsleeplink.com</span>
          <span style={{ color: "#2abfbf", fontWeight: 700 }}>Apply now →</span>
        </div>
      </div>
    ),
    size
  );
}
