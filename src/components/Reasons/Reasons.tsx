import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

function Reasons() {
  return (
    <div className="reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r"> 
            <span>Algumas Razões</span>

            <div>
                <span className="stroke-text">Porque </span>
                <span>Continuam Nos Escolhendo ?</span>
            </div>

            <div className="details-r">
                <div>
                    <img src={tick} alt="" />
                    <span>+140 Treinadores Especializados </span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Performance Mais Inteligente e Mais Rápida</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Programas FREE para Novos Membros</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Parceiros confiáveis</span>
                </div>
            </div>

            <span className="partners-text">
                Nossos Parceiros
            </span>

            <div className="partners">
                <img src={nb} alt="New Balance" />
                <img src={adidas} alt="Adidas" />
                <img src={nike} alt="Nike" />
            </div>

        </div>
    </div>
  )
}

export default Reasons