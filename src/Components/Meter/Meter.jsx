import React from 'react'
import styles from '../../Styles/Meter.module.css'


const Meter = ({valor,nombre}) => {   
    let clasContainer;     
    if (valor < 25) clasContainer = styles.container1
    if (valor > 25 &&valor < 60) clasContainer = styles.container2
    if (valor >= 60) clasContainer = styles.container



    return (
        <div className={clasContainer}>
            <p>
                {nombre} {'=>'}
                <meter
                    min='0'
                    max='120'
                    value={valor}
                    low='25'
                    high='60'
                    optimum='100'
                >
                    at 60/120
                </meter>
                {'=>'} {valor}
            </p>
        </div>
    )
}

export default Meter
