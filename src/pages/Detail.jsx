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
    <section>
      <h1>Detail Page</h1>
      <p>Pokemon ID: {id}</p>

      <div>
        PokemonDetail
      </div>

      <pre>
        {JSON.stringify(pokemonData, null, 2)}
      </pre>
    </section>
  );
};

export default Detail;