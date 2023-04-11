import React from 'react';
import styles from './Login.module.css'

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

                <button>Enter</button>
            </div>
        </div>
    );
};

export default Login;
