import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Boton.gif';
import styles from '../../Styles/Home.module.css';


const Home = () => {

    

    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <h2>Ingresar</h2>
                    <Link to='/pokemones'>
                        <img src={logo} alt="entrar" />
                    </Link>
                </div>
        </div>
    )
}

export default Home
