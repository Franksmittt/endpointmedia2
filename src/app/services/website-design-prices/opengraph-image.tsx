import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, color: "#fbbf24", marginBottom: 20 }}>2025 Pricing Guide</div>
        <div style={{ fontWeight: 800 }}>Website Design Prices</div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#93c5fd" }}>South Africa · ROI Calculator</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
