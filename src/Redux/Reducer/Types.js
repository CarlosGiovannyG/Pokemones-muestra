import { GET_ALL_TYPES } from "../Variables";


const Types = {

    getAllTypes: (state, action) => {
        if (action.type === GET_ALL_TYPES) {
            return {
                ...state,
                allTypes: action.payload,
                loading: false,
            }
        }
    },
}


export default Types;