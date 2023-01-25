import React from 'react'
import { HeaderComponentStyled } from './style'

export const HeaderComponent = () => {
    return (
        <HeaderComponentStyled>
            <div>
                <p>Camila Tavares</p>
                <ul>
                    <li>
                        <a href='#home'>Inicio</a>
                    </li>
                    <li>
                        <a href='#aboutMe'>Sobre Mim</a>
                    </li>
                    <li>
                        <a href='#hardSkills'>Hard Skills</a>
                    </li>
                    <li>
                        <a href='#projects'>Projetos</a>
                    </li>
                    <li>
                        <a href='#contact'>Contato</a>
                    </li>
                </ul>
            </div>
        </HeaderComponentStyled>
    )
}
