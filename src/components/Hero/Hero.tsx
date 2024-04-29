import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

function Hero() {
  return (
    <div className="hero">

        <div className="blur hero-blur"></div>
        <div className="left-h">

            <Header/>
            
            <div className="the-best-ad">
                <div></div>
                <span>O Melhor Fitness Club Do Rolê</span>
            </div>
            <div className="hero-text">
                <div>
                    <span>your</span>
                    <span className='stroke-text'>Shape</span>
                </div>
                <div>
                    <span>Carcaça Ideal</span>
                </div>
                <div>
                    <span>Aqui voce conseguirá ajuda para Atingir sua Shape Ideal 
                        E Viver a vida com Excelência!</span>
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
             </div>
             <div className="hero-buttons">
                <button className="btn">Começar</button>
                <button className="btn">Ver Mais</button>
            </div>
        </div>
       

        <div className="right-h">
            <button className="btn">Entrar</button>

            <div className="heart-rate">
                <img src={Heart} alt="Coração"/>
                <span>Frequencia Cardíaca</span>
                <span>116 bpm</span>
            </div>

            <img src={hero_image} alt="" className="hero-image"/>
            <img src={hero_image_back} alt="" className="hero-image-back"/>
            
            <div className="calories">
                <img src={Calories} alt="Calorias"/>
                <div>
                    <span>Queima de Calorias</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero