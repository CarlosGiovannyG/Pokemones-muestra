import {
    BY_ORDER,
    BY_TYPE,
    GET_ALL_POKEMONES,
    GET_ALL_TYPES,
    GET_POKEMONES_BD,
    GET_POKEMON_ID,
    GET_POKEMON_NAME,
    GET_POKES_USER,
    LOADING,
    OUTH_LOGIN,
    POST_LOGIN,
    POST_POKEMON,
    POST_REGISTER
} from "../Variables";
import Users from "./Users";
import Pokemon from "./Pokemones";
import Types from "./Types";

const initialState = {

    userLogin: [],
    register: '',
    pokeFavorites:[],

    allPokemones: [],
    pokemonDetail: [],
    type: '',
    order: '',
    response: '',

    allTypes: [],

    login: false,
    loading: false,
};


function reducer(state = initialState, action) {

    switch (action.type) {

        case POST_REGISTER: return Users.register(state, action)
        case POST_LOGIN: return Users.login(state, action)
        case OUTH_LOGIN: return Users.outhLogin(state, action)
        case GET_POKES_USER: return Users.getPokesUser(state, action)
        
        case GET_ALL_POKEMONES: return Pokemon.getAllPokemones(state, action)
        case GET_POKEMONES_BD: return Pokemon.getPokemonesBd(state, action)
        case GET_POKEMON_ID: return Pokemon.getPokemonId(state, action)
        case GET_POKEMON_NAME: return Pokemon.getPokemonName(state, action)
        case BY_TYPE: return Pokemon.byType(state, action)
        case BY_ORDER: return Pokemon.byOrder(state, action)
        case POST_POKEMON: return Pokemon.posPokemon(state, action)

        case GET_ALL_TYPES: return Types.getAllTypes(state, action)

        case LOADING: return { ...state, loading: action.payload }

        default: return state
    }


};

export default reducer;