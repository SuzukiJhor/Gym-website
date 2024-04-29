import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header">
            <span className="stroke-text">Estou pronto para Começar</span>
            <span>Sua Jornada</span>
            <span className="stroke-text">Agora é Com a Gente!</span>
        </div>

        <div className="plans">
            {plansData.map((plan, index)=>{
                console.log(plan)
                return (
                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, index)=>{
                                return (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={index}>{feature}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div>
                            <span>Veja mais benefícios</span>
                        </div>
                            <button className="btn">Saiba Mais</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Plans