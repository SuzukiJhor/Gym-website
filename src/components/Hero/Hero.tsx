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
                    <span>Shape</span>
                    <span>You</span>
                </div>
                <div>
                    <span>Carcaça Ideal</span>
                </div>
            </div>
        </div>
        <div className="right-h">
    Lado Direito
        </div>
    </div>
  )
}

export default Hero