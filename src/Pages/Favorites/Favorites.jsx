import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../Redux/Actions';
import Cards from '../../Components/Cards/Cards';
import FormSearch from '../../Components/Forms/FormSearch/FormSearch';
import Loading from '../../Components/Loading/Loading';
import styles from '../../Styles/Favorites.module.css';





const Favorites = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userLogin)
  const pokeFavorites = useSelector(state => state.pokeFavorites)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(actions.getPokesUser(user.user.id))
    
  }, [dispatch, user.user.id])



  return (
    <div className={styles.container}>
      <FormSearch />      
      {loading && <Loading/>}
      <Cards
        pokemons={pokeFavorites}
      />
    </div>
  )
}

export default Favorites

