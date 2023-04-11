import React from 'react';
import styles from './CardItem.module.css'

const CardItem = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardItem}>
                <div className={styles.cardHeader}>
                    <img src="" alt=""/>    
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
