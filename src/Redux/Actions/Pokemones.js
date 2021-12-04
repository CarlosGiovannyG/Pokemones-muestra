import axios from 'axios';
import { BY_ORDER, BY_TYPE, GET_ALL_POKEMONES, GET_POKEMONES_BD, GET_POKEMON_ID, GET_POKEMON_NAME, LOADING, POST_POKEMON, URL_POKEMONES, URL_POKEMONES_NAME } from "../Variables";


const Pokemon = {

    getAllPokemones: () => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            axios.get(URL_POKEMONES)
                .then(respuesta => respuesta.data)
                .then(dato => {
                    dispatch({ type: GET_ALL_POKEMONES, payload: dato });
                })
                .catch(err => console.log(err));
        }
    },


    getPokemonesBd: (parameter) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            axios.get(`${URL_POKEMONES}?parameter=${parameter}`)
                .then(respuesta => respuesta.data)
                .then(dato => {
                    dispatch({ type: GET_POKEMONES_BD, payload: dato });
                })
                .catch(err => console.log(err));
        }
    },

    getPokemonId: (id) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            axios.get(`${URL_POKEMONES}${id}`)
                .then(respuesta => respuesta.data)
                .then(dato => {
                    dispatch({ type: GET_POKEMON_ID, payload: dato });
                })
                .catch(err => console.log(err));
        }
    },

    getPokemonName: (name) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            axios.get(`${URL_POKEMONES_NAME}?name=${name}`)
                .then(respuesta => respuesta.data)
                .then(dato => {
                    dispatch({ type: GET_POKEMON_NAME, payload: dato });
                })
                .catch(err => console.log(err));
        }
    },

    byType: (type) => (dispatch) => dispatch(dispatch({ type: BY_TYPE, payload: type })),

    byOrder: (order) => (dispatch) => dispatch(dispatch({ type: BY_ORDER, payload: order })),

    posPokemon: (newPokemon) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            const formData = new FormData();
            formData.append('name', newPokemon.name);
            formData.append('vida', newPokemon.vida);
            formData.append('fuerza', newPokemon.fuerza);
            formData.append('defensa', newPokemon.defensa);
            formData.append('velocidad', newPokemon.velocidad);
            formData.append('altura', newPokemon.altura);
            formData.append('peso', newPokemon.peso);
            formData.append('image', newPokemon.image);
            formData.append('tipos', newPokemon.tipos);
            formData.append('user_id', newPokemon.user_id);

            axios({
                url: URL_POKEMONES,
                method: 'POST',
                data: formData
            })
                .then(respose => {
                    alert(respose.data)
                    dispatch({ type: POST_POKEMON, payload: respose })
                })
                .catch(err => console.error(err));
        }
    }
}

export default Pokemon;