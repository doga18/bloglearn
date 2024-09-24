import React from 'react'

import styles from "./Navbar.module.css";

import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
            {/* <Link to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </Link> */}
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    {/* Podemos verificar o isActive para determinar através de arrow function se setamos uma classe do css ou outra */}
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>Logar</NavLink>
                </li>
            </ul>            
        </nav>
    </div>
  )
}

export default Navbar