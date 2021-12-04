import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Card.module.css'




const Card = ({ pokesToShow }) => {


    return (
        <>
            {
                pokesToShow.map(pok => (
                    <div className={styles.container} key={pok.id}>
                        <div className={styles.Ima}>
                            {pok.image && <img src={pok.image} alt="imagen" className={styles.Img} />}
                        </div>
                        <div className={styles.Lec}>
                            <h2>Nombre: {pok.name}</h2>
                            <div className={styles.containerLec}>
                                <label>Tipo:&nbsp;&nbsp; </label>
                                {pok.types.length === 1 ? (
                                    <h4>{pok.types[0]}  </h4>
                                ) : pok.types.length === 2 ? (
                                    <div>
                                        <h4>{pok.types[0]}  </h4>
                                        <h4>{pok.types[1]}  </h4>
                                    </div>
                                ) : pok.types.length === 3 ? (
                                    <div>
                                        <p>{pok.types[0]}  </p>
                                        <p>{pok.types[1]}  </p>
                                        <p>{pok.types[2]}  </p>
                                    </div>
                                ) : ('')
                                }
                            </div>
                            <Link to={`/pokemon/${pok.id}`}>
                                <button className={styles.CardButton} >Visitar</button>
                            </Link>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Card
