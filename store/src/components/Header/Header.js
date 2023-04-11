import React from 'react';
import styles from './Header.module.css'
import './../../App.css'

const Header = () => {
    return (
        <div className={styles.container + ' ' + 'App_background_header' }>
            <div className={styles.container_logo}>

            </div>
            <div className={styles.container_basket}>

            </div>
        </div>
    );
};

export default Header;
