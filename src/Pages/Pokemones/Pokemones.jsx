import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../Redux/Actions'
import Cards from '../../Components/Cards/Cards';
import FormSearch from '../../Components/Forms/FormSearch/FormSearch';
import Loading from '../../Components/Loading/Loading'
import styles from '../../Styles/Pokemones.module.css'


const Pokemones = () => {
    let pokemones = useSelector(state => state.allPokemones)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    useEffect(() => {
        dispatch(actions.getAllPokemones())
        dispatch(actions.getAllTypes())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <FormSearch />
            {loading && <Loading />}
            {!loading &&
                <Cards
                    pokemons={pokemones}
                />
            }
        </div>
    )
}

export default Pokemones
