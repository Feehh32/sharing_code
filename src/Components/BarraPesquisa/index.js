import styles from './BarraPesquisa.module.css';
import React from 'react';

function BarraPesquisa({placeholder}) {
  return (
    <>
        <input type="text" placeholder={placeholder} className={styles.pesquisa} />
    </>
  )
}

export default BarraPesquisa;