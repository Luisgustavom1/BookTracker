import React from 'react'
import Logo from '../assets/imgs/logo.png'
import '../styles/header.css'

export default function body(){
    return(
        <header>
            <div className='logo'>
                <img src={Logo} alt='Logo da book tracker'/>
            </div>
            <nav>
                <div class="about"><a target='_blank' rel='noreferrer' href='https://github.com/Luisgustavom1?tab=repositories'>Saiba mais</a></div>
                <div class="contact"><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/luis-gustavo-macedo-lousada-558080212/'>Contact</a></div>
            </nav>
        </header>
    )
}