import Logo from 'Components/Logo';
import styles from './Cabecalho.module.css';


import React from 'react'
import BarraPesquisa from 'Components/BarraPesquisa';

function Cabecalho() {
    return (
        <header>
            <Logo />
            <BarraPesquisa placeholder="Busque por algo" />
        </header>
    )
}

export default Cabecalho;