import React from "react"
import { Link, NavLink} from "react-router-dom"

export const Nav = ({ items }) => {
    return (
    <nav>
        {items.map((item) => {
            return <NavLink key={item.id} style={styles.links} to={item.ruta}>{item.nombre}</NavLink>
        })}
    </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}