import React from "react"

export const Nav = ({ items }) => {
    return (
    <nav>
        {items.map((item) => {
            return <a key={item.id} style={styles.links} href=''>{item.nombre}</a>
        })}
    </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}