import React from 'react'
import DropDown from '../DropDown'
import { HeaderComponentStyled } from './style'

const HeaderComponent = () => {
    return (
        <HeaderComponentStyled>
            <div>
                <div>
                    <p>Camila Tavares</p>
                </div>
                <div>
                    <DropDown />

                    <ul className='ul-desk'>
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
            </div>
        </HeaderComponentStyled>
    )
}

export default HeaderComponent
