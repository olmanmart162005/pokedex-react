import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import PokemonService from '../services/PokemonAPI';
export const PokemonContext = createContext(null);


export const PokemonProvider =  ({children}) =>{
    const [isLoaded, setLoaded] = useState(false);
    const pokemonService = useMemo(()=>new PokemonService(), [isLoaded]);
    useEffect(()=>{
        setLoaded(true);
    }, [isLoaded]);
    return (
        <PokemonContext.Provider value={pokemonService} >
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemonService = ()=>{
    const context = useContext(PokemonContext);
    return context;
}