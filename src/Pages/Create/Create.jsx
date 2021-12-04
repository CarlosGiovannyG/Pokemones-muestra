import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import actions from '../../Redux/Actions';
import Forms from '../../Components/Forms/Form/Form';
import styles from '../../Styles/Create.module.css';
import FormRegister from '../../Components/Forms/FormRegister/FormRegister';
import FormLogin from '../../Components/Forms/FormLogin/FormLogin';

const Create = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    useEffect(() => {       
        dispatch(actions.getAllTypes())
    }, [dispatch])


    return (
        <div className={styles.container}>
            {pathname === '/crear' &&
            <Forms/>
            }
            {pathname === '/register' &&
            <FormRegister/>
            }
            {pathname === '/login' &&
            <FormLogin/>
            }
        </div>
    )
}

export default Create
