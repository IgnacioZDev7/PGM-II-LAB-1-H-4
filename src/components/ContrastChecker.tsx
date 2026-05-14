
import React, { useState } from 'react';

// Componente de contraste que mantiene el color de fondo en estado.
const ContrastChecker: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('#646cff');

  return (
    <section className="contrast-tool">
      <h3>Prueba Contraste</h3>

      {/* Selector de color para cambiar el fondo del bloque */}
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      {/* Previsualización con texto negro y blanco para comprobar contraste */}
      <div className="preview-box" style={{ backgroundColor: bgColor }}>
        <p style={{ color: '#000000' }}>Texto Negro</p>
        <p style={{ color: '#ffffff' }}>Texto Blanco</p>
      </div>
    </section>
  );
};

export default ContrastChecker;