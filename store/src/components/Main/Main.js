import React from 'react';
import styles from './Main.module.css'
import '../../App.css'
import Header from "../Header/Header";
import CardItem from "./CardItem/CardItem";

const Main = () => {
    return (
        <div className={styles.container}>

            <Header/>
            <body className={'App_background'}>
            <div className={styles.wrapper}>
                <div className={styles.cardContainer}>
                    <CardItem/>
                </div>
            </div>
            </body>

        </div>
    );
};

export default Main;
