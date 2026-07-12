import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #d90b1c 0%, #7c0d1f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 20 }}>Growthik Media</div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>
          AI-Powered SEO, Web Development & Growth Engineering
        </div>
        <div style={{ fontSize: 30, marginTop: 24, opacity: 0.95 }}>
          Build faster, rank higher, and convert better.
        </div>
      </div>
    ),
    size,
  );
}
