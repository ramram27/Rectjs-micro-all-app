import { useEffect, useState } from "react";

function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(res => res.json())
      .then(data => {
        Promise.all(
          data.results.map(p =>
            fetch(p.url).then(res => res.json())
          )
        ).then(details => setPokemon(details));
      });
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
        <h2>Pokeman Data</h2>
      {pokemon.map(p => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>{p.name}</h4>
          <img src={p.sprites.front_default} alt={p.name} />
          <p>Height: {p.height}</p>
          <p>Weight: {p.weight}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
