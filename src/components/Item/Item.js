import { products } from "../assets/Products"

const Item = ({ title }) => {
    console.log(title)
    return(
        <div style={stylez}>
            <h2>{products.title}</h2>
            <img src={products.pictureUrl} alt={products.title}/>
            <h3>${products.price}</h3>
        </div>
        
    )
}

const stylez = {
    cards: {
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "1fr",
    }
}

export { Item }