import { useParams } from "react-router";
import { usePokemonService } from "../context/Context";
export const Detail = ()=>{
    const { id } = useParams();
    const pokemonServiceInstance = usePokemonService();
    const pokemonData = pokemonServiceInstance.GetPokemonById(id);
    return (
        <section>
            <h1>Detail Page</h1>
            <p> Pokemon ID:  { id }</p>
            <div>
                PokemonDetail
            </div>
            <pre>
                {JSON.stringify(pokemonData, null, 2)}
            </pre>
        </section>
    )
}

export default Detail;