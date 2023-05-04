import styles from './Logo.module.css';

import React from 'react'

function Logo() {
    return (
            <a href="/" className={styles.logo}>
                <p>Sharing</p> 
                <p>Code</p> 
            </a>
    )
}

export default Logo