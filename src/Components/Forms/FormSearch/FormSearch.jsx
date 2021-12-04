import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../Redux/Actions';
import styles from '../../../Styles/FormSearch.module.css';

const FormSearch = () => {
    const dispatch = useDispatch()
    //const types = useSelector(state => state.allTypes)
    const [nameSearch, setNameSearch] = useState('')
    const allPokemones = useSelector(state => state.allPokemones)    
    let aux=[]    
    for (let i = 0; i < allPokemones.length; i++) { Array.prototype.push.apply(aux, allPokemones[i].types) }
    let types = aux.filter((item,index)=>{return aux.indexOf(item) === index})
    const handleNameSearch = (e) => setNameSearch(e.target.value)
    const handleCreated = (e) => dispatch(actions.getPokemonesBd(e.target.value))
    const handleType = e => dispatch(actions.byType(e.target.value))
    const handleByOrder = (e) => dispatch(actions.byOrder(e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actions.getPokemonName(nameSearch))
        setNameSearch('')
     }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                        id="name"
                        className={styles.Buscar}
                        value={nameSearch}
                        onChange={handleNameSearch}
                        placeholder="Ingresa un nombre exacto..."
                    />
                    <input type="submit" value="Buscar" className={styles.Buscar1} />
                </div>
            </form>
                <div >
                    <select id="created" className={styles.Select} onChange={handleCreated}>
                        <option value="" >Filtar por...</option>
                        <option value="false" >La Api</option>
                        <option value="true" >Creados</option>
                    </select>
                </div>
                <div >
                    <select name="type" className={styles.Select} onChange={handleType}>
                        <option value="" >Filtar por tipo</option>
                        {
                            types?.map(t => (
                                <option value={t} key={t}>{t}</option>
                            ))
                        }
                    </select>
                </div>
                <div >
                <select id="ordenar" className={styles.Select} onChange={handleByOrder}>
                        <option value="" >Ordenar...</option>
                        <option value="a-z" >A {'=>'} Z</option>
                        <option value="z-a" >Z {'=>'} A</option>
                        <option value="fuerza+" >Fuerza + </option>
                        <option value="fuerza-" >Fuerza - </option>
                    </select>
                </div>
        </div>
    )
}

export default FormSearch
