import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from '../../../Redux/Actions';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../../../Styles/Login.module.css";


const validateErrors = (userLogin) => {
    let errors = {};
    if (!userLogin.email) errors.email = 'Campo obligatorio';
    if (!userLogin.password) errors.password = 'Campo obligatorio';
    return errors;
}


const FormLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })
    const handleInputs = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
        setErrors(validateErrors({ ...userLogin, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.login(userLogin))
        setUserLogin({
            email: '',
            password: '',
        })
        navigate('/')
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.container}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.Titulo}><h4>Que bueno tenerte de vuelta!</h4></div>
                    <p className={errors.email ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.email ? (<label >{errors.email}</label>) : <label >Email &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; </label>}
                            <input
                                type='email'
                                name='email'
                                value={userLogin.email}
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
                                value={userLogin.password}
                                className={styles.InputName}
                                onChange={handleInputs}
                                placeholder='password ...'
                            />
                        </div>
                    </p>
                    <input type="submit" value="Iniciar Sesion" className={styles.Button} />
                </form>
                <Link to='/'>
                    <button className={styles.ButtonClose}>X</button>
                </Link>
            </div>
        </div>
    )
}

export default FormLogin
