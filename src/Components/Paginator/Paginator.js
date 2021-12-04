import React from 'react';
import styles from '../../Styles/Paginator.module.css'

const Paginator = ({
    currentPage,
        totalPokes,
        pokemonPerPage,
    handlePaged
     }) => {
    const pageNumbers = []    
    for (let i = 1; i <= Math.ceil(totalPokes / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles.ContenedorButton}>
        { currentPage > 1 &&
            <button
                className={styles.anteriorButton}
                onClick={handlePaged} id='back'
            >&larr; Anterior </button>
        }           
            {
                pageNumbers.map(num => (
                    currentPage === num && <div
                        className={styles.numero}
                        id={num} key={`P` + num}>{`P` + num}</div>
                ))
            }            
            {currentPage > pageNumbers.length ? ("") : (<button
                className={styles.siguienteButton}
                onClick={handlePaged} id='next'
            > Siguiente &rarr;</button>)} 
        </div>
    )
}

export default Paginator;