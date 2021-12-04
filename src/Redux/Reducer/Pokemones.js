import {
    BY_ORDER,
    BY_TYPE,
    GET_ALL_POKEMONES,
    GET_POKEMONES_BD,
    GET_POKEMON_ID,
    GET_POKEMON_NAME,
    POST_POKEMON
} from "../Variables";


const Pokemon = {
    
    getAllPokemones: (state, action)=>{        
        if (action.type === GET_ALL_POKEMONES) {            
            return {
                ...state,
                allPokemones: action.payload,
                loading:false,
            }
        }
    },
   
   
    getPokemonesBd: (state, action) => {        
        if (action.type === GET_POKEMONES_BD) {            
            return {
                ...state,
                allPokemones: action.payload,
                loading:false,
            }
        }
    },
   
    getPokemonId: (state, action) => {        
        if (action.type === GET_POKEMON_ID) {            
            return {
                ...state,
                pokemonDetail: action.payload,
                loading:false,
            }
        }
    },
    
    getPokemonName: (state, action) => {        
        if (action.type === GET_POKEMON_NAME) {            
            return {
                ...state,
                allPokemones: action.payload,
                loading:false,
            }
        }
    },

    byType: (state, action) => {        
        if (action.type === BY_TYPE) {            
            return {
                ...state,
                type: action.payload,
                loading: false,
            }
        }
    },
   
    byOrder: (state, action) => {        
        if (action.type === BY_ORDER) {            
            return {
                ...state,
                order: action.payload,
                loading: false,
            }
        }
    },
   
    posPokemon: (state, action) => {        
        if (action.type === POST_POKEMON) {            
            return {
                ...state,
                response: action.payload,
                loading: false,
            }
        }
    },
}


export default Pokemon;