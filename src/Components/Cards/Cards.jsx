import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Paginator from '../Paginator/Paginator';
import Card from '../Card/Card';
import Filters from '../../Redux/Filters';
import imagen from '../../Images/noHaypokImg.gif';
import styles from '../../Styles/Cards.module.css';

const Cards = ({ pokemons }) => {
    const type = useSelector(state => state.type)
    const order = useSelector(state => state.order)
    let pokemones = pokemons
    if (type) pokemones = Filters.type(type, pokemones)
    if (order) pokemones = Filters.order(order, pokemones)
    //* PAGINACION     
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPage] = useState(12)
    //* funcion para la paginacion
    const handlePaged = (e) => {
        if (e.target.id === 'back') {
            if (currentPage >= 1) {
                if (currentPage !== 1)
                    setCurrentPage(currentPage - 1);
            }
        } else if (e.target.id === 'next') {
            if (pokesToShow.length >= 9)
                setCurrentPage(currentPage + 1);
        } else
            setCurrentPage(Number(e.target.value));
    }
    //* ecuación matemtica para hallar los pokemones que voy a mostrar por pagina
    let pokesToShow = []
    if (pokemones.length) {
        pokesToShow = pokemones.slice(((currentPage - 1) * pokemonPage), (currentPage * pokemonPage))
    }



    return (
        <>

            {pokesToShow.length ?
                (<div className={styles.container}>
                    <Card pokesToShow={pokesToShow} />
                </div>) : (<div className={styles.containerImg}>
                    <div>
                        <p>No hay nada para mostrar</p>
                    </div>
                    <img src={imagen} alt="imagen" className={styles.containerImg2} />
                </div>)
            }
            <Paginator
                currentPage={currentPage}
                totalPokes={pokemones.length}
                pokemonPerPage={pokemonPage}
                handlePaged={handlePaged}
            />
        </>
    )
}

export default Cards
