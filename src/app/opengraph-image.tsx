import { ImageResponse } from "next/og";

export const alt = "mookoop — Studio Open-Source de Mockups App Store & Google Play";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle decorative radial gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 20%, rgba(31, 138, 138, 0.08) 0%, transparent 60%)",
          }}
        />

        {/* Top Header with Brand and Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: "#101010",
                letterSpacing: "-0.04em",
              }}
            >
              m<span style={{ color: "#1F8A8A" }}>oo</span>k<span style={{ color: "#1F8A8A" }}>oo</span>p
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 9999,
              backgroundColor: "#f5f5f7",
              border: "1px solid #e5e5ea",
              fontSize: 16,
              fontWeight: 600,
              color: "#6e6e73",
            }}
          >
            <span>App Store & Google Play Studio</span>
          </div>
        </div>

        {/* Center Hero Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 960,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#101010",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 18,
            }}
          >
            Concevez et exportez vos captures d'écran de store en haute définition.
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "#6e6e73",
              lineHeight: 1.4,
              maxWidth: 780,
            }}
          >
            Formats certifiés 24 bits sans canal alpha, bannières 1024×500 et persistance privée locale. 100% gratuit et open-source.
          </div>
        </div>

        {/* Bottom Feature Badges & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #f0f0f0",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontSize: 16,
              color: "#101010",
              fontWeight: 600,
            }}
          >
            <span>iPhone 16 Pro Max</span>
            <span style={{ color: "#1F8A8A" }}>•</span>
            <span>Google Play 1024x500</span>
            <span style={{ color: "#1F8A8A" }}>•</span>
            <span>iPad Pro 13"</span>
            <span style={{ color: "#1F8A8A" }}>•</span>
            <span>Export ZIP certifié</span>
          </div>

          <div
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "#0088ff",
              letterSpacing: "-0.01em",
            }}
          >
            mookoop.studio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
