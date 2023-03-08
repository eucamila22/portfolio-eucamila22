import React from 'react'
import CardTech from '../../Components/CardTech'
import { HardSkillsPageStyled } from './style'
import HTML from '../../assets/html-5.png'
import CSS from '../../assets/css-3.png'
import JS from '../../assets/js.png'
import REACT from '../../assets/atom.png'
import NODEJS from '../../assets/nodejs.png'
import SQL from '../../assets/sql.png'
import POSTGRE from '../../assets/postgre.png'
import API from '../../assets/api.png'
import UIUX from '../../assets/ux.png'
import GITHUB from '../../assets/github.png'

const HardSkillsPage = () => {
    return (
        <HardSkillsPageStyled id='hardSkills'>
            <div className='container-skills'>
                <CardTech img={HTML} name={'HTML5'} />
                <CardTech img={CSS} name={'CSS3'} />
                <CardTech img={JS} name={'JavaScript'} />
                <CardTech img={REACT} name={'React'} />
                <CardTech img={NODEJS} name={'Node.Js'} />
                <CardTech img={SQL} name={'SQL'} />
                <CardTech img={POSTGRE} name={'Postgre'} />
                <CardTech img={API} name={'API'} />
                <CardTech img={UIUX} name={'UI/UX'} />
                <CardTech img={GITHUB} name={'GitHub'} />
            </div>
        </HardSkillsPageStyled>
    )
}

export default HardSkillsPage
