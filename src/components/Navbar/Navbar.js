import React from 'react';
import { Nav } from './Nav/Nav';
import CartWidget from '../CartWidget';
import logo from '../assets/Logo1.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ nombre, id, children}) => {

    const items = [
        { id: 1, nombre: 'Inicio', ruta:"/"},
        { id: 2, nombre: 'Shonen', ruta:"/categoria/shonen"},
        { id: 3, nombre: 'Shoujo', ruta:"/categoria/shoujo"},
        { id: 4, nombre: 'Seinen', ruta:"/categoria/seinen"},
    ]

    return (
        <header style={styles.container}>
            <Link to="/">
                <img style={styles.imagen} src={logo} alt="logo" />
            </Link>
                <h1> Bienvenido a Dragon's Shop</h1>
                <Nav items={items}/>
            <Link to="/cart">
                <CartWidget />
            </Link>
                
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