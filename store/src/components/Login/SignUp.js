import React from 'react';
import styles from './Login.module.css'
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h3>Sign up</h3>

                <div className={styles.inputBox}>
                    <input type="text" required='required'/>
                    <span>Username</span>
                </div>

                <div className={styles.inputBox}>
                    <input type="password" required='required'/>
                    <span>Password</span>
                </div>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                <button>Enter</button>
            </div>
        </div>
    );
};

export default SignUp;
