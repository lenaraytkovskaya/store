import React from 'react';
import styles from './Main.module.css'
import  '../../App.css'
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <body className={'App_background'}>
                asd
            </body>
        </div>
    );
};

export default Main;
