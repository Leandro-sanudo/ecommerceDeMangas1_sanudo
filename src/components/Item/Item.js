import React from "react"
import { Link } from "react-router-dom"
import { Box, Image, VStack, Text, Divider } from '@chakra-ui/react'

const Item = ({ title }) => {
    return(
        <VStack spacing='10' >
            <Box shadow='md' border='8px' padding='5' bg='beige'alignItems='center' key={title.category}>
            
                <Link to={`/detalles/${title.id}`}>
                    <Image src={title.pictureUrl} alt={title.title} />
                </Link>
                <Text textAlign='center' fontSize='4xl'>{title.title}</Text>
                <Text textAlign='center' fontSize='2x1'>${title.price}</Text>
                <Divider orientation="horizontal"/>
            
            </Box>
        </VStack>
    )
}

//const stylez = {
//    cards: {
//        display: "grid",
//        alignContent: "center",
//        gridTemplateColumns: "repeat(2,1fr)",
//        gap: "1fr",
//    }
//}

//<div style={stylez} key={title.category}>
//            <h2>{title.title}</h2>
//            <Link to={`/detalles/${title.id}`}>
//                <img src={title.pictureUrl} alt={title.title}/>
//            </Link>
//            <h3>${title.price}</h3>
//        </div>

export { Item }