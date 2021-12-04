import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from '../../../Redux/Actions'


import { Link, useNavigate } from 'react-router-dom';
import styles from "../../../Styles/Register.module.css"


const validateErrors = (newUser) => {

    let errors = {};

    if (!newUser.username) errors.username = 'Campo obligatorio';

    if (!newUser.name) errors.name = 'Campo obligatorio';
    else if (/(?=.*[0-9])/.test(newUser.name)) errors.name = 'Solo letras';
    
    if (/(?=.*[0-9])/.test(newUser.second_name)) errors.second_name = 'Solo letras';
    
    if (!newUser.last_name) errors.last_name = 'Campo obligatorio';
    else if (/(?=.*[0-9])/.test(newUser.last_name)) errors.last_name = 'Solo letras';
    
    if (/(?=.*[0-9])/.test(newUser.second_last_name)) errors.second_last_name = 'Solo letras';
    
    if (/(?=[^0-9])/.test(newUser.phone)) errors.phone = "Solo números";
    
    if (!newUser.email) errors.email = 'Campo obligatorio';
    
    if (!newUser.password) errors.password = 'Campo obligatorio';

    return errors;
}


const FormRegister = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    //const inputFileRef = useRef()



    const [errors, setErrors] = useState({});


    const [newUser, setNewUser] = useState({
        username: '',
        name: '',
        second_name: '',
        last_name: '',
        second_last_name: '',
        phone: '',
        email: '',
        image: '',
        password: '',
    })




    const handleInputs = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
        setErrors(validateErrors({ ...newUser, [e.target.name]: e.target.value }))
    }

    //const handleImage = () => { setNewUser({ ...newUser, image: inputFileRef.current.files[0] }) }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(actions.register(newUser))
       

        setNewUser({
            username: '',
            name: '',
            second_name: '',
            last_name: '',
            second_last_name: '',
            phone: '',
            email: '',
            image: '',
            password: '',
        })

        navigate(-1)
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.container}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.Titulo}><h4>Bienvenido a nuestro equipo!</h4></div>

                    <p className={errors.username ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.username ? (<label >{errors.username}</label>) : <label >Username</label>}

                            <input
                                type='tex'
                                name='username'
                                value={newUser.username}
                                className={styles.InputName}
                                onChange={handleInputs}
                                required
                                placeholder='username ...'
                            />
                        </div>
                    </p>

                    <p className={errors.name ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.name ? (<label >{errors.name}</label>) : <label >Nombre &nbsp;&nbsp;</label>}

                            <input
                                type='tex'
                                name='name'
                                value={newUser.name}
                                className={styles.InputName}
                                onChange={handleInputs}
                                required
                                placeholder='name ...'
                            />
                        </div>
                    </p>

                    <p className={errors.second_name ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.second_name ? (<label >{errors.second_name}</label>) : <label >S. Nombre </label>}

                            <input
                                type='tex'
                                name='second_name'
                                value={newUser.second_name}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='second_name ...'
                            />
                        </div>
                    </p>

                    <p className={errors.last_name ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.last_name ? (<label >{errors.last_name}</label>) : <label >Apellido &nbsp;&nbsp;</label>}

                            <input
                                type='tex'
                                name='last_name'
                                value={newUser.last_name}
                                className={styles.InputName}
                                onChange={handleInputs}
                                required
                                placeholder='last_name ...'
                            />
                        </div>
                    </p>

                    <p className={errors.second_last_name ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.second_last_name ? (<label >{errors.second_last_name}</label>) : <label >S. Apellido </label>}

                            <input
                                type='tex'
                                name='second_last_name'
                                value={newUser.second_last_name}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='second_last_name ...'
                            />
                        </div>
                    </p>

                    <p className={errors.phone ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.phone ? (<label >{errors.phone}</label>) : <label >Telefono &nbsp;&nbsp; </label>}

                            <input
                                type='tex'
                                name='phone'
                                value={newUser.phone}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='phone ...'
                            />
                        </div>
                    </p>

                    <p className={errors.email ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.email ? (<label >{errors.email}</label>) : <label >Email &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; </label>}

                            <input
                                type='email'
                                name='email'
                                value={newUser.email}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='email ...'
                            />
                        </div>
                    </p>


                    <p className={errors.password ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.password ? (<label >{errors.password}</label>) : <label >Password &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; </label>}

                            <input
                                type='password'
                                name='password'
                                value={newUser.password}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='password ...'
                            />
                        </div>
                    </p>

                    <input type="submit" value="Registrarse" className={styles.Button} />

                </form>
                <Link to='/Pokemones-muestra'>
                    <button className={styles.ButtonClose}  >X</button>
                </Link>
            </div>
        </div>
    )
}

export default FormRegister
