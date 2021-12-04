import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import actions from '../../Redux/Actions';

import styles from '../../Styles/CardDetail.module.css';
import Meter from '../Meter/Meter';


const CardDetail = () => {
    const dispatch = useDispatch();
    const pokemonId = useSelector(state => state.pokemonDetail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(actions.getPokemonId(id))
    }, [dispatch, id])
    const [existe, setExiste] = useState(false)
    useEffect(() => {
        if (pokemonId.map(e => (
            e.id === id
        ))) setExiste(true)
        else setExiste(false)
    }, [id, pokemonId])


    return (
        <div className={styles.container} >
            {existe &&
                pokemonId.map(e => (
                    <div key={e.id} className={styles.container1}>
                        <div className={styles.CardCentro} key={e.id}>

                            <div className={styles.Ima}>
                                {e.image && <img src={e.image} alt="imagen" className={styles.Img} />}
                            </div>

                            <div className={styles.Lec} key={e.id}>

                                <div className={styles.title}>
                                    {e.id && <p>#&nbsp;&nbsp; {e.id}</p>}
                                </div>
                                <div className={styles.title}>
                                    {e.name && <h3>Nombre:  {e.name}</h3>}
                                </div>
                                <div className={styles.title}>
                                </div>

                                <h3>Tipo: </h3>
                                {
                                    e.types.map(type => (
                                        <p key={type}>{type}</p>

                                    ))
                                }
                                {e.attack && <Meter valor={e.attack} nombre='Ataque' />}
                                {e.defense && <Meter valor={e.defense} nombre='Defensa' />}
                                {e.height && <Meter valor={e.height} nombre='Altura' />}
                                {e.special_attack && <Meter valor={e.special_attack} nombre='Ataque E.' />}
                                {e.special_defense && <Meter valor={e.special_defense} nombre='Defensa E.' />}
                                {e.speed && <Meter valor={e.speed} nombre='Velocidad' />}
                                {e.weight && <Meter valor={e.weight} nombre='Peso' />}


                            </div>
                        </div>
                    </div>
                ))
            }
            <Link to='/pokemones'>
                <button className={styles.CardCentroButton}  >Volver</button>
            </Link>
            {!existe &&
                <h1>
                    no
                </h1>
            }
        </div>
    );
}

export default CardDetail;