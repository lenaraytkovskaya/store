import React from 'react';
import styles from './CardItem.module.css'
import apple from '../../../assets/img/Apple.png'

const CardItem = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardItem}>
                <div className={styles.cardHeader}>
                    <img src={apple} width={"200"} height={"100"} style={styles.cardLogo} alt="error"/>
                    <p></p>
                </div>
                <div className={styles.cardPhoto}>
                    
                </div>
                <div style={styles.cardFooter}>
                    <p>
                        
                    </p>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
