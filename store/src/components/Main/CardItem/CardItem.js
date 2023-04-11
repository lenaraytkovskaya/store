import React, {useState} from 'react';
import styles from './CardItem.module.css'
import apple from '../../../assets/img/Apple.png'
import airpods from '../../../assets/img/airpods.png'

const CardItem = () => {

    return (
        <div className={styles.cardItem}>
            <div className={styles.cardHeader}>
                <img src={apple} width={"20"} style={styles.cardLogo} alt="error"/>
                <p></p>
            </div>
            <div className={styles.cardPhoto}>
                <img src={airpods} alt=""/>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.cardTitle}>
                    Airpods
                </p>
                <div className={styles.cardInfo}>
                    <div className={styles.cardInfoTitle}>
                        <p>Brand</p>
                        <p>Model</p>
                        <p>Color</p>
                        <p>Type</p>
                    </div>
                    <div className={styles.cardInfoAbout}>
                        <p className={styles.cardInfoAboutItem}>Apple</p>
                        <p className={styles.cardInfoAboutItem}>Color</p>
                        <p className={styles.cardInfoAboutItem}>white</p>
                        <p className={styles.cardInfoAboutItem}>Headphones</p>
                    </div>

                </div>

                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default CardItem;
