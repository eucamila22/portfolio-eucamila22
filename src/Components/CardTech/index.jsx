import React from 'react'
import { CardTechStyled } from './style'

const CardTech = ({ img, name }) => {
    return (
        <CardTechStyled>
            <img src={img} alt='' />
            <span>{name}</span>
        </CardTechStyled>
    )
}

export default CardTech
