import { Section } from '@/components/primitives/Section';
import { DoDont } from '@/components/primitives/ui';

/** Approved logo colors, matching the IBM 8-bar logo guidance exactly. */
const LOGO_COLORS: { name: string; hex: string; note: string; light: boolean; border?: boolean }[] = [
  { name: 'Blue 60', hex: '#0f62fe', note: 'Primary, on light or neutral backgrounds', light: true },
  { name: 'Black', hex: '#161616', note: 'On light backgrounds where blue is unavailable', light: true },
  { name: 'White', hex: '#ffffff', note: 'On dark, blue or photographic backgrounds', light: false, border: true },
];

/**
 * The wordmark ships in two optical weights. The slim Thin cut is the display weight,
 * used large where it is the hero of the layout. The heavier Bold cut is the small-size
 * weight — its strokes survive where the Thin hairlines would break up at app-bar,
 * footer or favicon scale.
 */
const LOGO_WEIGHTS: { weight: 'thin' | 'bold'; name: string; use: string; note: string; max: number }[] = [
  {
    weight: 'thin',
    name: 'Thin',
    use: 'Large — display & primary',
    note: 'The default. Use whenever the wordmark is big and clearly visible: covers, hero areas, signage, full-bleed layouts. The fine strokes read as confident and editorial at size.',
    max: 340,
  },
  {
    weight: 'bold',
    name: 'Bold',
    use: 'Small — functional',
    note: 'Use only when the wordmark is small: app bars, footers, favicons, body-scale lockups. The heavier strokes stay legible where the Thin hairlines would thin out and disappear.',
    max: 190,
  },
];

/**
 * Theme-aware wordmark artwork. Renders both the dark (black) and light (white) PNGs;
 * CSS shows whichever suits the active theme so the mark always holds contrast.
 */
function LogoArt({ weight, max }: { weight: 'thin' | 'bold'; max: number }) {
  return (
    <span className="logo-art" style={{ maxWidth: max }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lg-light" src={`/logos/edingrad-${weight}-light.png`} alt={`Edingrad wordmark — ${weight}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lg-dark" src={`/logos/edingrad-${weight}.png`} alt="" aria-hidden="true" />
    </span>
  );
}

/** Fixed-color swatch: uses the variant that contrasts with the given background. */
function LogoOn({ light, alt }: { light: boolean; alt: string }) {
  const src = light ? '/logos/edingrad-thin.png' : '/logos/edingrad-thin-light.png';
  return (
    <span style={{ display: 'block', width: '100%', maxWidth: 150 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto' }} />
    </span>
  );
}

export function Logo() {
  return (
    <Section
      id="logo"
      lead={
        <>
          The Edingrad wordmark is set in Palestra &mdash; high-contrast, confident, unmistakably
          editorial. It is the one fixed signature of the brand, and it ships in two weights so it
          holds up at every size.
        </>
      }
    >
      <h3 id="logo">Wordmark</h3>
      <p>
        The wordmark is the word <b>EDINGRAD</b> set in capitals in Palestra, used in white or brand
        blue only. It is never recreated in another typeface, recoloured, or given effects.
      </p>
      <div
        className="card"
        style={{ display: 'grid', placeItems: 'center', padding: '64px 32px', marginTop: 24 }}
      >
        <LogoArt weight="thin" max={460} />
      </div>

      <h3 id="logo-weights" style={{ margin: '56px 0 8px' }}>
        Logo weights
      </h3>
      <p>
        The wordmark comes in two optical weights, and the choice is driven by size, not taste. Use
        the slim <b>Thin</b> cut when the logo is <b>large and clearly visible</b> &mdash; it is the
        default and the most elegant. Switch to the heavier <b>Bold</b> cut only when the logo is{' '}
        <b>small</b>, where its thicker strokes stay legible and the Thin hairlines would otherwise
        break up.
      </p>
      <div className="grid3" style={{ gridTemplateColumns: 'repeat(2,1fr)', marginTop: 16 }}>
        {LOGO_WEIGHTS.map((w) => (
          <div className="card" key={w.weight} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ minHeight: 132, display: 'grid', placeItems: 'center', padding: '28px 24px', borderBottom: '1px solid var(--line-2)' }}>
              <LogoArt weight={w.weight} max={w.max} />
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div className="nm" style={{ fontWeight: 600 }}>
                {w.name}
              </div>
              <div
                className="hx"
                style={{ fontSize: '.72rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.12em', margin: '3px 0 6px' }}
              >
                {w.use}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--mid)', lineHeight: 1.5 }}>{w.note}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 id="logo-color" style={{ margin: '56px 0 8px' }}>
        Logo color
      </h3>
      <p>
        Following the IBM 8-bar logo guidance, the wordmark appears in exactly three colors:
        Blue&nbsp;60 (<b>#0F62FE</b>), black (<b>#161616</b>) or white (<b>#FFFFFF</b>). Blue is the
        primary treatment; black and white are reserved for where blue cannot hold contrast. Never
        introduce any other colour, tint or gradient.
      </p>
      <div className="grid3" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginTop: 16 }}>
        {LOGO_COLORS.map((c) => (
          <div className="card" key={c.name} style={{ padding: 0, overflow: 'hidden' }}>
            <div
              style={{
                background: c.hex,
                height: 96,
                display: 'grid',
                placeItems: 'center',
                padding: '0 24px',
                borderBottom: c.border ? '1px solid var(--line-2)' : 'none',
              }}
            >
              <LogoOn light={c.light} alt={`Edingrad wordmark on ${c.name}`} />
            </div>
            <div style={{ padding: '12px 14px' }}>
              <div className="nm" style={{ fontWeight: 600 }}>
                {c.name}
              </div>
              <div
                className="hx"
                style={{ fontSize: '.72rem', color: 'var(--low)', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}
              >
                {c.hex.toUpperCase()}
              </div>
              <div style={{ fontSize: '.74rem', color: 'var(--mid)' }}>{c.note}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 id="logo-clearspace" style={{ margin: '56px 0 8px' }}>
        Clear space
      </h3>
      <p>
        Maintain clear space around the wordmark equal to the cap-height of the &ldquo;E&rdquo; on
        all sides. Never crowd it with other elements, and keep it above a minimum legible size.
      </p>
      <div className="card" style={{ display: 'grid', placeItems: 'center', padding: 24, marginTop: 16 }}>
        <div style={{ border: '1px dashed var(--line-2)', padding: 'clamp(20px,4vw,40px)' }}>
          <LogoArt weight="thin" max={320} />
        </div>
      </div>

      <h3 id="logo-heritage" style={{ margin: '56px 0 8px' }}>
        Heritage mark
      </h3>
      <p>
        In the spirit of IBM&rsquo;s rebus, a playful heritage mark may stand in for the wordmark in
        rare celebratory contexts. It is never a substitute for the primary wordmark, never used in
        running communications, and always follows the same three-colour rule.
      </p>

      <h3 id="logo-usage" style={{ margin: '56px 0 16px' }}>
        Usage
      </h3>
      <DoDont
        dos={[
          'Use the Thin weight when the logo is large, and Bold only when it is small.',
          'Use the wordmark in Blue 60, black or white only.',
          'Maintain the clear-space and minimum-size rules.',
        ]}
        donts={[
          'Don’t use the Thin weight at small sizes where its hairlines break up.',
          'Don’t stretch, skew, outline, recolour or add effects.',
          'Don’t set it in any other font, or place it on busy / low-contrast backgrounds.',
        ]}
      />
    </Section>
  );
}
