import { Section } from '@/components/primitives/Section';
import { DoDont } from '@/components/primitives/ui';

export function Logo() {
  return (
    <Section
      id="logo"
      lead={
        <>
          The Edingrad wordmark is set in Palestra &mdash; high-contrast, confident, unmistakably
          editorial. It is the one fixed signature of the brand.
        </>
      }
    >
      <h3 id="logo">Wordmark</h3>
      <p>
        The wordmark is always set in Palestra and used in white or brand blue only. It is never
        recreated in another typeface, recoloured, or given effects.
      </p>
      <div
        className="card"
        style={{
          display: 'grid',
          placeItems: 'center',
          padding: '64px 24px',
          marginTop: 24,
        }}
      >
        <span style={{ fontFamily: "'Palestra', serif", fontWeight: 700, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-.02em' }}>
          Edingrad
        </span>
      </div>

      <h3 id="logo-clearspace" style={{ margin: '56px 0 8px' }}>
        Clear space
      </h3>
      <p>
        Maintain clear space around the wordmark equal to the cap-height of the &ldquo;E&rdquo; on
        all sides. Never crowd it with other elements, and keep it above a minimum legible size.
      </p>
      <div
        className="card"
        style={{ display: 'grid', placeItems: 'center', padding: 24, marginTop: 16 }}
      >
        <div style={{ border: '1px dashed var(--line-2)', padding: 'clamp(20px,4vw,40px)' }}>
          <span style={{ fontFamily: "'Palestra', serif", fontWeight: 700, fontSize: 'clamp(1.6rem,4vw,2.6rem)' }}>
            Edingrad
          </span>
        </div>
      </div>

      <h3 id="logo-usage" style={{ margin: '56px 0 16px' }}>
        Usage
      </h3>
      <DoDont
        dos={[
          'Use the wordmark in white or brand blue only.',
          'Maintain the clear-space and minimum-size rules.',
          'Place on the dark canvas or brand blue for contrast.',
        ]}
        donts={[
          'Don\u2019t stretch, skew, outline or add effects.',
          'Don\u2019t recolour or set in any font other than Palestra.',
          'Don\u2019t place on busy imagery or low-contrast backgrounds.',
        ]}
      />
    </Section>
  );
}
