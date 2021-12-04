import React from 'react';

import loadingImg from '../../Images/loadingImg.gif';
import styles from '../../Styles/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loadin_container}>
            <div className={styles.container}>
                <div>
                    <p>Picapica Pikachuu... </p>
                </div>
                <img src={loadingImg} alt="Loading" className={styles.containerImg} />
            </div>
        </div>
    )
}

export default Loading
