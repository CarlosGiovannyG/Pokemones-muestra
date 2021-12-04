import {
  GET_POKES_USER,
  OUTH_LOGIN,
  POST_LOGIN,
  POST_REGISTER
} from "../Variables";

const Users = {

  register: (state, action)=>{
    
    if (action.type === POST_REGISTER) {      
      return {
        ...state,
        register: action.payload,
        loading: false,
      }
    }
  },

  login: (state, action) => {
    if (action.type === POST_LOGIN) {      
      return {
        ...state,
        userLogin: action.payload,
        login: true,
        loading:false,
      }
    }
  },
 
  outhLogin: (state, action) => {
    if (action.type === OUTH_LOGIN) {      
      return {
        ...state,
        userLogin: [],
        login: false,
        loading:false,
      }
    }
  },
  
  getPokesUser: (state, action) => {
    if (action.type === GET_POKES_USER) {     
      return {
        ...state,
        pokeFavorites:action.payload,
        loading:false,
      }
    }
  },
}

export default Users;