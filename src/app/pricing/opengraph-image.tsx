import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #0f766e 0%, #111827 100%)",
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
        <div style={{ fontSize: 36, color: "#5eead4", marginBottom: 24 }}>Endpoint Media</div>
        <div style={{ fontWeight: 800 }}>Website Design Pricing</div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#d1d5db" }}>Johannesburg · Transparent Packages</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
