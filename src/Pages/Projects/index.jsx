import React from 'react'
import CardProjects from '../../Components/CardProjects'
import { ProjectsPageStyled } from './style'
import Nu from '../../assets/NU.jpg'
import Burguer from '../../assets/BURGUER.jpg'
import Hub from '../../assets/HUB.jpg'

const ProjectsPage = () => {
    return (
        <ProjectsPageStyled id='projects'>
            <div className='container-cards'>
                <CardProjects
                    name={'Nu Kenzie'}
                    img={Nu}
                    vercel={'https://nu-kenzie-camila-tavares-8pa704w0v-eucamila22.vercel.app/'}
                    repo={''}
                />
                <CardProjects
                    name={'Kenzie Burguer'}
                    img={Burguer}
                    vercel={'https://nu-kenzie-camila-tavares-8pa704w0v-eucamila22.vercel.app/'}
                    repo={''}
                />
                <CardProjects
                    name={'Kenzie Hub'}
                    img={Hub}
                    vercel={'https://react-entrega-kenzie-hub-eucamila22.vercel.app/'}
                    repo={''}
                />
            </div>
        </ProjectsPageStyled>
    )
}

export default ProjectsPage