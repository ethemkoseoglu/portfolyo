import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = "Ethem Köseoğlu — Product Developer & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Old UA forces Google Fonts to return a TTF (satori can't parse woff2).
const LEGACY_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36";

/** Load a Google font as raw bytes; returns null on any failure (build stays green). */
async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
    const cssRes = await fetch(cssUrl, { headers: { "User-Agent": LEGACY_UA } });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const url = css.match(/src: url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;
    const fontRes = await fetch(url);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const grotesk = await loadGoogleFont("Space+Grotesk", 700);
  const fontFamily = grotesk ? "Space Grotesk" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "72px 80px",
          fontFamily,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#C9A96E",
            fontSize: 26,
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#C9A96E",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>
            PRODUCT DEVELOPER &amp; ENTREPRENEUR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              fontWeight: 700,
              color: "#F4F2ED",
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Ethem Köseoğlu
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#8A8A8E",
              maxWidth: 960,
            }}
          >
            ERP · B2B Platformları · Yapay Zekâ · Ürün Geliştirme · Girişimcilik
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8A8A8E",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex", color: "#C9A96E" }}>EK</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: grotesk
        ? [{ name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" }]
        : undefined,
    }
  );
}
