class PokemonService {
    constructor(){
        this.pokelist = [];
        this.fetchedIds = [];
        this.flatlist = {};
        console.log("Constructor being called")
    }

    FetchList(page=1, limit=20, onFetchHandler) {
        const offset = limit * (page-1);
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then( httpResponse => httpResponse.json())
            .then( data => {
                if (onFetchHandler !== undefined){
                    let idsFetching = [];
                    let newData = {};
                    data.results.forEach((e)=>{
                        let id = this.ExtractId(e?.url);
                        newData[id] = e;
                        if (!this.fetchedIds.includes(id)){
                            idsFetching.push(this.FetchId(id));
                        } else {
                            newData[id]['value'] = this.flatlist[id];
                        }
                    });
                    Promise.allSettled(idsFetching).then( (allResponse)=> {
                        console.log("All Response", allResponse);
                        allResponse.forEach(({status, value})=>{
                            if (status=="fulfilled"){
                                this.flatlist[value?.id] = value
                                this.fetchedIds.push(value?.id);
                                newData[value?.id]['value'] = value;
                            }
                        });
                        onFetchHandler(Object.entries(newData).map(e=>e[1]), data.count);
                    });
                } else {
                    alert("Se Cargo los datos de Pokemon API");
                }
            })
            .catch((error)=>{
                alert("Error al cargar la lista de pokemon");
            });
    }
    FetchId(id){
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then( httpResponse => httpResponse.json()).then( jData => jData)
            .catch( e => {
                throw Error("Error to Load Pokemon Detail")
            })
    }
    ExtractId(url){
        let urlParts = (url ?? '').split('/');
        let pokemonId = urlParts[urlParts.length - 2];
        return Number(pokemonId);
    }
    GetPokemonById(id){
        console.log(this.fetchedIds);
        if(this.fetchedIds.includes(Number(id))) {
            return this.flatlist[id];
        }
        return {};
    }

}

export default PokemonService;