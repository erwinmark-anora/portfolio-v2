import { ImageResponse } from 'next/og';
import { about, site } from '@/content/portfolio';

// Link-preview image, rendered once at build time. Mirrors the hero: centered name, role in the accent, summary.
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Same values as the tokens in app/globals.css (the image renderer can't read CSS variables).
const colors = {
  background: '#0B0F14',
  foreground: '#F2F4F7',
  muted: '#A1A9B5',
  accent: '#0FA4AF',
};

const role = about.roles[0];
const host = new URL(site.url).host;

// Fetches only the glyphs the image uses, as TTF (the renderer can't read woff2).
// Falls back to the renderer's built-in font if Google Fonts can't be reached during the build.
async function loadFont(family: string, weight: 500 | 600 | 800, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!src) return null;
    return { name: family.replace('+', ' '), data: await (await fetch(src)).arrayBuffer(), weight, style: 'normal' as const };
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const fonts = (
    await Promise.all([
      loadFont('Nunito', 800, about.name),
      loadFont('Nunito', 600, role + about.summary),
      loadFont('JetBrains+Mono', 500, host),
    ])
  ).filter((font) => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 96px',
          textAlign: 'center',
          fontFamily: 'Nunito',
          color: colors.foreground,
          backgroundColor: colors.background,
          backgroundImage: 'radial-gradient(70% 60% at 50% -10%, rgba(255,255,255,0.08), transparent 70%)',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{about.name}</div>
        <div style={{ marginTop: 28, fontSize: 44, fontWeight: 600, color: colors.accent }}>{role}</div>
        <div style={{ marginTop: 28, maxWidth: 820, fontSize: 30, fontWeight: 600, lineHeight: 1.4, color: colors.muted }}>
          {about.summary}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            color: colors.muted,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: colors.accent }} />
          {host}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
