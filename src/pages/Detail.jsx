import { useParams } from "react-router";
import { usePokemonService } from "../context/Context";
import { useEffect, useState } from "react";

export const Detail = () => {
  const { id } = useParams();
  const pokemonServiceInstance = usePokemonService();

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await pokemonServiceInstance.GetPokemonById(id);
      setPokemonData(data);
    };

    getData();
  }, [id]);

  // 🔥 IMPORTANTE
  if (!pokemonData) {
    return <h1 className="text-white text-center mt-10">Cargando...</h1>;
  }

  return (
   <section className="text-white text-center p-10">
  <h1 className="text-3xl font-bold mb-4">
    {pokemonData.name.toUpperCase()}
  </h1>

  <img
    src={pokemonData.sprites.front_default}
    alt={pokemonData.name}
    className="mx-auto w-40"
  />

  <p className="mt-4">ID: {id}</p>

  <div className="mt-4">
    <h2 className="font-bold">Tipos:</h2>
    {pokemonData.types.map((t, i) => (
      <span key={i} className="mx-2 bg-green-500 px-3 py-1 rounded">
        {t.type.name}
      </span>
    ))}
  </div>
</section>
  );
};

export default Detail;