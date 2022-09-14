import React from 'react';
import { Nav } from './Nav/Nav';
import CartWidget from '../CartWidget';
import logo from '../assets/Logo1.jpg';

const Navbar = ({ nombre, id, children}) => {

    const items = [
        { id: 1, nombre: 'Inicio' },
        { id: 2, nombre: 'Colecciones'},
        { id: 3, nombre: 'Combos'},
        { id: 4, nombre: 'Accesorios'},
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1> Bienvenido a Dragon's Shop</h1>
            <Nav items={items}/>
            <CartWidget />
        </header>
    )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagen: {
        width: "15%",
    }
}

export default Navbar