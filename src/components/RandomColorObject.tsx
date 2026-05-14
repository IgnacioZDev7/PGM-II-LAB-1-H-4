//importaciones de react
import { useEffect, useState } from 'react';
import '../styles/ColorHarmonizer.scss';

//se reutiliza la misma funcion de la armonia de colores
const getHarmonies = (h: number) => [
  { type: 'Base', val: `hsl(${h}, 70%, 50%)` },
  { type: 'Complementario', val: `hsl(${(h + 180) % 360}, 70%, 50%)` },
  { type: 'Triada A', val: `hsl(${(h + 120) % 360}, 70%, 50%)` },
  { type: 'Triada B', val: `hsl(${(h + 240) % 360}, 70%, 50%)` },
];

//se genera tiempo entre 2000 y 3000 ms.
const randomDelay = () => 2000 + Math.random() * 1000;

const RandomColorObject = () => {
  //estado local para el cambio de colores aleatorio
  const [hue, setHue] = useState<number>(() => Math.floor(Math.random() * 360));

  useEffect(() => {
    //se produce el cambio cada
    let timer = window.setTimeout(function schedule() {
      setHue(Math.floor(Math.random() * 360));
      timer = window.setTimeout(schedule, randomDelay());
    }, randomDelay());

    return () => window.clearTimeout(timer);
  }, []);

  const harmonies = getHarmonies(hue);

  return (
    <section className="harmonies">
      <h2>Objeto de color aleatorio</h2>

      {/*mismo cuadrado de 4 */}
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

export default RandomColorObject;