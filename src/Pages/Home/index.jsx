import React from 'react'
import { HomePageStyled } from './style'

export const HomePage = () => {
    return (
        <HomePageStyled>
            <div  id='home'className='container-about-me'>
                <div>
                    <p>Olá, me chamo</p>
                    <h1>Camila Tavares</h1>
                    <p>e sou Desenvolvedora FrontEnd</p>
                </div>
            </div>
        </HomePageStyled>
    )
}
