import React from 'react'
import { CardProjectsStyled } from './style'

const CardProjects = ({ name, img, vercel, repo }) => {
    return (
        <CardProjectsStyled>
            <div class='project-card'>
                <img src={img} alt='' />
                <div class='info'>
                    <h4>{name}</h4>
                    <p>
                        <a href={repo} target={'_blank'} rel='noreferrer'>
                            Repositório
                        </a>
                    </p>
                    <p>
                        <a href={vercel} target={'_blank'} rel='noreferrer'>
                            Vercel
                        </a>
                    </p>
                </div>
                <div class='info-mobile'>
                    <h4>{name}</h4>
                    <div className='links'>
                        <a href={repo}>Repositório</a>
                        <a href={vercel} target={'_blank'} rel='noreferrer'>
                            Vercel
                        </a>
                    </div>
                </div>
            </div>
        </CardProjectsStyled>
    )
}

export default CardProjects
