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
                    vercel={'https://projeto-nu-kenzie.vercel.app/'}
                    repo={'https://github.com/eucamila22/portfolio-eucamila22'}
                />
                <CardProjects
                    name={'Kenzie Burguer'}
                    img={Burguer}
                    vercel={'hhttps://burguer-kenzie-indol.vercel.app/'}
                    repo={'https://github.com/eucamila22/Burguer-Kenzie'}
                />
                <CardProjects
                    name={'Kenzie Hub'}
                    img={Hub}
                    vercel={'https://react-entrega-kenzie-hub-eucamila22.vercel.app/'}
                    repo={'https://github.com/eucamila22/Kenzie-Hub'}
                />
            </div>
        </ProjectsPageStyled>
    )
}

export default ProjectsPage
