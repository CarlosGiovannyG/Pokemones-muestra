import axios from 'axios';
import { GET_ALL_TYPES, LOADING, URL_TYPES } from '../Variables';


const Types = {

    getAllTypes: () => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true });
            axios.get(URL_TYPES)
                .then(respuesta => respuesta.data)
                .then(dato => {
                    dispatch({ type: GET_ALL_TYPES, payload: dato });
                })
                .catch(err => console.log(err));
        }
    },
}

export default Types;