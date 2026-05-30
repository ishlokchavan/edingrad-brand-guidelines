import { Section } from '@/components/primitives/Section';

const SCALE = [
  { name: 'Display', font: "'Palestra', serif", weight: 200, size: 'clamp(2.6rem,6vw,4.4rem)', sample: 'Aa', note: 'Palestra Thin \u2014 hero display only' },
  { name: 'H1 / Title', font: "'Palestra', serif", weight: 700, size: '2.4rem', sample: 'Section title', note: 'Palestra Bold \u2014 section titles' },
  { name: 'H3', font: "'Lynx Sans'", weight: 600, size: '1.5rem', sample: 'Subsection heading', note: 'Lynx Sans' },
  { name: 'Body', font: "'Lynx Sans'", weight: 400, size: '1.05rem', sample: 'Body copy sets the working tone of the brand.', note: 'Lynx Sans Regular' },
  { name: 'Small', font: "'Lynx Sans'", weight: 400, size: '.86rem', sample: 'Captions, metadata and labels', note: 'Lynx Sans' },
];

export function Typography() {
  return (
    <Section
      id="type"
      lead={
        <>
          Two typefaces carry the brand: Palestra, a high-contrast display serif, and Lynx Sans, a
          humanist sans for everything else.
        </>
      }
    >
      <h3 id="type">Typefaces</h3>
      <div className="grid2" style={{ marginTop: 24, alignItems: 'start' }}>
        <div className="card">
          <div style={{ fontFamily: "'Palestra', serif", fontWeight: 200, fontSize: '3.4rem', lineHeight: 1 }}>
            Palestra
          </div>
          <p style={{ marginTop: 12 }}>
            High-contrast display serif. Thin for hero display, Bold for section titles. Used
            sparingly &mdash; one Palestra moment per view.
          </p>
        </div>
        <div className="card">
          <div style={{ fontFamily: "'Lynx Sans'", fontWeight: 500, fontSize: '3.4rem', lineHeight: 1 }}>
            Lynx Sans
          </div>
          <p style={{ marginTop: 12 }}>
            Humanist sans in Light, Regular, Medium and Bold. Carries body copy, navigation, labels
            and data &mdash; everything that isn&rsquo;t display.
          </p>
        </div>
      </div>

      <h3 id="type-scale" style={{ margin: '56px 0 8px' }}>
        Type scale
      </h3>
      <p>
        A restrained scale keeps hierarchy legible. The &ldquo;one Palestra moment&rdquo; rule
        holds: hero display (Thin) and a Palestra title (Bold) never appear on the same view.
      </p>
      <table className="bp-table" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Role</th>
            <th>Typeface</th>
            <th>Sample</th>
          </tr>
        </thead>
        <tbody>
          {SCALE.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.note}</td>
              <td>
                <span style={{ fontFamily: row.font, fontWeight: row.weight, fontSize: row.size }}>{row.sample}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 id="type-specimens" style={{ margin: '56px 0 8px' }}>
        Specimens
      </h3>
      <div className="card" style={{ marginTop: 8 }}>
        <div style={{ fontFamily: "'Palestra', serif", fontWeight: 200, fontSize: 'clamp(2rem,5vw,3.4rem)', lineHeight: 1.05 }}>
          Disciplined progress compounds into trust.
        </div>
        <p style={{ marginTop: 16, maxWidth: 620 }}>
          Body copy in Lynx Sans Regular. The pairing balances the editorial authority of a
          high-contrast serif with the clarity and warmth of a humanist sans, so long-form guidance
          stays calm and readable while titles carry weight.
        </p>
      </div>
    </Section>
  );
}
