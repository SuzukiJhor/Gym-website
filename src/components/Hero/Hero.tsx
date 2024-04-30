import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
import CountUp from 'react-countup';

function Hero() {
    const transition = {type: 'spring', duration: 3};

  return (
    <div className="hero">

        <div className="blur hero-blur"></div>
        <div className="left-h">

            <Header/>
            
            <div className="the-best-ad">
            <motion.div layout initial={{left: '238px'}} whileInView={{left: '8px'}} transition={transition} />
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
                    <span>
                        <CountUp end={140} start={100} duration={3} prefix="+ " />
                    </span>
                    
                    <span>Consultores Especialistas</span>
                </div>
                <div>
                    <span>
                        <CountUp end={978} start={900} duration={3} prefix="+ " />
                    </span>
                    <span>Membros Premiados</span>
                </div>
                <div>
                    <span>
                        <CountUp end={50} start={10} duration={3} prefix="+ " />
                    </span>
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

            <motion.div 
                className="heart-rate"
                
                transition={transition}

            >
                <img src={Heart} alt="Coração"/>
                <span>Frequencia Cardíaca</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className="hero-image"/>
            <motion.img 
                src={hero_image_back} 
                alt="" 
                className="hero-image-back"
                initial={{right: '11rem'}} 
                whileInView={{right: '20rem'}} 
                transition={transition}
            />
            
         
            <motion.div className="calories" initial={{right: '37rem'}} whileInView={{right: '28rem'}} transition={transition}>

                <img src={Calories} alt="Calorias"/>
                <div>
                    <span>Queima de Calorias</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero