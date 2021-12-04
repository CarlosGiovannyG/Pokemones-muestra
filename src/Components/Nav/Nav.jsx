import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../Redux/Actions';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Images/Logo.jpg';
import styles from '../../Styles/Nav.module.css';



const Nav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.userLogin)
    const login = useSelector(state => state.login)
    const enlaces = !login ? [
        { id: 1, title: 'Home', path: '/Pokemones-muestra' },
        { id: 2, title: 'Pokemones', path: '/pokemones' },
        { id: 3, title: 'Registrase', path: '/register' },
        { id: 4, title: 'Iniciar Sesion', path: '/login' },
    ] : [
            { id: 1, title: 'Home', path: '/Pokemones-muestra' },
        { id: 2, title: 'Pokemones', path: '/pokemones' },
        { id: 3, title: 'Crear', path: '/crear' },
        { id: 4, title: 'Mi Equipo', path: '/team' },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.outhLogin())
        navigate('/Pokemones-muestra')
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.ContainerLogo}>
                    <img src={logo} alt="Pokemones" className={styles.Logo} />
                </div>
                <nav className={styles.Nav}>
                    <ul className={styles.Ul}>
                        {
                            enlaces.map(en => (
                                <NavLink to={en.path} key={en.id} className={(navData) => navData.isActive ? styles.active : ''}
                                >
                                    <div>
                                        <li className={styles.Li}> {en.title}</li>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            {login &&
                <div className={styles.Dat1}>
                    <div className={styles.Dat}>
                        <label className={styles.DatLab}>{user.user.username} </label>                       
                    </div>
                    <input
                        type="submit"
                        name=""
                        value='Cerrar'
                        className={styles.Dat3}
                        onClick={handleSubmit}
                    />
                </div>
            }
        </div>
    )
}


export default Nav
