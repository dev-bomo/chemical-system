type Props = {
  name: string;
  body: string;
};

const SECTION_LABELS = new Set([
  "FISA TEHNICA",
  "FIȘA TEHNICĂ",
  "GENERALITATI",
  "GENERALITĂȚI",
  "GENERALITATI:",
  "CARACTERISTICI TEHNICE",
  "CARACTERISTICI TEHNICE:",
  "AMBALARE, MARCARE, DEPOZITARE:",
  "TERMEN DE GARANTIE",
  "TERMEN DE GARANȚIE",
]);

export function ProductBody({ name, body }: Props) {
  const blocks = body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean)
    .filter((b) => b.toLowerCase() !== name.toLowerCase());

  return (
    <div className="prose-industrial max-w-3xl">
      {blocks.map((block, i) => {
        const upper = block.toUpperCase().replace(/Ă/g, "A").replace(/Ș/g, "S").replace(/Ț/g, "T");
        const isLabel =
          SECTION_LABELS.has(block.toUpperCase()) ||
          SECTION_LABELS.has(upper) ||
          /^(FISA|FIȘA|GENERAL|CARACTERISTICI|AMBALARE|TERMEN)/i.test(block);

        if (isLabel && block.length < 60) {
          return (
            <p key={i} className="tds-label">
              {block.replace(/:$/, "")}
            </p>
          );
        }

        // Compact technical table-ish lines into a definition-looking list
        if (/^\d+\.\s/.test(block) || /^(Nr\.|Aspect|Densitate|Punct|pH|Reziduu|Pierderi)/i.test(block)) {
          return (
            <p key={i} className="font-mono text-sm leading-relaxed text-steel-700">
              {block}
            </p>
          );
        }

        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
