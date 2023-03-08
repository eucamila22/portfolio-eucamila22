import React, { useContext } from 'react'
import { CgMenu } from 'react-icons/cg'
import { DropDownStyled } from './style'
import { DropDownMenuContext } from '../../Contexts'
import { motion } from 'framer-motion'

const DropDown = () => {
    const { dropdown, handleDropdown } = useContext(DropDownMenuContext)

    return (
        <DropDownStyled className='menu-mobile'>
            <CgMenu className='dropDown-icon' onClick={() => handleDropdown()} />
            {dropdown && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='dropDown-content'>
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
                </motion.div>
            )}
        </DropDownStyled>
    )
}

export default DropDown