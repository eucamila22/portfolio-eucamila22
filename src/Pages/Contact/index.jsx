import React from 'react'
import { ContactPageStyled } from './style'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { ImLinkedin } from 'react-icons/im'
import { BsGithub } from 'react-icons/bs'

const ContactPage = () => {
    return (
        <ContactPageStyled id='contact'>
            <div className='social-contact'>
                <MdLocalPhone className='icon' />
                <a href='https://wa.me/5511999188671' target='_blank' rel='noreferrer'>
                    11 99918-8671
                </a>
                <ImLinkedin className='icon' />
                <a href='https://www.linkedin.com/in/camilagdtavares/' target='_blank' rel='noreferrer'>
                    camilagdtavares
                </a>
                <BsGithub className='icon' />
                <a
                    href='https://github.com/eucamila22'
                    target='_blank'
                    rel='noreferrer'
                >
                    eucamila22
                </a>
                <MdEmail className='icon' />
                <a href='mailto:camila01101993@outlook.com' target='_blank' rel='noreferrer'>
                    camila01101993@outlook.com
                </a>
            </div>
        </ContactPageStyled>
    )
}

export default ContactPage
