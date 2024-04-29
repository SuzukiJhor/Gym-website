import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className="stroke-text">Pronto </span>
                <span>Para o PRÓXIMO Nível ?</span>
            </div>
        
            <div>
                <span>Seu Shape </span>
                <span className="stroke-text">Com a Gente</span>
            </div>
        </div>

        <div className="right-j">
            <form action="" className="email-container">
                <input type="email" name="user-email" placeholder="Entre com seu E-mail" />
                <button className="btn btn-j">Ver Mais</button>
            </form>
        </div>
    </div>
  )
}

export default Join