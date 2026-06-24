import { ImageResponse } from "next/og";

// Gebrande Open Graph-afbeelding (1200×630) voor mooie previews bij delen op
// WhatsApp/social, i.p.v. een losse sfeerfoto in de verkeerde verhouding.
// Geldt site-breed; stadspagina's zetten desgewenst een eigen beeld.
// LET OP: ImageResponse/satori ondersteunt alleen flexbox + een subset CSS.
export const alt =
  "Flashframe Photobooth — fotobooth met directe prints huren in Noord-Holland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #7c3aed 0%, #5b1fb0 55%, #4a1799 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ffffff",
              color: "#712edd",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", marginLeft: 20, fontSize: 34, fontWeight: 700 }}>
            Flashframe Photobooth
          </div>
        </div>

        {/* Pay-off */}
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Leg elk moment vast in stijl.
        </div>

        {/* Onderregel */}
        <div style={{ display: "flex", fontSize: 30, opacity: 0.92 }}>
          Fotobooth met directe prints · Noord-Holland · vanaf €250
        </div>
      </div>
    ),
    { ...size }
  );
}
