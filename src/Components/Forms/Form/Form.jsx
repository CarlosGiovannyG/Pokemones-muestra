import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from '../../../Redux/Actions'
import { Link, useNavigate } from 'react-router-dom';
import styles from "../../../Styles/Form.module.css"


const validateErrors = (newPoke) => {
    let errors = {};
    if (!newPoke.name) errors.name = 'Campo Obligatorio';
    if (/(?=[^0-9])/.test(newPoke.vida)) errors.vida = "Solo números";
    if (/(?=[^0-9])/.test(newPoke.fuerza)) errors.fuerza = "Solo números";
    if (/(?=[^0-9])/.test(newPoke.defensa)) errors.defensa = "Solo números";
    if (/(?=[^0-9])/.test(newPoke.velocidad)) errors.velocidad = "Solo números";
    if (/(?=[^0-9])/.test(newPoke.altura)) errors.altura = "Solo números";
    if (/(?=[^0-9])/.test(newPoke.peso)) errors.peso = "Solo números";
    return errors;
}



const Forms = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputFileRef = useRef()
    const types = useSelector(state => state.allTypes)
    const user = useSelector(state => state.userLogin)
    const [errors, setErrors] = useState({});
    const [newPoke, setNewPoke] = useState({
        name: "",
        vida: 0,
        fuerza: 0,
        defensa: 0,
        velocidad: 0,
        altura: 0,
        peso: 0,
        image: '',
        tipos: [],
        user_id: user.user.id,
    })
    const handleInputs = (e) => {
        setNewPoke({ ...newPoke, [e.target.name]: e.target.value });
        setErrors(validateErrors({ ...newPoke, [e.target.name]: e.target.value }))
    }
    const handleSelect = (e) => { setNewPoke({ ...newPoke, tipos: [...newPoke.tipos, e.target.value] }) }
    const handleImage = () => { setNewPoke({ ...newPoke, image: inputFileRef.current.files[0] }) }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.posPokemon(newPoke))
        setNewPoke({
            name: "",
            vida: 0,
            fuerza: 0,
            defensa: 0,
            velocidad: 0,
            altura: 0,
            peso: 0,
            image: '',
            tipos: [],
            user_id: ''
        })
        navigate('/pokemones')
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.container}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.Titulo}><h4>Que vuele tu imaginación!</h4></div>
                    <p className={errors.name ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.name ? (<label >{errors.name}</label>) : <label >Dale un nombre</label>}
                            <input
                                type='tex'
                                name='name'
                                value={newPoke.name}
                                className={styles.InputName}
                                onChange={handleInputs}
                                required
                                placeholder='Ingresa el nombre ...'
                            />
                        </div>
                    </p>
                    <p className={errors.vida ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.vida ? (<label >{errors.vida}</label>) : <label >Dale Vida</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="vida"
                                value={newPoke.vida}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={errors.fuerza ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.fuerza ? (<label >{errors.fuerza}</label>) : <label >Qué fuerza tiene?</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="fuerza"
                                value={newPoke.fuerza}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={errors.defensa ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.defensa ? (<label >{errors.defensa}</label>) : <label >Qué defensa tiene?</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="defensa"
                                value={newPoke.defensa}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={errors.velocidad ? styles.Errores : styles.Numero}>
                        <div className={styles.Label}>
                            {errors.velocidad ? (<label >{errors.velocidad}</label>) : <label >Qué velocidad tiene?</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="velocidad"
                                value={newPoke.velocidad}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={errors.altura ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.altura ? (<label >{errors.altura}</label>) : <label >Qué altura tiene?</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="altura"
                                value={newPoke.altura}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={errors.peso ? styles.Errores : styles.Normal}>
                        <div className={styles.Label}>
                            {errors.peso ? (<label >{errors.peso}</label>) : <label >Qué peso tiene?</label>}
                            <input
                                className={styles.Inputs}
                                type="number"
                                name="peso"
                                value={newPoke.peso}
                                onChange={handleInputs}
                            />
                        </div>
                    </p>
                    <p className={styles.Normal}>
                        <div className={styles.Label}>
                            <label >Dale una imagen</label>
                            <input
                                type="file"
                                ref={inputFileRef}
                                id='image'
                                accept="image/*"
                                onChange={handleImage}
                            />
                        </div>
                    </p>
                    <div className={styles.Label}>
                        <label >Quá tipo es?</label>
                    </div>
                    <div className={styles.Selec}>
                        {
                            types.map(e => (
                                <div className={styles.Selec1} key={`Div${e.id}`}>
                                    <label key={`Label ${e.id}`}>{e.name} </label>
                                    <input type="checkbox" key={`Checkbox ${e.id}`}
                                        value={e.id}
                                        onChange={handleSelect}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <input type="submit" value="Crear" className={styles.Button} />
                </form>
                <Link to='/pokemones'>
                    <button className={styles.ButtonClose}  >X</button>
                </Link>
            </div>
        </div>
    );
};


export default Forms;
