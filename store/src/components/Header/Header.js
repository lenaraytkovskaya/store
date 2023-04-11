import React, {useEffect, useRef, useState} from 'react';
import styles from './Header.module.css'
import './../../App.css'
import { CartDash } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {
    const [searchText, setSearchText] = useState('')
    const [showCart, setShowCart] = useState(false);
    const [showPerson, setShowPerson] = useState(false);

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowCart(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const handleClosePerson = () => setShowPerson(false);
    const handleShowPerson = () => setShowPerson(true);

    return (
        <div className={styles.container + ' ' + 'App_background_header' } >
            <div className={styles.container_logo}>
                <button className={styles.button_logo}>
                    <h1 className={'App_logo'}>SACCADE</h1>
                </button>
            </div>
            <div className={styles.search_container}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className={styles.input} placeholder={"Search..."} type="text"
                           onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                    <button className={styles.button_search}> <Search color="black" size={24} /> </button>
                </form>

            </div>
            <div className={styles.container_basket} ref={ref}>
                <button className={styles.button_container} onClick={() => setShowCart(true)}> <CartDash color="white" size={24} /> </button>
                {showCart && <div className={styles.popup_wrapper}>
                    <div className={styles.popup_main_text}>
                        <h1>Basket</h1>
                        <hr className={styles.hr}/>
                    </div>
                </div>}

                <button className={styles.button_container}> <Person color="white" size={24} /> </button>
            </div>

        </div>
    );
};

export default Header;
