import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { PokemonCard } from './PokemonCard';

export const MCustomHooks = () => {
  const { counter, increment, decrement, reset, setCounter } = useCounter(1);
  const { data, isLoading } = useFetch(counter);

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // 1 a 898
    setCounter(randomId);
  };

  return (
    <div className="app-container">
      <h1 className="title">Pokédex</h1>

      {/* Botones centrados */}
      <div className="buttons-container">
        <button onClick={() => (counter > 1) ? decrement() : null}>Anterior</button>
        <button onClick={() => increment()}>Siguiente</button>
        <button onClick={handleRandom}>Aleatorio</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h2 className="subtitle">Información del Pokémon</h2>

      {
        (!isLoading && data) ? (
          <PokemonCard
            data={data}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny
            ]}
          />
        ) : (
          <h3 className="loading">Cargando...</h3>
        )
      }
    </div>
  )
}

