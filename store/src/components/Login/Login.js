import React from 'react';
import styles from './Login.module.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h3>Login</h3>

                <div className={styles.inputBox}>
                    <input type="text" required='required'/>
                    <span>Username</span>
                </div>

                <div className={styles.inputBox}>
                    <input type="password" required='required'/>
                    <span>Password</span>
                </div>
                <p>Don't have an account? <Link to={'/signup'}>Sign up </Link></p>
                <button className={styles.button}>Enter</button>
            </div>
        </div>
    );
};

export default Login;
