import React from 'react'
import Header from '../Header/Header';
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <div></div>
                <span>O Melhor Fitness Club Do Rolê</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span>You</span>
                </div>
                <div>
                    <span>Carcaça Ideal</span>
                </div>
                <div>
                    <span>Aqui voce conseguirá ajuda para Atingir sua Shape Ideal 
                        E Viver a vida com Excelência!</span>
                </div>
            </div>
        </div>
        <div className="figures">
            <div>
                <span>+140</span>
                <span>Consultores Especialistas</span>
            </div>
            <div>
                <span>+978</span>
                <span>Membros Premiados</span>
            </div>
            <div>
                <span>+50</span>
                <span>Programas Fitness</span>
            </div>

            <div className="hero-buttons">
                <button className="btn">Começar</button>
                <button className="btn">Ver Mais</button>
            </div>
        </div>
        <div className="right-h">
            Lado Direito
        </div>
    </div>
  )
}

export default Hero