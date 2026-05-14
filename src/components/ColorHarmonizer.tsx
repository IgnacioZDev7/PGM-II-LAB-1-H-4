
import { useState } from "react";
import '../styles/ColorHarmonizer.scss';

const getHarmonies = (h: number) => [
  { type: 'Base', val: `hsl(${h}, 70%, 50%)` },
  { type: 'Complementario', val: `hsl(${(h + 180) % 360}, 70%, 50%)` },
  { type: 'Triada A', val: `hsl(${(h + 120) % 360}, 70%, 50%)` },
  { type: 'Triada B', val: `hsl(${(h + 240) % 360}, 70%, 50%)` },
];

const ColorHarmonizer = () => {
  const [hue, setHue] = useState<number>(180);
  const harmonies = getHarmonies(hue);

  return (
    <section className="harmonies">
      <h2>Objeto de armonía de color</h2>
      <p className="subtitle">Selecciona un color base y observa los 4 tonos en un solo objeto.</p>
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(parseInt(e.target.value))}
      />
      <div className="color-object">
        {harmonies.map((c) => (
          <div key={c.type} className="face" style={{ backgroundColor: c.val }}>
            <span>{c.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorHarmonizer;