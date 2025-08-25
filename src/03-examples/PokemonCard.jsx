import { useEffect, useState } from "react";

export const PokemonCard = ({ data, sprites = [] }) => {
  const { id, name, stats } = data;
  const [mainImage, setMainImage] = useState(sprites[0] || "");

  useEffect(() => {
    setMainImage(sprites[0] || "");
  }, [sprites, name]);

  // Escala para que la barra no “reviente” (>100)
  const widthFromStat = (value) => {
    const max = 150; // 150 llena la barra
    const pct = Math.min(value, max) / max * 100;
    return `${pct}%`;
  };

  return (
    <section className="pokemon-card">
      {/* Cabecera */}
      <div className="pokemon-header">#{id} - {name}</div>

      {/* 2 columnas */}
      <div className="pokemon-content">
        {/* Columna izquierda: imágenes */}
        <div className="pokemon-images">
          {mainImage && (
            <img className="main-image" src={mainImage} alt={name} />
          )}
          <div className="small-images">
            {sprites.slice(0, 4).map((sprite) =>
              sprite ? (
                <img
                  key={sprite}
                  src={sprite}
                  alt={`${name}-sprite`}
                  onClick={() => setMainImage(sprite)}
                />
              ) : null
            )}
          </div>
        </div>

        {/* Columna derecha: estadísticas con color */}
        <div className="pokemon-stats">
          <h3>Estadísticas</h3>
          {stats.map((s) => {
            const key = s.stat.name; // hp, attack, defense, special-attack, special-defense, speed
            return (
              <div className="stat" key={key}>
                <span className={`stat-name ${key}`}>{key}</span>
                <div className="stat-bar">
                  <div
                    className={`stat-bar-fill ${key}`}
                    style={{ width: widthFromStat(s.base_stat) }}
                  >
                    {s.base_stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Eliminado el bloque de "dimensiones" */}
    </section>
  );
};

