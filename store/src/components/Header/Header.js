import React from 'react';
import styles from './Header.module.css'
import './../../App.css'



const Header = () => {
    return (
        <div className={styles.container + ' ' + 'App_background_header' }>
            <div className={styles.container_logo}>
                <h1 className={'App_logo' + styles.container_logo}>SACCADE</h1>
            </div>
            <div className={styles.container_basket}>
                <i className="bi bi-cart-dash"></i>
            </div>
        </div>
    );
};

export default Header;
