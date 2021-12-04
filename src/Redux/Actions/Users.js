import axios from 'axios';
import { LOADING, URL_USER_LOGIN, POST_REGISTER, POST_LOGIN, URL_USERS_REGISTER, OUTH_LOGIN, URL_USERS, GET_POKES_USER } from '../Variables';



const Users = {
    // username
    // name
    // second_name
    // last_name
    // second_last_name
    // phone
    // email
    // image
    // password

    register: (user) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true })
            const formData = new FormData();
            formData.append('username', user.username);
            formData.append('name', user.name);
            formData.append('second_name', user.second_name);
            formData.append('last_name', user.last_name);
            formData.append('second_last_name', user.second_last_name);
            formData.append('phone', user.phone);
            formData.append('email', user.email);
            formData.append('image', user.image);
            formData.append('password', user.password);
            axios({
                url: URL_USERS_REGISTER,
                method: 'POST',
                data: formData
            })
                .then(respose => {
                    alert(respose.data)
                    dispatch({ type: POST_REGISTER, payload: respose.data })
                })
                .catch(err => console.error(err));
        }
    },

    login: (user) => {
        return (dispatch) => {
            dispatch({ type: LOADING, payload: true })
            axios.post(URL_USER_LOGIN, user)
                .then(response => response.data)
                .then(response => dispatch({ type: POST_LOGIN, payload: response }))
                .catch(err => console.error(err))
        }
    },


    outhLogin: (orden) => (dispatch) => dispatch(dispatch({ type: OUTH_LOGIN, payload: orden })),

    getPokesUser: (id) => {
        return (dispatch) => {
            dispatch(dispatch({ type: LOADING, payload: true }))            
            axios.get(`${URL_USERS}/${id}/poke`)
                .then(response => response.data)
                .then(dato => {
                dispatch({ type:GET_POKES_USER,payload:dato });
                })
                .catch(err => {
                console.log(err);
            })
        }
    },
}

export default Users;